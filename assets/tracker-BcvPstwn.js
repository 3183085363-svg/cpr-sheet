import{O as r}from"./index-zakNA_E2.js";import{o as C,g as R,n as f,r as T,j as M,p as O,b as S,i as v,s as A,e as B}from"./initiative-DoEyr4gA.js";const b="cpr-tracker",y="cpr-initiative";let u=!1,c=!1;try{c=localStorage.getItem("cpr_trk_collapsed")==="1"}catch{}const k={},l=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");let E=null;function p(t){const n=document.querySelector(".toast");n&&n.remove();const e=document.createElement("div");e.className="toast",e.textContent=t,document.body.appendChild(e),clearTimeout(E),E=setTimeout(()=>e.remove(),2e3)}function _(t,n){const e=n&&t.id===n.id?" cur":"",a=t.hidden?" hidden-npc":"",o=t.tokenId&&k[t.tokenId],i=o?`<img class="trk-img" src="${l(o)}" alt="" draggable="false" />`:`<div class="trk-img trk-ph">${l((t.name||"？")[0])}</div>`,s=t.hidden?'<span class="trk-hidden-badge">🕶️</span>':"",w=t.vehicle?'<span class="trk-veh-badge">🚗</span>':"",L=t.total!=null?t.total:"—",x=t.total!=null?`(${t.ref}+${t.roll})`:`(${t.ref}+?)`;return`<div class="trk-card${e}${a}" title="${l(t.name)}">
    <span class="trk-mod">+${t.ref}</span>
    ${s}${w}
    ${i}
    <div class="trk-name">${l(t.name)}</div>
    <div class="trk-total">${L}</div>
    <div class="trk-sub">${x}</div>
  </div>`}function d(){const t=R(),n=B(),e=t.order[t.current]||null,a=t.order.filter(s=>n||!s.hidden);if(c){const s=e&&(n||!e.hidden)?e.name:"—";document.getElementById("app").innerHTML=`
      <div class="trk-bar slim">
        <button class="trk-btn" id="trk-expand" title="展开战斗轨">∧</button>
        <span class="trk-round">R${t.round}</span>
        <span class="trk-curname">▶ ${l(s)}</span>
        ${n?'<button class="trk-btn" id="trk-next" title="下一个">⏭</button>':""}
      </div>`,document.getElementById("trk-expand")?.addEventListener("click",$),document.getElementById("trk-next")?.addEventListener("click",()=>f()),I(a.length);return}const o=a.map(s=>_(s,e)).join(""),i=n?`
    <button class="trk-btn warn" id="trk-rollall" title="全员掷先攻 REF+1d10">⚔ 战斗准备</button>
    <button class="trk-btn danger2" id="trk-ambush" title="伏击：全员重骰，隐形NPC现形并冲到序列顶端">⚡ 突袭</button>
    <button class="trk-btn" id="trk-prev" title="上一个">⏮</button>
    <button class="trk-btn" id="trk-next" title="下一个">⏭</button>
    <button class="trk-btn danger2" id="trk-reset" title="清空全部槽位">一键清空</button>`:"";document.getElementById("app").innerHTML=`
    <div class="trk-bar">
      <button class="trk-btn" id="trk-collapse" title="折叠">∨</button>
      ${i}
      <span class="trk-round" title="轮次">R${t.round}</span>
      <button class="trk-btn" id="trk-manager" title="打开先攻管理（同步token/隐形槽位/手动添加）">⋮⋮</button>
      <div class="trk-cards">${o||'<div class="trk-empty">空 · GM点 ⋮⋮ 打开管理面板同步token</div>'}</div>
    </div>`,document.getElementById("trk-collapse")?.addEventListener("click",$),document.getElementById("trk-manager")?.addEventListener("click",N),document.getElementById("trk-rollall")?.addEventListener("click",()=>{T(),p("🎲 全员先攻已掷")}),document.getElementById("trk-ambush")?.addEventListener("click",()=>{const s=M();p(s?`⚡ 突袭！${s} 个伏兵现形冲顶`:"⚡ 全员重骰（没有隐形伏兵）")}),document.getElementById("trk-prev")?.addEventListener("click",()=>O()),document.getElementById("trk-next")?.addEventListener("click",()=>f()),document.getElementById("trk-reset")?.addEventListener("click",()=>S()),I(a.length),P()}let g=0,h=0;function I(t){if(!u)return;const n=B(),e=c?260:Math.min(1200,Math.max(380,(n?470:120)+t*100)),a=c?48:186;if(!(e===g&&a===h)){g=e,h=a;try{r.popover.setWidth(b,e)}catch{}try{r.popover.setHeight(b,a)}catch{}}}function $(){c=!c;try{localStorage.setItem("cpr_trk_collapsed",c?"1":"0")}catch{}g=0,h=0,d()}function N(){if(u){try{r.popover.close(y).catch(()=>{})}catch{}r.popover.open({id:y,url:new URL("initiative.html",window.location.href).href,width:420,height:640,anchorReference:"POSITION",anchorPosition:{left:120,top:200},disableClickAway:!0}).catch(t=>p("管理面板打开失败: "+t.message))}}let m=!1;async function P(){if(!u||m)return;const n=R().order.filter(e=>e.tokenId&&!k[e.tokenId]).map(e=>e.tokenId);if(n.length){m=!0;try{const e=await r.scene.items.getItems(n);let a=!1;for(const o of e){const i=o.image?.url;i&&(k[o.id]=i,a=!0)}a&&d()}catch{}m=!1}}function H(){return new Promise((t,n)=>{if(typeof r>"u"||!r.onReady){n(new Error("OBR SDK 不可用"));return}if(r.isReady){t();return}const e=setTimeout(()=>n(new Error("连接枭熊超时")),5e3);r.onReady(()=>{clearTimeout(e),t()})})}async function D(){if(!r.isAvailable){console.log("非枭熊环境，战斗轨以本地模式运行"),v(r);return}try{await H(),u=!0,v(r);try{const t=await r.player.getRole();A(t)}catch{}d()}catch(t){console.warn("OBR 初始化失败:",t.message)}}C(()=>d());d();D();
