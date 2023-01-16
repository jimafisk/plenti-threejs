import{SvelteComponent,append,attr,children,claim_element,claim_text,destroy_each,detach,element,empty,init,insert,noop,safe_not_equal,set_data,text}from"../../web_modules/svelte/internal/index.mjs";import{sortByDate}from"../scripts/sort_by_date.js";function get_each_context(e,t,n){const s=e.slice();return s[3]=t[n],s[5]=n,s}function create_if_block(e){let t,n=e[3].fields.title+"",s,o;return{c(){t=element("a"),s=text(n),this.h()},l(e){t=claim_element(e,"A",{class:!0,href:!0});var o=children(t);s=claim_text(o,n),o.forEach(detach),this.h()},h(){attr(t,"class","grid-item svelte-eh5are"),attr(t,"href",o=e[3].path)},m(e,n){insert(e,t,n),append(t,s)},p(e,i){i&1&&n!==(n=e[3].fields.title+"")&&set_data(s,n),i&1&&o!==(o=e[3].path)&&attr(t,"href",o)},d(e){e&&detach(t)}}}function create_each_block(e){let n,t=e[5]>=e[1]&&e[5]<e[2]&&create_if_block(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(e,s){t&&t.m(e,s),insert(e,n,s)},p(e,s){e[5]>=e[1]&&e[5]<e[2]?t?t.p(e,s):(t=create_if_block(e),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&detach(n)}}}function create_fragment(e){let n,s=sortByDate(e[0]),t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block(get_each_context(e,s,n));return{c(){n=element("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"DIV",{class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"class","grid svelte-eh5are")},m(e,s){insert(e,n,s);for(let e=0;e<t.length;e+=1)t[e].m(n,null)},p(e,[o]){if(o&7){s=sortByDate(e[0]);let i;for(i=0;i<s.length;i+=1){const a=get_each_context(e,s,i);t[i]?t[i].p(a,o):(t[i]=create_each_block(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},i:noop,o:noop,d(e){e&&detach(n),destroy_each(t,e)}}}function instance(e,t,n){let{items:s}=t,{postRangeLow:o}=t,{postRangeHigh:i}=t;return e.$$set=e=>{"items"in e&&n(0,s=e.items),"postRangeLow"in e&&n(1,o=e.postRangeLow),"postRangeHigh"in e&&n(2,i=e.postRangeHigh)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{items:0,postRangeLow:1,postRangeHigh:2})}}export default Component