import{SvelteComponent,append,attr,binding_callbacks,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import Grid from"../components/grid.js";import Uses from"../components/source.js";import Pager from"../components/pager.js";import{onMount}from"../../web_modules/svelte/index.mjs";import*as THREE from"../../web_modules/three/build/three.module.js";function get_each_context(e,t,n){const s=e.slice();return s[13]=t[n],s}function create_each_block(e){let t,n=e[13]+"";return{c(){t=element("p")},l(e){t=claim_element(e,"P",{});var n=children(t);n.forEach(detach)},m(e,s){insert(e,t,s),t.innerHTML=n},p(e,s){s&2&&n!==(n=e[13]+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_fragment(e){let l,f,v,r,h,i,m,n,d,b,_,a,j,y,p,o,g,s,u,c=e[1],t=[];for(let n=0;n<c.length;n+=1)t[n]=create_each_block(get_each_context(e,c,n));return a=new Grid({props:{items:e[7],postRangeLow:e[6],postRangeHigh:e[4]}}),o=new Pager({props:{currentPage:e[3],totalPages:e[8]}}),s=new Uses({props:{content:e[2]}}),{c(){l=element("h1"),f=text(e[0]),v=space(),r=element("canvas"),h=space(),i=element("section");for(let e=0;e<t.length;e+=1)t[e].c();m=space(),n=element("div"),d=element("h3"),b=text("Recent blog posts:"),_=space(),create_component(a.$$.fragment),j=space(),y=element("br"),p=space(),create_component(o.$$.fragment),g=space(),create_component(s.$$.fragment),this.h()},l(c){l=claim_element(c,"H1",{});var u,w,O,x=children(l);f=claim_text(x,e[0]),x.forEach(detach),v=claim_space(c),r=claim_element(c,"CANVAS",{}),children(r).forEach(detach),h=claim_space(c),i=claim_element(c,"SECTION",{id:!0}),w=children(i);for(let e=0;e<t.length;e+=1)t[e].l(w);w.forEach(detach),m=claim_space(c),n=claim_element(c,"DIV",{}),u=children(n),d=claim_element(u,"H3",{}),O=children(d),b=claim_text(O,"Recent blog posts:"),O.forEach(detach),_=claim_space(u),claim_component(a.$$.fragment,u),j=claim_space(u),y=claim_element(u,"BR",{}),u.forEach(detach),p=claim_space(c),claim_component(o.$$.fragment,c),g=claim_space(c),claim_component(s.$$.fragment,c),this.h()},h(){attr(i,"id","intro")},m(c,w){insert(c,l,w),append(l,f),insert(c,v,w),insert(c,r,w),e[11](r),insert(c,h,w),insert(c,i,w);for(let e=0;e<t.length;e+=1)t[e].m(i,null);insert(c,m,w),insert(c,n,w),append(n,d),append(d,b),append(n,_),mount_component(a,n,null),append(n,j),append(n,y),insert(c,p,w),mount_component(o,c,w),insert(c,g,w),mount_component(s,c,w),u=!0},p(e,[n]){if((!u||n&1)&&set_data(f,e[0]),n&2){c=e[1];let s;for(s=0;s<c.length;s+=1){const o=get_each_context(e,c,s);t[s]?t[s].p(o,n):(t[s]=create_each_block(o),t[s].c(),t[s].m(i,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=c.length}const r={};n&64&&(r.postRangeLow=e[6]),n&16&&(r.postRangeHigh=e[4]),a.$set(r);const l={};n&8&&(l.currentPage=e[3]),o.$set(l);const d={};n&4&&(d.content=e[2]),s.$set(d)},i(e){if(u)return;transition_in(a.$$.fragment,e),transition_in(o.$$.fragment,e),transition_in(s.$$.fragment,e),u=!0},o(e){transition_out(a.$$.fragment,e),transition_out(o.$$.fragment,e),transition_out(s.$$.fragment,e),u=!1},d(c){c&&detach(l),c&&detach(v),c&&detach(r),e[11](null),c&&detach(h),c&&detach(i),destroy_each(t,c),c&&detach(m),c&&detach(n),destroy_component(a),c&&detach(p),destroy_component(o,c),c&&detach(g),destroy_component(s,c)}}}let postsPerPage=3;function instance(e,t,n){let r,i,u,{title:d}=t,{intro:l}=t,{components:c}=t,{content:o}=t,{allContent:a}=t,s;onMount(()=>{const o=new THREE.Scene,e=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),r=new THREE.BoxGeometry,c=new THREE.MeshBasicMaterial({color:65280}),t=new THREE.Mesh(r,c);let n;o.add(t),e.position.z=5;const i=()=>{requestAnimationFrame(i),t.rotation.x+=.01,t.rotation.y+=.01,n.render(o,e)},a=()=>{n.setSize(window.innerWidth*.8,window.innerHeight),e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix()},l=e=>{n=new THREE.WebGLRenderer({antialias:!0,canvas:e}),a(),i()};window.addEventListener("resize",a),l(s)});let h=a.filter(e=>e.type=="blog"),m=h.length,f=Math.ceil(m/postsPerPage);function p(e){binding_callbacks[e?"unshift":"push"](()=>{s=e,n(5,s)})}return e.$$set=e=>{"title"in e&&n(0,d=e.title),"intro"in e&&n(1,l=e.intro),"components"in e&&n(9,c=e.components),"content"in e&&n(2,o=e.content),"allContent"in e&&n(10,a=e.allContent)},e.$$.update=()=>{if(e.$$.dirty&4)$:n(3,r=o.pager);if(e.$$.dirty&8)$:n(4,i=r*postsPerPage);if(e.$$.dirty&16)$:n(6,u=i-postsPerPage)},[d,l,o,r,i,s,u,h,f,c,a,p]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,intro:1,components:9,content:2,allContent:10})}}export default Component