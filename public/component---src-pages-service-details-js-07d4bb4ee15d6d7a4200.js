/*! For license information please see component---src-pages-service-details-js-07d4bb4ee15d6d7a4200.js.LICENSE.txt */
(self.webpackChunkloazzne_gatsbyjs=self.webpackChunkloazzne_gatsbyjs||[]).push([[997],{9634:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=c(e,r(a)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)n.call(e,a)&&e[a]&&(t=c(t,a));return t}function c(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},812:function(e,t,a){"use strict";var n=a(9634),l=a.n(n),r=a(6540),c=a(6102),s=a(4848);const i=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:i,spans:o}]=function(e){let{as:t,bsPrefix:a,className:n,...r}=e;a=(0,c.oU)(a,"col");const s=(0,c.gy)(),i=(0,c.Jm)(),o=[],m=[];return s.forEach((e=>{const t=r[e];let n,l,c;delete r[e],"object"==typeof t&&null!=t?({span:n,offset:l,order:c}=t):n=t;const s=e!==i?`-${e}`:"";n&&o.push(!0===n?`${a}${s}`:`${a}${s}-${n}`),null!=c&&m.push(`order${s}-${c}`),null!=l&&m.push(`offset${s}-${l}`)})),[{...r,className:l()(n,...o,...m)},{as:t,bsPrefix:a,spans:o}]}(e);return(0,s.jsx)(r,{...n,ref:t,className:l()(a,!o.length&&i)})}));i.displayName="Col",t.A=i},2493:function(e,t,a){"use strict";var n=a(9634),l=a.n(n),r=a(6540),c=a(6102),s=a(4848);const i=r.forwardRef(((e,t)=>{let{bsPrefix:a,fluid:n=!1,as:r="div",className:i,...o}=e;const m=(0,c.oU)(a,"container"),u="string"==typeof n?`-${n}`:"-fluid";return(0,s.jsx)(r,{ref:t,...o,className:l()(i,n?`${m}${u}`:m)})}));i.displayName="Container",t.A=i},1382:function(e,t,a){"use strict";var n=a(9634),l=a.n(n),r=a(6540),c=a(6102),s=a(4848);const i=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:n,as:r="div",...i}=e;const o=(0,c.oU)(a,"row"),m=(0,c.gy)(),u=(0,c.Jm)(),d=`${o}-cols`,f=[];return m.forEach((e=>{const t=i[e];let a;delete i[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const n=e!==u?`-${e}`:"";null!=a&&f.push(`${d}${n}-${a}`)})),(0,s.jsx)(r,{ref:t,...i,className:l()(n,o,...f)})}));i.displayName="Row",t.A=i},6102:function(e,t,a){"use strict";a.d(t,{Jm:function(){return u},gy:function(){return m},oU:function(){return o}});var n=a(6540);a(4848);const l=["xxl","xl","lg","md","sm","xs"],r="xs",c=n.createContext({prefixes:{},breakpoints:l,minBreakpoint:r}),{Consumer:s,Provider:i}=c;function o(e,t){const{prefixes:a}=(0,n.useContext)(c);return e||a[t]||t}function m(){const{breakpoints:e}=(0,n.useContext)(c);return e}function u(){const{minBreakpoint:e}=(0,n.useContext)(c);return e}},2307:function(e,t,a){"use strict";var n=a(6540);t.A=()=>n.createElement("section",{className:"contact_form_area ctf_gray section_padding"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-6"},n.createElement("div",{className:"contact-right contact_details"},n.createElement("div",{className:"hero-title-with-shape"},n.createElement("h4",{className:"heading_with_border"},"Get a free quote"),n.createElement("h1",null,"To request a service call, please fill out the form below")),n.createElement("p",null,"Contact us today to receive a free, no-obligation quote for our HVAC services. Our team is ready to assist you with any heating, ventilation, or air conditioning needs. Simply fill out the form below and we'll be in touch shortly."))),n.createElement("div",{className:"col-md-6"},n.createElement("div",{className:"contact-right contact-right-style-2"},n.createElement("form",{action:"#",method:"post"},n.createElement("input",{type:"text",placeholder:"Your name",className:"half_width input_m_right"}),n.createElement("input",{type:"EMAIL",placeholder:"Email Address",className:"half_width"}),n.createElement("input",{type:"tel",placeholder:"Phone Number"}),n.createElement("span",{className:"select_icon"},n.createElement("select",{name:"select",id:"select"},n.createElement("option",{value:"option0"},"Select Service"),n.createElement("option",{value:"option1"},"Option 1"),n.createElement("option",{value:"option2"},"Option 2"),n.createElement("option",{value:"option3"},"Option 3"),n.createElement("option",{value:"option4"},"Option 4"))),n.createElement("button",{className:"btn-yellow",value:"SUBMIT NOW"},"SUBMIT NOW")))))))},3298:function(e,t,a){"use strict";var n=a(6540),l=a(751),r=a(2910),c=a(4295),s=a(766);t.A=()=>{const{0:e,1:t}=(0,n.useState)(!1),{menuStatus:a,updateMenuStatus:i}=(0,n.useContext)(s.x),o=()=>{window.scrollY>70?t(!0):window.scrollY<70&&t(!1)};return(0,n.useEffect)((()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)})),[e]),n.createElement(n.Fragment,null,n.createElement("header",{className:"header_area"},n.createElement("div",{className:"container"},n.createElement("div",{className:"header_social"},n.createElement("ul",{className:"hd_social_icons"},l.Jy.social.map(((e,t)=>{let{icon:a,url:l}=e;return n.createElement("li",{key:`header-social-${t}`},n.createElement("a",{href:l},n.createElement("i",{className:`fa ${a}`})))})))),n.createElement("div",{className:"header_contact text-end"},n.createElement("ul",{className:"hd_contact"},l.Yi.map(((e,t)=>{let{icon:a,tagLine:l,text:r,url:c}=e;return n.createElement("li",{key:`header-info-${t}`},n.createElement("i",{className:a})," ",l,n.createElement("a",{href:c}," ",r))})))))),n.createElement("div",{className:"main_menu_area "+(!0===e?" stricky stricky-fixed slideInDown animated":" stricky slideIn animated")},n.createElement("div",{className:"container"},n.createElement("div",{className:"main_menu_area__left"},n.createElement(r.A,{href:"/"},n.createElement(c.A,{src:l.gu.dark,alt:"Awesome Image",layout:"fixed"})),n.createElement("span",{className:"mobile-menu__toggler",onClick:e=>{e.preventDefault(),i(!a)}},n.createElement("i",{className:"fa fa-bars"}))),n.createElement("div",{className:"main_menu_area__right"},n.createElement("nav",{className:"main_menu_area__menu"},n.createElement("ul",{className:"nav navbar-nav navigation-box"},l.BL.map(((e,t)=>n.createElement("li",{key:t},n.createElement(r.A,{href:e.url},e.name),void 0!==e.subItems?n.createElement("ul",{className:"sub-menu"},e.subItems.map(((e,t)=>n.createElement("li",{key:t},n.createElement(r.A,{href:e.url},e.name))))):null))))),n.createElement(r.A,{href:"/contact",className:"btn-yellow"},"BOOK TODAY")))))}},9047:function(e,t,a){"use strict";var n=a(6540),l=a(2910);t.A=e=>{let{title:t,name:a}=e;return n.createElement("section",{className:"breadcrumb_section text-center section_padding"},n.createElement("ul",{className:"breadcrumb"},n.createElement("li",null,n.createElement(l.A,{href:"/"},"Home")),n.createElement("li",null,a)),n.createElement("h1",null,t))}},4524:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(6540),l=a(1074),r=a(3298),c=a(766),s=a(9047),i=a(554),o=a(2307),m=a(2493),u=a(1382),d=a(812),f=a.p+"static/service-details-8dad48a356bc92b646060d62b2cb6f97.jpg",E=a(4295);var p=()=>n.createElement("div",{className:"service_details_left"},n.createElement(E.A,{src:f,alt:"Service Details Image"}),n.createElement("h1",null,"Air Conditioner Repair"),n.createElement("p",null,"Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the ndustry standard dummy text ever sincer they llam id condimentum purus In non ex at ligula fringilla bortis. Ut et mauris auctor, aliquet nulla sed, aliquam mauris. Vestibulum sed malesuada dolor. Integer fringilla odio a dolor aliquet, eu euismod lectus porttitor. Proin et libero nec eros eleifend commodo Phasellus sodales des volutpat diam, id sagittis purus egestas dapibus."),n.createElement("h2",null,"Common Air Conditioner Problems"),n.createElement("ul",null,n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," The air conditioner won't turn on."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Weird noises or vibrating occur at startup or during operation."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Warm air exits the supply registers."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," The unit hums, but the fan doesn't turn on."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," The fan runs, but the compressor isn't working."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Water is pooling around the air conditioner")),n.createElement("p",{className:"extra_mr"},"If you believe your air conditioning unit requires emergency service,"," ",n.createElement("a",{href:"#"},"click here")," for information about our 24/7 repair services."),n.createElement("h2",null,"Should I Repair or Replace My Air Conditioner?"),n.createElement("ul",{className:"service_details_ac"},n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Age - If your AC is more than 10 years old and giving you trouble, it may be in your best interest of consider a replacement."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Investment const - Is a new system a better investment in the long run? An Aire Serv air conditioner technician can help you calculate your return on investment to determine if on upgrade in more beneficial than repair."),n.createElement("li",null,n.createElement("i",{className:"fa fa-check-circle"})," Utility rates - You may think you can't afford on air conditioner replacement, but a more efficient unit consumes less electricity and could save you big time on energy bills.")),n.createElement("p",{className:"info_mr"},"Visit our ",n.createElement("a",{href:"#"},"air conditioner maintenance page")," for helpful tips and information.")),v=a(751);var h=()=>{const{0:e,1:t}=(0,n.useState)(1),{0:a,1:l}=(0,n.useState)(1);return n.createElement("div",{className:"service_details_right"},n.createElement("h1",{className:"text-center"},"Our Services"),n.createElement("div",{className:"service_details_sv_cnt text-center service_cool_head"},n.createElement("ul",{className:"nav nav-tabs"},v.s9.map(((a,l)=>{let{icon:r,title:c}=a;return n.createElement("li",{className:""+(e===l?"active":" "),key:l},n.createElement("a",{href:`#service-sidebar-tab-${l}`,onClick:e=>{e.preventDefault(),t(l)}},n.createElement("div",{className:"service_center_left"},n.createElement("i",{className:r}),n.createElement("span",null,c))))})))),n.createElement("div",{className:"tab-content"},v.s9.map(((t,a)=>{let{list:l}=t;return a===e?n.createElement("div",{className:"tab-pane show fade in active animated fadeIn"},n.createElement("div",{className:"service_category"},n.createElement("ul",null,l.map(((e,t)=>{let{label:a,url:l}=e;return n.createElement("li",{key:t},n.createElement("a",{href:l},a,n.createElement("i",{className:"fa fa-angle-right"})))}))))):null}))),n.createElement("div",{className:"service_details_sv_cnt text-center service_class_remove mb-30"},n.createElement("ul",{className:"nav nav-tabs"},v.G5.map(((e,t)=>{let{icon:r,title:c}=e;return n.createElement("li",{className:""+(a===t?"active":" "),key:t},n.createElement("a",{href:`#service-sidebar-two-tab-${t}`,onClick:e=>{e.preventDefault(),l(t)}},n.createElement("div",{className:"service_center_left"},n.createElement("i",{className:r}),n.createElement("span",null,c))))})))),n.createElement("div",{className:"tab-content"},v.G5.map(((e,t)=>{let{content:l}=e;const{icon:r,title:c}=l;return t===a?n.createElement("div",{className:"tab-pane show fade in active animated fadeIn"},n.createElement("div",{className:"service_details_contact"},n.createElement("span",{className:r}),n.createElement("h2",{dangerouslySetInnerHTML:{__html:c}}))):null}))))};var N=()=>n.createElement("section",{className:"service_details_area section_padding"},n.createElement(m.A,null,n.createElement(u.A,null,n.createElement(d.A,{lg:8},n.createElement(p,null)),n.createElement(d.A,{lg:4},n.createElement(h,null)))));var y=()=>n.createElement(c.A,null,n.createElement(l.A,{PageTitle:"Service Details"},n.createElement(r.A,null),n.createElement(s.A,{title:"Service Details",name:"Service"}),n.createElement(N,null),n.createElement(o.A,null),n.createElement(i.A,null)))}}]);
//# sourceMappingURL=component---src-pages-service-details-js-07d4bb4ee15d6d7a4200.js.map