(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function S(){}function X(e){return e()}function D(){return Object.create(null)}function L(e){e.forEach(X)}function Y(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let q;function G(e,t){return q||(q=document.createElement("a")),q.href=t,e===q.href}function ie(e){return Object.keys(e).length===0}function $(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function A(){return M(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.data!==t&&(e.data=t)}let T;function P(e){T=e}const O=[],Q=[];let C=[];const U=[],ue=Promise.resolve();let F=!1;function fe(){F||(F=!0,ue.then(ee))}function K(e){C.push(e)}const I=new Set;let k=0;function ee(){if(k!==0)return;const e=T;do{try{for(;k<O.length;){const t=O[k];k++,P(t),ae(t.$$)}}catch(t){throw O.length=0,k=0,t}for(P(null),O.length=0,k=0;Q.length;)Q.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];I.has(n)||(I.add(n),n())}C.length=0}while(O.length);for(;U.length;)U.pop()();F=!1,I.clear(),P(e)}function ae(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}function de(e){const t=[],n=[];C.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),C=t}const B=new Set;let E;function he(){E={r:0,c:[],p:E}}function _e(){E.r||L(E.c),E=E.p}function j(e,t){e&&e.i&&(B.delete(e),e.i(t))}function R(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),E.c.push(()=>{B.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function me(e){e&&e.c()}function te(e,t,n,r){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,n),r||K(()=>{const u=e.$$.on_mount.map(X).filter(Y);e.$$.on_destroy?e.$$.on_destroy.push(...u):L(u),e.$$.on_mount=[]}),i.forEach(K)}function ne(e,t){const n=e.$$;n.fragment!==null&&(de(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(O.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,r,o,i,u,y=[-1]){const h=T;P(e);const l=e.$$={fragment:null,ctx:[],props:i,update:S,not_equal:o,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:D(),dirty:y,skip_bound:!1,root:t.target||h.$$.root};u&&u(l.root);let m=!1;if(l.ctx=n?n(e,t.props||{},(a,p,..._)=>{const g=_.length?_[0]:p;return l.ctx&&o(l.ctx[a],l.ctx[a]=g)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](g),m&&pe(e,a)),p}):[],l.update(),m=!0,L(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const a=se(t.target);l.fragment&&l.fragment.l(a),a.forEach(x)}else l.fragment&&l.fragment.c();t.intro&&j(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),ee()}P(h)}class oe{$destroy(){ne(this,1),this.$destroy=S}$on(t,n){if(!Y(n))return S;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ge(e){let t,n,r,o,i,u,y=e[0].name+"",h,l,m,a=e[0].species+"",p;return{c(){t=v("div"),n=v("img"),i=A(),u=v("h1"),h=M(y),l=A(),m=v("h3"),p=M(a),G(n.src,r=e[0].image)||b(n,"src",r),b(n,"alt",o=e[0].name),b(t,"class","card")},m(_,g){N(_,t,g),$(t,n),$(t,i),$(t,u),$(u,h),$(t,l),$(t,m),$(m,p)},p(_,[g]){g&1&&!G(n.src,r=_[0].image)&&b(n,"src",r),g&1&&o!==(o=_[0].name)&&b(n,"alt",o),g&1&&y!==(y=_[0].name+"")&&J(h,y),g&1&&a!==(a=_[0].species+"")&&J(p,a)},i:S,o:S,d(_){_&&x(t)}}}function $e(e,t,n){let{character:r}=t;return e.$$set=o=>{"character"in o&&n(0,r=o.character)},[r]}class ye extends oe{constructor(t){super(),re(this,t,$e,ge,Z,{character:0})}}function V(e,t,n){const r=e.slice();return r[5]=t[n],r}function W(e){let t,n;return t=new ye({props:{character:e[5]}}),{c(){me(t.$$.fragment)},m(r,o){te(t,r,o),n=!0},p(r,o){const i={};o&1&&(i.character=r[5]),t.$set(i)},i(r){n||(j(t.$$.fragment,r),n=!0)},o(r){R(t.$$.fragment,r),n=!1},d(r){ne(t,r)}}}function be(e){let t,n,r,o,i,u,y,h,l,m,a,p,_,g,w=e[0],s=[];for(let c=0;c<w.length;c+=1)s[c]=W(V(e,w,c));const ce=c=>R(s[c],1,1,()=>{s[c]=null});return{c(){t=v("h1"),t.textContent="Rick and Morty Svelte",n=A(),r=v("div"),o=v("button"),i=M("Previous"),y=A(),h=v("button"),h.textContent="Next",l=A(),m=v("div"),a=v("div");for(let c=0;c<s.length;c+=1)s[c].c();b(t,"class","title"),b(o,"class","btn"),o.disabled=u=e[1]===1,b(h,"class","btn"),b(r,"class","buttons"),b(a,"class","cards"),b(m,"class","container")},m(c,d){N(c,t,d),N(c,n,d),N(c,r,d),$(r,o),$(o,i),$(r,y),$(r,h),N(c,l,d),N(c,m,d),$(m,a);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(a,null);p=!0,_||(g=[H(o,"click",e[3]),H(h,"click",e[2])],_=!0)},p(c,[d]){if((!p||d&2&&u!==(u=c[1]===1))&&(o.disabled=u),d&1){w=c[0];let f;for(f=0;f<w.length;f+=1){const z=V(c,w,f);s[f]?(s[f].p(z,d),j(s[f],1)):(s[f]=W(z),s[f].c(),j(s[f],1),s[f].m(a,null))}for(he(),f=w.length;f<s.length;f+=1)ce(f);_e()}},i(c){if(!p){for(let d=0;d<w.length;d+=1)j(s[d]);p=!0}},o(c){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)R(s[d]);p=!1},d(c){c&&x(t),c&&x(n),c&&x(r),c&&x(l),c&&x(m),le(s,c),_=!1,L(g)}}}function ve(e,t,n){let r=[],o=1;async function i(){const l=await(await fetch(`https://rickandmortyapi.com/api/character?page=${o}`)).json();n(0,r=l.results)}i();function u(){n(1,o++,o),i()}function y(){n(1,o--,o),i()}return[r,o,u,y]}class we extends oe{constructor(t){super(),re(this,t,ve,be,Z,{})}}new we({target:document.getElementById("app")});
