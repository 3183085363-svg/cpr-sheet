import{O as s,u as $,v as R,n as k,w,x as T,y as I,z as S,l as C}from"./initiative-CvXwNudF.js";let b=!1;const r=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");let h=null;function i(e){const t=document.querySelector(".toast");t&&t.remove();const a=document.createElement("div");a.className="toast",a.textContent=e,document.body.appendChild(a),clearTimeout(h),h=setTimeout(()=>a.remove(),2e3)}function L(){const e={};try{const t=S(),a=C();if(a&&a.characters)for(const[n,c]of Object.entries(t)){const d=a.characters[n];d&&(e[c]=parseInt(d.stats?.反应)||0)}}catch{}return e}let l=[],p={},y=0;function g(){const e=l.length?l.map(B).join(""):'<div class="ci-empty">弗人先攻表里还没有角色。<br>先在枭熊里右键 token →「加入先攻」，再回来这里转公式。</div>',t=b?'<button class="ci-btn" id="ci-close" title="关闭">✕</button>':"";document.getElementById("app").innerHTML=`
    <div class="ci-head">
      <span class="ci-title">⚡ 先攻 · 赛博朋克红公式</span>
      ${t}
    </div>
    <div class="ci-hint">右键 token「加入先攻」后，在这里把公式转成 <b>REF + 1D10</b>（弗人面板会同步显示并排序）。</div>
    <div class="ci-bar">
      <button class="ci-btn" id="ci-refresh">🔄 刷新</button>
      <button class="ci-btn primary" id="ci-rollall" ${l.length?"":"disabled"}>🎲 全员 CPR 先攻</button>
    </div>
    <div class="ci-meta">弗人先攻表 · ${l.length} 个角色${y?` · 第 ${y} 轮`:""}</div>
    <div class="ci-list">${e}</div>
    <div class="ci-rules">先攻 = 反应 REF + 1D10（规则书 168 页）· 同值自动按弗人 tiebreak 排序 · 🚗 复制为载具会生成一条独立载具先攻</div>`,O()}function B(e){const t=e.layer==="MOUNT"?'<span class="ci-badge veh">🚗载具</span>':'<span class="ci-badge">🧍人物</span>',a=e.imageUrl?`<img class="ci-img" src="${r(e.imageUrl)}" alt="" draggable="false" />`:`<div class="ci-img ci-ph">${r((e.name||"？")[0])}</div>`,n=p[e.id]!==void 0?p[e.id]:e.modifier,c=e.total!=null?`<span class="ci-formula">${e.modifier}+${e.count}</span><span class="ci-total">${e.total}</span>`:'<span class="ci-formula">未掷</span><span class="ci-total">—</span>';return`
    <div class="ci-row${e.active?" cur":""}" data-id="${r(e.id)}">
      ${a}
      <div class="ci-main">
        <div class="ci-name">${r(e.name)}${t}</div>
        <div class="ci-refrow">
          <span class="ci-ref-label">REF</span>
          <input class="ci-ref" type="number" data-act="ref" value="${n}" title="反应 REF（先攻加值）" />
          <button class="ci-btn sm" data-act="roll" title="按 REF+1D10 骰这一个">🎲 骰1D10</button>
        </div>
      </div>
      <div class="ci-val">${c}</div>
      <button class="ci-btn sm dup" data-act="dup" title="复制为载具先攻（选一个 MOUNT 层载具 token）">🚗复制</button>
    </div>`}function O(){const e=t=>document.getElementById(t);e("ci-close")?.addEventListener("click",()=>{try{s.popover.close("cpr-initiative")}catch{}}),e("ci-refresh")?.addEventListener("click",()=>o()),e("ci-rollall")?.addEventListener("click",async()=>{if(!l.length)return;const t={};for(const a of l){const n=document.querySelector(`.ci-row[data-id="${CSS.escape(a.id)}"] .ci-ref`);t[a.id]=parseInt(n?.value)||p[a.id]||a.modifier||0}await $(t),i("🎲 全员已按 REF + 1D10 骰先攻"),await o()}),document.querySelectorAll(".ci-row").forEach(t=>{const a=t.dataset.id;t.querySelector('[data-act="ref"]')?.addEventListener("change",async n=>{const c=parseInt(n.target.value)||0;await R(a,c),i(`已设置 REF ${c}`),await o()}),t.querySelector('[data-act="roll"]')?.addEventListener("click",async()=>{const n=t.querySelector(".ci-ref"),c=parseInt(n?.value)||0;await k(a,c),i(`🎲 ${c} + 1D10 已掷`),await o()}),t.querySelector('[data-act="dup"]')?.addEventListener("click",()=>{M(a)})})}async function M(e){if(!b){i("⚠️ 仅在枭熊房间内可用");return}v();let t=[];try{t=await s.scene.items.getItems(c=>c.layer==="MOUNT")}catch(c){i("读取载具 token 失败: "+c.message);return}if(!t.length){i("地图上没有 MOUNT 层载具 token，先拖一个载具 token 到地图上");return}const a=t.map(c=>`
    <div class="vp-row" data-tid="${r(c.id)}">
      <span class="vp-name">${r(c.name||"未命名载具")}</span>
      <span class="vp-go">复制</span>
    </div>`).join(""),n=document.createElement("div");n.className="vp-overlay",n.id="vp-overlay",n.innerHTML=`
    <div class="vp-card">
      <div class="vp-head">🚗 选择载具 token（复制先攻到它）<span class="vp-close" id="vp-close">×</span></div>
      <div class="vp-list">${a}</div>
    </div>`,document.body.appendChild(n),document.getElementById("vp-close").addEventListener("click",v),n.addEventListener("click",c=>{c.target===n&&v()}),n.querySelectorAll(".vp-row").forEach(c=>{c.addEventListener("click",async()=>{const d=c.dataset.tid;v();try{const u=await I(e,d);i(`🚗 已复制为载具先攻：${u.mod} + 1D10=${u.mod+u.count}`)}catch(u){i("复制失败: "+u.message)}await o()})})}function v(){document.getElementById("vp-overlay")?.remove()}let m=!1;async function o(){if(!m){m=!0;try{p=L(),l=await w(),y=(await T()).round||0,g()}catch(e){console.warn("先攻桥接刷新失败:",e)}finally{m=!1}}}function q(){return new Promise((e,t)=>{if(typeof s>"u"||!s.onReady){t(new Error("OBR SDK 不可用"));return}if(s.isReady){e();return}const a=setTimeout(()=>t(new Error("连接枭熊超时")),5e3);s.onReady(()=>{clearTimeout(a),e()})})}let f=null;function E(){f&&clearTimeout(f),f=setTimeout(()=>o(),400)}async function D(){if(!s.isAvailable){console.log("非枭熊环境，先攻桥接面板以本地模式运行"),g();return}try{await q(),b=!0;try{s.scene.items.onChange(()=>E())}catch{}try{s.scene.onMetadataChange(()=>E())}catch{}await o()}catch(e){console.warn("OBR 初始化失败:",e.message)}}g();D();
