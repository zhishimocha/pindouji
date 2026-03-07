import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";

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

// ── 色卡组件（粒为主单位）──
const StockCard = React.memo(function StockCard({c,tn,T,stock,used,compact,batch,isSel,onToggleSel,onSave,wC,wL}){
  const beads=Math.round(stock[c.id]);
  const st=beads<wC?"c":beads<wL?"l":"ok";
  const col=st==="c"?T.danger:st==="l"?T.warn:T.text;
  const dk=isDark(c.hex);
  const [localB,setLocalB]=useState(String(beads));
  const inputRef=useRef(null);

  // 每次stock变化时同步localB（未在编辑时）
  const [editing,setEditing]=useState(false);
  useEffect(()=>{if(!editing)setLocalB(String(Math.round(stock[c.id])));},[stock[c.id],editing]);

  function startEdit(e){if(batch)return;e.stopPropagation();setLocalB(String(Math.round(stock[c.id])));setEditing(true);setTimeout(()=>inputRef.current&&inputRef.current.focus(),0);}
  function save(){const n=parseInt(localB);if(!isNaN(n)&&n>=0)onSave(c.id,n);setEditing(false);}
  function onKey(e){if(e.key==="Enter")save();if(e.key==="Escape")setEditing(false);}

  const gVal=(Math.round(stock[c.id])/100).toFixed(1).replace(/\.0$/,"");
  const pad=compact?"6px 8px":"10px 10px 10px";

  return(
    <div className="cc tt"
      onClick={batch?()=>onToggleSel(c.id):startEdit}
      style={{background:T.card,borderRadius:compact?16:20,overflow:"hidden",cursor:"pointer",
        border:isSel?`2.5px solid ${T.accent}`:st==="c"?`2px solid ${T.danger}`:st==="l"?`2px solid ${T.warn}`:`1.5px solid ${T.border}`,
        boxShadow:isSel?`0 0 0 3px ${T.accent}30`:T.cardShadow,
        transform:isSel?"scale(0.97)":"none"}}>
      <div style={{background:c.hex,height:compact?40:50,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
        {tn==="night"&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.2)"}}/>}
        <span style={{fontSize:compact?12:13,fontWeight:800,color:dk?"rgba(255,255,255,0.9)":"rgba(40,30,20,0.65)",position:"relative"}}>{c.id}</span>
        {batch&&<div style={{position:"absolute",right:8,width:20,height:20,borderRadius:"50%",background:isSel?T.accent:"rgba(255,255,255,0.8)",border:`2px solid ${isSel?T.accent:"rgba(200,200,200,0.9)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",fontWeight:800}}>{isSel?"✓":""}</div>}
      </div>
      {editing&&!batch
        ?<div style={{padding:pad,textAlign:"center"}} onClick={e=>e.stopPropagation()}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:4,marginBottom:2}}>
            <input ref={inputRef} value={localB} onChange={e=>setLocalB(e.target.value)} onBlur={save} onKeyDown={onKey}
              type="number" min="0"
              style={{width:68,textAlign:"center",fontSize:compact?14:16,fontWeight:800,padding:"4px 6px",border:`2px solid ${T.accent}`,borderRadius:10,fontFamily:"'Nunito',sans-serif",background:tn==="sky"?"#f8fbff":T.card,color:T.accent,outline:"none"}}/>
            <span style={{fontSize:11,color:T.textLight,fontWeight:700}}>粒</span>
          </div>
          <div style={{fontSize:10,color:T.textLight,marginTop:2}}>
            = {(parseInt(localB)||0)/100 % 1===0 ? (parseInt(localB)||0)/100 : ((parseInt(localB)||0)/100).toFixed(2)} g
          </div>
        </div>
        :<div style={{padding:pad,textAlign:"center"}}>
          <div style={{fontSize:compact?14:16,fontWeight:800,color:col}}>{beads} <span style={{fontSize:10,fontWeight:600}}>粒</span></div>
          <div style={{fontSize:compact?10:11,color:T.textMid,fontWeight:600,marginTop:1}}>{gVal} g</div>
          {!compact&&used[c.id]>0&&<div style={{fontSize:10,color:T.textLight,marginTop:1}}>已用 {Math.round(used[c.id])} 粒</div>}
        </div>
      }
    </div>
  );
});


export default function App(){
  const [tn,setTn]=useState("sky");
  const T=THEMES[tn];
  const [stock,setStock]=useState(INIT_STOCK);
  const [used,setUsed]=useState(INIT_USED);
  const [page,setPage]=useState("home");
  const [search,setSearch]=useState("");
  const [sort,setSort]=useState("id-asc");
  const [fSeries,setFSeries]=useState(null);

  const [wL,setWL]=useState(500);
  const [wC,setWC]=useState(200);
  const [batch,setBatch]=useState(false);
  const [sel,setSel]=useState(new Set());
  const [bAmt,setBAmt]=useState("");
  const [bDir,setBDir]=useState("-");

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
    const ns={...stock},nu={...used};
    sel.forEach(id=>{if(bDir==="-"){const d=Math.min(ns[id],amt);nu[id]+=d;ns[id]=Math.max(0,ns[id]-amt);}else{ns[id]+=amt;}});
    setStock(ns);setUsed(nu);setSel(new Set());setBAmt("");setBatch(false);
  }
  function exitBatch(){setBatch(false);setSel(new Set());setBAmt("");}






  const inp=(ex={})=>({fontFamily:"'Nunito',sans-serif",border:`1.5px solid ${T.border}`,borderRadius:12,background:tn==="sky"?"#f8fbff":T.card,color:T.text,outline:"none",...ex});

  const saveStock=useCallback((id,beads)=>{
    setStock(s=>{const d=(s[id]||0)-beads;if(d>0)setUsed(u=>({...u,[id]:(u[id]||0)+d}));return{...s,[id]:beads};});
  },[]);
  const cardProps={tn,T,stock,used,batch,onSave:saveStock,onToggleSel:toggleSel,wC,wL};

  return(
    <>
      <style>{G}</style>
      <div className="tt" style={{minHeight:"100vh",background:T.bg,fontFamily:"'Nunito',sans-serif",color:T.text,paddingBottom:88}}>
        <div style={{background:T.headerBg,borderBottom:`1.5px solid ${T.border}`,padding:"12px 18px",position:"sticky",top:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <FoxBtn T={T} tn={tn}/>
            <div>
              <div style={{fontSize:17,fontWeight:900,color:T.accent,letterSpacing:0.3}}>拼豆库存管家</div>
              <div style={{fontSize:10,color:T.textLight,fontWeight:600,marginTop:1}}>戳小狐狸 ✦</div>
            </div>
          </div>
          <button className="btn" onClick={()=>setTn(t=>t==="sky"?"night":"sky")} style={{padding:"7px 16px",borderRadius:50,border:`1.5px solid ${T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,color:T.accent,background:T.accentLight}}>{T.switchBtn}</button>
        </div>

        <div style={{maxWidth:640,margin:"0 auto",padding:"14px 14px 0"}}>

          {page==="home"&&<div className="fade">
            <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"16px",marginBottom:14,boxShadow:T.cardShadow}}>
              <div style={{fontSize:12,color:T.textLight,marginBottom:10,fontWeight:700,letterSpacing:0.5}}>⚙️ 补货阈值设定</div>
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
            {fSeries&&<div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
              <span style={{fontSize:13,color:T.accent,fontWeight:800}}>{fSeries} 系列</span>
              <button onClick={()=>setFSeries(null)} style={{...inp({fontSize:11,padding:"3px 12px",borderRadius:50,cursor:"pointer",color:T.textMid})}}>清除 ×</button>
            </div>}
            {batch&&<div style={{background:T.accentSoft,border:`1px solid ${T.border}`,borderRadius:14,padding:"10px 14px",marginBottom:12,fontSize:13,color:T.accent,fontWeight:700}}>🫧 点击色卡勾选{sel.size>0&&<span style={{marginLeft:8}}>· 已选 {sel.size} 个</span>}</div>}
            <div style={{fontSize:12,color:T.textLight,marginBottom:10,fontWeight:600}}>共 {filtered.length} 个色号 · 点击色卡编辑克/粒数</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {filtered.map(c=><StockCard key={c.id} c={c} compact={false} isSel={sel.has(c.id)} {...cardProps}/>)}
            </div>
          </div>}
