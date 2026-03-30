import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xqteklgmxdslndswaftn.supabase.co";
const MASTER_INVITE_CODE = "PINDOU";
const INVITE_LIMIT = 5;
const INVITE_BONUS = 2;
const TRIAL_DAYS = 3;

function genInviteCode(uid) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[parseInt(uid.replace(/-/g, "").slice(i * 4, i * 4 + 4), 16) % chars.length];
  }
  return code;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { uid, inviteCode } = req.body;
  if (!uid) return res.status(400).json({ error: "Missing uid" });

  // 检查 SERVICE_KEY 是否配置
  if (!process.env.SUPABASE_SERVICE_KEY) {
    console.error("[register] SUPABASE_SERVICE_KEY is not set!");
    return res.status(500).json({ error: "Server misconfiguration: missing service key" });
  }

  const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

  const myCode = genInviteCode(uid);
  const code = (inviteCode || "").trim().toUpperCase();

  // 先插入新用户基础 profile（insert，不覆盖已存在的）
  const baseProfile = {
    user_id: uid,
    invite_code: myCode,
    invite_count: 0,
    bonus_ai_count: 0,
  };

  // 用 upsert ignoreDuplicates 模式：只在不存在时插入，已存在就跳过
  const { error: insertErr } = await supabase
    .from("profiles")
    .upsert(baseProfile, { onConflict: "user_id", ignoreDuplicates: true });

  if (insertErr) {
    console.error("[register] Failed to insert base profile:", insertErr);
    return res.status(500).json({ error: insertErr.message });
  }

  let hasTrial = false;

  if (code) {
    if (code === MASTER_INVITE_CODE) {
      // 总推广码：给新用户加试用
      const trialExp = new Date(Date.now() + TRIAL_DAYS * 86400000).toISOString();
      const { error: trialErr } = await supabase
        .from("profiles")
        .update({ trial_expires_at: trialExp, invited_by: MASTER_INVITE_CODE })
        .eq("user_id", uid);

      if (trialErr) {
        console.error("[register] Failed to set trial (master code):", trialErr);
      } else {
        hasTrial = true;
      }
    } else {
      // 用户邀请码：查邀请人
      const { data: inviter, error: inviterErr } = await supabase
        .from("profiles")
        .select("user_id, invite_count, bonus_ai_count")
        .eq("invite_code", code)
        .maybeSingle(); // 用 maybeSingle 避免找不到时报错

      if (inviterErr) {
        console.error("[register] Error looking up inviter:", inviterErr);
      }

      if (inviter) {
        if (inviter.invite_count < INVITE_LIMIT) {
          // 给新用户加试用
          const trialExp = new Date(Date.now() + TRIAL_DAYS * 86400000).toISOString();
          const { error: trialErr } = await supabase
            .from("profiles")
            .update({ trial_expires_at: trialExp, invited_by: code })
            .eq("user_id", uid);

          if (trialErr) {
            console.error("[register] Failed to set trial (user invite):", trialErr);
          } else {
            hasTrial = true;
          }

          // 给邀请人加次数和 bonus
          const { error: bonusErr } = await supabase
            .from("profiles")
            .update({
              invite_count: inviter.invite_count + 1,
              bonus_ai_count: (inviter.bonus_ai_count || 0) + INVITE_BONUS,
            })
            .eq("user_id", inviter.user_id);

          if (bonusErr) {
            console.error("[register] Failed to update inviter bonus:", bonusErr);
          }
        } else {
          console.log("[register] Inviter has reached invite limit:", inviter.user_id);
        }
      } else {
        console.log("[register] Invite code not found:", code);
      }
    }
  }

  return res.status(200).json({
    success: true,
    hasTrial,
    inviteCode: myCode,
  });
}
