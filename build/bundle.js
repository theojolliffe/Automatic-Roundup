var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function d(){return s(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}function $(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function b(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}let x;function y(t){x=t}const _=[],v=[],k=[],j=[],w=Promise.resolve();let E=!1;function A(t){k.push(t)}const O=new Set;let C=0;function N(){const t=x;do{for(;C<_.length;){const t=_[C];C++,y(t),P(t.$$)}for(y(null),_.length=0,C=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];O.has(e)||(O.add(e),e())}k.length=0}while(_.length);for(;j.length;)j.pop()();E=!1,O.clear(),y(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const S=new Set;function q(t,e){-1===t.$$.dirty[0]&&(_.push(t),E||(E=!0,w.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(l,c,u,a,f,s,d,p=[-1]){const g=x;y(l);const h=l.$$={fragment:null,ctx:null,props:s,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(g?g.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:c.target||g.$$.root};d&&d(h.root);let m=!1;if(h.ctx=u?u(l,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&f(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&q(l,t)),e})):[],h.update(),m=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();c.intro&&(($=l.$$.fragment)&&$.i&&(S.delete($),$.i(b))),function(t,n,l,c){const{fragment:u,on_mount:i,on_destroy:a,after_update:f}=t.$$;u&&u.m(n,l),c||A((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(A)}(l,c.target,c.anchor,c.customElement),N()}var $,b;y(g)}function M(t,e,n){const o=t.slice();return o[8]=e[n],o[10]=n,o}function I(t,e,n){const o=t.slice();return o[0]=e[n],o}function L(e){let n,o,r,l,a=e[0].text+"";return{c(){n=f("option"),o=s(a),r=d(),n.__value=l=e[0],n.value=n.__value},m(t,e){u(t,n,e),c(n,o),c(n,r)},p:t,d(t){t&&i(n)}}}function T(t){let e,n,o=t[8]+"";return{c(){e=f("p"),n=s(o)},m(t,o){u(t,e,o),c(e,n)},p(t,e){4&e&&o!==(o=t[8]+"")&&h(n,o)},d(t){t&&i(e)}}}function z(t){let e,n,o=t[8]+"";return{c(){e=f("h2"),n=s(o)},m(t,o){u(t,e,o),c(e,n)},p(t,e){4&e&&o!==(o=t[8]+"")&&h(n,o)},d(t){t&&i(e)}}}function G(t){let e;function n(t,e){return 0==t[10]&t[8].length<100?z:T}let o=n(t),r=o(t);return{c(){r.c(),e=s("")},m(t,n){r.m(t,n),u(t,e,n)},p(t,l){o===(o=n(t))&&r?r.p(t,l):(r.d(1),r=o(t),r&&(r.c(),r.m(e.parentNode,e)))},d(t){r.d(t),t&&i(e)}}}function X(e){let n,r,l,s,h,x,y,_,v,k,j,w,E,O,C,N,P,S,q,B,T,z,X,H=e[4],J=[];for(let t=0;t<H.length;t+=1)J[t]=L(I(e,H,t));let K=e[2],Q=[];for(let t=0;t<K.length;t+=1)Q[t]=G(M(e,K,t));return{c(){n=f("div"),r=d(),l=f("div"),s=f("h1"),s.textContent="Automatic Roundup",h=d(),x=f("textarea"),y=d(),_=f("br"),v=d(),k=f("span"),k.textContent="Model:",j=d(),w=f("form"),E=f("select");for(let t=0;t<J.length;t+=1)J[t].c();O=d(),C=f("br"),N=d(),P=f("button"),P.textContent="Summarize",S=d(),q=f("p");for(let t=0;t<Q.length;t+=1)Q[t].c();B=d(),T=f("div"),$(n,"height","50px"),g(x,"placeholder","Copy and paste text from a statistical bulletin"),g(x,"class","svelte-1snmeyk"),$(k,"float","left"),$(k,"margin","8px"),void 0===e[0]&&A((()=>e[6].call(E))),$(l,"width","680px"),$(l,"margin","auto"),$(T,"height","50px")},m(t,o){u(t,n,o),u(t,r,o),u(t,l,o),c(l,s),c(l,h),c(l,x),m(x,e[1]),c(l,y),c(l,_),c(l,v),c(l,k),c(l,j),c(l,w),c(w,E);for(let t=0;t<J.length;t+=1)J[t].m(E,null);b(E,e[0]),c(l,O),c(l,C),c(l,N),c(l,P),c(l,S),c(l,q);for(let t=0;t<Q.length;t+=1)Q[t].m(q,null);u(t,B,o),u(t,T,o),z||(X=[p(x,"input",e[5]),p(E,"change",e[6]),p(P,"click",e[3])],z=!0)},p(t,[e]){if(2&e&&m(x,t[1]),16&e){let n;for(H=t[4],n=0;n<H.length;n+=1){const o=I(t,H,n);J[n]?J[n].p(o,e):(J[n]=L(o),J[n].c(),J[n].m(E,null))}for(;n<J.length;n+=1)J[n].d(1);J.length=H.length}if(17&e&&b(E,t[0]),4&e){let n;for(K=t[2],n=0;n<K.length;n+=1){const o=M(t,K,n);Q[n]?Q[n].p(o,e):(Q[n]=G(o),Q[n].c(),Q[n].m(q,null))}for(;n<Q.length;n+=1)Q[n].d(1);Q.length=K.length}},i:t,o:t,d(t){t&&i(n),t&&i(r),t&&i(l),a(J,t),a(Q,t),t&&i(B),t&&i(T),z=!1,o(X)}}}function H(t,e,n){let o="",r="";let l,c=[{id:0,text:"facebook/bart-large-cnn",url:"https://api-inference.huggingface.co/models/facebook/bart-large-cnn"},{id:1,text:"bart-large-cnn-finetuned-roundup",url:"https://api-inference.huggingface.co/models/theojolliffe/bart-large-cnn-finetuned-roundup"},{id:2,text:"bart-large-cnn-finetuned-roundup2",url:"https://api-inference.huggingface.co/models/theojolliffe/bart-large-cnn-finetuned-roundup2"},{id:3,text:"bart-large-cnn-finetuned-roundup3",url:"https://api-inference.huggingface.co/models/theojolliffe/bart-large-cnn-finetuned-roundup3"},{id:3,text:"bart-large-cnn-finetuned-roundup4",url:"https://api-inference.huggingface.co/models/theojolliffe/bart-large-cnn-finetuned-roundup4"},{id:4,text:"google/pegasus-cnn_dailymail",url:"https://api-inference.huggingface.co/models/google/pegasus-cnn_dailymail"}];return t.$$.update=()=>{1&t.$$.dirty&&console.log("selectedmodel",l)},[l,o,r,function(){console.log("Gen 2",o),async function(t){const e=await fetch(l.url,{headers:{Authorization:"Bearer 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"},method:"POST",body:JSON.stringify(t)});return await e.json()}({inputs:o,parameters:{max_length:1200}}).then((t=>{console.log("response",Object.values(t[0])[0]),n(2,r=Object.values(t[0])[0].replaceAll("<n>","\n").split("\n"))}))},c,function(){o=this.value,n(1,o)},function(){l=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,l),n(4,c)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),B(this,t,H,X,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
