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

        <div style={{background:`linear-gradient(135deg,#ff8fa3,#ffd166,#4a9eff)`,borderRadius:50,padding:"13px 0",textAlign:"center",marginBottom:10,cursor:"pointer"}}
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

function AuthPage({ T, tn, onLogin }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setErr(error.message);
      else setMsg("注册成功！直接登录就可以啦～");
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
          </div>
          {err && <div style={{ marginTop: 10, fontSize: 12, color: T.danger, fontWeight: 600 }}>{err}</div>}
          {msg && <div style={{ marginTop: 10, fontSize: 12, color: "#4caf50", fontWeight: 600 }}>{msg}</div>}
          <button onClick={handleSubmit} disabled={loading}
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
  sky:{bg:"#f0f7ff",card:"#ffffff",border:"#cce3ff",accent:"#4a9eff",accentLight:"#ddeeff",accentSoft:"#eaf4ff",warn:"#f5a623",warnBg:"#fff8ec",warnBorder:"#fde5b0",danger:"#ff6b6b",dangerBg:"#fff0f0",dangerBorder:"#ffd0d0",text:"#2c4a6e",textMid:"#6a90b8",textLight:"#a8c4e0",nav:"#ffffff",navBorder:"#dceeff",barBg:"#dceeff",bars:["#4a9eff","#72b4ff","#9acaff","#b8d8ff","#d4eaff"],switchBtn:"夜空 🌙",cardShadow:"0 4px 16px rgba(74,158,255,0.10)",floatShadow:"0 8px 32px rgba(74,158,255,0.20)",headerBg:"linear-gradient(135deg,#e8f4ff 0%,#f5f0ff 100%)",navActiveDot:"#4a9eff"},
  night:{bg:"#0d1b2e",card:"#152236",border:"#1e3352",accent:"#ffd166",accentLight:"#2a2010",accentSoft:"#1e1808",warn:"#ffd166",warnBg:"#1e1808",warnBorder:"#3a3010",danger:"#ff8fa3",dangerBg:"#1e0810",dangerBorder:"#3a1020",text:"#d4e8ff",textMid:"#7a9cc0",textLight:"#304860",nav:"#0a1520",navBorder:"#1a2d44",barBg:"#1a2d44",bars:["#ffd166","#ffbb44","#ffa533","#ff8f22","#ff7a11"],switchBtn:"晴天 ☀️",cardShadow:"0 4px 16px rgba(0,0,0,0.4)",floatShadow:"0 8px 32px rgba(255,209,102,0.15)",headerBg:"linear-gradient(135deg,#0d1b2e 0%,#162540 100%)",navActiveDot:"#ffd166"}
};

