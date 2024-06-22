/*! For license information please see component---src-pages-blog-details-js-907915d2bf69cc7a1dfc.js.LICENSE.txt */
(self.webpackChunkloazzne_gatsbyjs=self.webpackChunkloazzne_gatsbyjs||[]).push([[960],{9634:function(e,t){var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=m(e,r(a)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)l.call(e,a)&&e[a]&&(t=m(t,a));return t}function m(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},812:function(e,t,a){"use strict";var l=a(9634),n=a.n(l),r=a(6540),m=a(6102),s=a(4848);const c=r.forwardRef(((e,t)=>{const[{className:a,...l},{as:r="div",bsPrefix:c,spans:i}]=function(e){let{as:t,bsPrefix:a,className:l,...r}=e;a=(0,m.oU)(a,"col");const s=(0,m.gy)(),c=(0,m.Jm)(),i=[],o=[];return s.forEach((e=>{const t=r[e];let l,n,m;delete r[e],"object"==typeof t&&null!=t?({span:l,offset:n,order:m}=t):l=t;const s=e!==c?`-${e}`:"";l&&i.push(!0===l?`${a}${s}`:`${a}${s}-${l}`),null!=m&&o.push(`order${s}-${m}`),null!=n&&o.push(`offset${s}-${n}`)})),[{...r,className:n()(l,...i,...o)},{as:t,bsPrefix:a,spans:i}]}(e);return(0,s.jsx)(r,{...l,ref:t,className:n()(a,!i.length&&c)})}));c.displayName="Col",t.A=c},2493:function(e,t,a){"use strict";var l=a(9634),n=a.n(l),r=a(6540),m=a(6102),s=a(4848);const c=r.forwardRef(((e,t)=>{let{bsPrefix:a,fluid:l=!1,as:r="div",className:c,...i}=e;const o=(0,m.oU)(a,"container"),u="string"==typeof l?`-${l}`:"-fluid";return(0,s.jsx)(r,{ref:t,...i,className:n()(c,l?`${o}${u}`:o)})}));c.displayName="Container",t.A=c},1382:function(e,t,a){"use strict";var l=a(9634),n=a.n(l),r=a(6540),m=a(6102),s=a(4848);const c=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,as:r="div",...c}=e;const i=(0,m.oU)(a,"row"),o=(0,m.gy)(),u=(0,m.Jm)(),E=`${i}-cols`,d=[];return o.forEach((e=>{const t=c[e];let a;delete c[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const l=e!==u?`-${e}`:"";null!=a&&d.push(`${E}${l}-${a}`)})),(0,s.jsx)(r,{ref:t,...c,className:n()(l,i,...d)})}));c.displayName="Row",t.A=c},6102:function(e,t,a){"use strict";a.d(t,{Jm:function(){return u},gy:function(){return o},oU:function(){return i}});var l=a(6540);a(4848);const n=["xxl","xl","lg","md","sm","xs"],r="xs",m=l.createContext({prefixes:{},breakpoints:n,minBreakpoint:r}),{Consumer:s,Provider:c}=m;function i(e,t){const{prefixes:a}=(0,l.useContext)(m);return e||a[t]||t}function o(){const{breakpoints:e}=(0,l.useContext)(m);return e}function u(){const{minBreakpoint:e}=(0,l.useContext)(m);return e}},3298:function(e,t,a){"use strict";var l=a(6540),n=a(751),r=a(2910),m=a(4295),s=a(766);t.A=()=>{const{0:e,1:t}=(0,l.useState)(!1),{menuStatus:a,updateMenuStatus:c}=(0,l.useContext)(s.x),i=()=>{window.scrollY>70?t(!0):window.scrollY<70&&t(!1)};return(0,l.useEffect)((()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)})),[e]),l.createElement(l.Fragment,null,l.createElement("header",{className:"header_area"},l.createElement("div",{className:"container"},l.createElement("div",{className:"header_social"},l.createElement("ul",{className:"hd_social_icons"},n.Jy.social.map(((e,t)=>{let{icon:a,url:n}=e;return l.createElement("li",{key:`header-social-${t}`},l.createElement("a",{href:n},l.createElement("i",{className:`fa ${a}`})))})))),l.createElement("div",{className:"header_contact text-end"},l.createElement("ul",{className:"hd_contact"},n.Yi.map(((e,t)=>{let{icon:a,tagLine:n,text:r,url:m}=e;return l.createElement("li",{key:`header-info-${t}`},l.createElement("i",{className:a})," ",n,l.createElement("a",{href:m}," ",r))})))))),l.createElement("div",{className:"main_menu_area "+(!0===e?" stricky stricky-fixed slideInDown animated":" stricky slideIn animated")},l.createElement("div",{className:"container"},l.createElement("div",{className:"main_menu_area__left"},l.createElement(r.A,{href:"/"},l.createElement(m.A,{src:n.gu.dark,alt:"Awesome Image",layout:"fixed"})),l.createElement("span",{className:"mobile-menu__toggler",onClick:e=>{e.preventDefault(),c(!a)}},l.createElement("i",{className:"fa fa-bars"}))),l.createElement("div",{className:"main_menu_area__right"},l.createElement("nav",{className:"main_menu_area__menu"},l.createElement("ul",{className:"nav navbar-nav navigation-box"},n.BL.map(((e,t)=>l.createElement("li",{key:t},l.createElement(r.A,{href:e.url},e.name),void 0!==e.subItems?l.createElement("ul",{className:"sub-menu"},e.subItems.map(((e,t)=>l.createElement("li",{key:t},l.createElement(r.A,{href:e.url},e.name))))):null))))),l.createElement("a",{href:"tel:+18436420881",className:"btn-yellow"},"CALL TODAY")))))}},9047:function(e,t,a){"use strict";var l=a(6540),n=a(2910);t.A=e=>{let{title:t,name:a}=e;return l.createElement("section",{className:"breadcrumb_section text-center section_padding"},l.createElement("ul",{className:"breadcrumb"},l.createElement("li",null,l.createElement(n.A,{href:"/"},"Home")),l.createElement("li",null,a)),l.createElement("h1",null,t))}},5152:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return K}});var l=a(6540),n=a(1074),r=a(3298),m=a(766),s=a(9047),c=a(554),i=a(2493),o=a(1382),u=a(812),E=a(4295);var d=()=>l.createElement("div",{className:"blog_author_box"},l.createElement("div",{className:"author_img"},l.createElement(E.A,{src:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAADBCAYAAABfRSsbAAAABmJLR0QA/wD/AP+gvaeTAAAJmElEQVR4nO3af0hV9x/H8ae/ttkszJQ5sGIO+oHoHxGTtSsbeoVtLdjdWD9UWDqsdaFF4DakMudgk0kLbDgGa6sxdGIL+qWUvzDNItlYWRFFWGjb0Nt+utbcVb9/hAfvtGW2L/m+vR4g2Oece+7nytPTOedjSHd39zAiU1zovZ6AyEQoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiaE3+sJ/L/U1dXR1dWF1+sds62iouK2rx95nc/no6mpCZ/PR2xsLBkZGcyaNcvZr7Kykl9++YXly5cTGxsbcIy+vj5qamqIjo4mKyvrjuY48t6NjY1cu3aN+Ph43G43M2bMGLPflStXOHPmDFevXiUyMpL58+fzxBNP3PYzWhLS3d09fK8n8V/z+XxkZmbi8/no7u4es3327Nm3PUZ3dzf19fW88cYb9Pf3O+NRUVF89NFHZGRkALBz506Ki4vJzs6mtLQ04BhvvvkmX331Fe+88w55eXl3NMfq6mq2bNnCn3/+6YxFR0fz8ccf43K5nLEXX3yRb775ZszrU1JS+PTTT3n00Udv+1ktCKpQ33vvPX744QeOHj3KTz/9BDBuBO+///64rx8eHmbnzp0MDAzw7bff4nK5uH79OmlpaSQnJ9PZ2UlraytRUVEcO3aMmJgY/H4/breby5cvU1dXx8KFCwE4e/Yszz//PImJidTX1xMeHj7hOXZ0dPDKK68wNDSE2+0mMTGREydOcOrUKWbMmEFTUxOPPPIIcPOXLiEhgSeffJK4uDh6e3upra3l+vXruN1uPv/88//mh3uPBVWo450pxwv1Vg4dOsTrr79Oeno6ixcv5oMPPmDZsmUBlwpr166ltraWzZs3s3btWgAaGhrIzc3F5XJRVVUFwIoVK2hvb2fXrl3O2Xeic8zNzaWhoYHCwkLnsmBoaAiv18uhQ4dYv349b731FgD19fW43W5CQkKc17e0tJCTk0NkZCQXLlyY8OefyoLqZsrr9Tpfd2pwcJBt27YREhJCQUEB7e3tAHg8noD9XnrpJQBaW1udMbfbTVpaGm1tbdTX13PkyBHa29t5+umnAyKd6BxPnjwJwPLly52x0NBQXnvtNQDa2tqc8czMzIBIARYtWgRATEzMxD68AUF1M1VYWOh8P5EbptH27dvHxYsXee6550hOTubSpUsAJCcnB+yXkpIC4GwfUVRUxLPPPsu7774LQHh4OEVFRZOa440bN5xjjPbYY48B0NXV9a+fpba2FsAJOxgE1Rl1svx+P9u3byc0NJSCggIAfv75ZwCmT58esO/Iv0euL0csWLCAVatW0dXVRVdXF1lZWcybN29S85kzZw4A+/fvDxiPiooCCLi5G2379u3k5+ezbds2iouLyc/Pn9T7T0VBdUadrJqaGi5fvozH43HiGhgYAOChhx4K2DcyMhKAv/76a8xxVq9ezZdffgncvM6cLI/HQ1lZGVu3buX48ePMmTOH3t5empubx53TiA8//BCAuXPnEhISwtDQEKGhwXEuCo5PcRcGBgYoLy8nPDycjRs3OuMPPPCAs320kcdFDz744Jhj7dq1y/n+bu62161bh8fjwe/3c/DgQSoqKtizZ4/znPafz2tHeL1ecnJy+O2339i6dSuffPLJpOcw1dz3Z9TKykp6enpYuXKlcw0IN29Evv/+e/r7+52zKMDvv/8OwMyZMwOOc/78eaqqqkhMTOTvv/+msrKSV199dVL//UdERFBeXk5+fj4dHR0AJCUl4ff7WblyJUlJSeO+buT69+WXX8bj8VBdXc26devu+P2novv6jHrjxg127NhBREQEGzZsCNj2+OOPA3Dq1KmA8c7OTgASExMDxktKShgcHGTz5s1s2rQJv99PSUnJXc0vOTmZvLw88vLySE1N5fDhwwBjniT804IFCwDo6em5q/efSu7rUHfv3k1vby9ZWVkkJCQEbFuyZAkAX3/9dcD43r17AXjqqaecsYaGBlpbW0lLSyMzM5OlS5eSmppKS0sLjY2N/8lc9+/fzxdffEF8fDxLly51xg8fPszQ0FDAvgcOHABuXqsGi6B64D/6cc/I6tPox0Gjn1329/fjcrn4448/aGtrc1Z6Rvh8Pme7y+UiJSXFWZl6+OGHaWtrIzY29pYrU52dnbzwwgtjVqYmOseKigoGBwfp6enhzJkznD59moiICD777DOeeeYZZ//Zs2czd+5c0tLSiIqK4uLFizQ1NTE8PExpaSnZ2dl39TOdKoIq1Nut4Y9eASovL6esrIw1a9awZcuWcfe/1Vr/jh07cLvdwL+v9RcUFFBdXR2w1j/ROf5zv4SEBMrKygLW+QGWLVvGd999FzAWGhpKfn4+mzZtGrMYYFVQ3UzdyYpUWFgYXq+XNWvW3HKfzMxMWltbaW5upq+vj7i4ONLT0wP+empgYACv1zvuM8u3336bWbNmBTzKmugcS0tL+fXXX5k2bZrz11BhYWFj9jtw4AAXLlzg3Llz/Pjjj0ybNg2XyzXmGtq6oDqjSvC6r2+mxA6FKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVExSqmKBQxQSFKiYoVDFBoYoJClVMUKhigkIVE/4HOaDd7EgjUCMAAAAASUVORK5CYII=",alt:"author",className:"img-fluid"})),l.createElement("div",{className:"author_bio"},l.createElement("h2",null,"Christine Eve"),l.createElement("p",null,"Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer nullam condimentum purus."),l.createElement("a",{href:"#",className:"author_profile"},"View All Posts"))),f=a.p+"static/blog-details-601af059ee3da3520c45f9746d1a5453.jpg";var h=()=>l.createElement("div",null,l.createElement("div",{className:"blog_left_box"},l.createElement("div",{className:"bl_share_img"},l.createElement(E.A,{src:f,alt:"blog details",className:"img-fluid"}),l.createElement("span",{className:"blog_date"},"26 Nov")),l.createElement("div",{className:"blog_share_details blog_share_details__details"},l.createElement("span",{className:"comment_author"},"by ",l.createElement("a",{href:"#"},"admin")," - ",l.createElement("a",{href:"#"},"3 Comments")),l.createElement("h1",null,"Simple hack to improve A/C efficiency"),l.createElement("p",null,"There are many variations passages of lorem ipsum available but the majority have suffered alteration. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),l.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus page maker including versions of lorem ipsum."))),l.createElement("div",{className:"blog_social_share_box"},l.createElement("div",{className:"share_box_left"},l.createElement("p",null,"Tags: ",l.createElement("a",{href:"#"},"repairing,")," ",l.createElement("a",{href:"#"},"heating,")," ",l.createElement("a",{href:"#"},"air,")," ",l.createElement("a",{href:"#"},"conditioning"))),l.createElement("div",{className:"share_box_left text-end"},l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:""},l.createElement("i",{className:"fa fa-twitter"}))),l.createElement("li",null,l.createElement("a",{href:""},l.createElement("i",{className:"fa fa-facebook"}))),l.createElement("li",null,l.createElement("a",{href:""},l.createElement("i",{className:"fa fa-youtube-play"}))),l.createElement("li",null,l.createElement("a",{href:""},l.createElement("i",{className:"fa fa-google-plus"})))))));var g=()=>l.createElement("div",{className:"blog_details_right"},l.createElement("div",{className:"blog_right_box mb-30"},l.createElement("div",{className:"widget_search"},l.createElement("input",{type:"search",name:"s",placeholder:"Search here..."}))),l.createElement("div",{className:"blog_right_box mb-30"},l.createElement("div",{className:"latest_post"},l.createElement("h2",null,"Latest Posts"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("div",{className:"img-block"},l.createElement(E.A,{src:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRoge3ZIasiURiH8efKMEHEaDKI1SBcP4RVsE4xmYwGESaYtCtosNlErX4DEZtBGEEGNIgIatAwKuO2bV42HHaX1/eX/wzn4QxMmK/dbvfiQ0T+9QH+Jo2VSmOl0lipNFYqjZVKY6XSWKk0ViqNlUpjpdJYqSzTD2y1WpzPZ6LRKK7rMhwOWa1WFAoF4vE46/WafD7PYrHAtm2m0+nbfTabNXo24zfr+z7NZhPXdfF9H8/zqNfrdDodUqkUo9GI/X5Pv98nk8n8uDfNeOzhcKBWqzGfzwmCgDAMsSyL5/PJ6/WiWq1SLBYpl8tYlvXjPgxDo2cz/hpPJhMejwelUonBYEAymaTRaHA6nYhEIlyvV2KxGKfT6Y/2JhmNDYKA7XZLIpHAtm0AHMfB87zft9Xr9RiPx1QqFXK5HMfj8e3etC+TP7bu9zvdbpfL5YLjOKTTadrtNrFYDMdx2Gw23G43vr+/WS6XBEHAbDZ7uzcdbDT2f/dR31mNlUpjpdJYqTRWKo2VSmOl0lipNFYqjZVKY6XSWKk0ViqNleqjYn8B3B/OgRnUBjwAAAAASUVORK5CYII=",alt:"post 1",className:"img-fluid"})),"Change your air filter regularly")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("div",{className:"img-block"},l.createElement(E.A,{src:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRoge3ZIasiURiH8efKMEHEaDKI1SBcP4RVsE4xmYwGESaYtCtosNlErX4DEZtBGEEGNIgIatAwKuO2bV42HHaX1/eX/wzn4QxMmK/dbvfiQ0T+9QH+Jo2VSmOl0lipNFYqjZVKY6XSWKk0ViqNlUpjpdJYqSzTD2y1WpzPZ6LRKK7rMhwOWa1WFAoF4vE46/WafD7PYrHAtm2m0+nbfTabNXo24zfr+z7NZhPXdfF9H8/zqNfrdDodUqkUo9GI/X5Pv98nk8n8uDfNeOzhcKBWqzGfzwmCgDAMsSyL5/PJ6/WiWq1SLBYpl8tYlvXjPgxDo2cz/hpPJhMejwelUonBYEAymaTRaHA6nYhEIlyvV2KxGKfT6Y/2JhmNDYKA7XZLIpHAtm0AHMfB87zft9Xr9RiPx1QqFXK5HMfj8e3etC+TP7bu9zvdbpfL5YLjOKTTadrtNrFYDMdx2Gw23G43vr+/WS6XBEHAbDZ7uzcdbDT2f/dR31mNlUpjpdJYqTRWKo2VSmOl0lipNFYqjZVKY6XSWKk0ViqNleqjYn8B3B/OgRnUBjwAAAAASUVORK5CYII=",alt:"post 1",className:"img-fluid"})),"Our goal is to help you save energy")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("div",{className:"img-block"},l.createElement(E.A,{src:"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRoge3ZIasiURiH8efKMEHEaDKI1SBcP4RVsE4xmYwGESaYtCtosNlErX4DEZtBGEEGNIgIatAwKuO2bV42HHaX1/eX/wzn4QxMmK/dbvfiQ0T+9QH+Jo2VSmOl0lipNFYqjZVKY6XSWKk0ViqNlUpjpdJYqSzTD2y1WpzPZ6LRKK7rMhwOWa1WFAoF4vE46/WafD7PYrHAtm2m0+nbfTabNXo24zfr+z7NZhPXdfF9H8/zqNfrdDodUqkUo9GI/X5Pv98nk8n8uDfNeOzhcKBWqzGfzwmCgDAMsSyL5/PJ6/WiWq1SLBYpl8tYlvXjPgxDo2cz/hpPJhMejwelUonBYEAymaTRaHA6nYhEIlyvV2KxGKfT6Y/2JhmNDYKA7XZLIpHAtm0AHMfB87zft9Xr9RiPx1QqFXK5HMfj8e3etC+TP7bu9zvdbpfL5YLjOKTTadrtNrFYDMdx2Gw23G43vr+/WS6XBEHAbDZ7uzcdbDT2f/dR31mNlUpjpdJYqTRWKo2VSmOl0lipNFYqjZVKY6XSWKk0ViqNleqjYn8B3B/OgRnUBjwAAAAASUVORK5CYII=",alt:"post 1",className:"img-fluid"})),"How to ensure your ac system is efficient"))))),l.createElement("div",{className:"blog_right_box mb-30"},l.createElement("div",{className:"widget_categories"},l.createElement("h2",null,"Categories"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"#"},"Air Conditioning ",l.createElement("i",{className:"fa fa-angle-right"}))),l.createElement("li",null,l.createElement("a",{href:"#"},"Heating ",l.createElement("i",{className:"fa fa-angle-right"}))),l.createElement("li",null,l.createElement("a",{href:"#"},"Repairing ",l.createElement("i",{className:"fa fa-angle-right"}))),l.createElement("li",null,l.createElement("a",{href:"#"},"Maintenance ",l.createElement("i",{className:"fa fa-angle-right"}))),l.createElement("li",null,l.createElement("a",{href:"#"},"Other Services ",l.createElement("i",{className:"fa fa-angle-right"}))),l.createElement("li",null,l.createElement("a",{href:"#"},"Commercial Services ",l.createElement("i",{className:"fa fa-angle-right"})))))),l.createElement("div",{className:"blog_right_box"},l.createElement("div",{className:"tagcloud"},l.createElement("h2",null,"Tags"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:""},"repairing")),l.createElement("li",null,l.createElement("a",{href:""},"air conditioning")),l.createElement("li",null,l.createElement("a",{href:""},"services")),l.createElement("li",null,l.createElement("a",{href:""},"maintenance")),l.createElement("li",null,l.createElement("a",{href:""},"heating")),l.createElement("li",null,l.createElement("a",{href:""},"commerical")),l.createElement("li",null,l.createElement("a",{href:""},"new parts")))))),A=a(751);var p=e=>{let{data:t}=e;const{image:a,time:n,name:r,text:m}=t;return l.createElement("li",{className:"comment even thread-even depth-1 new-depth"},l.createElement("div",{className:"single-comment-box"},l.createElement("div",{className:"comment_image"},l.createElement("div",{className:"avatar avatar-100 photo"},l.createElement(E.A,{src:a,alt:r}))),l.createElement("div",{className:"text-box"},l.createElement("h3",null,r),l.createElement("span",{className:"comment_date_time"},n),l.createElement("div",{className:"comment-meta comment-title"},l.createElement("p",null,m)),l.createElement("div",{className:"reply comment-title"},l.createElement("a",{rel:"nofollow",className:"btn-gray comment-reply-link",href:"#"},"REPLY")))))};var v=()=>l.createElement("div",{className:"blog_comment_box"},l.createElement("div",{className:"title-box"},l.createElement("h3",null,A.g7.length," Comments")),l.createElement("div",{id:"comments",className:"comments-area"},l.createElement("ul",{className:"comment-list"},A.g7.map(((e,t)=>l.createElement(p,{key:t,data:e})))),l.createElement("div",{id:"respond",className:"comment-respond"},l.createElement("div",{className:"title-box"},l.createElement("h3",null,"Leave a Comment")),l.createElement("form",{action:"#",method:"post"},l.createElement("input",{className:"half_width input_m_right",type:"text",placeholder:"Your name"}),l.createElement("input",{className:"half_width",type:"text",placeholder:"Email address"}),l.createElement("textarea",{name:"content",id:"content",cols:"30",rows:"10",placeholder:"Write your message"}),l.createElement("a",{href:"#",className:"btn-yellow"},"SUBMIT NOW")))));var N=()=>l.createElement("section",{className:"blog_details_section section_padding"},l.createElement(i.A,null,l.createElement(o.A,null,l.createElement(u.A,{lg:8},l.createElement(h,null),l.createElement(d,null),l.createElement(v,null)),l.createElement(u.A,{lg:4},l.createElement(g,null)))));var K=()=>l.createElement(m.A,null,l.createElement(n.A,{PageTitle:"Blog Details Page"},l.createElement(r.A,null),l.createElement(s.A,{title:"Blog Details",name:"Blog"}),l.createElement(N,null),l.createElement(c.A,null)))}}]);
//# sourceMappingURL=component---src-pages-blog-details-js-907915d2bf69cc7a1dfc.js.map