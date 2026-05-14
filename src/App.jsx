// VERSION: fluffy-fur-long-hair-css-2026-05-14
// VERSION: helper-grid-p2-five-ten-block-mode-2026-05-13
import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xqteklgmxdslndswaftn.supabase.co",
  "sb_publishable_FFxfIZn_lbYyA2ZUTNBlOw_NB-MFhyP"
);

// ══════════════ 升级弹窗 ══════════════
function UpgradeModal({T,onClose}){
  const plans=[
    {name:"月费",price:"¥9.9",sub:"公测限时",tag:"先试试看"},
    {name:"年费",price:"¥19.9",sub:"公测限时",tag:"推荐"},
    {name:"终身",price:"¥38.8",sub:"公测限时",tag:"一次买断"},
  ];
  const perks=[
    {icon:"🧰",title:"工具箱",desc:"记录豆板、豆针、豆铲规格与备注"},
    {icon:"📖",title:"拼豆日记",desc:"把每张作品的过程都留住"},
    {icon:"🔍",title:"缺色替换",desc:"快速找到可替代颜色"},
    {icon:"🤖",title:"AI识图",desc:"免费版限 5 次，Pro 无限识别"},
    {icon:"☁️",title:"云同步",desc:"换设备也不怕数据丢失"},
  ];
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 18px"}}
      onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:T.card,borderRadius:28,padding:"24px 18px",width:"100%",maxWidth:390,boxShadow:"0 20px 60px rgba(0,0,0,0.3)",fontFamily:"'Nunito',sans-serif",maxHeight:"86vh",overflowY:"auto"}}>
        <div style={{textAlign:"center",marginBottom:18}}>
          <div style={{fontSize:36,marginBottom:8}}>🌟</div>
          <div style={{fontSize:19,fontWeight:900,color:T.accent,marginBottom:6}}>开通 Pro，让拼豆更轻松一点</div>
          <div style={{fontSize:12,color:T.textMid,lineHeight:1.7}}>把零碎的记录、工具和库存，都整理得明明白白</div>
        </div>

        <div style={{fontSize:12,fontWeight:900,color:T.text,marginBottom:10}}>🧪 公测限时福利</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:10}}>
          {plans.map(p=>(
            <div key={p.name} style={{background:T.bg,border:`1.5px solid ${T.border}`,borderRadius:18,padding:"12px 8px",textAlign:"center"}}>
              <div style={{fontSize:11,fontWeight:900,color:T.text}}>{p.name}</div>
              <div style={{fontSize:18,fontWeight:900,color:T.text,margin:"6px 0 4px"}}>{p.price}</div>
              <div style={{fontSize:10,color:T.textMid,lineHeight:1.5}}>{p.sub}</div>
              <div style={{fontSize:10,color:T.textLight,fontWeight:800,marginTop:4}}>{p.tag}</div>
            </div>
          ))}
        </div>
        <div style={{fontSize:10,color:T.textLight,lineHeight:1.6,marginBottom:18,textAlign:"center"}}>
          公测结束后恢复原价：¥12/月 · ¥38.8/年 · ¥68.8终身
        </div>

        <div style={{fontSize:12,fontWeight:900,color:T.text,marginBottom:10}}>开通 Pro 后解锁：</div>
        <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:18}}>
          {perks.map(p=>(
            <div key={p.icon} style={{display:"flex",alignItems:"center",gap:10,background:T.bg,borderRadius:14,padding:"10px 12px",border:`1px solid ${T.border}`}}>
              <div style={{fontSize:22,flexShrink:0}}>{p.icon}</div>
              <div>
                <div style={{fontSize:12,fontWeight:800,color:T.text}}>{p.title}</div>
                <div style={{fontSize:10,color:T.textMid,marginTop:2,lineHeight:1.5}}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{background:T.bg,border:`1px dashed ${T.border}`,borderRadius:14,padding:"10px 12px",marginBottom:14}}>
          <div style={{fontSize:11,color:T.textMid,fontWeight:800,marginBottom:4}}>免费版本可使用</div>
          <div style={{fontSize:11,color:T.textMid,lineHeight:1.7}}>图纸管理、即将出炉、基础拼豆进度、本地数据保存</div>
        </div>

        <div style={{fontSize:11,color:T.textMid,textAlign:"center",marginBottom:12}}>拼豆本来就很快乐，记录它也应该轻松一点</div>

        <div style={{background:`linear-gradient(135deg,#ff8fa3,#ffd166,#4a9eff)`,borderRadius:50,padding:"13px 0",textAlign:"center",marginBottom:10,cursor:"pointer"}} className={`fur-btn`}
          onClick={()=>alert("联系大橘：v：daju_laila 开通Pro～")}>
          <div style={{fontSize:14,fontWeight:900,color:"#fff"}}>立即开通 Pro</div>
        </div>
        <button onClick={onClose}
          style={{width:"100%",padding:"11px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:"transparent",color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>
          先用免费版
        </button>
      </div>
    </div>
  );
}

// ══════════════ 登录/注册页 ══════════════
function JarLogo({ accent, size=110 }) {
  const [bouncing, setBouncing] = useState(null);
  const beads = [
    { cx: 44, cy: 72, r: 9, color: "#ff8fa3", id: 0 },
    { cx: 62, cy: 78, r: 8, color: "#4a9eff", id: 1 },
    { cx: 56, cy: 62, r: 7, color: "#ffd166", id: 2 },
    { cx: 38, cy: 60, r: 7, color: "#64e0a4", id: 3 },
    { cx: 70, cy: 65, r: 6, color: "#b37bdc", id: 4 },
  ];
  return (
    <div style={{ position: "relative", width: size, height: size, margin: "0 auto", cursor: "pointer" }}>
      <style>{`
        @keyframes beadBounce { 0%,100%{transform:translateY(0)} 30%{transform:translateY(-18px)} 60%{transform:translateY(-8px)} 80%{transform:translateY(-3px)} }
        .bead-bounce { animation: beadBounce 0.55s cubic-bezier(.36,.07,.19,.97) both; }
      `}</style>
      <svg viewBox="0 0 110 110" width={size} height={size}>
        {/* 罐子底部 */}
        <rect x="18" y="60" width="74" height="38" rx="10" fill={accent} opacity="0.18"/>
        {/* 罐子主体 */}
        <rect x="20" y="38" width="70" height="60" rx="12" fill="white" stroke={accent} strokeWidth="2.5"/>
        {/* 罐子高光 */}
        <rect x="26" y="44" width="12" height="40" rx="6" fill={accent} opacity="0.08"/>
        {/* 罐口 */}
        <rect x="26" y="32" width="58" height="14" rx="7" fill={accent} opacity="0.25"/>
        <rect x="30" y="34" width="50" height="10" rx="5" fill={accent} opacity="0.35"/>
        {/* 豆豆 */}
        {beads.map(b => (
          <circle
            key={b.id}
            className={bouncing === b.id ? "bead-bounce" : ""}
            cx={b.cx} cy={b.cy} r={b.r}
            fill={b.color}
            style={{ cursor: "pointer", filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.15))" }}
            onMouseDown={() => { setBouncing(b.id); setTimeout(() => setBouncing(null), 600); }}
            onClick={() => { setBouncing(b.id); setTimeout(() => setBouncing(null), 600); }}
          />
        ))}
        {/* 豆豆高光 */}
        {beads.map(b => (
          <circle key={"h"+b.id} cx={b.cx - b.r*0.3} cy={b.cy - b.r*0.3} r={b.r*0.35} fill="rgba(255,255,255,0.55)" style={{pointerEvents:"none"}}/>
        ))}
      </svg>
    </div>
  );
}

const MASTER_INVITE_CODE = "PINDOU";
const INVITE_LIMIT = 5;
const INVITE_BONUS = 2;
const TRIAL_DAYS = 3;

function genInviteCode(uid) {
  // 用uid生成6位邀请码
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[parseInt(uid.replace(/-/g,"").slice(i*4, i*4+4), 16) % chars.length];
  }
  return code;
}


// ══════════════ 云同步安全工具：单作品表 + 扣豆流水 ══════════════
function taskIdOf(task){
  return String(task?.id || task?.task_id || task?.taskId || `task_${Date.now()}_${Math.random().toString(36).slice(2,8)}`);
}
function taskNameOf(task){
  return String(task?.name || task?.title || "未命名");
}
function taskCreatedAtOf(task){
  return task?.createdAt || task?.doneDate || new Date().toISOString();
}
function taskDoneDateOf(task){
  return task?.doneDate || null;
}
function buildTaskRow(userId, task){
  const id = taskIdOf(task);
  const data = {...task, id};
  return {
    user_id: userId,
    task_id: id,
    name: taskNameOf(data),
    status: data.status || "todo",
    img: data.img || null,
    color_data: Array.isArray(data.colorData) ? data.colorData : [],
    data,
    created_at: taskCreatedAtOf(data),
    done_date: taskDoneDateOf(data),
    updated_at: new Date().toISOString(),
    deleted_at: data.deletedAt || null,
    stock_deducted: !!data.stockDeducted,
    deducted_at: data.deductedAt || null,
  };
}
function taskFromRow(row){
  const data = row?.data && typeof row.data === "object" ? row.data : {};
  return {
    ...data,
    id: data.id || row.task_id,
    name: data.name || row.name || "未命名",
    status: data.status || row.status || "todo",
    img: data.img ?? row.img ?? null,
    colorData: Array.isArray(data.colorData) ? data.colorData : (Array.isArray(row.color_data) ? row.color_data : []),
    createdAt: data.createdAt || row.created_at || null,
    doneDate: data.doneDate || row.done_date || null,
    deletedAt: data.deletedAt || row.deleted_at || null,
    stockDeducted: data.stockDeducted ?? row.stock_deducted ?? false,
    deductedAt: data.deductedAt || row.deducted_at || null,
  };
}
function normalizeColorEntries(entries){
  return (Array.isArray(entries)?entries:[])
    .map(x=>({id:String(x?.id||x?.color||"").trim().toUpperCase(),count:Number(x?.count||x?.amount||0)}))
    .filter(x=>x.id && Number.isFinite(x.count) && x.count>0);
}

function AuthPage({ T, tn, onLogin }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inviteInput, setInviteInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const inp = (ex = {}) => ({
    fontFamily: "'Nunito',sans-serif",
    border: `1.5px solid ${T.border}`,
    borderRadius: 12,
    background: tn === "sky" ? "#f8fbff" : T.card,
    color: T.text,
    outline: "none",
    padding: "12px 16px",
    fontSize: 14,
    width: "100%",
    boxSizing: "border-box",
    ...ex,
  });

  async function handleSubmit() {
    setErr(""); setMsg("");
    if (!email || !password) { setErr("请填写邮箱和密码～"); return; }
    setLoading(true);
    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) { setErr(error.message); setLoading(false); return; }
      const uid = data.user?.id;
      if (uid) {
        // 调服务端API处理邀请码，用service_role key绕过RLS
        const resp = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid, inviteCode: inviteInput.trim() }),
        });
        const result = await resp.json();
        if (result.hasTrial) {
          setMsg("注册成功！已获得3天Pro试用，直接登录吧～🎉");
        } else {
          setMsg("注册成功！直接登录就可以啦～");
        }
      } else {
        setMsg("注册成功！直接登录就可以啦～");
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setErr("邮箱或密码错误，请重试～");
      else onLogin(data.user);
    }
    setLoading(false);
  }

  return (
    <div style={{ position:"fixed", inset:0, background: T.bg, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "8vh", padding: "8vh 24px 24px", fontFamily: "'Nunito',sans-serif", overflow:"hidden" }}>
      <div style={{ width: "100%", maxWidth: 360 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <JarLogo accent={T.accent} />
          <div style={{ fontSize: 24, fontWeight: 900, color: T.accent, marginTop: 8, letterSpacing: 1 }}>拼豆记</div>
        </div>
        <div style={{ background: T.card, border: `1.5px solid ${T.border}`, borderRadius: 24, padding: 24, boxShadow: T.cardShadow }}>
          <div style={{ display: "flex", marginBottom: 20, background: T.accentSoft, borderRadius: 12, padding: 3, gap: 3 }}>
            {[["login", "登录"], ["signup", "注册"]].map(([m, l]) => (
              <button key={m} onClick={() => { setMode(m); setErr(""); setMsg(""); }}
                style={{ flex: 1, padding: "8px 0", borderRadius: 10, border: "none", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontSize: 13, fontWeight: 700, background: mode === m ? T.accent : "transparent", color: mode === m ? "#fff" : T.textMid, transition: "all 0.18s" }}>{l}</button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="邮箱地址" type="email" style={inp()} />
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="密码（至少6位）" type="password" style={inp()}
              onKeyDown={e => e.key === "Enter" && handleSubmit()} />
            {mode==="signup"&&(
              <input value={inviteInput} onChange={e=>setInviteInput(e.target.value)} placeholder="邀请码（选填）" style={inp({borderStyle:"dashed"})}/>
            )}
          </div>
          {err && <div style={{ marginTop: 10, fontSize: 12, color: T.danger, fontWeight: 600 }}>{err}</div>}
          {msg && <div style={{ marginTop: 10, fontSize: 12, color: "#4caf50", fontWeight: 600 }}>{msg}</div>}
          <button onClick={handleSubmit} disabled={loading}
            className={tn==="fluffy"?"fur-btn":""}
            style={{ marginTop: 16, width: "100%", padding: "12px 0", borderRadius: 50, border: "none", cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 800, background: T.accent, color: "#fff", opacity: loading ? 0.7 : 1 }}>
            {loading ? "处理中…" : mode === "login" ? "登录" : "注册"}
          </button>
        </div>
      </div>
    </div>
  );
}

const ALL_COLORS = [
  {id:"A1",hex:"#faf5cd"},{id:"A2",hex:"#fcfed6"},{id:"A3",hex:"#fcff92"},{id:"A4",hex:"#f7ec5c"},{id:"A5",hex:"#f0d83a"},{id:"A6",hex:"#fda951"},{id:"A7",hex:"#fa8c4f"},{id:"A8",hex:"#fdbda4"},{id:"A9",hex:"#f79d5f"},{id:"A10",hex:"#f47e38"},{id:"A11",hex:"#fedb99"},{id:"A12",hex:"#fda276"},{id:"A13",hex:"#fec667"},{id:"A14",hex:"#f75842"},{id:"A15",hex:"#fbf65e"},{id:"A16",hex:"#feff97"},{id:"A17",hex:"#fde173"},{id:"A18",hex:"#fcbf80"},{id:"A19",hex:"#fd7e77"},{id:"A20",hex:"#f9d66e"},{id:"A21",hex:"#fae393"},{id:"A22",hex:"#b38c9f"},{id:"A23",hex:"#e4c8ba"},{id:"A24",hex:"#f3f6a9"},{id:"A25",hex:"#ffd785"},{id:"A26",hex:"#ffc734"},
  {id:"B1",hex:"#dff13b"},{id:"B2",hex:"#64f343"},{id:"B3",hex:"#a1f586"},{id:"B4",hex:"#5ffd34"},{id:"B5",hex:"#39e158"},{id:"B6",hex:"#64e0a4"},{id:"B7",hex:"#3eae7c"},{id:"B8",hex:"#1d9b54"},{id:"B9",hex:"#2a5037"},{id:"B10",hex:"#9ad1ba"},{id:"B11",hex:"#627032"},{id:"B12",hex:"#1a6e3d"},{id:"B13",hex:"#c8e87d"},{id:"B14",hex:"#abe84f"},{id:"B15",hex:"#305335"},{id:"B16",hex:"#c0ed9c"},{id:"B17",hex:"#9eb33e"},{id:"B18",hex:"#e6ed4f"},{id:"B19",hex:"#26b78e"},{id:"B20",hex:"#cbeccf"},{id:"B21",hex:"#18616a"},{id:"B22",hex:"#0a4241"},{id:"B23",hex:"#343b1a"},{id:"B24",hex:"#e8faa6"},{id:"B25",hex:"#4e846d"},{id:"B26",hex:"#907c35"},{id:"B27",hex:"#d0e0af"},{id:"B28",hex:"#9ee5bb"},{id:"B29",hex:"#c6df5f"},{id:"B30",hex:"#e3fbb1"},{id:"B31",hex:"#b4e691"},{id:"B32",hex:"#92ad60"},
  {id:"C1",hex:"#f0fee4"},{id:"C2",hex:"#abf8fe"},{id:"C3",hex:"#a2e0f7"},{id:"C4",hex:"#44cdfb"},{id:"C5",hex:"#06aadf"},{id:"C6",hex:"#54a7e9"},{id:"C7",hex:"#3977ca"},{id:"C8",hex:"#0f52bd"},{id:"C9",hex:"#3349c3"},{id:"C10",hex:"#3cbce3"},{id:"C11",hex:"#2aded3"},{id:"C12",hex:"#1e334e"},{id:"C13",hex:"#cde7fe"},{id:"C14",hex:"#d5fcf7"},{id:"C15",hex:"#21c5c4"},{id:"C16",hex:"#1858a2"},{id:"C17",hex:"#02d1f3"},{id:"C18",hex:"#213244"},{id:"C19",hex:"#18869d"},{id:"C20",hex:"#1a70a9"},{id:"C21",hex:"#bcddfc"},{id:"C22",hex:"#6bb1bb"},{id:"C23",hex:"#c8e2fd"},{id:"C24",hex:"#7ec5f9"},{id:"C25",hex:"#a9e8e0"},{id:"C26",hex:"#42adcf"},{id:"C27",hex:"#d0def9"},{id:"C28",hex:"#bdcee8"},{id:"C29",hex:"#364a89"},
  {id:"D1",hex:"#acb7ef"},{id:"D2",hex:"#868dd3"},{id:"D3",hex:"#3554af"},{id:"D4",hex:"#162d7b"},{id:"D5",hex:"#b34ec6"},{id:"D6",hex:"#b37bdc"},{id:"D7",hex:"#8758a9"},{id:"D8",hex:"#e3d2fe"},{id:"D9",hex:"#d5b9f4"},{id:"D10",hex:"#301a49"},{id:"D11",hex:"#beb9e2"},{id:"D12",hex:"#dc99ce"},{id:"D13",hex:"#b5038d"},{id:"D14",hex:"#862993"},{id:"D15",hex:"#2f1f8c"},{id:"D16",hex:"#e2e4f0"},{id:"D17",hex:"#c7d3f9"},{id:"D18",hex:"#9a64b8"},{id:"D19",hex:"#d8c2d9"},{id:"D20",hex:"#9a35ad"},{id:"D21",hex:"#940595"},{id:"D22",hex:"#38389a"},{id:"D23",hex:"#eadbf8"},{id:"D24",hex:"#768ae1"},{id:"D25",hex:"#4950c2"},{id:"D26",hex:"#d4c6eb"},
  {id:"E1",hex:"#f6d4cb"},{id:"E2",hex:"#fcc1dd"},{id:"E3",hex:"#f6bde8"},{id:"E4",hex:"#e8649e"},{id:"E5",hex:"#f0569f"},{id:"E6",hex:"#eb4172"},{id:"E7",hex:"#c53674"},{id:"E8",hex:"#fddbe9"},{id:"E9",hex:"#e376c7"},{id:"E10",hex:"#d13b95"},{id:"E11",hex:"#f7dad4"},{id:"E12",hex:"#f693bf"},{id:"E13",hex:"#b5026a"},{id:"E14",hex:"#fad4bf"},{id:"E15",hex:"#f5c9ca"},{id:"E16",hex:"#fbf4ec"},{id:"E17",hex:"#f7e3ec"},{id:"E18",hex:"#f9c8db"},{id:"E19",hex:"#f6bbd1"},{id:"E20",hex:"#d7c6ce"},{id:"E21",hex:"#c09da4"},{id:"E22",hex:"#b38c9f"},{id:"E23",hex:"#937d8a"},{id:"E24",hex:"#debee5"},
  {id:"F1",hex:"#fe9381"},{id:"F2",hex:"#f63d4b"},{id:"F3",hex:"#ee4e3e"},{id:"F4",hex:"#f2a440"},{id:"F5",hex:"#e10328"},{id:"F6",hex:"#913635"},{id:"F7",hex:"#911932"},{id:"F8",hex:"#bb0126"},{id:"F9",hex:"#e0677a"},{id:"F10",hex:"#874628"},{id:"F11",hex:"#592323"},{id:"F12",hex:"#f3536b"},{id:"F13",hex:"#f45c45"},{id:"F14",hex:"#fcadb2"},{id:"F15",hex:"#d50527"},{id:"F16",hex:"#f8c0a9"},{id:"F17",hex:"#e89b7d"},{id:"F18",hex:"#d07f4a"},{id:"F19",hex:"#be454a"},{id:"F20",hex:"#c69495"},{id:"F21",hex:"#f2b8c6"},{id:"F22",hex:"#f7c3d0"},{id:"F23",hex:"#ed806c"},{id:"F24",hex:"#e09daf"},{id:"F25",hex:"#e84854"},
  {id:"G1",hex:"#ffe4d3"},{id:"G2",hex:"#fcc6ac"},{id:"G3",hex:"#f1c4a5"},{id:"G4",hex:"#dcb87f"},{id:"G5",hex:"#e7b34e"},{id:"G6",hex:"#e3a014"},{id:"G7",hex:"#985c3a"},{id:"G8",hex:"#713d2f"},{id:"G9",hex:"#e4b685"},{id:"G10",hex:"#da8c42"},{id:"G11",hex:"#dac898"},{id:"G12",hex:"#fec993"},{id:"G13",hex:"#b2714b"},{id:"G14",hex:"#8b684c"},{id:"G15",hex:"#f6f8e3"},{id:"G16",hex:"#f2d8c1"},{id:"G17",hex:"#77544e"},{id:"G18",hex:"#ffe3d5"},{id:"G19",hex:"#dd7d41"},{id:"G20",hex:"#a5452f"},{id:"G21",hex:"#b38561"},
  {id:"H1",hex:"#ffffff"},{id:"H2",hex:"#fbfbfb"},{id:"H3",hex:"#b4b4b4"},{id:"H4",hex:"#878787"},{id:"H5",hex:"#464648"},{id:"H6",hex:"#2c2c2c"},{id:"H7",hex:"#010101"},{id:"H8",hex:"#e7d6dc"},{id:"H9",hex:"#efedee"},{id:"H10",hex:"#ebebeb"},{id:"H11",hex:"#cdcdcd"},{id:"H12",hex:"#fdf6ee"},{id:"H13",hex:"#f4efd1"},{id:"H14",hex:"#ced7d4"},{id:"H15",hex:"#9aa6a6"},{id:"H16",hex:"#1b1213"},{id:"H17",hex:"#f0eeef"},{id:"H18",hex:"#fcfff6"},{id:"H19",hex:"#f2eee5"},{id:"H20",hex:"#96a09f"},{id:"H21",hex:"#f8fbe6"},{id:"H22",hex:"#cacad2"},{id:"H23",hex:"#9b9c94"},
  {id:"M1",hex:"#bbc6b6"},{id:"M2",hex:"#909994"},{id:"M3",hex:"#697e81"},{id:"M4",hex:"#e0d4bc"},{id:"M5",hex:"#d1ccaf"},{id:"M6",hex:"#b0aa86"},{id:"M7",hex:"#b0a796"},{id:"M8",hex:"#ae8082"},{id:"M9",hex:"#a68862"},{id:"M10",hex:"#c4b3bb"},{id:"M11",hex:"#9d7693"},{id:"M12",hex:"#644b51"},{id:"M13",hex:"#c79266"},{id:"M14",hex:"#c27563"},{id:"M15",hex:"#747d7a"},
];

const SERIES=["A","B","C","D","E","F","G","H","M"];
const INIT_STOCK=ALL_COLORS.reduce((a,c)=>({...a,[c.id]:1000}),{});
const INIT_USED=ALL_COLORS.reduce((a,c)=>({...a,[c.id]:0}),{});
function isDark(hex){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return(r*299+g*587+b*114)/1000<128;}
function gToBeads(g){return Math.round(g*100);}
function fmtG(g){const n=Math.round(g*100)/100;return Number.isInteger(n)?String(n):n.toFixed(2).replace(/\.?0+$/,"");}

const THEMES={
  sky:{name:"晴空蓝",icon:"☁️",bg:"#f0f7ff",card:"#ffffff",border:"#cce3ff",accent:"#4a9eff",accentLight:"#ddeeff",accentSoft:"#eaf4ff",warn:"#f5a623",warnBg:"#fff8ec",warnBorder:"#fde5b0",danger:"#ff6b6b",dangerBg:"#fff0f0",dangerBorder:"#ffd0d0",text:"#2c4a6e",textMid:"#6a90b8",textLight:"#a8c4e0",nav:"#ffffff",navBorder:"#dceeff",barBg:"#dceeff",bars:["#4a9eff","#72b4ff","#9acaff","#b8d8ff","#d4eaff"],switchBtn:"夜空 🌙",cardShadow:"0 4px 16px rgba(74,158,255,0.10)",floatShadow:"0 8px 32px rgba(74,158,255,0.20)",headerBg:"linear-gradient(135deg,#e8f4ff 0%,#f5f0ff 100%)",navActiveDot:"#4a9eff",toolboxPanelBg:"linear-gradient(180deg,#f8fcff 0%,#eef8ff 100%)",toolboxCatBg:"rgba(255,255,255,0.78)"},
  fluffy:{name:"毛绒甜莓",icon:"🐑",bg:"linear-gradient(180deg,#fff6fa 0%,#ffeff5 40%,#edf6ff 100%)",card:"linear-gradient(145deg,#fffcfa 0%,#fff3f7 54%,#f4faff 100%)",border:"#f0d4de",accent:"#d07a94",accentLight:"linear-gradient(145deg,#fff8fb 0%,#ffeff5 56%,#f5faff 100%)",accentSoft:"linear-gradient(145deg,#fff8fb 0%,#ffeff5 56%,#f5faff 100%)",warn:"#e8b47f",warnBg:"linear-gradient(145deg,#fff8ef 0%,#fff2e6 100%)",warnBorder:"#f1d8bf",danger:"#e08a9e",dangerBg:"linear-gradient(145deg,#fff5f7 0%,#ffedf1 100%)",dangerBorder:"#f2cdd6",text:"#5e4250",textMid:"#aa8494",textLight:"#cfadb8",nav:"linear-gradient(180deg,rgba(255,252,253,0.96) 0%,rgba(255,243,248,0.98) 100%)",navBorder:"#f0d4de",barBg:"#f5dde4",bars:["#df8fa4","#f0b8c7","#f7dbe2","#cfe3ef","#f5e2cf"],switchBtn:"晴空 ☁️",cardShadow:"0 14px 32px rgba(200,130,155,0.18), inset 0 2px 0 rgba(255,255,255,0.96), inset 0 -16px 24px rgba(255,255,255,0.52), inset 0 0 0 1px rgba(255,246,250,0.92)",floatShadow:"0 20px 48px rgba(200,130,155,0.20), inset 0 1px 0 rgba(255,255,255,0.96)",headerBg:"linear-gradient(135deg,#fffafc 0%,#ffeff6 58%,#edf6ff 100%)",navActiveDot:"#d07a94",toolboxPanelBg:"linear-gradient(180deg,#fff8fb 0%,#ffeff5 46%,#f4faff 100%)",toolboxCatBg:"linear-gradient(145deg,rgba(255,255,255,0.94) 0%,rgba(255,244,249,0.90) 100%)",plush:true,plushCard:"linear-gradient(145deg,#fffcfa 0%,#fff2f6 56%,#f3faff 100%)",plushChip:"linear-gradient(145deg,#fff7fa 0%,#ffeff5 58%,#f7faff 100%)",plushIcon:"linear-gradient(145deg,#fffdfb 0%,#fff0f6 58%,#ecf7ff 100%)",plushShadow:"0 16px 36px rgba(200,130,155,0.18), inset 0 2px 0 rgba(255,255,255,0.96), inset 0 -18px 26px rgba(255,255,255,0.52)",plushBorder:"#f2d4dd"},
  night:{name:"夜空黄",icon:"🌙",bg:"#0d1b2e",card:"#152236",border:"#1e3352",accent:"#ffd166",accentLight:"#2a2010",accentSoft:"#1e1808",warn:"#ffd166",warnBg:"#1e1808",warnBorder:"#3a3010",danger:"#ff8fa3",dangerBg:"#1e0810",dangerBorder:"#3a1020",text:"#d4e8ff",textMid:"#7a9cc0",textLight:"#304860",nav:"#0a1520",navBorder:"#1a2d44",barBg:"#1a2d44",bars:["#ffd166","#ffbb44","#ffa533","#ff8f22","#ff7a11"],switchBtn:"毛绒 🐑",cardShadow:"0 4px 16px rgba(0,0,0,0.4)",floatShadow:"0 8px 32px rgba(255,209,102,0.15)",headerBg:"linear-gradient(135deg,#0d1b2e 0%,#162540 100%)",navActiveDot:"#ffd166",toolboxPanelBg:"#152236",toolboxCatBg:"#0d1b2e"}
};
const THEME_ORDER=["sky","fluffy","night"];

const G=`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
.tt{transition:background 0.3s,color 0.3s,border-color 0.3s;}
@keyframes bb{0%,100%{transform:translateY(0) scale(1);}50%{transform:translateY(-6px) scale(1.08);}}
.fade{animation:fu 0.22s ease both;}
@keyframes fu{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
.cc{transition:transform 0.15s,box-shadow 0.15s,border 0.15s,opacity 0.15s;}
.cc:active{transform:scale(0.93)!important;opacity:0.8;}

/* ═══ 毛绒卡片 ═══ */
.fur-card{position:relative!important;isolation:isolate;overflow:hidden!important;background-clip:padding-box!important;}
.fur-card>*{position:relative;z-index:2;}
.fur-card::before{
  content:"";position:absolute;inset:0;border-radius:inherit;z-index:0;pointer-events:none;
  background:
    repeating-linear-gradient(8deg,rgba(255,182,203,.22) 0 1.2px,transparent 1.2px 5px),
    repeating-linear-gradient(172deg,rgba(255,218,230,.18) 0 1px,transparent 1px 6px);
  filter:blur(.8px);opacity:.85;}
.fur-card::after{
  content:"";position:absolute;inset:0;border-radius:inherit;z-index:1;pointer-events:none;
  background:
    radial-gradient(ellipse at 20% 18%,rgba(255,255,255,.80),transparent 38%),
    radial-gradient(ellipse at 78% 80%,rgba(255,210,228,.40),transparent 48%);
  box-shadow:
    inset 0 3px 0 rgba(255,255,255,.85),
    inset 0 -16px 24px rgba(255,255,255,.45),
    0 14px 28px rgba(210,130,160,.13);
  opacity:.92;mix-blend-mode:soft-light;}

/* ═══ 毛绒标签/按钮 ═══ */
.fur-chip{position:relative!important;isolation:isolate;overflow:hidden!important;}
.fur-chip>*{position:relative;z-index:2;}
.fur-chip::before{
  content:"";position:absolute;inset:0;border-radius:inherit;z-index:0;pointer-events:none;
  background:
    repeating-linear-gradient(10deg,rgba(255,192,210,.28) 0 1px,transparent 1px 4px),
    repeating-linear-gradient(170deg,rgba(255,230,240,.22) 0 1px,transparent 1px 4px);
  filter:blur(.5px);opacity:.80;}
.fur-chip::after{
  content:"";position:absolute;inset:0;border-radius:inherit;z-index:1;pointer-events:none;
  background:radial-gradient(ellipse at 22% 24%,rgba(255,255,255,.65),transparent 44%);
  opacity:.88;mix-blend-mode:soft-light;}

/* ═══ 毛绒图标框 ═══ */
.fur-icon{position:relative!important;isolation:isolate;overflow:hidden!important;}
.fur-icon::before{
  content:"";position:absolute;inset:0;border-radius:inherit;z-index:-1;pointer-events:none;
  background:
    repeating-linear-gradient(12deg,rgba(255,186,208,.28) 0 1px,transparent 1px 4px),
    repeating-linear-gradient(168deg,rgba(255,232,242,.22) 0 1px,transparent 1px 5px);
  filter:blur(.6px);opacity:.85;}
.fur-icon::after{
  content:"";position:absolute;inset:0;border-radius:inherit;z-index:0;pointer-events:none;
  background:radial-gradient(ellipse at 24% 20%,rgba(255,255,255,.82),transparent 44%);
  opacity:.88;mix-blend-mode:soft-light;}
.fur-icon>*{position:relative;z-index:2;}

/* ═══ 主要按钮布艺光泽 ═══ */
.fur-btn{position:relative!important;isolation:isolate;overflow:hidden!important;}
.fur-btn::before{
  content:"";position:absolute;inset:0;border-radius:inherit;z-index:0;pointer-events:none;
  background:
    repeating-linear-gradient(76deg,rgba(255,255,255,.16) 0 1px,transparent 1px 3px),
    radial-gradient(ellipse at 22% 30%,rgba(255,255,255,.38),transparent 55%);
  opacity:1;}
.fur-btn>*{position:relative;z-index:1;}
.fur-btn:active{transform:scale(0.96)!important;filter:brightness(0.97);}

/* ═══ 底部导航淡绒纹 ═══ */
.fur-nav{position:relative!important;isolation:isolate;}
.fur-nav::before{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:0;
  background:
    repeating-linear-gradient(8deg,rgba(255,190,210,.12) 0 1px,transparent 1px 6px),
    repeating-linear-gradient(172deg,rgba(255,225,235,.10) 0 1px,transparent 1px 6px);
  filter:blur(.3px);opacity:.80;}
.fur-nav>*{position:relative;z-index:1;}

.btn{transition:all 0.18s;}
.btn:active{transform:scale(0.95);}


`;

// ── 色卡组件（点击弹菜单：改库存 / 扣用量）──
const StockCard = React.memo(function StockCard({c,tn,T,stock,used,compact,batch,isSel,onToggleSel,onSave,onDeduct,wC,wL,focusMode,focusColor,onFocusClick}){
  const beads=Math.round(stock[c.id]);
  const st=beads<wC?"c":beads<wL?"l":"ok";
  const col=st==="c"?T.danger:st==="l"?T.warn:T.text;
  const dk=isDark(c.hex);
  // mode: null | "menu" | "edit" | "deduct"
  const [mode,setMode]=useState(null);
  const [localB,setLocalB]=useState("");
  const inputRef=useRef(null);

  useEffect(()=>{if(mode==="edit"||mode==="deduct")setTimeout(()=>inputRef.current&&inputRef.current.focus(),0);},[mode]);
  useEffect(()=>{if(mode===null)setLocalB("");},[mode]);

  const isFocused=focusMode&&focusColor===c.id;
  const isDimmed=focusMode&&focusColor&&focusColor!==c.id;

  function handleClick(e){
    if(batch){onToggleSel(c.id);return;}
    if(focusMode){onFocusClick&&onFocusClick(c.id);return;}
    e.stopPropagation();setMode(m=>m===null?"menu":null);
  }
  function startEdit(e){e.stopPropagation();setLocalB(String(beads));setMode("edit");}
  function startDeduct(e){e.stopPropagation();setLocalB("");setMode("deduct");}
  function saveEdit(e){e&&e.stopPropagation();const n=parseInt(localB);if(!isNaN(n)&&n>=0)onSave(c.id,n);setMode(null);}
  function saveDeduct(e){e&&e.stopPropagation();const n=parseInt(localB);if(!isNaN(n)&&n>0)onDeduct(c.id,n);setMode(null);}
  function onKeyEdit(e){if(e.key==="Enter")saveEdit();if(e.key==="Escape")setMode(null);}
  function onKeyDeduct(e){if(e.key==="Enter")saveDeduct();if(e.key==="Escape")setMode(null);}

  const gVal=(beads/100).toFixed(1).replace(/\.0$/,"");
  const pad=compact?"6px 8px":"10px 10px 10px";

  return(
    <div className="cc tt" onClick={handleClick}
      style={{background:T.card,borderRadius:compact?16:20,overflow:"hidden",cursor:"pointer",position:"relative",
        opacity:isDimmed?0.13:1,
        filter:isDimmed?"grayscale(0.7)":"none",
        border:isFocused?`2.5px solid ${T.accent}`:isSel?`2.5px solid ${T.accent}`:st==="c"?`2px solid ${T.danger}`:st==="l"?`2px solid ${T.warn}`:`1.5px solid ${T.border}`,
        boxShadow:isFocused?`0 0 0 4px ${T.accent}50,${T.cardShadow}`:isSel?`0 0 0 3px ${T.accent}30`:mode==="menu"?`0 0 0 3px ${T.accent}40`:T.cardShadow,
        transform:isFocused?"scale(1.04)":isSel?"scale(0.97)":"none",
        transition:"opacity 0.25s,filter 0.25s,transform 0.18s,box-shadow 0.18s,border 0.18s"}}>
      <div style={{background:c.hex,height:compact?40:50,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
        {tn==="night"&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.2)"}}/>}
        <span style={{fontSize:compact?12:13,fontWeight:800,color:dk?"rgba(255,255,255,0.9)":"rgba(40,30,20,0.65)",position:"relative"}}>{c.id}</span>
        {batch&&<div style={{position:"absolute",right:8,width:20,height:20,borderRadius:"50%",background:isSel?T.accent:"rgba(255,255,255,0.8)",border:`2px solid ${isSel?T.accent:"rgba(200,200,200,0.9)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",fontWeight:800}}>{isSel?"✓":""}</div>}
        {isFocused&&<div style={{position:"absolute",top:4,right:4,background:"rgba(0,0,0,0.35)",borderRadius:6,padding:"1px 5px",fontSize:9,color:"#fff",fontWeight:800}}>✦ 拼这个</div>}
      </div>

      {/* 默认显示 */}
      {mode===null&&<div style={{padding:pad,textAlign:"center"}}>
        <div style={{fontSize:compact?14:16,fontWeight:800,color:col}}>{beads} <span style={{fontSize:10,fontWeight:600}}>粒</span></div>
        <div style={{fontSize:compact?10:11,color:T.textMid,fontWeight:600,marginTop:1}}>{gVal} g</div>
        {!compact&&used[c.id]>0&&<div style={{fontSize:10,color:T.textLight,marginTop:1}}>已用 {Math.round(used[c.id])} 粒</div>}
      </div>}

      {/* 菜单 */}
      {mode==="menu"&&<div style={{padding:"8px 6px",display:"flex",gap:5}} onClick={e=>e.stopPropagation()}>
        <button onClick={startEdit} style={{flex:1,padding:"7px 4px",borderRadius:10,border:`1.5px solid ${T.accent}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:10,fontWeight:800,background:T.accentLight,color:T.accent}}>✏️ 改库存</button>
        <button onClick={startDeduct} style={{flex:1,padding:"7px 4px",borderRadius:10,border:`1.5px solid ${T.warn}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,background:T.warnBg,color:T.warn}}>📦 扣用量</button>
      </div>}

      {/* 改库存 */}
      {mode==="edit"&&<div style={{padding:pad,textAlign:"center"}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:10,color:T.textLight,marginBottom:4,fontWeight:600}}>改库存</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:4,marginBottom:3}}>
          <input ref={inputRef} value={localB} onChange={e=>setLocalB(e.target.value)} onBlur={saveEdit} onKeyDown={onKeyEdit} type="number" min="0"
            style={{width:68,textAlign:"center",fontSize:15,fontWeight:800,padding:"4px 6px",border:`2px solid ${T.accent}`,borderRadius:10,fontFamily:"'Nunito',sans-serif",background:tn!=="night"?"#f8fbff":T.card,color:T.accent,outline:"none"}}/>
          <span style={{fontSize:11,color:T.textLight,fontWeight:700}}>粒</span>
        </div>
        <div style={{fontSize:10,color:T.textLight}}>= {((parseInt(localB)||0)/100).toFixed(1).replace(/\.0$/,"")} g</div>
      </div>}

      {/* 扣用量 */}
      {mode==="deduct"&&<div style={{padding:pad,textAlign:"center"}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:10,color:T.warn,marginBottom:4,fontWeight:600}}>扣用量</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:4,marginBottom:3}}>
          <input ref={inputRef} value={localB} onChange={e=>setLocalB(e.target.value)} onBlur={saveDeduct} onKeyDown={onKeyDeduct} type="number" min="0"
            style={{width:68,textAlign:"center",fontSize:15,fontWeight:800,padding:"4px 6px",border:`2px solid ${T.warn}`,borderRadius:10,fontFamily:"'Nunito',sans-serif",background:tn!=="night"?"#f8fbff":T.card,color:T.warn,outline:"none"}}/>
          <span style={{fontSize:11,color:T.textLight,fontWeight:700}}>粒</span>
        </div>
        <div style={{fontSize:10,color:T.textLight}}>库存 {beads} → {Math.max(0,beads-(parseInt(localB)||0))} 粒</div>
      </div>}
    </div>
  );
});


export default function App(){
  const [tn,setTn]=useState(()=>{try{return localStorage.getItem("pindou_current_theme")||localStorage.getItem("pindou_default_theme")||"sky";}catch{return "sky";}});
  const safeTn=THEMES[tn]?tn:"sky";
  const T=THEMES[safeTn];
  useEffect(()=>{try{localStorage.setItem("pindou_current_theme",safeTn);}catch{}},[safeTn]);
  const [user,setUser]=useState(null);
  const [authLoading,setAuthLoading]=useState(true);

  useEffect(()=>{
    supabase.auth.getSession().then(({data:{session}})=>{
      setUser(session?.user??null);
      setAuthLoading(false);
    });
    const {data:{subscription}}=supabase.auth.onAuthStateChange((_,session)=>{
      setUser(session?.user??null);
    });
    return()=>subscription.unsubscribe();
  },[]);


  const [isPro,setIsPro]=useState(false);
  const [showUpgrade,setShowUpgrade]=useState(false);
  const [inviteInfo,setInviteInfo]=useState({code:"",count:0,bonus:0,trialExp:null});
  const FREE_AI_LIMIT=5;
  const [freeAiUsed,setFreeAiUsed]=useState(()=>{try{const v=localStorage.getItem('pindou_free_ai_used');return v?Number(v):0}catch{return 0}});
  const totalAiLimit = FREE_AI_LIMIT + (inviteInfo.bonus || 0);

  const [stock,setStock]=useState(INIT_STOCK);
  const [used,setUsed]=useState(INIT_USED);
  const [syncLoading,setSyncLoading]=useState(false);
  const [syncStatus,setSyncStatus]=useState("");
  const [cloudReady,setCloudReady]=useState(false);
  const [page,setPage]=useState("home");
  useEffect(()=>{try{localStorage.setItem('pindou_free_ai_used',String(freeAiUsed));}catch{}},[freeAiUsed]);

  // 库存提醒
  const [showStockAlert,setShowStockAlert]=useState(false);
  const [alertThreshold,setAlertThreshold]=useState(()=>{
    try{const v=localStorage.getItem('pindou_alert_threshold');return v?Number(v):50}catch{return 50}
  });
  const [hasCheckedStock,setHasCheckedStock]=useState(false);

  // 进入首页时检测库存并弹出提醒
  useEffect(()=>{
    if(page==="home"&&!hasCheckedStock&&!authLoading){
      const lowStockCount=ALL_COLORS.filter(c=>Math.round(stock[c.id])<alertThreshold).length;
      if(lowStockCount>0){
        setShowStockAlert(true);
      }
      setHasCheckedStock(true);
    }
  },[page,hasCheckedStock,stock,alertThreshold,authLoading]);

  // 专注模式
  const [focusMode,setFocusMode]=useState(false);
  const [focusColor,setFocusColor]=useState(null);

  // 登录后从云端拉数据
  useEffect(()=>{
    if(!user){setCloudReady(false);setIsPro(false);setSyncStatus("");return;}
    setCloudReady(false);
    async function loadCloud(){
      setSyncLoading(true);
      // 拉库存
      const {data,error}=await supabase.from("stock").select("color,quantity,used").eq("user_id",user.id);
      // 拉plan
      const {data:profile}=await supabase.from("profiles").select("plan, role, pro_expires_at, trial_expires_at, bonus_ai_count, invite_code, invite_count").eq("user_id",user.id).single();
      const now=new Date();
      const isTesterPro=profile?.plan==="tester_pro" && profile?.pro_expires_at && new Date(profile.pro_expires_at)>now;
      const isPaidPro=profile?.plan==="pro";
      const isAdmin=profile?.role==="admin";
      const isTrialPro=profile?.trial_expires_at && new Date(profile.trial_expires_at)>now;
      const nextIsPro=!!(isAdmin||isPaidPro||isTesterPro||isTrialPro);
      setIsPro(nextIsPro);
      // 邀请码不存在时自动生成
      if(!profile?.invite_code){
        const myCode=genInviteCode(user.id);
        await supabase.from("profiles").update({invite_code:myCode}).eq("user_id",user.id);
      }
      setInviteInfo({
        code: profile?.invite_code || genInviteCode(user.id),
        count: profile?.invite_count || 0,
        bonus: profile?.bonus_ai_count || 0,
        trialExp: profile?.trial_expires_at || null,
      });
      if(error){
        setSyncStatus("err");
        // 出错时才读本地缓存兜底
        try{const s=localStorage.getItem("pindou_stock");if(s)setStock(JSON.parse(s));}catch{}
        try{const u=localStorage.getItem("pindou_used");if(u)setUsed(JSON.parse(u));}catch{}
      }else if(data&&data.length>0){
        const ns={...INIT_STOCK},nu={...INIT_USED};
        data.forEach(r=>{
          if(ns[r.color]!==undefined)ns[r.color]=r.quantity;
          if(nu[r.color]!==undefined)nu[r.color]=r.used||0;
        });
        setStock(ns);setUsed(nu);
        setSyncStatus("ok");
      }else{
        // 云端无数据（新账号）：用初始值，不读本地缓存
        setStock(INIT_STOCK);setUsed(INIT_USED);
        setSyncStatus("ok");
      }
      setSyncLoading(false);
      setCloudReady(true);
    }
    loadCloud();
  },[user]);

  // 云端写回（stock+used一起）
  const syncTimer=useRef(null);
  useEffect(()=>{
    if(!user||!cloudReady||!isPro)return;
    clearTimeout(syncTimer.current);
    syncTimer.current=setTimeout(async()=>{
      const rows=Object.entries(stock).map(([color,quantity])=>({user_id:user.id,color,quantity,used:used[color]||0}));
      const {error}=await supabase.from("stock").upsert(rows,{onConflict:"user_id,color"});
      if(error){setSyncStatus("err");console.error("sync error:",error);}
      else setSyncStatus("ok");
    },1500);
  },[stock,used,cloudReady]);
  const [search,setSearch]=useState("");
  const [sort,setSort]=useState("id-asc");
  const [fSeries,setFSeries]=useState(null);

  const [wL,setWL]=useState(()=>{try{const v=localStorage.getItem('pindou_warn_low');return v?Number(v):500}catch{return 500}});
  const [wC,setWC]=useState(()=>{try{const v=localStorage.getItem('pindou_warn_crit');return v?Number(v):200}catch{return 200}});
  const [showRestockReminder,setShowRestockReminder]=useState(false);
  const [restockReminderThreshold,setRestockReminderThreshold]=useState(()=>{
    try{const v=localStorage.getItem('pindou_restock_reminder_threshold');return v?Number(v):10}catch{return 10}
  });
  useEffect(()=>{
    try{
      localStorage.setItem('pindou_warn_low',String(wL));
      localStorage.setItem('pindou_warn_crit',String(wC));
    }catch{}
  },[wL,wC]);
  useEffect(()=>{
    try{localStorage.setItem('pindou_restock_reminder_threshold',String(restockReminderThreshold));}catch{}
  },[restockReminderThreshold]);
  const [history,setHistory]=useState([]); // [{stock,used,tasks?}]
  const MAX_HISTORY=20;
  const [batch,setBatch]=useState(false);
  const [sel,setSel]=useState(new Set());
  const [bAmt,setBAmt]=useState("");
  const [bDir,setBDir]=useState("-");
  const [cmdText,setCmdText]=useState("");
  const [cmdErr,setCmdErr]=useState("");
  const [cmdTags,setCmdTags]=useState([]); // [{id,dir,amt}] 识图结果tag模式
  const [showTagLink,setShowTagLink]=useState(false);
  const [tagLinkMode,setTagLinkMode]=useState(null); // "new" | "link" | null
  const [newDoneName,setNewDoneName]=useState("");
  const [linkedTaskId,setLinkedTaskId]=useState(null);
  const [quickDoneTags,setQuickDoneTags]=useState([]); // 扣豆完成新建作品时选的标签
  const [imgLoading,setImgLoading]=useState(false);
  const [imgErr,setImgErr]=useState("");
  const imgRef=useRef(null);

  const critC=ALL_COLORS.filter(c=>Math.round(stock[c.id])<wC);
  const lowC=ALL_COLORS.filter(c=>Math.round(stock[c.id])>=wC&&Math.round(stock[c.id])<wL);
  const restockNeedColors = useMemo(()=>ALL_COLORS.filter(c=>Math.round(stock[c.id])<wL),[stock,wL]);
  const restockNeedCount = restockNeedColors.length;
  useEffect(()=>{
    if(page!=="home") return;
    if(restockNeedCount<restockReminderThreshold) return;
    try{
      const todayKey=new Date().toISOString().slice(0,10);
      const dismissedAt=localStorage.getItem('pindou_restock_reminder_dismissed_at');
      if(dismissedAt===todayKey) return;
    }catch{}
    const timer=setTimeout(()=>setShowRestockReminder(true),650);
    return ()=>clearTimeout(timer);
  },[page,restockNeedCount,restockReminderThreshold]);
  const sUsed=useMemo(()=>SERIES.map(s=>({s,total:ALL_COLORS.filter(c=>c.id.startsWith(s)).reduce((sum,c)=>sum+used[c.id],0)})).sort((a,b)=>b.total-a.total),[used]);
  const top5=sUsed.filter(x=>x.total>0).slice(0,5);
  const maxU=top5[0]?.total||1;

  const filtered=useMemo(()=>{
    let l=[...ALL_COLORS];
    if(fSeries)l=l.filter(c=>c.id.startsWith(fSeries));
    if(search.trim())l=l.filter(c=>c.id.toLowerCase().includes(search.trim().toLowerCase()));
    if(sort==="id-asc")l.sort((a,b)=>a.id.localeCompare(b.id));
    else if(sort==="id-desc")l.sort((a,b)=>b.id.localeCompare(a.id));
    else if(sort==="stock-asc")l.sort((a,b)=>stock[a.id]-stock[b.id]);
    else if(sort==="stock-desc")l.sort((a,b)=>stock[b.id]-stock[a.id]);
    else if(sort==="used-desc")l.sort((a,b)=>used[b.id]-used[a.id]);
    return l;
  },[search,sort,stock,used,fSeries]);



  function getStatus(id){if(gToBeads(stock[id])<wC)return"c";if(gToBeads(stock[id])<wL)return"l";return"ok";}
  function goS(s){setFSeries(s);setSort("used-desc");setSearch("");setPage("stock");}
  function toggleSel(id){setSel(p=>{const n=new Set(p);n.has(id)?n.delete(id):n.add(id);return n;});}
  function applyBatch(){
    const amt=parseFloat(bAmt);if(isNaN(amt)||amt<=0)return;
    pushHistory(stock,used);
    const ns={...stock},nu={...used};
    sel.forEach(id=>{if(bDir==="-"){const d=Math.min(ns[id],amt);nu[id]+=d;ns[id]=Math.max(0,ns[id]-amt);}else{ns[id]+=amt;}});
    setStock(ns);setUsed(nu);setSel(new Set());setBAmt("");setBatch(false);
  }
  function exitBatch(){setBatch(false);setSel(new Set());setBAmt("");setCmdText("");setCmdErr("");setCmdTags([]);}

  function dismissRestockReminderForToday(){
    try{localStorage.setItem('pindou_restock_reminder_dismissed_at',new Date().toISOString().slice(0,10));}catch{}
    setShowRestockReminder(false);
  }

  function applyTags(){
    if(cmdTags.length===0)return;
    const ns={...stock},nu={...used};
    cmdTags.forEach(({id,dir,amt})=>{
      const a=parseFloat(amt);
      if(isNaN(a)||a<=0)return;
      const ids=id==="全部"?ALL_COLORS.map(c=>c.id):[id].filter(i=>ALL_COLORS.find(c=>c.id===i));
      ids.forEach(i=>{
        if(dir==="-"){const d=Math.min(ns[i]||0,a);nu[i]=(nu[i]||0)+d;ns[i]=Math.max(0,(ns[i]||0)-a);}
        else{ns[i]=(ns[i]||0)+a;}
      });
    });
    pushHistory(stock,used);
    setStock(ns);setUsed(nu);
    setCmdTags([]);setBatch(false);setSel(new Set());
  }

  function getDefaultDoneName(){
    const d=new Date();
    const mm=String(d.getMonth()+1).padStart(2,"0");
    const dd=String(d.getDate()).padStart(2,"0");
    return `${mm}/${dd}`;
  }

  function openTagLinkFlow(){
    if(cmdTags.length===0)return;
    setShowTagLink(true);
    setTagLinkMode(null);
    setNewDoneName(getDefaultDoneName());
    setLinkedTaskId(null);
  }

  function finishTagDeduction(mode){
    if(cmdTags.length===0)return;

    const colorData=cmdTags
      .filter(t=>t.dir==="-")
      .map(t=>({id:t.id,count:parseFloat(t.amt)||0}))
      .filter(t=>t.id&&t.count>0&&t.id!=="全部");

    if(mode==="link"&&linkedTaskId){
      const target=tasks.find(t=>String(t.id)===String(linkedTaskId));
      if(target?.stockDeducted){
        alert("这张作品已经标记为已扣豆，不能重复扣。需要改库存的话，请去库存页手动调整。");
        return;
      }
    }

    const ns={...stock},nu={...used};
    colorData.forEach(({id,count})=>{
      const d=Math.min(ns[id]||0,count);
      nu[id]=(nu[id]||0)+d;
      ns[id]=Math.max(0,(ns[id]||0)-count);
    });

    if(mode==="new"){
      const name=(newDoneName||"").trim()||getDefaultDoneName();
      const createdId=`done_${Date.now()}`;
      const newTask={
        id:createdId,
        name,
        img:null,
        status:"done",
        doneDate:new Date().toISOString(),
        elapsedMs:0,
        startedAt:null,
        colorData,
        tags:quickDoneTags,
        sourceType:"quick_done",
        stockDeducted: colorData.length>0,
        deductedAt: colorData.length>0 ? new Date().toISOString() : null
      };
      pushHistory(stock,used,tasks);
      setStock(ns);setUsed(nu);
      setTasks(prev=>[newTask,...prev]);
      writeStockLogs(colorData,{taskId:createdId,source:"quick_done_new",action:"deduct",meta:{taskName:name}});
    }else if(mode==="link"&&linkedTaskId){
      pushHistory(stock,used,tasks);
      setStock(ns);setUsed(nu);
      const deductedAt=new Date().toISOString();
      setTasks(prev=>prev.map(t=>t.id===linkedTaskId?{
        ...t,
        status:"done",
        doneDate:deductedAt,
        startedAt:null,
        colorData: colorData.length>0 ? colorData : (t.colorData||[]),
        stockDeducted: colorData.length>0 ? true : !!t.stockDeducted,
        deductedAt: colorData.length>0 ? deductedAt : (t.deductedAt||null)
      }:t));
      writeStockLogs(colorData,{taskId:linkedTaskId,source:"quick_done_link",action:"deduct"});
    }else{
      // 纯扣豆不关联作品
      pushHistory(stock,used);
      setStock(ns);setUsed(nu);
      writeStockLogs(colorData,{source:"quick_done_manual",action:"deduct"});
    }

    setCmdTags([]);
    setBatch(false);
    setSel(new Set());
    setShowTagLink(false);
    setTagLinkMode(null);
    setLinkedTaskId(null);
    setQuickDoneTags([]);
  }

  const [cropImg,setCropImg]=useState(null); // 裁剪用的原图base64
  const [cropBox,setCropBox]=useState(null); // {x,y,w,h} 相对于显示尺寸
  const [cropDrag,setCropDrag]=useState(null); // 拖拽状态
  const cropCanvasRef=useRef(null);
  const cropImgRef=useRef(null);

  async function handleImg(e){
    const file=e.target.files[0];
    if(!file)return;
    const url=URL.createObjectURL(file);
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement('canvas');
      const max=1600;let w=img.width,h=img.height;
      if(w>max||h>max){if(w>h){h=Math.round(h*max/w);w=max;}else{w=Math.round(w*max/h);h=max;}}
      canvas.width=w;canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      URL.revokeObjectURL(url);
      setCropImg(canvas.toDataURL('image/jpeg',0.9));
      setCropBox(null);
    };
    img.src=url;
    e.target.value="";
  }

  async function confirmCrop(){
    if(!cropImg)return;
    if(!isPro&&freeAiUsed>=totalAiLimit){setShowUpgrade(true);return;}
    setImgLoading(true);setImgErr("");
    try{
      let finalB64=cropImg;
      if(cropBox&&cropImgRef.current){
        const el=cropImgRef.current;
        const scaleX=el.naturalWidth/el.clientWidth;
        const scaleY=el.naturalHeight/el.clientHeight;
        const canvas=document.createElement('canvas');
        canvas.width=Math.round(cropBox.w*scaleX);
        canvas.height=Math.round(cropBox.h*scaleY);
        const ctx=canvas.getContext('2d');
        const imgEl=new Image();
        await new Promise(res=>{imgEl.onload=res;imgEl.src=cropImg;});
        ctx.drawImage(imgEl,Math.round(cropBox.x*scaleX),Math.round(cropBox.y*scaleY),canvas.width,canvas.height,0,0,canvas.width,canvas.height);
        finalB64=canvas.toDataURL('image/jpeg',0.92);
      }
      setCropImg(null);setCropBox(null);
      const resp=await fetch('/api/qwen',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({image:finalB64})});
      const data=await resp.json();
      if(data.result&&data.result!=='无法识别'){
        // Free用户才消耗次数，Pro期间不计入
        if(!isPro) setFreeAiUsed(v=>v+1);
        // 解析成tags
        const tags=data.result.split(/[,，]+/).map(s=>s.trim()).filter(Boolean).map(s=>{
          const m=s.match(/^([A-Za-z]+\d+|全部)\s*([+-])\s*(\d+)$/i);
          if(!m)return null;
          return {id:m[1].toUpperCase(),dir:m[2],amt:m[3]};
        }).filter(Boolean);
        if(tags.length>0){setCmdTags(tags);setCmdText("");setCmdErr("");}
        else{setImgErr("识别失败，试试框选统计表区域再识别～");}
      }else{setImgErr("识别失败，试试框选统计表区域再识别～");}
    }catch(err){setImgErr("请求出错："+err.message);}
    finally{setImgLoading(false);}
  }

  function applyCmd(){
    const raw=cmdText.trim();
    if(!raw)return;
    // 支持多条指令用逗号/换行分隔，格式：A15-200 / B3+500 / 全部-100
    const lines=raw.split(/[,，\n]+/).map(s=>s.trim()).filter(Boolean);
    const ns={...stock},nu={...used};
    let hasErr=false;
    lines.forEach(line=>{
      const m=line.match(/^(全部|[A-Za-z]\d+)\s*([+-])\s*(\d+)$/i);
      if(!m){hasErr=true;return;}
      const [,target,dir,amtStr]=m;
      const amt=parseFloat(amtStr);
      if(isNaN(amt)||amt<=0){hasErr=true;return;}
      const ids=target==="全部"?ALL_COLORS.map(c=>c.id):[target.toUpperCase()].filter(id=>ALL_COLORS.find(c=>c.id===id));
      if(ids.length===0){hasErr=true;return;}
      ids.forEach(id=>{
        if(dir==="-"){const d=Math.min(ns[id]||0,amt);nu[id]=(nu[id]||0)+d;ns[id]=Math.max(0,(ns[id]||0)-amt);}
        else{ns[id]=(ns[id]||0)+amt;}
      });
    });
    if(hasErr){setCmdErr("部分指令格式有误，请检查～例：A15-200 或 全部+100");return;}
    pushHistory(stock,used);
    setStock(ns);setUsed(nu);
    setCmdText("");setCmdErr("");setBatch(false);setSel(new Set());
  }






  const inp=(ex={})=>({fontFamily:"'Nunito',sans-serif",border:`1.5px solid ${T.border}`,borderRadius:12,background:tn!=="night"?"#f8fbff":T.card,color:T.text,outline:"none",...ex});

  function pushHistory(s,u,t){setHistory(h=>[...h.slice(-MAX_HISTORY+1),{stock:{...s},used:{...u},...(t!==undefined&&{tasks:[...t]})}]);}

  const saveStock=useCallback((id,beads)=>{
    pushHistory(stock,used);
    const diff=(stock[id]||0)-beads;
    if(diff>0){setUsed(u=>({...u,[id]:(u[id]||0)+diff}));}
    setStock(s=>({...s,[id]:beads}));
  },[stock,used]);
  const deductStock=useCallback((id,beads)=>{
    pushHistory(stock,used);
    setStock(s=>({...s,[id]:Math.max(0,(s[id]||0)-beads)}));
    setUsed(u=>({...u,[id]:(u[id]||0)+beads}));
  },[stock,used]);
  const restoreStock=useCallback((id,beads)=>{
    pushHistory(stock,used);
    setStock(s=>({...s,[id]:(s[id]||0)+beads}));
    setUsed(u=>({...u,[id]:Math.max(0,(u[id]||0)-beads)}));
  },[stock,used]);
  function undoLast(){
    setHistory(h=>{
      if(h.length===0)return h;
      const prev=h[h.length-1];
      setStock(prev.stock);
      setUsed(prev.used);
      if(prev.tasks!==undefined)setTasks(prev.tasks);
      return h.slice(0,-1);
    });
  }
  const [resetConfirm,setResetConfirm]=useState(false);
  const [showRestock,setShowRestock]=useState(false);
  const [resetKey,setResetKey]=useState(0);
  const [tasks,setTasks]=useState(()=>{try{return JSON.parse(localStorage.getItem("pindou_tasks")||"[]")}catch(e){return []}});

  useEffect(()=>{
    try{
      localStorage.setItem("pindou_tasks",JSON.stringify(tasks));
    }catch(e){}
  },[tasks]);
  const [tasksLoaded,setTasksLoaded]=useState(false);
  const tasksTimerRef=useRef(null);

  async function migrateTasksToCloudTable(list, reason="bootstrap"){
    if(!user||!isPro||!Array.isArray(list)||list.length===0)return;
    const rows=list.filter(t=>!t?.deletedAt).map(t=>buildTaskRow(user.id,t));
    if(rows.length===0)return;
    const {error}=await supabase.from("pindou_tasks").upsert(rows,{onConflict:"user_id,task_id"});
    if(error){console.warn("pindou_tasks migrate skipped:",error.message);return;}
    console.log("pindou_tasks migrated",rows.length,reason);
  }

  async function writeStockLogs(entries,{taskId=null,source="manual",action="deduct",meta={}}={}){
    if(!user||!isPro)return;
    const clean=normalizeColorEntries(entries);
    if(clean.length===0)return;
    const rows=clean.map(x=>({
      user_id:user.id,
      task_id:taskId?String(taskId):null,
      color:x.id,
      count:x.count,
      action,
      source,
      meta
    }));
    const {error}=await supabase.from("stock_logs").insert(rows);
    if(error)console.warn("stock_logs insert skipped:",error.message);
  }

  async function deleteTaskFromCloud(taskOrId,{mode="soft",meta={}}={}){
    if(!user||!isPro||!taskOrId)return;
    const taskId=String(typeof taskOrId==="object" ? (taskOrId.id||taskOrId.task_id||taskOrId.taskId) : taskOrId);
    if(!taskId)return;
    const now=new Date().toISOString();
    if(mode==="permanent"){
      const {error}=await supabase.from("pindou_tasks")
        .delete()
        .eq("user_id",user.id)
        .eq("task_id",taskId);
      if(error)console.warn("cloud task permanent delete skipped:",error.message);
      return;
    }
    const {error}=await supabase.from("pindou_tasks")
      .update({deleted_at:now,updated_at:now,data:{...(typeof taskOrId==="object"?taskOrId:{}),deletedAt:now,deleteMeta:meta}})
      .eq("user_id",user.id)
      .eq("task_id",taskId);
    if(error)console.warn("cloud task soft delete skipped:",error.message);
  }

  useEffect(()=>{async function lt(){
    setTasksLoaded(false);
    try{
      const localTasks=(()=>{try{const s=localStorage.getItem('pindou_tasks');return s?JSON.parse(s):[]}catch{return []}})();
      if(user&&isPro){
        const {data:taskRows,error:taskErr}=await supabase.from("pindou_tasks")
          .select("*")
          .eq("user_id",user.id)
          .is("deleted_at",null)
          .order("done_date",{ascending:false,nullsFirst:false})
          .order("created_at",{ascending:false,nullsFirst:false});

        if(!taskErr && Array.isArray(taskRows) && taskRows.length>0){
          const cloudTasks=taskRows.map(taskFromRow).filter(t=>!t.deletedAt);

          // 重要：云端有记录时，不要直接把本地覆盖掉。
          // 新建作品的封面如果还没来得及同步到云端，或旧云端记录没有 img，
          // 这里用本地缓存里的 img 补回来，避免刷新后又变成“要重新加封面”。
          const localById=new Map(localTasks.filter(t=>t&&!t.deletedAt).map(t=>[String(t.id),t]));
          const cloudIds=new Set(cloudTasks.map(t=>String(t.id)));
          const mergedCloudTasks=cloudTasks.map(t=>{
            const local=localById.get(String(t.id));
            return (!t.img&&local?.img)?{...t,img:local.img}:t;
          });
          const localOnlyTasks=localTasks.filter(t=>t&&!t.deletedAt&&!cloudIds.has(String(t.id)));
          const mergedTasks=[...mergedCloudTasks,...localOnlyTasks];

          setTasks(mergedTasks);
          try{localStorage.setItem('pindou_tasks',JSON.stringify(mergedTasks));}catch{}
          if(localOnlyTasks.length>0 || mergedTasks.some(t=>t.img && !cloudTasks.find(c=>String(c.id)===String(t.id))?.img)){
            await migrateTasksToCloudTable(mergedTasks,"merge_local_covers");
          }
        }else{
          // 兜底兼容旧版 profiles.tasks：只作为迁移来源，不再作为长期主同步表
          const {data}=await supabase.from("profiles").select("tasks").eq("user_id",user.id).single();
          const legacyTasks=Array.isArray(data?.tasks)?data.tasks:[];
          if(legacyTasks.length>0){
            setTasks(legacyTasks);
            try{localStorage.setItem('pindou_tasks',JSON.stringify(legacyTasks));}catch{}
            await migrateTasksToCloudTable(legacyTasks,"from_profiles_tasks");
          }else if(localTasks.length>0){
            setTasks(localTasks);
            await migrateTasksToCloudTable(localTasks,"from_local_cache");
          }else{
            setTasks([]);
          }
        }
      }else{
        setTasks(localTasks);
      }
    }finally{
      setTasksLoaded(true);
    }
  }lt();},[user,isPro]);

  useEffect(()=>{
    if(!tasksLoaded)return;
    try{localStorage.setItem('pindou_tasks',JSON.stringify(tasks));}catch{}
    if(!user||!isPro)return;
    clearTimeout(tasksTimerRef.current);
    tasksTimerRef.current=setTimeout(async()=>{
      const activeTasks=tasks.filter(t=>!t?.deletedAt);
      const rows=activeTasks.map(t=>buildTaskRow(user.id,t));
      if(rows.length>0){
        const {error}=await supabase.from("pindou_tasks").upsert(rows,{onConflict:"user_id,task_id"});
        if(error)console.warn("pindou_tasks sync error:",error.message);
      }
      // 旧 profiles.tasks 只保留镜像，方便你手机后台查看；真正主库是 pindou_tasks
      await supabase.from("profiles").update({tasks:activeTasks}).eq("user_id",user.id);
    },1500);
  },[tasks,tasksLoaded,user,isPro]);
  async function resetData(){
    if(!resetConfirm){setResetConfirm(true);setTimeout(()=>setResetConfirm(false),3000);return;}
    setStock(INIT_STOCK);setUsed(INIT_USED);setHistory([]);
    localStorage.removeItem('pindou_stock');localStorage.removeItem('pindou_used');
    localStorage.removeItem('pindou_tasks');
    if(user){
      await supabase.from('stock').delete().eq('user_id',user.id);
      await supabase.from('pindou_tasks').delete().eq('user_id',user.id);
      await supabase.from('stock_logs').delete().eq('user_id',user.id);
      await supabase.from('profiles').update({tasks:[]}).eq('user_id',user.id);
    }
    setResetConfirm(false);
    setResetKey(k=>k+1);
  }

  function exportData(){
    const data={stock,used,tasks,exportedAt:new Date().toISOString()};
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download=`拼豆记_备份_${new Date().toLocaleDateString('zh-CN').replace(/\//g,'-')}.json`;
    a.click();URL.revokeObjectURL(url);
  }

  const importRef=useRef(null);
  function importData(e){
    const file=e.target.files[0];if(!file)return;
    const r=new FileReader();
    r.onload=ev=>{
      try{
        const d=JSON.parse(ev.target.result);
        if(d.stock)setStock(d.stock);
        if(d.used)setUsed(d.used);
        if(Array.isArray(d.tasks))setTasks(d.tasks);
        alert('导入成功！数据已恢复～');
      }catch{alert('文件格式有误，请使用导出的备份文件～');}
    };
    r.readAsText(file);
    e.target.value='';
  }
  const cardProps={tn,T,stock,used,batch,onSave:saveStock,onDeduct:deductStock,onToggleSel:toggleSel,wC,wL,focusMode,focusColor,onFocusClick:handleFocusClick};

  function handleFocusClick(id){
    setFocusColor(prev=>prev===id?null:id);
  }
  function exitFocusMode(){setFocusMode(false);setFocusColor(null);}
  function focusNav(dir){
    const idx=filtered.findIndex(c=>c.id===focusColor);
    if(idx===-1){setFocusColor(filtered[0]?.id||null);return;}
    const next=filtered[(idx+dir+filtered.length)%filtered.length];
    if(next)setFocusColor(next.id);
  }

  async function handleLogout(){
    await supabase.auth.signOut();
    localStorage.removeItem('pindou_stock');
    localStorage.removeItem('pindou_used');
    localStorage.removeItem('pindou_tasks');
    localStorage.removeItem('pindou_free_ai_used');
    setStock(INIT_STOCK);
    setUsed(INIT_USED);
    setTasks([]);
    setHistory([]);
    setFreeAiUsed(0);
    setUser(null);
  }

  if(authLoading)return(
    <div style={{minHeight:"100vh",background:T.bg,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Nunito',sans-serif",fontSize:16,color:T.textMid,fontWeight:700}}>
      Loading… 🫘
    </div>
  );
  if(!user)return <AuthPage T={T} tn={tn} onLogin={setUser}/>;

  return(
    <>
      <style>{G}</style>
      {showUpgrade&&<UpgradeModal T={T} onClose={()=>setShowUpgrade(false)}/>}
      {showStockAlert&&<StockAlertModal T={T} stock={stock} alertThreshold={alertThreshold} setAlertThreshold={setAlertThreshold} onClose={()=>setShowStockAlert(false)}/>}
      <div className="tt" style={{position:"fixed",inset:0,display:"flex",flexDirection:"column",background:T.bg,fontFamily:"'Nunito',sans-serif",color:T.text}}>

        {/* 裁剪弹窗 */}
        {cropImg&&<div style={{position:"fixed",inset:0,zIndex:999,background:"rgba(0,0,0,0.85)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:16}}>
          <div style={{fontSize:13,color:"#fff",fontWeight:700,marginBottom:10}}>拖拽边框调整选区 · 框选统计表区域</div>
          <div style={{position:"relative",maxWidth:"100%",maxHeight:"65vh",overflow:"hidden",borderRadius:12}}
            onPointerMove={ev=>{
              if(!cropDrag||!cropImgRef.current)return;
              const el=cropImgRef.current.getBoundingClientRect();
              const cx=Math.max(0,Math.min(ev.clientX-el.left,el.width));
              const cy=Math.max(0,Math.min(ev.clientY-el.top,el.height));
              const dx=cx-cropDrag.lastX, dy=cy-cropDrag.lastY;
              setCropBox(b=>{
                if(!b)return b;
                let {x,y,w,h}=b;
                const minS=30;
                if(cropDrag.type==="move"){
                  x=Math.max(0,Math.min(x+dx,el.width-w));
                  y=Math.max(0,Math.min(y+dy,el.height-h));
                }else{
                  if(cropDrag.type.includes("l")){const nx=Math.min(x+dx,x+w-minS);w=w-(nx-x);x=nx;}
                  if(cropDrag.type.includes("r")){w=Math.max(minS,Math.min(w+dx,el.width-x));}
                  if(cropDrag.type.includes("t")){const ny=Math.min(y+dy,y+h-minS);h=h-(ny-y);y=ny;}
                  if(cropDrag.type.includes("b")){h=Math.max(minS,Math.min(h+dy,el.height-y));}
                }
                return {x,y,w,h};
              });
              setCropDrag(d=>({...d,lastX:cx,lastY:cy}));
            }}
            onPointerUp={()=>setCropDrag(null)}
          >
            <img ref={cropImgRef} src={cropImg}
              onLoad={ev=>{
                const {clientWidth:w,clientHeight:h}=ev.target;
                // 默认框选下半部分（统计表通常在下方）
                setCropBox({x:w*0.05,y:h*0.65,w:w*0.9,h:h*0.32});
              }}
              style={{display:"block",maxWidth:"100%",maxHeight:"65vh",objectFit:"contain",userSelect:"none"}}/>
            {cropBox&&<>
              {/* 暗色遮罩四周 */}
              <div style={{position:"absolute",inset:0,pointerEvents:"none",background:`
                linear-gradient(to bottom,
                  rgba(0,0,0,0.45) ${cropBox.y}px,
                  transparent ${cropBox.y}px,
                  transparent ${cropBox.y+cropBox.h}px,
                  rgba(0,0,0,0.45) ${cropBox.y+cropBox.h}px
                )`}}/>
              {/* 选框本体——中间拖动 */}
              <div onPointerDown={ev=>{ev.stopPropagation();const el=cropImgRef.current.getBoundingClientRect();setCropDrag({type:"move",lastX:ev.clientX-el.left,lastY:ev.clientY-el.top});ev.currentTarget.setPointerCapture(ev.pointerId);}}
                style={{position:"absolute",left:cropBox.x,top:cropBox.y,width:cropBox.w,height:cropBox.h,border:"2px solid #60d4f0",boxSizing:"border-box",cursor:"move",touchAction:"none"}}>
                {/* 三等分辅助线 */}
                {[1,2].map(i=><div key={"v"+i} style={{position:"absolute",left:`${i*33.3}%`,top:0,bottom:0,width:1,background:"rgba(96,212,240,0.4)"}}/>)}
                {[1,2].map(i=><div key={"h"+i} style={{position:"absolute",top:`${i*33.3}%`,left:0,right:0,height:1,background:"rgba(96,212,240,0.4)"}}/>)}
                {/* 8个控制点 */}
                {[
                  {type:"tl",style:{top:-8,left:-8,cursor:"nw-resize"}},
                  {type:"t", style:{top:-8,left:"50%",transform:"translateX(-50%)",cursor:"n-resize"}},
                  {type:"tr",style:{top:-8,right:-8,cursor:"ne-resize"}},
                  {type:"r", style:{top:"50%",right:-8,transform:"translateY(-50%)",cursor:"e-resize"}},
                  {type:"br",style:{bottom:-8,right:-8,cursor:"se-resize"}},
                  {type:"b", style:{bottom:-8,left:"50%",transform:"translateX(-50%)",cursor:"s-resize"}},
                  {type:"bl",style:{bottom:-8,left:-8,cursor:"sw-resize"}},
                  {type:"l", style:{top:"50%",left:-8,transform:"translateY(-50%)",cursor:"w-resize"}},
                ].map(({type,style})=>(
                  <div key={type}
                    onPointerDown={ev=>{ev.stopPropagation();const el=cropImgRef.current.getBoundingClientRect();setCropDrag({type,lastX:ev.clientX-el.left,lastY:ev.clientY-el.top});ev.currentTarget.setPointerCapture(ev.pointerId);}}
                    style={{position:"absolute",width:18,height:18,background:"#60d4f0",borderRadius:3,touchAction:"none",...style}}/>
                ))}
              </div>
            </>}
          </div>
          <div style={{display:"flex",gap:12,marginTop:14}}>
            <button onClick={()=>{setCropImg(null);setCropBox(null);}} style={{padding:"8px 24px",borderRadius:50,border:"1.5px solid rgba(255,255,255,0.3)",background:"transparent",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>取消</button>
            <button onClick={confirmCrop} disabled={imgLoading} style={{padding:"8px 28px",borderRadius:50,border:"none",background:"#60d4f0",color:"#1a2a3a",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>
              {imgLoading?"识别中…":"✓ 确认识别"}
            </button>
          </div>
          {imgErr&&<div style={{marginTop:8,fontSize:12,color:"#ff8080",fontWeight:600}}>{imgErr}</div>}
        </div>}
        {/* 顶部header在作品页和我的页隐藏 */}
        {page!=="works"&&page!=="mine"&&<div className="tt" style={{background:T.headerBg,borderBottom:`1.5px solid ${T.border}`,padding:"6px 18px",flexShrink:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
            <JarLogo accent={T.accent} size={44}/>
            <div style={{display:"flex",alignItems:"center",gap:5}}>
              <div style={{fontSize:18,fontWeight:900,color:T.accent,letterSpacing:0.3,lineHeight:"44px"}}>拼豆记</div>
              {(() => {
                if (!isPro) {
                  return <div style={{fontSize:9,color:"#7aa37a",fontWeight:600}}>📱 本地保存</div>;
                }
                if (syncLoading) {
                  return <div style={{fontSize:9,color:"#f5a623",fontWeight:600}}>☁️ 同步中…</div>;
                }
                if (syncStatus === "err") {
                  return <div style={{fontSize:9,color:"#ff6b6b",fontWeight:600}}>⚠️ 同步失败</div>;
                }
                return <div style={{fontSize:9,color:"#4caf50",fontWeight:600}}>☁️ 已同步</div>;
              })()}
            </div>
          </div>
          <button className="btn" onClick={()=>setTn(t=>THEME_ORDER[(THEME_ORDER.indexOf(t)+1)%THEME_ORDER.length]||"sky")} style={{padding:"7px 16px",borderRadius:50,border:`1.5px solid ${T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,color:T.accent,background:T.accentLight}}>{T.switchBtn}</button>
        </div>}
        {/* 导入隐藏input */}
        <input ref={importRef} type="file" accept=".json" style={{display:"none"}} onChange={importData}/>

        {/* 主内容滚动区 — 包含所有页面 */}
        <div style={{flex:1,overflowY:"auto",WebkitOverflowScrolling:"touch",display:"flex",flexDirection:"column",minHeight:0}}>

          {/* home / stock 内容 */}
          {(page==="home"||page==="stock")&&<>
            <div style={{maxWidth:640,margin:"0 auto",padding:"14px 14px 0",width:"100%",boxSizing:"border-box"}}>

              {page==="home"&&<div className="fade">
                <HomeStats T={T} tn={tn} tasks={tasks} used={used} stock={stock} wL={wL} wC={wC} setWL={setWL} setWC={setWC} restockReminderThreshold={restockReminderThreshold} setRestockReminderThreshold={setRestockReminderThreshold} resetData={resetData} resetConfirm={resetConfirm} setShowRestock={setShowRestock} inp={inp} goS={goS}/>
              </div>}

              {page==="stock"&&<div className="fade">
                <div style={{display:"flex",gap:8,marginBottom:12,alignItems:"center"}}>
                  <input placeholder="🔍 搜索色号 A5、B12..." value={search} onChange={e=>{setSearch(e.target.value);setFSeries(null);}} style={{...inp({flex:1,padding:"10px 16px",borderRadius:50,fontSize:13})}}/>
                  <select value={sort} onChange={e=>setSort(e.target.value)} style={{...inp({padding:"10px 8px",borderRadius:50,fontSize:12,cursor:"pointer"})}}>
                    <option value="id-asc">色号↑</option><option value="id-desc">色号↓</option>
                    <option value="stock-asc">库存↑</option><option value="stock-desc">库存↓</option>
                    <option value="used-desc">消耗↓</option>
                  </select>
                  <button className="btn" onClick={()=>{setBatch(!batch);setSel(new Set());}} style={{padding:"10px 14px",borderRadius:50,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,whiteSpace:"nowrap",background:batch?T.accent:T.accentLight,color:batch?"#fff":T.accent}}>{batch?"✕ 退出":"批量"}</button>
                </div>
                {history.length>0&&<div style={{display:"flex",justifyContent:"flex-end",marginBottom:8,marginTop:-4}}>
                  <button className="btn" onClick={undoLast} style={{padding:"6px 14px",borderRadius:50,border:`1.5px solid ${T.accent}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,background:T.accentLight,color:T.accent,display:"flex",alignItems:"center",gap:4}}>↩️ 撤销<span style={{background:T.accent,color:"#fff",borderRadius:50,fontSize:10,padding:"1px 6px",fontWeight:900}}>{history.length}</span></button>
                </div>}
                {fSeries&&<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <span style={{fontSize:13,color:T.accent,fontWeight:800}}>{fSeries} 系列</span>
                  <button onClick={()=>setFSeries(null)} style={{...inp({fontSize:11,padding:"3px 12px",borderRadius:50,cursor:"pointer",color:T.textMid})}}>清除 ×</button>
                </div>}
                {focusMode&&<div style={{background:`linear-gradient(135deg,${T.accentSoft},#f0e8ff)`,border:`1.5px solid ${T.accent}`,borderRadius:14,padding:"10px 14px",marginBottom:12,fontSize:13,color:T.accent,fontWeight:700,display:"flex",alignItems:"center",gap:8}}>
                  <span>🎯 专注模式</span>
                  {focusColor?(
                    <>
                      <div style={{width:22,height:22,borderRadius:7,background:ALL_COLORS.find(c=>c.id===focusColor)?.hex||"#ccc",border:"2px solid rgba(0,0,0,0.12)",flexShrink:0}}/>
                      <span style={{flex:1}}>正在拼 <b>{focusColor}</b></span>
                    </>
                  ):<span style={{flex:1,color:T.textMid,fontWeight:600,fontSize:12}}>点击任意色卡开始高亮</span>}
                </div>}
                {batch&&<div style={{background:T.accentSoft,border:`1px solid ${T.border}`,borderRadius:14,padding:"10px 14px",marginBottom:12,fontSize:13,color:T.accent,fontWeight:700}}>🫧 点击色卡勾选{sel.size>0&&<span style={{marginLeft:8}}>· 已选 {sel.size} 个</span>}</div>}
                <div style={{fontSize:12,color:T.textLight,marginBottom:10,fontWeight:600}}>共 {filtered.length} 个色号 · {focusMode?"点击高亮单个颜色":"点击色卡编辑克/粒数"}</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                  {filtered.map(c=><StockCard key={c.id} c={c} compact={false} isSel={sel.has(c.id)} {...cardProps}/>)}
                </div>
              </div>}

            </div>
          </>}

          {/* 作品页 */}
          {page==="works"&&<WorksPage T={T} tn={tn} user={user} isPro={isPro} onUpgrade={()=>setShowUpgrade(true)} stock={stock} used={used} resetKey={resetKey} onDeductStock={deductStock} onRestoreStock={restoreStock} onLogStockDeduction={writeStockLogs} onCloudDeleteTask={deleteTaskFromCloud} tasks={tasks} setTasks={setTasks} tasksLoaded={tasksLoaded} onPushHistory={(t)=>pushHistory(stock,used,t)}/>}

          {/* 我的页 */}
          {page==="mine"&&<MinePage T={T} tn={safeTn} setTn={setTn} user={user} isPro={isPro} onUpgrade={()=>setShowUpgrade(true)} onLogout={handleLogout} onExport={exportData} onImport={()=>importRef.current?.click()} inviteInfo={inviteInfo}/>}

        </div>{/* end 主内容滚动区 */}

        {/* 批量操作浮层 */}
        {batch&&<div style={{position:"fixed",bottom:64,left:0,right:0,zIndex:300,display:"flex",justifyContent:"center",padding:"0 14px"}}>
          <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:"24px 24px 0 0",padding:"16px 16px 20px",display:"flex",flexDirection:"column",gap:10,maxWidth:480,width:"100%",boxShadow:T.floatShadow,maxHeight:"80vh",overflowY:"auto"}}>

            {/* 勾选操作行 */}
            {sel.size>0&&<>
              <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <span style={{fontSize:13,color:T.textMid,fontWeight:700}}>已选 {sel.size} 个</span>
                <div style={{display:"flex",border:`1.5px solid ${T.border}`,borderRadius:50,overflow:"hidden"}}>
                  {[["-","－扣除"],["+"," ＋补货"]].map(([d,l])=>(<button key={d} onClick={()=>setBDir(d)} style={{padding:"6px 14px",border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:bDir===d?T.accent:T.card,color:bDir===d?"#fff":T.textMid,transition:"all 0.15s"}}>{l}</button>))}
                </div>
                <input type="number" placeholder="粒数" value={bAmt} onChange={e=>setBAmt(e.target.value)} style={{...inp({width:72,padding:"6px 8px",fontSize:13,textAlign:"center"})}}/>
                <button className="btn" onClick={applyBatch} style={{padding:"6px 18px",borderRadius:50,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:T.accent,color:"#fff"}}>确认</button>
              </div>
              <div style={{height:1,background:T.border}}/>
            </>}

            {/* 识图tag货架区 */}
            {cmdTags.length>0&&<>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{fontSize:11,color:T.accent,fontWeight:700}}>📷 识图结果 · 点数字可改 · ×删除</div>
                <button onClick={()=>setCmdTags([])} style={{background:"none",border:"none",cursor:"pointer",fontSize:11,color:T.textLight,fontWeight:700,padding:0}}>清空</button>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:6}}>
                {cmdTags.map((tag,i)=>{
                  const color=ALL_COLORS.find(c=>c.id===tag.id);
                  const bg=color?color.hex:"#e0e0e0";
                  const rgb=color?[parseInt(bg.slice(1,3),16),parseInt(bg.slice(3,5),16),parseInt(bg.slice(5,7),16)]:[180,180,180];
                  const bright=(rgb[0]*299+rgb[1]*587+rgb[2]*114)/1000;
                  const txt=bright>140?"rgba(0,0,0,0.75)":"rgba(255,255,255,0.95)";
                  return(
                    <div key={i} style={{borderRadius:12,overflow:"hidden",border:`1.5px solid ${T.border}`,position:"relative"}}>
                      <div style={{background:T.accentSoft,padding:"3px 6px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                        <span style={{flex:1,fontSize:11,fontWeight:800,color:T.accent,textAlign:"center"}}>{tag.id}</span>
                        <button onClick={()=>setCmdTags(ts=>ts.filter((_,j)=>j!==i))}
                          style={{background:"none",border:"none",cursor:"pointer",color:T.textLight,fontSize:12,lineHeight:1,padding:0,fontWeight:900,flexShrink:0}}>×</button>
                      </div>
                      <div style={{background:bg,padding:"6px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",aspectRatio:"1/1"}}>
                        <input type="number" value={tag.amt}
                          onChange={e=>setCmdTags(ts=>ts.map((t,j)=>j===i?{...t,amt:e.target.value}:t))}
                          style={{width:"70%",aspectRatio:"1/1",background:"rgba(255,255,255,0.25)",border:"1px solid rgba(255,255,255,0.4)",borderRadius:8,padding:0,fontSize:13,fontWeight:900,color:txt,textAlign:"center",fontFamily:"'Nunito',sans-serif",outline:"none",boxSizing:"border-box"}}/>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{height:1,background:T.border}}/>
            </>}

            {/* 文本框+识图按钮 */}
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <div style={{fontSize:11,color:T.textLight,fontWeight:600,flex:1}}>✏️ 手动输入：A15-200、全部+100</div>
                <button className="btn" onClick={()=>{if(!isPro&&freeAiUsed>=totalAiLimit){setShowUpgrade(true);return;}imgRef.current?.click();}} disabled={imgLoading}
                  style={{padding:"5px 12px",borderRadius:50,border:`1.5px solid ${T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,background:T.accentSoft,color:T.accent,whiteSpace:"nowrap",position:"relative"}}>
                  {imgLoading?"识别中…":"📷 识图"}
                  {!isPro&&<span style={{position:"absolute",top:-5,right:-5,fontSize:9,background:"#ffd166",color:"#7a5000",borderRadius:50,padding:"1px 4px",fontWeight:900}}>{Math.max(0,totalAiLimit-freeAiUsed)}次</span>}
                </button>
                <input ref={imgRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleImg}/>
              </div>
              {!isPro&&<div style={{fontSize:10,color:T.textLight,fontWeight:700,marginTop:-2}}>免费版剩余 AI 识图 {Math.max(0,totalAiLimit-freeAiUsed)} 次，Pro 无限次</div>}
              <textarea value={cmdText} onChange={e=>{setCmdText(e.target.value);setCmdErr("");}}
                placeholder={"A15-200, B3+500, 全部-100"}
                rows={2}
                style={{...inp({width:"100%",padding:"8px 12px",fontSize:13,resize:"none",lineHeight:1.6,boxSizing:"border-box"})}}/>
            </div>

            {cmdErr&&<div style={{fontSize:11,color:T.danger,fontWeight:600}}>{cmdErr}</div>}
            {imgErr&&<div style={{fontSize:11,color:T.danger,fontWeight:600}}>{imgErr}</div>}

            <div style={{display:"flex",gap:8,marginTop:2}}>
              <button className="btn" onClick={exitBatch} style={{...inp({flex:1,padding:"10px 0",borderRadius:50,cursor:"pointer",fontSize:13,color:T.textMid,fontWeight:700})}}>取消</button>
              <button className={`btn${safeTn==="fluffy"?" fur-btn":""}`} onClick={cmdTags.length>0?openTagLinkFlow:applyCmd}
                style={{flex:3,padding:"10px 0",borderRadius:50,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:800,background:T.accent,color:"#fff"}}>
                {cmdTags.length>0?"确认并继续":"执行"}
              </button>
            </div>
          </div>
        </div>}


        {showTagLink&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1200,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 18px"}}
            onClick={()=>{setShowTagLink(false);setTagLinkMode(null);}}>
            <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:360,background:T.card,borderRadius:24,padding:"18px 16px",boxShadow:"0 20px 60px rgba(0,0,0,0.18)"}}>
              <div style={{fontSize:15,fontWeight:900,color:T.text,textAlign:"center",marginBottom:14}}>这次扣豆要怎么记入作品？</div>

              {!tagLinkMode&&(
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  <button onClick={()=>setTagLinkMode("new")} style={{padding:"12px 0",borderRadius:16,border:`1.5px solid ${T.border}`,background:T.bg,color:T.text,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer"}}>新建完成作品</button>
                  <button onClick={()=>setTagLinkMode("link")} style={{padding:"12px 0",borderRadius:16,border:`1.5px solid ${T.border}`,background:T.bg,color:T.text,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer"}}>关联已有作品</button>
                  <button onClick={()=>setShowTagLink(false)} style={{padding:"11px 0",borderRadius:50,border:"none",background:"#f3f4f6",color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>返回</button>
                </div>
              )}

              {tagLinkMode==="new"&&(
                <div>
                  <input value={newDoneName} onChange={e=>setNewDoneName(e.target.value)} placeholder="完成作品 03/20"
                    style={{width:"100%",border:`1.5px solid ${T.border}`,borderRadius:14,padding:"10px 12px",fontSize:13,fontFamily:"'Nunito',sans-serif",background:T.bg,color:T.text,outline:"none",boxSizing:"border-box",marginBottom:10}}/>
                  {/* 标签选择 */}
                  {(()=>{
                    const allT=[...new Set(tasks.filter(t=>t.tags&&t.tags.length>0).flatMap(t=>t.tags))];
                    return(
                      <div style={{marginBottom:12}}>
                        <div style={{fontSize:11,color:T.textMid,fontWeight:700,marginBottom:6}}>选择标签（可多选）</div>
                        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:6}}>
                          {allT.map(tag=>(
                            <div key={tag} onClick={()=>setQuickDoneTags(prev=>prev.includes(tag)?prev.filter(t=>t!==tag):[...prev,tag])}
                              style={{padding:"4px 12px",borderRadius:50,border:`1.5px solid ${quickDoneTags.includes(tag)?T.accent:T.border}`,background:quickDoneTags.includes(tag)?T.accentSoft:T.card,color:quickDoneTags.includes(tag)?T.accent:T.textMid,fontSize:11,fontWeight:800,cursor:"pointer"}}>
                              {tag}
                            </div>
                          ))}
                          <div onClick={()=>{const t=prompt("新建标签");if(t?.trim()&&!quickDoneTags.includes(t.trim()))setQuickDoneTags(prev=>[...prev,t.trim()]);}}
                            style={{padding:"4px 12px",borderRadius:50,border:`1.5px dashed ${T.border}`,background:"transparent",color:T.textLight,fontSize:11,fontWeight:800,cursor:"pointer"}}>＋ 新建</div>
                        </div>
                        {quickDoneTags.length>0&&<div style={{fontSize:10,color:T.textMid}}>已选：{quickDoneTags.join("、")}</div>}
                      </div>
                    );
                  })()}
                  <div style={{display:"flex",gap:8}}>
                    <button onClick={()=>setTagLinkMode(null)} style={{flex:1,padding:"10px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:"pointer"}}>上一步</button>
                    <button onClick={()=>finishTagDeduction("new")} style={{flex:1,padding:"10px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer"}}>确认扣豆</button>
                  </div>
                </div>
              )}

              {tagLinkMode==="link"&&(
                <div>
                  <div style={{display:"flex",flexDirection:"column",gap:8,maxHeight:280,overflowY:"auto",marginBottom:12}}>
                    {tasks.filter(t=>t.status!=="done").length===0&&(
                      <div style={{fontSize:12,color:T.textMid,textAlign:"center",padding:"12px 0"}}>当前没有可关联的作品</div>
                    )}
                    {tasks.filter(t=>t.status!=="done").map(t=>(
                      <button key={t.id} onClick={()=>setLinkedTaskId(t.id)}
                        style={{display:"flex",alignItems:"center",gap:10,padding:"10px",borderRadius:16,border:`1.5px solid ${linkedTaskId===t.id?T.accent:T.border}`,background:linkedTaskId===t.id?T.accentSoft:T.bg,cursor:"pointer",textAlign:"left"}}>
                        <div style={{width:44,height:44,borderRadius:12,background:T.card,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:18}}>
                          {t.img?<img src={t.img} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:"🖼️"}
                        </div>
                        <div style={{fontSize:12,fontWeight:800,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{t.name}</div>
                      </button>
                    ))}
                  </div>
                  <div style={{display:"flex",gap:8}}>
                    <button onClick={()=>setTagLinkMode(null)} style={{flex:1,padding:"10px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:"pointer"}}>上一步</button>
                    <button onClick={()=>finishTagDeduction("link")} disabled={!linkedTaskId}
                      style={{flex:1,padding:"10px 0",borderRadius:50,border:"none",background:linkedTaskId?T.accent:"#cfd8e3",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:linkedTaskId?"pointer":"not-allowed"}}>确认扣豆</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {showRestockReminder&&(
          <RestockReminderModal
            T={T}
            count={restockNeedCount}
            threshold={restockReminderThreshold}
            topIds={restockNeedColors.slice(0,3).map(c=>c.id)}
            onClose={dismissRestockReminderForToday}
            onView={()=>{
              setShowRestockReminder(false);
              setShowRestock(true);
            }}
          />
        )}

        {showRestock&&<RestockModal T={T} stock={stock} wL={wL} onClose={()=>setShowRestock(false)}
          onRestockConfirm={(qtyMap)=>{
            pushHistory(stock,used);
            setStock(prev=>{
              const ns={...prev};
              Object.entries(qtyMap).forEach(([id,qty])=>{
                if(qty>0) ns[id]=(ns[id]||0)+qty;
              });
              return ns;
            });
          }}
        />}

        {/* 专注模式浮动导航条 */}
        {focusMode&&page==="stock"&&!batch&&(
          <div style={{position:"fixed",bottom:70,left:0,right:0,zIndex:250,display:"flex",justifyContent:"center",padding:"0 14px",pointerEvents:"none"}}>
            <div className="tt" style={{background:T.card,border:`1.5px solid ${T.accent}`,borderRadius:50,padding:"8px 12px",display:"flex",alignItems:"center",gap:10,boxShadow:`0 4px 20px ${T.accent}40`,pointerEvents:"all"}}>
              <button onClick={()=>focusNav(-1)} style={{width:34,height:34,borderRadius:"50%",border:`1.5px solid ${T.border}`,background:T.accentSoft,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Nunito',sans-serif",color:T.accent,fontWeight:800}}>‹</button>
              {focusColor?(
                <div style={{display:"flex",alignItems:"center",gap:8,minWidth:100}}>
                  <div style={{width:28,height:28,borderRadius:9,background:ALL_COLORS.find(c=>c.id===focusColor)?.hex||"#ccc",border:"2px solid rgba(0,0,0,0.12)",flexShrink:0,boxShadow:`0 0 0 2px ${T.accent}`}}/>
                  <div>
                    <div style={{fontSize:13,fontWeight:900,color:T.accent}}>{focusColor}</div>
                    <div style={{fontSize:9,color:T.textMid,fontWeight:600}}>{filtered.findIndex(c=>c.id===focusColor)+1} / {filtered.length}</div>
                  </div>
                </div>
              ):(
                <div style={{fontSize:12,color:T.textMid,fontWeight:700,minWidth:100,textAlign:"center"}}>点色卡开始</div>
              )}
              <button onClick={()=>focusNav(1)} style={{width:34,height:34,borderRadius:"50%",border:`1.5px solid ${T.border}`,background:T.accentSoft,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Nunito',sans-serif",color:T.accent,fontWeight:800}}>›</button>
              <div style={{width:1,height:20,background:T.border}}/>
              <button onClick={exitFocusMode} style={{padding:"4px 10px",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,color:T.textMid}}>退出</button>
            </div>
          </div>
        )}

        {/* 底部导航栏 */}
        <div className={`tt${safeTn==="fluffy"?" fur-nav":""}`} style={{flexShrink:0,background:T.nav,borderTop:`1.5px solid ${T.navBorder}`,display:"flex",justifyContent:"space-around",padding:"10px 0 20px",zIndex:200}}>
          {[{key:"home",label:"首页",iconA:"🏡",iconI:"🏠"},{key:"stock",label:"库存",iconA:"🫘",iconI:"🫙"},{key:"works",label:"作品",iconA:"🎨",iconI:"🖼️"},{key:"mine",label:"我的",iconA:"👤",iconI:"👤"}].map(n=>{
            const active=page===n.key;
            return(
              <button key={n.key} className="btn" onClick={()=>{setPage(n.key);exitBatch();}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,background:"none",border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",padding:"3px 14px"}}>
                <span style={{fontSize:20,transition:"filter 0.2s,transform 0.2s",filter:active?"none":"grayscale(0.5) opacity(0.35)",transform:active?"scale(1.1)":"scale(1)"}}>{active?n.iconA:n.iconI}</span>
                <span style={{fontSize:9,fontWeight:active?800:600,color:active?T.accent:T.textLight,transition:"color 0.2s"}}>{n.label}</span>
                <div style={{width:active?18:0,height:2,borderRadius:10,background:T.navActiveDot,marginTop:1,transition:"width 0.25s"}}/>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

// 年份横滚条组件
// ══════════════════════════════════
//  WorksPage（作品页）
// ══════════════════════════════════
// ══════════════════════════════════
//  颜色相近度计算（hex→Lab近似比较）
// ══════════════════════════════════
function hexToRgb(hex){
  const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);
  return [r,g,b];
}
function colorDistance(h1,h2){
  const [r1,g1,b1]=hexToRgb(h1),[r2,g2,b2]=hexToRgb(h2);
  return Math.sqrt((r1-r2)**2+(g1-g2)**2+(b1-b2)**2);
}
// ══════════════ 缺色替换对照表 ══════════════
const REPLACE_TABLE={
  A1:["A2","A24","A3"],A2:["A1","A3","A24"],A3:["A16","A22","A24"],A4:["A5","A22"],A5:["A4","A8","A20"],
  A6:["A26"],A7:["A10","A14"],A8:["A20","A4","A5"],A9:["F17","F18","A10"],A10:["A13","A7"],
  A11:["G9","A21","A18"],A12:["G2","G3","A9"],A13:["A10"],A14:["F13","A7"],A15:["A4","A5"],
  A16:["A2","A3","A24"],A17:["A21","A25","A6"],A18:["G9","G1","A11"],A19:["F24","F1"],A20:["A8","A5","A4"],
  A21:["A11","A25"],A22:["A3","A16"],A23:["G1","G4"],A24:["A2","G11"],A25:["A21","A17","A20"],A26:["A6","A20"],
  B1:["B18","B29"],B2:["B4","B5","B14"],B3:["B28"],B4:["B2","B5"],B5:["B2","B4"],
  B6:["B10","C15","C25"],B7:["B12","B21"],B8:["B12"],B9:["B15","B12"],B10:["C22","C25","B6"],
  B11:["B23","B17"],B12:["B8","B7","B21"],B13:["B16","B24","B14"],B14:["B2","B4"],B15:["B9","B23","B12"],
  B16:["B13","B24","B14"],B17:["B29","B32","B11"],B18:["B1","B29"],B19:["B7","B8","B12"],B20:["C1","B31"],
  B21:["B7","B12"],B22:["B21","B9","B12"],B23:["B11","B17"],B24:["B30","B13","B14"],B25:["M2","B10"],
  B26:["M6","M9","B17"],B27:["M5","G11","B17"],B28:["B3"],B29:["B1","B18"],B30:["B24","A24"],
  B31:["C1","B14","B16"],B32:["M5","B27","B17"],
  C1:["B20","C22"],C2:["C3","C17"],C3:["C2","C24"],C4:["C10","C17"],C5:["C4","C20"],
  C6:["D17","C26"],C7:["C8","C9","C16"],C8:["C9","D3"],C9:["C6","C8"],C10:["C17","C4"],
  C11:["C19","C15"],C12:["C18","C16"],C13:["C21","C23"],C14:["C27","C13"],C15:["B6","B7","C11"],
  C16:["C8","D3"],C17:["C4","C10"],C18:["C12","C16"],C19:["B21","C11"],C20:["C5"],
  C21:["C13","C27"],C22:["B10"],C23:["C24","C13","C21"],C24:["C13","C23"],C25:["B10"],
  C26:["C22","C20","C5"],C27:["C21","D16","H17"],C28:["D16","C13","D11"],C29:["D22","D2"],
  D1:["D24","D2"],D2:["D24","D17"],D3:["D4"],D4:["D3"],D5:["D12","E22"],
  D6:["D18"],D7:["D18","D15"],D8:["D23"],D9:["D19"],D10:["D15"],
  D11:["C28","D17"],D12:["E22","D5"],D13:["E13"],D14:["D21","D20"],D15:["D10"],
  D16:["C28","C13","D11"],D17:["C13"],D18:["M11","E23"],D19:["E20"],D20:["D14"],
  D21:["D14","D13"],D22:["C29","D15"],D23:["D8","H10","E24"],D24:["D2","D11"],D25:["D15"],D26:["D8","D12"],
  E1:["E14","E11","F22"],E2:["E19"],E3:["E4"],E4:["E3","F9"],E5:["E4","E10"],
  E6:["F12"],E7:["E10","E13"],E8:["F22","E11","E14"],E9:["E3"],E10:["E7","E13"],
  E11:["E1","E14"],E12:["E2","F21"],E13:["D13"],E14:["E11","F16","E1"],E15:["E2"],
  E16:["H19","H8","H2"],E17:["E24","E16","E2"],E18:["E8"],E19:["E2"],E20:["D19","E2"],
  E21:["M7","M8","D19"],E22:["D5","D12"],E23:["M11","M8","D12"],E24:["E17","D8","H8"],
  F1:["A19","A12","F13"],F2:["F12","F3","F5"],F3:["F25","F19","F13"],F4:["F5","F25","F15"],F5:["F4","F15"],
  F6:["F13"],F7:["F8"],F8:["E7","F5","F15"],F9:["E3","E4"],F10:["G10","G7","G21"],
  F11:["G8"],F12:["E6","F2","F5"],F13:["F25","F6"],F14:["F24","A12","E3"],F15:["F5"],
  F16:["E1","E14"],F17:["A12","A19","G3"],F18:["A9","G5","F23"],F19:["F3","F5"],F20:["M14","G3"],
  F21:["E3","E12","E2"],F22:["E8","E11"],F23:["F18","F3"],F24:["F14","E1"],F25:["F3","F13"],
  G1:["G18","A18","G3"],G2:["G18","A12","G3"],G3:["G2","E14","G18"],G4:["G16","A23","G3"],G5:["G19","G13","G6"],
  G6:["G5","G19"],G7:["G10","G13","F10"],G8:["F11"],G9:["A18","A11"],G10:["G7","G13"],
  G11:["A2","A24","A3"],G12:["A21","A11"],G13:["G7"],G14:["M12","G7"],G15:["A2","A24","H2"],
  G16:["G4","H13","A1"],G17:["M9","E21","G8"],G18:["G3","G1"],G19:["G5","G6"],G20:["G21","G13"],G21:["G13","G20"],
  H1:[],H2:[],H3:["H11","H23"],H4:["M15"],H5:["H4","H6"],
  H6:["H7","H16"],H7:["H6","H16"],H8:["E24","E16","E8"],H9:["H17","H22","H2"],H10:["D23","D8"],
  H11:["H3","H23"],H12:["H18","H21","H2"],H13:["M4","G16","G3"],H14:["H9","H3"],H15:["H20","M1","H3"],
  H16:["H6","H7"],H17:["H2","H9","H22"],H18:["H12","H21","H2"],H19:["E24","H12","H2"],H20:["H15","M15","H3"],
  H21:["H12","H18","H2"],H22:["H17","H9","H2"],H23:["H4","H3","M1"],
  M1:["H15","M5","H3"],M2:["B17","H5","M6"],M3:["M2","H5"],M4:["H3","H11","H23"],M5:["M6","H3"],
  M6:["M9","H3"],M7:["M8","H3","M4"],M8:["E23","M7","H4"],M9:["M6","G17","H4"],M10:["M8","D18"],
  M11:["E23","M8","D18"],M12:["G14","G8"],M13:["G21","A23","G7"],M14:["F10","F25"],M15:["H4"],
};

function getSimilarColors(targetId,stock,count=6){
  const target=ALL_COLORS.find(c=>c.id===targetId);
  if(!target)return[];
  // 优先用对照表
  const tableIds=REPLACE_TABLE[targetId]||[];
  const tableResults=tableIds
    .map(id=>{const c=ALL_COLORS.find(x=>x.id===id);return c?{...c,qty:stock[id]||0,fromTable:true}:null;})
    .filter(Boolean);
  // 剩余用色值距离补足
  const usedIds=new Set([targetId,...tableIds]);
  const series=targetId.match(/^[A-Za-z]+/)[0].toUpperCase();
  const fallback=ALL_COLORS
    .filter(c=>!usedIds.has(c.id))
    .map(c=>({...c,dist:colorDistance(target.hex,c.hex),qty:stock[c.id]||0,sameSeries:c.id.startsWith(series)}))
    .sort((a,b)=>a.dist-b.dist);
  return [...tableResults,...fallback].slice(0,count);
}

// ══════════════════════════════════
//  MissingColorPage（缺色替换）
// ══════════════════════════════════
function MissingColorPage({T,stock,onBack}){
  const [mode,setMode]=useState("scan"); // scan | search
  // --- 图纸识别 ---
  const [step,setStep]=useState("upload");
  const [imgSrc,setImgSrc]=useState(null);
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState("");
  const [parsed,setParsed]=useState([]);
  const [replaces,setReplaces]=useState({});
  const [expanded,setExpanded]=useState({});
  const fileRef=useRef(null);
  const cropImgRef=useRef(null);
  const [cropImg,setCropImg]=useState(null);
  const [cropBox,setCropBox]=useState(null);
  const [cropDrag,setCropDrag]=useState(null);

  // --- 单色搜索 ---
  const [searchQ,setSearchQ]=useState("");
  const searchColor=ALL_COLORS.find(c=>c.id===searchQ.trim().toUpperCase());
  const searchResults=searchColor
    ? (REPLACE_TABLE[searchColor.id]||[])
        .map(id=>ALL_COLORS.find(c=>c.id===id))
        .filter(Boolean)
        .map(c=>({...c,qty:stock[c.id]||0,fromTable:true}))
    : [];

  function handleFile(e){
    const f=e.target.files?.[0];
    if(!f)return;
    const url=URL.createObjectURL(f);
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement('canvas');
      const max=1600;
      let w=img.width,h=img.height;
      if(w>max||h>max){
        if(w>h){h=Math.round(h*max/w);w=max;}
        else{w=Math.round(w*max/h);h=max;}
      }
      canvas.width=w;
      canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      URL.revokeObjectURL(url);
      setCropImg(canvas.toDataURL('image/jpeg',0.92));
      setCropBox(null);
      setErr("");
    };
    img.src=url;
    e.target.value="";
  }

  async function confirmCrop(){
    if(!cropImg)return;
    try{
      let finalB64=cropImg;
      if(cropBox&&cropImgRef.current){
        const el=cropImgRef.current;
        const scaleX=el.naturalWidth/el.clientWidth;
        const scaleY=el.naturalHeight/el.clientHeight;
        const canvas=document.createElement('canvas');
        canvas.width=Math.max(1,Math.round(cropBox.w*scaleX));
        canvas.height=Math.max(1,Math.round(cropBox.h*scaleY));
        const ctx=canvas.getContext('2d');
        const imgEl=new Image();
        await new Promise(res=>{imgEl.onload=res;imgEl.src=cropImg;});
        ctx.drawImage(
          imgEl,
          Math.round(cropBox.x*scaleX),
          Math.round(cropBox.y*scaleY),
          canvas.width,
          canvas.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
        finalB64=canvas.toDataURL('image/jpeg',0.92);
      }
      setImgSrc(finalB64);
      setCropImg(null);
      setCropBox(null);
    }catch(e){
      setErr("框选失败，请重试～");
    }
  }

  async function recognize(){
    if(!imgSrc)return;
    setLoading(true);
    setErr("");
    try{
      const resp=await fetch('/api/qwen',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
          image:imgSrc,
          prompt:`请识别图纸下方色块统计区域，提取每个色号和对应的颗数，格式为：色号 颗数，每行一个，例如：\nA1 200\nB3 150\n只输出色号和数字，不要其他内容。`
        })
      });
      const data=await resp.json();
      if(data.result){
        const lines=data.result.split(/[\n,，]+/).map(s=>s.trim()).filter(Boolean);
        const items=lines.map(line=>{
          const m=line.match(/([A-Za-z]+\d+)\D+(\d+)/);
          return m?{id:m[1].toUpperCase(),need:parseInt(m[2])}:null;
        }).filter(Boolean);
        if(items.length>0){
          setParsed(items);
          setStep("result");
        }else{
          setErr("识别失败，建议框选底部统计表区域再试～");
        }
      }else{
        setErr("识别失败，建议框选底部统计表区域再试～");
      }
    }catch(e){
      setErr("请求失败："+e.message);
    }finally{
      setLoading(false);
    }
  }

  function resetScan(){
    setStep("upload");
    setImgSrc(null);
    setParsed([]);
    setReplaces({});
    setExpanded({});
    setErr("");
    setLoading(false);
  }

  function pickReplace(originalId,replaceId){
    setReplaces(prev=>({...prev,[originalId]:replaceId}));
    setExpanded(prev=>({...prev,[originalId]:false}));
  }

  const missingItems=parsed.filter(i=>(stock[i.id]||0)<i.need);
  const okItems=parsed.filter(i=>(stock[i.id]||0)>=i.need);

  const tabStyle=(active)=>({
    padding:"7px 18px",
    borderRadius:50,
    border:"none",
    fontFamily:"'Nunito',sans-serif",
    fontSize:12,
    fontWeight:800,
    cursor:"pointer",
    background:active?T.accent:"transparent",
    color:active?"#fff":T.textMid,
    transition:"all 0.15s"
  });

  return(
    <div className="fade" style={{padding:"18px 16px",fontFamily:"'Nunito',sans-serif"}}>
      {cropImg&&(
        <div style={{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.88)",display:"flex",flexDirection:"column",padding:"10px 12px",boxSizing:"border-box"}}>
          <div style={{fontSize:13,color:"#fff",fontWeight:700,textAlign:"center",padding:"4px 0 10px",flexShrink:0}}>拖拽边框调整选区 · 框选统计表区域</div>
          <div
            style={{position:"relative",flex:1,minHeight:0,overflow:"auto",borderRadius:12,display:"flex",alignItems:"flex-start",justifyContent:"center",WebkitOverflowScrolling:"touch"}}
            onPointerMove={ev=>{
              if(!cropDrag||!cropImgRef.current)return;
              const el=cropImgRef.current.getBoundingClientRect();
              const cx=Math.max(0,Math.min(ev.clientX-el.left,el.width));
              const cy=Math.max(0,Math.min(ev.clientY-el.top,el.height));
              const dx=cx-cropDrag.lastX;
              const dy=cy-cropDrag.lastY;
              setCropBox(b=>{
                if(!b)return b;
                let {x,y,w,h}=b;
                const minS=30;
                if(cropDrag.type==="move"){
                  x=Math.max(0,Math.min(x+dx,el.width-w));
                  y=Math.max(0,Math.min(y+dy,el.height-h));
                }else{
                  if(cropDrag.type.includes("l")){const nx=Math.min(x+dx,x+w-minS);w=w-(nx-x);x=nx;}
                  if(cropDrag.type.includes("r")){w=Math.max(minS,Math.min(w+dx,el.width-x));}
                  if(cropDrag.type.includes("t")){const ny=Math.min(y+dy,y+h-minS);h=h-(ny-y);y=ny;}
                  if(cropDrag.type.includes("b")){h=Math.max(minS,Math.min(h+dy,el.height-y));}
                }
                return {x,y,w,h};
              });
              setCropDrag(d=>({...d,lastX:cx,lastY:cy}));
            }}
            onPointerUp={()=>setCropDrag(null)}
            onPointerCancel={()=>setCropDrag(null)}
          >
            <div style={{position:"relative",width:"100%",maxWidth:680,margin:"0 auto",paddingBottom:12}}>
              <img
                ref={cropImgRef}
                src={cropImg}
                alt=""
                onLoad={ev=>{
                  const {clientWidth:w,clientHeight:h}=ev.target;
                  const defaultH=Math.max(44,Math.min(h*0.22,110));
                  setCropBox({x:Math.max(8,w*0.04),y:Math.max(8,h-defaultH-8),w:Math.max(80,w*0.92),h:defaultH});
                  const scroller=ev.target.parentElement?.parentElement;
                  if(scroller){
                    requestAnimationFrame(()=>{scroller.scrollTop=Math.max(0,h-scroller.clientHeight);});
                  }
                }}
                style={{display:"block",width:"100%",height:"auto",maxWidth:"100%",maxHeight:"none",objectFit:"contain",userSelect:"none",touchAction:"none",position:"relative",zIndex:1}}
              />
              {cropBox&&(
                <>
                  <div style={{position:"absolute",left:0,top:0,width:cropBox.x,height:cropImgRef.current?.clientHeight||0,background:"rgba(0,0,0,0.45)",pointerEvents:"none",zIndex:2}}/>
                  <div style={{position:"absolute",left:cropBox.x+cropBox.w,top:0,right:0,height:cropImgRef.current?.clientHeight||0,background:"rgba(0,0,0,0.45)",pointerEvents:"none",zIndex:2}}/>
                  <div style={{position:"absolute",left:cropBox.x,top:0,width:cropBox.w,height:cropBox.y,background:"rgba(0,0,0,0.45)",pointerEvents:"none",zIndex:2}}/>
                  <div style={{position:"absolute",left:cropBox.x,top:cropBox.y+cropBox.h,width:cropBox.w,height:Math.max(0,(cropImgRef.current?.clientHeight||0)-cropBox.y-cropBox.h),background:"rgba(0,0,0,0.45)",pointerEvents:"none",zIndex:2}}/>
                  <div
                    onPointerDown={ev=>{
                      ev.stopPropagation();
                      const el=cropImgRef.current.getBoundingClientRect();
                      setCropDrag({type:"move",lastX:ev.clientX-el.left,lastY:ev.clientY-el.top});
                      ev.currentTarget.setPointerCapture(ev.pointerId);
                    }}
                    style={{position:"absolute",left:cropBox.x,top:cropBox.y,width:cropBox.w,height:cropBox.h,border:"2px solid #60d4f0",boxSizing:"border-box",cursor:"move",touchAction:"none",zIndex:3,background:"rgba(96,212,240,0.08)"}}
                  >
                    {[1,2].map(i=><div key={"v"+i} style={{position:"absolute",left:`${i*33.3}%`,top:0,bottom:0,width:1,background:"rgba(96,212,240,0.45)"}}/>)}
                    {[1,2].map(i=><div key={"h"+i} style={{position:"absolute",top:`${i*33.3}%`,left:0,right:0,height:1,background:"rgba(96,212,240,0.45)"}}/>)}
                    {[
                      {type:"tl",style:{top:-10,left:-10,cursor:"nw-resize"}},
                      {type:"t", style:{top:-10,left:"50%",transform:"translateX(-50%)",cursor:"n-resize"}},
                      {type:"tr",style:{top:-10,right:-10,cursor:"ne-resize"}},
                      {type:"r", style:{top:"50%",right:-10,transform:"translateY(-50%)",cursor:"e-resize"}},
                      {type:"br",style:{bottom:-10,right:-10,cursor:"se-resize"}},
                      {type:"b", style:{bottom:-10,left:"50%",transform:"translateX(-50%)",cursor:"s-resize"}},
                      {type:"bl",style:{bottom:-10,left:-10,cursor:"sw-resize"}},
                      {type:"l", style:{top:"50%",left:-10,transform:"translateY(-50%)",cursor:"w-resize"}},
                    ].map(({type,style})=>(
                      <div
                        key={type}
                        onPointerDown={ev=>{
                          ev.stopPropagation();
                          const el=cropImgRef.current.getBoundingClientRect();
                          setCropDrag({type,lastX:ev.clientX-el.left,lastY:ev.clientY-el.top});
                          ev.currentTarget.setPointerCapture(ev.pointerId);
                        }}
                        style={{position:"absolute",width:20,height:20,background:"#60d4f0",borderRadius:6,border:"2px solid #fff",boxSizing:"border-box",touchAction:"none",...style}}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div style={{display:"flex",gap:12,marginTop:12,justifyContent:"center",padding:"10px 0 4px",flexShrink:0}}>
            <button onClick={()=>{setCropImg(null);setCropBox(null);}} style={{padding:"8px 24px",borderRadius:50,border:"1.5px solid rgba(255,255,255,0.3)",background:"transparent",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>取消</button>
            <button onClick={confirmCrop} style={{padding:"8px 28px",borderRadius:50,border:"none",background:"#60d4f0",color:"#1a2a3a",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>✓ 确认框选</button>
          </div>
        </div>
      )}

      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
        <button onClick={onBack} style={{background:"none",border:"none",fontSize:22,color:T.textMid,cursor:"pointer"}}>←</button>
        <div style={{fontSize:15,fontWeight:800,color:T.text}}>🔍 缺色替换</div>
      </div>

      {/* Tab切换 */}
      <div style={{display:"flex",gap:4,background:T.bg||T.accentSoft,borderRadius:50,padding:4,marginBottom:18}}>
        <button style={tabStyle(mode==="scan")} onClick={()=>setMode("scan")}>图纸识别</button>
        <button style={tabStyle(mode==="search")} onClick={()=>setMode("search")}>单色查询</button>
      </div>

      {/* 单色查询 */}
      {mode==="search"&&(
        <div>
          <input value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder="输入色号，如 A1、H12…"
            style={{width:"100%",border:`1.5px solid ${T.accent}`,borderRadius:50,padding:"11px 18px",fontSize:14,fontFamily:"'Nunito',sans-serif",background:T.card,color:T.text,outline:"none",boxSizing:"border-box",marginBottom:16,fontWeight:700}}/>
          {searchQ&&!searchColor&&(
            <div style={{textAlign:"center",color:T.textLight,fontSize:13,padding:"16px 0"}}>找不到这个色号，检查一下拼写？</div>
          )}
          {searchColor&&(
            <div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14,padding:"12px 14px",background:T.card,borderRadius:16,border:`1.5px solid ${T.border}`}}>
                <div style={{width:36,height:36,borderRadius:10,background:searchColor.hex,border:"1.5px solid rgba(0,0,0,0.08)",flexShrink:0}}/>
                <div>
                  <div style={{fontSize:14,fontWeight:900,color:T.text}}>{searchColor.id}</div>
                  <div style={{fontSize:11,color:T.textMid}}>库存 {Math.round(stock[searchColor.id]||0)} 粒</div>
                </div>
              </div>
              <div style={{fontSize:12,fontWeight:800,color:T.textMid,marginBottom:10}}>推荐替换色</div>
              {searchResults.length===0&&(
                <div style={{textAlign:"center",color:T.textLight,fontSize:12,padding:"10px 0 16px"}}>这个色号暂时没有预设替换表</div>
              )}
              {searchResults.map((c,i)=>{
                const enough=(stock[c.id]||0)>0;
                return(
                  <div key={c.id} style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",background:T.card,borderRadius:14,border:`1.5px solid ${enough?T.border+"88":T.border}`,marginBottom:8,boxShadow:T.cardShadow}}>
                    <div style={{fontSize:12,color:T.textLight,width:18,textAlign:"center",fontWeight:700}}>#{i+1}</div>
                    <div style={{width:32,height:32,borderRadius:9,background:c.hex,border:"1.5px solid rgba(0,0,0,0.08)",flexShrink:0}}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:13,fontWeight:900,color:T.text}}>{c.id}</div>
                    </div>
                    <div style={{fontSize:11,fontWeight:700,color:enough?"#4caf50":T.textLight}}>{enough?`库存${Math.round(stock[c.id]||0)}粒`:"无库存"}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 图纸识别 */}
      {mode==="scan"&&(<>
        {step==="upload"&&(
          <div>
            {!imgSrc?(
              <div onClick={()=>fileRef.current?.click()} style={{background:T.accentSoft,border:`2px dashed ${T.accent}`,borderRadius:22,padding:"36px 20px",textAlign:"center",cursor:"pointer",marginBottom:16}}>
                <div style={{fontSize:40,marginBottom:10}}>📷</div>
                <div style={{fontSize:14,fontWeight:800,color:T.accent}}>点击上传图纸</div>
                <div style={{fontSize:11,color:T.textMid,marginTop:6,lineHeight:1.7}}>上传后可框选图纸下方<br/>「色块统计区」再识别</div>
              </div>
            ):(
              <div style={{marginBottom:16}}>
                <img src={imgSrc} style={{width:"100%",borderRadius:16,marginBottom:12,maxHeight:300,objectFit:"contain",background:"#f0f0f0"}} alt=""/>
                <div style={{display:"flex",gap:8}}>
                  <button onClick={()=>{setImgSrc(null);setCropImg(null);setCropBox(null);}} style={{flex:1,padding:"10px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>重新选图</button>
                  <button onClick={recognize} disabled={loading} style={{flex:2,padding:"10px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer",opacity:loading?0.7:1}}>
                    {loading?"🔍 识别中…":"✓ 开始识别"}
                  </button>
                </div>
              </div>
            )}
            {err&&<div style={{background:"#fff0f0",border:"1px solid #ffb3b3",borderRadius:12,padding:"10px 14px",fontSize:12,color:"#e05050",fontWeight:600}}>{err}</div>}
            <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleFile}/>
          </div>
        )}

        {step==="result"&&(
          <div>
            {missingItems.length>0&&(
              <div style={{marginBottom:16}}>
                <div style={{fontSize:12,fontWeight:800,color:T.warn,marginBottom:10,letterSpacing:0.5}}>⚠️ 库存不足 · {missingItems.length}个色号</div>
                {missingItems.map(item=>{
                  const have=stock[item.id]||0;
                  const short=item.need-have;
                  const replaced=replaces[item.id];
                  const replacedColor=replaced?ALL_COLORS.find(c=>c.id===replaced):null;
                  const replacedHave=replaced?stock[replaced]||0:0;
                  const replacedOk=replacedHave>=item.need;
                  const similar=getSimilarColors(item.id,stock,6);
                  const isExpanded=expanded[item.id];
                  const origColor=ALL_COLORS.find(c=>c.id===item.id);
                  return(
                    <div key={item.id} style={{background:T.card,border:`1.5px solid ${replaced?(replacedOk?"#b6eab6":"#fde5b0"):T.warn+"44"}`,borderRadius:18,padding:"14px",marginBottom:10,boxShadow:T.cardShadow}}>
                      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                        <div style={{width:36,height:36,borderRadius:10,background:origColor?.hex,border:"1.5px solid rgba(0,0,0,0.1)",flexShrink:0}}/>
                        <div style={{flex:1}}>
                          <div style={{fontSize:14,fontWeight:800,color:T.text}}>{item.id}</div>
                          <div style={{fontSize:11,color:T.warn,fontWeight:600}}>需要{item.need}粒 · 库存{have}粒 · 差{short}粒</div>
                        </div>
                        {!replaced&&<div style={{fontSize:10,background:T.warn,color:"#fff",borderRadius:6,padding:"2px 8px",fontWeight:700}}>缺货</div>}
                      </div>
                      {replaced&&replacedColor&&(
                        <div style={{background:replacedOk?"#f0faf0":"#fff8ed",borderRadius:12,padding:"10px 12px",marginBottom:8}}>
                          <div style={{display:"flex",alignItems:"center",gap:8}}>
                            <div style={{fontSize:12,color:T.textMid,fontWeight:600}}>→ 替换为</div>
                            <div style={{width:24,height:24,borderRadius:7,background:replacedColor.hex,border:"1.5px solid rgba(0,0,0,0.1)"}}/>
                            <div style={{flex:1,fontSize:13,fontWeight:800,color:T.text}}>{replaced}</div>
                            <div style={{fontSize:11,fontWeight:700,color:replacedOk?"#4caf50":"#f5a623"}}>
                              {replacedOk?`✅ ${replacedHave}粒够用`:`⚠️ 差${item.need-replacedHave}粒`}
                            </div>
                          </div>
                          <button onClick={()=>setReplaces(prev=>{const n={...prev};delete n[item.id];return n;})}
                            style={{marginTop:8,background:"none",border:"none",fontSize:11,color:T.textLight,cursor:"pointer",padding:0,fontFamily:"'Nunito',sans-serif"}}>✕ 取消选择</button>
                        </div>
                      )}
                      {!replaced&&(
                        <div>
                          <div style={{fontSize:11,color:T.textMid,fontWeight:600,marginBottom:8}}>推荐替换色：</div>
                          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                            {(isExpanded?similar:similar.slice(0,3)).map(c=>{
                              const enough=c.qty>=item.need;
                              return(
                                <div key={c.id} onClick={()=>pickReplace(item.id,c.id)}
                                  style={{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",borderRadius:12,border:`1.5px solid ${enough?"#b6eab6":"#fde5b0"}`,background:enough?"#f0faf0":"#fff8ed",cursor:"pointer"}}>
                                  <div style={{width:20,height:20,borderRadius:6,background:c.hex,border:"1px solid rgba(0,0,0,0.1)",flexShrink:0}}/>
                                  <div>
                                    <div style={{fontSize:12,fontWeight:800,color:T.text}}>{c.id}</div>
                                    <div style={{fontSize:9,color:c.fromTable?T.accent:T.textLight,fontWeight:700}}>{c.fromTable?"推荐":""}</div>
                                    <div style={{fontSize:10,color:enough?"#4caf50":"#f5a623",fontWeight:600}}>{enough?`${c.qty}粒✓`:`差${item.need-c.qty}粒`}</div>
                                  </div>
                                </div>
                              );
                            })}
                            {similar.length>3&&(
                              <div onClick={()=>setExpanded(prev=>({...prev,[item.id]:!prev[item.id]}))}
                                style={{display:"flex",alignItems:"center",padding:"6px 10px",borderRadius:12,border:`1.5px solid ${T.border}`,background:T.card,cursor:"pointer",fontSize:11,color:T.textMid,fontWeight:700}}>
                                {isExpanded?"收起":"更多"}{isExpanded?"↑":"↓"}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            {okItems.length>0&&(
              <div style={{marginBottom:16}}>
                <div style={{fontSize:12,fontWeight:800,color:"#4caf50",marginBottom:10,letterSpacing:0.5}}>✅ 库存充足 · {okItems.length}个色号</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                  {okItems.map(item=>{
                    const c=ALL_COLORS.find(x=>x.id===item.id);
                    return(
                      <div key={item.id} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:12,border:"1.5px solid #d4f0d4",background:"#f0faf0"}}>
                        <div style={{width:18,height:18,borderRadius:5,background:c?.hex,border:"1px solid rgba(0,0,0,0.1)"}}/>
                        <div style={{fontSize:12,fontWeight:700,color:T.text}}>{item.id}</div>
                        <div style={{fontSize:10,color:"#4caf50",fontWeight:600}}>{Math.round(stock[item.id]||0)}粒</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            <div style={{display:"flex",gap:10,marginTop:8}}>
              <button onClick={resetScan}
                style={{flex:1,padding:"12px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>重新识别</button>
              {missingItems.length>0&&(
                <button onClick={()=>setStep("summary")}
                  style={{flex:2,padding:"12px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>查看替换方案 →</button>
              )}
            </div>
          </div>
        )}

        {step==="summary"&&(
          <div>
            <div style={{fontSize:13,fontWeight:800,color:T.text,marginBottom:14}}>📋 替换方案汇总</div>
            {missingItems.map(item=>{
              const replaced=replaces[item.id];
              const origColor=ALL_COLORS.find(c=>c.id===item.id);
              const repColor=replaced?ALL_COLORS.find(c=>c.id===replaced):null;
              return(
                <div key={item.id} style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:16,padding:"12px 14px",marginBottom:10,display:"flex",alignItems:"center",gap:12,boxShadow:T.cardShadow}}>
                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                    <div style={{width:30,height:30,borderRadius:9,background:origColor?.hex,border:"1.5px solid rgba(0,0,0,0.1)"}}/>
                    <div style={{fontSize:13,fontWeight:800,color:T.text}}>{item.id}</div>
                  </div>
                  <div style={{fontSize:16,color:T.textLight}}>→</div>
                  {replaced&&repColor?(
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <div style={{width:30,height:30,borderRadius:9,background:repColor.hex,border:"1.5px solid rgba(0,0,0,0.1)"}}/>
                      <div>
                        <div style={{fontSize:13,fontWeight:800,color:T.text}}>{replaced}</div>
                        <div style={{fontSize:10,color:"#4caf50",fontWeight:600}}>{item.need}粒</div>
                      </div>
                    </div>
                  ):(
                    <div style={{fontSize:12,color:T.textLight,fontStyle:"italic"}}>未选替代色</div>
                  )}
                </div>
              );
            })}
            <button onClick={()=>setStep("result")}
              style={{width:"100%",marginTop:8,padding:"12px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>← 返回修改</button>
          </div>
        )}
      </>)}
    </div>
  );
}


// ══════════════════════════════════
//  作品封面压缩：避免 base64 太大导致 localStorage / Supabase 同步失败
// ══════════════════════════════════
function compressImageFileToDataUrl(file,{max=300,quality=0.7}={}){
  return new Promise((resolve,reject)=>{
    if(!file){resolve(null);return;}
    const reader=new FileReader();
    reader.onerror=()=>reject(reader.error||new Error("图片读取失败"));
    reader.onload=ev=>{
      const img=new Image();
      img.onerror=()=>reject(new Error("图片加载失败"));
      img.onload=()=>{
        try{
          let w=img.width,h=img.height;
          if(w>h){if(w>max){h=Math.round(h*max/w);w=max;}}
          else{if(h>max){w=Math.round(w*max/h);h=max;}}
          const canvas=document.createElement('canvas');
          canvas.width=w;canvas.height=h;
          const ctx=canvas.getContext('2d');
          ctx.drawImage(img,0,0,w,h);
          resolve(canvas.toDataURL('image/jpeg',quality));
        }catch(err){reject(err);}
      };
      img.src=ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ══════════════════════════════════
//  FocusMode（专注模式全屏）
// ══════════════════════════════════

// ══════════════════════════════════
//  图纸绘制页
// ══════════════════════════════════
const BOARD_SIZES=[
  {label:"52×52",cols:52,rows:52},
  {label:"78×78",cols:78,rows:78},
  {label:"104×104",cols:104,rows:104},
];
const SERIES_NAMES={A:"黄橙",B:"绿",C:"蓝",D:"紫",E:"粉红",F:"红",G:"棕肤",H:"黑白灰",M:"大地"};

function DrawingPage({T,tn,onBack}){
  const [sizeIdx,setSizeIdx]=useState(0);
  const {cols,rows}=BOARD_SIZES[sizeIdx];
  const [cells,setCells]=useState(()=>Array(rows).fill(null).map(()=>Array(cols).fill(null)));
  const [activeSeries,setActiveSeries]=useState(null); // null=色系栏显示，string=展开该色系
  const [pickedColor,setPickedColor]=useState(null);
  const [tool,setTool]=useState("pen"); // pen | eraser | fill
  const [mirrorMode,setMirrorMode]=useState(false);
  const [showGrid,setShowGrid]=useState(false);
  const [favorites,setFavorites]=useState([]);
  const [showFav,setShowFav]=useState(true);
  const [history,setHistory]=useState([]);
  const [redoStack,setRedoStack]=useState([]);
  const [painting,setPainting]=useState(false);
  const [cellSize,setCellSize]=useState(10);
  const [confirmSize,setConfirmSize]=useState(null);
  const canvasRef=useRef(null);
  const isFluffyUi=tn==="fluffy";

  // 色系列表
  const seriesList=["A","B","C","D","E","F","G","H","M"];
  const seriesColors=(s)=>ALL_COLORS.filter(c=>c.id.startsWith(s));

  // 换尺寸确认
  function requestSizeChange(idx){
    if(idx===sizeIdx)return;
    const hasContent=cells.some(row=>row.some(c=>c!==null));
    if(hasContent)setConfirmSize(idx);
    else applySize(idx);
  }
  function applySize(idx){
    const {cols:nc,rows:nr}=BOARD_SIZES[idx];
    setSizeIdx(idx);
    setCells(Array(nr).fill(null).map(()=>Array(nc).fill(null)));
    setHistory([]);setRedoStack([]);
    setConfirmSize(null);
  }

  // 保存历史
  function pushHistory(prev){
    setHistory(h=>[...h.slice(-29),prev]);
    setRedoStack([]);
  }
  function undo(){
    setHistory(h=>{
      if(!h.length)return h;
      const prev=h[h.length-1];
      setRedoStack(r=>[...r,cells]);
      setCells(prev);
      return h.slice(0,-1);
    });
  }
  function redo(){
    setRedoStack(r=>{
      if(!r.length)return r;
      const next=r[r.length-1];
      setHistory(h=>[...h,cells]);
      setCells(next);
      return r.slice(0,-1);
    });
  }

  // 涂色核心
  function paintCell(row,col,snapshot){
    if(row<0||col<0||row>=rows||col>=cols)return;
    setCells(prev=>{
      const next=prev.map(r=>[...r]);
      if(tool==="eraser"){
        next[row][col]=null;
        if(mirrorMode)next[row][cols-1-col]=null;
      } else if(tool==="fill"){
        // 油漆桶flood fill
        const target=prev[row][col];
        if(target===pickedColor)return prev;
        const stack=[[row,col]];
        const visited=new Set();
        while(stack.length){
          const [r,c]=stack.pop();
          const key=`${r},${c}`;
          if(visited.has(key))continue;
          if(r<0||c<0||r>=rows||c>=cols)continue;
          if(next[r][c]!==target)continue;
          visited.add(key);
          next[r][c]=pickedColor;
          stack.push([r+1,c],[r-1,c],[r,c+1],[r,c-1]);
        }
      } else {
        next[row][col]=pickedColor;
        if(mirrorMode)next[row][cols-1-col]=pickedColor;
      }
      return next;
    });
  }

  function getCellFromEvent(e,el){
    const rect=el.getBoundingClientRect();
    const touch=e.touches?e.touches[0]:e;
    const x=touch.clientX-rect.left;
    const y=touch.clientY-rect.top;
    const col=Math.floor(x/cellSize);
    const row=Math.floor(y/cellSize);
    return{row,col};
  }

  function onPointerDown(e){
    if(!pickedColor&&tool!=="eraser")return;
    const el=e.currentTarget;
    setPainting(true);
    const snap=cells.map(r=>[...r]);
    pushHistory(snap);
    const{row,col}=getCellFromEvent(e,el);
    paintCell(row,col,snap);
  }
  function onPointerMove(e){
    if(!painting)return;
    if(tool==="fill")return;
    const{row,col}=getCellFromEvent(e,e.currentTarget);
    paintCell(row,col,null);
  }
  function onPointerUp(){setPainting(false);}

  // 统计色号用量
  const colorCount=useMemo(()=>{
    const m={};
    cells.forEach(row=>row.forEach(c=>{if(c)m[c]=(m[c]||0)+1;}));
    return m;
  },[cells]);

  // 导出图纸（带色号标注）
  function exportCanvas(){
    const canvas=document.createElement("canvas");
    const cs=Math.max(cellSize,14);
    canvas.width=cols*cs;
    canvas.height=rows*cs;
    const ctx=canvas.getContext("2d");
    ctx.fillStyle="#fff";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    cells.forEach((row,ri)=>row.forEach((cid,ci)=>{
      if(!cid)return;
      const color=ALL_COLORS.find(c=>c.id===cid);
      if(!color)return;
      ctx.fillStyle=color.hex;
      ctx.fillRect(ci*cs,ri*cs,cs,cs);
      // 色号文字
      const dark=isDark(color.hex);
      ctx.fillStyle=dark?"rgba(255,255,255,0.85)":"rgba(0,0,0,0.65)";
      ctx.font=`bold ${Math.max(5,cs*0.38)}px sans-serif`;
      ctx.textAlign="center";
      ctx.textBaseline="middle";
      ctx.fillText(cid,ci*cs+cs/2,ri*cs+cs/2);
      // 网格线
      ctx.strokeStyle="rgba(0,0,0,0.10)";
      ctx.lineWidth=0.5;
      ctx.strokeRect(ci*cs,ri*cs,cs,cs);
    }));
    // 底部统计
    const statH=Object.keys(colorCount).length?Math.ceil(Object.keys(colorCount).length/4)*22+32:0;
    if(statH>0){
      const canvas2=document.createElement("canvas");
      canvas2.width=canvas.width;
      canvas2.height=canvas.height+statH;
      const ctx2=canvas2.getContext("2d");
      ctx2.fillStyle="#fff";
      ctx2.fillRect(0,0,canvas2.width,canvas2.height);
      ctx2.drawImage(canvas,0,0);
      ctx2.fillStyle="#333";
      ctx2.font=`bold 13px sans-serif`;
      ctx2.fillText("色号统计：",8,canvas.height+18);
      let x=8,y=canvas.height+34,i=0;
      Object.entries(colorCount).sort((a,b)=>b[1]-a[1]).forEach(([id,cnt])=>{
        const color=ALL_COLORS.find(c=>c.id===id);
        if(color){ctx2.fillStyle=color.hex;ctx2.fillRect(x,y-12,14,14);}
        ctx2.fillStyle="#333";
        ctx2.font=`11px sans-serif`;
        ctx2.fillText(`${id}×${cnt}`,x+17,y);
        x+=80;i++;
        if(i%4===0){x=8;y+=22;}
      });
      const url=canvas2.toDataURL("image/png");
      const a=document.createElement("a");a.href=url;a.download="图纸.png";a.click();
      return;
    }
    const url=canvas.toDataURL("image/png");
    const a=document.createElement("a");a.href=url;a.download="图纸.png";a.click();
  }

  // 常用色管理
  function toggleFav(id){
    setFavorites(prev=>prev.includes(id)?prev.filter(f=>f!==id):[...prev.slice(-11),id]);
  }

  const accentC=isFluffyUi?"#d07a94":"#4a9eff";

  return(
    <div style={{position:"fixed",inset:0,display:"flex",flexDirection:"column",background:T.bg,fontFamily:"'Nunito',sans-serif",color:T.text,userSelect:"none"}}>
      {/* 顶栏 */}
      <div style={{background:T.headerBg||T.card,borderBottom:`1.5px solid ${T.border}`,padding:"8px 14px",display:"flex",alignItems:"center",gap:8,flexShrink:0,zIndex:10}}>
        <button onClick={onBack} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",padding:"2px 6px",color:T.text}}>←</button>
        <span style={{fontWeight:900,fontSize:15,flex:1}}>图纸绘制</span>
        {/* 尺寸选择 */}
        <div style={{display:"flex",gap:4}}>
          {BOARD_SIZES.map((s,i)=>(
            <button key={s.label} onClick={()=>requestSizeChange(i)}
              style={{padding:"4px 8px",borderRadius:50,border:`1.5px solid ${i===sizeIdx?accentC:T.border}`,background:i===sizeIdx?accentC:"transparent",color:i===sizeIdx?"#fff":T.textMid,fontSize:10,fontWeight:800,cursor:"pointer"}}>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* 工具栏 */}
      <div style={{background:T.card,borderBottom:`1px solid ${T.border}`,padding:"6px 12px",display:"flex",alignItems:"center",gap:6,flexShrink:0,overflowX:"auto"}}>
        {[["pen","✏️","画笔"],["eraser","🧹","橡皮"],["fill","🪣","填充"]].map(([t,ic,lb])=>(
          <button key={t} onClick={()=>setTool(t)}
            style={{padding:"4px 10px",borderRadius:50,border:`1.5px solid ${tool===t?accentC:T.border}`,background:tool===t?accentC:"transparent",color:tool===t?"#fff":T.textMid,fontSize:11,fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:3,flexShrink:0}}>
            {ic}<span>{lb}</span>
          </button>
        ))}
        <div style={{width:1,height:20,background:T.border,margin:"0 2px"}}/>
        <button onClick={()=>setMirrorMode(m=>!m)}
          style={{padding:"4px 10px",borderRadius:50,border:`1.5px solid ${mirrorMode?accentC:T.border}`,background:mirrorMode?accentC:"transparent",color:mirrorMode?"#fff":T.textMid,fontSize:11,fontWeight:800,cursor:"pointer",flexShrink:0}}>
          ↔ 镜像
        </button>
        <button onClick={()=>setShowGrid(g=>!g)}
          style={{padding:"4px 10px",borderRadius:50,border:`1.5px solid ${showGrid?accentC:T.border}`,background:showGrid?accentC:"transparent",color:showGrid?"#fff":T.textMid,fontSize:11,fontWeight:800,cursor:"pointer",flexShrink:0}}>
          # 网格
        </button>
        <div style={{flex:1}}/>
        <button onClick={undo} disabled={!history.length}
          style={{padding:"4px 8px",borderRadius:50,border:`1px solid ${T.border}`,background:"transparent",color:history.length?T.text:T.textLight,fontSize:13,cursor:history.length?"pointer":"default"}}>↩</button>
        <button onClick={redo} disabled={!redoStack.length}
          style={{padding:"4px 8px",borderRadius:50,border:`1px solid ${T.border}`,background:"transparent",color:redoStack.length?T.text:T.textLight,fontSize:13,cursor:redoStack.length?"pointer":"default"}}>↪</button>
        <button onClick={exportCanvas}
          style={{padding:"4px 10px",borderRadius:50,border:"none",background:accentC,color:"#fff",fontSize:11,fontWeight:800,cursor:"pointer",flexShrink:0}}>
          导出
        </button>
      </div>

      {/* 常用色栏 */}
      {showFav&&(
        <div style={{background:T.card,borderBottom:`1px solid ${T.border}`,padding:"4px 10px",display:"flex",alignItems:"center",gap:6,flexShrink:0}}>
          <span style={{fontSize:10,color:T.textLight,fontWeight:700,flexShrink:0}}>常用</span>
          <div style={{display:"flex",gap:4,overflowX:"auto",flex:1}}>
            {favorites.length===0&&<span style={{fontSize:10,color:T.textLight,padding:"4px 0"}}>长按色号添加到常用色</span>}
            {favorites.map(id=>{
              const c=ALL_COLORS.find(x=>x.id===id);
              if(!c)return null;
              return(
                <div key={id} onClick={()=>setPickedColor(id)}
                  style={{width:32,height:32,borderRadius:8,background:c.hex,border:`2px solid ${pickedColor===id?accentC:"transparent"}`,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative"}}>
                  <span style={{fontSize:7,fontWeight:800,color:isDark(c.hex)?"#fff":"#000",lineHeight:1}}>{id}</span>
                </div>
              );
            })}
          </div>
          <button onClick={()=>setShowFav(false)} style={{background:"none",border:"none",color:T.textLight,fontSize:14,cursor:"pointer",flexShrink:0}}>×</button>
        </div>
      )}
      {!showFav&&(
        <button onClick={()=>setShowFav(true)}
          style={{background:T.card,border:"none",borderBottom:`1px solid ${T.border}`,padding:"3px",fontSize:10,color:T.textMid,cursor:"pointer",fontWeight:700}}>
          ▼ 常用色
        </button>
      )}

      {/* 主区：画布 + 色板 */}
      <div style={{flex:1,display:"flex",overflow:"hidden",position:"relative"}}>

        {/* 左侧色系栏 / 右侧色号栏 */}
        {activeSeries===null?(
          // 色系栏
          <div style={{width:44,flexShrink:0,background:T.card,borderRight:`1px solid ${T.border}`,display:"flex",flexDirection:"column",overflowY:"auto",zIndex:2}}>
            {seriesList.map(s=>(
              <button key={s} onClick={()=>setActiveSeries(s)}
                style={{padding:"8px 0",border:"none",background:"transparent",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2,borderBottom:`1px solid ${T.border}`}}>
                <div style={{width:22,height:22,borderRadius:6,background:seriesColors(s)[0]?.hex||"#ccc",border:`1.5px solid ${T.border}`}}/>
                <span style={{fontSize:9,fontWeight:800,color:T.textMid}}>{s}</span>
              </button>
            ))}
          </div>
        ):(
          // 色号栏
          <div style={{width:68,flexShrink:0,background:T.card,borderRight:`1px solid ${T.border}`,display:"flex",flexDirection:"column",zIndex:2}}>
            <button onClick={()=>setActiveSeries(null)}
              style={{padding:"8px 0",border:"none",borderBottom:`1px solid ${T.border}`,background:accentC,color:"#fff",fontSize:11,fontWeight:800,cursor:"pointer",flexShrink:0}}>
              ✓ 完成
            </button>
            <div style={{flex:1,overflowY:"auto",padding:"4px"}}>
              {seriesColors(activeSeries).map(c=>(
                <div key={c.id}
                  onClick={()=>setPickedColor(c.id)}
                  onContextMenu={e=>{e.preventDefault();toggleFav(c.id);}}
                  style={{display:"flex",alignItems:"center",gap:4,padding:"3px 2px",borderRadius:6,marginBottom:2,background:pickedColor===c.id?`${accentC}22`:"transparent",border:`1.5px solid ${pickedColor===c.id?accentC:"transparent"}`,cursor:"pointer"}}>
                  <div style={{width:20,height:20,borderRadius:5,background:c.hex,border:`1px solid rgba(0,0,0,0.10)`,flexShrink:0}}/>
                  <span style={{fontSize:9,fontWeight:800,color:T.text,lineHeight:1}}>{c.id}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 画布区域 */}
        <div style={{flex:1,overflow:"auto",position:"relative"}}>
          {/* 缩放控制 */}
          <div style={{position:"absolute",top:8,right:8,zIndex:5,display:"flex",gap:4}}>
            <button onClick={()=>setCellSize(s=>Math.min(s+2,24))}
              style={{width:28,height:28,borderRadius:"50%",border:`1px solid ${T.border}`,background:T.card,fontSize:16,cursor:"pointer",fontWeight:900,color:T.text}}>+</button>
            <button onClick={()=>setCellSize(s=>Math.max(s-2,6))}
              style={{width:28,height:28,borderRadius:"50%",border:`1px solid ${T.border}`,background:T.card,fontSize:16,cursor:"pointer",fontWeight:900,color:T.text}}>−</button>
          </div>

          {/* 当前选色提示 */}
          {pickedColor&&(
            <div style={{position:"absolute",top:8,left:8,zIndex:5,display:"flex",alignItems:"center",gap:5,background:T.card,borderRadius:50,padding:"3px 10px 3px 5px",boxShadow:T.cardShadow,border:`1px solid ${T.border}`}}>
              <div style={{width:18,height:18,borderRadius:5,background:ALL_COLORS.find(c=>c.id===pickedColor)?.hex||"#ccc",border:"1px solid rgba(0,0,0,0.1)"}}/>
              <span style={{fontSize:11,fontWeight:800,color:T.text}}>{pickedColor}</span>
            </div>
          )}

          {/* 画布本体 */}
          <div
            ref={canvasRef}
            onMouseDown={onPointerDown}
            onMouseMove={onPointerMove}
            onMouseUp={onPointerUp}
            onMouseLeave={onPointerUp}
            onTouchStart={e=>{e.preventDefault();onPointerDown(e);}}
            onTouchMove={e=>{e.preventDefault();onPointerMove(e);}}
            onTouchEnd={onPointerUp}
            style={{
              display:"grid",
              gridTemplateColumns:`repeat(${cols},${cellSize}px)`,
              gridTemplateRows:`repeat(${rows},${cellSize}px)`,
              width:cols*cellSize,
              height:rows*cellSize,
              margin:48,
              cursor:tool==="eraser"?"cell":tool==="fill"?"crosshair":"crosshair",
              touchAction:"none",
            }}>
            {cells.map((row,ri)=>row.map((cid,ci)=>{
              const color=cid?ALL_COLORS.find(c=>c.id===cid):null;
              return(
                <div key={`${ri}-${ci}`}
                  style={{
                    width:cellSize,height:cellSize,
                    background:color?color.hex:"transparent",
                    boxSizing:"border-box",
                    border:showGrid?"0.5px solid rgba(0,0,0,0.12)":"0.5px solid rgba(0,0,0,0.04)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    overflow:"hidden",
                  }}>
                  {color&&cellSize>=12&&(
                    <span style={{fontSize:cellSize*0.32,fontWeight:800,color:isDark(color.hex)?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.55)",lineHeight:1,pointerEvents:"none",userSelect:"none"}}>
                      {cid}
                    </span>
                  )}
                </div>
              );
            }))}
          </div>
        </div>
      </div>

      {/* 底部色号统计 */}
      {Object.keys(colorCount).length>0&&(
        <div style={{background:T.card,borderTop:`1px solid ${T.border}`,padding:"6px 10px",flexShrink:0,maxHeight:80,overflowY:"auto"}}>
          <div style={{fontSize:10,color:T.textLight,fontWeight:700,marginBottom:4}}>用色统计</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
            {Object.entries(colorCount).sort((a,b)=>b[1]-a[1]).map(([id,cnt])=>{
              const color=ALL_COLORS.find(c=>c.id===id);
              return(
                <div key={id} style={{display:"flex",alignItems:"center",gap:3,padding:"2px 6px",borderRadius:50,background:T.accentSoft,border:`1px solid ${T.border}`}}>
                  {color&&<div style={{width:10,height:10,borderRadius:3,background:color.hex,border:"1px solid rgba(0,0,0,0.1)"}}/>}
                  <span style={{fontSize:10,fontWeight:800,color:T.text}}>{id}</span>
                  <span style={{fontSize:10,color:T.textMid}}>×{cnt}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 换尺寸确认弹窗 */}
      {confirmSize!==null&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{background:T.card,borderRadius:20,padding:"24px 20px",margin:"0 24px",textAlign:"center",boxShadow:T.floatShadow}}>
            <div style={{fontSize:15,fontWeight:800,color:T.text,marginBottom:8}}>切换画布尺寸</div>
            <div style={{fontSize:13,color:T.textMid,marginBottom:20}}>当前画布内容将被清空，确认切换到 {BOARD_SIZES[confirmSize].label}？</div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setConfirmSize(null)} style={{flex:1,padding:"10px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:"transparent",color:T.textMid,fontWeight:800,cursor:"pointer",fontSize:13}}>取消</button>
              <button onClick={()=>applySize(confirmSize)} style={{flex:1,padding:"10px 0",borderRadius:50,border:"none",background:accentC,color:"#fff",fontWeight:800,cursor:"pointer",fontSize:13}}>确认</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════
//  辅助工具：图纸网格尺
// ══════════════════════════════════
function HelperToolPage({T,onBack}){
  const [imgSrc,setImgSrc]=useState("");
  const [area,setArea]=useState({x:5,y:8,w:90,h:78});
  const [cell,setCell]=useState({x:12,y:14,w:2.2,h:2.2});
  const [gridCell,setGridCell]=useState(null);
  const [mode,setMode]=useState("area");
  const [zoom,setZoom]=useState(1.8);
  const [lineColor,setLineColor]=useState("#4a9eff");
  const [customColor,setCustomColor]=useState("#4a9eff");
  const [strength,setStrength]=useState("normal");
  const [showNumbers,setShowNumbers]=useState(true);
  const [msg,setMsg]=useState("");
  const dragRef=useRef(null);
  const repeatRef=useRef({delay:null,timer:null});
  const viewportRef=useRef(null);
  const imageLayerRef=useRef(null);

  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  const activeColor=lineColor==="custom"?customColor:lineColor;
  const strengthMap={soft:{minor:.16,five:.42,ten:.72},normal:{minor:.22,five:.58,ten:.9},strong:{minor:.30,five:.74,ten:1}};
  const alpha=strengthMap[strength]||strengthMap.normal;
  const pct=(n)=>`${n}%`;
  const fmt2=(n)=>{
    const x=Number(n);
    if(!Number.isFinite(x))return "";
    return Number(x.toFixed(2)).toString();
  };
  const CALIBRATION_COUNT=5;
  const calibrationOffset=(CALIBRATION_COUNT-1)/2;

  function hexToRgba(hex,a){
    let h=String(hex||"#4a9eff").replace("#","").trim();
    if(h.length===3)h=h.split("").map(c=>c+c).join("");
    const n=parseInt(h,16);
    if(Number.isNaN(n))return `rgba(74,158,255,${a})`;
    const r=(n>>16)&255,g=(n>>8)&255,b=n&255;
    return `rgba(${r},${g},${b},${a})`;
  }

  function onPickFile(e){
    const file=e.target.files?.[0];
    if(!file)return;
    const reader=new FileReader();
    reader.onload=()=>{
      setImgSrc(String(reader.result||""));
      setMode("area");
      setGridCell(null);
      setZoom(1.8);
      setMsg("先放大图纸，框住主体范围；再切到 5×5 校准格，用它对准原图里连续的 25 个小格。第二步贴准后，第三步就会按这个单格尺寸去延展整张网格。")
      setTimeout(()=>{try{viewportRef.current.scrollTo({left:0,top:0});}catch{}},0);
    };
    reader.readAsDataURL(file);
  }

  function updateArea(next){
    setArea(prev=>{
      const merged={...prev,...next};
      merged.w=clamp(merged.w,8,100-merged.x);
      merged.h=clamp(merged.h,8,100-merged.y);
      merged.x=clamp(merged.x,0,100-merged.w);
      merged.y=clamp(merged.y,0,100-merged.h);
      return merged;
    });
  }
  function updateCell(next){
    setCell(prev=>{
      const merged={...prev,...next};
      merged.w=clamp(merged.w,.25,20);
      merged.h=clamp(merged.h,.25,20);
      // cell.x / cell.y 是 5×5 校准框中间那一格的左上角。
      // 所以限制时要按整个 5×5 框限制，避免拖到顶部/边缘时被浏览器反复夹回去。
      const minX=calibrationOffset*merged.w;
      const minY=calibrationOffset*merged.h;
      const maxX=100-(calibrationOffset+1)*merged.w;
      const maxY=100-(calibrationOffset+1)*merged.h;
      merged.x=clamp(merged.x,minX,Math.max(minX,maxX));
      merged.y=clamp(merged.y,minY,Math.max(minY,maxY));
      return merged;
    });
  }
  function nudgeBox(kind,dx,dy,dw=0,dh=0){
    if(kind==="area"){
      setArea(prev=>{
        const merged={...prev,x:prev.x+dx,y:prev.y+dy,w:prev.w+dw,h:prev.h+dh};
        merged.w=clamp(merged.w,8,100-merged.x);
        merged.h=clamp(merged.h,8,100-merged.y);
        merged.x=clamp(merged.x,0,100-merged.w);
        merged.y=clamp(merged.y,0,100-merged.h);
        return merged;
      });
    }else{
      setCell(prev=>{
        const merged={...prev,x:prev.x+dx,y:prev.y+dy,w:prev.w+dw,h:prev.h+dh};
        merged.w=clamp(merged.w,.25,20);
        merged.h=clamp(merged.h,.25,20);
        const minX=calibrationOffset*merged.w;
        const minY=calibrationOffset*merged.h;
        const maxX=100-(calibrationOffset+1)*merged.w;
        const maxY=100-(calibrationOffset+1)*merged.h;
        merged.x=clamp(merged.x,minX,Math.max(minX,maxX));
        merged.y=clamp(merged.y,minY,Math.max(minY,maxY));
        return merged;
      });
    }
  }
  function makeGridFromCalibration(){
    return {
      // 第三步恢复原模式：位置完全跟随第二步 5×5 校准框，第三步只调这一组 5 格的宽高。
      x:Number((cell.x-cell.w*calibrationOffset).toFixed(3)),
      y:Number((cell.y-cell.h*calibrationOffset).toFixed(3)),
      w:Number((cell.w*CALIBRATION_COUNT).toFixed(3)),
      h:Number((cell.h*CALIBRATION_COUNT).toFixed(3))
    };
  }
  function enterGridMode(){
    const base=makeGridFromCalibration();
    setGridCell({w:base.w,h:base.h});
    setMode("grid");
  }
  function getCurrentGrid(){
    const base=makeGridFromCalibration();
    return {
      x:base.x,
      y:base.y,
      w:gridCell?.w ?? base.w,
      h:gridCell?.h ?? base.h
    };
  }
  function resizeGrid(dw=0,dh=0){
    setGridCell(prev=>{
      const base=makeGridFromCalibration();
      const current={w:prev?.w ?? base.w,h:prev?.h ?? base.h};
      return {
        w:clamp(Number((current.w+dw).toFixed(3)),1,100),
        h:clamp(Number((current.h+dh).toFixed(3)),1,100)
      };
    });
  }
  function setGridNumber(key,value){
    const num=Number(value);
    if(!Number.isFinite(num))return;
    if(key!=="w"&&key!=="h")return;
    setGridCell(prev=>{
      const base=makeGridFromCalibration();
      const next={w:prev?.w ?? base.w,h:prev?.h ?? base.h,[key]:num};
      next.w=clamp(next.w,1,100);
      next.h=clamp(next.h,1,100);
      return next;
    });
  }
  function zoomBy(delta){
    setZoom(z=>clamp(Number((z+delta).toFixed(2)),1,5));
  }

  function stopRepeat(){
    if(repeatRef.current.delay)clearTimeout(repeatRef.current.delay);
    if(repeatRef.current.timer)clearInterval(repeatRef.current.timer);
    repeatRef.current={delay:null,timer:null};
  }
  function repeatProps(action){
    return {
      onPointerDown:(e)=>{
        e.preventDefault();
        e.stopPropagation();
        stopRepeat();
        action();
        repeatRef.current.delay=setTimeout(()=>{
          repeatRef.current.timer=setInterval(action,70);
        },280);
      },
      onPointerUp:stopRepeat,
      onPointerCancel:stopRepeat,
      onPointerLeave:stopRepeat,
      onContextMenu:(e)=>e.preventDefault()
    };
  }
  useEffect(()=>()=>stopRepeat(),[]);

  function pointerToPct(e){
    const rect=imageLayerRef.current?.getBoundingClientRect();
    if(!rect)return {x:0,y:0};
    return {
      x:clamp(((e.clientX-rect.left)/rect.width)*100,0,100),
      y:clamp(((e.clientY-rect.top)/rect.height)*100,0,100)
    };
  }
  function startDrag(kind,e){
    e.preventDefault();
    e.stopPropagation();
    const p=pointerToPct(e);
    dragRef.current={kind,start:p,area:{...area},cell:{...cell}};
    try{e.currentTarget.setPointerCapture?.(e.pointerId);}catch{}
  }
  function onPointerMove(e){
    const d=dragRef.current;
    if(!d)return;
    const p=pointerToPct(e);
    const dx=p.x-d.start.x,dy=p.y-d.start.y;
    if(d.kind==="area")updateArea({x:d.area.x+dx,y:d.area.y+dy});
    if(d.kind==="cell")updateCell({x:d.cell.x+dx,y:d.cell.y+dy});
  }
  function stopDrag(){dragRef.current=null;}

  function buildLines(){
    const lines=[];
    const xEnd=area.x+area.w,yEnd=area.y+area.h;

    if(mode==="grid"){
      const base=getCurrentGrid();
      const blockW=Math.max(base.w,.1),blockH=Math.max(base.h,.1);
      const unitW=blockW/CALIBRATION_COUNT;
      const unitH=blockH/CALIBRATION_COUNT;
      const originLeft=base.x;
      const originTop=base.y;

      // P2 模式：第三步的数值控制“一整组 5 格”的总宽 / 总高，
      // 但排线仍然按真实小格去算：每 5 小格一条虚线，每 10 小格一条实线。
      // 不再画图纸范围外框，也不画第 0 条原点线，避免外侧 L 型边线。
      const firstMajorX=Math.ceil((area.x-originLeft)/(unitW*5))*5;
      const lastMajorX=Math.floor((xEnd-originLeft)/(unitW*5))*5;
      const firstMajorY=Math.ceil((area.y-originTop)/(unitH*5))*5;
      const lastMajorY=Math.floor((yEnd-originTop)/(unitH*5))*5;

      for(let n=firstMajorX;n<=lastMajorX;n+=5){
        if(n===0)continue;
        const x=originLeft+n*unitW;
        if(x<area.x-.01||x>xEnd+.01)continue;
        lines.push({dir:"v",pos:x,type:"five",k:0,raw:n});
      }
      for(let n=firstMajorY;n<=lastMajorY;n+=5){
        if(n===0)continue;
        const y=originTop+n*unitH;
        if(y<area.y-.01||y>yEnd+.01)continue;
        lines.push({dir:"h",pos:y,type:"five",k:0,raw:n});
      }

      // 数字和粗细按屏幕里从左到右、从上到下重新标 5、10、15……，
      // 这样不会出现左侧/上侧倒序，也能和 P2 的阅读方式一致。
      const vMajors=lines.filter(l=>l.dir==="v").sort((a,b)=>a.pos-b.pos);
      const hMajors=lines.filter(l=>l.dir==="h").sort((a,b)=>a.pos-b.pos);
      vMajors.forEach((l,i)=>{l.k=(i+1)*5; l.type=l.k%10===0?"ten":"five";});
      hMajors.forEach((l,i)=>{l.k=(i+1)*5; l.type=l.k%10===0?"ten":"five";});
      return {lines,left:originLeft,top:originTop,cw:unitW,ch:unitH};
    }

    const originLeft=cell.x;
    const originTop=cell.y;
    const cw=Math.max(cell.w,.1),ch=Math.max(cell.h,.1);
    const firstX=Math.max(5,Math.ceil((area.x-originLeft)/cw));
    const lastX=Math.floor((xEnd-originLeft)/cw);
    const firstY=Math.max(5,Math.ceil((area.y-originTop)/ch));
    const lastY=Math.floor((yEnd-originTop)/ch);
    const startX=Math.ceil(firstX/5)*5;
    const startY=Math.ceil(firstY/5)*5;
    for(let n=startX;n<=lastX;n+=5){
      const x=originLeft+n*cw;
      if(x<area.x-.01||x>xEnd+.01)continue;
      lines.push({dir:"v",pos:x,type:n%10===0?"ten":"five",k:n});
    }
    for(let n=startY;n<=lastY;n+=5){
      const y=originTop+n*ch;
      if(y<area.y-.01||y>yEnd+.01)continue;
      lines.push({dir:"h",pos:y,type:n%10===0?"ten":"five",k:n});
    }
    return {lines,left:originLeft,top:originTop,cw,ch};
  }
  const grid=buildLines();

  function exportGrid(){
    if(!imgSrc){alert("先上传一张图纸～");return;}
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement("canvas");
      canvas.width=img.naturalWidth;
      canvas.height=img.naturalHeight;
      const ctx=canvas.getContext("2d");
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      const ax=area.x/100*canvas.width, ay=area.y/100*canvas.height, aw=area.w/100*canvas.width, ah=area.h/100*canvas.height;
      const xEnd=ax+aw,yEnd=ay+ah;
      ctx.save();
      ctx.beginPath();ctx.rect(ax,ay,aw,ah);ctx.clip();
      function drawLine(x1,y1,x2,y2,type){
        ctx.beginPath();
        ctx.setLineDash(type==="five"?[8,6]:[]);
        ctx.strokeStyle=hexToRgba(activeColor,alpha[type] ?? .22);
        ctx.lineWidth=type==="ten"?Math.max(2.2,canvas.width/420):type==="five"?Math.max(1.4,canvas.width/700):Math.max(.7,canvas.width/1300);
        ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
      }
      grid.lines.forEach(l=>{
        const pos=(l.pos/100)*(l.dir==="v"?canvas.width:canvas.height);
        if(l.dir==="v"){
          drawLine(pos,ay,pos,yEnd,l.type);
          if(showNumbers && l.k>0 && l.k%5===0){
            ctx.setLineDash([]);
            ctx.fillStyle=hexToRgba(activeColor,.95);
            ctx.font=`${Math.max(14,canvas.width/55)}px sans-serif`;
            ctx.textAlign="center";
            ctx.textBaseline="top";
            ctx.fillText(String(l.k),pos,ay+4);
          }
        }else{
          drawLine(ax,pos,xEnd,pos,l.type);
          if(showNumbers && l.k>0 && l.k%5===0){
            ctx.setLineDash([]);
            ctx.fillStyle=hexToRgba(activeColor,.95);
            ctx.font=`${Math.max(14,canvas.width/55)}px sans-serif`;
            ctx.textAlign="left";
            ctx.textBaseline="middle";
            ctx.fillText(String(l.k),ax+4,pos);
          }
        }
      });
      ctx.restore();
      const a=document.createElement("a");
      a.href=canvas.toDataURL("image/png");
      a.download=`拼豆记-辅助网格-${Date.now()}.png`;
      document.body.appendChild(a);a.click();a.remove();
    };
    img.src=imgSrc;
  }

  const btn=(active)=>({border:`1.5px solid ${active?T.accent:T.border}`,background:active?T.accentSoft:T.card,color:active?T.accent:T.textMid,borderRadius:999,padding:"8px 11px",fontSize:12,fontWeight:900,fontFamily:"'Nunito',sans-serif",cursor:"pointer"});
  const smallBtn={border:`1px solid ${T.border}`,background:T.card,color:T.textMid,borderRadius:12,padding:"7px 9px",fontSize:12,fontWeight:900,fontFamily:"'Nunito',sans-serif",cursor:"pointer",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"};
  const zoomBtn={...smallBtn,padding:"7px 10px"};
  const showGrid=mode==="grid";
  const showArea=mode==="area";
  const showCell=mode==="cell";
  const calibrationLeft=cell.x-(cell.w*calibrationOffset);
  const calibrationTop=cell.y-(cell.h*calibrationOffset);
  const calibrationW=cell.w*CALIBRATION_COUNT;
  const calibrationH=cell.h*CALIBRATION_COUNT;
  const cellMoveStep=.15;
  const areaMoveStep=.5;
  const cellSizeStep=.08;
  const gridSizeStep=.05;
  const areaSizeStep=.5;
  const currentGrid=getCurrentGrid();
  const numberInput={width:"100%",boxSizing:"border-box",border:`1px solid ${T.border}`,background:T.bg,color:T.text,borderRadius:12,padding:"8px 9px",fontSize:12,fontWeight:800,fontFamily:"'Nunito',sans-serif",outline:"none"};

  return(
    <div style={{fontFamily:"'Nunito',sans-serif",minHeight:"100vh",background:T.bg,paddingBottom:28}}>
      <div style={{padding:"14px 16px",display:"flex",alignItems:"center",gap:10,borderBottom:`1px solid ${T.border}`,background:T.card,position:"sticky",top:0,zIndex:50}}>
        <button onClick={onBack} style={{background:"none",border:"none",fontSize:22,color:T.textMid,cursor:"pointer",lineHeight:1}}>←</button>
        <div style={{fontSize:15,fontWeight:900,color:T.text}}>辅助工具</div>
        <button onClick={exportGrid} style={{marginLeft:"auto",border:"none",background:T.accent,color:"#fff",borderRadius:999,padding:"8px 13px",fontSize:12,fontWeight:900,fontFamily:"'Nunito',sans-serif",cursor:"pointer"}}>导出</button>
      </div>

      <div style={{padding:"14px 16px",display:"flex",flexDirection:"column",gap:12}}>
        <label style={{background:T.card,border:`1.5px dashed ${T.border}`,borderRadius:22,padding:"16px 14px",boxShadow:T.cardShadow,textAlign:"center",cursor:"pointer"}}>
          <input type="file" accept="image/*" onChange={onPickFile} style={{display:"none"}}/>
          <div style={{fontSize:28,marginBottom:6}}>🖼️</div>
          <div style={{fontSize:13,fontWeight:900,color:T.text}}>上传图纸</div>
          <div style={{fontSize:11,color:T.textMid,marginTop:4,lineHeight:1.6}}>先放大原图，再用 5×5 校准格对准图纸里的 25 个小格</div>
        </label>

        {imgSrc&&(
          <>
            <div style={{display:"flex",gap:8,background:T.card,border:`1px solid ${T.border}`,borderRadius:18,padding:8,boxShadow:T.cardShadow}}>
              <button onClick={()=>setMode("area")} style={{...btn(mode==="area"),flex:1}}>① 范围</button>
              <button onClick={()=>setMode("cell")} style={{...btn(mode==="cell"),flex:1}}>② 对准</button>
              <button onClick={enterGridMode} style={{...btn(mode==="grid"),flex:1}}>③ 网格</button>
            </div>

            <div style={{display:"flex",alignItems:"center",gap:8,background:T.card,border:`1px solid ${T.border}`,borderRadius:18,padding:"8px 10px",boxShadow:T.cardShadow,position:"sticky",top:55,zIndex:40}}>
              <button style={zoomBtn} onClick={()=>zoomBy(-.25)}>－</button>
              <div style={{flex:1,textAlign:"center",fontSize:12,fontWeight:900,color:T.textMid}}>放大 {Math.round(zoom*100)}%</div>
              <button style={zoomBtn} onClick={()=>zoomBy(.25)}>＋</button>
              <button style={zoomBtn} onClick={()=>setZoom(2.5)}>精细</button>
            </div>

            <div ref={viewportRef} onPointerMove={onPointerMove} onPointerUp={stopDrag} onPointerCancel={stopDrag}
              style={{position:"relative",width:"100%",maxHeight:"62vh",overflow:"auto",borderRadius:22,background:T.card,border:`1.5px solid ${T.border}`,boxShadow:T.cardShadow,WebkitOverflowScrolling:"touch"}}>
              <div ref={imageLayerRef} style={{position:"relative",width:`${zoom*100}%`,minWidth:"100%",lineHeight:0}}>
                <img src={imgSrc} alt="图纸预览" style={{display:"block",width:"100%",height:"auto",userSelect:"none",pointerEvents:"none"}}/>
                {showGrid&&(
                  <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}} preserveAspectRatio="none">
                    <defs>
                      <clipPath id="helperGridClip"><rect x={area.x+"%"} y={area.y+"%"} width={area.w+"%"} height={area.h+"%"}/></clipPath>
                    </defs>
                    <g clipPath="url(#helperGridClip)">
                      {grid.lines.map((l,i)=>{
                        const stroke=hexToRgba(activeColor,alpha[l.type]);
                        const sw=l.type==="ten"?2.2:l.type==="five"?1.6:.75;
                        const dash=l.type==="five"?"7 5":"";
                        if(l.dir==="v")return <line key={i} x1={pct(l.pos)} y1={pct(area.y)} x2={pct(l.pos)} y2={pct(area.y+area.h)} stroke={stroke} strokeWidth={sw} strokeDasharray={dash}/>;
                        return <line key={i} x1={pct(area.x)} y1={pct(l.pos)} x2={pct(area.x+area.w)} y2={pct(l.pos)} stroke={stroke} strokeWidth={sw} strokeDasharray={dash}/>;
                      })}
                      {showNumbers&&grid.lines.filter(l=>l.type!=="minor"&&l.k>0&&l.k%5===0).map((l,i)=> l.dir==="v"?
                        <text key={'vx'+i} x={pct(l.pos)} y={pct(area.y+1.8)} textAnchor="middle" fontSize="10" fontWeight="900" fill={hexToRgba(activeColor,.95)}>{l.k}</text>:
                        <text key={'hy'+i} x={pct(area.x+1)} y={pct(l.pos)} dominantBaseline="middle" fontSize="10" fontWeight="900" fill={hexToRgba(activeColor,.95)}>{l.k}</text>
                      )}
                    </g>
                  </svg>
                )}
                {showArea&&(
                  <div onPointerDown={e=>startDrag("area",e)} style={{position:"absolute",left:pct(area.x),top:pct(area.y),width:pct(area.w),height:pct(area.h),border:`2px solid ${T.accent}`,background:"rgba(74,158,255,0.025)",borderRadius:6,cursor:"move",boxSizing:"border-box",touchAction:"none"}}>
                    {mode==="area"&&<span style={{position:"absolute",left:6,top:5,background:T.accent,color:"#fff",borderRadius:999,padding:"2px 7px",fontSize:10,fontWeight:900,lineHeight:1.4}}>图纸范围</span>}
                  </div>
                )}
                {showCell&&(
                  <div onPointerDown={e=>startDrag("cell",e)} style={{position:"absolute",left:pct(calibrationLeft),top:pct(calibrationTop),width:pct(calibrationW),height:pct(calibrationH),border:"2.5px solid #ff9f2f",background:"rgba(255,159,47,0.08)",borderRadius:5,cursor:"move",boxSizing:"border-box",touchAction:"none"}}>
                    {[1,2,3,4].map(i=><div key={`v-${i}`} style={{position:"absolute",left:`${(i/CALIBRATION_COUNT)*100}%`,top:0,bottom:0,borderLeft:"2px dashed rgba(255,159,47,.95)"}}/>)}
                    {[1,2,3,4].map(i=><div key={`h-${i}`} style={{position:"absolute",top:`${(i/CALIBRATION_COUNT)*100}%`,left:0,right:0,borderTop:"2px dashed rgba(255,159,47,.95)"}}/>)}
                    <div style={{position:"absolute",left:`${(2/CALIBRATION_COUNT)*100}%`,top:`${(2/CALIBRATION_COUNT)*100}%`,width:`${100/CALIBRATION_COUNT}%`,height:`${100/CALIBRATION_COUNT}%`,background:"rgba(255,159,47,.18)",outline:"2px solid rgba(255,159,47,.95)",boxSizing:"border-box"}}/>
                    <span style={{position:"absolute",left:"50%",top:"-26px",transform:"translateX(-50%)",background:"#ff9f2f",color:"#fff",borderRadius:999,padding:"3px 8px",fontSize:10,fontWeight:900,whiteSpace:"nowrap",lineHeight:1.3}}>5×5 校准</span>
                  </div>
                )}
              </div>
            </div>

            {msg&&<div style={{fontSize:11,color:T.textMid,lineHeight:1.7,background:T.card,border:`1px solid ${T.border}`,borderRadius:16,padding:"10px 12px"}}>{msg}</div>}

            <div style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:22,padding:14,boxShadow:T.cardShadow}}>
              <div style={{fontSize:13,fontWeight:900,color:T.text,marginBottom:10}}>{mode==="area"?"图纸范围微调":mode==="cell"?"5×5 校准微调":"网格样式"}</div>
              {mode!=="grid"?(
                <>
                  <div style={{fontSize:11,color:T.textMid,lineHeight:1.6,marginBottom:10}}>{mode==="area"?"拖动蓝框圈住要画网格的区域，外面的标题和色卡可以先不框。":"把橙色 5×5 校准格对准原图里连续的 25 个小格，中间亮起的一格就是单格尺寸。放大到 250% 左右会更好对。"}</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8,marginBottom:8}}>
                    <button style={smallBtn} {...repeatProps(()=>nudgeBox(mode,mode==="cell"?-cellMoveStep:-areaMoveStep,0))}>←</button>
                    <button style={smallBtn} {...repeatProps(()=>nudgeBox(mode,0,mode==="cell"?-cellMoveStep:-areaMoveStep))}>↑</button>
                    <button style={smallBtn} {...repeatProps(()=>nudgeBox(mode,0,mode==="cell" ? cellMoveStep : areaMoveStep))}>↓</button>
                    <button style={smallBtn} {...repeatProps(()=>nudgeBox(mode,mode==="cell" ? cellMoveStep : areaMoveStep,0))}>→</button>
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8}}>
                    <button style={smallBtn} {...repeatProps(()=>nudgeBox(mode,0,0,mode==="cell"?-cellSizeStep:-areaSizeStep,0))}>宽 -</button>
                    <button style={smallBtn} {...repeatProps(()=>nudgeBox(mode,0,0,mode==="cell" ? cellSizeStep : areaSizeStep,0))}>宽 +</button>
                    <button style={smallBtn} {...repeatProps(()=>nudgeBox(mode,0,0,0,mode==="cell"?-cellSizeStep:-areaSizeStep))}>高 -</button>
                    <button style={smallBtn} {...repeatProps(()=>nudgeBox(mode,0,0,0,mode==="cell" ? cellSizeStep : areaSizeStep))}>高 +</button>
                  </div>
                </>
              ):(
                <>
                  <div style={{fontSize:11,color:T.textMid,lineHeight:1.6,marginBottom:10}}>第三步只接第二步校准出来的 5×5 结果：这里调的是整组 5 格的总宽/总高；画面按 P2 那样只显示 5 虚线、10 实线，并按从左到右、从上到下顺序标号。</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8,marginBottom:12}}>
                    <label style={{fontSize:10,fontWeight:900,color:T.textMid}}>5格宽
                      <input type="number" step="0.01" value={fmt2(currentGrid.w)} onChange={e=>setGridNumber("w",e.target.value)} style={numberInput}/>
                    </label>
                    <label style={{fontSize:10,fontWeight:900,color:T.textMid}}>5格高
                      <input type="number" step="0.01" value={fmt2(currentGrid.h)} onChange={e=>setGridNumber("h",e.target.value)} style={numberInput}/>
                    </label>
                  </div>
                  <div style={{fontSize:11,color:T.textMid,lineHeight:1.6,margin:"-2px 0 8px"}}>也可以用按钮调，宽和高支持长按连续增加/减少；这里不会再画每个小格，只保留 5 虚线 / 10 实线。</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:8,marginBottom:12}}>
                    <button style={smallBtn} {...repeatProps(()=>resizeGrid(-gridSizeStep,0))}>5格宽 -</button>
                    <button style={smallBtn} {...repeatProps(()=>resizeGrid(gridSizeStep,0))}>5格宽 +</button>
                    <button style={smallBtn} {...repeatProps(()=>resizeGrid(0,-gridSizeStep))}>5格高 -</button>
                    <button style={smallBtn} {...repeatProps(()=>resizeGrid(0,gridSizeStep))}>5格高 +</button>
                  </div>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>
                    {[["#4a9eff","蓝"],["#ffffff","白"],["#222222","黑"],["#ff5c8a","粉"],["#ffbf3f","黄"],["custom","自定义"]].map(([c,n])=>(
                      <button key={c} onClick={()=>setLineColor(c)} style={{...btn(lineColor===c),padding:"7px 10px"}}>{n}</button>
                    ))}
                    {lineColor==="custom"&&<input type="color" value={customColor} onChange={e=>setCustomColor(e.target.value)} style={{width:42,height:34,border:`1px solid ${T.border}`,borderRadius:10,background:T.card}}/>}
                  </div>
                  <div style={{display:"flex",gap:8,marginBottom:12}}>
                    {[["soft","淡"],["normal","标准"],["strong","清晰"]].map(([v,n])=><button key={v} onClick={()=>setStrength(v)} style={{...btn(strength===v),flex:1}}>{n}</button>)}
                  </div>
                  <button onClick={()=>setShowNumbers(v=>!v)} style={{...btn(showNumbers),width:"100%"}}>{showNumbers?"已显示 5/10 坐标数字":"显示坐标数字"}</button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
function WorksPage({T,tn,user,isPro,onUpgrade,stock,used,resetKey,onDeductStock,onRestoreStock,onLogStockDeduction,onCloudDeleteTask,tasks,setTasks,tasksLoaded,onPushHistory}){
  const [view,setView]=useState("home");
  const [monthGoal,setMonthGoal]=useState(()=>{try{const s=localStorage.getItem('pindou_month_goal');return s?Number(s):5;}catch{return 5;}});
  const [showGoalEdit,setShowGoalEdit]=useState(false);
  const [goalInput,setGoalInput]=useState("");
  const [showAddModal,setShowAddModal]=useState(false);
  const [newName,setNewName]=useState("");
  const [newImg,setNewImg]=useState(null);
  const [newTaskTags,setNewTaskTags]=useState([]); // 新建图纸时选的标签
  const [doneTagFilter,setDoneTagFilter]=useState("全部"); // 已完成筛选标签
  const [batchTagMode,setBatchTagMode]=useState(false); // 批量操作选择模式
  const [batchModeType,setBatchModeType]=useState(null); // tag | move
  const [batchTagSel,setBatchTagSel]=useState(new Set()); // 批量选中的作品id
  const [showBatchTagPicker,setShowBatchTagPicker]=useState(false); // 标签选择弹窗
  const [showBatchMovePicker,setShowBatchMovePicker]=useState(false); // 移动分类弹窗
  const [doneSortOrder,setDoneSortOrder]=useState("desc"); // 已完成排序：按名称前缀日期，无前缀则按录入时间
  const [pickerOpen,setPickerOpen]=useState(false);
  const [pickedId,setPickedId]=useState(null);
  const [flipAnimating,setFlipAnimating]=useState(false);
  const [showDoneList,setShowDoneList]=useState(false);
  const [showToolbox,setShowToolbox]=useState(false);
  const [pendingFinishId,setPendingFinishId]=useState(null);
  const [toolbox,setToolbox]=useState(()=>{
    try{const s=localStorage.getItem('pindou_toolbox');if(s){const p=JSON.parse(s);return Array.isArray(p)?p:migrateToolboxLegacy(p);}}catch{}
    return DEFAULT_TOOLBOX_ARRAY;
  });
  const newImgRef=useRef(null);
  const [longPressId,setLongPressId]=useState(null);
  const [deletePlan,setDeletePlan]=useState(null);
  const longPressTimer=useRef(null);

  const now=new Date();
  const thisMonth=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  const doneThisMonth=tasks.filter(t=>t.doneDate?.startsWith(thisMonth));
  const doneTasks=tasks.filter(t=>t.status==="done");
  const progress=monthGoal>0?Math.min(doneThisMonth.length/monthGoal,1):0;
  const isFluffyUi=tn==="fluffy";
  const plushToolCardStyle=(variant)=>{
    if(!isFluffyUi) return null;
    const maps={
      toolbox:{bg:"linear-gradient(145deg,#ffeaf1 0%,#ffc4d5 45%,#fff0f6 74%,#f8fbff 100%)",border:"1px solid #efc7d4",shadow:"0 18px 38px rgba(214,143,166,.24), inset 0 4px 0 rgba(255,255,255,.70), inset 0 -22px 30px rgba(255,255,255,.34)"},
      missing:{bg:"linear-gradient(145deg,#fff3f7 0%,#ffd1df 48%,#fff5f8 78%,#f8fbff 100%)",border:"1px solid #efd0dc",shadow:"0 18px 38px rgba(214,143,166,.21), inset 0 4px 0 rgba(255,255,255,.72), inset 0 -22px 30px rgba(255,255,255,.34)"},
      helper:{bg:"linear-gradient(145deg,#fff0f6 0%,#ffd0df 42%,#eef8ff 82%,#ffffff 100%)",border:"1px solid #e3d5e2",shadow:"0 18px 38px rgba(180,170,205,.20), inset 0 4px 0 rgba(255,255,255,.72), inset 0 -22px 30px rgba(255,255,255,.34)"},
    };
    return {background:maps[variant].bg,borderRadius:28,padding:"13px 6px 11px",minHeight:92,boxShadow:maps[variant].shadow,cursor:"pointer",border:maps[variant].border,display:"flex",flexDirection:"column",gap:7,alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",overflow:"visible",isolation:"isolate"};
  };
  const plushToolGlowStyle=(variant)=>{
    if(!isFluffyUi) return null;
    const maps={
      toolbox:"radial-gradient(circle,rgba(255,214,230,.42),rgba(202,232,255,.10) 62%,transparent 72%)",
      missing:"radial-gradient(circle,rgba(245,214,255,.38),rgba(255,230,239,.12) 62%,transparent 72%)",
      helper:"radial-gradient(circle,rgba(255,233,205,.38),rgba(202,235,255,.12) 62%,transparent 72%)",
    };
    return {position:"absolute",inset:variant==="missing"?"-30px auto auto -16px":variant==="helper"?"auto -22px -30px auto":"-28px -18px auto auto",width:variant==="toolbox"?76:variant==="missing"?82:86,height:variant==="toolbox"?76:variant==="missing"?82:86,borderRadius:"50%",background:maps[variant],filter:"blur(2px)"};
  };
  const plushToolIconStyle=(variant)=>{
    if(!isFluffyUi) return null;
    const maps={
      toolbox:"linear-gradient(145deg,#ffeef4 0%,#ffc9d9 52%,#fff7fa 100%)",
      missing:"linear-gradient(145deg,#fff5f8 0%,#ffd4e1 52%,#fffafd 100%)",
      helper:"linear-gradient(145deg,#fff2f7 0%,#ffd0df 48%,#eef8ff 100%)",
    };
    return {width:52,height:52,borderRadius:19,background:maps[variant],boxShadow:"0 14px 26px rgba(214,143,166,.20), inset 0 3px 0 rgba(255,255,255,.82), inset 0 -18px 22px rgba(255,255,255,.40)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,position:"relative",zIndex:1,border:"1px solid rgba(255,247,249,.92)"};
  };

  const getTaskCreatedTime = useCallback((task)=>{
    const raw = task?.createdAt || task?.doneDate;
    const ts = raw ? new Date(raw).getTime() : NaN;
    if(Number.isFinite(ts)) return ts;
    const idNum = Number(task?.id);
    return Number.isFinite(idNum) ? idNum : 0;
  },[]);

  const getTaskSortTime = useCallback((task)=>{
    const name = String(task?.name || "").trim();
    const m = name.match(/^(\d{1,2})\/(\d{1,2})(?=\s|$)/);
    if(m){
      const month = Number(m[1]);
      const day = Number(m[2]);
      if(month>=1 && month<=12 && day>=1 && day<=31){
        const year = new Date().getFullYear();
        return new Date(year, month - 1, day).getTime();
      }
    }
    return getTaskCreatedTime(task);
  },[getTaskCreatedTime]);

  const sortedDoneTasks = useMemo(()=>{
    const factor = doneSortOrder === "asc" ? 1 : -1;
    return [...doneTasks].sort((a,b)=>{
      const diff = (getTaskSortTime(a) - getTaskSortTime(b)) * factor;
      if(diff!==0) return diff;
      return (getTaskCreatedTime(a) - getTaskCreatedTime(b)) * factor;
    });
  },[doneTasks,doneSortOrder,getTaskSortTime,getTaskCreatedTime]);
  useEffect(()=>{
    try{localStorage.setItem('pindou_toolbox',JSON.stringify(toolbox));}catch{}
  },[toolbox]);
  const [,setTimerTick]=useState(0);
  useEffect(()=>{const id=setInterval(()=>setTimerTick(v=>v+1),1000);return()=>clearInterval(id);},[]);

  function openAddModal(){setNewName("");setNewImg(null);setNewTaskTags([]);setShowAddModal(true);}
  function closeAddModal(){setShowAddModal(false);}

  function saveNewTask(){
    if(!newName.trim())return;
    const t={id:Date.now(),name:newName.trim(),img:newImg,colorData:[],tags:newTaskTags,status:"todo",createdAt:new Date().toISOString(),doneDate:null,elapsedMs:0,startedAt:null};
    setTasks(prev=>[t,...prev]);
    closeAddModal();
  }

  async function handleNewImg(e){
    const f=e.target.files[0];if(!f)return;
    try{
      const compressed=await compressImageFileToDataUrl(f,{max:300,quality:0.7});
      setNewImg(compressed);
    }catch(err){
      console.warn("new task cover compress failed:",err);
      const r=new FileReader();
      r.onload=ev=>setNewImg(ev.target.result);
      r.readAsDataURL(f);
    }finally{
      e.target.value="";
    }
  }

  async function saveTaskCover(taskId,file){
    if(!file)return;
    let compressed=null;
    try{
      compressed=await compressImageFileToDataUrl(file,{max:420,quality:0.76});
    }catch(err){
      console.warn("task cover compress failed:",err);
      compressed=await new Promise((resolve,reject)=>{
        const r=new FileReader();
        r.onload=ev=>resolve(ev.target.result);
        r.onerror=reject;
        r.readAsDataURL(file);
      });
    }
    const now=new Date().toISOString();
    const nextTasks=tasks.map(t=>String(t.id)===String(taskId)?{...t,img:compressed,coverUpdatedAt:now,updatedAt:now}:t);
    const nextTask=nextTasks.find(t=>String(t.id)===String(taskId));
    setTasks(nextTasks);
    try{localStorage.setItem("pindou_tasks",JSON.stringify(nextTasks));}catch{}
    if(user&&isPro&&nextTask){
      try{
        const {error}=await supabase.from("pindou_tasks").upsert([buildTaskRow(user.id,nextTask)],{onConflict:"user_id,task_id"});
        if(error)console.warn("task cover sync error:",error.message);
        await supabase.from("profiles").update({tasks:nextTasks.filter(t=>!t?.deletedAt)}).eq("user_id",user.id);
      }catch(err){
        console.warn("task cover immediate sync skipped:",err);
      }
    }
  }

  function requestDeleteTask(id){
    const task=tasks.find(t=>String(t.id)===String(id));
    if(!task)return;
    setLongPressId(null);
    setDeletePlan({id:String(id),step:"method"});
  }
  async function applyDeleteTask({mode="soft",restoreInventory=false}={}){
    const task=tasks.find(t=>String(t.id)===String(deletePlan?.id));
    if(!task)return setDeletePlan(null);
    const entries=normalizeColorEntries(task.colorData);
    const now=new Date().toISOString();
    if(restoreInventory&&entries.length>0){
      entries.forEach(c=>onRestoreStock&&onRestoreStock(c.id,c.count));
      if(onLogStockDeduction){
        await onLogStockDeduction(entries,{taskId:task.id,source:mode==="permanent"?"permanent_delete_restore":"delete_restore",action:"restore",meta:{taskName:task.name||"",reason:"delete_task_restore_inventory",deletedAt:now}});
      }
    }
    if(onCloudDeleteTask){
      await onCloudDeleteTask(task,{mode,meta:{taskName:task.name||"",restoreInventory,deletedAt:now}});
    }
    setTasks(prev=>prev.filter(t=>String(t.id)!==String(task.id)));
    setDeletePlan(null);
  }
  function choosePermanentDelete(){
    const task=tasks.find(t=>String(t.id)===String(deletePlan?.id));
    const hasDeducted=!!task?.stockDeducted && normalizeColorEntries(task?.colorData).length>0;
    if(hasDeducted){setDeletePlan(p=>({...p,step:"inventory"}));return;}
    applyDeleteTask({mode:"permanent",restoreInventory:false});
  }
  function startTask(id){
    setTasks(prev=>prev.map(t=>{
      if(t.id!==id)return t;
      return {...t,status:"doing",startedAt:new Date().toISOString(),doneDate:null};
    }));
  }
  function pauseTask(id){
    setTasks(prev=>prev.map(t=>{
      if(t.id!==id)return t;
      const add=t.startedAt?(Date.now()-new Date(t.startedAt).getTime()):0;
      return {...t,status:"paused",elapsedMs:(t.elapsedMs||0)+Math.max(0,add),startedAt:null};
    }));
  }
  function resumeTask(id){
    setTasks(prev=>prev.map(t=>t.id===id?{...t,status:"doing",startedAt:new Date().toISOString()}:t));
  }
  function getDisplayElapsedMs(task){
    const base=task.elapsedMs||0;
    const running=task.status==="doing"&&task.startedAt ? (Date.now()-new Date(task.startedAt).getTime()) : 0;
    return Math.max(0,base+running);
  }
  function formatElapsed(ms){
    const totalS=Math.max(0,Math.floor(ms/1000));
    const h=Math.floor(totalS/3600);
    const m=Math.floor((totalS%3600)/60);
    const s=totalS%60;
    if(h>0)return `${String(h).padStart(2,"0")}h ${String(m).padStart(2,"0")}m ${String(s).padStart(2,"0")}s`;
    if(m>0)return `${m}m ${String(s).padStart(2,"0")}s`;
    return `${s}s`;
  }
  function finishTask(id){
    setPendingFinishId(id);
  }
  function confirmFinishTask(deduct){
    const id=pendingFinishId;
    const task=tasks.find(t=>t.id===id);
    if(!task){setPendingFinishId(null);return;}
    const add=task.startedAt?(Date.now()-new Date(task.startedAt).getTime()):0;
    const total=(task.elapsedMs||0)+Math.max(0,add);

    // 存快照（含tasks），撤销时一键还原库存+作品
    onPushHistory(tasks);

    const shouldDeduct=!!(deduct&&task.colorData&&task.colorData.length>0&&!task.stockDeducted);
    if(deduct&&task.stockDeducted){
      alert("这张作品已经标记为已扣豆，本次只改为完成，不重复扣库存。");
    }
    if(shouldDeduct){
      task.colorData.forEach(c=>{
        if(c?.id&&c?.count>0)onDeductStock(c.id,c.count);
      });
      if(onLogStockDeduction)onLogStockDeduction(task.colorData,{taskId:id,source:"finish_task",action:"deduct",meta:{taskName:task.name||""}});
    }

    const finishedAt=new Date().toISOString();
    setTasks(prev=>prev.map(t=>t.id===id?{
      ...t,
      status:"done",
      doneDate:finishedAt,
      elapsedMs:total,
      startedAt:null,
      stockDeducted: shouldDeduct ? true : !!t.stockDeducted,
      deductedAt: shouldDeduct ? finishedAt : (t.deductedAt||null)
    }:t));
    setPendingFinishId(null);
  }

  function restoreTask(id){
    setTasks(prev=>prev.map(t=>t.id===id?{...t,status:"paused",startedAt:null}:t));
  }

  function startLongPress(id){longPressTimer.current=setTimeout(()=>setLongPressId(id),600);}
  function cancelLongPress(){clearTimeout(longPressTimer.current);}
  const activeTasks=tasks.filter(t=>t.status!=="done");

  function pickOneCore(prevId){
    const pool=tasks.filter(t=>t.status!=="done");
    if(pool.length===0)return null;
    let next=pool[Math.floor(Math.random()*pool.length)]?.id;
    if(pool.length>1 && next===prevId){
      next=pool[(pool.findIndex(x=>x.id===next)+1)%pool.length].id;
    }
    return next;
  }
  function pickOne(){
    setPickedId(prev=>pickOneCore(prev));
  }
  function handleFlipCard(){
    const pool=tasks.filter(t=>t.status!=="done");
    if(pool.length===0||flipAnimating)return;
    if(pool.length===1 && pickedId===pool[0].id)return;
    setFlipAnimating(true);
    setTimeout(()=>{
      setPickedId(prev=>pickOneCore(prev));
      setTimeout(()=>setFlipAnimating(false),260);
    },220);
  }
  function downloadPicked(){
    if(!pickedTask?.img){alert("这张图纸没有图片，无法导出～");return;}
    try{
      const a=document.createElement("a");
      a.href=pickedTask.img;
      const safe=(pickedTask.name||"图纸").replace(/[\/:*?"<>|]/g,"_");
      a.download=`${safe}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    }catch(e){
      alert("导出失败："+e.message);
    }
  }
  const pickedTask=pickedId?tasks.find(t=>t.id===pickedId):null;
  // 缺色替换页
  if(view==="missing")return <MissingColorPage T={T} stock={stock} onBack={()=>setView("home")}/>;
  // 图纸助手页
  if(view==="guide")return <GuideAssistant T={T} onBack={()=>setView("home")}/> ;

  // 辅助工具页
  if(view==="helper")return <HelperToolPage T={T} onBack={()=>setView("home")}/>;

  // 图纸绘制页
  if(view==="drawing")return <DrawingPage T={T} tn={tn} onBack={()=>setView("home")}/>;

  // 日记页
  if(view==="diary")return(
    <div style={{fontFamily:"'Nunito',sans-serif"}}>
      <div style={{padding:"14px 16px",display:"flex",alignItems:"center",gap:10,borderBottom:`1px solid ${T.border}`}}>
        <button onClick={()=>setView("home")} style={{background:"none",border:"none",fontSize:22,color:T.textMid,cursor:"pointer",lineHeight:1}}>←</button>
        <div style={{fontSize:15,fontWeight:800,color:T.text}}>📖 拼豆日记</div>
      </div>
      <DiaryPage T={T} tn={tn} inWorks={true}/>
    </div>
  );

  return(
    <div style={{fontFamily:"'Nunito',sans-serif",paddingBottom:20}}>

        {/* 新建图纸弹窗 */}
      {showAddModal&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:999,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
          onClick={e=>{if(e.target===e.currentTarget)closeAddModal();}}>
          <div style={{background:T.card,borderRadius:"24px 24px 0 0",width:"100%",maxWidth:480,maxHeight:"90vh",display:"flex",flexDirection:"column"}}>
                        <>
              <div style={{padding:"20px 20px 0",flexShrink:0}}>
                <div style={{fontSize:16,fontWeight:800,color:T.text,marginBottom:16}}>🖼️ 新建图纸</div>
                <input value={newName} onChange={e=>setNewName(e.target.value)} placeholder="图纸名称，比如：草莓蛋糕" autoFocus
                  style={{width:"100%",border:`1.5px solid ${T.border}`,borderRadius:14,padding:"12px 16px",fontSize:14,fontFamily:"'Nunito',sans-serif",background:T.bg,color:T.text,outline:"none",boxSizing:"border-box",marginBottom:12}}/>
                {/* 标签选择 */}
                {(()=>{
                  const allT=[...new Set(tasks.filter(t=>t.tags&&t.tags.length>0).flatMap(t=>t.tags))];
                  return(
                    <div style={{marginBottom:4}}>
                      <div style={{fontSize:11,color:T.textMid,fontWeight:700,marginBottom:6}}>标签（选填）</div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                        {allT.map(tag=>(
                          <div key={tag} onClick={()=>setNewTaskTags(prev=>prev.includes(tag)?prev.filter(t=>t!==tag):[...prev,tag])}
                            style={{padding:"4px 12px",borderRadius:50,border:`1.5px solid ${newTaskTags.includes(tag)?T.accent:T.border}`,background:newTaskTags.includes(tag)?T.accentSoft:T.card,color:newTaskTags.includes(tag)?T.accent:T.textMid,fontSize:11,fontWeight:800,cursor:"pointer"}}>
                            {tag}
                          </div>
                        ))}
                        <div onClick={()=>{const t=prompt("新建标签");if(t?.trim()&&!newTaskTags.includes(t.trim()))setNewTaskTags(prev=>[...prev,t.trim()]);}}
                          style={{padding:"4px 12px",borderRadius:50,border:`1.5px dashed ${T.border}`,background:"transparent",color:T.textLight,fontSize:11,fontWeight:800,cursor:"pointer"}}>＋ 新建</div>
                      </div>
                      {newTaskTags.length>0&&<div style={{fontSize:10,color:T.textMid,marginTop:4}}>已选：{newTaskTags.join("、")}</div>}
                    </div>
                  );
                })()}
              </div>

              <div style={{flex:1,overflowY:"auto",padding:"0 20px"}}>
                <div onClick={()=>newImgRef.current?.click()}
                  style={{background:T.accentSoft,border:`2px dashed ${T.border}`,borderRadius:16,padding:"20px",textAlign:"center",cursor:"pointer",marginBottom:10,overflow:"hidden",minHeight:80}}>
                  {newImg?(
                    <img src={newImg} style={{width:"100%",maxHeight:220,objectFit:"contain",borderRadius:10}} alt=""/>
                  ):(
                    <>
                      <div style={{fontSize:28,marginBottom:6}}>📷</div>
                      <div style={{fontSize:13,fontWeight:700,color:T.accent}}>点击上传图纸</div>
                      <div style={{fontSize:11,color:T.textMid,marginTop:4}}>只保存图纸，不进行颜色识别</div>
                    </>
                  )}
                </div>
                <input ref={newImgRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleNewImg}/>
              </div>

              <div style={{padding:"12px 20px 36px",flexShrink:0,display:"flex",gap:10}}>
                <button onClick={closeAddModal} style={{flex:1,padding:"12px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:700,cursor:"pointer"}}>取消</button>
                <button onClick={saveNewTask} disabled={!newName.trim()}
                  style={{flex:2,padding:"12px 0",borderRadius:50,border:"none",background:newName.trim()?T.accent:"#ccc",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:800,cursor:"pointer"}}>
                  保存图纸 ✓
                </button>
              </div>
            </>

          </div>
        </div>
      )}

      {/* 长按删除确认 */}
      {longPressId&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.4)",zIndex:998,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 24px"}}
          onClick={()=>setLongPressId(null)}>
          <div style={{background:T.card,borderRadius:22,padding:"24px 20px",width:"100%",maxWidth:320}} onClick={e=>e.stopPropagation()}>
            <div style={{textAlign:"center",marginBottom:16}}>
              <div style={{fontSize:32,marginBottom:8}}>🗑️</div>
              <div style={{fontSize:15,fontWeight:800,color:T.text,marginBottom:6}}>删除这个图纸？</div>
              <div style={{fontSize:12,color:T.textMid}}>「{tasks.find(t=>t.id===longPressId)?.name}」先选择移出作品页或彻底删除</div>
            </div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setLongPressId(null)} style={{flex:1,padding:"12px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:700,cursor:"pointer"}}>取消</button>
              <button onClick={()=>requestDeleteTask(longPressId)} style={{flex:1,padding:"12px 0",borderRadius:50,border:"none",background:T.danger,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:800,cursor:"pointer"}}>删除</button>
            </div>
          </div>
        </div>
      )}

      {/* 删除方式选择 */}
      {deletePlan&&(()=>{
        const task=tasks.find(t=>String(t.id)===String(deletePlan.id));
        const hasDeducted=!!task?.stockDeducted && normalizeColorEntries(task?.colorData).length>0;
        return (
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.42)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 22px"}} onClick={()=>setDeletePlan(null)}>
            <div style={{background:T.card,borderRadius:24,padding:"22px 18px",width:"100%",maxWidth:350,boxShadow:T.floatShadow}} onClick={e=>e.stopPropagation()}>
              {deletePlan.step==="method"?(<>
                <div style={{textAlign:"center",marginBottom:16}}>
                  <div style={{fontSize:32,marginBottom:8}}>🗑️</div>
                  <div style={{fontSize:16,fontWeight:900,color:T.text,marginBottom:6}}>选择删除方式</div>
                  <div style={{fontSize:12,color:T.textMid,lineHeight:1.7}}>「{task?.name||"未命名"}」要怎么删？</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  <button onClick={()=>applyDeleteTask({mode:"soft",restoreInventory:false})} style={{padding:"12px 14px",borderRadius:16,border:`1.5px solid ${T.border}`,background:T.card,color:T.text,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer",textAlign:"left"}}>
                    移出作品页，可恢复
                    <div style={{fontSize:11,color:T.textLight,fontWeight:700,marginTop:4}}>云端保留记录，不改库存</div>
                  </button>
                  <button onClick={choosePermanentDelete} style={{padding:"12px 14px",borderRadius:16,border:`1.5px solid ${T.dangerBg}`,background:T.dangerBg,color:T.danger,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer",textAlign:"left"}}>
                    彻底删除，不可恢复
                    <div style={{fontSize:11,color:T.textLight,fontWeight:700,marginTop:4}}>从作品表删除；如果已扣豆，会再问你库存怎么处理</div>
                  </button>
                  <button onClick={()=>setDeletePlan(null)} style={{padding:"11px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>取消</button>
                </div>
              </>):(<>
                <div style={{textAlign:"center",marginBottom:16}}>
                  <div style={{fontSize:32,marginBottom:8}}>📦</div>
                  <div style={{fontSize:16,fontWeight:900,color:T.text,marginBottom:6}}>这张已经扣过库存</div>
                  <div style={{fontSize:12,color:T.textMid,lineHeight:1.7}}>「{task?.name||"未命名"}」彻底删除时，要不要把扣掉的豆子加回来？</div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  <button onClick={()=>applyDeleteTask({mode:"permanent",restoreInventory:false})} style={{padding:"12px 14px",borderRadius:16,border:`1.5px solid ${T.border}`,background:T.card,color:T.text,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer",textAlign:"left"}}>
                    只删作品，不恢复库存
                    <div style={{fontSize:11,color:T.textLight,fontWeight:700,marginTop:4}}>适合：这张确实拼过，只是不想留作品卡</div>
                  </button>
                  <button onClick={()=>applyDeleteTask({mode:"permanent",restoreInventory:true})} style={{padding:"12px 14px",borderRadius:16,border:`1.5px solid ${T.dangerBg}`,background:T.dangerBg,color:T.danger,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer",textAlign:"left"}}>
                    删作品，并恢复库存
                    <div style={{fontSize:11,color:T.textLight,fontWeight:700,marginTop:4}}>适合：重复扣、误扣、根本不该扣</div>
                  </button>
                  <button onClick={()=>setDeletePlan(p=>({...p,step:"method"}))} style={{padding:"11px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>返回</button>
                </div>
              </>)}
            </div>
          </div>
        );
      })()}

      {/* 进度区 */}
      <div style={{background:`linear-gradient(135deg,${T.accentSoft} 0%,#f5f0ff 100%)`,padding:"20px 18px 16px",borderBottom:`1px solid ${T.border}`}}>
        <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:10}}>
          <div>
            <div style={{fontSize:18,fontWeight:900,color:T.accent}}>作品</div>
            <div style={{fontSize:11,color:T.textMid,marginTop:2}}>本月进度 · {now.getMonth()+1}月</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:20,fontWeight:900,color:T.text}}>{doneThisMonth.length} <span style={{fontSize:12,fontWeight:600,color:T.textMid}}>件</span></div>
          </div>
        </div>
        {showGoalEdit?(
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:8}}>
            <input value={goalInput} onChange={e=>setGoalInput(e.target.value)} type="number" placeholder="目标件数"
              style={{flex:1,border:`1.5px solid ${T.border}`,borderRadius:12,padding:"6px 12px",fontSize:12,fontFamily:"'Nunito',sans-serif",background:T.card,color:T.text,outline:"none"}}/>
            <button onClick={()=>{setMonthGoal(goalInput===""?0:Number(goalInput));setShowGoalEdit(false);localStorage.setItem('pindou_month_goal',goalInput);}}
              style={{padding:"6px 14px",borderRadius:20,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,cursor:"pointer"}}>确认</button>
            <button onClick={()=>setShowGoalEdit(false)} style={{padding:"6px 10px",borderRadius:20,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,cursor:"pointer"}}>取消</button>
          </div>
        ):(
          <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:T.textMid,fontWeight:600,marginBottom:5}}>
            <span>{monthGoal>0?`本月目标 ${monthGoal} 件`:"未设置目标"}</span>
            <button onClick={()=>{setGoalInput(String(monthGoal||""));setShowGoalEdit(true);}} style={{background:"none",border:"none",fontSize:10,color:T.accent,fontWeight:700,cursor:"pointer",fontFamily:"'Nunito',sans-serif",padding:0}}>修改目标</button>
          </div>
        )}
        {monthGoal>0&&<div style={{background:T.accentLight,borderRadius:20,height:8,overflow:"hidden",marginBottom:10}}>
          <div style={{width:`${progress*100}%`,height:"100%",borderRadius:20,background:`linear-gradient(90deg,${T.accent},#a78bff)`,transition:"width 0.5s"}}/>
        </div>}
        <div style={{display:"flex",gap:6}}>
          {[["📋",tasks.filter(t=>t.status==="todo").length,"待开始",T.textMid,T.accentSoft],["🔥",tasks.filter(t=>t.status==="doing").length,"进行中",T.warn,T.warnBg],["✅",doneTasks.length,"已完成","#4caf50","#f0fff4"]].map(([ic,n,lb,col,bg])=>(
            <div key={lb} style={{flex:1,textAlign:"center",fontSize:10,fontWeight:700,color:col,background:bg,borderRadius:8,padding:"5px 0"}}>{ic} {lb} {n}</div>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:8}}>
          <button onClick={()=>setShowDoneList(v=>!v)} style={{background:"none",border:"none",fontSize:11,color:T.accent,fontWeight:800,cursor:"pointer",fontFamily:"'Nunito',sans-serif",padding:0}}>
            {showDoneList?`收起已完成 ${doneTasks.length}`:`查看已完成 ${doneTasks.length}`}
          </button>
        </div>
      </div>

      {/* 工具入口 */}
      <div style={{padding:"16px 16px 0",display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:10}}>
        <div className={isFluffyUi?"cc fur-card":"cc"} onClick={()=>{if(!isPro){onUpgrade();return;}setShowToolbox(true);}}
          style={isFluffyUi?plushToolCardStyle("toolbox"):{background:"linear-gradient(145deg,rgba(255,255,255,.92),rgba(239,248,255,.72))",borderRadius:26,padding:"13px 6px 11px",minHeight:92,boxShadow:"0 14px 30px rgba(75,155,215,.15), inset 0 1px 0 rgba(255,255,255,.95)",cursor:"pointer",border:"1px solid rgba(178,221,255,.88)",display:"flex",flexDirection:"column",gap:7,alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",overflow:"hidden"}}>
          <div style={isFluffyUi?plushToolGlowStyle("toolbox"):{position:"absolute",inset:"-28px -18px auto auto",width:76,height:76,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,214,143,.42),rgba(122,203,255,.08) 62%,transparent 72%)",filter:"blur(2px)"}}/>
          {!isPro&&<span style={{position:"absolute",top:7,right:7,fontSize:8,background:"linear-gradient(90deg,#ffd166,#ffb347)",color:"#7a4000",borderRadius:50,padding:"1px 5px",fontWeight:900,lineHeight:1.2,zIndex:2}}>Pro</span>}
          <div className={isFluffyUi?"fur-icon":""} style={isFluffyUi?plushToolIconStyle("toolbox"):{width:48,height:48,borderRadius:"50%",background:"radial-gradient(circle at 32% 26%,rgba(255,255,255,.96),rgba(232,247,255,.72) 48%,rgba(255,242,207,.5))",boxShadow:"0 12px 28px rgba(74,158,255,.18), inset 0 1px 0 rgba(255,255,255,.95), inset 0 -10px 18px rgba(255,255,255,.45)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,position:"relative",zIndex:1,border:"1px solid rgba(255,255,255,.9)"}}>🧰</div>
          <div style={{fontSize:12,fontWeight:900,color:T.text,lineHeight:1,whiteSpace:"nowrap",position:"relative",zIndex:1}}>工具箱</div>
        </div>
        <div className={isFluffyUi?"cc fur-card":"cc"} onClick={()=>setView("missing")}
          style={isFluffyUi?plushToolCardStyle("missing"):{background:"linear-gradient(145deg,rgba(255,255,255,.92),rgba(244,240,255,.74))",borderRadius:26,padding:"13px 6px 11px",minHeight:92,boxShadow:"0 14px 30px rgba(139,115,216,.13), inset 0 1px 0 rgba(255,255,255,.95)",cursor:"pointer",border:"1px solid rgba(205,193,255,.8)",display:"flex",flexDirection:"column",gap:7,alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",overflow:"hidden"}}>
          <div style={isFluffyUi?plushToolGlowStyle("missing"):{position:"absolute",inset:"-30px auto auto -16px",width:82,height:82,borderRadius:"50%",background:"radial-gradient(circle,rgba(186,213,255,.38),rgba(255,220,238,.12) 62%,transparent 72%)",filter:"blur(2px)"}}/>
          <div className={isFluffyUi?"fur-icon":""} style={isFluffyUi?plushToolIconStyle("missing"):{width:48,height:48,borderRadius:"50%",background:"radial-gradient(circle at 32% 26%,rgba(255,255,255,.97),rgba(235,244,255,.72) 48%,rgba(232,220,255,.5))",boxShadow:"0 12px 28px rgba(154,123,220,.16), inset 0 1px 0 rgba(255,255,255,.95), inset 0 -10px 18px rgba(255,255,255,.45)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,position:"relative",zIndex:1,border:"1px solid rgba(255,255,255,.9)"}}>🔍</div>
          <div style={{fontSize:12,fontWeight:900,color:T.text,lineHeight:1,whiteSpace:"nowrap",position:"relative",zIndex:1}}>缺色替换</div>
        </div>
        <div className={isFluffyUi?"cc fur-card":"cc"} onClick={()=>setView("helper")}
          style={isFluffyUi?plushToolCardStyle("helper"):{background:"linear-gradient(145deg,rgba(255,255,255,.92),rgba(238,249,255,.72))",borderRadius:26,padding:"13px 6px 11px",minHeight:92,boxShadow:"0 14px 30px rgba(74,158,255,.14), inset 0 1px 0 rgba(255,255,255,.95)",cursor:"pointer",border:"1px solid rgba(178,221,255,.88)",display:"flex",flexDirection:"column",gap:7,alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",overflow:"hidden"}}>
          <div style={isFluffyUi?plushToolGlowStyle("helper"):{position:"absolute",inset:"auto -22px -30px auto",width:86,height:86,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,232,173,.36),rgba(126,210,255,.12) 62%,transparent 72%)",filter:"blur(2px)"}}/>
          <div className={isFluffyUi?"fur-icon":""} style={isFluffyUi?plushToolIconStyle("helper"):{width:48,height:48,borderRadius:"50%",background:"radial-gradient(circle at 32% 26%,rgba(255,255,255,.97),rgba(232,247,255,.72) 48%,rgba(255,243,217,.5))",boxShadow:"0 12px 28px rgba(74,158,255,.17), inset 0 1px 0 rgba(255,255,255,.95), inset 0 -10px 18px rgba(255,255,255,.45)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,position:"relative",zIndex:1,border:"1px solid rgba(255,255,255,.9)"}}>📏</div>
          <div style={{fontSize:12,fontWeight:900,color:T.text,lineHeight:1,whiteSpace:"nowrap",position:"relative",zIndex:1}}>辅助工具</div>
        </div>
        <div className={isFluffyUi?"cc fur-card":"cc"} onClick={()=>setView("drawing")}
          style={isFluffyUi?plushToolCardStyle("helper"):{background:"linear-gradient(145deg,rgba(255,255,255,.92),rgba(255,245,238,.72))",borderRadius:26,padding:"13px 6px 11px",minHeight:92,boxShadow:"0 14px 30px rgba(255,140,80,.12), inset 0 1px 0 rgba(255,255,255,.95)",cursor:"pointer",border:"1px solid rgba(255,210,178,.88)",display:"flex",flexDirection:"column",gap:7,alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",overflow:"hidden"}}>
          <div style={{position:"absolute",inset:"-28px -18px auto auto",width:76,height:76,borderRadius:"50%",background:"radial-gradient(circle,rgba(255,200,150,.40),rgba(255,160,100,.08) 62%,transparent 72%)",filter:"blur(2px)"}}/>
          <div className={isFluffyUi?"fur-icon":""} style={isFluffyUi?plushToolIconStyle("helper"):{width:48,height:48,borderRadius:"50%",background:"radial-gradient(circle at 32% 26%,rgba(255,255,255,.97),rgba(255,245,230,.72) 48%,rgba(255,220,190,.5))",boxShadow:"0 12px 28px rgba(255,140,80,.15), inset 0 1px 0 rgba(255,255,255,.95), inset 0 -10px 18px rgba(255,255,255,.45)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,position:"relative",zIndex:1,border:"1px solid rgba(255,255,255,.9)"}}>🎨</div>
          <div style={{fontSize:12,fontWeight:900,color:T.text,lineHeight:1,whiteSpace:"nowrap",position:"relative",zIndex:1}}>图纸绘制</div>
        </div>
      </div>

      {/* 即将出炉 */}
      <div style={{padding:"16px 16px 0"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,gap:10}}>
          <div style={{fontSize:13,fontWeight:800,color:T.text}}>🍞 即将出炉</div>
          <div style={{display:"flex",gap:6,alignItems:"center",justifyContent:"flex-end",flexShrink:0}}>
            <button onClick={()=>{pickOne();setPickerOpen(true);}} style={{padding:"5px 10px",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,cursor:"pointer",whiteSpace:"nowrap"}}>🎩 翻一翻</button>
            <button onClick={openAddModal} style={{padding:"5px 10px",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,cursor:"pointer",whiteSpace:"nowrap"}}>＋ 新建</button>
          </div>
        </div>
        <div style={{fontSize:11,color:T.textLight,marginBottom:10,fontWeight:600}}>长按卡片可删除</div>

        {/* 翻卡器：随机给你一张待拼图纸 */}
        {pickerOpen&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1200,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 18px"}}
            onClick={()=>setPickerOpen(false)}>
            <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:360,background:T.card,borderRadius:24,border:`1.5px solid ${T.border}`,boxShadow:T.floatShadow,overflow:"hidden"}}>
              <div style={{padding:"14px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",background:`linear-gradient(135deg,${T.accentSoft},#f5f0ff)`}}>
                <div style={{fontSize:14,fontWeight:900,color:T.text}}>🃏 翻卡器</div>
                <button onClick={()=>setPickerOpen(false)} style={{background:"none",border:"none",fontSize:18,color:T.textMid,cursor:"pointer"}}>✕</button>
              </div>

              {!pickedTask?(
                <div style={{padding:"22px 16px",textAlign:"center",color:T.textMid,fontWeight:700}}>
                  <span style={{display:"block",lineHeight:1.7}}>现在没有待拼图纸哦~</span>
                  <span style={{display:"block",lineHeight:1.7}}>先去「新建」存几张吧</span>
                </div>
              ):(
                <div style={{padding:"16px"}}>
                  <div onClick={handleFlipCard} style={{borderRadius:18,overflow:"hidden",border:`1.5px solid ${T.border}`,background:T.bg,cursor:"pointer",perspective:1200}}>
                    <div style={{transform:`rotateY(${flipAnimating?90:0}deg)`,transformStyle:"preserve-3d",transition:"transform 0.48s cubic-bezier(.22,.8,.22,1)"}}>
                      <div style={{aspectRatio:"16/11",background:"#ddd",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {pickedTask.img?<img src={pickedTask.img} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:<div style={{fontSize:28}}>🖼️</div>}
                      </div>
                    </div>
                    <div style={{padding:"12px 12px 10px"}}>
                      <div style={{fontSize:14,fontWeight:900,color:T.text,marginBottom:4,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{pickedTask.name}</div>
                      <div style={{fontSize:11,color:T.textMid,fontWeight:700}}>状态：{pickedTask.status==="doing"?"进行中":pickedTask.status==="paused"?"已暂停":"待开始"}</div>
                    </div>
                  </div>

                  <div style={{display:"flex",justifyContent:"center",marginTop:14}}>
                    <button onClick={downloadPicked} style={{width:"78%",maxWidth:260,padding:"10px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer"}}>下载导出</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}


        {showToolbox&&<ToolboxModal toolbox={toolbox} setToolbox={setToolbox} T={T} onClose={()=>setShowToolbox(false)}/>}

        {pendingFinishId&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1200,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 18px"}}
            onClick={()=>setPendingFinishId(null)}>
            <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:340,background:T.card,borderRadius:24,padding:"22px 18px",boxShadow:T.floatShadow}}>
              <div style={{fontSize:15,fontWeight:900,color:T.text,textAlign:"center",marginBottom:8}}>完成这张图纸？</div>
              <div style={{fontSize:12,color:T.textMid,textAlign:"center",lineHeight:1.7,marginBottom:16}}>
                这次完成后，要不要同步扣除库存里的豆子数量
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:10}}>
                <button onClick={()=>confirmFinishTask(true)} style={{padding:"11px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer"}}>扣除库存并完成</button>
                <button onClick={()=>confirmFinishTask(false)} style={{padding:"11px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>仅标记完成</button>
                <button onClick={()=>setPendingFinishId(null)} style={{padding:"11px 0",borderRadius:50,border:"none",background:"#f3f4f6",color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>取消</button>
              </div>
            </div>
          </div>
        )}




        {activeTasks.length===0&&(
          <div style={{textAlign:"center",padding:"32px 0",color:T.textLight,fontSize:13}}>还没有图纸～点右上角新建一个吧 (◕ᴗ◕✿)</div>
        )}

        {activeTasks.map(task=>{
          const showTime=task.status==="doing"||task.status==="paused"||task.status==="done";
          const elapsed=formatElapsed(getDisplayElapsedMs(task));
          const statusText=task.status==="doing"?"进行中":task.status==="paused"?"已暂停":task.status==="done"?"已完成":"待开始";
          const statusBg=task.status==="doing"?T.warnBg:task.status==="paused"?"#f3f4f6":task.status==="done"?"#f0fff4":T.accentSoft;
          const statusColor=task.status==="doing"?T.warn:task.status==="paused"?"#7d8792":task.status==="done"?"#4caf50":T.accent;
          return(
          <div key={task.id}
            onTouchStart={()=>startLongPress(task.id)}
            onTouchEnd={cancelLongPress}
            onTouchMove={cancelLongPress}
            onMouseDown={()=>startLongPress(task.id)}
            onMouseUp={cancelLongPress}
            onMouseLeave={cancelLongPress}
            className="cc"
            style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"12px",marginBottom:12,boxShadow:T.cardShadow,display:"flex",gap:12,alignItems:"stretch"}}>
            <div style={{width:96,height:96,borderRadius:18,background:T.accentSoft,overflow:"hidden",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>
              {task.img?<img src={task.img} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:"🖼️"}
            </div>

            <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
              <div>
                <div style={{fontSize:15,fontWeight:800,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:1.25,marginBottom:10}}>{task.name}</div>

                <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",marginBottom:12}}>
                  <div style={{padding:"4px 10px",borderRadius:12,background:statusBg,border:`1.5px solid ${statusColor}33`,fontSize:11,fontWeight:800,color:statusColor}}>
                    {statusText}
                  </div>
                  {showTime&&(
                    <div style={{fontSize:11,color:T.textMid,fontWeight:800,letterSpacing:0.2}}>
                      {task.status==="doing"?`计时 ${elapsed}`:task.status==="paused"?`已拼 ${elapsed}`:`用时 ${elapsed}`}
                    </div>
                  )}
                </div>
              </div>

              <div style={{display:"flex",gap:10,alignItems:"center"}}>
                {task.status==="todo"&&(
                  <button onClick={()=>startTask(task.id)} style={{flex:1,padding:"9px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer",boxShadow:`0 3px 10px ${T.accent}22`}}>▶ 开始拼</button>
                )}

                {task.status==="doing"&&(
                  <>
                    <button onClick={()=>pauseTask(task.id)} style={{width:42,height:42,borderRadius:"50%",border:`2px solid ${T.border}`,background:T.card,color:T.textMid,fontSize:18,fontWeight:900,cursor:"pointer",flexShrink:0}}>⏸</button>
                    <button onClick={()=>finishTask(task.id)} style={{flex:1,padding:"9px 0",borderRadius:50,border:"none",background:"#0cc33c",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer",boxShadow:"0 3px 10px rgba(12,195,60,0.16)"}}>✓ 完成</button>
                  </>
                )}

                {task.status==="paused"&&(
                  <>
                    <button onClick={()=>finishTask(task.id)} style={{width:42,height:42,borderRadius:"50%",border:"2px solid #c9efd2",background:"#eefbf1",color:"#32b74a",fontSize:20,fontWeight:900,cursor:"pointer",flexShrink:0}}>✓</button>
                    <button onClick={()=>resumeTask(task.id)} style={{flex:1,padding:"9px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer",boxShadow:`0 3px 10px ${T.accent}22`}}>▶ 继续拼</button>
                  </>
                )}

                {task.status==="done"&&(
                  <div style={{padding:"10px 14px",borderRadius:50,background:"#f0fff4",border:"1.5px solid #bfe9c6",color:"#2f9a47",fontSize:13,fontWeight:900}}>
                    ✓ 已完成
                  </div>
                )}
              </div>
            </div>
          </div>
        )})}

        {showDoneList&&doneTasks.length>0&&(
          <div style={{paddingTop:4}}>
            {/* 标签筛选栏 */}
            {(()=>{
              const allT=["全部",...new Set(doneTasks.filter(t=>t.tags&&t.tags.length>0).flatMap(t=>t.tags))];
              return(
                <div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8}}>
                    <div style={{fontSize:12,fontWeight:800,color:T.textMid}}>✅ 已完成</div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <button
                        onClick={()=>setDoneSortOrder(v=>v==="desc"?"asc":"desc")}
                        title={doneSortOrder==="desc"?"当前：新到旧":"当前：旧到新"}
                        style={{width:38,height:38,borderRadius:14,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontSize:15,fontWeight:900,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:T.cardShadow,flexShrink:0}}
                      >
                        <span style={{display:"inline-flex",alignItems:"center",gap:1,letterSpacing:"-1px",transform:"scale(0.94)"}}>
                          {doneSortOrder==="desc"?(<><span>↓</span><span style={{opacity:0.58}}>↑</span></>):(<><span style={{opacity:0.58}}>↑</span><span>↓</span></>)}
                        </span>
                      </button>
                      <button
                        onClick={()=>{
                          if(batchTagMode&&batchModeType==="tag"){
                            setBatchTagMode(false);setBatchModeType(null);setBatchTagSel(new Set());
                          }else{
                            setBatchTagMode(true);setBatchModeType("tag");setBatchTagSel(new Set());
                          }
                        }}
                        title={batchTagMode&&batchModeType==="tag"?"退出批量贴标签":"批量贴标签"}
                        style={{width:38,height:38,borderRadius:14,border:`1.5px solid ${batchTagMode&&batchModeType==="tag"?T.accent:T.border}`,background:batchTagMode&&batchModeType==="tag"?T.accentSoft:T.card,color:batchTagMode&&batchModeType==="tag"?T.accent:T.textMid,fontSize:18,fontWeight:900,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:T.cardShadow,flexShrink:0}}
                      >
                        🗂️
                      </button>
                      <button
                        onClick={()=>{
                          if(batchTagMode&&batchModeType==="move"){
                            setBatchTagMode(false);setBatchModeType(null);setBatchTagSel(new Set());
                          }else{
                            setBatchTagMode(true);setBatchModeType("move");setBatchTagSel(new Set());
                          }
                        }}
                        title={batchTagMode&&batchModeType==="move"?"退出批量移动":"移动到正确分类"}
                        style={{width:38,height:38,borderRadius:14,border:`1.5px solid ${batchTagMode&&batchModeType==="move"?T.accent:T.border}`,background:batchTagMode&&batchModeType==="move"?T.accentSoft:T.card,color:batchTagMode&&batchModeType==="move"?T.accent:T.textMid,fontSize:18,fontWeight:900,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:T.cardShadow,flexShrink:0}}
                      >
                        ↪️
                      </button>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:8,marginBottom:10}}>
                    {allT.map(tag=>(
                      <div key={tag} onClick={()=>setDoneTagFilter(tag)}
                        style={{padding:"4px 14px",borderRadius:50,border:`1.5px solid ${doneTagFilter===tag?T.accent:T.border}`,background:doneTagFilter===tag?T.accentSoft:T.card,color:doneTagFilter===tag?T.accent:T.textMid,fontSize:11,fontWeight:800,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* 批量选中操作栏 */}
            {batchTagMode&&batchTagSel.size>0&&(
              <div style={{marginBottom:10,display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                <div style={{fontSize:12,color:T.accent,fontWeight:800}}>已选 {batchTagSel.size} 件</div>
                <button
                  onClick={()=>batchModeType==="move"?setShowBatchMovePicker(true):setShowBatchTagPicker(true)}
                  style={{padding:"5px 14px",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,cursor:"pointer"}}
                >
                  {batchModeType==="move"?"移动分类":"贴标签"}
                </button>
                <button onClick={()=>setBatchTagSel(new Set())} style={{padding:"5px 10px",borderRadius:50,border:`1.5px solid ${T.border}`,background:"transparent",color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:700,cursor:"pointer"}}>清空</button>
              </div>
            )}

            {/* 批量贴标签弹窗 */}
            {showBatchTagPicker&&(
              <BatchTagPicker T={T} tasks={tasks} batchTagSel={batchTagSel}
                onConfirm={(localSel)=>{
                  setTasks(prev=>prev.map(t=>batchTagSel.has(t.id)?{...t,tags:[...new Set([...(t.tags||[]),...localSel])]}:t));
                  setShowBatchTagPicker(false);setBatchTagSel(new Set());setBatchTagMode(false);setBatchModeType(null);
                }}
                onClose={()=>setShowBatchTagPicker(false)}
              />
            )}

            {showBatchMovePicker&&(
              <BatchMovePicker T={T} tasks={tasks}
                onConfirm={(targetTag)=>{
                  setTasks(prev=>prev.map(t=>batchTagSel.has(t.id)?{...t,tags:[targetTag]}:t));
                  setShowBatchMovePicker(false);setBatchTagSel(new Set());setBatchTagMode(false);setBatchModeType(null);setDoneTagFilter(targetTag);
                }}
                onClose={()=>setShowBatchMovePicker(false)}
              />
            )}

            {/* 已完成作品列表 */}
            {(()=>{
              const filtered=doneTagFilter==="全部"?sortedDoneTasks:sortedDoneTasks.filter(t=>t.tags&&t.tags.includes(doneTagFilter));
              return filtered.map(task=>{
              const elapsed=formatElapsed(task.elapsedMs||0);
              return(
              <div key={`done-${task.id}`} onClick={batchTagMode?()=>setBatchTagSel(prev=>{const n=new Set(prev);n.has(task.id)?n.delete(task.id):n.add(task.id);return n;}):undefined}
                style={{background:T.card,border:`1.5px solid ${batchTagMode&&batchTagSel.has(task.id)?T.accent:T.border}`,borderRadius:22,padding:"12px",marginBottom:12,boxShadow:T.cardShadow,display:"flex",gap:12,alignItems:"stretch",opacity:0.96,cursor:batchTagMode?"pointer":"default",position:"relative"}}>
                {batchTagMode&&(
                  <div style={{position:"absolute",top:10,right:10,width:20,height:20,borderRadius:"50%",border:`2px solid ${batchTagSel.has(task.id)?T.accent:T.border}`,background:batchTagSel.has(task.id)?T.accent:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#fff",fontWeight:900,zIndex:2}}>
                    {batchTagSel.has(task.id)?"✓":""}
                  </div>
                )}
                <div
                  onClick={batchTagMode?undefined:()=>{
                    const inp=document.createElement('input');
                    inp.type='file';inp.accept='image/*';
                    inp.onchange=e=>{
                      const f=e.target.files[0];
                      if(f)saveTaskCover(task.id,f);
                    };
                    inp.click();
                  }}
                  style={{width:80,height:80,borderRadius:16,background:T.accentSoft,overflow:"hidden",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,cursor:batchTagMode?"default":"pointer",position:"relative"}}>
                  {task.img?<img src={task.img} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:"🖼️"}
                  {!batchTagMode&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.0)",display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:4,opacity:1}}>
                    <div style={{fontSize:9,color:"rgba(255,255,255,0.85)",background:"rgba(0,0,0,0.32)",borderRadius:6,padding:"1px 6px",fontWeight:700,fontFamily:"'Nunito',sans-serif"}}>换封面</div>
                  </div>}
                </div>
                <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div>
                    <div style={{fontSize:14,fontWeight:800,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginBottom:6}}>{task.name}</div>
                    {task.tags&&task.tags.length>0&&(
                      <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:6}}>
                        {task.tags.map(tag=><span key={tag} style={{padding:"2px 8px",borderRadius:50,background:T.accentSoft,color:T.accent,fontSize:10,fontWeight:800}}>{tag}</span>)}
                      </div>
                    )}
                    <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                      <div style={{padding:"4px 10px",borderRadius:12,background:"#f0fff4",border:"1.5px solid #bfe9c6",fontSize:10,fontWeight:800,color:"#4caf50"}}>已完成</div>
                      <div style={{fontSize:11,color:T.textMid,fontWeight:800}}>用时 {elapsed}</div>
                    </div>
                  </div>
                  {!batchTagMode&&<div style={{display:"flex",gap:8,marginTop:10}}>
                    <button onClick={()=>restoreTask(task.id)} style={{flex:1,padding:"9px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:"pointer"}}>↩ 恢复</button>
                    <button onClick={()=>requestDeleteTask(task.id)} style={{flex:1,padding:"9px 0",borderRadius:50,border:"none",background:T.dangerBg,color:T.danger,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer"}}>删除</button>
                  </div>}
                </div>
              </div>
            );
          });
            })()}
          </div>
        )}
      </div>

    </div>
  );
}

// ══════════════════════════════════
//  MinePage（我的页）
// ══════════════════════════════════
function MinePage({T,tn,setTn,user,isPro,onUpgrade,onLogout,onExport,onImport,inviteInfo}){
  const joinDate=user?.created_at?new Date(user.created_at).toLocaleDateString('zh-CN'):"未知";
  const [nickname,setNickname]=useState(()=>localStorage.getItem('pindou_nickname')||"");
  const [avatar,setAvatar]=useState(()=>localStorage.getItem('pindou_avatar')||"");
  const [editingName,setEditingName]=useState(false);
  const [nameInput,setNameInput]=useState("");
  const avatarRef=useRef(null);
  const [defaultTheme,setDefaultTheme]=useState(()=>{try{return localStorage.getItem("pindou_default_theme")||"sky";}catch{return "sky";}});
  const isFluffyUi=tn==="fluffy";
  const plushSectionStyle=isFluffyUi?{background:T.plushCard||T.card,border:`1.5px solid ${T.plushBorder||T.border}`,boxShadow:T.plushShadow||T.cardShadow}:{background:T.card,border:`1.5px solid ${T.border}`,boxShadow:T.cardShadow};
  const fluffyPreviewRow=(key,active)=>{
    const theme=THEMES[key];
    const previewPlush=key==="fluffy";
    if(!previewPlush) return {display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:16,border:`1.5px solid ${active?theme.accent:T.border}`,background:active?theme.accentSoft:T.accentSoft,cursor:"pointer",boxShadow:active?`0 0 0 3px ${theme.accent}18`:"none"};
    return {display:"flex",alignItems:"center",gap:12,padding:"12px 14px",borderRadius:20,border:`1.5px solid ${active?theme.accent:(theme.plushBorder||theme.border)}`,background:"linear-gradient(145deg,#fff0f6 0%,#ffd0df 48%,#f7fbff 100%)",cursor:"pointer",boxShadow:active?`${theme.plushShadow||theme.cardShadow}, 0 0 0 3px ${theme.accent}18`:(theme.plushShadow||theme.cardShadow),position:"relative",overflow:"visible",isolation:"isolate"};
  };
  const fluffyPreviewIcon=(key)=>{
    const theme=THEMES[key];
    if(key!=="fluffy") return {width:38,height:38,borderRadius:14,background:theme.headerBg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,border:`1.5px solid ${theme.border}`,boxShadow:theme.cardShadow};
    return {width:42,height:42,borderRadius:16,background:theme.plushIcon||theme.headerBg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,border:`1.5px solid ${theme.plushBorder||theme.border}`,boxShadow:theme.plushShadow||theme.cardShadow};
  };
  function chooseTheme(key){setTn(key);try{localStorage.setItem("pindou_current_theme",key);}catch{}}
  function setAsDefaultTheme(key){setDefaultTheme(key);setTn(key);try{localStorage.setItem("pindou_default_theme",key);localStorage.setItem("pindou_current_theme",key);}catch{}}

  function saveNickname(){
    localStorage.setItem('pindou_nickname',nameInput);
    setNickname(nameInput);
    setEditingName(false);
  }
  function handleAvatar(e){
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();
    r.onload=ev=>{
      localStorage.setItem('pindou_avatar',ev.target.result);
      setAvatar(ev.target.result);
    };
    r.readAsDataURL(f);
    e.target.value="";
  }

  return(
    <div style={{fontFamily:"'Nunito',sans-serif",padding:"0 0 20px"}}>
      {/* 头部 */}
      <div style={{background:tn==="fluffy"?T.card:T.headerBg,padding:"16px 20px 14px",display:"flex",flexDirection:"column",alignItems:"center",borderBottom:`1.5px solid ${T.border}`}}>
        {/* 头像 */}
        <div onClick={()=>avatarRef.current?.click()} style={{position:"relative",marginBottom:12,cursor:"pointer"}}>
          <div style={{width:76,height:76,borderRadius:24,background:T.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,overflow:"hidden",boxShadow:`0 4px 16px ${T.accent}44`}}>
            {avatar?<img src={avatar} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:"🧑"}
          </div>
          <div style={{position:"absolute",bottom:-2,right:-2,width:22,height:22,borderRadius:"50%",background:T.accent,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"#fff",border:`2px solid ${T.card}`}}>📷</div>
        </div>
        <input ref={avatarRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleAvatar}/>

        {/* 昵称 */}
        {editingName?(
          <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:4}}>
            <input value={nameInput} onChange={e=>setNameInput(e.target.value)} autoFocus
              onKeyDown={e=>{if(e.key==="Enter")saveNickname();if(e.key==="Escape")setEditingName(false);}}
              style={{border:`1.5px solid ${T.border}`,borderRadius:10,padding:"5px 12px",fontSize:14,fontFamily:"'Nunito',sans-serif",background:T.card,color:T.text,outline:"none",width:150,textAlign:"center"}}/>
            <button onClick={saveNickname} style={{background:T.accent,border:"none",borderRadius:8,padding:"5px 12px",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,cursor:"pointer"}}>保存</button>
          </div>
        ):(
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}} onClick={()=>{setNameInput(nickname);setEditingName(true);}}>
            <div style={{fontSize:16,fontWeight:800,color:T.text}}>{nickname||"点击设置昵称"}</div>
            {isPro&&<span style={{fontSize:10,background:"linear-gradient(90deg,#ffd166,#ffb347)",color:"#7a4000",borderRadius:50,padding:"2px 8px",fontWeight:900}}>Pro ✦</span>}
            <span style={{fontSize:12,color:T.textLight,cursor:"pointer"}}>✏️</span>
          </div>
        )}
        <div style={{fontSize:11,color:T.textLight,marginTop:2}}>加入于 {joinDate}</div>
        {/* Pro状态小横幅 */}
        {isPro?(
          <div style={{marginTop:10,padding:"6px 16px",borderRadius:50,background:"linear-gradient(90deg,#ffd166,#ffb347)",fontSize:11,fontWeight:900,color:"#7a4000"}}>✦ Pro 会员 · 全功能已解锁</div>
        ):(
          <div className="cc" onClick={onUpgrade} style={{marginTop:10,padding:"7px 18px",borderRadius:50,background:"linear-gradient(135deg,#ffe066,#ffd166,#ffb347)",border:"1.5px solid #ffd166",fontSize:12,fontWeight:900,color:"#7a4000",cursor:"pointer",boxShadow:"0 2px 12px rgba(255,209,102,0.45)"}}>🌟 升级 Pro · 解锁全功能</div>
        )}
      </div>

      <div style={{padding:"8px 16px 0"}}>
        {/* 邀请好友 */}
        <div className={isFluffyUi?"fur-card":""} style={{...plushSectionStyle,borderRadius:20,padding:"16px",marginBottom:12,position:"relative",overflow:isFluffyUi?"visible":"hidden"}}>
          <div style={{fontSize:12,fontWeight:700,color:T.textLight,marginBottom:12,letterSpacing:0.5}}>🎁 邀请好友</div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
            <div style={{flex:1,background:T.accentSoft,borderRadius:12,padding:"10px 14px",fontSize:16,fontWeight:900,color:T.accent,letterSpacing:2,textAlign:"center"}}>{inviteInfo.code||"加载中…"}</div>
            <button onClick={()=>{navigator.clipboard.writeText(inviteInfo.code);}} style={{padding:"10px 14px",borderRadius:12,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>复制</button>
          </div>
          <div style={{fontSize:11,color:T.textMid,lineHeight:1.7,marginBottom:8}}>
            好友填你的邀请码注册 → 好友得 <b style={{color:T.accent}}>3天Pro试用</b><br/>
            你每邀请1人 → 得 <b style={{color:T.accent}}>+2次AI识图</b>，最多邀请5人
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{flex:1,background:T.bg,borderRadius:10,height:6,overflow:"hidden"}}>
              <div style={{width:`${Math.min((inviteInfo.count||0)/5*100,100)}%`,height:"100%",background:T.accent,borderRadius:10,transition:"width 0.4s"}}/>
            </div>
            <div style={{fontSize:11,color:T.textMid,fontWeight:700,whiteSpace:"nowrap"}}>{inviteInfo.count||0} / 5 人</div>
          </div>
          {(inviteInfo.bonus||0)>0&&<div style={{marginTop:8,fontSize:11,color:"#4caf50",fontWeight:700}}>🎉 已获得 {inviteInfo.bonus} 次额外识图</div>}
        </div>

        {/* 皮肤设置 */}
        <div className={isFluffyUi?"fur-card":""} style={{...plushSectionStyle,borderRadius:20,padding:"16px",marginBottom:12,position:"relative",overflow:isFluffyUi?"visible":"hidden"}}>
          <div style={{fontSize:12,fontWeight:700,color:T.textLight,marginBottom:12,letterSpacing:0.5}}>🎨 皮肤设置</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {THEME_ORDER.map(key=>{
              const theme=THEMES[key];
              const active=tn===key;
              const isDefault=defaultTheme===key;
              return (
                <div key={key} className={key==="fluffy"?"cc fur-card":"cc"} onClick={()=>chooseTheme(key)}
                  style={fluffyPreviewRow(key,active)}>
                  <div className={key==="fluffy"?"fur-icon":""} style={fluffyPreviewIcon(key)}>{theme.icon}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:900,color:T.text}}>{theme.name}</div>
                    <div style={{fontSize:10,color:T.textMid,marginTop:2}}>{key==="fluffy"?"毛绒玩具感小框框，粉蓝奶油配色":"点击立即切换"}</div>
                  </div>
                  <button onClick={(e)=>{e.stopPropagation();setAsDefaultTheme(key);}}
                    style={{width:28,height:28,borderRadius:"50%",border:`2px solid ${isDefault?theme.accent:(key==="fluffy"?(theme.plushBorder||theme.border):T.border)}`,background:isDefault?theme.accent:(key==="fluffy"?(theme.plushChip||theme.card):T.card),color:isDefault?"#fff":(key==="fluffy"?theme.accent:T.textLight),display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:900,cursor:"pointer",flexShrink:0,boxShadow:key==="fluffy"?(theme.plushShadow||theme.cardShadow):"none"}}>
                    {isDefault?"✓":""}
                  </button>
                </div>
              );
            })}
          </div>
          <div style={{fontSize:10,color:T.textLight,lineHeight:1.6,marginTop:10}}>右侧圆圈打勾的就是默认皮肤，下次进来会自动使用它。</div>
        </div>

        {/* 数据管理 */}
        <div className={isFluffyUi?"fur-card":""} style={{...plushSectionStyle,borderRadius:20,padding:"16px",marginBottom:12,position:"relative",overflow:isFluffyUi?"visible":"hidden"}}>
          <div style={{fontSize:12,fontWeight:700,color:T.textLight,marginBottom:12,letterSpacing:0.5}}>📦 数据管理</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            <div className="cc" onClick={onExport} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",borderRadius:14,background:T.accentSoft,cursor:"pointer"}}>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:T.text}}>⬇️ 导出数据</div>
                <div style={{fontSize:11,color:T.textMid,marginTop:2}}>备份库存数据为JSON文件</div>
              </div>
              <span style={{fontSize:18,color:T.textLight}}>›</span>
            </div>
            <div className="cc" onClick={onImport} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",borderRadius:14,background:T.accentSoft,cursor:"pointer"}}>
              <div>
                <div style={{fontSize:13,fontWeight:700,color:T.text}}>⬆️ 导入数据</div>
                <div style={{fontSize:11,color:T.textMid,marginTop:2}}>从备份文件恢复库存数据</div>
              </div>
              <span style={{fontSize:18,color:T.textLight}}>›</span>
            </div>
          </div>
        </div>

        {/* 退出登录 */}
        <button className="btn" onClick={onLogout}
          style={{width:"100%",padding:"14px 0",borderRadius:20,border:`1.5px solid ${T.border}`,background:T.card,color:T.danger,fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:800,cursor:"pointer",boxShadow:T.cardShadow}}>
          退出登录
        </button>
      </div>
    </div>
  );
}

function YearScroller({curYear,setCurYear,T}){
  const ref=useRef(null);
  const years=Array.from({length:30},(_,i)=>2015+i);
  useEffect(()=>{
    if(!ref.current)return;
    const el=ref.current.querySelector(`[data-year="${curYear}"]`);
    if(el)el.scrollIntoView({inline:"center",behavior:"smooth",block:"nearest"});
  },[curYear]);
  return(
    <>
      <style>{`.yscroll::-webkit-scrollbar{display:none}`}</style>
      <div ref={ref} className="yscroll" style={{display:"flex",gap:28,overflowX:"auto",paddingBottom:8,marginBottom:16,
        scrollbarWidth:"none",WebkitOverflowScrolling:"touch",
        paddingLeft:"calc(50% - 20px)",paddingRight:"calc(50% - 20px)"}}>
        {years.map(y=>(
          <button key={y} data-year={y} onClick={()=>setCurYear(y)}
            style={{flexShrink:0,background:"none",border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",
              fontSize:y===curYear?18:14,fontWeight:y===curYear?800:500,
              color:y===curYear?T.accent:T.textLight,
              borderBottom:y===curYear?`2.5px solid ${T.accent}`:"2.5px solid transparent",
              paddingBottom:3,transition:"all 0.2s",whiteSpace:"nowrap"}}>
            {y}
          </button>
        ))}
      </div>
    </>
  );
}

// ══════════════ 日记页组件 ══════════════
function DiaryPage({T}){
  const [diaryPage,setDiaryPage]=useState("cal");
  const [curYear,setCurYear]=useState(new Date().getFullYear());
  const [curMonth,setCurMonth]=useState(new Date().getMonth()+1);
  const [selDay,setSelDay]=useState(new Date().getDate());
  const [db,setDb]=useState(()=>{
    try{const s=localStorage.getItem('pindou_diary');return s?JSON.parse(s):{'2026-3-9':{text:'黄色系小熊，拼了好久终于成功！',photos:[]}};}catch{return{};}
  });
  const [editKey,setEditKey]=useState(null);
  const [editText,setEditText]=useState("");
  const [editPhotos,setEditPhotos]=useState([]);
  const [delMode,setDelMode]=useState(false);
  const [delSel,setDelSel]=useState(new Set());
  const fileRef=useRef();

  useEffect(()=>{try{localStorage.setItem('pindou_diary',JSON.stringify(db));}catch{}},[db]);

  function rkey(y,m,d){return`${y}-${m}-${d}`;}
  function hasRec(d){return!!db[rkey(curYear,curMonth,d)];}
  function monthCount(y,m){return Object.keys(db).filter(k=>k.startsWith(`${y}-${m}-`)).length;}
  function shiftMonth(dir){let m=curMonth+dir,y=curYear;if(m>12){m=1;y++;}if(m<1){m=12;y--;}setCurMonth(m);setCurYear(y);setSelDay(1);}
  function openEdit(key){setEditKey(key);const r=db[key]||{text:"",photos:[]};setEditText(r.text||"");setEditPhotos([...(r.photos||[])]);setDiaryPage("edit");}
  function toggleDelSel(key){setDelSel(p=>{const n=new Set(p);n.has(key)?n.delete(key):n.add(key);return n;});}
  function confirmDelete(){
    if(delSel.size===0)return;
    setDb(prev=>{const n={...prev};delSel.forEach(k=>delete n[k]);return n;});
    setDelSel(new Set());setDelMode(false);
  }

  const CandySVG=()=>(
    <svg viewBox="0 0 100 100" style={{width:"100%",height:"100%"}}>
      {/* 糖果包装纸左 */}
      <ellipse cx="18" cy="50" rx="14" ry="8" fill="#e0e0e0" transform="rotate(-30 18 50)"/>
      <ellipse cx="18" cy="50" rx="10" ry="5" fill="#cccccc" opacity="0.7" transform="rotate(-30 18 50)"/>
      {/* 糖果包装纸右 */}
      <ellipse cx="82" cy="50" rx="14" ry="8" fill="#e0e0e0" transform="rotate(30 82 50)"/>
      <ellipse cx="82" cy="50" rx="10" ry="5" fill="#cccccc" opacity="0.7" transform="rotate(30 82 50)"/>
      {/* 糖果主体 */}
      <circle cx="50" cy="50" r="28" fill="#ff7b8a"/>
      <circle cx="50" cy="50" r="28" fill="url(#diaryCandy)"/>
      {/* 糖果条纹 */}
      <path d="M 30 30 Q 50 20 70 30 Q 80 50 70 70 Q 50 80 30 70 Q 20 50 30 30Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="5"/>
      <path d="M 36 24 Q 58 18 72 36" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="4" strokeLinecap="round"/>
      {/* 高光 */}
      <ellipse cx="38" cy="36" rx="10" ry="7" fill="rgba(255,255,255,0.4)" transform="rotate(-20 38 36)"/>
      <ellipse cx="42" cy="33" rx="5" ry="3" fill="rgba(255,255,255,0.6)" transform="rotate(-20 42 33)"/>
      <defs>
        <radialGradient id="diaryCandy" cx="38%" cy="35%" r="65%">
          <stop offset="0%" stopColor="rgba(255,160,170,0.6)"/>
          <stop offset="100%" stopColor="rgba(200,50,80,0.3)"/>
        </radialGradient>
      </defs>
    </svg>
  );

  const todayY=new Date().getFullYear(),todayM=new Date().getMonth()+1,todayD=new Date().getDate();
  const firstDow=new Date(curYear,curMonth-1,1).getDay();
  const totalDays=new Date(curYear,curMonth,0).getDate();
  const prevTotal=new Date(curYear,curMonth-1,0).getDate();

  if(diaryPage==="edit"&&editKey){
    const parts=editKey.split("-");
    function handleFiles(e){
      Array.from(e.target.files).forEach(f=>{
        if(editPhotos.length>=8)return;
        const r=new FileReader();r.onload=ev=>setEditPhotos(p=>[...p,ev.target.result]);r.readAsDataURL(f);
      });e.target.value="";
    }
    function save(){
      if(!editText.trim()&&editPhotos.length===0)return;
      setDb(prev=>({...prev,[editKey]:{text:editText,photos:editPhotos}}));
      setDiaryPage("cal");
    }
    return(
      <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 16px 12px",borderBottom:`1px solid ${T.border}`}}>
          <button onClick={()=>setDiaryPage("cal")} style={{background:"none",border:"none",fontSize:22,color:T.textMid,cursor:"pointer"}}>←</button>
          <span style={{fontSize:15,fontWeight:800,color:T.text}}>{db[editKey]?"查看记录":"新建记录"}</span>
          <button onClick={save} style={{background:T.accent,border:"none",borderRadius:10,padding:"6px 14px",fontSize:13,fontWeight:700,color:"#fff",cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>保存</button>
        </div>
        <div style={{padding:"14px 16px",overflowY:"auto",flex:1}}>
          <div style={{fontSize:12,color:T.textMid,fontWeight:700,marginBottom:14}}>📅 {parts[0]}年{parts[1]}月{parts[2]}日</div>
          <div style={{marginBottom:14}}>
            <div style={{fontSize:11,fontWeight:700,color:T.textLight,marginBottom:8}}>拼豆照片</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {editPhotos.map((src,i)=>(
                <div key={i} style={{width:76,height:76,borderRadius:10,overflow:"hidden",position:"relative",border:`1.5px solid ${T.border}`}}>
                  <img src={src} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                  <button onClick={()=>setEditPhotos(p=>p.filter((_,j)=>j!==i))} style={{position:"absolute",top:2,right:2,background:"rgba(0,0,0,0.45)",border:"none",borderRadius:"50%",width:18,height:18,color:"white",fontSize:11,cursor:"pointer"}}>×</button>
                </div>
              ))}
              {editPhotos.length<8&&<div onClick={()=>fileRef.current.click()} style={{width:76,height:76,borderRadius:10,border:`2px dashed ${T.border}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:24,color:T.textLight}}>＋</div>}
            </div>
            <input type="file" ref={fileRef} accept="image/*" multiple onChange={handleFiles} style={{display:"none"}}/>
          </div>
          <div>
            <div style={{fontSize:11,fontWeight:700,color:T.textLight,marginBottom:8}}>日记内容</div>
            <textarea value={editText} onChange={e=>setEditText(e.target.value)} maxLength={500} placeholder="今天拼了什么？有什么心情～"
              style={{width:"100%",minHeight:100,border:`1.5px solid ${T.border}`,borderRadius:12,padding:12,fontSize:13,color:T.text,lineHeight:1.7,resize:"none",fontFamily:"'Nunito',sans-serif",background:T.card,outline:"none"}}/>
            <div style={{textAlign:"right",fontSize:11,color:T.textLight,marginTop:3}}>{editText.length}/500</div>
          </div>
        </div>
      </div>
    );
  }

  if(diaryPage==="year"){
    return(
      <div style={{padding:"20px 16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <span style={{fontSize:18,fontWeight:800,color:T.text}}>豆豆日记</span>
          <button onClick={()=>setDiaryPage("cal")} style={{background:"none",border:"none",fontSize:13,color:T.textMid,fontWeight:700,cursor:"pointer"}}>← 返回</button>
        </div>
        {/* 年份横滚条 */}
        <YearScroller curYear={curYear} setCurYear={setCurYear} T={T}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
          {Array.from({length:12},(_,i)=>{
            const m=i+1,cnt=monthCount(curYear,m),isActive=m===curMonth;
            return(
              <div key={m} onClick={()=>{setCurMonth(m);setDiaryPage("cal");}} style={{background:isActive?T.accentSoft:T.card,borderRadius:14,padding:"12px 8px",textAlign:"center",cursor:"pointer",border:`2px solid ${isActive?T.accent:T.border}`}}>
                <div style={{fontSize:15,fontWeight:800,color:T.text,marginBottom:5}}>{m}月</div>
                {cnt>0?<><div style={{fontSize:20,fontWeight:800,color:"#7bc4f0"}}>{cnt}</div><div style={{fontSize:10,color:T.textMid}}>篇记录</div></>:<div style={{fontSize:10,color:T.textLight}}>暂无记录</div>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 日历页
  const rec=db[rkey(curYear,curMonth,selDay)];
  return(
    <div style={{padding:"4px 16px 0"}}>
      {/* 标题栏 */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 0 8px"}}>
        {delMode?(
          <button onClick={()=>{setDelMode(false);setDelSel(new Set());}}
            style={{fontSize:12,fontWeight:700,color:T.textMid,background:"none",border:"none",cursor:"pointer",padding:"4px 8px"}}>取消</button>
        ):(
          <button onClick={()=>setDelMode(true)}
            style={{width:36,height:36,borderRadius:"50%",background:T.dangerBg,border:`1.5px solid ${T.dangerBorder}`,cursor:"pointer",
              fontSize:16,color:T.danger,display:"flex",alignItems:"center",justifyContent:"center"}}>🗑️</button>
        )}
        <span style={{fontSize:18,fontWeight:800,color:T.text}}>豆豆日记</span>
        {delMode?(
          <button onClick={confirmDelete}
            style={{fontSize:12,fontWeight:800,color:"#fff",background:delSel.size>0?T.danger:"#ccc",border:"none",borderRadius:10,padding:"6px 12px",cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>
            删除{delSel.size>0?`(${delSel.size})`:""}
          </button>
        ):(
          <button onClick={()=>openEdit(rkey(curYear,curMonth,selDay))}
            style={{width:36,height:36,borderRadius:"50%",background:T.accent,border:"none",cursor:"pointer",
              fontSize:22,color:"white",display:"flex",alignItems:"center",justifyContent:"center",
              boxShadow:`0 2px 8px ${T.accent}55`}}>＋</button>
        )}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <button onClick={()=>shiftMonth(-1)} style={{background:"none",border:"none",fontSize:20,color:T.textMid,cursor:"pointer",padding:"4px 8px",borderRadius:8}}>‹</button>
        <button onClick={()=>setDiaryPage("year")} style={{background:T.accentSoft,border:"none",borderRadius:12,padding:"6px 16px",fontSize:15,fontWeight:800,color:T.accent,cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>
          {curYear}年{curMonth}月
        </button>
        <button onClick={()=>shiftMonth(1)} style={{background:"none",border:"none",fontSize:20,color:T.textMid,cursor:"pointer",padding:"4px 8px",borderRadius:8}}>›</button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",textAlign:"center",marginBottom:4}}>
        {["日","一","二","三","四","五","六"].map(d=><span key={d} style={{fontSize:11,fontWeight:700,color:T.textLight,padding:"3px 0"}}>{d}</span>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:2}}>
        {Array.from({length:firstDow},(_,i)=>(
          <div key={`p${i}`} style={{height:40,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontSize:12,color:T.textLight,opacity:0.4}}>{prevTotal-firstDow+i+1}</span>
          </div>
        ))}
        {Array.from({length:totalDays},(_,i)=>{
          const d=i+1;
          const isToday=curYear===todayY&&curMonth===todayM&&d===todayD;
          const isSel=d===selDay;
          const hasR=hasRec(d);
          const key=rkey(curYear,curMonth,d);
          const isDelSel=delSel.has(key);
          function handleDayClick(){
            if(delMode){if(hasR)toggleDelSel(key);}
            else setSelDay(d);
          }
          return(
            <div key={d} onClick={handleDayClick}
              style={{height:40,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
                borderRadius:10,cursor:"pointer",position:"relative",
                background:delMode&&isDelSel?"rgba(255,100,100,0.15)":isSel&&!hasR?T.accentSoft:"transparent",
                transition:"background 0.15s",
                outline:delMode&&isDelSel?`2px solid ${T.danger}`:"none"}}>
              {/* 删除模式：有记录的显示勾选圈 */}
              {delMode&&hasR&&(
                <div style={{position:"absolute",top:2,right:2,width:14,height:14,borderRadius:"50%",
                  background:isDelSel?T.danger:"rgba(200,200,200,0.5)",border:`1.5px solid ${isDelSel?T.danger:"#ccc"}`,
                  display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"white",fontWeight:800,zIndex:3}}>
                  {isDelSel?"✓":""}
                </div>
              )}
              {/* 正常模式：选中就显示🍬，有记录时覆盖数字和圆点 */}
              {!delMode&&isSel?(
                <span style={{fontSize:26,position:"absolute",lineHeight:1}}>🍬</span>
              ):(
                <>
                  <span style={{fontSize:12,fontWeight:isToday?800:600,
                    color:isToday?T.accent:delMode&&!hasR?T.textLight:T.text,
                    position:"relative",zIndex:2,opacity:delMode&&!hasR?0.35:1}}>{d}</span>
                  {/* 圆点：有记录且未被🍬覆盖时显示 */}
                  {hasR&&<div style={{position:"absolute",bottom:3,width:5,height:5,borderRadius:"50%",background:"#7bc4f0"}}/>}
                </>
              )}
            </div>
          );
        })}
        {Array.from({length:(7-(firstDow+totalDays)%7)%7},(_,i)=>(
          <div key={`n${i}`} style={{height:40,display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{fontSize:12,color:T.textLight,opacity:0.4}}>{i+1}</span>
          </div>
        ))}
      </div>
      <div style={{marginTop:12,background:T.accentSoft,borderRadius:14,padding:13,border:`1px solid ${T.border}`}}>
        {rec?(
          <>
            <div style={{fontSize:11,color:T.textMid,fontWeight:700,marginBottom:8}}>📅 {curYear}年{curMonth}月{selDay}日</div>
            <div style={{display:"flex",gap:10,alignItems:"flex-start"}}>
              <div style={{width:52,height:52,flexShrink:0,background:T.accentLight,borderRadius:10,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>
                {rec.photos&&rec.photos[0]?<img src={rec.photos[0]} style={{width:"100%",height:"100%",objectFit:"cover"}}/>:"🐾"}
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:12,fontWeight:700,color:T.text,marginBottom:3}}>{rec.text?rec.text.slice(0,30)+"…":"（无文字）"}</div>
                <div style={{fontSize:11,color:T.textMid}}>{rec.photos?rec.photos.length:0} 张照片</div>
              </div>
            </div>
            <div onClick={()=>openEdit(rkey(curYear,curMonth,selDay))} style={{marginTop:8,textAlign:"right",fontSize:11,color:T.accent,fontWeight:700,cursor:"pointer"}}>查看 / 编辑 ›</div>
          </>
        ):(
          <div style={{textAlign:"center",color:T.textLight,fontSize:12,padding:"8px 0"}}>
            这天还没有记录哦 ·˖✦ <span onClick={()=>openEdit(rkey(curYear,curMonth,selDay))} style={{color:T.accent,fontWeight:700,cursor:"pointer"}}>新建记录</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ══════════════ 批量贴标签弹窗 ══════════════
function BatchTagPicker({T,tasks,batchTagSel,onConfirm,onClose}){
  const allT=[...new Set(tasks.filter(t=>t.tags&&t.tags.length>0).flatMap(t=>t.tags))];
  const [localSel,setLocalSel]=useState([]);
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1300,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
      onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:480,background:T.card,borderRadius:"24px 24px 0 0",padding:"20px 18px 32px"}}>
        <div style={{fontSize:14,fontWeight:900,color:T.text,marginBottom:14}}>选择要贴的标签</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:14}}>
          {allT.map(tag=>(
            <div key={tag} onClick={()=>setLocalSel(prev=>prev.includes(tag)?prev.filter(t=>t!==tag):[...prev,tag])}
              style={{padding:"6px 14px",borderRadius:50,border:`1.5px solid ${localSel.includes(tag)?T.accent:T.border}`,background:localSel.includes(tag)?T.accentSoft:T.bg,color:localSel.includes(tag)?T.accent:T.textMid,fontSize:12,fontWeight:800,cursor:"pointer"}}>
              {tag}
            </div>
          ))}
          <div onClick={()=>{const t=prompt("新建标签");if(t?.trim()&&!localSel.includes(t.trim()))setLocalSel(prev=>[...prev,t.trim()]);}}
            style={{padding:"6px 14px",borderRadius:50,border:`1.5px dashed ${T.border}`,background:"transparent",color:T.textLight,fontSize:12,fontWeight:800,cursor:"pointer"}}>＋ 新建</div>
        </div>
        <button onClick={()=>{if(localSel.length===0)return;onConfirm(localSel);}}
          style={{width:"100%",padding:"12px 0",borderRadius:50,border:"none",background:localSel.length>0?T.accent:"#cfd8e3",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:localSel.length>0?"pointer":"not-allowed"}}>
          确认贴标签
        </button>
      </div>
    </div>
  );
}


function BatchMovePicker({T,tasks,onConfirm,onClose}){
  const allT=[...new Set(tasks.filter(t=>t.tags&&t.tags.length>0).flatMap(t=>t.tags))];
  const [targetTag,setTargetTag]=useState("");
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1300,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
      onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:480,background:T.card,borderRadius:"24px 24px 0 0",padding:"20px 18px 32px"}}>
        <div style={{fontSize:14,fontWeight:900,color:T.text,marginBottom:6}}>移动到正确分类</div>
        <div style={{fontSize:11,color:T.textLight,marginBottom:14}}>会把选中的作品直接移动到一个标签里，原来的标签会被替换。</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:14}}>
          {allT.map(tag=>(
            <div key={tag} onClick={()=>setTargetTag(tag)}
              style={{padding:"6px 14px",borderRadius:50,border:`1.5px solid ${targetTag===tag?T.accent:T.border}`,background:targetTag===tag?T.accentSoft:T.bg,color:targetTag===tag?T.accent:T.textMid,fontSize:12,fontWeight:800,cursor:"pointer"}}>
              {tag}
            </div>
          ))}
          <div onClick={()=>{const t=prompt("新建分类");if(t?.trim())setTargetTag(t.trim());}}
            style={{padding:"6px 14px",borderRadius:50,border:`1.5px dashed ${T.border}`,background:"transparent",color:T.textLight,fontSize:12,fontWeight:800,cursor:"pointer"}}>＋ 新建</div>
        </div>
        <button onClick={()=>{if(!targetTag)return;onConfirm(targetTag);}}
          style={{width:"100%",padding:"12px 0",borderRadius:50,border:"none",background:targetTag?T.accent:"#cfd8e3",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:targetTag?"pointer":"not-allowed"}}>
          确认移动
        </button>
      </div>
    </div>
  );
}

// ══════════════ 首页统计组件 ══════════════
function HomeStats({T,tn,tasks,used,stock,wL,wC,setWL,setWC,restockReminderThreshold,setRestockReminderThreshold,resetData,resetConfirm,setShowRestock,inp,goS}){
  const now=new Date();
  const [calYear,setCalYear]=React.useState(now.getFullYear());
  const [calMonth,setCalMonth]=React.useState(now.getMonth());
  const [showSeriesModal,setShowSeriesModal]=React.useState(false);
  const [showColorModal,setShowColorModal]=React.useState(false);

  // 月份限制：前后3个月
  const minDate=new Date(now.getFullYear(),now.getMonth()-3,1);
  const maxDate=new Date(now.getFullYear(),now.getMonth()+3,1);
  function prevMonth(){const d=new Date(calYear,calMonth-1,1);if(d>=minDate){setCalYear(d.getFullYear());setCalMonth(d.getMonth());}}
  function nextMonth(){const d=new Date(calYear,calMonth+1,1);if(d<maxDate){setCalYear(d.getFullYear());setCalMonth(d.getMonth());}}

  // 热力图数据：按日期聚合done件数
  const heatMap=React.useMemo(()=>{
    const map={};
    tasks.filter(t=>t.status==="done"&&t.doneDate).forEach(t=>{
      const d=t.doneDate.slice(0,10);
      map[d]=(map[d]||0)+1;
    });
    return map;
  },[tasks]);

  function heatColor(count){
    if(tn==="fluffy"){
      if(!count||count===0) return "rgba(240,180,200,.10)";
      if(count===1) return "rgba(215,122,148,.28)";
      if(count<=3) return "rgba(215,122,148,.50)";
      if(count<=5) return "rgba(215,122,148,.70)";
      if(count<=7) return "rgba(215,122,148,.86)";
      return "#d07a94";
    }
    if(!count||count===0) return tn==="night"?"rgba(255,255,255,0.06)":"rgba(74,158,255,0.08)";
    if(count===1) return "rgba(74,158,255,0.25)";
    if(count<=3) return "rgba(74,158,255,0.45)";
    if(count<=5) return "rgba(74,158,255,0.65)";
    if(count<=7) return "rgba(74,158,255,0.82)";
    return "#4a9eff";
  }

  // 日历渲染
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  const firstDay=new Date(calYear,calMonth,1).getDay(); // 0=周日
  const weekLabels=["日","一","二","三","四","五","六"];
  const monthLabel=`${calYear}年${calMonth+1}月`;
  const canPrev=new Date(calYear,calMonth-1,1)>=minDate;
  const canNext=new Date(calYear,calMonth+1,1)<maxDate;

  // 常用色系top5：从colorData聚合
  const topSeries=React.useMemo(()=>{
    const map={};
    tasks.filter(t=>t.colorData&&t.colorData.length>0).forEach(t=>{
      t.colorData.forEach(({id,count})=>{
        const s=id.match(/^[A-Z]+/)?.[0]||"?";
        map[s]=(map[s]||0)+(count||0);
      });
    });
    return Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,5);
  },[tasks]);

  // 常用色号top10：从colorData聚合
  const topColors=React.useMemo(()=>{
    const map={};
    tasks.filter(t=>t.colorData&&t.colorData.length>0).forEach(t=>{
      t.colorData.forEach(({id,count})=>{
        map[id]=(map[id]||0)+(count||0);
      });
    });
    return Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,10);
  },[tasks]);

  const ALL_COLORS_MAP=React.useMemo(()=>{
    const m={};
    ALL_COLORS.forEach(c=>{m[c.id]=c;});
    return m;
  },[]);

  return(
    <div>
      {/* 热力日历 */}
      <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"16px",marginBottom:14,boxShadow:T.cardShadow}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
          <button onClick={prevMonth} style={{background:"none",border:"none",fontSize:18,color:canPrev?T.accent:T.border,cursor:canPrev?"pointer":"default",padding:"0 4px"}}>‹</button>
          <div style={{fontSize:13,fontWeight:900,color:T.text}}>{monthLabel}</div>
          <button onClick={nextMonth} style={{background:"none",border:"none",fontSize:18,color:canNext?T.accent:T.border,cursor:canNext?"pointer":"default",padding:"0 4px"}}>›</button>
        </div>
        {/* 星期标题 */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3,marginBottom:3}}>
          {weekLabels.map(w=>(
            <div key={w} style={{textAlign:"center",fontSize:10,color:T.textLight,fontWeight:700,padding:"2px 0"}}>{w}</div>
          ))}
        </div>
        {/* 日历格子 */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3}}>
          {Array.from({length:firstDay}).map((_,i)=>(
            <div key={"empty"+i}/>
          ))}
          {Array.from({length:daysInMonth}).map((_,i)=>{
            const day=i+1;
            const dateStr=`${calYear}-${String(calMonth+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
            const count=heatMap[dateStr]||0;
            const isToday=dateStr===now.toISOString().slice(0,10);
            return(
              <div key={day} style={{aspectRatio:"1",borderRadius:6,background:heatColor(count),
                display:"flex",alignItems:"center",justifyContent:"center",
                border:isToday?`1.5px solid ${T.accent}`:"1.5px solid transparent",
                position:"relative"}}>
                <span style={{fontSize:9,fontWeight:isToday?900:600,color:count>3?"rgba(255,255,255,0.9)":T.textMid}}>{day}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 常用色系 + 常用色号 两个入口 */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
        <div className="tt" onClick={()=>setShowSeriesModal(true)}
          style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:20,padding:"14px",boxShadow:T.cardShadow,cursor:"pointer"}}>
          <div style={{fontSize:12,fontWeight:900,color:T.text,marginBottom:8}}>🎨 常用色系</div>
          {topSeries.length===0?(
            <div style={{fontSize:11,color:T.textLight}}>扣豆后自动统计</div>
          ):topSeries.slice(0,3).map(([s,total])=>(
            <div key={s} style={{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:4}}>
              <span style={{color:T.accent,fontWeight:800}}>{s} 系</span>
              <span style={{color:T.textMid}}>{total}粒</span>
            </div>
          ))}
          {topSeries.length>0&&<div style={{fontSize:10,color:T.textLight,marginTop:4}}>查看全部 →</div>}
        </div>
        <div className="tt" onClick={()=>setShowColorModal(true)}
          style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:20,padding:"14px",boxShadow:T.cardShadow,cursor:"pointer"}}>
          <div style={{fontSize:12,fontWeight:900,color:T.text,marginBottom:8}}>🫘 常用色号</div>
          {topColors.length===0?(
            <div style={{fontSize:11,color:T.textLight}}>扣豆后自动统计</div>
          ):(
            <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
              {topColors.slice(0,10).map(([id])=>{
                const c=ALL_COLORS_MAP[id];
                return c?(
                  <div key={id} style={{width:22,height:22,borderRadius:6,background:c.hex,border:"1.5px solid rgba(0,0,0,0.08)",boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}}/>
                ):null;
              })}
            </div>
          )}
          {topColors.length>0&&<div style={{fontSize:10,color:T.textLight,marginTop:6}}>查看详情 →</div>}
        </div>
      </div>

      {/* 阈值设定 + 补货清单 */}
      <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"16px",marginBottom:14,boxShadow:T.cardShadow}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
          <div style={{fontSize:12,color:T.textLight,fontWeight:700,letterSpacing:0.5}}>⚙️ 补货阈值设定</div>
          <div style={{display:"flex",gap:6}}>
            <button className="btn" onClick={resetData} style={{padding:"4px 10px",borderRadius:50,border:`1.5px solid ${resetConfirm?T.danger:T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,background:resetConfirm?T.dangerBg:T.card,color:resetConfirm?T.danger:T.textLight}}>
              {resetConfirm?"⚠️ 确认清空":"🗑️ 重置"}
            </button>
            <button className="btn" onClick={()=>setShowRestock(true)} style={{padding:"4px 10px",borderRadius:50,border:`1.5px solid ${T.accent}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,background:T.accentSoft,color:T.accent}}>
              📋 补货清单
            </button>
          </div>
        </div>
        <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
          {[["🟡 即将不足",wL,setWL,T.warn,T.warnBg,T.warnBorder],[" 🔴 不足",wC,setWC,T.danger,T.dangerBg,T.dangerBorder]].map(([lbl,val,set,col,bg,bd])=>(
            <label key={lbl} style={{display:"flex",alignItems:"center",gap:4,flex:"1 1 130px",background:bg,border:`1.5px solid ${bd}`,borderRadius:16,padding:"9px 12px",fontSize:12,fontWeight:700,color:col}}>
              {lbl}
              <input type="number" value={val} onChange={e=>set(Number(e.target.value))} style={{...inp({width:48,padding:"3px 5px",fontSize:12,textAlign:"center",borderRadius:8}),marginLeft:"auto"}}/>
              <span style={{fontSize:11}}>粒</span>
            </label>
          ))}
          <label style={{display:"flex",alignItems:"center",gap:6,flex:"1 1 100%",background:T.accentSoft,border:`1.5px solid ${T.border}`,borderRadius:16,padding:"9px 12px",fontSize:12,fontWeight:800,color:T.accent}}>
            📦 首页弹窗：待补色号 ≥
            <input type="number" min="1" value={restockReminderThreshold} onChange={e=>setRestockReminderThreshold(Math.max(1,Number(e.target.value)||1))} style={{...inp({width:56,padding:"3px 5px",fontSize:12,textAlign:"center",borderRadius:8}),marginLeft:"auto"}}/>
            <span style={{fontSize:11}}>个时提醒</span>
          </label>
        </div>
      </div>

      {/* 常用色系浮层 */}
      {showSeriesModal&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1300,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
          onClick={()=>setShowSeriesModal(false)}>
          <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:480,background:T.card,borderRadius:"24px 24px 0 0",padding:"20px 18px 32px",boxShadow:"0 -4px 30px rgba(0,0,0,0.15)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <div style={{fontSize:15,fontWeight:900,color:T.text}}>🎨 常用色系 Top5</div>
              <button onClick={()=>setShowSeriesModal(false)} style={{background:"none",border:"none",fontSize:18,color:T.textMid,cursor:"pointer"}}>✕</button>
            </div>
            {topSeries.length===0?(
              <div style={{textAlign:"center",color:T.textLight,fontSize:13,padding:"24px 0"}}>还没有扣豆记录 ✨</div>
            ):topSeries.map(([s,total],i)=>{
              const maxT=topSeries[0][1]||1;
              return(
                <div key={s} onClick={()=>{setShowSeriesModal(false);goS(s);}} style={{marginBottom:14,cursor:"pointer"}}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:5,fontWeight:700}}>
                    <span style={{color:T.accent}}>#{i+1} {s} 系列</span>
                    <span style={{color:T.textMid,fontWeight:400}}>{total} 粒</span>
                  </div>
                  <div style={{background:T.barBg||"rgba(74,158,255,0.1)",borderRadius:20,height:10,overflow:"hidden"}}>
                    <div style={{width:`${(total/maxT)*100}%`,height:"100%",borderRadius:20,background:`rgba(74,158,255,${0.4+i*0.12})`,transition:"width 0.5s"}}/>
                  </div>
                </div>
              );
            })}
            <div style={{fontSize:11,color:T.textLight,textAlign:"center",marginTop:4}}>点击色系跳转库存查看</div>
          </div>
        </div>
      )}

      {/* 常用色号浮层 */}
      {showColorModal&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1300,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
          onClick={()=>setShowColorModal(false)}>
          <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:480,background:T.card,borderRadius:"24px 24px 0 0",padding:"20px 18px 32px",boxShadow:"0 -4px 30px rgba(0,0,0,0.15)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <div style={{fontSize:15,fontWeight:900,color:T.text}}>🫘 常用色号 Top5</div>
              <button onClick={()=>setShowColorModal(false)} style={{background:"none",border:"none",fontSize:18,color:T.textMid,cursor:"pointer"}}>✕</button>
            </div>
            {topColors.length===0?(
              <div style={{textAlign:"center",color:T.textLight,fontSize:13,padding:"24px 0"}}>还没有扣豆记录 ✨</div>
            ):topColors.map(([id,total],i)=>{
              const c=ALL_COLORS_MAP[id];
              const curStock=stock[id]||0;
              return(
                <div key={id} style={{display:"flex",alignItems:"center",gap:12,marginBottom:14,padding:"10px 12px",background:T.bg||T.accentSoft,borderRadius:14}}>
                  <div style={{fontSize:13,fontWeight:900,color:T.textMid,width:16}}>#{i+1}</div>
                  {c&&<div style={{width:32,height:32,borderRadius:9,background:c.hex,border:"1.5px solid rgba(0,0,0,0.08)",flexShrink:0,boxShadow:"0 1px 4px rgba(0,0,0,0.1)"}}/>}
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:900,color:T.text}}>{id}</div>
                    <div style={{fontSize:11,color:T.textMid,marginTop:2}}>累计消耗 {total} 粒 · 库存 {Math.round(curStock)} 粒</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ══════════════ 补货提醒弹窗 ══════════════
function RestockReminderModal({T,count,threshold,topIds,onClose,onView}){
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.28)",zIndex:1190,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 18px"}}
      onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:360,background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"20px 18px",boxShadow:T.cardShadow}}>
        <div style={{fontSize:26,marginBottom:8,textAlign:"center"}}>📦</div>
        <div style={{fontSize:17,fontWeight:900,color:T.text,textAlign:"center",marginBottom:8}}>有一批色号该补货啦</div>
        <div style={{fontSize:12,color:T.textMid,lineHeight:1.8,textAlign:"center",marginBottom:14}}>
          当前共有 <b style={{color:T.accent}}>{count}</b> 个色号低于补货阈值，达到提醒条件（≥ {threshold} 个）。
        </div>
        {topIds?.length>0&&(
          <div style={{background:T.accentSoft,borderRadius:14,padding:"10px 12px",fontSize:12,color:T.textMid,textAlign:"center",marginBottom:16}}>
            优先看看：<b style={{color:T.accent}}>{topIds.join("、")}</b>
          </div>
        )}
        <div style={{display:"flex",gap:10}}>
          <button onClick={onClose} style={{flex:1,padding:"11px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:"pointer"}}>今天不再提醒</button>
          <button onClick={onView} style={{flex:1,padding:"11px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer"}}>现在查看</button>
        </div>
      </div>
    </div>
  );
}

// ══════════════ 库存提醒弹窗 ══════════════
function StockAlertModal({T,stock,alertThreshold,setAlertThreshold,onClose}){
  const [customThreshold,setCustomThreshold]=React.useState(alertThreshold);
  const lowStockColors=ALL_COLORS.filter(c=>Math.round(stock[c.id])<alertThreshold);
  const lowCount=lowStockColors.length;
  
  function saveThreshold(){
    const val=Math.max(0,parseInt(customThreshold)||0);
    setAlertThreshold(val);
    try{localStorage.setItem('pindou_alert_threshold',String(val));}catch{}
  }

  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:2000,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 18px"}}
      onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div style={{background:T.card,borderRadius:24,padding:"20px 18px",width:"100%",maxWidth:380,boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}>
        <div style={{textAlign:"center",marginBottom:16}}>
          <div style={{fontSize:32,marginBottom:8}}>⚠️</div>
          <div style={{fontSize:17,fontWeight:900,color:T.text,marginBottom:6}}>库存提醒</div>
          <div style={{fontSize:13,color:T.textMid,lineHeight:1.6}}>
            {lowCount>0
              ?`检测到 ${lowCount} 种颜色库存不足`
              :"库存充足，暂无需补货"}
          </div>
        </div>

        {lowCount>0&&(
          <div style={{background:T.bg,borderRadius:14,padding:"12px",marginBottom:14,maxHeight:180,overflowY:"auto"}}>
            {SERIES.map(s=>{
              const items=lowStockColors.filter(c=>c.id.startsWith(s));
              if(items.length===0)return null;
              return(
                <div key={s} style={{marginBottom:10}}>
                  <div style={{fontSize:11,fontWeight:900,color:T.textMid,marginBottom:6}}>{s} 系列</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {items.map(c=>(
                      <div key={c.id} style={{display:"flex",alignItems:"center",gap:4,background:T.card,borderRadius:8,padding:"4px 8px",border:`1px solid ${T.border}`}}>
                        <div style={{width:16,height:16,borderRadius:4,background:c.hex,border:"1px solid rgba(0,0,0,0.1)"}}/>
                        <div style={{fontSize:10,fontWeight:800,color:T.text}}>{c.id}</div>
                        <div style={{fontSize:9,color:T.textLight}}>({Math.round(stock[c.id])})</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div style={{background:T.bg,borderRadius:14,padding:"12px",marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:900,color:T.text,marginBottom:8}}>设置提醒阈值</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{fontSize:11,color:T.textMid}}>当库存低于</div>
            <input type="number" min="0" value={customThreshold}
              onChange={e=>setCustomThreshold(e.target.value)}
              style={{width:60,padding:"5px 8px",borderRadius:8,border:`1.5px solid ${T.border}`,background:T.card,color:T.text,fontFamily:"'Nunito',sans-serif",fontWeight:800,fontSize:12,textAlign:"center",outline:"none"}}/>
            <div style={{fontSize:11,color:T.textMid}}>粒时提醒</div>
          </div>
        </div>

        <div style={{display:"flex",gap:8}}>
          <button onClick={()=>{saveThreshold();onClose();}}
            style={{flex:1,padding:"11px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>
            保存设置
          </button>
          <button onClick={onClose}
            style={{flex:1,padding:"11px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:"transparent",color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}

// ══════════════ 补货清单弹窗 ══════════════
function RestockModal({T,stock,wL,onClose,onRestockConfirm}){
  const initialRestock=React.useMemo(()=>ALL_COLORS.filter(c=>Math.round(stock[c.id])<wL).map(c=>c.id),[]);
  const [outOfStockIds,setOutOfStockIds]=React.useState([]);
  const [copied,setCopied]=React.useState(false);
  const [batchMode,setBatchMode]=React.useState(false);
  const [selected,setSelected]=React.useState({});
  const [bulkQty,setBulkQty]=React.useState("");      // 统一数量
  const [overrideMap,setOverrideMap]=React.useState({}); // 单独覆盖

  const activeIds=initialRestock.filter(id=>!outOfStockIds.includes(id));
  const activeColors=ALL_COLORS.filter(c=>activeIds.includes(c.id));
  const bySeries=SERIES.map(s=>({s,items:activeColors.filter(c=>c.id.startsWith(s))})).filter(x=>x.items.length>0);
  const outColors=ALL_COLORS.filter(c=>outOfStockIds.includes(c.id));
  const outBySeries=SERIES.map(s=>({s,items:outColors.filter(c=>c.id.startsWith(s))})).filter(x=>x.items.length>0);

  const selectedIds=Object.keys(selected).filter(id=>selected[id]);
  const selectedCount=selectedIds.length;

  // 某个色号最终用的数量：有单独覆盖就用覆盖，否则用统一值
  function resolveQty(id){
    if(overrideMap[id]!==undefined) return overrideMap[id];
    return parseInt(bulkQty)||0;
  }

  function copyList(){
    const txt=bySeries.map(({s,items})=>`【${s}系列】\n${items.map(c=>c.id).join('  ')}`).join('\n\n');
    navigator.clipboard.writeText(txt).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),1800);});
  }

  function toggleSelect(id){
    setSelected(prev=>{
      const next={...prev,[id]:!prev[id]};
      if(!next[id]) setOverrideMap(m=>{const nm={...m};delete nm[id];return nm;});
      return next;
    });
  }

  function selectAll(){
    const all={};activeColors.forEach(c=>{all[c.id]=true;});setSelected(all);
  }

  function confirmRestock(){
    const notBoughtIds=activeIds.filter(id=>!selected[id]);
    if(selectedIds.length>0){
      const finalMap={};
      selectedIds.forEach(id=>{ finalMap[id]=resolveQty(id); });
      onRestockConfirm(finalMap);
    }
    setOutOfStockIds(prev=>[...prev,...notBoughtIds]);
    setSelected({});setBulkQty("");setOverrideMap({});setBatchMode(false);
  }

  const baseInp={border:`1.5px solid ${T.border}`,borderRadius:8,background:T.card,color:T.text,fontFamily:"'Nunito',sans-serif",fontWeight:800,outline:"none",textAlign:"center"};

  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1200,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
      onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:480,maxHeight:"80vh",background:T.card,borderRadius:"24px 24px 0 0",display:"flex",flexDirection:"column",overflow:"hidden"}}>

        {/* 顶部栏 */}
        <div style={{padding:"16px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${T.border}`,flexShrink:0}}>
          <div style={{fontSize:15,fontWeight:900,color:T.text}}>📋 补货清单</div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            {!batchMode?(
              <>
                <button onClick={copyList} title="复制清单"
                  style={{width:34,height:34,borderRadius:50,border:`1.5px solid ${T.accent}`,background:copied?T.accentSoft:"transparent",color:T.accent,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  {copied?"✅":"📋"}
                </button>
                <button onClick={()=>setBatchMode(true)} title="批量入库"
                  style={{width:34,height:34,borderRadius:50,border:`1.5px solid ${T.accent}`,background:"transparent",color:T.accent,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  🛒
                </button>
              </>
            ):(
              <>
                <button onClick={selectAll}
                  style={{padding:"5px 10px",borderRadius:50,border:`1.5px solid ${T.border}`,background:"transparent",color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:"pointer"}}>
                  全选
                </button>
                <button onClick={()=>{setBatchMode(false);setSelected({});setBulkQty("");setOverrideMap({});}}
                  style={{padding:"5px 10px",borderRadius:50,border:`1.5px solid ${T.border}`,background:"transparent",color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:"pointer"}}>
                  取消
                </button>
                <button onClick={confirmRestock} disabled={selectedCount===0}
                  style={{padding:"5px 14px",borderRadius:50,border:"none",background:selectedCount>0?T.accent:"#cfd8e3",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:selectedCount>0?"pointer":"not-allowed"}}>
                  确认{selectedCount>0?` (${selectedCount})`:""}
                </button>
              </>
            )}
            <button onClick={onClose} style={{background:"none",border:"none",fontSize:18,color:T.textMid,cursor:"pointer"}}>✕</button>
          </div>
        </div>

        {/* 批量模式：统一数量栏 */}
        {batchMode&&selectedCount>0&&(
          <div style={{padding:"10px 18px",borderBottom:`1px solid ${T.border}`,display:"flex",alignItems:"center",gap:10,flexShrink:0,background:T.accentSoft}}>
            <div style={{fontSize:12,fontWeight:900,color:T.text,whiteSpace:"nowrap"}}>统一补货量</div>
            <input type="number" min="0" placeholder="粒数"
              value={bulkQty}
              onChange={e=>setBulkQty(e.target.value)}
              style={{...baseInp,flex:1,padding:"5px 10px",fontSize:13,borderColor:T.accent}}/>
            <div style={{fontSize:11,color:T.textMid,whiteSpace:"nowrap"}}>粒/色</div>
          </div>
        )}

        <div style={{overflowY:"auto",padding:"14px 16px 24px",flex:1}}>
          {initialRestock.length===0?(
            <div style={{textAlign:"center",color:T.textLight,fontSize:13,padding:"24px 0"}}>库存充足，暂无需补货 ✨</div>
          ):(
            <>
              {batchMode&&activeColors.length>0&&!selectedCount&&(
                <div style={{fontSize:11,color:T.textMid,marginBottom:12,padding:"8px 12px",background:T.accentSoft,borderRadius:10}}>
                  点击色号勾选已买到的，未勾选的会标为缺货 🔴
                </div>
              )}

              {/* 待补货色号 */}
              {bySeries.map(({s,items})=>(
                <div key={s} style={{marginBottom:16}}>
                  <div style={{fontSize:12,fontWeight:900,color:T.textMid,marginBottom:8,letterSpacing:0.5}}>{s} 系列</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
                    {items.map(c=>{
                      const isSel=!!selected[c.id];
                      const hasOverride=overrideMap[c.id]!==undefined;
                      const displayQty=hasOverride?overrideMap[c.id]:(bulkQty||"");
                      return(
                        <div key={c.id} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,
                          opacity:batchMode&&!isSel?0.38:1,transition:"opacity 0.15s"}}>
                          <div onClick={()=>batchMode&&toggleSelect(c.id)}
                            style={{width:36,height:36,borderRadius:10,background:c.hex,
                              border:isSel?`2.5px solid ${T.accent}`:`1.5px solid rgba(0,0,0,0.08)`,
                              boxShadow:isSel?`0 0 0 3px ${T.accentSoft}`:"0 1px 4px rgba(0,0,0,0.1)",
                              transition:"all 0.15s",position:"relative",cursor:batchMode?"pointer":"default",
                              display:"flex",alignItems:"center",justifyContent:"center"}}>
                            {isSel&&<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,background:"rgba(255,255,255,0.25)",borderRadius:8}}>✓</div>}
                            {!isSel&&<div style={{fontSize:9,fontWeight:900,color:"rgba(0,0,0,0.4)",textShadow:"0 0 2px rgba(255,255,255,0.8)"}}>{Math.round(stock[c.id])}</div>}
                          </div>
                          <div style={{fontSize:10,fontWeight:800,color:isSel?T.accent:T.text}}>{c.id}</div>
                          {/* 勾选后显示数量，可单独覆盖 */}
                          {batchMode&&isSel&&(
                            <input type="number" min="0" placeholder={bulkQty||"粒"}
                              value={hasOverride?overrideMap[c.id]:""}
                              onChange={e=>{
                                const v=e.target.value;
                                if(v==="") setOverrideMap(m=>{const nm={...m};delete nm[c.id];return nm;});
                                else setOverrideMap(m=>({...m,[c.id]:Math.max(0,parseInt(v)||0)}));
                              }}
                              onClick={e=>e.stopPropagation()}
                              style={{...baseInp,width:48,padding:"2px 4px",fontSize:11,
                                borderColor:hasOverride?T.accent:T.border,
                                color:hasOverride?T.accent:T.textMid}}/>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* 缺货区 */}
              {outColors.length>0&&(
                <div style={{marginTop:8,paddingTop:14,borderTop:`1.5px dashed ${T.border}`}}>
                  <div style={{fontSize:12,fontWeight:900,color:"#ff4d6d",marginBottom:10}}>🔴 本次缺货</div>
                  {outBySeries.map(({s,items})=>(
                    <div key={s} style={{marginBottom:12}}>
                      <div style={{fontSize:11,fontWeight:900,color:T.textMid,marginBottom:6,letterSpacing:0.5}}>{s} 系列</div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                        {items.map(c=>(
                          <div key={c.id} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                            <div style={{width:36,height:36,borderRadius:10,background:c.hex,border:`1.5px dashed rgba(0,0,0,0.2)`,opacity:0.4}}/>
                            <div style={{fontSize:10,fontWeight:800,color:T.textLight}}>{c.id}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}


function reorderArr(arr,from,to){
  if(from===to||from<0||to<0||from>=arr.length||to>=arr.length)return arr;
  const r=[...arr];const[item]=r.splice(from,1);r.splice(to,0,item);return r;
}
const DEFAULT_TOOLBOX_ARRAY=[
  {id:'boards',name:'豆板',type:'qty',items:[
    {id:'b1',name:'52×52',qty:0,note:''},{id:'b2',name:'78×78',qty:0,note:''},{id:'b3',name:'104×104',qty:0,note:''}
  ]},
  {id:'needles',name:'豆针',type:'qty',items:[
    {id:'n1',name:'60针',qty:0,note:''},{id:'n2',name:'70针',qty:0,note:''},{id:'n3',name:'80针',qty:0,note:''}
  ]},
  {id:'shovels',name:'豆铲',type:'qty',items:[
    {id:'s1',name:'6道',qty:0,note:''},{id:'s2',name:'7道',qty:0,note:''},{id:'s3',name:'10道',qty:0,note:''},{id:'s4',name:'12道',qty:0,note:''},{id:'s5',name:'15道',qty:0,note:''}
  ]},
  {id:'devices',name:'固定设备',type:'owned',items:[
    {id:'d1',name:'熨斗',owned:false,note:''},{id:'d2',name:'烫画机',owned:false,note:''},{id:'d3',name:'打孔器',owned:false,note:''}
  ]},
  {id:'supplies',name:'配件/耗材',type:'qty',items:[
    {id:'sp1',name:'钥匙扣',qty:0,note:''},{id:'sp2',name:'澡巾',qty:0,note:''},{id:'sp3',name:'挂件',qty:0,note:''},{id:'sp4',name:'烘焙布',qty:0,note:''},{id:'sp5',name:'烫纸',qty:0,note:''}
  ]},
];
function migrateToolboxLegacy(old){
  if(!old||typeof old!=='object')return DEFAULT_TOOLBOX_ARRAY;
  const mkItems=(obj,type)=>Object.entries(obj||{}).map(([name,val],i)=>({
    id:type[0]+i+'_'+Date.now(),name,
    ...(type==='qty'?{qty:val.qty||0}:{owned:val.owned||false}),
    note:val.note||''
  }));
  return[
    {id:'boards',name:'豆板',type:'qty',items:mkItems(old.boards,'qty')},
    {id:'needles',name:'豆针',type:'qty',items:mkItems(old.needles,'qty')},
    {id:'shovels',name:'豆铲',type:'qty',items:mkItems(old.shovels,'qty')},
    {id:'devices',name:'固定设备',type:'owned',items:mkItems(old.devices,'owned')},
    {id:'supplies',name:'配件/耗材',type:'qty',items:mkItems(old.supplies,'qty')},
  ];
}

// ══════════════ 工具箱弹窗 ══════════════
function ToolboxModal({toolbox,setToolbox,T,onClose}){
  const [openCats,setOpenCats]=useState(()=>Object.fromEntries(toolbox.map((c,i)=>[c.id,i===0])));
  const [editing,setEditing]=useState(null);
  const [catDrag,setCatDrag]=useState(null);
  const [itemDrags,setItemDrags]=useState({});

  const catDisplay=useMemo(()=>{
    if(!catDrag||catDrag.from===catDrag.to)return toolbox;
    return reorderArr(toolbox,catDrag.from,catDrag.to);
  },[toolbox,catDrag]);

  const getItemDisplay=useCallback((cat)=>{
    const d=itemDrags[cat.id];
    if(!d||d.from===d.to)return cat.items;
    return reorderArr(cat.items,d.from,d.to);
  },[itemDrags]);

  const tb=(catId,fn)=>setToolbox(prev=>prev.map(c=>c.id!==catId?c:fn(c)));
  function updateQty(catId,itemId,delta){tb(catId,c=>({...c,items:c.items.map(it=>it.id!==itemId?it:{...it,qty:Math.max(0,(it.qty||0)+delta)})}));}
  function updateNote(catId,itemId,val){tb(catId,c=>({...c,items:c.items.map(it=>it.id!==itemId?it:{...it,note:val})}));}
  function toggleOwned(catId,itemId){tb(catId,c=>({...c,items:c.items.map(it=>it.id!==itemId?it:{...it,owned:!it.owned})}));}
  function addItem(catId){
    const nid='i'+Date.now();
    const cat=toolbox.find(c=>c.id===catId);
    const ni=cat.type==='qty'?{id:nid,name:'新规格',qty:0,note:''}:{id:nid,name:'新条目',owned:false,note:''};
    tb(catId,c=>({...c,items:[...c.items,ni]}));
    setOpenCats(v=>({...v,[catId]:true}));
    setTimeout(()=>setEditing({scope:'item',catId,itemId:nid,value:ni.name}),30);
  }
  function deleteItem(catId,itemId){tb(catId,c=>({...c,items:c.items.filter(it=>it.id!==itemId)}));}
  function addCat(type){
    const nid='c'+Date.now();
    setToolbox(prev=>[...prev,{id:nid,name:'新类目',type,items:[]}]);
    setOpenCats(v=>({...v,[nid]:true}));
    setTimeout(()=>setEditing({scope:'cat',catId:nid,value:'新类目'}),30);
  }
  function deleteCat(catId){setToolbox(prev=>prev.filter(c=>c.id!==catId));}
  function saveEdit(){
    if(!editing)return;
    const val=editing.value.trim();
    if(!val){setEditing(null);return;}
    if(editing.scope==='cat'){setToolbox(prev=>prev.map(c=>c.id!==editing.catId?c:{...c,name:val}));}
    else{tb(editing.catId,c=>({...c,items:c.items.map(it=>it.id!==editing.itemId?it:{...it,name:val})}));}
    setEditing(null);
  }

  const CAT_H=54,ITEM_H=110;
  function onCatStart(origIdx,e){e.stopPropagation();setCatDrag({from:origIdx,to:origIdx,startY:e.touches[0].clientY});}
  function onCatMove(e){
    if(!catDrag)return;
    const dy=e.touches[0].clientY-catDrag.startY;
    const to=Math.max(0,Math.min(toolbox.length-1,Math.round(catDrag.from+dy/CAT_H)));
    if(to!==catDrag.to)setCatDrag(d=>({...d,to}));
  }
  function onCatEnd(){
    if(catDrag){if(catDrag.from!==catDrag.to)setToolbox(prev=>reorderArr(prev,catDrag.from,catDrag.to));setCatDrag(null);}
  }
  function onItemStart(catId,origIdx,e){e.stopPropagation();setItemDrags(v=>({...v,[catId]:{from:origIdx,to:origIdx,startY:e.touches[0].clientY}}));}
  function onItemMove(catId,e){
    const d=itemDrags[catId];if(!d)return;
    const cat=toolbox.find(c=>c.id===catId);
    const dy=e.touches[0].clientY-d.startY;
    const to=Math.max(0,Math.min((cat?.items.length||1)-1,Math.round(d.from+dy/ITEM_H)));
    if(to!==d.to)setItemDrags(v=>({...v,[catId]:{...d,to}}));
  }
  function onItemEnd(catId){
    const d=itemDrags[catId];
    if(d){if(d.from!==d.to)tb(catId,c=>({...c,items:reorderArr(c.items,d.from,d.to)}));setItemDrags(v=>{const nv={...v};delete nv[catId];return nv;});}
  }

  const bs={background:'none',border:'none',cursor:'pointer',padding:'2px 5px',display:'flex',alignItems:'center'};
  const nameInp={border:'1.5px solid',borderRadius:10,padding:'4px 8px',fontFamily:"'Nunito',sans-serif",outline:'none'};

  return(
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',zIndex:1200,display:'flex',alignItems:'flex-end',justifyContent:'center'}}
      onClick={onClose} onTouchMove={onCatMove} onTouchEnd={onCatEnd} onTouchCancel={()=>setCatDrag(null)}>
      <div onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:480,maxHeight:'85vh',background:T.toolboxPanelBg||T.card,borderRadius:'24px 24px 0 0',overflow:'hidden',display:'flex',flexDirection:'column'}}>
        <div style={{padding:'16px 18px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:`1px solid ${T.border}`,flexShrink:0}}>
          <div style={{fontSize:15,fontWeight:900,color:T.text}}>🧰 工具箱</div>
          <button onClick={onClose} style={{background:'none',border:'none',fontSize:18,color:T.textMid,cursor:'pointer'}}>✕</button>
        </div>
        <div style={{padding:'14px 16px 24px',overflowY:'auto',flex:1}}>

          {catDisplay.map((cat)=>{
            const origIdx=toolbox.findIndex(c=>c.id===cat.id);
            const isDragging=catDrag&&origIdx===catDrag.from;
            const itemDisplay=getItemDisplay(cat);
            const itemD=itemDrags[cat.id];
            return(
              <div key={cat.id} style={{background:T.toolboxCatBg||T.bg,border:`1.5px solid ${isDragging?T.accent:T.border}`,borderRadius:18,padding:'12px 12px 8px',marginBottom:12,opacity:isDragging?0.65:1,transition:'opacity 0.12s,border-color 0.12s',boxShadow:T.cardShadow}}>
                {/* 大类 header */}
                <div style={{display:'flex',alignItems:'center',gap:4,marginBottom:openCats[cat.id]?10:0}}>
                  <div onTouchStart={(e)=>onCatStart(origIdx,e)} style={{cursor:'grab',color:T.textLight,flexShrink:0,padding:'4px 6px',touchAction:'none',userSelect:'none',fontSize:16}}>⠿</div>
                  {editing?.scope==='cat'&&editing.catId===cat.id?(
                    <input autoFocus value={editing.value} onChange={e=>setEditing(v=>({...v,value:e.target.value}))} onBlur={saveEdit} onKeyDown={e=>e.key==='Enter'&&saveEdit()}
                      style={{...nameInp,flex:1,fontWeight:900,fontSize:13,borderColor:T.accent,background:T.card,color:T.text}}/>
                  ):(
                    <div onClick={()=>setOpenCats(v=>({...v,[cat.id]:!v[cat.id]}))} style={{flex:1,fontSize:13,fontWeight:900,color:T.text,cursor:'pointer'}}>{cat.name}</div>
                  )}
                  <button onClick={()=>setEditing({scope:'cat',catId:cat.id,value:cat.name})} style={{...bs,color:T.textLight,fontSize:12}}>✏️</button>
                  <button onClick={()=>addItem(cat.id)} style={{...bs,color:T.accent,fontSize:17,fontWeight:900}}>＋</button>
                  <button onClick={()=>deleteCat(cat.id)} style={{...bs,color:T.textLight,fontSize:12}}>🗑️</button>
                  <div onClick={()=>setOpenCats(v=>({...v,[cat.id]:!v[cat.id]}))} style={{color:T.textMid,fontSize:14,cursor:'pointer',padding:'4px'}}>{openCats[cat.id]?'▾':'▸'}</div>
                </div>

                {openCats[cat.id]&&(
                  <div onTouchMove={(e)=>onItemMove(cat.id,e)} onTouchEnd={()=>onItemEnd(cat.id)} onTouchCancel={()=>setItemDrags(v=>{const nv={...v};delete nv[cat.id];return nv;})}>
                    {itemDisplay.map((item)=>{
                      const origItemIdx=cat.items.findIndex(it=>it.id===item.id);
                      const isItemDragging=itemD&&origItemIdx===itemD.from;
                      return(
                        <div key={item.id} style={{padding:'10px 0',borderTop:`1px dashed ${T.border}`,opacity:isItemDragging?0.5:1,transition:'opacity 0.12s'}}>
                          <div style={{display:'flex',alignItems:'center',gap:4,marginBottom:8}}>
                            <div onTouchStart={(e)=>onItemStart(cat.id,origItemIdx,e)} style={{cursor:'grab',color:T.textLight,flexShrink:0,touchAction:'none',userSelect:'none',fontSize:13,padding:'2px 5px'}}>⠿</div>
                            {editing?.scope==='item'&&editing.catId===cat.id&&editing.itemId===item.id?(
                              <input autoFocus value={editing.value} onChange={e=>setEditing(v=>({...v,value:e.target.value}))} onBlur={saveEdit} onKeyDown={e=>e.key==='Enter'&&saveEdit()}
                                style={{...nameInp,flex:1,fontWeight:800,fontSize:12,borderColor:T.accent,background:T.card,color:T.text}}/>
                            ):(
                              <div style={{flex:1,fontSize:12,fontWeight:800,color:T.text}}>{item.name}</div>
                            )}
                            <button onClick={()=>setEditing({scope:'item',catId:cat.id,itemId:item.id,value:item.name})} style={{...bs,color:T.textLight,fontSize:11}}>✏️</button>
                            <button onClick={()=>deleteItem(cat.id,item.id)} style={{...bs,color:T.textLight,fontSize:11}}>🗑️</button>
                          </div>
                          {cat.type==='qty'?(
                            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
                              <button onClick={()=>updateQty(cat.id,item.id,-1)} style={{width:28,height:28,borderRadius:'50%',border:`1.5px solid ${T.border}`,background:T.card,cursor:'pointer'}}>－</button>
                              <div style={{minWidth:34,textAlign:'center',fontSize:13,fontWeight:900,color:T.text}}>{item.qty||0}</div>
                              <button onClick={()=>updateQty(cat.id,item.id,1)} style={{width:28,height:28,borderRadius:'50%',border:'none',background:T.accent,color:'#fff',cursor:'pointer'}}>＋</button>
                            </div>
                          ):(
                            <button onClick={()=>toggleOwned(cat.id,item.id)} style={{padding:'8px 14px',borderRadius:50,border:`1.5px solid ${item.owned?T.accent:T.border}`,background:item.owned?T.accentSoft:T.card,color:item.owned?T.accent:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:'pointer',marginBottom:8}}>
                              {item.owned?'已拥有':'未拥有'}
                            </button>
                          )}
                          <input value={item.note||''} onChange={e=>updateNote(cat.id,item.id,e.target.value)} placeholder="备注"
                            style={{width:'100%',border:`1.5px solid ${T.border}`,borderRadius:12,padding:'9px 12px',fontSize:12,fontFamily:"'Nunito',sans-serif",background:T.card,color:T.text,outline:'none',boxSizing:'border-box'}}/>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{display:'flex',gap:8,marginTop:4}}>
            <button onClick={()=>addCat('qty')} style={{flex:1,padding:'10px 0',borderRadius:50,border:`1.5px dashed ${T.border}`,background:'transparent',color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,cursor:'pointer'}}>＋ 数量类目</button>
            <button onClick={()=>addCat('owned')} style={{flex:1,padding:'10px 0',borderRadius:50,border:`1.5px dashed ${T.border}`,background:'transparent',color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,cursor:'pointer'}}>＋ 拥有类目</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════
//  GuideAssistant（图纸助手）
// ══════════════════════════════════



function GuideAssistant({T, onBack}){
  const [step, setStep] = useState("upload");
  const [imgSrc, setImgSrc] = useState(null);
  const [imgNaturalW, setImgNaturalW] = useState(0);
  const [imgNaturalH, setImgNaturalH] = useState(0);

  const [gridPx, setGridPx] = useState(40);
  const [gridPxInput, setGridPxInput] = useState("40");
  const [originX, setOriginX] = useState(0);
  const [originY, setOriginY] = useState(0);
  const [alignZoom, setAlignZoom] = useState(1);
  const [alignZoomInput, setAlignZoomInput] = useState("100");

  const [cropX1, setCropX1] = useState(0.05);
  const [cropY1, setCropY1] = useState(0.05);
  const [cropX2, setCropX2] = useState(0.95);
  const [cropY2, setCropY2] = useState(0.80);

  const [colorGrid, setColorGrid] = useState(null);
  const [colorList, setColorList] = useState([]);
  const [activeColor, setActiveColor] = useState(null);
  const [completedColors, setCompletedColors] = useState([]);
  const [renderSize, setRenderSize] = useState({w:0,h:0});
  const [cropRect, setCropRect] = useState(null);

  const [highlightZoom, setHighlightZoom] = useState(1);
  const [highlightPan, setHighlightPan] = useState({x:0,y:0});

  const fileRef = useRef(null);
  const gridCanvasRef = useRef(null);
  const alignWrapRef = useRef(null);
  const cropWrapRef = useRef(null);
  const canvasRef = useRef(null);
  const highlightViewportRef = useRef(null);

  const alignTouch = useRef({ mode:null, lastX:0, lastY:0, startDist:0, startZoom:1 });
  const cropDrag = useRef(null);
  const highlightTouch = useRef({ mode:null, startDist:0, startZoom:1, startPanX:0, startPanY:0, lastX:0, lastY:0 });
  useEffect(()=>{
    setGridPxInput(Number(gridPx).toFixed(gridPx % 1 === 0 ? 0 : 2));
  },[gridPx]);

  useEffect(()=>{
    setAlignZoomInput(String(Math.round(alignZoom*100)));
  },[alignZoom]);

  function updateGridPx(next){
    const safe = Math.max(8, Math.min(120, Number(next.toFixed(2))));
    setGridPx(safe);
    setGridPxInput(Number(safe).toFixed(safe % 1 === 0 ? 0 : 2));
  }

  function commitGridPxInput(){
    const raw = String(gridPxInput ?? "").trim();
    if(!raw){
      setGridPxInput(Number(gridPx).toFixed(gridPx % 1 === 0 ? 0 : 2));
      return;
    }
    const v = Number(raw);
    if(!Number.isFinite(v)){
      setGridPxInput(Number(gridPx).toFixed(gridPx % 1 === 0 ? 0 : 2));
      return;
    }
    updateGridPx(v);
  }

  function updateAlignZoom(next){
    const safe = Math.max(0.6, Math.min(5, Number(next.toFixed(2))));
    setAlignZoom(safe);
    setAlignZoomInput(String(Math.round(safe*100)));
  }

  function commitAlignZoomInput(){
    const raw = String(alignZoomInput ?? "").trim();
    if(!raw){
      setAlignZoomInput(String(Math.round(alignZoom*100)));
      return;
    }
    const v = Number(raw);
    if(!Number.isFinite(v)){
      setAlignZoomInput(String(Math.round(alignZoom*100)));
      return;
    }
    updateAlignZoom(v/100);
  }

  const visibleColors = useMemo(
    ()=> colorList.filter(c=>!completedColors.includes(c.id)),
    [colorList, completedColors]
  );

  useEffect(()=>{
    if(activeColor && !visibleColors.find(c=>c.id===activeColor)){
      setActiveColor(visibleColors[0]?.id || null);
    }else if(!activeColor && visibleColors.length){
      setActiveColor(visibleColors[0].id);
    }
  },[visibleColors, activeColor]);

  function handleUpload(e){
    const f = e.target.files?.[0];
    if(!f) return;
    const url = URL.createObjectURL(f);
    const img = new Image();
    img.onload = () => {
      setImgNaturalW(img.naturalWidth);
      setImgNaturalH(img.naturalHeight);
      setImgSrc(url);
      const est = Math.round(img.naturalWidth / 50);
      setGridPx(Math.max(10, Math.min(est, 80)));
      setOriginX(0);
      setOriginY(0);
      updateAlignZoom(1);
      setHighlightZoom(1);
      setHighlightPan({x:0,y:0});
      setCompletedColors([]);
      setColorGrid(null);
      setColorList([]);
      setActiveColor(null);
      setCropRect(null);
      setCropX1(0.05);
      setCropY1(0.05);
      setCropX2(0.95);
      setCropY2(0.80);
      setStep("align");
    };
    img.src = url;
    e.target.value = "";
  }

  useEffect(()=>{
    if(step!=="align" || !gridCanvasRef.current || !imgNaturalW || !imgNaturalH) return;
    const el = gridCanvasRef.current;
    el.width = imgNaturalW;
    el.height = imgNaturalH;
    const ctx = el.getContext("2d");
    ctx.clearRect(0,0,imgNaturalW,imgNaturalH);
    const ox = ((originX % gridPx) + gridPx) % gridPx;
    const oy = ((originY % gridPx) + gridPx) % gridPx;
    ctx.strokeStyle = "rgba(255,60,60,0.88)";
    ctx.lineWidth = Math.max(1, imgNaturalW/520);
    for(let x=ox; x<imgNaturalW; x+=gridPx){
      ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,imgNaturalH); ctx.stroke();
    }
    for(let y=oy; y<imgNaturalH; y+=gridPx){
      ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(imgNaturalW,y); ctx.stroke();
    }
  },[step,imgNaturalW,imgNaturalH,gridPx,originX,originY]);

  function onAlignTouchStart(e){
    const ts = alignTouch.current;
    if(e.touches.length===2){
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      ts.mode = "pinch";
      ts.startDist = Math.sqrt(dx*dx + dy*dy) || 1;
      ts.startZoom = alignZoom;
    }else if(e.touches.length===1){
      ts.mode = "dragGrid";
      ts.lastX = e.touches[0].clientX;
      ts.lastY = e.touches[0].clientY;
    }
  }
  function onAlignTouchMove(e){
    const ts = alignTouch.current;
    if(ts.mode==="pinch" && e.touches.length===2){
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx*dx + dy*dy) || 1;
      const ratio = dist / (ts.startDist || 1);
      setAlignZoom(Math.max(0.6, Math.min(5, Number((ts.startZoom * ratio).toFixed(2)))));
    }else if(ts.mode==="dragGrid" && e.touches.length===1){
      e.preventDefault();
      const dx = e.touches[0].clientX - ts.lastX;
      const dy = e.touches[0].clientY - ts.lastY;
      const displayWidth = alignWrapRef.current?.clientWidth || imgNaturalW;
      const naturalPerDisplay = imgNaturalW / (displayWidth || 1);
      setOriginX(v=>v + dx * naturalPerDisplay);
      setOriginY(v=>v + dy * naturalPerDisplay);
      ts.lastX = e.touches[0].clientX;
      ts.lastY = e.touches[0].clientY;
    }
  }
  function onAlignTouchEnd(){ alignTouch.current.mode = null; }

  function nudgeGrid(dx,dy){
    setOriginX(v=>v+dx);
    setOriginY(v=>v+dy);
  }

  function getRelativePoint(clientX, clientY){
    const rect = cropWrapRef.current?.getBoundingClientRect();
    if(!rect) return null;
    const tx = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const ty = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    return {tx, ty};
  }

  function getCropHandle(tx, ty){
    const THRESH = 0.045;
    const onL = Math.abs(tx-cropX1)<THRESH, onR = Math.abs(tx-cropX2)<THRESH;
    const onT = Math.abs(ty-cropY1)<THRESH, onB = Math.abs(ty-cropY2)<THRESH;
    const inX = tx>cropX1 && tx<cropX2, inY = ty>cropY1 && ty<cropY2;
    if(onL&&onT) return "TL";
    if(onR&&onT) return "TR";
    if(onL&&onB) return "BL";
    if(onR&&onB) return "BR";
    if(onL&&inY) return "L";
    if(onR&&inY) return "R";
    if(onT&&inX) return "T";
    if(onB&&inX) return "B";
    if(inX&&inY) return "MOVE";
    return null;
  }

  function startCropDrag(clientX, clientY){
    const p = getRelativePoint(clientX, clientY);
    if(!p) return;
    const handle = getCropHandle(p.tx, p.ty);
    if(!handle) return;
    cropDrag.current = {
      handle,
      startTx: p.tx,
      startTy: p.ty,
      sx1: cropX1,
      sy1: cropY1,
      sx2: cropX2,
      sy2: cropY2
    };
  }

  function updateCropDrag(clientX, clientY){
    if(!cropDrag.current) return;
    const p = getRelativePoint(clientX, clientY);
    if(!p) return;
    const {handle, startTx, startTy, sx1, sy1, sx2, sy2} = cropDrag.current;
    const dx = p.tx - startTx;
    const dy = p.ty - startTy;
    const MIN = 0.06;
    let nx1=sx1, ny1=sy1, nx2=sx2, ny2=sy2;

    if(handle==="MOVE"){
      const w = sx2 - sx1, h = sy2 - sy1;
      nx1 = Math.max(0, Math.min(1-w, sx1 + dx));
      ny1 = Math.max(0, Math.min(1-h, sy1 + dy));
      nx2 = nx1 + w;
      ny2 = ny1 + h;
    }else{
      if(handle.includes("L")) nx1 = Math.max(0, Math.min(sx2-MIN, sx1+dx));
      if(handle.includes("R")) nx2 = Math.min(1, Math.max(sx1+MIN, sx2+dx));
      if(handle.includes("T")) ny1 = Math.max(0, Math.min(sy2-MIN, sy1+dy));
      if(handle.includes("B")) ny2 = Math.min(1, Math.max(sy1+MIN, sy2+dy));
    }

    setCropX1(nx1); setCropY1(ny1); setCropX2(nx2); setCropY2(ny2);
  }

  function endCropDrag(){ cropDrag.current = null; }
  function onCropPointerDown(e){ e.preventDefault(); startCropDrag(e.clientX, e.clientY); }
  function onCropPointerMove(e){ if(!cropDrag.current) return; e.preventDefault(); updateCropDrag(e.clientX, e.clientY); }
  function onCropPointerUp(){ endCropDrag(); }
  function onCropTouchStart(e){ if(e.touches.length!==1) return; e.preventDefault(); startCropDrag(e.touches[0].clientX, e.touches[0].clientY); }
  function onCropTouchMove(e){ if(!cropDrag.current || e.touches.length!==1) return; e.preventDefault(); updateCropDrag(e.touches[0].clientX, e.touches[0].clientY); }
  function onCropTouchEnd(){ endCropDrag(); }

  async function analyzeColors(){
    if(!imgSrc) return;
    const img = new Image();
    img.onload = async () => {
      try{
        const containerW = cropWrapRef.current?.clientWidth || img.naturalWidth;
        const containerH = cropWrapRef.current?.clientHeight || img.naturalHeight;
        const fitScale = Math.min(containerW / img.naturalWidth, containerH / img.naturalHeight);
        const renderedW = img.naturalWidth * fitScale;
        const renderedH = img.naturalHeight * fitScale;
        const lbX = (containerW - renderedW) / 2;
        const lbY = (containerH - renderedH) / 2;
        const toImgRatioX = (r) => Math.max(0, Math.min(1, (r * containerW - lbX) / renderedW));
        const toImgRatioY = (r) => Math.max(0, Math.min(1, (r * containerH - lbY) / renderedH));
        const imgCropX1 = toImgRatioX(cropX1), imgCropY1 = toImgRatioY(cropY1);
        const imgCropX2 = toImgRatioX(cropX2), imgCropY2 = toImgRatioY(cropY2);

        const x1 = Math.round(imgCropX1 * img.naturalWidth), y1 = Math.round(imgCropY1 * img.naturalHeight);
        const x2 = Math.round(imgCropX2 * img.naturalWidth), y2 = Math.round(imgCropY2 * img.naturalHeight);
        const w = Math.max(1, x2 - x1);
        const h = Math.max(1, y2 - y1);
        const oxGlobal = ((originX % gridPx) + gridPx) % gridPx;
        const oyGlobal = ((originY % gridPx) + gridPx) % gridPx;
        const localGridX = ((oxGlobal - x1) % gridPx + gridPx) % gridPx;
        const localGridY = ((oyGlobal - y1) % gridPx + gridPx) % gridPx;
        const cols = Math.max(1, Math.floor((w - localGridX) / gridPx));
        const rows = Math.max(1, Math.floor((h - localGridY) / gridPx));

        const cropCanvas = document.createElement("canvas");
        cropCanvas.width = Math.max(1, Math.round(w * 2));
        cropCanvas.height = Math.max(1, Math.round(h * 2));
        const cropCtx = cropCanvas.getContext("2d");
        cropCtx.imageSmoothingEnabled = false;
        cropCtx.fillStyle = "#ffffff";
        cropCtx.fillRect(0,0,cropCanvas.width,cropCanvas.height);
        cropCtx.drawImage(img, x1, y1, w, h, 0, 0, cropCanvas.width, cropCanvas.height);
        const cropB64 = cropCanvas.toDataURL("image/png");

        const validCodes = ALL_COLORS.map(c=>c.id).join(", ");
        const prompt = `你在做拼豆图纸单格OCR。
这是一张已经对齐网格的拼豆图纸主体截图。
请按网格逐格读取每个格子里印着的色号文字，不要凭颜色猜测。

要求：
1. 严格输出JSON，不要解释，不要Markdown代码块。
2. JSON格式固定为：{"rows":[[...],[...]]}
3. 一共 ${rows} 行、${cols} 列。
4. 每个单元格只能填：合法色号字符串，或者 null。
5. 格子为空白背景、没有属于作品内容时填 null。
6. 遇到容易混淆的字要优先按文字判断：C3/C13、E11/E15/E16、F2/F4、B29/B32。
7. 若单格文字有点糊，可结合相邻格子的相同重复文字修正，但最终仍必须输出合法色号。
8. 合法色号只能从这里选：${validCodes}
9. 不允许输出任何不在合法列表中的值。`;

        const resp = await fetch('/api/qwen',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({ image: cropB64, prompt })
        });
        const data = await resp.json();
        const raw = String(data?.result || "").trim();
        const cleaned = raw
          .replace(/^```(?:json)?/i, "")
          .replace(/```$/i, "")
          .trim();

        let parsed = null;
        try{
          parsed = JSON.parse(cleaned);
        }catch(e){
          const m = cleaned.match(/\{[\s\S]*\}/);
          if(m) parsed = JSON.parse(m[0]);
        }

        const validSet = new Set(ALL_COLORS.map(c=>c.id));
        let finalGrid = Array.from({length: rows}, ()=>Array.from({length: cols}, ()=>null));
        const sourceRows = Array.isArray(parsed?.rows) ? parsed.rows : [];
        for(let r=0; r<rows; r++){
          const srcRow = Array.isArray(sourceRows[r]) ? sourceRows[r] : [];
          for(let c=0; c<cols; c++){
            let val = srcRow[c];
            if(typeof val === "string"){
              val = val.toUpperCase().replace(/\s+/g, "").replace(/[^A-Z0-9]/g, "");
              if(validSet.has(val)) finalGrid[r][c] = val;
            }
          }
        }

        const officialMap = Object.fromEntries(ALL_COLORS.map(c=>[c.id,c]));
        const groupedByCode = {};
        finalGrid.forEach(row=>row.forEach(code=>{
          if(!code) return;
          if(!groupedByCode[code]) groupedByCode[code] = {id: code, code, count: 0};
          groupedByCode[code].count += 1;
        }));

        const mergedColorList = Object.values(groupedByCode)
          .map(c=>({
            id: c.id,
            code: c.code,
            count: c.count,
            r: parseInt((officialMap[c.id]?.hex || "#cccccc").slice(1,3),16),
            g: parseInt((officialMap[c.id]?.hex || "#cccccc").slice(3,5),16),
            b: parseInt((officialMap[c.id]?.hex || "#cccccc").slice(5,7),16),
          }))
          .sort((a,b)=>b.count-a.count);

        if(!mergedColorList.length){
          alert(`这一版OCR没能成功读出格子色号，先检查网格是否对齐，再框得紧一点。
如果还不行，把这张图单独裁成更紧的主体再试。`);
          return;
        }

        setCompletedColors([]);
        setColorGrid(finalGrid);
        setColorList(mergedColorList);
        setActiveColor(mergedColorList[0]?.id || null);
        setHighlightZoom(1);
        setHighlightPan({x:0,y:0});
        setRenderSize({w,h});
        setCropRect({x1,y1,x2,y2,w,h,localGridX,localGridY,rows,cols});
        setStep("highlight");
      }catch(err){
        alert(`分析失败：${err.message || err}`);
      }
    };
    img.src = imgSrc;
  }


  useEffect(()=>{
    if(step!=="highlight" || !colorGrid || !canvasRef.current || !imgSrc || !cropRect) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = ()=>{
      const {x1,y1,w,h,localGridX,localGridY} = cropRect;
      canvas.width = w;
      canvas.height = h;

      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0,0,w,h);
      ctx.drawImage(img,x1,y1,w,h,0,0,w,h);

      colorGrid.forEach((row,ri)=>row.forEach((id,ci)=>{
        if(!id || completedColors.includes(id)) return;
        const cx = localGridX + ci*gridPx;
        const cy = localGridY + ri*gridPx;
        if(id===activeColor){
          ctx.fillStyle="rgba(255,220,0,0.36)";
          ctx.fillRect(cx,cy,gridPx,gridPx);
          ctx.strokeStyle="rgba(255,170,0,1)";
          ctx.lineWidth=Math.max(1.2, gridPx*0.06);
          ctx.strokeRect(cx+0.75,cy+0.75,gridPx-1.5,gridPx-1.5);
        }
      }));
    };
    img.src = imgSrc;
  },[step,colorGrid,activeColor,imgSrc,cropRect,gridPx,completedColors]);

  function markCurrentDone(){
    if(!activeColor) return;
    setCompletedColors(prev=> prev.includes(activeColor) ? prev : [...prev, activeColor]);
  }
  function undoDoneColor(id){
    setCompletedColors(prev=>prev.filter(x=>x!==id));
    setActiveColor(id);
  }

  const activeMeta = colorList.find(c=>c.id===activeColor);
  const completedMeta = colorList.filter(c=>completedColors.includes(c.id));

  function startHighlightTouch(e){
    const ts = highlightTouch.current;
    if(e.touches.length===2){
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      ts.mode = "pinch";
      ts.startDist = Math.sqrt(dx*dx + dy*dy) || 1;
      ts.startZoom = highlightZoom;
    }else if(e.touches.length===1 && highlightZoom>1){
      ts.mode = "pan";
      ts.lastX = e.touches[0].clientX;
      ts.lastY = e.touches[0].clientY;
      ts.startPanX = highlightPan.x;
      ts.startPanY = highlightPan.y;
    }
  }
  function clampHighlightPan(nx, ny, zoomVal=highlightZoom){
    const viewport = highlightViewportRef.current;
    if(!viewport || !renderSize.w || !renderSize.h) return {x:nx,y:ny};
    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    const baseScale = Math.min(vw/renderSize.w, vh/renderSize.h);
    const displayW = renderSize.w * baseScale * zoomVal;
    const displayH = renderSize.h * baseScale * zoomVal;
    const limitX = Math.max(0, (displayW - vw) / 2);
    const limitY = Math.max(0, (displayH - vh) / 2);
    return {
      x: Math.max(-limitX, Math.min(limitX, nx)),
      y: Math.max(-limitY, Math.min(limitY, ny)),
    };
  }
  function onHighlightTouchMove(e){
    const ts = highlightTouch.current;
    if(ts.mode==="pinch" && e.touches.length===2){
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx*dx + dy*dy) || 1;
      const ratio = dist / (ts.startDist || 1);
      const nextZoom = Math.max(1, Math.min(6, Number((ts.startZoom * ratio).toFixed(2))));
      setHighlightZoom(nextZoom);
      setHighlightPan(p=>clampHighlightPan(p.x,p.y,nextZoom));
    }else if(ts.mode==="pan" && e.touches.length===1){
      e.preventDefault();
      const dx = e.touches[0].clientX - ts.lastX;
      const dy = e.touches[0].clientY - ts.lastY;
      setHighlightPan(p=>clampHighlightPan(p.x+dx,p.y+dy));
      ts.lastX = e.touches[0].clientX;
      ts.lastY = e.touches[0].clientY;
    }
  }
  function endHighlightTouch(){ highlightTouch.current.mode = null; }

  useEffect(()=>{
    if(highlightZoom<=1) setHighlightPan({x:0,y:0});
    else setHighlightPan(p=>clampHighlightPan(p.x,p.y,highlightZoom));
  },[highlightZoom, renderSize.w, renderSize.h]);

  const viewportW = typeof window !== "undefined" ? window.innerWidth : 375;
  const viewportH = typeof window !== "undefined" ? Math.max(260, window.innerHeight - 280) : 400;
  const baseScale = renderSize.w && renderSize.h ? Math.min(viewportW/renderSize.w, viewportH/renderSize.h) : 1;
  const fittedW = renderSize.w * baseScale;
  const fittedH = renderSize.h * baseScale;

  return(
    <div style={{fontFamily:"'Nunito',sans-serif",minHeight:"100vh",background:T.bg}}>
      <div style={{padding:"14px 16px",display:"flex",alignItems:"center",gap:10,borderBottom:`1px solid ${T.border}`,background:T.card,position:"sticky",top:0,zIndex:50}}>
        <button onClick={onBack} style={{background:"none",border:"none",fontSize:22,color:T.textMid,cursor:"pointer",lineHeight:1}}>←</button>
        <div style={{fontSize:15,fontWeight:800,color:T.text}}>🗺️ 图纸助手</div>
        {step!=="upload"&&(
          <div style={{marginLeft:"auto",display:"flex",gap:6}}>
            {["align","crop","highlight"].map(s=>(
              <div key={s} style={{width:8,height:8,borderRadius:"50%",background:step===s?T.accent:T.border,transition:"background 0.2s"}}/>
            ))}
          </div>
        )}
      </div>

      {step==="upload"&&(
        <div style={{padding:"48px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:20}}>
          <div style={{fontSize:52}}>🗺️</div>
          <div style={{fontSize:17,fontWeight:900,color:T.text,textAlign:"center"}}>上传你的图纸</div>
          <div style={{fontSize:13,color:T.textMid,textAlign:"center",lineHeight:1.8}}>支持作者导出的图纸图片<br/>上传后高亮单色辅助拼豆</div>
          <button onClick={()=>fileRef.current?.click()}
            style={{padding:"14px 40px",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:15,fontWeight:900,cursor:"pointer",boxShadow:`0 4px 16px ${T.accent}55`}}>
            📂 选择图纸
          </button>
          <input ref={fileRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleUpload}/>
          <div style={{fontSize:11,color:T.textLight,textAlign:"center",lineHeight:1.8,maxWidth:280}}>
            💡 第一步调网格，第二步框主体，第三步按色号高亮拼豆
          </div>
        </div>
      )}

      {step==="align"&&imgSrc&&(
        <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 57px)"}}>
          <div
            style={{flex:1,overflow:"auto",background:"#111",position:"relative",touchAction:"none"}}
            onTouchStart={onAlignTouchStart}
            onTouchMove={onAlignTouchMove}
            onTouchEnd={onAlignTouchEnd}
          >
            <div
              ref={alignWrapRef}
              style={{
                position:"relative",
                width: imgNaturalW * alignZoom,
                height: imgNaturalH * alignZoom,
                minWidth:"100%",
                minHeight:"100%"
              }}
            >
              <img src={imgSrc} style={{display:"block",width:"100%",height:"100%",userSelect:"none",pointerEvents:"none"}} alt="图纸"/>
              <canvas ref={gridCanvasRef} style={{position:"absolute",inset:0,pointerEvents:"none",width:"100%",height:"100%"}}/>
            </div>
            <div style={{position:"sticky",top:8,left:0,right:0,textAlign:"center",pointerEvents:"none"}}>
              <div style={{display:"inline-block",background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:11,borderRadius:20,padding:"4px 12px"}}>
                双指放大图纸看细节 · 单指拖动红线对齐
              </div>
            </div>
          </div>

          <div style={{background:T.card,borderTop:`1.5px solid ${T.border}`,padding:"14px 16px",flexShrink:0,maxHeight:"42vh",overflowY:"auto"}}>
            <div style={{fontSize:13,fontWeight:900,color:T.text,marginBottom:2}}>步骤 1/3 · 网格对齐</div>
            <div style={{fontSize:11,color:T.textMid,marginBottom:12}}>先把红线和原图黑格对准，后面高亮框才会大小一致</div>

            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12,flexWrap:"wrap"}}>
              <div style={{fontSize:12,color:T.textMid,fontWeight:700,minWidth:52}}>格子大小</div>
              <button onClick={()=>updateGridPx(Math.max(8, gridPx-1))} style={{width:34,height:34,borderRadius:"50%",border:`1.5px solid ${T.border}`,background:T.bg,fontSize:16,cursor:"pointer"}}>－</button>
              <button onClick={()=>updateGridPx(Math.max(8, gridPx-0.1))} style={{padding:"0 10px",height:34,borderRadius:18,border:`1.5px solid ${T.border}`,background:T.bg,fontSize:13,cursor:"pointer"}}>-0.1</button>
              <input
                type="number"
                inputMode="decimal"
                step="0.1"
                min="8"
                max="120"
                value={gridPxInput}
                onChange={e=>setGridPxInput(e.target.value)}
                onBlur={commitGridPxInput}
                onKeyDown={e=>{ if(e.key === "Enter") { e.currentTarget.blur(); } }}
                style={{width:78,height:36,borderRadius:12,border:`1.5px solid ${T.border}`,background:T.bg,color:T.accent,fontSize:17,fontWeight:900,textAlign:"center",outline:"none"}}
              />
              <button onClick={()=>updateGridPx(Math.min(120, gridPx+0.1))} style={{padding:"0 10px",height:34,borderRadius:18,border:`1.5px solid ${T.border}`,background:T.bg,fontSize:13,cursor:"pointer"}}>+0.1</button>
              <button onClick={()=>updateGridPx(Math.min(120, gridPx+1))} style={{width:34,height:34,borderRadius:"50%",border:"none",background:T.accent,color:"#fff",fontSize:16,cursor:"pointer"}}>＋</button>
              <div style={{fontSize:11,color:T.textLight}}>px/格</div>
            </div>

            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,flexWrap:"wrap"}}>
              <div style={{fontSize:12,color:T.textMid,fontWeight:700,minWidth:52}}>图纸放大</div>
              <button onClick={()=>updateAlignZoom(Math.max(0.6, alignZoom-0.2))} style={{width:34,height:34,borderRadius:"50%",border:`1.5px solid ${T.border}`,background:T.bg,fontSize:16,cursor:"pointer"}}>－</button>
              <input
                type="number"
                inputMode="decimal"
                step="1"
                min="60"
                max="500"
                value={alignZoomInput}
                onChange={e=>setAlignZoomInput(e.target.value)}
                onBlur={commitAlignZoomInput}
                onKeyDown={e=>{ if(e.key === "Enter") { e.currentTarget.blur(); } }}
                style={{width:74,height:36,borderRadius:12,border:`1.5px solid ${T.border}`,background:T.bg,color:T.accent,fontSize:16,fontWeight:900,textAlign:"center",outline:"none"}}
              />
              <div style={{fontSize:12,fontWeight:900,color:T.accent,minWidth:20,textAlign:"center"}}>%</div>
              <button onClick={()=>updateAlignZoom(Math.min(5, alignZoom+0.2))} style={{width:34,height:34,borderRadius:"50%",border:"none",background:T.accent,color:"#fff",fontSize:16,cursor:"pointer"}}>＋</button>
              <button onClick={()=>updateAlignZoom(1)} style={{marginLeft:"auto",padding:"0 12px",height:34,borderRadius:18,border:`1.5px solid ${T.border}`,background:T.bg,fontSize:12,fontWeight:800,cursor:"pointer",color:T.textMid}}>重置缩放</button>
            </div>

            <div style={{background:T.bg,border:`1px solid ${T.border}`,borderRadius:18,padding:"12px 12px",marginBottom:12}}>
              <div style={{fontSize:11,fontWeight:800,color:T.textMid,marginBottom:8}}>红线微调</div>
              <div style={{display:"flex",justifyContent:"center",marginBottom:8}}>
                <button onClick={()=>nudgeGrid(0,-0.5)} style={{width:48,height:40,borderRadius:14,border:`1.5px solid ${T.border}`,background:T.card,fontSize:18,cursor:"pointer"}}>↑</button>
              </div>
              <div style={{display:"flex",justifyContent:"center",gap:10,alignItems:"center"}}>
                <button onClick={()=>nudgeGrid(-0.5,0)} style={{width:48,height:40,borderRadius:14,border:`1.5px solid ${T.border}`,background:T.card,fontSize:18,cursor:"pointer"}}>←</button>
                <button onClick={()=>{setOriginX(0);setOriginY(0);}} style={{padding:"0 14px",height:40,borderRadius:14,border:`1.5px solid ${T.border}`,background:T.card,fontSize:12,fontWeight:800,cursor:"pointer",color:T.textMid}}>归零</button>
                <button onClick={()=>nudgeGrid(0.5,0)} style={{width:48,height:40,borderRadius:14,border:`1.5px solid ${T.border}`,background:T.card,fontSize:18,cursor:"pointer"}}>→</button>
              </div>
              <div style={{display:"flex",justifyContent:"center",marginTop:8}}>
                <button onClick={()=>nudgeGrid(0,0.5)} style={{width:48,height:40,borderRadius:14,border:`1.5px solid ${T.border}`,background:T.card,fontSize:18,cursor:"pointer"}}>↓</button>
              </div>
              <div style={{fontSize:10,color:T.textLight,textAlign:"center",marginTop:8}}>
                当前偏移：X {Number((((originX%gridPx)+gridPx)%gridPx)).toFixed(2)} · Y {Number((((originY%gridPx)+gridPx)%gridPx)).toFixed(2)}
              </div>
            </div>

            <button onClick={()=>setStep("crop")}
              style={{width:"100%",padding:"13px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:900,cursor:"pointer"}}>
              下一步：框选主体 →
            </button>
          </div>
        </div>
      )}

      {step==="crop"&&imgSrc&&(
        <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 57px)"}}>
          <div
            ref={cropWrapRef}
            style={{flex:1,overflow:"hidden",background:"#fff",position:"relative",touchAction:"none"}}
            onPointerDown={onCropPointerDown}
            onPointerMove={onCropPointerMove}
            onPointerUp={onCropPointerUp}
            onPointerLeave={onCropPointerUp}
            onTouchStart={onCropTouchStart}
            onTouchMove={onCropTouchMove}
            onTouchEnd={onCropTouchEnd}
          >
            <img src={imgSrc} style={{display:"block",width:"100%",height:"100%",objectFit:"contain",userSelect:"none",pointerEvents:"none",opacity:0.92}} alt="图纸"/>
            <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
              <div style={{position:"absolute",left:0,top:0,right:0,height:`${cropY1*100}%`,background:"rgba(0,0,0,0.35)"}}/>
              <div style={{position:"absolute",left:0,top:`${cropY2*100}%`,right:0,bottom:0,background:"rgba(0,0,0,0.35)"}}/>
              <div style={{position:"absolute",left:0,top:`${cropY1*100}%`,width:`${cropX1*100}%`,height:`${(cropY2-cropY1)*100}%`,background:"rgba(0,0,0,0.35)"}}/>
              <div style={{position:"absolute",left:`${cropX2*100}%`,top:`${cropY1*100}%`,right:0,height:`${(cropY2-cropY1)*100}%`,background:"rgba(0,0,0,0.35)"}}/>
            </div>

            <div
              style={{
                position:"absolute",
                left:`${cropX1*100}%`,
                top:`${cropY1*100}%`,
                width:`${(cropX2-cropX1)*100}%`,
                height:`${(cropY2-cropY1)*100}%`,
                border:"2.5px solid #4a9eff",
                boxSizing:"border-box",
                cursor:"move"
              }}
            >
              {[1,2].map(i=><div key={"v"+i} style={{position:"absolute",left:`${i*33.33}%`,top:0,bottom:0,width:1,background:"rgba(74,158,255,0.45)"}}/>)}
              {[1,2].map(i=><div key={"h"+i} style={{position:"absolute",top:`${i*33.33}%`,left:0,right:0,height:1,background:"rgba(74,158,255,0.45)"}}/>)}
              {[
                {k:"TL",left:-10,top:-10,cursor:"nwse-resize"},
                {k:"TR",right:-10,top:-10,cursor:"nesw-resize"},
                {k:"BL",left:-10,bottom:-10,cursor:"nesw-resize"},
                {k:"BR",right:-10,bottom:-10,cursor:"nwse-resize"},
                {k:"T",left:"50%",top:-10,transform:"translateX(-50%)",cursor:"ns-resize"},
                {k:"B",left:"50%",bottom:-10,transform:"translateX(-50%)",cursor:"ns-resize"},
                {k:"L",left:-10,top:"50%",transform:"translateY(-50%)",cursor:"ew-resize"},
                {k:"R",right:-10,top:"50%",transform:"translateY(-50%)",cursor:"ew-resize"},
              ].map(h=>(
                <div key={h.k} style={{position:"absolute",width:22,height:22,borderRadius:7,background:"#4a9eff",boxShadow:"0 2px 8px rgba(0,0,0,0.25)",...h}} />
              ))}
            </div>

            <div style={{position:"absolute",top:8,left:0,right:0,textAlign:"center",pointerEvents:"none"}}>
              <div style={{display:"inline-block",background:"rgba(0,0,0,0.55)",color:"#fff",fontSize:11,borderRadius:20,padding:"4px 12px"}}>
                可直接拖动蓝框/边/角点，也可用下方按钮微调
              </div>
            </div>
          </div>

          <div style={{background:T.card,borderTop:`1.5px solid ${T.border}`,padding:"14px 12px",flexShrink:0,maxHeight:"42vh",overflowY:"auto"}}>
            <div style={{fontSize:13,fontWeight:900,color:T.text,marginBottom:2}}>步骤 2/3 · 框选主体</div>
            <div style={{fontSize:11,color:T.textMid,marginBottom:10}}>只保留图纸主体和底部色块，去掉多余空白</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
              {[["上",cropY1,v=>setCropY1(v),0,cropY2-0.05],["下",cropY2,v=>setCropY2(v),cropY1+0.05,1],["左",cropX1,v=>setCropX1(v),0,cropX2-0.05],["右",cropX2,v=>setCropX2(v),cropX1+0.05,1]].map(([label,val,setter,min,max])=>(
                <div key={label} style={{background:T.bg,borderRadius:14,padding:"8px 10px",border:`1px solid ${T.border}`}}>
                  <div style={{fontSize:10,color:T.textMid,fontWeight:700,marginBottom:4}}>{label}边界 {Math.round(val*100)}%</div>
                  <div style={{display:"flex",alignItems:"center",gap:6}}>
                    <button onClick={()=>setter(Math.max(min, Number((val-0.01).toFixed(3))))} style={{width:28,height:28,borderRadius:"50%",border:`1px solid ${T.border}`,background:T.card,cursor:"pointer",fontSize:14,flexShrink:0}}>－</button>
                    <input type="range" min={Math.round(min*100)} max={Math.round(max*100)} value={Math.round(val*100)}
                      onChange={e=>setter(Number(e.target.value)/100)}
                      style={{flex:1,accentColor:T.accent}}/>
                    <button onClick={()=>setter(Math.min(max, Number((val+0.01).toFixed(3))))} style={{width:28,height:28,borderRadius:"50%",border:"none",background:T.accent,color:"#fff",cursor:"pointer",fontSize:14,flexShrink:0}}>＋</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setStep("align")} style={{flex:1,padding:"12px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>← 上一步</button>
              <button onClick={analyzeColors} style={{flex:2,padding:"12px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:900,cursor:"pointer"}}>✨ 开始分析</button>
            </div>
          </div>
        </div>
      )}

      {step==="highlight"&&(
        <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 57px)"}}>
          <div style={{padding:"8px 12px",background:T.card,borderBottom:`1px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"space-between",gap:10}}>
            <div style={{fontSize:11,color:T.textMid,fontWeight:800}}>默认是正常图例，双指或按钮放大后再看细色号</div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <button onClick={()=>setHighlightZoom(v=>Math.max(1, Number((v-0.2).toFixed(2))))} style={{width:32,height:32,borderRadius:"50%",border:`1.5px solid ${T.border}`,background:T.bg,fontSize:16,cursor:"pointer"}}>－</button>
              <div style={{fontSize:12,fontWeight:900,color:T.accent,minWidth:44,textAlign:"center"}}>{Math.round(highlightZoom*100)}%</div>
              <button onClick={()=>setHighlightZoom(v=>Math.min(6, Number((v+0.2).toFixed(2))))} style={{width:32,height:32,borderRadius:"50%",border:"none",background:T.accent,color:"#fff",fontSize:16,cursor:"pointer"}}>＋</button>
            </div>
          </div>

          <div
            ref={highlightViewportRef}
            style={{flex:1,overflow:"hidden",background:"#fff",touchAction:"none",position:"relative"}}
            onTouchStart={startHighlightTouch}
            onTouchMove={onHighlightTouchMove}
            onTouchEnd={endHighlightTouch}
          >
            <div
              style={{
                position:"absolute",
                left:"50%",
                top:"50%",
                width:fittedW,
                height:fittedH,
                transform:`translate(calc(-50% + ${highlightPan.x}px), calc(-50% + ${highlightPan.y}px)) scale(${highlightZoom})`,
                transformOrigin:"center center"
              }}
            >
              <canvas
                ref={canvasRef}
                style={{
                  display:"block",
                  width:"100%",
                  height:"100%",
                  background:"#fff"
                }}
              />
            </div>
          </div>

          <div style={{background:T.card,borderTop:`1.5px solid ${T.border}`,padding:"12px 16px",flexShrink:0}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,marginBottom:8}}>
              <div style={{fontSize:11,color:T.textMid,fontWeight:700}}>
                点色块高亮 · 剩余 {visibleColors.length} 种颜色
              </div>
              {activeMeta && (
                <button
                  onClick={markCurrentDone}
                  style={{padding:"8px 12px",borderRadius:20,border:"none",background:"#19bf38",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer"}}
                >
                  ✓ {activeMeta.code || activeMeta.id} 已完成
                </button>
              )}
            </div>

            <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:4,marginBottom:completedMeta.length?8:0}}>
              {visibleColors.map(c=>(
                <button
                  key={c.id}
                  onClick={()=>setActiveColor(c.id)}
                  style={{
                    minWidth:88,
                    padding:"10px 10px 8px",
                    borderRadius:18,
                    border:activeColor===c.id?`2.5px solid ${T.accent}`:`1.5px solid ${T.border}`,
                    background:T.bg,
                    cursor:"pointer",
                    boxShadow:activeColor===c.id?`0 0 0 2px ${T.accent}22`:"none",
                    flexShrink:0
                  }}
                >
                  <div style={{width:36,height:36,borderRadius:12,margin:"0 auto 6px",background:`rgb(${c.r},${c.g},${c.b})`,border:"1px solid rgba(0,0,0,0.08)"}}/>
                  <div style={{fontSize:14,fontWeight:900,color:T.text,lineHeight:1.2}}>{c.code || c.id}</div>
                  <div style={{fontSize:10,color:T.textMid,marginTop:2}}>{c.count}格</div>
                </button>
              ))}
            </div>

            {completedMeta.length>0&&(
              <div style={{borderTop:`1px dashed ${T.border}`,paddingTop:8}}>
                <div style={{fontSize:10,color:T.textLight,fontWeight:700,marginBottom:6}}>已完成</div>
                <div style={{display:"flex",gap:8,overflowX:"auto"}}>
                  {completedMeta.map(c=>(
                    <button key={c.id} onClick={()=>undoDoneColor(c.id)}
                      style={{padding:"6px 10px",borderRadius:16,border:`1px solid ${T.border}`,background:T.bg,cursor:"pointer",fontSize:11,fontWeight:800,color:T.textMid,whiteSpace:"nowrap"}}>
                      ↺ {c.code || c.id}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
// trigger vercel redeploy


