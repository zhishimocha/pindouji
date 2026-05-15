import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://xqteklgmxdslndswaftn.supabase.co";
const INITIAL_AI_CREDITS = 3;

function getServiceKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { uid } = req.body || {};

  if (!uid) {
    return res.status(400).json({ error: "Missing uid" });
  }

  const serviceKey = getServiceKey();

  if (!serviceKey) {
    console.error("[register] Missing Supabase service key");
    return res.status(500).json({
      error: "Server misconfiguration: missing Supabase service key",
    });
  }

  const supabase = createClient(SUPABASE_URL, serviceKey);

  // 已有 profile 的用户，不重复赠送 AI 次数
  const { data: existingProfile, error: selectErr } = await supabase
    .from("profiles")
    .select("user_id, ai_credits")
    .eq("user_id", uid)
    .maybeSingle();

  if (selectErr) {
    console.error("[register] Failed to check existing profile:", selectErr);
    return res.status(500).json({ error: selectErr.message });
  }

  if (existingProfile) {
    return res.status(200).json({
      success: true,
      created: false,
      grantedCredits: false,
      aiCredits: Number(existingProfile.ai_credits || 0),
    });
  }

  // 新用户：只初始化基础 profile，并赠送 3 次 AI 识图体验
  const { data: insertedProfile, error: insertErr } = await supabase
    .from("profiles")
    .insert({
      user_id: uid,
      ai_credits: INITIAL_AI_CREDITS,
    })
    .select("user_id, ai_credits")
    .single();

  if (insertErr) {
    console.error("[register] Failed to insert profile:", insertErr);
    return res.status(500).json({ error: insertErr.message });
  }

  return res.status(200).json({
    success: true,
    created: true,
    grantedCredits: true,
    aiCredits: Number(insertedProfile?.ai_credits || INITIAL_AI_CREDITS),
  });
    }
