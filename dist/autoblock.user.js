// ==UserScript==
// @name         social-autoblocker
// @namespace    npm/vite-plugin-monkey
// @version      0.20
// @author       gauchedinternet
// @description  Collect usernames to block and download them as a .txt file.
// @downloadURL  https://raw.githubusercontent.com/gauchedinternet/autoblock/main/script.js
// @updateURL    https://raw.githubusercontent.com/gauchedinternet/autoblock/main/script.js
// @match        *://*.instagram.com/*
// @match        *://*.tiktok.com/*
// @match        *://*.x.com/*
// @match        *://*.bsky.app/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
	'use strict';

	var t=Object.defineProperty,e=(e,o,n)=>((e,o,n)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n)(e,"symbol"!=typeof o?o+"":o,n);function o(){}function n(t){return t()}function i(){return Object.create(null)}function a(t){t.forEach(n);}function c(t){return "function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e);}function l(t,e,o){t.insertBefore(e,o||null);}function u(t){t.parentNode&&t.parentNode.removeChild(t);}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function h(t,e,o,n){return t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e);}function m(t,e,o,n){null==o?t.style.removeProperty(e):t.style.setProperty(e,o,"");}let b;function k(t){b=t;}const w=[],x=[];let $=[];const y=[],v=Promise.resolve();let S=!1;function _(t){$.push(t);}const B=new Set;let L=0;function E(){if(0!==L)return;const t=b;do{try{for(;L<w.length;){const t=w[L];L++,k(t),A(t.$$);}}catch(e){throw w.length=0,L=0,e}for(k(null),w.length=0,L=0;x.length;)x.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];B.has(e)||(B.add(e),e());}$.length=0;}while(w.length);for(;y.length;)y.pop()();S=!1,B.clear(),k(t);}function A(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_);}}const C=new Set;function N(t,e){const o=t.$$;null!==o.fragment&&(!function(t){const e=[],o=[];$.forEach((n=>-1===t.indexOf(n)?e.push(n):o.push(n))),o.forEach((t=>t())),$=e;}(o.after_update),a(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[]);}function O(t,e){-1===t.$$.dirty[0]&&(w.push(t),S||(S=!0,v.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31;}function T(t,e,r,s,l,d,f=null,p=[-1]){const h=b;k(t);const g=t.$$={fragment:null,ctx:[],props:d,update:o,not_equal:l,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:i(),dirty:p,skip_bound:!1,root:e.target||h.$$.root};f&&f(g.root);let m=!1;if(g.ctx=r?r(t,e.props||{},((e,o,...n)=>{const i=n.length?n[0]:o;return g.ctx&&l(g.ctx[e],g.ctx[e]=i)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](i),m&&O(t,e)),o})):[],g.update(),m=!0,a(g.before_update),g.fragment=!!s&&s(g.ctx),e.target){if(e.hydrate){const t=($=e.target,Array.from($.childNodes));g.fragment&&g.fragment.l(t),t.forEach(u);}else g.fragment&&g.fragment.c();e.intro&&((w=t.$$.fragment)&&w.i&&(C.delete(w),w.i(x))),function(t,e,o){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,o),_((()=>{const e=t.$$.on_mount.map(n).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...e):a(e),t.$$.on_mount=[];})),r.forEach(_);}(t,e.target,e.anchor),E();}var w,x,$;k(h);}class I{constructor(){e(this,"$$"),e(this,"$$set");}$destroy(){N(this,1),this.$destroy=o;}$on(t,e){if(!c(e))return o;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1);}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1);}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");class P{constructor(t,e){this.network=t,this.username=e;}}class F{static init(){let t=localStorage.getItem("autoBlock");null!==t&&(this.data=JSON.parse(t));}static accountLength(){return this.data.account.length}static lookAccount(){return this.data.account[0]}static popAccount(){let t=this.data.account.shift();return this.save(),t}static pushAccount(t){this.data.account.push(t),this.save();}static writeAccount(t){this.data.account=t,this.save();}static switchState(){this.data.state=!this.data.state,this.save();}static resetCounters(){this.data.blocked=0,this.data.notBlocked=0,this.save();}static save(){localStorage.setItem("autoBlock",JSON.stringify(this.data));}static async loadFromInputFile(t){const e=t.target.files[0],o=(await e.text()).split(/\r?\n/).map((t=>{let e=t.split(",");return new P(e[0],e[1])}));this.writeAccount(o);}}e(F,"data",new class{constructor(){e(this,"account",[]),e(this,"blocked",0),e(this,"notBlocked",0),e(this,"state",!1),e(this,"hide",!1);}});let U={"www.instagram.com":{blockListKey:"instagramBlockList",profileUrl:t=>`https://www.instagram.com/${t}`,actionsList:[{info:"Searching for option button",target:'[role="button"]:has([aria-label="Options"])',action:"click",timeout:5e3,sleep:1e3},{info:"Searching for follow button",target:"button:nth-child(1)",action:"store",timeout:5e3,sleep:1e3},{info:"Searching for block button",target:'[role="dialog"] button:nth-child(1)',action:"click",check:(t,e)=>t.innerText!==e.at(-1),timeout:5e3,sleep:1e3},{info:"Searching for block confirmation button",target:'[role="dialog"] button:nth-child(1):nth-last-of-type(2)',action:"click",timeout:5e3,sleep:1e3}]},"www.tiktok.com":{blockListKey:"tiktokBlockList",profileUrl:t=>`https://www.tiktok.com/${t=t.startsWith("@")?t:"@"+t}`,actionsList:[{info:"Searching for option button",target:'[data-e2e="user-more"]',action:"mouseover",timeout:5e3,sleep:1e3},{info:"Searching for follow button",target:'[data-e2e="follow-button"]',action:"store",timeout:5e3,sleep:1e3},{info:"Searching for block button",target:'[data-e2e="user-report"] [role="button"]:nth-last-of-type(1)',action:"click",check:(t,e)=>t.innerText!==e.at(-1),timeout:5e3,sleep:1e3},{info:"Searching for block confirmation button",target:'button[data-e2e="block-popup-block-btn"]',action:"click",timeout:5e3,sleep:1e3}]},"x.com":{blockListKey:"xBlockList",profileUrl:t=>`https://x.com/${t}`,actionsList:[{info:"Searching for follow button",target:'[data-testid="placementTracking"] button',action:"mouseover",timeout:5e3,sleep:1e3},{info:"Storing follow button",target:'[data-testid="placementTracking"]',action:"store",timeout:5e3,sleep:1e3},{info:"Searching for option button",target:'[data-testid="userActions"]',action:"click",timeout:5e3,sleep:1e3},{info:"Searching for block button",target:'[data-testid="block"]',action:"click",check:(t,e)=>!t.innerText.includes(e.at(-1)),timeout:5e3,sleep:1e3},{info:"Searching for block confirmation button",target:'[data-testid="confirmationSheetConfirm"]',action:"click",timeout:5e3,sleep:1e3}]},"bsky.app":{blockListKey:"bskyBlockList",profileUrl:t=>`https://bsky.app/profile/${t}`,actionsList:[{info:"Searching for follow button",target:'[role="button"][data-testid="followBtn"]',action:"store",timeout:5e3,sleep:1e3},{info:"Searching for option button",target:'[role="button"][data-testid="profileHeaderDropdownBtn"]',action:"click",timeout:5e3,sleep:1e3},{info:"Searching for block button",target:'[role="menuitem"][data-testid="profileHeaderDropdownBlockBtn"]',action:"click",check:(t,e)=>t.innerText!==e.at(-1),timeout:5e3,sleep:1e3},{info:"Searching for block confirmation button",target:'[role="button"][data-testid="confirmBtn"]',action:"click",timeout:5e3,sleep:1e3}]}};function j(t){return new Promise((e=>setTimeout(e,t)))}function D(t,e){return new Promise(((o,n)=>{const i=Number(new Date)+e,a=setInterval((()=>{Number(new Date)>i&&(clearInterval(a),n(new Error("Element not found within time: "+t)));const e=document.querySelector(t);e&&(clearInterval(a),o(e));}),100);}))}function K(t,e){console.log(`Simulating ${e} event`);const o=new MouseEvent(e,{view:window,bubbles:!0,cancelable:!0});t.dispatchEvent(o),console.log(`${e} event triggered`);}class M{static async init(){if(!F.data.state)return;const t=F.lookAccount();if(!t)return console.log("All the users were blocked!"),F.switchState(),void(window.location.href=window.location.host);let e=t.network,o=U[e].profileUrl(t.username);window.location.href.includes(o)?(await this.performBlockOperation(e)?F.data.blocked++:F.data.notBlocked++,F.accountLength()>0&&F.popAccount(),F.save(),await this.init()):window.location.href=o;}static async startStopResume(){F.resetCounters(),F.switchState(),await this.init();}static async performBlockOperation(t){let e=Array(),o=!0;for(let i of U[t].actionsList){console.info(i.info);try{let t=await D(i.target,i.timeout);if(i.check&&!i.check(t,e))break;"store"===i.action?null===t.textContent?e.push(""):e.push(t.textContent):K(t,i.action),await j(i.sleep);}catch(n){o=!1,console.trace(n);break}}return o}}function H(t){let e,o,n,i,c,r,b,k,w,x,$,y,v,S,_,B,L,E,A,C,N=t[0].data.blocked+"",O=t[0].data.notBlocked+"",T=t[0].data.account.length+"";return {c(){var t,a,s;e=d("div"),o=d("h3"),o.textContent="Block List Manager",n=p(),i=d("input"),c=p(),r=d("button"),r.textContent="Start / Stop",b=p(),k=d("p"),w=f("Blocked : "),x=f(N),$=p(),y=d("p"),v=f("Not Blocked : "),S=f(O),_=p(),B=d("p"),L=f("Remaining : "),E=f(T),m(o,"text-align","center"),m(o,"margin-bottom","10px"),m(o,"color","#333"),m(i,"width","100%"),m(i,"margin-top","10px"),a="type",s="file",(t=i).getAttribute(a)!==s&&t.setAttribute(a,s),m(r,"background-color","#FE2C55"),m(r,"color","#fff"),m(r,"border","none"),m(r,"padding","10px"),m(r,"margin-top","5px"),m(r,"width","100%"),m(r,"border-radius","5px"),m(r,"cursor","pointer"),m(k,"color","#000"),m(k,"padding","10px"),m(k,"margin","0px"),m(k,"width","100%"),m(y,"color","#000"),m(y,"padding","10px"),m(y,"margin","0px"),m(y,"width","100%"),m(B,"color","#000"),m(B,"padding","10px"),m(B,"margin","0px"),m(B,"width","100%"),m(e,"position","fixed"),m(e,"top","100px"),m(e,"display","block"),m(e,"right","20px"),m(e,"width","250px"),m(e,"background-color","#fff"),m(e,"box-shadow","#00000019 0px 4px 8px"),m(e,"padding","10px"),m(e,"border-radius","8px"),m(e,"z-index","1000000");},m(a,u){l(a,e,u),s(e,o),s(e,n),s(e,i),s(e,c),s(e,r),s(e,b),s(e,k),s(k,w),s(k,x),s(e,$),s(e,y),s(y,v),s(y,S),s(e,_),s(e,B),s(B,L),s(B,E),A||(C=[h(i,"input",t[3]),h(r,"click",t[4])],A=!0);},p(t,e){1&e&&N!==(N=t[0].data.blocked+"")&&g(x,N),1&e&&O!==(O=t[0].data.notBlocked+"")&&g(S,O),1&e&&T!==(T=t[0].data.account.length+"")&&g(E,T);},d(t){t&&u(e),A=!1,a(C);}}}function R(t){let e,n,i,a,c,r=!t[1]&&H(t);return {c(){e=d("button"),e.innerHTML='<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="12"></circle><circle cx="128" cy="60" r="12"></circle><circle cx="128" cy="196" r="12"></circle></svg>',n=p(),r&&r.c(),i=f(""),m(e,"width","32px"),m(e,"height","32px"),m(e,"position","absolute"),m(e,"top","60px"),m(e,"right","20px"),m(e,"background-color","#fff"),m(e,"box-shadow","0 4px 8px #00000019"),m(e,"border-radius","8px"),m(e,"z-index","1000000");},m(o,s){l(o,e,s),l(o,n,s),r&&r.m(o,s),l(o,i,s),a||(c=h(e,"click",t[2]),a=!0);},p(t,[e]){t[1]?r&&(r.d(1),r=null):r?r.p(t,e):(r=H(t),r.c(),r.m(i.parentNode,i));},i:o,o:o,d(t){t&&(u(e),u(n),u(i)),r&&r.d(t),a=!1,c();}}}function q(t,e,o){F.init(),M.init();let n=F.data.hide;return [F,n,function(){o(0,F.data.hide=!F.data.hide,F),o(1,n=F.data.hide),F.save();},t=>F.loadFromInputFile(t),()=>M.startStopResume()]}new class extends I{constructor(t){super(),T(this,t,q,R,r,{});}}({target:(()=>{const t=document.createElement("div");return document.body.append(t),t})()});

})();