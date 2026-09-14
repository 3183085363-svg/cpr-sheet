import{O as r}from"./index-zakNA_E2.js";import{o as T,g as B,n as f,r as M,j as _,p as O,b as S,i as y,s as D,e as C}from"./initiative-D7YkcTMD.js";const E="cpr-tracker",b="cpr-initiative",G="cpr/tracker/drag-start",P="cpr/tracker/drag-cancel",N="cpr/tracker/drag-reset";let p=!1,o=!1;try{o=localStorage.getItem("cpr_trk_collapsed")==="1"}catch{}const g={},d=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");let L=null;function u(t){const e=document.querySelector(".toast");e&&e.remove();const n=document.createElement("div");n.className="toast",n.textContent=t,document.body.appendChild(n),clearTimeout(L),L=setTimeout(()=>n.remove(),2e3)}function $(){const t=document.getElementById("trk-grip");t&&(t.addEventListener("pointerdown",e=>{if(e.button!==0)return;e.preventDefault(),e.stopPropagation(),t.classList.add("is-dragging");try{r.broadcast.sendMessage(G,{screenX:e.screenX,screenY:e.screenY,w:window.innerWidth,h:window.innerHeight},{destination:"LOCAL"})}catch{}const n=i=>{if(t.classList.remove("is-dragging"),document.removeEventListener("pointerup",c,!0),document.removeEventListener("pointercancel",s,!0),clearTimeout(a),i)try{r.broadcast.sendMessage(P,{},{destination:"LOCAL"})}catch{}},c=()=>n(!0),s=()=>n(!0);document.addEventListener("pointerup",c,!0),document.addEventListener("pointercancel",s,!0);const a=setTimeout(()=>n(!1),800)}),t.addEventListener("contextmenu",e=>{e.preventDefault();try{r.broadcast.sendMessage(N,{},{destination:"LOCAL"}),u("↩ 战斗轨已复位到顶部中央")}catch{}}))}const w='<svg viewBox="0 0 10 16" fill="currentColor"><circle cx="2.5" cy="3" r="1.6"/><circle cx="7.5" cy="3" r="1.6"/><circle cx="2.5" cy="8" r="1.6"/><circle cx="7.5" cy="8" r="1.6"/><circle cx="2.5" cy="13" r="1.6"/><circle cx="7.5" cy="13" r="1.6"/></svg>';function W(t,e){const n=e&&t.id===e.id?" cur":"",c=t.hidden?" hidden-npc":"",s=t.tokenId&&g[t.tokenId],a=s?`<img class="trk-img" src="${d(s)}" alt="" draggable="false" />`:`<div class="trk-img trk-ph">${d((t.name||"？")[0])}</div>`,i=t.hidden?'<span class="trk-hidden-badge">🕶</span>':"",h=t.vehicle?'<span class="trk-veh-badge">🚗</span>':"",x=t.total!=null?t.total:"—",A=`${d(t.name)} · REF${t.ref}${t.total!=null?` · ${t.ref}+${t.roll}=${t.total}`:" · 未掷"}${t.hidden?" · 隐形":""}`;return`<div class="trk-card${n}${c}" title="${A}">
    <span class="trk-mod">+${t.ref}</span>
    ${i}${h}
    ${a}
    <div class="trk-foot">
      <span class="trk-total">${x}</span>
      <span class="trk-name">${d(t.name)}</span>
    </div>
  </div>`}function l(){const t=B(),e=C(),n=t.order[t.current]||null,c=t.order.filter(i=>e||!i.hidden);if(o){const i=n&&(e||!n.hidden)?n.name:"—";document.getElementById("app").innerHTML=`
      <div class="trk-root">
        <div class="trk-pill">
          <div class="trk-grip" id="trk-grip" title="拖动移动 · 右键复位">${w}</div>
          <button class="chip" id="trk-expand" title="展开战斗轨">∧</button>
          <span class="trk-round" title="轮次">R${t.round}</span>
          <span class="trk-curname">▶ ${d(i)}</span>
          ${e?'<button class="chip" id="trk-next" title="下一个">⏭</button>':""}
        </div>
      </div>`,$(),document.getElementById("trk-expand")?.addEventListener("click",R),document.getElementById("trk-next")?.addEventListener("click",()=>f()),I(0);return}const s=c.map(i=>W(i,n)).join(""),a=e?`
      <div class="trk-side-row">
        <button class="chip warn" id="trk-rollall" title="全员掷先攻 REF+1d10">⚔ 掷骰</button>
        <button class="chip danger" id="trk-ambush" title="突袭：全员重骰，隐形NPC现形冲顶">⚡ 突袭</button>
      </div>
      <div class="trk-side-row">
        <button class="chip" id="trk-prev" title="上一个">⏮</button>
        <button class="chip" id="trk-next" title="下一个">⏭</button>
        <button class="chip" id="trk-manager" title="先攻管理（同步token/隐形/手动添加）">⚙</button>
        <button class="chip danger" id="trk-reset" title="清空全部槽位">🗑</button>
      </div>`:"";document.getElementById("app").innerHTML=`
    <div class="trk-root">
      <div class="trk-row">
        <div class="trk-grip" id="trk-grip" title="拖动移动 · 右键复位">${w}</div>
        <div class="trk-cards" id="trk-cards">${s||'<div class="trk-empty-chip">空 · GM 点 ⚙ 同步地图token</div>'}</div>
        <div class="trk-side">
          <div class="trk-side-row">
            <span class="trk-round" title="第 ${t.round} 轮">R${t.round}</span>
            <button class="chip" id="trk-collapse" title="折叠战斗轨">∨</button>
          </div>
          ${a}
        </div>
      </div>
    </div>`,$(),H(),document.getElementById("trk-collapse")?.addEventListener("click",R),document.getElementById("trk-manager")?.addEventListener("click",U),document.getElementById("trk-rollall")?.addEventListener("click",()=>{M(),u("🎲 全员先攻已掷")}),document.getElementById("trk-ambush")?.addEventListener("click",()=>{const i=_();u(i?`⚡ 突袭！${i} 个伏兵现形冲顶`:"⚡ 全员重骰（没有隐形伏兵）")}),document.getElementById("trk-prev")?.addEventListener("click",()=>O()),document.getElementById("trk-next")?.addEventListener("click",()=>f()),document.getElementById("trk-reset")?.addEventListener("click",()=>S()),I(c.length),X()}function H(){const t=document.getElementById("trk-cards");t&&t.addEventListener("wheel",e=>{t.scrollWidth<=t.clientWidth||(e.preventDefault(),t.scrollLeft+=(e.deltaY||0)+(e.deltaX||0))},{passive:!1})}let v=0,k=0;function I(t){if(!p)return;const e=C(),n=o?e?160:100:e?176:84,c=o?Math.min(360,n+Math.min(160,90)):Math.min(1400,Math.max(320,30+n+24+t*60)),s=o?46:108;if(!(c===v&&s===k)){v=c,k=s;try{r.popover.setWidth(E,c)}catch{}try{r.popover.setHeight(E,s)}catch{}}}function R(){o=!o;try{localStorage.setItem("cpr_trk_collapsed",o?"1":"0")}catch{}v=0,k=0,l()}function U(){if(p){try{r.popover.close(b).catch(()=>{})}catch{}r.popover.open({id:b,url:new URL("initiative.html",window.location.href).href,width:420,height:640,anchorReference:"POSITION",anchorPosition:{left:120,top:200},disableClickAway:!0}).catch(t=>u("管理面板打开失败: "+t.message))}}let m=!1;async function X(){if(!p||m)return;const e=B().order.filter(n=>n.tokenId&&!g[n.tokenId]).map(n=>n.tokenId);if(e.length){m=!0;try{const n=await r.scene.items.getItems(e);let c=!1;for(const s of n){const a=s.image?.url;a&&(g[s.id]=a,c=!0)}c&&l()}catch{}m=!1}}function Y(){return new Promise((t,e)=>{if(typeof r>"u"||!r.onReady){e(new Error("OBR SDK 不可用"));return}if(r.isReady){t();return}const n=setTimeout(()=>e(new Error("连接枭熊超时")),5e3);r.onReady(()=>{clearTimeout(n),t()})})}async function F(){if(!r.isAvailable){console.log("非枭熊环境，战斗轨以本地模式运行"),y(r);return}try{await Y(),p=!0,y(r);try{const t=await r.player.getRole();D(t)}catch{}l()}catch(t){console.warn("OBR 初始化失败:",t.message)}}T(()=>l());l();F();
