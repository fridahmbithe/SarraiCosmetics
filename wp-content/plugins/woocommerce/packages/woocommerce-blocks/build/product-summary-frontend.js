(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[76],{20:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function o(t,e){return c(t)&&e in t}},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n(100);var c=n(46);const o=()=>c.m>1},217:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(30),o=n(20);const s=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(o.a)(t)?t:{}},292:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(111),o=n(216),s=n(20),r=n(217);const a=t=>{if(!Object(o.a)())return{className:"",style:{}};const e=Object(s.a)(t)?t:{},n=Object(r.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},301:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(20),o=n(217);const s=t=>{const e=Object(c.a)(t)?t:{},n=Object(o.a)(e.style),s=Object(c.a)(n.typography)?n.typography:{};return{style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:s.fontSize,lineHeight:s.lineHeight,fontWeight:s.fontWeight,textTransform:s.textTransform,fontFamily:e.fontFamily}}}},327:function(t,e,n){"use strict";var c=n(0),o=n(128),s=n(129);const r=t=>{const e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)},a=t=>t.replace(/<\/?[a-z][^>]*?>/gi,""),u=(t,e)=>t.replace(/[\s|\.\,]+$/i,"")+e,i=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&hellip;";const c=a(t),o=c.split(" ").splice(0,e).join(" ");return Object(s.autop)(u(o,n))},l=function(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&hellip;";const o=a(t),r=o.slice(0,e);if(n)return Object(s.autop)(u(r,c));const i=r.match(/([\s]+)/g),l=i?i.length:0,p=o.slice(0,e+l);return Object(s.autop)(u(p,c))};e.a=t=>{let{source:e,maxLength:n=15,countType:a="words",className:u="",style:p={}}=t;const f=Object(c.useMemo)(()=>function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"words";const c=Object(s.autop)(t),a=Object(o.count)(c,n);if(a<=e)return c;const u=r(c),p=Object(o.count)(u,n);return p<=e?u:"words"===n?i(u,e):l(u,e,"characters_including_spaces"===n)}(e,n,a),[e,n,a]);return Object(c.createElement)(c.RawHTML,{style:p,className:u},f)}},391:function(t,e){},438:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(4),s=n.n(o),r=n(327),a=n(46),u=n(50),i=n(292),l=n(301),p=n(134);n(391),e.default=Object(p.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:n}=Object(u.useInnerBlockLayoutContext)(),{product:o}=Object(u.useProductDataContext)(),p=Object(i.a)(t),f=Object(l.a)(t);if(!o)return Object(c.createElement)("div",{className:s()(e,"wc-block-components-product-summary",{[n+"__product-summary"]:n})});const b=o.short_description?o.short_description:o.description;return b?Object(c.createElement)(r.a,{className:s()(e,p.className,"wc-block-components-product-summary",{[n+"__product-summary"]:n}),source:b,maxLength:150,countType:a.n.wordCountType||"words",style:{...p.style,...f.style}}):null})}}]);