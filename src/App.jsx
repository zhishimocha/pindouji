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

// ── 色卡组件（点击弹菜单：改库存 / 扣用量）──
const StockCard = React.memo(function StockCard({c,tn,T,stock,used,compact,batch,isSel,onToggleSel,onSave,onDeduct,wC,wL}){
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

  function handleClick(e){if(batch){onToggleSel(c.id);return;}e.stopPropagation();setMode(m=>m===null?"menu":null);}
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
        border:isSel?`2.5px solid ${T.accent}`:st==="c"?`2px solid ${T.danger}`:st==="l"?`2px solid ${T.warn}`:`1.5px solid ${T.border}`,
        boxShadow:isSel?`0 0 0 3px ${T.accent}30`:mode==="menu"?`0 0 0 3px ${T.accent}40`:T.cardShadow,
        transform:isSel?"scale(0.97)":"none"}}>
      <div style={{background:c.hex,height:compact?40:50,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
        {tn==="night"&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.2)"}}/>}
        <span style={{fontSize:compact?12:13,fontWeight:800,color:dk?"rgba(255,255,255,0.9)":"rgba(40,30,20,0.65)",position:"relative"}}>{c.id}</span>
        {batch&&<div style={{position:"absolute",right:8,width:20,height:20,borderRadius:"50%",background:isSel?T.accent:"rgba(255,255,255,0.8)",border:`2px solid ${isSel?T.accent:"rgba(200,200,200,0.9)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",fontWeight:800}}>{isSel?"✓":""}</div>}
      </div>

      {/* 默认显示 */}
      {mode===null&&<div style={{padding:pad,textAlign:"center"}}>
        <div style={{fontSize:compact?14:16,fontWeight:800,color:col}}>{beads} <span style={{fontSize:10,fontWeight:600}}>粒</span></div>
        <div style={{fontSize:compact?10:11,color:T.textMid,fontWeight:600,marginTop:1}}>{gVal} g</div>
        {!compact&&used[c.id]>0&&<div style={{fontSize:10,color:T.textLight,marginTop:1}}>已用 {Math.round(used[c.id])} 粒</div>}
      </div>}

      {/* 菜单 */}
      {mode==="menu"&&<div style={{padding:"8px 6px",display:"flex",gap:5}} onClick={e=>e.stopPropagation()}>
        <button onClick={startEdit} style={{flex:1,padding:"7px 4px",borderRadius:10,border:`1.5px solid ${T.accent}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,background:T.accentLight,color:T.accent}}>✏️ 改库存</button>
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
  const [stock,setStock]=useState(()=>{
    try{const s=localStorage.getItem('pindou_stock');return s?JSON.parse(s):INIT_STOCK;}catch{return INIT_STOCK;}
  });
  const [used,setUsed]=useState(()=>{
    try{const u=localStorage.getItem('pindou_used');return u?JSON.parse(u):INIT_USED;}catch{return INIT_USED;}
  });
  const [page,setPage]=useState("home");
  useEffect(()=>{try{localStorage.setItem('pindou_stock',JSON.stringify(stock));}catch{}},[stock]);
  useEffect(()=>{try{localStorage.setItem('pindou_used',JSON.stringify(used));}catch{}},[used]);
  const [search,setSearch]=useState("");
  const [sort,setSort]=useState("id-asc");
  const [fSeries,setFSeries]=useState(null);

  const [wL,setWL]=useState(500);
  const [wC,setWC]=useState(200);
  const [history,setHistory]=useState([]); // [{stock,used}]
  const MAX_HISTORY=20;
  const [batch,setBatch]=useState(false);
  const [sel,setSel]=useState(new Set());
  const [bAmt,setBAmt]=useState("");
  const [bDir,setBDir]=useState("-");
  const [cmdText,setCmdText]=useState("");
  const [cmdErr,setCmdErr]=useState("");
  const [cmdTags,setCmdTags]=useState([]); // [{id,dir,amt}] 识图结果tag模式
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

  function pushHistory(s,u){setHistory(h=>[...h.slice(-MAX_HISTORY+1),{stock:{...s},used:{...u}}]);}

  const saveStock=useCallback((id,beads)=>{
    pushHistory(stock,used);
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
      return h.slice(0,-1);
    });
  }
  const [resetConfirm,setResetConfirm]=useState(false);
  function resetData(){
    if(!resetConfirm){setResetConfirm(true);setTimeout(()=>setResetConfirm(false),3000);return;}
    setStock(INIT_STOCK);setUsed(INIT_USED);setHistory([]);
    localStorage.removeItem('pindou_stock');localStorage.removeItem('pindou_used');
    setResetConfirm(false);
  }
  const cardProps={tn,T,stock,used,batch,onSave:saveStock,onDeduct:deductStock,onToggleSel:toggleSel,wC,wL};

  return(
    <>
      <style>{G}</style>
      <div className="tt" style={{minHeight:"100vh",background:T.bg,fontFamily:"'Nunito',sans-serif",color:T.text,paddingBottom:page==="diary"?0:88}}>

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
        {/* 顶部header在日记页隐藏 */}
        {page!=="diary"&&<div style={{background:T.headerBg,borderBottom:`1.5px solid ${T.border}`,padding:"12px 18px",position:"sticky",top:0,zIndex:100,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <FoxBtn T={T} tn={tn}/>
            <div>
              <div style={{fontSize:17,fontWeight:900,color:T.accent,letterSpacing:0.3}}>拼豆库存管家</div>
              <div style={{fontSize:10,color:T.textLight,fontWeight:600,marginTop:1}}>戳豆豆 ✦</div>
            </div>
          </div>
          <button className="btn" onClick={()=>setTn(t=>t==="sky"?"night":"sky")} style={{padding:"7px 16px",borderRadius:50,border:`1.5px solid ${T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,color:T.accent,background:T.accentLight}}>{T.switchBtn}</button>
        </div>}

        {page!=="diary"&&<div style={{maxWidth:640,margin:"0 auto",padding:"14px 14px 0"}}>

          {page==="home"&&<div className="fade">
            <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"16px",marginBottom:14,boxShadow:T.cardShadow}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                <div style={{fontSize:12,color:T.textLight,fontWeight:700,letterSpacing:0.5}}>⚙️ 补货阈值设定</div>
                <button className="btn" onClick={resetData} style={{padding:"4px 12px",borderRadius:50,border:`1.5px solid ${resetConfirm?T.danger:T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:11,fontWeight:800,background:resetConfirm?T.dangerBg:T.card,color:resetConfirm?T.danger:T.textLight}}>
                  {resetConfirm?"⚠️ 再按确认清空":"🗑️ 重置数据"}
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
            {batch&&<div style={{background:T.accentSoft,border:`1px solid ${T.border}`,borderRadius:14,padding:"10px 14px",marginBottom:12,fontSize:13,color:T.accent,fontWeight:700}}>🫧 点击色卡勾选{sel.size>0&&<span style={{marginLeft:8}}>· 已选 {sel.size} 个</span>}</div>}
            <div style={{fontSize:12,color:T.textLight,marginBottom:10,fontWeight:600}}>共 {filtered.length} 个色号 · 点击色卡编辑克/粒数</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {filtered.map(c=><StockCard key={c.id} c={c} compact={false} isSel={sel.has(c.id)} {...cardProps}/>)}
            </div>
          </div>}

        </div>}

        {batch&&<div style={{position:"fixed",bottom:84,left:0,right:0,zIndex:300,display:"flex",justifyContent:"center",padding:"0 14px"}}>
          <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"14px 16px",display:"flex",flexDirection:"column",gap:10,maxWidth:480,width:"100%",boxShadow:T.floatShadow}}>
            {/* 勾选操作行 */}
            {sel.size>0&&<div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              <span style={{fontSize:13,color:T.textMid,fontWeight:700}}>已选 {sel.size} 个</span>
              <div style={{display:"flex",border:`1.5px solid ${T.border}`,borderRadius:50,overflow:"hidden"}}>
                {[["-","－扣除"],["+"," ＋补货"]].map(([d,l])=>(<button key={d} onClick={()=>setBDir(d)} style={{padding:"6px 14px",border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:bDir===d?T.accent:T.card,color:bDir===d?"#fff":T.textMid,transition:"all 0.15s"}}>{l}</button>))}
              </div>
              <input type="number" placeholder="粒数" value={bAmt} onChange={e=>setBAmt(e.target.value)} style={{...inp({width:72,padding:"6px 8px",fontSize:13,textAlign:"center"})}}/>
              <button className="btn" onClick={applyBatch} style={{padding:"6px 18px",borderRadius:50,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:T.accent,color:"#fff"}}>确认</button>
            </div>}
            {/* 分割线 */}
            {sel.size>0&&<div style={{height:1,background:T.border,margin:"0 -4px"}}/>}
            {/* 文字指令 / 识图tag区 */}
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <div style={{fontSize:11,color:T.textLight,fontWeight:600,flex:1}}>
                  {cmdTags.length>0?"📷 识图结果 · 点数字可编辑 · 点×删除":"✏️ 指令输入：A15-200、全部+100"}
                </div>
                <button className="btn" onClick={()=>imgRef.current?.click()} disabled={imgLoading}
                  style={{padding:"5px 12px",borderRadius:50,border:`1.5px solid ${T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:12,fontWeight:700,background:T.accentSoft,color:T.accent,whiteSpace:"nowrap"}}>
                  {imgLoading?"识别中…":"📷 识图"}
                </button>
                <input ref={imgRef} type="file" accept="image/*" style={{display:"none"}} onChange={handleImg}/>
              </div>

              {/* tag模式 */}
              {cmdTags.length>0&&<>
                <div style={{display:"flex",flexWrap:"wrap",gap:6,maxHeight:160,overflowY:"auto",padding:"6px 2px"}}>
                  {cmdTags.map((tag,i)=>{
                    const color=ALL_COLORS.find(c=>c.id===tag.id);
                    return(
                      <div key={i} style={{display:"flex",alignItems:"center",gap:4,background:T.accentSoft,border:`1.5px solid ${T.border}`,borderRadius:20,padding:"4px 8px",fontSize:12,fontWeight:700}}>
                        {color&&<div style={{width:12,height:12,borderRadius:"50%",background:color.hex,border:"1px solid rgba(0,0,0,0.1)",flexShrink:0}}/>}
                        <span style={{color:T.accent}}>{tag.id}</span>
                        <span style={{color:tag.dir==="-"?T.danger:"#22a86e",fontWeight:800}}>{tag.dir}</span>
                        <input type="number" value={tag.amt}
                          onChange={e=>setCmdTags(ts=>ts.map((t,j)=>j===i?{...t,amt:e.target.value}:t))}
                          style={{...inp({width:44,padding:"1px 4px",fontSize:12,textAlign:"center",borderRadius:8,fontWeight:700})}}/>
                        <button onClick={()=>setCmdTags(ts=>ts.filter((_,j)=>j!==i))}
                          style={{background:"none",border:"none",cursor:"pointer",color:T.textLight,fontSize:13,lineHeight:1,padding:"0 2px",fontWeight:800}}>×</button>
                      </div>
                    );
                  })}
                </div>
                <div style={{display:"flex",gap:8}}>
                  <button className="btn" onClick={()=>setCmdTags([])} style={{...inp({flex:1,padding:"7px 0",borderRadius:50,cursor:"pointer",fontSize:12,color:T.textMid,fontWeight:700})}}>清空重来</button>
                  <button className="btn" onClick={applyTags} style={{flex:2,padding:"7px 0",borderRadius:50,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:T.accent,color:"#fff"}}>✓ 确认执行</button>
                </div>
              </>}

              {/* 手动文字输入模式 */}
              {cmdTags.length===0&&<div style={{display:"flex",flexDirection:"column",gap:6}}>
                <textarea value={cmdText} onChange={e=>{setCmdText(e.target.value);setCmdErr("");}}
                  placeholder={"手动输入：A15-200, B3+500\n识图后结果自动填入这里"}
                  rows={cmdText.length>30?4:2}
                  style={{...inp({width:"100%",padding:"8px 12px",fontSize:12,resize:"none",lineHeight:1.6,boxSizing:"border-box"})}}/>
                <button className="btn" onClick={applyCmd} style={{padding:"7px 0",borderRadius:50,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:T.accent,color:"#fff",width:"100%"}}>执行</button>
              </div>}

              {cmdErr&&<div style={{fontSize:11,color:T.danger,fontWeight:600}}>{cmdErr}</div>}
              {imgErr&&<div style={{fontSize:11,color:T.danger,fontWeight:600}}>{imgErr}</div>}
            </div>
            {/* 取消 */}
            <button className="btn" onClick={exitBatch} style={{...inp({padding:"6px 12px",borderRadius:50,cursor:"pointer",fontSize:13,color:T.textMid,alignSelf:"flex-end"})}}>取消</button>
          </div>
        </div>}

        {page!=="diary"&&<div className="tt" style={{textAlign:"center",padding:"10px 0 96px",fontSize:10,color:T.textLight,fontWeight:600,letterSpacing:0.3}}>
          由 大橘来啦（v：daju_laila）制作 · 禁私售
        </div>}

        {/* 日记页：fixed全屏覆盖，底部留导航栏高度 */}
        {page==="diary"&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:64,background:T.bg,zIndex:100,overflowY:"auto"}}>
          <DiaryPage T={T} tn={tn}/>
        </div>}

        <div className="tt" style={{position:"fixed",bottom:0,left:0,right:0,background:T.nav,borderTop:`1.5px solid ${T.navBorder}`,display:"flex",justifyContent:"space-around",padding:"10px 0 20px",zIndex:200}}>
          {[{key:"home",label:"首页",iconA:"🏡",iconI:"🏠"},{key:"stock",label:"库存",iconA:"🫘",iconI:"🫙"},{key:"diary",label:"日记",iconA:"📖",iconI:"📓"}].map(n=>{
            const active=page===n.key;
            return(
              <button key={n.key} className="btn" onClick={()=>{setPage(n.key);exitBatch();}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,background:"none",border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",padding:"4px 32px"}}>
                <span style={{fontSize:26,transition:"filter 0.2s,transform 0.2s",filter:active?"none":"grayscale(0.5) opacity(0.35)",transform:active?"scale(1.15)":"scale(1)"}}>{active?n.iconA:n.iconI}</span>
                <span style={{fontSize:11,fontWeight:active?800:600,color:active?T.accent:T.textLight,transition:"color 0.2s"}}>{n.label}</span>
                <div style={{width:active?24:0,height:3,borderRadius:10,background:T.navActiveDot,marginTop:1,transition:"width 0.25s"}}/>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

// 年份横滚条组件
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
