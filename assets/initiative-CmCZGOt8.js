import{o as w,g as b,O as c,i as v,s as A,r as B,n as C,p as O,c as I,d as M,e as f,t as x,v as N,f as H,u as F,h as P,j as U,k as G}from"./initiative-C2mXyNtZ.js";let p=!1;const D=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),l=t=>document.getElementById(t);let h=null;function u(t){const e=document.querySelector(".toast");e&&e.remove();const n=document.createElement("div");n.className="toast",n.textContent=t,document.body.appendChild(n),clearTimeout(h),h=setTimeout(()=>n.remove(),2e3)}function y(t,e,n){const i=t==="vehicle",o=i?"🚗 载具先攻":"🧍 人物先攻",d=i?"MOUNT":"CHARACTER",r=e.order.filter(a=>(a.kind||"pc")===t&&(n||!a.hidden)),s=e.order[e.current]||null,$=r.map((a,g)=>{const R=s&&a.id===s.id?" cur":"",k=a.hidden?" hidden-npc":"",S=(a.vehicle?'<span class="init-veh">🚗</span>':"")+(a.hidden?'<span class="init-veh" title="隐形NPC：仅GM可见">🕶️</span>':"")+(a.tokenId?'<span class="init-veh" title="已绑定地图token">🔗</span>':""),T=a.total!=null?`<span class="init-formula">${a.ref}+${a.roll}</span><span class="init-total">${a.total}</span>`:'<span class="init-formula">未掷</span><span class="init-total">—</span>',L=n?`<button class="init-mini" data-act="eye" title="${a.hidden?"取消隐形（玩家可见）":"设为隐形（玩家不可见）"}">${a.hidden?"🕶️":"👁"}</button>`:"",q=i?'<button class="init-mini" data-act="top" title="启动载具置顶（规则书192页）">🚗</button>':"";return`<div class="init-row${R}${k}" data-id="${a.id}">
      <span class="init-idx">${g+1}</span>
      <span class="init-name">${D(a.name)}${S}</span>
      <input class="init-ref-input" type="number" data-act="ref" value="${a.ref}" title="反应REF（改后已掷骰的自动重算总值）" />
      <span class="init-vals">${T}</span>
      <span class="init-acts">${L}${q}<button class="init-mini danger" data-act="del" title="移出队列">×</button></span>
    </div>`}).join(""),E=n?`<button class="init-btn" data-add-hidden="${t}" title="添加隐形NPC槽位（仅GM可见）">🕶️＋</button>`:"";return`
  <div class="init-sec">
    <div class="init-sec-title">
      <span>${o} <span class="init-sec-sub">扫描 ${d} 层</span></span>
      <span>
        <button class="init-btn" data-scan="${t}" title="导入地图上未绑定的token，并清理已删除token的槽位">🔍 同步地图token</button>
      </span>
    </div>
    <div class="init-list">${$||'<div class="init-empty">空 · 点「同步地图token」导入，或手动添加</div>'}</div>
    <div class="init-add">
      <input type="text" class="init-input" data-name="${t}" placeholder="名字" />
      <input type="number" class="init-input ref" data-ref="${t}" placeholder="REF" />
      <button class="init-btn" data-add="${t}">＋添加</button>
      ${E}
    </div>
  </div>`}function m(){const t=b(),e=P(),n=t.order.filter(d=>d.hidden).length,i=e&&n?`<span class="init-gm-badge">🕶️ ${n} 个隐形槽位</span>`:"",o=p?'<button class="init-btn" id="init-close" title="关闭浮窗">✕</button>':"";l("app").innerHTML=`
    <div class="init-head">
      <span class="init-title">⚡ 先攻序列 · 第 ${t.round} 轮 ${i}</span>
      ${o}
    </div>
    <div class="init-controls">
      <button class="init-btn primary" id="init-rollall">🎲 全员掷先攻</button>
      <button class="init-btn" id="init-prev">⏮</button>
      <button class="init-btn" id="init-next">⏭ 下一个</button>
      <button class="init-btn" id="init-fresh" title="保留名单重骰">↺</button>
      <button class="init-btn danger" id="init-reset" title="清空全部">🗑</button>
    </div>
    ${y("pc",t,e)}
    ${y("vehicle",t,e)}
    <div class="init-rules">规则：先攻=反应REF+1D10，同值自动重骰；🚗启动载具者置顶（规则书168/192页）· 与角色卡先攻tab实时同步</div>`,j()}function j(){l("init-rollall")?.addEventListener("click",()=>B()),l("init-next")?.addEventListener("click",()=>C()),l("init-prev")?.addEventListener("click",()=>O()),l("init-fresh")?.addEventListener("click",()=>I()),l("init-reset")?.addEventListener("click",()=>M()),l("init-close")?.addEventListener("click",()=>{try{c.popover.close("cpr-initiative")}catch{}}),document.querySelectorAll("[data-add]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.add,n=document.querySelector(`[data-name="${e}"]`).value.trim();if(!n)return;const i=document.querySelector(`[data-ref="${e}"]`).value||0;f(n,i,!1,{kind:e})})}),document.querySelectorAll("[data-add-hidden]").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.addHidden,n=document.querySelector(`[data-name="${e}"]`).value.trim()||"？？？",i=document.querySelector(`[data-ref="${e}"]`).value||0;f(n,i,!0,{kind:e})})}),document.querySelectorAll("[data-scan]").forEach(t=>{t.addEventListener("click",()=>K(t.dataset.scan))}),document.querySelectorAll(".init-row").forEach(t=>{const e=t.dataset.id;t.querySelectorAll(".init-mini").forEach(i=>{i.addEventListener("click",o=>{o.stopPropagation(),i.dataset.act==="eye"&&x(e),i.dataset.act==="top"&&(N(e),u("🚗 已启动载具，置顶先攻")),i.dataset.act==="del"&&H(e)})});const n=t.querySelector('[data-act="ref"]');n&&n.addEventListener("change",()=>F(e,{ref:n.value}))})}async function K(t){if(!p){u("⚠️ 仅在枭熊房间内可用");return}const e=t==="vehicle"?"MOUNT":"CHARACTER";try{const n=await c.scene.items.getItems(s=>s.layer===e),i=b(),o=new Set(i.order.filter(s=>s.tokenId).map(s=>s.tokenId)),d=n.filter(s=>!o.has(s.id));U(d.map(s=>({name:s.name||"未命名",ref:0,kind:t,tokenId:s.id})));const r=G(new Set(n.map(s=>s.id)),t);u(`✅ 导入 ${d.length} 个${e==="MOUNT"?"载具":"人物"}token`+(r?`，清理 ${r} 个失效槽位`:""))}catch(n){u("扫描失败: "+n.message)}}function V(){return new Promise((t,e)=>{if(typeof c>"u"||!c.onReady){e(new Error("OBR SDK 不可用"));return}if(c.isReady){t();return}const n=setTimeout(()=>e(new Error("连接枭熊超时")),5e3);c.onReady(()=>{clearTimeout(n),t()})})}async function z(){if(!c.isAvailable){console.log("非枭熊环境，先攻浮窗以本地模式运行"),v(c);return}try{await V(),p=!0,v(c);try{const t=await c.player.getRole();A(t)}catch{}m()}catch(t){console.warn("OBR 初始化失败:",t.message)}}w(()=>m());m();z();
