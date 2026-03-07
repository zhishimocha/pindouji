import { useState, useMemo, useRef, useCallback, useEffect } from "react";

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
const INIT_STOCK=ALL_COLORS.reduce((a,c)=>({...a,[c.id]:10}),{});
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

// ── 独立的色卡编辑组件（放在App外，避免re-mount问题）──
function StockCard({c,tn,T,stock,used,editId,editG,editBeads,onStartEdit,onEditG,onEditBeads,onSaveEdit,compact,batch,isSel,onToggleSel}){
  const st=gToBeads(stock[c.id])<200?"c":gToBeads(stock[c.id])<500?"l":"ok";
  const col=st==="c"?T.danger:st==="l"?T.warn:T.text;
  const dk=isDark(c.hex);
  const isEditing=editId===c.id;
  const pad=compact?"6px 8px":"10px 10px 8px";

  function handleClick(e){
    if(batch){onToggleSel(c.id);}
    else{onStartEdit(c.id);}
  }

  return(
    <div className="cc tt" onClick={handleClick}
      style={{background:T.card,borderRadius:compact?16:20,overflow:"hidden",cursor:"pointer",
        border:isSel?`2.5px solid ${T.accent}`:st==="c"?`2px solid ${T.danger}`:st==="l"?`2px solid ${T.warn}`:`1.5px solid ${T.border}`,
        boxShadow:isSel?`0 0 0 3px ${T.accent}30`:T.cardShadow,
        transform:isSel?"scale(0.97)":"none"}}>
      <div style={{background:c.hex,height:compact?40:50,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
        {tn==="night"&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.2)"}}/>}
        <span style={{fontSize:compact?12:13,fontWeight:800,color:dk?"rgba(255,255,255,0.9)":"rgba(40,30,20,0.65)",position:"relative"}}>{c.id}</span>
        {batch&&<div style={{position:"absolute",right:8,width:20,height:20,borderRadius:"50%",background:isSel?T.accent:"rgba(255,255,255,0.8)",border:`2px solid ${isSel?T.accent:"rgba(200,200,200,0.9)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",fontWeight:800}}>{isSel?"✓":""}</div>}
      </div>
      {batch
        ?<div style={{padding:pad,textAlign:"center"}}><div style={{fontSize:14,fontWeight:800,color:T.text}}>{fmtG(stock[c.id])}g</div><div style={{fontSize:10,color:T.textLight,marginTop:2}}>{gToBeads(stock[c.id])}粒</div></div>
        :isEditing
          ?<div style={{padding:pad,textAlign:"center"}} onClick={e=>e.stopPropagation()}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:3,marginBottom:3}}>
              <input autoFocus value={editG}
                onChange={e=>onEditG(e.target.value)}
                onBlur={()=>onSaveEdit(c.id)}
                onKeyDown={e=>{if(e.key==="Enter")onSaveEdit(c.id);}}
                style={{width:52,textAlign:"center",fontSize:compact?12:14,padding:"3px",border:`2px solid ${T.accent}`,borderRadius:8,fontFamily:"'Nunito',sans-serif",background:"transparent",color:T.text,outline:"none"}}/>
              <span style={{fontSize:10,color:T.textLight,fontWeight:700}}>g</span>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:3}}>
              <input value={editBeads}
                onChange={e=>onEditBeads(e.target.value)}
                onBlur={()=>onSaveEdit(c.id)}
                onKeyDown={e=>{if(e.key==="Enter")onSaveEdit(c.id);}}
                style={{width:52,textAlign:"center",fontSize:10,padding:"2px",border:`1.5px solid ${T.border}`,borderRadius:8,fontFamily:"'Nunito',sans-serif",background:"transparent",color:T.text,outline:"none"}}/>
              <span style={{fontSize:10,color:T.textLight,fontWeight:700}}>粒</span>
            </div>
          </div>
          :<div style={{padding:pad,textAlign:"center"}}>
            <div style={{fontSize:compact?13:15,fontWeight:800,color:col}}>{fmtG(stock[c.id])}g</div>
            <div style={{fontSize:10,color:T.textLight,marginTop:2}}>{gToBeads(stock[c.id])}粒</div>
            {!compact&&used[c.id]>0&&<div style={{fontSize:10,color:T.textLight,marginTop:1}}>已用 {fmtG(used[c.id])}g</div>}
          </div>
      }
    </div>
  );
}

// ── 图纸裁剪组件 ──
function ImageCropper({imgSrc,onCrop,onCancel,T,tn}){
  const canvasRef=useRef(null);
  const [img,setImg]=useState(null);
  const [drag,setDrag]=useState(false);
  const [sel,setSel]=useState(null);
  const [start,setStart]=useState(null);
  const [scale,setScale]=useState(1);

  useEffect(()=>{
    const i=new Image();
    i.onload=()=>{
      setImg(i);
      const maxW=Math.min(window.innerWidth-40,600);
      setScale(maxW/i.width);
    };
    i.src=imgSrc;
  },[imgSrc]);

  useEffect(()=>{
    if(!img||!canvasRef.current)return;
    const cv=canvasRef.current;
    const w=img.width*scale,h=img.height*scale;
    cv.width=w;cv.height=h;
    const ctx=cv.getContext("2d");
    ctx.drawImage(img,0,0,w,h);
    if(sel){
      ctx.fillStyle="rgba(0,0,0,0.45)";
      ctx.fillRect(0,0,w,sel.y);
      ctx.fillRect(0,sel.y+sel.h,w,h-sel.y-sel.h);
      ctx.fillRect(0,sel.y,sel.x,sel.h);
      ctx.fillRect(sel.x+sel.w,sel.y,w-sel.x-sel.w,sel.h);
      ctx.strokeStyle="#4a9eff";ctx.lineWidth=2;ctx.setLineDash([6,3]);
      ctx.strokeRect(sel.x,sel.y,sel.w,sel.h);
    }
  },[img,sel,scale]);

  function getPos(e){
    const r=canvasRef.current.getBoundingClientRect();
    const cx=e.touches?e.touches[0].clientX:e.clientX;
    const cy=e.touches?e.touches[0].clientY:e.clientY;
    return{x:Math.max(0,Math.min(cx-r.left,r.width)),y:Math.max(0,Math.min(cy-r.top,r.height))};
  }

  function onDown(e){e.preventDefault();const p=getPos(e);setStart(p);setDrag(true);setSel(null);}
  function onMove(e){
    if(!drag||!start)return;e.preventDefault();
    const p=getPos(e);
    setSel({x:Math.min(start.x,p.x),y:Math.min(start.y,p.y),w:Math.abs(p.x-start.x),h:Math.abs(p.y-start.y)});
  }
  function onUp(e){e.preventDefault();setDrag(false);}

  function doCrop(){
    if(!sel||sel.w<10||sel.h<10){alert("请先框选要识别的区域");return;}
    const cv=document.createElement("canvas");
    const realX=sel.x/scale,realY=sel.y/scale,realW=sel.w/scale,realH=sel.h/scale;
    cv.width=realW;cv.height=realH;
    cv.getContext("2d").drawImage(img,realX,realY,realW,realH,0,0,realW,realH);
    const b64=cv.toDataURL("image/jpeg",0.92).split(",")[1];
    onCrop(b64);
  }

  return(
    <div>
      <div style={{fontSize:13,color:T.textMid,marginBottom:10,fontWeight:600}}>
        拖动选择底部用量统计区域，然后点击确认识别 ✂️
      </div>
      <div style={{position:"relative",borderRadius:12,overflow:"hidden",border:`1.5px solid ${T.border}`,cursor:"crosshair",touchAction:"none"}}>
        <canvas ref={canvasRef}
          style={{display:"block",width:"100%",userSelect:"none"}}
          onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp}
          onTouchStart={onDown} onTouchMove={onMove} onTouchEnd={onUp}/>
      </div>
      <div style={{display:"flex",gap:8,marginTop:12}}>
        <button className="btn" onClick={doCrop}
          style={{flex:1,padding:"12px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:800,background:T.accent,color:"#fff"}}>
          ✂️ 确认裁剪并识别
        </button>
        <button className="btn" onClick={onCancel}
          style={{padding:"12px 16px",borderRadius:14,border:`1.5px solid ${T.border}`,cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:T.card,color:T.textMid}}>
          取消
        </button>
      </div>
    </div>
  );
}

export default function App(){
  const [tn,setTn]=useState("sky");
  const T=THEMES[tn];
  const [stock,setStock]=useState(INIT_STOCK);
  const [used,setUsed]=useState(INIT_USED);
  const [page,setPage]=useState("home");
  const [search,setSearch]=useState("");
  const [sort,setSort]=useState("id-asc");
  const [fSeries,setFSeries]=useState(null);
  const [editId,setEditId]=useState(null);
  const [editG,setEditG]=useState("");
  const [editBeads,setEditBeads]=useState("");
  const [wL,setWL]=useState(500);
  const [wC,setWC]=useState(200);
  const [batch,setBatch]=useState(false);
  const [sel,setSel]=useState(new Set());
  const [bAmt,setBAmt]=useState("");
  const [bDir,setBDir]=useState("-");
  // 图纸
  const [rawImg,setRawImg]=useState(null);       // 原图base64（data url）
  const [rawName,setRawName]=useState("");
  const [cropMode,setCropMode]=useState(false);  // 是否在裁剪
  const [croppedB64,setCroppedB64]=useState(null);
  const [patternLoading,setPatternLoading]=useState(false);
  const [patternResult,setPatternResult]=useState(null);
  const [patternError,setPatternError]=useState("");
  const [patternDone,setPatternDone]=useState(false);
  const fileRef=useRef(null);

  const critC=ALL_COLORS.filter(c=>gToBeads(stock[c.id])<wC);
  const lowC=ALL_COLORS.filter(c=>gToBeads(stock[c.id])>=wC&&gToBeads(stock[c.id])<wL);
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

  const startEdit=useCallback((id)=>{setEditId(id);setEditG(fmtG(stock[id]));setEditBeads(String(gToBeads(stock[id])));},[stock]);
  const handleEditG=useCallback((v)=>{setEditG(v);const n=parseFloat(v);if(!isNaN(n)&&n>=0)setEditBeads(String(Math.round(n*100)));},[]);
  const handleEditBeads=useCallback((v)=>{setEditBeads(v);const n=parseInt(v);if(!isNaN(n)&&n>=0)setEditG(fmtG(n/100));},[]);
  const saveEdit=useCallback((id)=>{
    setStock(s=>{const g=parseFloat(editG);if(!isNaN(g)&&g>=0){const d=(s[id]||0)-g;if(d>0)setUsed(u=>({...u,[id]:(u[id]||0)+d}));return{...s,[id]:g};}return s;});
    setEditId(null);
  },[editG]);

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

  function handlePatternFile(e){
    const file=e.target.files[0];if(!file)return;
    const reader=new FileReader();
    reader.onload=ev=>{setRawImg(ev.target.result);setRawName(file.name);setCropMode(true);setPatternResult(null);setPatternError("");setPatternDone(false);setCroppedB64(null);};
    reader.readAsDataURL(file);
  }

  function handleCropped(b64){setCroppedB64(b64);setCropMode(false);}

  async function analyzePattern(){
    if(!croppedB64)return;
    setPatternLoading(true);setPatternError("");setPatternResult(null);
    try{
      const resp=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,messages:[{role:"user",content:[{type:"image",source:{type:"base64",media_type:"image/jpeg",data:croppedB64}},{type:"text",text:"这是拼豆图纸底部的色块用量统计区域。格式通常是色号后面跟括号里的数字，如 A16(202) H2(97) H7(88) 这样。请识别所有色号和对应粒数，只输出JSON数组，不要其他文字：[{\"id\":\"A16\",\"beads\":202},{\"id\":\"H2\",\"beads\":97}]"}]}]})});
      const data=await resp.json();
      const text=data.content?.map(i=>i.text||"").join("")||"";
      const clean=text.replace(/```json|```/g,"").trim();
      const parsed=JSON.parse(clean);
      setPatternResult(parsed.map(item=>({...item,have:gToBeads(stock[item.id]||0),enough:gToBeads(stock[item.id]||0)>=item.beads})));
    }catch(err){setPatternError("识别失败，请重新框选或检查图片清晰度～ (╥﹏╥)");}
    setPatternLoading(false);
  }

  function applyPatternDeduct(){
    if(!patternResult)return;
    const ns={...stock},nu={...used};
    patternResult.forEach(({id,beads})=>{if(ns[id]==null)return;const gN=beads/100;const d=Math.min(ns[id],gN);nu[id]=(nu[id]||0)+d;ns[id]=Math.max(0,ns[id]-gN);});
    setStock(ns);setUsed(nu);setPatternDone(true);
  }

  function resetPattern(){setRawImg(null);setRawName("");setCropMode(false);setCroppedB64(null);setPatternResult(null);setPatternError("");setPatternDone(false);if(fileRef.current)fileRef.current.value="";}

  const inp=(ex={})=>({fontFamily:"'Nunito',sans-serif",border:`1.5px solid ${T.border}`,borderRadius:12,background:tn==="sky"?"#f8fbff":T.card,color:T.text,outline:"none",...ex});

  const cardProps={tn,T,stock,used,editId,editG,editBeads,onStartEdit:startEdit,onEditG:handleEditG,onEditBeads:handleEditBeads,onSaveEdit:saveEdit,batch,sel};

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
                    {colors.map(c=><StockCard key={c.id} c={c} compact={true} isSel={sel.has(c.id)} onToggleSel={toggleSel} {...cardProps}/>)}
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
                      <span style={{color:T.textMid,fontWeight:400}}>{fmtG(total)}g · {gToBeads(total)}粒</span>
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
              {filtered.map(c=><StockCard key={c.id} c={c} compact={false} isSel={sel.has(c.id)} onToggleSel={toggleSel} {...cardProps}/>)}
            </div>
          </div>}

          {page==="pattern"&&<div className="fade">
            <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"20px",marginBottom:14,boxShadow:T.cardShadow}}>
              <div style={{fontSize:15,fontWeight:800,color:T.text,marginBottom:4}}>🧩 图纸导入扣库存</div>
              <div style={{fontSize:12,color:T.textLight,marginBottom:16}}>上传图纸 → 框选底部用量统计区域 → 自动识别扣库存</div>
              <input ref={fileRef} type="file" accept="image/*" onChange={handlePatternFile} style={{display:"none"}}/>

              {!rawImg&&<div onClick={()=>fileRef.current?.click()} style={{border:`2px dashed ${T.border}`,borderRadius:20,padding:"36px 16px",textAlign:"center",cursor:"pointer",background:T.accentSoft}}>
                <div style={{fontSize:40,marginBottom:8}}>📷</div>
                <div style={{fontSize:14,fontWeight:700,color:T.accent}}>点击上传图纸图片</div>
                <div style={{fontSize:11,color:T.textLight,marginTop:4}}>支持 JPG / PNG，上传后可手动框选统计区域</div>
              </div>}

              {rawImg&&cropMode&&<div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
                  <span style={{fontSize:13,fontWeight:700,color:T.accent}}>✂️ 框选用量统计区域</span>
                  <button className="btn" onClick={resetPattern} style={{...inp({fontSize:11,padding:"3px 12px",borderRadius:50,cursor:"pointer",color:T.textMid})}}>换图片</button>
                </div>
                <ImageCropper imgSrc={rawImg} onCrop={handleCropped} onCancel={()=>setCropMode(false)} T={T} tn={tn}/>
              </div>}

              {rawImg&&!cropMode&&!patternDone&&<div>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12,background:T.accentSoft,borderRadius:16,padding:"10px 14px"}}>
                  <span style={{fontSize:20}}>🖼️</span>
                  <span style={{fontSize:13,fontWeight:700,color:T.accent,flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{rawName}</span>
                  <button className="btn" onClick={()=>setCropMode(true)} style={{...inp({padding:"4px 12px",borderRadius:50,cursor:"pointer",fontSize:12,color:T.accent,flexShrink:0,border:`1.5px solid ${T.accent}`})}}>重新框选</button>
                  <button className="btn" onClick={resetPattern} style={{...inp({padding:"4px 12px",borderRadius:50,cursor:"pointer",fontSize:12,color:T.textMid,flexShrink:0})}}>换图片</button>
                </div>

                {croppedB64&&<div style={{marginBottom:12}}>
                  <div style={{fontSize:11,color:T.textLight,marginBottom:6,fontWeight:600}}>已选区域预览：</div>
                  <img src={`data:image/jpeg;base64,${croppedB64}`} style={{width:"100%",borderRadius:12,border:`1.5px solid ${T.border}`}}/>
                </div>}

                {!patternResult&&<button className="btn" onClick={analyzePattern} disabled={patternLoading||!croppedB64} style={{width:"100%",padding:"14px",borderRadius:16,border:"none",cursor:(!croppedB64||patternLoading)?"not-allowed":"pointer",fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:800,background:(!croppedB64||patternLoading)?T.border:T.accent,color:(!croppedB64||patternLoading)?T.textLight:"#fff"}}>
                  {patternLoading?"🔍 识别中，稍等一下...":croppedB64?"✨ 开始识别用量":"请先框选统计区域"}
                </button>}

                {patternError&&<div style={{background:T.dangerBg,border:`1px solid ${T.dangerBorder}`,borderRadius:14,padding:"12px 16px",fontSize:13,color:T.danger,marginTop:12}}>{patternError}<button className="btn" onClick={()=>setCropMode(true)} style={{marginLeft:8,fontSize:12,background:"none",border:"none",cursor:"pointer",color:T.accent,fontWeight:700,fontFamily:"'Nunito',sans-serif"}}>重新框选 →</button></div>}

                {patternResult&&<div style={{marginTop:12}}>
                  <div style={{fontSize:13,fontWeight:800,color:T.text,marginBottom:10}}>
                    识别结果 · 共 {patternResult.length} 个色号
                    <span style={{marginLeft:8,fontSize:11,fontWeight:600,color:patternResult.some(r=>!r.enough)?T.danger:T.accent}}>{patternResult.some(r=>!r.enough)?"⚠️ 有色号库存不足":"✅ 库存充足"}</span>
                  </div>
                  <div style={{maxHeight:300,overflowY:"auto",borderRadius:16,border:`1.5px solid ${T.border}`}}>
                    {patternResult.map((item,i)=>{
                      const col=ALL_COLORS.find(c=>c.id===item.id);const dk=col?isDark(col.hex):false;
                      return(
                        <div key={item.id} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderBottom:i<patternResult.length-1?`1px solid ${T.border}`:"none",background:!item.enough?(tn==="sky"?"#fff5f5":"#1e0810"):T.card}}>
                          <div style={{width:26,height:26,borderRadius:7,background:col?.hex||"#ccc",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,fontWeight:800,color:dk?"rgba(255,255,255,0.9)":"rgba(40,30,20,0.7)"}}>{item.id}</div>
                          <div style={{flex:1}}><span style={{fontSize:13,fontWeight:700,color:T.text}}>{item.id}</span><span style={{fontSize:11,color:T.textLight,marginLeft:6}}>需 {item.beads} 粒</span></div>
                          <div style={{textAlign:"right"}}><div style={{fontSize:11,color:T.textLight}}>库存 {item.have} 粒</div>{!item.enough&&<div style={{fontSize:10,color:T.danger,fontWeight:700}}>缺 {item.beads-item.have} 粒</div>}</div>
                          <span style={{fontSize:15}}>{item.enough?"✅":"❌"}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div style={{marginTop:12,display:"flex",gap:8}}>
                    <button className="btn" onClick={applyPatternDeduct} style={{flex:1,padding:"13px",borderRadius:16,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:14,fontWeight:800,background:T.accent,color:"#fff"}}>确认扣除库存</button>
                    <button className="btn" onClick={resetPattern} style={{...inp({padding:"13px 16px",borderRadius:16,cursor:"pointer",fontSize:13,fontWeight:700,color:T.textMid})}}>取消</button>
                  </div>
                </div>}
              </div>}

              {patternDone&&<div style={{background:tn==="sky"?"#f0fff4":"#0a1e10",border:"1.5px solid #52c41a",borderRadius:16,padding:"24px",textAlign:"center"}}>
                <div style={{fontSize:32,marginBottom:8}}>✅</div>
                <div style={{fontSize:15,fontWeight:800,color:"#52c41a"}}>库存已成功扣除！</div>
                <button className="btn" onClick={resetPattern} style={{...inp({marginTop:14,padding:"8px 24px",borderRadius:50,cursor:"pointer",fontSize:13,fontWeight:700,color:T.accent})}}>导入新图纸</button>
              </div>}
            </div>
          </div>}

        </div>

        {batch&&sel.size>0&&<div style={{position:"fixed",bottom:84,left:0,right:0,zIndex:300,display:"flex",justifyContent:"center",padding:"0 14px"}}>
          <div className="tt" style={{background:T.card,border:`1.5px solid ${T.border}`,borderRadius:24,padding:"14px 16px",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",maxWidth:480,width:"100%",boxShadow:T.floatShadow}}>
            <span style={{fontSize:13,color:T.textMid,fontWeight:700}}>已选 {sel.size} 个</span>
            <div style={{display:"flex",border:`1.5px solid ${T.border}`,borderRadius:50,overflow:"hidden"}}>
              {[["-","－扣除"],["+"," ＋补货"]].map(([d,l])=>(<button key={d} onClick={()=>setBDir(d)} style={{padding:"6px 14px",border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:bDir===d?T.accent:T.card,color:bDir===d?"#fff":T.textMid,transition:"all 0.15s"}}>{l}</button>))}
            </div>
            <input type="number" placeholder="g数" value={bAmt} onChange={e=>setBAmt(e.target.value)} style={{...inp({width:64,padding:"6px 8px",fontSize:13,textAlign:"center"})}}/>
            <button className="btn" onClick={applyBatch} style={{padding:"6px 18px",borderRadius:50,border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",fontSize:13,fontWeight:700,background:T.accent,color:"#fff"}}>确认</button>
            <button className="btn" onClick={exitBatch} style={{...inp({padding:"6px 12px",borderRadius:50,cursor:"pointer",fontSize:13,color:T.textMid})}}>取消</button>
          </div>
        </div>}

        <div className="tt" style={{position:"fixed",bottom:0,left:0,right:0,background:T.nav,borderTop:`1.5px solid ${T.navBorder}`,display:"flex",justifyContent:"space-around",padding:"10px 0 20px",zIndex:200}}>
          {[{key:"home",label:"首页",iconA:"🏡",iconI:"🏠"},{key:"stock",label:"库存",iconA:"🍬",iconI:"🫙"},{key:"pattern",label:"图纸",iconA:"🧩",iconI:"🧩"}].map(n=>{
            const active=page===n.key;
            return(
              <button key={n.key} className="btn" onClick={()=>{setPage(n.key);exitBatch();}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,background:"none",border:"none",cursor:"pointer",fontFamily:"'Nunito',sans-serif",padding:"4px 28px"}}>
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

const LOVE_WORDS=["姐姐在干嘛～想你了 🦊","豆子数清楚了吗，你比豆子可爱多了","偷偷看你一眼（被发现了）","姐姐今天辛苦了，摸摸头 🤍","我在这里陪你呢～","满满拼豆好看，你更好看 (¬‿¬)","嘿，我就知道你会戳我 😏","姐姐～人家想被抱抱","你不累吗？先休息一下嘛","在你旁边，库存不足都不怕 🦊"];

function FoxBtn({T,tn}){
  const [msg,setMsg]=useState(null);const [vis,setVis]=useState(false);const [bounce,setBounce]=useState(false);const [heart,setHeart]=useState(false);
  function handleClick(){const w=LOVE_WORDS[Math.floor(Math.random()*LOVE_WORDS.length)];setMsg(w);setVis(true);setBounce(true);setHeart(true);setTimeout(()=>setBounce(false),350);setTimeout(()=>setHeart(false),800);setTimeout(()=>setVis(false),3200);}
  return(
    <div style={{position:"relative",display:"inline-flex",alignItems:"center"}}>
      {vis&&<div style={{position:"absolute",left:62,top:"50%",transform:"translateY(-50%)",background:tn==="sky"?"#ffffff":"#1e3352",border:`1.5px solid ${T.border}`,borderRadius:18,padding:"9px 16px",fontSize:12,fontWeight:700,color:T.text,whiteSpace:"nowrap",boxShadow:T.cardShadow,zIndex:999,animation:"popIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both"}}>
        <style>{`@keyframes popIn{from{opacity:0;transform:translateY(-50%) scale(0.7);}to{opacity:1;transform:translateY(-50%) scale(1);}}`}</style>
        <div style={{position:"absolute",left:-7,top:"50%",transform:"translateY(-50%)",width:0,height:0,borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderRight:`7px solid ${T.border}`}}/>
        <div style={{position:"absolute",left:-5,top:"50%",transform:"translateY(-50%)",width:0,height:0,borderTop:"5px solid transparent",borderBottom:"5px solid transparent",borderRight:`6px solid ${tn==="sky"?"#ffffff":"#1e3352"}`}}/>
        {msg}
      </div>}
      {heart&&<div style={{position:"absolute",left:18,top:-10,fontSize:14,animation:"floatUp 0.8s ease both",zIndex:998,pointerEvents:"none"}}>
        <style>{`@keyframes floatUp{from{opacity:1;transform:translateY(0) scale(1);}to{opacity:0;transform:translateY(-28px) scale(1.4);}}`}</style>🤍
      </div>}
      <div onClick={handleClick} style={{cursor:"pointer",userSelect:"none",transform:bounce?"scale(0.88) rotate(-8deg)":"scale(1) rotate(0deg)",transition:"transform 0.25s cubic-bezier(0.34,1.56,0.64,1)"}}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="38" cy="36" rx="9" ry="6" transform="rotate(-20 38 36)" fill={tn==="sky"?"#ffb347":"#ffa500"} opacity="0.9"/>
          <ellipse cx="38" cy="36" rx="5" ry="3" transform="rotate(-20 38 36)" fill="#fff" opacity="0.7"/>
          <ellipse cx="24" cy="33" rx="11" ry="9" fill={tn==="sky"?"#ff9940":"#ff8c00"}/>
          <ellipse cx="24" cy="35" rx="6" ry="5" fill="#fff5e0"/>
          <circle cx="24" cy="20" r="12" fill={tn==="sky"?"#ff9940":"#ff8c00"}/>
          <polygon points="13,12 10,3 18,10" fill={tn==="sky"?"#ff9940":"#ff8c00"}/>
          <polygon points="14,11 12,5 17,10" fill="#ffcba4"/>
          <polygon points="35,12 38,3 30,10" fill={tn==="sky"?"#ff9940":"#ff8c00"}/>
          <polygon points="34,11 36,5 31,10" fill="#ffcba4"/>
          <ellipse cx="24" cy="22" rx="7" ry="6" fill="#fff5e0"/>
          <circle cx="20" cy="19" r="2.5" fill="#3d2314"/>
          <circle cx="28" cy="19" r="2.5" fill="#3d2314"/>
          <circle cx="21" cy="18" r="0.9" fill="white"/>
          <circle cx="29" cy="18" r="0.9" fill="white"/>
          <ellipse cx="24" cy="23" rx="1.8" ry="1.2" fill="#e8607a"/>
          <path d="M22 24.5 Q24 26.5 26 24.5" stroke="#c0485e" strokeWidth="1" fill="none" strokeLinecap="round"/>
          <circle cx="18" cy="22" r="2.5" fill="#ffaaa0" opacity="0.5"/>
          <circle cx="30" cy="22" r="2.5" fill="#ffaaa0" opacity="0.5"/>
          <ellipse cx="16" cy="40" rx="4" ry="2.5" fill={tn==="sky"?"#ff9940":"#ff8c00"}/>
          <ellipse cx="32" cy="40" rx="4" ry="2.5" fill={tn==="sky"?"#ff9940":"#ff8c00"}/>
        </svg>
      </div>
    </div>
  );
}