const G=`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
.tt{transition:background 0.3s,color 0.3s,border-color 0.3s;}
@keyframes bb{0%,100%{transform:translateY(0) scale(1);}50%{transform:translateY(-6px) scale(1.08);}}
.fade{animation:fu 0.22s ease both;}
@keyframes fu{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
.cc{transition:transform 0.15s,box-shadow 0.15s,border 0.15s,opacity 0.15s;}
.cc:active{transform:scale(0.93)!important;opacity:0.8;}
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
            style={{width:68,textAlign:"center",fontSize:15,fontWeight:800,padding:"4px 6px",border:`2px solid ${T.accent}`,borderRadius:10,fontFamily:"'Nunito',sans-serif",background:tn==="sky"?"#f8fbff":T.card,color:T.accent,outline:"none"}}/>
          <span style={{fontSize:11,color:T.textLight,fontWeight:700}}>粒</span>
        </div>
        <div style={{fontSize:10,color:T.textLight}}>= {((parseInt(localB)||0)/100).toFixed(1).replace(/\.0$/,"")} g</div>
      </div>}

      {/* 扣用量 */}
      {mode==="deduct"&&<div style={{padding:pad,textAlign:"center"}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:10,color:T.warn,marginBottom:4,fontWeight:600}}>扣用量</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:4,marginBottom:3}}>
          <input ref={inputRef} value={localB} onChange={e=>setLocalB(e.target.value)} onBlur={saveDeduct} onKeyDown={onKeyDeduct} type="number" min="0"
            style={{width:68,textAlign:"center",fontSize:15,fontWeight:800,padding:"4px 6px",border:`2px solid ${T.warn}`,borderRadius:10,fontFamily:"'Nunito',sans-serif",background:tn==="sky"?"#f8fbff":T.card,color:T.warn,outline:"none"}}/>
          <span style={{fontSize:11,color:T.textLight,fontWeight:700}}>粒</span>
        </div>
        <div style={{fontSize:10,color:T.textLight}}>库存 {beads} → {Math.max(0,beads-(parseInt(localB)||0))} 粒</div>
      </div>}
    </div>
  );
});


export default function App(){
  const [tn,setTn]=useState("sky");
  const T=THEMES[tn];
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
  const FREE_AI_LIMIT=5;
  const [freeAiUsed,setFreeAiUsed]=useState(()=>{try{const v=localStorage.getItem('pindou_free_ai_used');return v?Number(v):0}catch{return 0}});

  const [stock,setStock]=useState(INIT_STOCK);
  const [used,setUsed]=useState(INIT_USED);
  const [syncLoading,setSyncLoading]=useState(false);
  const [syncStatus,setSyncStatus]=useState(""); // "ok" | "err" | ""
  const [cloudReady,setCloudReady]=useState(false);
  const [page,setPage]=useState("home");
  useEffect(()=>{try{localStorage.setItem('pindou_free_ai_used',String(freeAiUsed));}catch{}},[freeAiUsed]);

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
      const {data:profile}=await supabase.from("profiles").select("plan, role, pro_expires_at").eq("user_id",user.id).single();
      const now=new Date();
      const isTesterPro=profile?.plan==="tester_pro" && profile?.pro_expires_at && new Date(profile.pro_expires_at)>now;
      const isPaidPro=profile?.plan==="pro";
      const isAdmin=profile?.role==="admin";
      const nextIsPro=!!(isAdmin||isPaidPro||isTesterPro);
      setIsPro(nextIsPro);
      if(!nextIsPro)setSyncStatus("");
      if(error){
        setSyncStatus("err");
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
        try{const s=localStorage.getItem("pindou_stock");if(s)setStock(JSON.parse(s));}catch{}
        try{const u=localStorage.getItem("pindou_used");if(u)setUsed(JSON.parse(u));}catch{}
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
  useEffect(()=>{
    try{
      localStorage.setItem('pindou_warn_low',String(wL));
      localStorage.setItem('pindou_warn_crit',String(wC));
    }catch{}
  },[wL,wC]);
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
  const [imgLoading,setImgLoading]=useState(false);
  const [imgErr,setImgErr]=useState("");
  const imgRef=useRef(null);

  const critC=ALL_COLORS.filter(c=>Math.round(stock[c.id])<wC);
  const lowC=ALL_COLORS.filter(c=>Math.round(stock[c.id])>=wC&&Math.round(stock[c.id])<wL);
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
        sourceType:"quick_done"
      };
      pushHistory(stock,used,tasks);
      setStock(ns);setUsed(nu);
      setTasks(prev=>[newTask,...prev]);
    }else if(mode==="link"&&linkedTaskId){
      pushHistory(stock,used,tasks);
      setStock(ns);setUsed(nu);
      setTasks(prev=>prev.map(t=>t.id===linkedTaskId?{
        ...t,
        status:"done",
        doneDate:new Date().toISOString(),
        startedAt:null,
        colorData: colorData.length>0 ? colorData : (t.colorData||[])
      }:t));
    }else{
      // 纯扣豆不关联作品
      pushHistory(stock,used);
      setStock(ns);setUsed(nu);
    }

    setCmdTags([]);
    setBatch(false);
    setSel(new Set());
    setShowTagLink(false);
    setTagLinkMode(null);
    setLinkedTaskId(null);
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
    if(!isPro&&freeAiUsed>=FREE_AI_LIMIT){setShowUpgrade(true);return;}
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






  const inp=(ex={})=>({fontFamily:"'Nunito',sans-serif",border:`1.5px solid ${T.border}`,borderRadius:12,background:tn==="sky"?"#f8fbff":T.card,color:T.text,outline:"none",...ex});

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
  const [resetKey,setResetKey]=useState(0);
  const [tasks,setTasks]=useState(()=>{try{return JSON.parse(localStorage.getItem("pindou_tasks")||"[]")}catch(e){return []}});

  useEffect(()=>{
    try{
      localStorage.setItem("pindou_tasks",JSON.stringify(tasks));
    }catch(e){}
  },[tasks]);
  const [tasksLoaded,setTasksLoaded]=useState(false);
  const tasksTimerRef=useRef(null);
  useEffect(()=>{async function lt(){
    try{
      const localTasks=(()=>{try{const s=localStorage.getItem('pindou_tasks');return s?JSON.parse(s):[]}catch{return []}})();
      if(user&&isPro){
        const {data}=await supabase.from("profiles").select("tasks").eq("user_id",user.id).single();
        const cloudTasks=Array.isArray(data?.tasks)?data.tasks:[];
        if(localTasks.length>0 && cloudTasks.length===0){
          setTasks(localTasks);
        }else if(cloudTasks.length>0){
          setTasks(cloudTasks);
          try{localStorage.setItem('pindou_tasks',JSON.stringify(cloudTasks));}catch{}
        }else{
          setTasks(localTasks);
        }
      }else{
        setTasks(localTasks);
      }
    }finally{
      setTasksLoaded(true);
    }
  }lt();},[user,isPro]);
  useEffect(()=>{if(!tasksLoaded)return;try{localStorage.setItem('pindou_tasks',JSON.stringify(tasks));}catch{}if(!user||!isPro)return;clearTimeout(tasksTimerRef.current);tasksTimerRef.current=setTimeout(async()=>{await supabase.from("profiles").update({tasks}).eq("user_id",user.id);},1500);},[tasks,tasksLoaded]);
  async function resetData(){
    if(!resetConfirm){setResetConfirm(true);setTimeout(()=>setResetConfirm(false),3000);return;}
    setStock(INIT_STOCK);setUsed(INIT_USED);setHistory([]);
    localStorage.removeItem('pindou_stock');localStorage.removeItem('pindou_used');
    localStorage.removeItem('pindou_tasks');
    if(user){
      await supabase.from('stock').delete().eq('user_id',user.id);
      await supabase.from('profiles').update({tasks:[]}).eq('user_id',user.id);
    }
    setResetConfirm(false);
    setResetKey(k=>k+1);
  }

  function exportData(){
    const data={stock,used,exportedAt:new Date().toISOString()};
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
          <button className="btn" onClick={()=>setTn(t=>t==="sky"?"night":"sky")} style={{padding:"7px 16px",borderRadius:50,border:`1.5px solid ${T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,color:T.accent,background:T.accentLight}}>{T.switchBtn}</button>
        </div>}
        {/* 导入隐藏input */}
        <input ref={importRef} type="file" accept=".json" style={{display:"none"}} onChange={importData}/>

        {/* 主内容滚动区 — 包含所有页面 */}
        <div style={{flex:1,overflowY:"auto",WebkitOverflowScrolling:"touch",display:"flex",flexDirection:"column",minHeight:0}}>

          {/* home / stock 内容 */}
          {(page==="home"||page==="stock")&&<>
            <div style={{maxWidth:640,margin:"0 auto",padding:"14px 14px 0",width:"100%",boxSizing:"border-box"}}>

              {page==="home"&&<div className="fade">
                <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"16px",marginBottom:14,boxShadow:T.cardShadow}}>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                    <div style={{fontSize:12,color:T.textLight,fontWeight:700,letterSpacing:0.5}}>⚙️ 补货阈值设定</div>
                    <button className="btn" onClick={resetData} style={{padding:"4px 10px",borderRadius:50,border:`1.5px solid ${resetConfirm?T.danger:T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,background:resetConfirm?T.dangerBg:T.card,color:resetConfirm?T.danger:T.textLight}}>
                      {resetConfirm?"⚠️ 确认清空":"🗑️ 重置"}
                    </button>
                  </div>
                  <div style={{display:"flex",gap:10}}>
                    {[["🟡 即将不足",wL,setWL,T.warn,T.warnBg,T.warnBorder],[" 🔴 不足",wC,setWC,T.danger,T.dangerBg,T.dangerBorder]].map(([lbl,val,set,col,bg,bd])=>(
                      <label key={lbl} style={{display:"flex",alignItems:"center",gap:4,flex:1,background:bg,border:`1.5px solid ${bd}`,borderRadius:16,padding:"9px 12px",fontSize:12,fontWeight:700,color:col}}>
                        {lbl}
                        <input type="number" value={val} onChange={e=>set(Number(e.target.value))} style={{...inp({width:48,padding:"3px 5px",fontSize:12,textAlign:"center",borderRadius:8}),marginLeft:"auto"}}/>
                        <span style={{fontSize:11}}>粒</span>
                      </label>
                    ))}
                  </div>
                </div>
                {[["🟡 即将不足",lowC,T.warnBg,T.warnBorder,T.warn],["🔴 不足",critC,T.dangerBg,T.dangerBorder,T.danger]].map(([title,colors,bg,bd])=>(
                  <div key={title} className="tt" style={{background:bg,border:`1.5px solid ${bd}`,borderRadius:24,padding:"16px",marginBottom:14}}>
                    <div style={{fontSize:13,fontWeight:800,marginBottom:10,display:"flex",alignItems:"center",gap:8,color:T.text}}>
                      {title}<span style={{background:tn==="night"?"rgba(255,255,255,0.06)":"rgba(255,255,255,0.85)",borderRadius:50,padding:"2px 12px",fontSize:11,color:T.textMid,fontWeight:600}}>{colors.length} 个</span>
                    </div>
                    {colors.length===0?<div style={{textAlign:"center",color:T.textLight,fontSize:13,padding:"10px 0"}}>暂无 ✨</div>
                      :<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                        {colors.map(c=><StockCard key={c.id} c={c} compact={true} isSel={sel.has(c.id)} {...cardProps}/>)}
                      </div>
                    }
                  </div>
                ))}
                <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"18px",marginBottom:14,boxShadow:T.cardShadow}}>
                  <div style={{fontSize:14,fontWeight:800,marginBottom:14,color:T.text}}>📊 色系消耗 Top5</div>
                  {top5.length===0?<div style={{textAlign:"center",color:T.textLight,fontSize:13,padding:"16px 0"}}>✨ 更新库存后自动统计</div>
                    :top5.map(({s,total},i)=>(
                      <div key={s} onClick={()=>goS(s)} style={{marginBottom:12,cursor:"pointer"}}>
                        <div style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:5,fontWeight:700}}>
                          <span style={{color:T.accent}}>{s} 系列</span>
                          <span style={{color:T.textMid,fontWeight:400}}>{Math.round(total)} 粒</span>
                        </div>
                        <div style={{background:T.barBg,borderRadius:20,height:10,overflow:"hidden"}}>
                          <div style={{width:`${(total/maxU)*100}%`,height:"100%",borderRadius:20,background:T.bars[i],transition:"width 0.5s"}}/>
                        </div>
                      </div>
                    ))
                  }
                  {top5.length>0&&<div style={{fontSize:11,color:T.textLight,textAlign:"right",marginTop:6}}>点击查看系列详情 →</div>}
                </div>
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
            <div className="tt" style={{textAlign:"center",padding:"10px 0 24px",fontSize:10,color:T.textLight,fontWeight:600,letterSpacing:0.3}}>
              由 大橘来啦（v：daju_laila）制作 · 禁私售
            </div>
          </>}

          {/* 作品页 */}
          {page==="works"&&<WorksPage T={T} tn={tn} user={user} isPro={isPro} onUpgrade={()=>setShowUpgrade(true)} stock={stock} used={used} resetKey={resetKey} onDeductStock={deductStock} tasks={tasks} setTasks={setTasks} tasksLoaded={tasksLoaded} onPushHistory={(t)=>pushHistory(stock,used,t)}/>}

          {/* 我的页 */}
          {page==="mine"&&<MinePage T={T} tn={tn} user={user} isPro={isPro} onUpgrade={()=>setShowUpgrade(true)} onLogout={handleLogout} onExport={exportData} onImport={()=>importRef.current?.click()}/>}

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
                <button className="btn" onClick={()=>{if(!isPro&&freeAiUsed>=FREE_AI_LIMIT){setShowUpgrade(true);return;}imgRef.current?.click();}} disabled={imgLoading}
                  style={{padding:"5px 12px",borderRadius:50,border:`1.5px solid ${T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,background:T.accentSoft,color:T.accent,whiteSpace:"nowrap",position:"relative"}}>
                  {imgLoading?"识别中…":"📷 识图"}
                  {!isPro&&<span style={{position:"absolute",top:-5,right:-5,fontSize:9,background:"#ffd166",color:"#7a5000",borderRadius:50,padding:"1px 4px",fontWeight:900}}>{Math.max(0,FREE_AI_LIMIT-freeAiUsed)}次</span>}
                </button>
                <input ref={imgRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleImg}/>
              </div>
              {!isPro&&<div style={{fontSize:10,color:T.textLight,fontWeight:700,marginTop:-2}}>免费版剩余 AI 识图 {Math.max(0,FREE_AI_LIMIT-freeAiUsed)} 次，Pro 无限次</div>}
              <textarea value={cmdText} onChange={e=>{setCmdText(e.target.value);setCmdErr("");}}
                placeholder={"A15-200, B3+500, 全部-100"}
                rows={2}
                style={{...inp({width:"100%",padding:"8px 12px",fontSize:13,resize:"none",lineHeight:1.6,boxSizing:"border-box"})}}/>
            </div>

            {cmdErr&&<div style={{fontSize:11,color:T.danger,fontWeight:600}}>{cmdErr}</div>}
            {imgErr&&<div style={{fontSize:11,color:T.danger,fontWeight:600}}>{imgErr}</div>}

            <div style={{display:"flex",gap:8,marginTop:2}}>
              <button className="btn" onClick={exitBatch} style={{...inp({flex:1,padding:"10px 0",borderRadius:50,cursor:"pointer",fontSize:13,color:T.textMid,fontWeight:700})}}>取消</button>
              <button className="btn" onClick={cmdTags.length>0?openTagLinkFlow:applyCmd}
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
                    style={{width:"100%",border:`1.5px solid ${T.border}`,borderRadius:14,padding:"10px 12px",fontSize:13,fontFamily:"'Nunito',sans-serif",background:T.bg,color:T.text,outline:"none",boxSizing:"border-box",marginBottom:12}}/>
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
        <div className="tt" style={{flexShrink:0,background:T.nav,borderTop:`1.5px solid ${T.navBorder}`,display:"flex",justifyContent:"space-around",padding:"10px 0 20px",zIndex:200}}>
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
function getSimilarColors(targetId,stock,count=6){
  const target=ALL_COLORS.find(c=>c.id===targetId);
  if(!target)return[];
  const series=targetId.match(/^[A-Za-z]+/)[0].toUpperCase();
  const withDist=ALL_COLORS
    .filter(c=>c.id!==targetId)
    .map(c=>({...c,dist:colorDistance(target.hex,c.hex),qty:stock[c.id]||0,sameSeries:c.id.startsWith(series)}));
  // 同色系优先，同色系内按距离排，再补跨色系
  const same=withDist.filter(c=>c.sameSeries).sort((a,b)=>a.dist-b.dist);
  const other=withDist.filter(c=>!c.sameSeries).sort((a,b)=>a.dist-b.dist);
  return [...same,...other].slice(0,count);
}

// ══════════════════════════════════
//  MissingColorPage（缺色替换）
// ══════════════════════════════════
function MissingColorPage({T,stock,onBack}){
  const [step,setStep]=useState("upload"); // upload → result → replace
  const [imgSrc,setImgSrc]=useState(null);
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState("");
  // parsed: [{id,need}]
  const [parsed,setParsed]=useState([]);
  // replaces: {colorId: replacementId|null}
  const [replaces,setReplaces]=useState({});
  // 展开推荐的色号
  const [expanded,setExpanded]=useState({});
  const fileRef=useRef(null);

  function handleFile(e){
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();
    r.onload=ev=>setImgSrc(ev.target.result);
    r.readAsDataURL(f);
    e.target.value="";
  }

  async function recognize(){
    if(!imgSrc)return;
    setLoading(true);setErr("");
    try{
      const resp=await fetch('/api/qwen',{
        method:'POST',headers:{'Content-Type':'application/json'},
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
          // 只保留库存不足的
          const missing=items.filter(i=>(stock[i.id]||0)<i.need);
          if(missing.length>0){setParsed(missing);setStep("result");}
          else{
            // 全部库存足够
            setParsed(items);setStep("result");
          }
        }else{setErr("识别失败，建议截图只保留色块统计区再试～");}
      }else{setErr("识别失败，建议截图只保留色块统计区再试～");}
    }catch(e){setErr("请求失败："+e.message);}
    finally{setLoading(false);}
  }

  // 选择替代色
  function pickReplace(originalId,replaceId){
    setReplaces(prev=>({...prev,[originalId]:replaceId}));
    setExpanded(prev=>({...prev,[originalId]:false}));
  }

  const missingItems=parsed.filter(i=>(stock[i.id]||0)<i.need);
  const okItems=parsed.filter(i=>(stock[i.id]||0)>=i.need);

  return(
    <div className="fade" style={{padding:"18px 16px",fontFamily:"'Nunito',sans-serif"}}>
      {/* 顶部 */}
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
        <button onClick={onBack} style={{background:"none",border:"none",fontSize:22,color:T.textMid,cursor:"pointer"}}>←</button>
        <div style={{fontSize:15,fontWeight:800,color:T.text}}>🔍 缺色替换</div>
      </div>

      {/* Step1：上传 */}
      {step==="upload"&&(
        <div>
          {!imgSrc?(
            <div onClick={()=>fileRef.current?.click()} style={{background:T.accentSoft,border:`2px dashed ${T.accent}`,borderRadius:22,padding:"36px 20px",textAlign:"center",cursor:"pointer",marginBottom:16}}>
              <div style={{fontSize:40,marginBottom:10}}>📷</div>
              <div style={{fontSize:14,fontWeight:800,color:T.accent}}>点击上传图纸</div>
              <div style={{fontSize:11,color:T.textMid,marginTop:6,lineHeight:1.7}}>建议截取图纸下方<br/>「色块统计区」识别更准确</div>
            </div>
          ):(
            <div style={{marginBottom:16}}>
              <img src={imgSrc} style={{width:"100%",borderRadius:16,marginBottom:12,maxHeight:300,objectFit:"contain",background:"#f0f0f0"}} alt=""/>
              <div style={{display:"flex",gap:8}}>
                <button onClick={()=>setImgSrc(null)} style={{flex:1,padding:"10px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>重新选图</button>
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

      {/* Step2：结果+替换 */}
      {step==="result"&&(
        <div>
          {/* 缺货项 */}
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
                    {/* 原色行 */}
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                      <div style={{width:36,height:36,borderRadius:10,background:origColor?.hex,border:"1.5px solid rgba(0,0,0,0.1)",flexShrink:0}}/>
                      <div style={{flex:1}}>
                        <div style={{fontSize:14,fontWeight:800,color:T.text}}>{item.id}</div>
                        <div style={{fontSize:11,color:T.warn,fontWeight:600}}>需要{item.need}粒 · 库存{have}粒 · 差{short}粒</div>
                      </div>
                      {!replaced&&<div style={{fontSize:10,background:T.warn,color:"#fff",borderRadius:6,padding:"2px 8px",fontWeight:700}}>缺货</div>}
                    </div>

                    {/* 已选替代色 */}
                    {replaced&&replacedColor&&(
                      <div style={{background:replacedOk?"#f0faf0":"#fff8ed",borderRadius:12,padding:"10px 12px",marginBottom:8}}>
                        <div style={{display:"flex",alignItems:"center",gap:8}}>
                          <div style={{fontSize:12,color:T.textMid,fontWeight:600}}>→ 替换为</div>
                          <div style={{width:24,height:24,borderRadius:7,background:replacedColor.hex,border:"1.5px solid rgba(0,0,0,0.1)"}}/>
                          <div style={{flex:1,fontSize:13,fontWeight:800,color:T.text}}>{replaced}</div>
                          <div style={{fontSize:11,fontWeight:700,color:replacedOk?"#4caf50":"#f5a623"}}>
                            {replacedOk?`✅ 库存${replacedHave}粒够用`:`⚠️ 库存${replacedHave}粒 差${item.need-replacedHave}粒`}
                          </div>
                        </div>
                        <button onClick={()=>setReplaces(prev=>{const n={...prev};delete n[item.id];return n;})}
                          style={{marginTop:8,background:"none",border:"none",fontSize:11,color:T.textLight,cursor:"pointer",padding:0,fontFamily:"'Nunito',sans-serif"}}>✕ 取消选择</button>
                      </div>
                    )}

                    {/* 推荐相近色 */}
                    {!replaced&&(
                      <div>
                        <div style={{fontSize:11,color:T.textMid,fontWeight:600,marginBottom:8}}>推荐相近色：</div>
                        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
                          {(isExpanded?similar:similar.slice(0,3)).map(c=>{
                            const enough=c.qty>=item.need;
                            return(
                              <div key={c.id} onClick={()=>pickReplace(item.id,c.id)}
                                style={{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",borderRadius:12,border:`1.5px solid ${enough?"#b6eab6":"#fde5b0"}`,background:enough?"#f0faf0":"#fff8ed",cursor:"pointer"}}>
                                <div style={{width:20,height:20,borderRadius:6,background:c.hex,border:"1px solid rgba(0,0,0,0.1)",flexShrink:0}}/>
                                <div>
                                  <div style={{fontSize:12,fontWeight:800,color:T.text}}>{c.id}</div>
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

          {/* 库存充足项 */}
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
                      <div style={{fontSize:10,color:"#4caf50",fontWeight:600}}>{stock[item.id]}粒</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 底部按钮 */}
          <div style={{display:"flex",gap:10,marginTop:8}}>
            <button onClick={()=>{setStep("upload");setImgSrc(null);setParsed([]);setReplaces({});setExpanded({});setErr("");}}
              style={{flex:1,padding:"12px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer"}}>重新识别</button>
            {missingItems.length>0&&(
              <button onClick={()=>setStep("summary")}
                style={{flex:2,padding:"12px 0",borderRadius:50,border:"none",background:T.accent,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:800,cursor:"pointer"}}>查看替换方案 →</button>
            )}
          </div>
        </div>
      )}

      {/* Step3：最终方案 */}
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
            style={{width:"100%",padding:"12px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,cursor:"pointer",marginTop:8}}>← 返回修改</button>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════
//  FocusMode（专注模式全屏）
// ══════════════════════════════════
function WorksPage({T,tn,user,isPro,onUpgrade,stock,used,resetKey,onDeductStock,tasks,setTasks,tasksLoaded,onPushHistory}){
  const [view,setView]=useState("home");
  const [monthGoal,setMonthGoal]=useState(()=>{try{const s=localStorage.getItem('pindou_month_goal');return s?Number(s):5;}catch{return 5;}});
  const [showGoalEdit,setShowGoalEdit]=useState(false);
  const [goalInput,setGoalInput]=useState("");
  const [showAddModal,setShowAddModal]=useState(false);
  const [newName,setNewName]=useState("");
  const [newImg,setNewImg]=useState(null);
  const [pickerOpen,setPickerOpen]=useState(false);
  const [pickedId,setPickedId]=useState(null);
  const [flipAnimating,setFlipAnimating]=useState(false);
  const [showDoneList,setShowDoneList]=useState(false);
  const [showToolbox,setShowToolbox]=useState(false);
  const [pendingFinishId,setPendingFinishId]=useState(null);
  const [toolbox,setToolbox]=useState(()=>{try{const s=localStorage.getItem('pindou_toolbox');return s?JSON.parse(s):{
    boards:{"52×52":{qty:0,note:""},"78×78":{qty:0,note:""},"104×104":{qty:0,note:""}},
    needles:{"60针":{qty:0,note:""},"70针":{qty:0,note:""},"80针":{qty:0,note:""}},
    shovels:{"6道":{qty:0,note:""},"7道":{qty:0,note:""},"10道":{qty:0,note:""},"12道":{qty:0,note:""},"15道":{qty:0,note:""}},
    devices:{'熨斗':{owned:false,note:""},'烫画机':{owned:false,note:""},'打孔器':{owned:false,note:""}},
    supplies:{'钥匙扣':{qty:0,note:""},'澡巾':{qty:0,note:""},'挂件':{qty:0,note:""},'烘焙布':{qty:0,note:""},'烫纸':{qty:0,note:""}}
  }}catch{return {
    boards:{"52×52":{qty:0,note:""},"78×78":{qty:0,note:""},"104×104":{qty:0,note:""}},
    needles:{"60针":{qty:0,note:""},"70针":{qty:0,note:""},"80针":{qty:0,note:""}},
    shovels:{"6道":{qty:0,note:""},"7道":{qty:0,note:""},"10道":{qty:0,note:""},"12道":{qty:0,note:""},"15道":{qty:0,note:""}},
    devices:{'熨斗':{owned:false,note:""},'烫画机':{owned:false,note:""},'打孔器':{owned:false,note:""}},
    supplies:{'钥匙扣':{qty:0,note:""},'澡巾':{qty:0,note:""},'挂件':{qty:0,note:""},'烘焙布':{qty:0,note:""},'烫纸':{qty:0,note:""}}
  }}}); 
  const [toolOpen,setToolOpen]=useState({boards:true,needles:false,shovels:false,devices:false,supplies:false});
  const newImgRef=useRef(null);
  const [longPressId,setLongPressId]=useState(null);
  const longPressTimer=useRef(null);

  const now=new Date();
  const thisMonth=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  const doneThisMonth=tasks.filter(t=>t.doneDate?.startsWith(thisMonth));
  const doneTasks=tasks.filter(t=>t.status==="done");
  const progress=monthGoal>0?Math.min(doneThisMonth.length/monthGoal,1):0;
  useEffect(()=>{
    try{localStorage.setItem('pindou_toolbox',JSON.stringify(toolbox));}catch{}
  },[toolbox]);
  const [,setTimerTick]=useState(0);
  useEffect(()=>{const id=setInterval(()=>setTimerTick(v=>v+1),1000);return()=>clearInterval(id);},[]);

  function openAddModal(){setNewName("");setNewImg(null);setShowAddModal(true);}
  function closeAddModal(){setShowAddModal(false);}

  function updateToolQty(group,key,delta){
    setToolbox(prev=>{
      const cur=prev[group][key]||{qty:0,note:""};
      return {...prev,[group]:{...prev[group],[key]:{...cur,qty:Math.max(0,(cur.qty||0)+delta)}}};
    });
  }
  function updateToolNote(group,key,val){
    setToolbox(prev=>{
      const cur=prev[group][key]||{qty:0,note:""};
      return {...prev,[group]:{...prev[group],[key]:{...cur,note:val}}};
    });
  }
  function toggleToolOwned(key){
    setToolbox(prev=>{
      const cur=prev.devices[key]||{owned:false,note:""};
      return {...prev,devices:{...prev.devices,[key]:{...cur,owned:!cur.owned}}};
    });
  }

  function saveNewTask(){
    if(!newName.trim())return;
    const t={id:Date.now(),name:newName.trim(),img:newImg,colorData:[],status:"todo",createdAt:new Date().toISOString(),doneDate:null,elapsedMs:0,startedAt:null};
    setTasks(prev=>[t,...prev]);
    closeAddModal();
  }

  function handleNewImg(e){
    const f=e.target.files[0];if(!f)return;
    const r=new FileReader();r.onload=ev=>setNewImg(ev.target.result);r.readAsDataURL(f);
    e.target.value="";
  }

  function deleteTask(id){setTasks(prev=>prev.filter(t=>t.id!==id));setLongPressId(null);}
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

    if(deduct&&task.colorData&&task.colorData.length>0){
      task.colorData.forEach(c=>{
        if(c?.id&&c?.count>0)onDeductStock(c.id,c.count);
      });
    }

    setTasks(prev=>prev.map(t=>t.id===id?{...t,status:"done",doneDate:new Date().toISOString(),elapsedMs:total,startedAt:null}:t));
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
                  style={{width:"100%",border:`1.5px solid ${T.border}`,borderRadius:14,padding:"12px 16px",fontSize:14,fontFamily:"'Nunito',sans-serif",background:T.bg,color:T.text,outline:"none",boxSizing:"border-box",marginBottom:14}}/>
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
              <div style={{fontSize:12,color:T.textMid}}>「{tasks.find(t=>t.id===longPressId)?.name}」删除后无法恢复</div>
            </div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setLongPressId(null)} style={{flex:1,padding:"12px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:700,cursor:"pointer"}}>取消</button>
              <button onClick={()=>deleteTask(longPressId)} style={{flex:1,padding:"12px 0",borderRadius:50,border:"none",background:T.danger,color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:800,cursor:"pointer"}}>删除</button>
            </div>
          </div>
        </div>
      )}

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
      <div style={{padding:"16px 16px 0",display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        <div className="cc" onClick={()=>{if(!isPro){onUpgrade();return;}setView("missing");}}
          style={{background:T.card,borderRadius:20,padding:"16px 14px",boxShadow:T.cardShadow,cursor:"pointer",border:`1.5px solid ${T.border}`,display:"flex",gap:12,alignItems:"center"}}>
          <div style={{width:40,height:40,borderRadius:12,background:`linear-gradient(135deg,${T.accentSoft},${T.accentLight})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>🔍</div>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{fontSize:13,fontWeight:900,color:T.text}}>缺色替换</div>{!isPro&&<span style={{fontSize:9,background:"linear-gradient(90deg,#ffd166,#ffb347)",color:"#7a4000",borderRadius:50,padding:"1px 6px",fontWeight:900}}>Pro</span>}</div>
            <div style={{fontSize:10,color:T.textMid,marginTop:2,lineHeight:1.4}}>找库存替代色</div>
          </div>
        </div>
        <div className="cc" onClick={()=>{if(!isPro){onUpgrade();return;}setView("diary");}}
          style={{background:T.card,borderRadius:20,padding:"16px 14px",boxShadow:T.cardShadow,cursor:"pointer",border:`1.5px solid ${T.border}`,display:"flex",gap:12,alignItems:"center"}}>
          <div style={{width:40,height:40,borderRadius:12,background:"linear-gradient(135deg,#fff0f8,#ffd6ee)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>📖</div>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{fontSize:13,fontWeight:900,color:T.text}}>拼豆日记</div>{!isPro&&<span style={{fontSize:9,background:"linear-gradient(90deg,#ffd166,#ffb347)",color:"#7a4000",borderRadius:50,padding:"1px 6px",fontWeight:900}}>Pro</span>}</div>
            <div style={{fontSize:10,color:T.textMid,marginTop:2,lineHeight:1.4}}>记录拼豆时光</div>
          </div>
        </div>
      </div>

      {/* 即将出炉 */}
      <div style={{padding:"16px 16px 0"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,gap:10}}>
          <div style={{fontSize:13,fontWeight:800,color:T.text}}>🍞 即将出炉</div>
          <div style={{display:"flex",gap:6,alignItems:"center",justifyContent:"flex-end",flexShrink:0}}>
            <button onClick={()=>{pickOne();setPickerOpen(true);}} style={{padding:"5px 10px",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,cursor:"pointer",whiteSpace:"nowrap"}}>🎩 翻一翻</button>
            <button onClick={()=>{if(!isPro){onUpgrade();return;}setShowToolbox(true);}} style={{padding:"5px 10px",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,cursor:"pointer",whiteSpace:"nowrap"}}>{isPro?"🧰 工具箱":"🧰 工具箱 · Pro"}</button>
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


        {showToolbox&&(
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:1200,display:"flex",alignItems:"flex-end",justifyContent:"center"}}
            onClick={()=>setShowToolbox(false)}>
            <div onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:480,maxHeight:"85vh",background:T.card,borderRadius:"24px 24px 0 0",overflow:"hidden",display:"flex",flexDirection:"column"}}>
              <div style={{padding:"16px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${T.border}`}}>
                <div style={{fontSize:15,fontWeight:900,color:T.text}}>🧰 工具箱</div>
                <button onClick={()=>setShowToolbox(false)} style={{background:"none",border:"none",fontSize:18,color:T.textMid,cursor:"pointer"}}>✕</button>
              </div>
              <div style={{padding:"14px 16px 24px",overflowY:"auto"}}>

                {[
                  ["boards","豆板",toolbox.boards],
                  ["needles","豆针",toolbox.needles],
                  ["shovels","豆铲",toolbox.shovels],
                ].map(([group,title,items])=>(
                  <div key={group} style={{background:T.bg,border:`1.5px solid ${T.border}`,borderRadius:18,padding:"12px 12px 8px",marginBottom:12}}>
                    <div onClick={()=>setToolOpen(v=>({...v,[group]:!v[group]}))} style={{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",marginBottom:toolOpen[group]?10:0}}>
                      <div style={{fontSize:13,fontWeight:900,color:T.text}}>{title}</div>
                      <div style={{fontSize:14,color:T.textMid}}>{toolOpen[group]?"▾":"▸"}</div>
                    </div>
                    {toolOpen[group]&&Object.entries(items).map(([key,val])=>(
                      <div key={key} style={{padding:"10px 0",borderTop:`1px dashed ${T.border}`}}>
                        <div style={{fontSize:12,fontWeight:800,color:T.text,marginBottom:8}}>{key}</div>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                          <button onClick={()=>updateToolQty(group,key,-1)} style={{width:28,height:28,borderRadius:"50%",border:`1.5px solid ${T.border}`,background:T.card,cursor:"pointer"}}>－</button>
                          <div style={{minWidth:34,textAlign:"center",fontSize:13,fontWeight:900,color:T.text}}>{val.qty||0}</div>
                          <button onClick={()=>updateToolQty(group,key,1)} style={{width:28,height:28,borderRadius:"50%",border:"none",background:T.accent,color:"#fff",cursor:"pointer"}}>＋</button>
                        </div>
                        <input value={val.note||""} onChange={e=>updateToolNote(group,key,e.target.value)} placeholder="备注，比如：2块A店买的，2块B店买的"
                          style={{width:"100%",border:`1.5px solid ${T.border}`,borderRadius:12,padding:"9px 12px",fontSize:12,fontFamily:"'Nunito',sans-serif",background:T.card,color:T.text,outline:"none",boxSizing:"border-box"}}/>
                      </div>
                    ))}
                  </div>
                ))}

                <div style={{background:T.bg,border:`1.5px solid ${T.border}`,borderRadius:18,padding:"12px 12px 8px",marginBottom:12}}>
                  <div onClick={()=>setToolOpen(v=>({...v,devices:!v.devices}))} style={{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",marginBottom:toolOpen.devices?10:0}}>
                    <div style={{fontSize:13,fontWeight:900,color:T.text}}>固定设备</div>
                    <div style={{fontSize:14,color:T.textMid}}>{toolOpen.devices?"▾":"▸"}</div>
                  </div>
                  {toolOpen.devices&&Object.entries(toolbox.devices).map(([key,val])=>(
                    <div key={key} style={{padding:"10px 0",borderTop:`1px dashed ${T.border}`}}>
                      <div style={{fontSize:12,fontWeight:800,color:T.text,marginBottom:8}}>{key}</div>
                      <button onClick={()=>toggleToolOwned(key)} style={{padding:"8px 14px",borderRadius:50,border:`1.5px solid ${val.owned?T.accent:T.border}`,background:val.owned?T.accentSoft:T.card,color:val.owned?T.accent:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:"pointer",marginBottom:8}}>
                        {val.owned?"已拥有":"未拥有"}
                      </button>
                      <input value={val.note||""} onChange={e=>updateToolNote('devices',key,e.target.value)} placeholder="备注"
                        style={{width:"100%",border:`1.5px solid ${T.border}`,borderRadius:12,padding:"9px 12px",fontSize:12,fontFamily:"'Nunito',sans-serif",background:T.card,color:T.text,outline:"none",boxSizing:"border-box"}}/>
                    </div>
                  ))}
                </div>

                <div style={{background:T.bg,border:`1.5px solid ${T.border}`,borderRadius:18,padding:"12px 12px 8px",marginBottom:12}}>
                  <div onClick={()=>setToolOpen(v=>({...v,supplies:!v.supplies}))} style={{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer",marginBottom:toolOpen.supplies?10:0}}>
                    <div style={{fontSize:13,fontWeight:900,color:T.text}}>配件 / 耗材</div>
                    <div style={{fontSize:14,color:T.textMid}}>{toolOpen.supplies?"▾":"▸"}</div>
                  </div>
                  {toolOpen.supplies&&Object.entries(toolbox.supplies).map(([key,val])=>(
                    <div key={key} style={{padding:"10px 0",borderTop:`1px dashed ${T.border}`}}>
                      <div style={{fontSize:12,fontWeight:800,color:T.text,marginBottom:8}}>{key}</div>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                        <button onClick={()=>updateToolQty('supplies',key,-1)} style={{width:28,height:28,borderRadius:"50%",border:`1.5px solid ${T.border}`,background:T.card,cursor:"pointer"}}>－</button>
                        <div style={{minWidth:34,textAlign:"center",fontSize:13,fontWeight:900,color:T.text}}>{val.qty||0}</div>
                        <button onClick={()=>updateToolQty('supplies',key,1)} style={{width:28,height:28,borderRadius:"50%",border:"none",background:T.accent,color:"#fff",cursor:"pointer"}}>＋</button>
                      </div>
                      <input value={val.note||""} onChange={e=>updateToolNote('supplies',key,e.target.value)} placeholder="备注"
                        style={{width:"100%",border:`1.5px solid ${T.border}`,borderRadius:12,padding:"9px 12px",fontSize:12,fontFamily:"'Nunito',sans-serif",background:T.card,color:T.text,outline:"none",boxSizing:"border-box"}}/>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}

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
            <div style={{fontSize:12,fontWeight:800,color:T.textMid,marginBottom:10}}>✅ 已完成</div>
            {doneTasks.map(task=>{
              const elapsed=formatElapsed(task.elapsedMs||0);
              return(
              <div key={`done-${task.id}`} style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:22,padding:"12px",marginBottom:12,boxShadow:T.cardShadow,display:"flex",gap:12,alignItems:"stretch",opacity:0.96}}>
                <div
                  onClick={()=>{
                    const inp=document.createElement('input');
                    inp.type='file';inp.accept='image/*';
                    inp.onchange=e=>{
                      const f=e.target.files[0];if(!f)return;
                      const r=new FileReader();
                      r.onload=ev=>{
                        const img=new Image();
                        img.onload=()=>{
                          const canvas=document.createElement('canvas');
                          const max=300;
                          let w=img.width,h=img.height;
                          if(w>h){if(w>max){h=Math.round(h*max/w);w=max;}}
                          else{if(h>max){w=Math.round(w*max/h);h=max;}}
                          canvas.width=w;canvas.height=h;
                          canvas.getContext('2d').drawImage(img,0,0,w,h);
                          const compressed=canvas.toDataURL('image/jpeg',0.7);
                          setTasks(prev=>prev.map(t=>t.id===task.id?{...t,img:compressed}:t));
                        };
                        img.src=ev.target.result;
                      };
                      r.readAsDataURL(f);
                    };
                    inp.click();
                  }}
                  style={{width:80,height:80,borderRadius:16,background:T.accentSoft,overflow:"hidden",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,cursor:"pointer",position:"relative"}}>
                  {task.img?<img src={task.img} style={{width:"100%",height:"100%",objectFit:"cover"}} alt=""/>:"🖼️"}
                  <div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.0)",display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:4,opacity:1}}>
                    <div style={{fontSize:9,color:"rgba(255,255,255,0.85)",background:"rgba(0,0,0,0.32)",borderRadius:6,padding:"1px 6px",fontWeight:700,fontFamily:"'Nunito',sans-serif"}}>换封面</div>
                  </div>
                </div>
                <div style={{flex:1,minWidth:0,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                  <div>
                    <div style={{fontSize:14,fontWeight:800,color:T.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginBottom:8}}>{task.name}</div>
                    <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                      <div style={{padding:"4px 10px",borderRadius:12,background:"#f0fff4",border:"1.5px solid #bfe9c6",fontSize:10,fontWeight:800,color:"#4caf50"}}>已完成</div>
                      <div style={{fontSize:11,color:T.textMid,fontWeight:800}}>用时 {elapsed}</div>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:8,marginTop:10}}>
                    <button onClick={()=>restoreTask(task.id)} style={{flex:1,padding:"9px 0",borderRadius:50,border:`1.5px solid ${T.border}`,background:T.card,color:T.textMid,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:800,cursor:"pointer"}}>↩ 恢复</button>
                    <button onClick={()=>deleteTask(task.id)} style={{flex:1,padding:"9px 0",borderRadius:50,border:"none",background:T.dangerBg,color:T.danger,fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:900,cursor:"pointer"}}>删除</button>
                  </div>
                </div>
              </div>
            )})}
          </div>
        )}
      </div>

    </div>
  );
}

// ══════════════════════════════════
//  MinePage（我的页）
// ══════════════════════════════════
function MinePage({T,tn,user,isPro,onUpgrade,onLogout,onExport,onImport}){
  const joinDate=user?.created_at?new Date(user.created_at).toLocaleDateString('zh-CN'):"未知";
  const [nickname,setNickname]=useState(()=>localStorage.getItem('pindou_nickname')||"");
  const [avatar,setAvatar]=useState(()=>localStorage.getItem('pindou_avatar')||"");
  const [editingName,setEditingName]=useState(false);
  const [nameInput,setNameInput]=useState("");
  const avatarRef=useRef(null);

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
      <div style={{background:`linear-gradient(135deg,${T.accentSoft} 0%,#f5f0ff 100%)`,padding:"32px 20px 24px",display:"flex",flexDirection:"column",alignItems:"center"}}>
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
      </div>

      <div style={{padding:"16px 16px 0"}}>
        {/* 升级/Pro状态 — 放在最上面 */}
        {!isPro&&(
          <div className="cc" onClick={onUpgrade} style={{background:`linear-gradient(135deg,#fff8ec,#f5f0ff)`,border:`1.5px solid #ffd166`,borderRadius:20,padding:"16px",marginBottom:12,cursor:"pointer",boxShadow:"0 4px 16px rgba(255,209,102,0.2)"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <div style={{fontSize:13,fontWeight:900,color:"#b87c00",marginBottom:4}}>🌟 升级 Pro</div>
                <div style={{fontSize:11,color:"#9a6a00",lineHeight:1.6}}>解锁工具箱、AI识图<br/>和云同步功能</div>
              </div>
              <div style={{background:"linear-gradient(135deg,#ffd166,#ffb347)",borderRadius:14,padding:"8px 14px",fontSize:12,fontWeight:800,color:"#fff",boxShadow:"0 2px 8px rgba(255,180,70,0.4)"}}>查看 ›</div>
            </div>
          </div>
        )}
        {isPro&&(
          <div style={{background:"linear-gradient(135deg,#fff8ec,#f5f0ff)",border:"1.5px solid #ffd166",borderRadius:20,padding:"14px 16px",marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:800,color:"#b87c00"}}>✦ Pro 会员</div>
            <div style={{fontSize:11,color:"#9a6a00",marginTop:3}}>全功能已解锁，享受拼豆乐趣～</div>
          </div>
        )}

        {/* 数据管理 */}
        <div style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:20,padding:"16px",marginBottom:12,boxShadow:T.cardShadow}}>
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
        <div style={{textAlign:"center",marginTop:20,fontSize:10,color:T.textLight,fontWeight:600,letterSpacing:0.3}}>
          由 大橘来啦（v：daju_laila）制作 · 禁私售
        </div>
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

const LOVE_WORDS=["豆豆们今天有没有乖乖待在格子里 🟡","库存充足，拼图安心 ✨","记得定期更新库存哦～","豆子虽小，作品不小 💛","认真管理的你最可爱了","今天拼了几粒？快来记录一下","库存快不足了？快补货！","每一粒豆子都有它的位置 🌟","拼豆人最有耐心了","快去拼一张吧，加油！🎨"];

function FoxBtn({T,tn}){
  const [msg,setMsg]=useState(null);const [vis,setVis]=useState(false);const [bounce,setBounce]=useState(false);const [sparkle,setSparkle]=useState(false);
  function handleClick(){const w=LOVE_WORDS[Math.floor(Math.random()*LOVE_WORDS.length)];setMsg(w);setVis(true);setBounce(true);setSparkle(true);setTimeout(()=>setBounce(false),350);setTimeout(()=>setSparkle(false),800);setTimeout(()=>setVis(false),3200);}
  return(
    <div style={{position:"relative",display:"inline-flex",alignItems:"center"}}>
      {vis&&<div style={{position:"absolute",left:58,top:"50%",transform:"translateY(-50%)",background:tn==="sky"?"#ffffff":"#1e3352",border:`1.5px solid ${T.border}`,borderRadius:18,padding:"9px 16px",fontSize:12,fontWeight:700,color:T.text,whiteSpace:"nowrap",boxShadow:T.cardShadow,zIndex:999,animation:"popIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both"}}>
        <style>{`@keyframes popIn{from{opacity:0;transform:translateY(-50%) scale(0.7);}to{opacity:1;transform:translateY(-50%) scale(1);}}`}</style>
        <div style={{position:"absolute",left:-7,top:"50%",transform:"translateY(-50%)",width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderRight:`7px solid ${T.border}`}}/>
        <div style={{position:"absolute",left:-5,top:"50%",transform:"translateY(-50%)",width:0,height:0,borderTop:"5px solid transparent",borderBottom:"5px solid transparent",borderRight:`6px solid ${tn==="sky"?"#ffffff":"#1e3352"}`}}/>
        {msg}
      </div>}
      {sparkle&&<div style={{position:"absolute",left:14,top:-10,fontSize:13,animation:"floatUp 0.8s ease both",zIndex:998,pointerEvents:"none"}}>
        <style>{`@keyframes floatUp{from{opacity:1;transform:translateY(0) scale(1);}to{opacity:0;transform:translateY(-28px) scale(1.4);}}`}</style>✨
      </div>}
      <div onClick={handleClick} style={{cursor:"pointer",userSelect:"none",transform:bounce?"scale(0.82)":"scale(1)",transition:"transform 0.25s cubic-bezier(0.34,1.56,0.64,1)"}}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 大豆子 中间 */}
          <circle cx="22" cy="22" r="11" fill={tn==="sky"?"#FFD700":"#FFB800"}/>
          <circle cx="22" cy="22" r="11" fill="url(#beadGrad)" />
          <circle cx="18" cy="18" r="3.5" fill="rgba(255,255,255,0.35)"/>
          {/* 小豆子 右上 */}
          <circle cx="35" cy="12" r="6" fill={tn==="sky"?"#FFB347":"#FF9900"}/>
          <circle cx="35" cy="12" r="6" fill="url(#beadGrad2)"/>
          <circle cx="33" cy="10" r="2" fill="rgba(255,255,255,0.3)"/>
          {/* 小豆子 左下 */}
          <circle cx="10" cy="34" r="5" fill={tn==="sky"?"#FFEAA0":"#FFD060"}/>
          <circle cx="10" cy="34" r="5" fill="url(#beadGrad3)"/>
          <circle cx="9" cy="33" r="1.5" fill="rgba(255,255,255,0.35)"/>
          {/* 小豆子 左上 */}
          <circle cx="9" cy="11" r="4" fill={tn==="sky"?"#FFD700":"#FFB800"}/>
          <circle cx="9" cy="11" r="4" fill="url(#beadGrad)"/>
          <circle cx="8" cy="10" r="1.2" fill="rgba(255,255,255,0.3)"/>
          {/* 小豆子 右下 */}
          <circle cx="34" cy="34" r="4.5" fill={tn==="sky"?"#FFB347":"#FF9900"}/>
          <circle cx="34" cy="34" r="4.5" fill="url(#beadGrad2)"/>
          <circle cx="32.5" cy="32.5" r="1.5" fill="rgba(255,255,255,0.3)"/>
          <defs>
            <radialGradient id="beadGrad" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)"/>
              <stop offset="100%" stopColor="rgba(0,0,0,0.08)"/>
            </radialGradient>
            <radialGradient id="beadGrad2" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)"/>
              <stop offset="100%" stopColor="rgba(0,0,0,0.1)"/>
            </radialGradient>
            <radialGradient id="beadGrad3" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)"/>
              <stop offset="100%" stopColor="rgba(0,0,0,0.06)"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

