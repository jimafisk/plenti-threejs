import{SvelteComponent,append,attr,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,destroy_each,detach,element,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Uses from"../components/source.js";function get_each_context(e,t,n){const s=e.slice();return s[3]=t[n],s}function create_each_block(e){let t,n=e[3]+"";return{c(){t=element("p")},l(e){t=claim_element(e,"P",{});var n=children(t);n.forEach(detach)},m(e,s){insert(e,t,s),t.innerHTML=n},p(e,s){s&2&&n!==(n=e[3]+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_fragment(e){let r,u,d,s,l,n,h,a,i,m,c,o=e[1],t=[];for(let n=0;n<o.length;n+=1)t[n]=create_each_block(get_each_context(e,o,n));return n=new Uses({props:{content:e[2]}}),{c(){r=element("h1"),u=text(e[0]),d=space(),s=element("div");for(let e=0;e<t.length;e+=1)t[e].c();l=space(),create_component(n.$$.fragment),h=space(),a=element("p"),i=element("a"),m=text("Back home"),this.h()},l(o){r=claim_element(o,"H1",{});var c,f,p,g=children(r);u=claim_text(g,e[0]),g.forEach(detach),d=claim_space(o),s=claim_element(o,"DIV",{}),c=children(s);for(let e=0;e<t.length;e+=1)t[e].l(c);c.forEach(detach),l=claim_space(o),claim_component(n.$$.fragment,o),h=claim_space(o),a=claim_element(o,"P",{}),f=children(a),i=claim_element(f,"A",{href:!0}),p=children(i),m=claim_text(p,"Back home"),p.forEach(detach),f.forEach(detach),this.h()},h(){attr(i,"href",".")},m(e,o){insert(e,r,o),append(r,u),insert(e,d,o),insert(e,s,o);for(let e=0;e<t.length;e+=1)t[e].m(s,null);insert(e,l,o),mount_component(n,e,o),insert(e,h,o),insert(e,a,o),append(a,i),append(i,m),c=!0},p(e,[i]){if((!c||i&1)&&set_data(u,e[0]),i&2){o=e[1];let n;for(n=0;n<o.length;n+=1){const a=get_each_context(e,o,n);t[n]?t[n].p(a,i):(t[n]=create_each_block(a),t[n].c(),t[n].m(s,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=o.length}const a={};i&4&&(a.content=e[2]),n.$set(a)},i(e){if(c)return;transition_in(n.$$.fragment,e),c=!0},o(e){transition_out(n.$$.fragment,e),c=!1},d(e){e&&detach(r),e&&detach(d),e&&detach(s),destroy_each(t,e),e&&detach(l),destroy_component(n,e),e&&detach(h),e&&detach(a)}}}function instance(e,t,n){let{title:s}=t,{description:o}=t,{content:i}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"description"in e&&n(1,o=e.description),"content"in e&&n(2,i=e.content)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,description:1,content:2})}}export default Component