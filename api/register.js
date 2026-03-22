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

  // 用service_role key，绕过RLS
  const supabase = createClient(
    SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const myCode = genInviteCode(uid);
  const code = (inviteCode || "").trim().toUpperCase();
  let profileData = {
    user_id: uid,
    invite_code: myCode,
    invite_count: 0,
    bonus_ai_count: 0,
  };

  if (code) {
    if (code === MASTER_INVITE_CODE) {
      // 总推广码
      profileData.trial_expires_at = new Date(
        Date.now() + TRIAL_DAYS * 86400000
      ).toISOString();
      profileData.invited_by = MASTER_INVITE_CODE;
    } else {
      // 普通邀请码：找邀请人
      const { data: inviter } = await supabase
        .from("profiles")
        .select("user_id, invite_count, bonus_ai_count")
        .eq("invite_code", code)
        .single();

      if (inviter && inviter.invite_count < INVITE_LIMIT) {
        // 给新用户试用
        profileData.trial_expires_at = new Date(
          Date.now() + TRIAL_DAYS * 86400000
        ).toISOString();
        profileData.invited_by = code;

        // 给邀请人加次数
        await supabase
          .from("profiles")
          .update({
            invite_count: inviter.invite_count + 1,
            bonus_ai_count: (inviter.bonus_ai_count || 0) + INVITE_BONUS,
          })
          .eq("user_id", inviter.user_id);
      }
    }
  }

  // upsert新用户profiles
  const { error } = await supabase
    .from("profiles")
    .upsert(profileData, { onConflict: "user_id" });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({
    success: true,
    hasTrial: !!profileData.trial_expires_at,
    inviteCode: myCode,
  });
}
