const n=[{key:"sedan",name:"轿车"},{key:"hatch",name:"两厢车"},{key:"suv",name:"越野车"},{key:"jeep",name:"吉普"},{key:"truck",name:"卡车"},{key:"moto",name:"摩托"},{key:"aero",name:"浮空车"}],k=Object.fromEntries(n.map(t=>[t.key,t])),l=t=>k[t]?.name||"轿车",d=t=>/^#[0-9a-f]{6}$/i.test(t||"")?t:"#FCEE0A";function i(t,e,o,r){return[o,r].map(s=>`<rect x="${t}" y="${s}" width="8" height="22" rx="3" fill="#050608"/><rect x="${e}" y="${s}" width="8" height="22" rx="3" fill="#050608"/>`).join("")}const a=t=>`<path d="${t}" fill="#101923" stroke="#8ba0aa" stroke-opacity=".38" stroke-width="1"/>`,h=(t=9)=>`<path d="M22 ${t}h11M47 ${t}h11" stroke="#fffbd2" stroke-width="3" stroke-linecap="round"/><path d="M22 111h11M47 111h11" stroke="#ff3b30" stroke-width="2.5" stroke-linecap="round"/>`;function f(t,e){if(t==="moto")return`
    <rect x="34" y="3" width="12" height="28" rx="6" fill="#050608"/><rect x="34" y="89" width="12" height="28" rx="6" fill="#050608"/>
    <path d="M40 24L50 44 48 80 40 98 32 80 30 44Z" fill="${e}" stroke="#fff" stroke-opacity=".35"/>
    <path d="M40 39L47 57 40 70 33 57Z" fill="#101923"/>
    <circle cx="40" cy="78" r="10" fill="#16191e" stroke="${e}" stroke-width="3"/>
    <path d="M24 44h32M28 86h24" stroke="${e}" stroke-width="4" stroke-linecap="round"/>
    <path d="M36 8h8" stroke="#fffbd2" stroke-width="3" stroke-linecap="round"/>`;if(t==="aero")return`
    <path d="M40 3L59 26 72 75 61 108 40 117 19 108 8 75 21 26Z" fill="${e}" stroke="#fff" stroke-opacity=".4" stroke-width="1.5"/>
    <path d="M40 17L54 36 57 61 40 69 23 61 26 36Z" fill="#101923" stroke="#7ce7ef" stroke-opacity=".6"/>
    <path d="M14 67L3 82 16 92M66 67L77 82 64 92" fill="none" stroke="${e}" stroke-width="7" stroke-linecap="round"/>
    <path d="M24 104L29 116M56 104L51 116" stroke="#05d9e8" stroke-width="6" stroke-linecap="round"/>
    <path d="M29 10h22" stroke="#fffbd2" stroke-width="3" stroke-linecap="round"/>`;if(t==="truck")return`
    ${i(8,64,20,77)}
    <path d="M15 4H65V47H15Z" fill="${e}" stroke="#fff" stroke-opacity=".35"/>
    <path d="M12 50H68V116H12Z" fill="#20242a" stroke="${e}" stroke-width="3"/>
    ${a("M22 12H58V30H22Z")}
    <path d="M20 58V108M60 58V108M20 65H60M20 100H60" stroke="#68717a" stroke-width="2"/>
    ${h(8)}`;const o=t==="jeep"||t==="suv",r=t==="hatch",s=o?"M18 5H62L68 22V103L60 116H20L12 103V22Z":r?"M24 5H56L65 26 62 99 54 113H26L18 99 15 26Z":"M25 4H55L64 25 60 44 65 83 57 115H23L15 83 20 44 16 25Z";return`
    ${i(7,65,20,78)}
    <path d="${s}" fill="${e}" stroke="#fff" stroke-opacity=".38" stroke-width="1.4"/>
    ${a(o?"M21 20H59V43H21Z":"M23 23H57L59 43H21Z")}
    ${a(r?"M22 65H58V88H22Z":"M22 66H58L56 88H24Z")}
    <path d="M20 48H60M20 94H60" stroke="#0a0a0c" stroke-opacity=".35" stroke-width="2"/>
    ${o?'<path d="M25 10V105M55 10V105" stroke="#fff" stroke-opacity=".18" stroke-width="2"/>':""}
    ${t==="jeep"?'<circle cx="40" cy="103" r="10" fill="#11151a" stroke="#737b82" stroke-width="2"/>':""}
    ${h(9)}`}function c(t="sedan",e="#FCEE0A"){const o=d(e),r=k[t]?t:"sedan";return`<svg class="vehicle-svg" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${f(r,o)}</svg>`}function p(t="sedan"){return n.map(e=>`<option value="${e.key}"${e.key===t?" selected":""}>${e.name}</option>`).join("")}export{l as a,p as k,c as v};
