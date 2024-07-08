import{s as F,e as p,b as A,t as j,d as m,f as E,i as _,j as y,h as B,v as h,k as q,l as g,O as w,m as N,n as D,P as H,Q as U}from"../chunks/scheduler.DYY50ysX.js";import{S as L,i as T,t as P,c as z,a as I,b as G,d as K,m as Q,e as W,g as $}from"../chunks/index.DBxH0aWG.js";import{e as M}from"../chunks/each.D6YF6ztN.js";import"../chunks/paths.BF4_9SuT.js";async function J(){return{tags:["Plugged Activity","Inquiry-Based Learning","Rubber Ducky Technique","Skills learned are transferable","Collaborative Learning","Students get feedback from peers","PRIMM","Respects different forms of diversity","Outlines prior knowledge needed","Pair Programming","Use, Modify, Create","Objectives align with standards","FREE SPACE","Meets the depth of the referenced SOLs","Mental Models for CS Concepts",`Planned Accommo-
dations`,"Hands-on Learning","CS Vocab Explicitly Taught","Obvious Connections",`Extension Oppor-
tunities`,"Assesses Student Readiness (Discussion, KWL, etc.)","Connects to students' backgrounds",`Expansive oppor-
tunities for inquiry`,"Unplugged Activity","Assessment Aligns with Objectives"]}}const X=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,load:J,prerender:X},Symbol.toStringTag,{value:"Module"}));function Y(c){let e,s,i,d,a,r,o,b,v,n,S,l,u;return{c(){e=p("div"),s=p("div"),d=A(),a=p("div"),r=p("span"),o=p("input"),b=A(),v=p("p"),n=j(c[1]),this.h()},l(t){e=m(t,"DIV",{class:!0});var f=E(e);s=m(f,"DIV",{class:!0});var C=E(s);C.forEach(_),d=y(f),a=m(f,"DIV",{class:!0});var k=E(a);r=m(k,"SPAN",{class:!0});var O=E(r);o=m(O,"INPUT",{type:!0,class:!0}),O.forEach(_),b=y(k),v=m(k,"P",{class:!0});var R=E(v);n=B(R,c[1]),R.forEach(_),k.forEach(_),f.forEach(_),this.h()},h(){h(s,"class",i="background "+(c[1]=="FREE SPACE"?"free":"")+" svelte-1osr6rq"),h(o,"type","checkbox"),h(o,"class","svelte-1osr6rq"),h(r,"class","checkbox svelte-1osr6rq"),h(v,"class","is-vcentered svelte-1osr6rq"),h(a,"class",S="foreground has-text-centered p-3 "+(c[1]=="FREE SPACE"?"free":"")+" svelte-1osr6rq"),h(e,"class","cell p-0 has-text-centered svelte-1osr6rq")},m(t,f){q(t,e,f),g(e,s),g(e,d),g(e,a),g(a,r),g(r,o),o.checked=c[0],g(a,b),g(a,v),g(v,n),l||(u=w(o,"change",c[2]),l=!0)},p(t,[f]){f&2&&i!==(i="background "+(t[1]=="FREE SPACE"?"free":"")+" svelte-1osr6rq")&&h(s,"class",i),f&1&&(o.checked=t[0]),f&2&&N(n,t[1]),f&2&&S!==(S="foreground has-text-centered p-3 "+(t[1]=="FREE SPACE"?"free":"")+" svelte-1osr6rq")&&h(a,"class",S)},i:D,o:D,d(t){t&&_(e),l=!1,u()}}}function Z(c,e,s){let{tag:i=""}=e,{checked:d=!1}=e;function a(){d=this.checked,s(0,d)}return c.$$set=r=>{"tag"in r&&s(1,i=r.tag),"checked"in r&&s(0,d=r.checked)},[d,i,a]}class ee extends L{constructor(e){super(),T(this,e,Z,Y,F,{tag:1,checked:0})}}function V(c,e,s){const i=c.slice();return i[1]=e[s],i}function x(c){let e,s,i,d;return s=new ee({props:{checked:c[1]=="FREE SPACE",tag:c[1]}}),{c(){e=p("div"),G(s.$$.fragment),i=A(),this.h()},l(a){e=m(a,"DIV",{class:!0});var r=E(e);K(s.$$.fragment,r),i=y(r),r.forEach(_),this.h()},h(){h(e,"class","cell svelte-15ihgts")},m(a,r){q(a,e,r),Q(s,e,null),g(e,i),d=!0},p(a,r){const o={};r&1&&(o.checked=a[1]=="FREE SPACE"),r&1&&(o.tag=a[1]),s.$set(o)},i(a){d||(P(s.$$.fragment,a),d=!0)},o(a){I(s.$$.fragment,a),d=!1},d(a){a&&_(e),W(s)}}}function te(c){let e,s,i,d="<h1>CS Best Practices<br/>BINGO</h1>",a,r,o,b,v=M(c[0].tags),n=[];for(let l=0;l<v.length;l+=1)n[l]=x(V(c,v,l));const S=l=>I(n[l],1,1,()=>{n[l]=null});return{c(){e=p("section"),s=p("div"),i=p("div"),i.innerHTML=d,a=A(),r=p("div"),o=p("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=m(l,"SECTION",{class:!0});var u=E(e);s=m(u,"DIV",{class:!0});var t=E(s);i=m(t,"DIV",{class:!0,"data-svelte-h":!0}),H(i)!=="svelte-19stbvh"&&(i.innerHTML=d),a=y(t),r=m(t,"DIV",{class:!0});var f=E(r);o=m(f,"DIV",{class:!0});var C=E(o);for(let k=0;k<n.length;k+=1)n[k].l(C);C.forEach(_),f.forEach(_),t.forEach(_),u.forEach(_),this.h()},h(){h(i,"class","has-text-centered content"),h(o,"class","grid"),h(r,"class","board fixed-grid has-5-cols svelte-15ihgts"),h(s,"class","container"),h(e,"class","section")},m(l,u){q(l,e,u),g(e,s),g(s,i),g(s,a),g(s,r),g(r,o);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(o,null);b=!0},p(l,[u]){if(u&1){v=M(l[0].tags);let t;for(t=0;t<v.length;t+=1){const f=V(l,v,t);n[t]?(n[t].p(f,u),P(n[t],1)):(n[t]=x(f),n[t].c(),P(n[t],1),n[t].m(o,null))}for($(),t=v.length;t<n.length;t+=1)S(t);z()}},i(l){if(!b){for(let u=0;u<v.length;u+=1)P(n[u]);b=!0}},o(l){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)I(n[u]);b=!1},d(l){l&&_(e),U(n,l)}}}function se(c,e,s){let{data:i}=e;return c.$$set=d=>{"data"in d&&s(0,i=d.data)},[i]}class ce extends L{constructor(e){super(),T(this,e,se,te,F,{data:0})}}export{ce as component,ie as universal};
