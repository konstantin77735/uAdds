(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(8),a=s.n(c),r=(s(13),s(7)),l=s(2),o=s(3),d=s(5),u=s(4),m=(s.p,s.p+"static/media/arrow.8fff2916.svg"),h=(s(14),s(15),s(0)),j=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsx)("span",{children:"uMark.it "}),Object(h.jsx)("span",{children:"\u2014 uAdds"})]}),Object(h.jsxs)("div",{className:"data-range-wrapper",children:[Object(h.jsx)("span",{className:"data-range",children:"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0434\u0430\u0442 "}),Object(h.jsxs)("span",{className:"data",children:["2.03.2021 \u2014 3.03.2021",Object(h.jsx)("svg",{className:"data__img",width:"13",height:"7",viewBox:"0 0 13 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M6.5 7L12.9952 0.25H0.00480938L6.5 7Z",fill:"white"})})]})]})]})}}]),s}(i.Component),b=(s(17),function(){function e(t){Object(l.a)(this,e),this.menuTriggerSelector=t.menuTriggerSelector,this.menuSelector=t.menuSelector,this.type=t.type||"appear",this.transitionTime=t.transitionTime||".25s",this.transitionType=t.transitionType||".ease",this.menuDisplay=t.menuDisplay||"block",this.slideBegin=t.slideBegin||"translate(-100%, 0px)",this.slideEnd=t.slideEnd||"translate(0px, 0px)",this.menuTrigger=document.querySelector("".concat(this.menuTriggerSelector)),this.menuFirstTrigger=document.querySelector(".menu-toggler"),this.menu=document.querySelector("".concat(this.menuSelector)),this.isChanging=!1,this.state="hide",this.init()}return Object(o.a)(e,[{key:"init",value:function(){var e=this;this.menuTrigger.addEventListener("click",this.toggle.bind(this)),"appear"==this.type&&(this.menu.style.height="0",this.menu.style.opacity=0,this.menu.style.display="none",this.menu.addEventListener("transitionend",(function(t){t.target==e.menu&&(e.isChanging=!1,"hide"==e.state&&(e.menu.style.display="none"))}))),"slide"==this.type&&(document.body.style.overflowX="hidden",this.setVendorStyleProperty(this.menu,"transition","transform ".concat(this.transitionTime," ").concat(this.transitionType)),this.setVendorStyleProperty(this.menu,"transform",this.slideBegin),this.setVendorStyleProperty(this.menuTrigger.querySelector(".menu-toggler__img"),"transition","transform ".concat(this.transitionTime," ").concat(this.transitionType)))}},{key:"setVendorStyleProperty",value:function(e,t,s){e.style["webkit"+t]=s,e.style["moz"+t]=s,e.style["ms"+t]=s,e.style["o"+t]=s,e.style[t]=s}},{key:"toggle",value:function(){var e=this;if("appear"==this.type&&!this.isChanging){if("1"==this.menu.style.opacity)return this.setVendorStyleProperty(this.menu,"transition","opacity ".concat(this.transitionTime," ").concat(this.transitionType)),this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))&&this.menuTrigger.classList.remove("close"),this.state="hide",this.menu.style.height="0",this.menu.style.opacity="0",void(this.isChanging=!0);if("0"==this.menu.style.opacity)return this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))&&this.menuTrigger.classList.add("close"),this.state="show",this.menu.style.display=this.menuDisplay,void setTimeout((function(){e.setVendorStyleProperty(e.menu,"transition","opacity ".concat(e.transitionTime," ").concat(e.transitionType)),e.menu.style.height="initial",e.menu.style.opacity="1",e.isChanging=!0}),1)}"slide"!=this.type||this.isChanging||(this.menu.style.transform==this.slideBegin?(this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))&&this.menuFirstTrigger.classList.add("close"),this.setVendorStyleProperty(this.menu,"transform",this.slideEnd)):(this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))&&this.menuFirstTrigger.classList.remove("close"),this.setVendorStyleProperty(this.menu,"transform",this.slideBegin)))}}]),e}());document.addEventListener("DOMContentLoaded",(function(){var e=function(){new b({menuTriggerSelector:".menu-toggler",menuSelector:".menu-wrapper",transitionTime:".5s",transitionType:"linear",menuDisplay:"grid",type:"slide",slideBegin:"translate(-200%, 0px)",slideEnd:"translate(0px, 0px)"});document.querySelectorAll(".menu__item").forEach((function(e,t){var s=e.getAttribute("data-id");try{new b({menuTriggerSelector:".".concat(s),menuSelector:".menu-wrapper",transitionTime:".5s",transitionType:"linear",menuDisplay:"grid",type:"slide",slideBegin:"translate(-200%, 0px)",slideEnd:"translate(0px, 0px)"})}catch(i){}}))};window.innerWidth<=500&&e(),window.addEventListener("resize",(function(){window.innerWidth<=500&&e()}))}));var _=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"menu-wrapper",children:Object(h.jsxs)("div",{className:"menu",children:[Object(h.jsx)("span",{"data-id":"item_dealings",className:"menu__item item_dealings",children:"\u0421\u0434\u0435\u043b\u043a\u0438"}),Object(h.jsx)("span",{"data-id":"item_sources",className:"menu__item item_sources",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"}),Object(h.jsx)("span",{"data-id":"item_companies",className:"menu__item item_companies",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(h.jsx)("span",{"data-id":"item_groups",className:"menu__item item_groups",children:"\u0413\u0440\u0443\u043f\u043f\u044b"}),Object(h.jsx)("span",{"data-id":"item_keywords",className:"menu__item item_keywords",children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430"}),Object(h.jsx)("span",{"data-id":"item_ads",className:"menu__item item_ads",children:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"})]})})}}]),s}(i.Component),p=(s(18),s.p+"static/media/download.50308752.svg"),g=s.p+"static/media/rect.74b4077e.svg",v=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.headerTitle;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h4",{className:"title header__title",children:e}),Object(h.jsxs)("div",{className:"header__btn-wrapper",children:[Object(h.jsxs)("button",{className:"btn btn_download",children:[Object(h.jsx)("div",{className:"btn-columns__img-wrapper",children:Object(h.jsx)("img",{className:"btn__img",src:p})}),Object(h.jsx)("span",{className:"btn_text color_grey",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"})]}),Object(h.jsxs)("button",{className:"btn btn_columns",children:[Object(h.jsxs)("div",{className:"btn-columns__img-wrapper",children:[Object(h.jsx)("img",{className:"btn__img",src:g}),Object(h.jsx)("img",{className:"btn__img",src:g}),Object(h.jsx)("img",{className:"btn__img",src:g})]}),Object(h.jsx)("span",{className:"btn_text color_grey",children:"\u0421\u0442\u043e\u043b\u0431\u0446\u044b"})]})]})]})}}]),s}(i.Component),w=(s(19),s.p+"static/media/arrowDown.1e6b48d4.svg"),O=s.p+"static/media/magnifier.9e985bde.svg",x=s.p+"static/media/gear.b21a0ffe.svg",f=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".filter .btn");function t(e){try{console.log("e.currentTarget:"),console.log(e.currentTarget);var t=e.currentTarget.classList.toString().replace("btn","").trim(),s=e.currentTarget.querySelector(".".concat(t,"__path"));if(s.style.transition="fill .18s linear","mouseenter"==e.type&&s.setAttribute("fill","#3A94D4"),"mouseleave"==e.type&&s.setAttribute("fill","#C5C5C5"),e&&"click"==e.type&&"btn_hz"!=t){var i=document.querySelector(".dealings_section");"btn_rows"==t&&i.classList.add("dealings_rows"),"btn_columns"==t&&i.classList.remove("dealings_rows"),console.log(i)}}catch(n){}}e.forEach((function(e,s){e.addEventListener("mouseenter",(function(e){t(e)})),e.addEventListener("mouseleave",(function(e){t(e)})),e.addEventListener("click",(function(e){t(e)}))}))}},{key:"render",value:function(){return Object(h.jsxs)("header",{className:"dealings-header",children:[Object(h.jsx)("div",{className:"dealings-header__item funnel-name ",children:Object(h.jsxs)("span",{className:"funnel-name__title text_no-br",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u043e\u0440\u043e\u043d\u043a\u0438",Object(h.jsx)("img",{className:"funnel-name__img",src:w})]})}),Object(h.jsxs)("div",{className:"dealings-header__item btn-wrapper filter",children:[Object(h.jsx)("button",{className:"btn btn_rows",children:Object(h.jsx)("svg",{className:"btn_rows__svg",width:"18",height:"12",viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{className:"btn_rows__path",d:"M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z",fill:"#C5C5C5"})})}),Object(h.jsx)("button",{className:"btn btn_columns",children:Object(h.jsx)("svg",{className:"btn_columns__svg",width:"17",height:"15",viewBox:"0 0 17 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{className:"btn_columns__path",d:"M6 14.5H11V0.416626H6V14.5ZM0 14.5H5V0.416626H0V14.5ZM12 0.416626V14.5H17V0.416626H12Z",fill:"#C5C5C5"})})}),Object(h.jsx)("button",{className:"btn btn_hz",children:Object(h.jsx)("svg",{className:"btn_hz__svg",width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{className:"btn_hz__path",d:"M16.5 2H13.5V0.5H12V2H6V0.5H4.5V2H1.5C1.1023 2.0004 0.720997 2.15856 0.439779 2.43978C0.15856 2.721 0.000397108 3.1023 0 3.5V18.5C0.000397108 18.8977 0.15856 19.279 0.439779 19.5602C0.720997 19.8414 1.1023 19.9996 1.5 20H16.5C16.8977 19.9996 17.279 19.8414 17.5602 19.5602C17.8414 19.279 17.9996 18.8977 18 18.5V3.5C17.9996 3.1023 17.8414 2.721 17.5602 2.43978C17.279 2.15856 16.8977 2.0004 16.5 2ZM1.5 3.5H4.5V5H6V3.5H12V5H13.5V3.5H16.5V6.5H1.5V3.5ZM1.5 8H5.25V12.5H1.5V8ZM11.25 18.5H6.75V14H11.25V18.5ZM11.25 12.5H6.75V8H11.25V12.5ZM12.75 18.5V14H16.5L16.5007 18.5H12.75Z",fill:"#C5C5C5"})})})]}),Object(h.jsx)("div",{className:"sep sep_1"}),Object(h.jsxs)("div",{className:"dealings-header__item search-wrapper",children:[Object(h.jsx)("img",{className:"search-wrapper__img",src:O}),Object(h.jsx)("input",{className:"search-wrapper__input color_light-grey",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0438 \u0444\u0438\u043b\u044c\u0442\u0440"})]}),Object(h.jsxs)("div",{className:"dealings-header__item dealings",children:[Object(h.jsx)("span",{className:"dealings__count color_light-grey text_no-br",children:"23 \u0441\u0434\u0435\u043b\u043a\u0438:\u2002"}),Object(h.jsx)("span",{className:"dealings__price text_no-br",children:" 19290 \u0440."})]}),Object(h.jsx)("div",{className:"sep sep_2"}),Object(h.jsx)("div",{className:"dealings-header__item btn-wrapper new-deal-wrapper",children:Object(h.jsx)("button",{className:"dealings-header__item btn btn_new-deal",children:"+ \u041d\u043e\u0432\u0430\u044f \u0441\u0434\u0435\u043b\u043a\u0430"})}),Object(h.jsx)("div",{className:"dealings-header__item settings-wrapper",children:Object(h.jsx)("button",{className:"dealings-header__item btn btn_settings",children:Object(h.jsx)("img",{src:x})})})]})}}]),s}(i.Component),y=(s(20),s.p+"static/media/avatar.cea1ff2e.svg"),C=s.p+"static/media/telegram_logo.a85e748b.svg",N=s.p+"static/media/instagram_logo.c4d9399b.svg",T=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={logo:""},i}return Object(o.a)(s,[{key:"componentDidMount",value:function(){switch(this.props.socialNetwork){case"Telegram":this.setState({logo:C});break;case"Instagram":this.setState({logo:N})}}},{key:"render",value:function(){var e=this.props,t=e.socialNetwork,s=e.currentData,i=e.nickname,n=e.comment,c=e.linkHref;return Object(h.jsxs)("div",{className:"post dealings__item",children:[Object(h.jsx)("img",{className:"post__user-avatar",src:y}),Object(h.jsxs)("span",{className:"post__social-network-title color_light-grey",children:[t," channel"]}),Object(h.jsx)("span",{className:"post__current-data",children:s}),Object(h.jsxs)("span",{className:"post__user-name color_blue",children:[t," ",i]}),Object(h.jsxs)("div",{className:"post__comment",children:[Object(h.jsx)("img",{className:"post__user-avatar post__user-avatar_minify",src:y}),Object(h.jsx)("span",{className:"post__comment-text",children:n})]}),Object(h.jsx)("a",{className:"post__share post__share_telegram",href:c,children:Object(h.jsx)("img",{className:"post__img",src:this.state.logo})})]})}}]),s}(i.Component),k=(s(21),function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("section",{className:"dealings dealings_section",children:[Object(h.jsxs)("div",{className:"dealings__article dealings__article_unparsed",children:[Object(h.jsxs)("div",{className:"dealings__position",children:[Object(h.jsx)("h4",{className:"dealings__title",children:"\u041d\u0415\u0420\u0410\u0417\u041e\u0411\u0420\u0410\u041d\u041d\u041e\u0415"}),Object(h.jsx)("span",{className:"dealings__desc",children:"13 \u0437\u0430\u044f\u0432\u043e\u043a"})]}),Object(h.jsxs)("div",{className:"items-wrapper",children:[Object(h.jsx)(T,{socialNetwork:"Telegram",currentData:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f 13:20",nickname:"user1",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"}),Object(h.jsx)(T,{socialNetwork:"Instagram",currentData:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f 23:05",nickname:"user2",comment:"\u043a 10 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})]})]}),Object(h.jsxs)("div",{className:"dealings__article dealings__article_wip",children:[Object(h.jsxs)("div",{className:"dealings__position",children:[Object(h.jsx)("h4",{className:"dealings__title",children:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"}),Object(h.jsx)("span",{className:"dealings__desc",children:"10 \u0437\u0430\u044f\u0432\u043e\u043a"})]}),Object(h.jsx)("div",{className:"items-wrapper",children:Object(h.jsx)(T,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 11:25",nickname:"user3",comment:"\u043a 13 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})})]}),Object(h.jsxs)("div",{className:"dealings__article dealings__article_assembly",children:[Object(h.jsxs)("div",{className:"dealings__position",children:[Object(h.jsx)("h4",{className:"dealings__title",children:"\u0421\u0411\u041e\u0420\u041a\u0410 \u0417\u0410\u041a\u0410\u0417\u0410"}),Object(h.jsx)("span",{className:"dealings__desc",children:"1 \u0437\u0430\u044f\u0432\u043a\u0430"})]}),Object(h.jsx)("div",{className:"items-wrapper",children:Object(h.jsx)(T,{socialNetwork:"Telegram",currentData:"\u041d\u0435\u0434\u0435\u043b\u044e \u043d\u0430\u0437\u0430\u0434",nickname:"user4",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"})})]}),Object(h.jsxs)("div",{className:"dealings__article dealings__article_realized",children:[Object(h.jsxs)("div",{className:"dealings__position",children:[Object(h.jsx)("h4",{className:"dealings__title",children:"\u0423\u0421\u041f\u0415\u0428\u041d\u041e \u0420\u0415\u0410\u041b\u0418\u0417\u041e\u0412\u0410\u041d\u041e"}),Object(h.jsx)("span",{className:"dealings__desc",children:"1 \u0437\u0430\u044f\u0432\u043a\u0430"})]}),Object(h.jsxs)("div",{className:"items-wrapper",children:[Object(h.jsx)(T,{socialNetwork:"Telegram",currentData:"\u0412\u0447\u0435\u0440\u0430 8:30",nickname:"user5",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"}),Object(h.jsx)(T,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 13:18",nickname:"user6",comment:"\u043a 13 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"}),Object(h.jsx)(T,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 11:42",nickname:"user7",comment:"\u043a 20 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})]})]})]})}}]),s}(i.Component)),S=(s(22),s.p+"static/media/arrow.75ac89e1.svg"),H=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={tableTitle:i.props.tableTitle},i}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props,t=e.circleColor,s=e.serviceTitle,i=e.serviceTitleDesc,n=e.clicksCount,c=e.showsCount,a=e.conversionPriceCount,r=e.priceCount,l=e.conversionCount,o=e.salesCount;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"table__item table__cell service-title border-top_grey",children:Object(h.jsxs)("div",{className:"content-container",children:[Object(h.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(h.jsx)("circle",{cx:"9.5",cy:"9.57959",r:"9.5",fill:t})}),Object(h.jsxs)("span",{className:"table__p color_blue",children:[s," "]}),Object(h.jsxs)("span",{className:"table__desc color_grey",children:[i," "]})]})}),Object(h.jsx)("div",{className:"table__item table__cell clicks-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:n})}),Object(h.jsx)("div",{className:"table__item table__cell shows-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:c})}),Object(h.jsx)("div",{className:"table__item table__cell conversion-price-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:a})}),Object(h.jsx)("div",{className:"table__item table__cell price-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:r})}),Object(h.jsx)("div",{className:"table__item table__cell conversion-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:l})}),Object(h.jsx)("div",{className:"table__item table__cell sales-count border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:o})})]})}}]),s}(i.Component),V=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props,t=e.tableTitle,s=e.row_1,i=e.row_2,n=e.row_3;return Object(h.jsxs)("section",{className:"table",children:[Object(h.jsx)("div",{"data-id":"sources",className:"table__article table__item sources border-top_grey",children:Object(h.jsxs)("div",{className:"content-container",children:[Object(h.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(h.jsx)("circle",{cx:"9.5",cy:"9.65918",r:"9.5",fill:"#C4C4C4"})}),Object(h.jsxs)("h4",{className:"table__title",children:[t,Object(h.jsx)("img",{className:"table__img img_arrow",src:S})]})]})}),Object(h.jsx)("div",{"data-id":"clicks",className:"table__article table__item clicks border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u041a\u043b\u0438\u043a\u0438"})}),Object(h.jsx)("div",{"data-id":"shows",className:"table__article table__item shows border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u041f\u043e\u043a\u0430\u0437\u044b"})}),Object(h.jsx)("div",{"data-id":"conversion-price",className:"table__article table__item conversion-price border-top_grey",children:Object(h.jsxs)("span",{className:"table__p",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",Object(h.jsx)("br",{})," \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"]})}),Object(h.jsx)("div",{"data-id":"price",className:"table__article table__item price border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(h.jsx)("div",{"data-id":"conversion",className:"table__article table__item conversion border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"})}),Object(h.jsx)("div",{"data-id":"sales",className:"table__article table__item sales border-top_grey",children:Object(h.jsx)("span",{className:"table__p",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"})}),s,i,n]})}}]),s}(i.Component),D=function(e){Object(d.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={rows:"",rowsCount:2,activeMenuItem:"item_sources",headerTitle:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"},i.checkTableTitle(),i}return Object(o.a)(s,[{key:"componentDidUpdate",value:function(e,t){var s=this;t.activeMenuItem,this.state.activeMenuItem,this.state.headerTitle!=t.headerTitle&&this.checkTableTitle(),this.state.rowsCount!=t.rowsCount&&(this.countRows(),setTimeout((function(){s.pasteTableArticlesTwins()}),1))}},{key:"componentDidMount",value:function(){var e=this;this.checkTableTitle(),this.countRows(),setTimeout((function(){e.pasteTableArticlesTwins()}),1),this.setState({menuItems:document.querySelectorAll(".menu__item")},(function(){e.toggleMenuItem(e.state.activeMenuItem);var t,s=Object(r.a)(e.state.menuItems);try{var i=function(){var s=t.value;s.addEventListener("click",(function(){e.toggleMenuItem(s.getAttribute("data-id"))}))};for(s.s();!(t=s.n()).done;)i()}catch(n){s.e(n)}finally{s.f()}}))}},{key:"countRows",value:function(){var e=0;for(var t in this.state.rows)0!=this.state.rows[t]&&e++,this.setState({rowsCount:e},(function(){}))}},{key:"checkTableTitle",value:function(){var e=this;switch(this.state.headerTitle){case"\u0421\u0434\u0435\u043b\u043a\u0438":this.setState({rows:{row_1:!1,row_2:!1,row_3:!1}},(function(){e.countRows()}));break;case"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438":this.setState({rows:{row_1:Object(h.jsx)(H,{serviceTitle:"Yandex",serviceTitleDesc:"Yandex letai-266319-enc0",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:Object(h.jsx)(H,{serviceTitle:"GoogleAds",serviceTitleDesc:"146-362-7099",clicksCount:"900",showsCount:"18000",conversionPriceCount:"931 \u20bd",priceCount:"186200",conversionCount:"200",salesCount:"40",circleColor:"#f00"}),row_3:!1}},(function(){e.countRows()}));break;case"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438":this.setState({rows:{row_1:Object(h.jsx)(H,{serviceTitle:"\u0410\u0440\u0435\u043d\u0434\u0430-\u041f\u043e\u0438\u0441\u043a-\u0421\u043e\u0447\u0438",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:!1,row_3:!1}},(function(){e.countRows()}));break;case"\u0413\u0440\u0443\u043f\u043f\u044b":this.setState({rows:{row_1:Object(h.jsx)(H,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:Object(h.jsx)(H,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 2",serviceTitleDesc:"23",clicksCount:"14",showsCount:"55",conversionPriceCount:"3",priceCount:"d",conversionCount:"e",salesCount:"s",circleColor:"red"}),row_3:Object(h.jsx)(H,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 3",serviceTitleDesc:"5",clicksCount:"5",showsCount:"123",conversionPriceCount:"40",priceCount:"5",conversionCount:"2",salesCount:"1",circleColor:"blue"})}},(function(){e.countRows()}));break;case"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430":this.setState({rows:{row_1:Object(h.jsx)(H,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:Object(h.jsx)(H,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 2",serviceTitleDesc:"555",clicksCount:"777",showsCount:"2505",conversionPriceCount:"2550 \u20bd",priceCount:"17520",conversionCount:"100",salesCount:"10",circleColor:"red"}),row_3:Object(h.jsx)(H,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 3",serviceTitleDesc:"123",clicksCount:"456",showsCount:"789",conversionPriceCount:"22",priceCount:"11",conversionCount:"0",salesCount:"55",circleColor:"blue"})}},(function(){e.countRows()}));break;case"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f":this.setState({rows:{row_1:Object(h.jsx)(H,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),row_2:Object(h.jsx)(H,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 2",serviceTitleDesc:"51a",clicksCount:"25411",showsCount:"8541",conversionPriceCount:"6541 \u20bd",priceCount:"2020",conversionCount:"05",salesCount:"10",circleColor:"red"}),row_3:Object(h.jsx)(H,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 3",serviceTitleDesc:"1358",clicksCount:"4561",showsCount:"854",conversionPriceCount:"8141 \u20bd",priceCount:"8541",conversionCount:"",salesCount:"145",circleColor:"blue"})}},(function(){e.countRows()}))}}},{key:"pasteTableArticlesTwins",value:function(){for(var e,t=this,s=document.querySelector(".table"),i=document.querySelectorAll(".table__article:not(.twin)"),n=["'sources auto'","'clicks auto'","'shows auto'","'conversion-price auto'","'price auto'","'conversion auto'","'sales auto'"],c=n,a=function(i){var a=n.map((function(e,t){if(!e.includes("twin"))return e.replace(/\s+/,"_twin_".concat(i-1," "))}));try{a.forEach((function(e,t,s){s[t].includes("0")||c.push("".concat(e))}))}catch(l){}1===t.state.rowsCount&&(c=["'sources auto'","'clicks auto'","'shows auto'","'conversion-price auto'","'price auto'","'conversion auto'","'sales auto'"]);var r=c.join().replace(/[.,%]/g,"");if(window.innerWidth<=500)try{s.style.gridTemplateAreas="".concat(r)}catch(o){}if(window.innerWidth>=500)try{s.style.gridTemplateAreas="".concat(n.join())}catch(d){}e=i},r=1;r<=this.state.rowsCount;r++)a(r);document.querySelectorAll(".twin").forEach((function(e,t){e.remove()}));var l,o=0;c.forEach((function(e,t){e.toString().includes("twin")&&o++})),l=o/i.length;for(var d=0,u=0;u<l;u++)d++,i.forEach((function(t,i){if(1!=e){var n=t.getAttribute("data-id"),c=t.cloneNode(!0);c.setAttribute("data-id","".concat(n,"_twin_").concat(e-d)),c.classList.add("twin","".concat(n,"_twin_").concat(e-d)),s.prepend(c)}}));document.querySelectorAll(".twin").forEach((function(e,t){var s=e.getAttribute("data-id");e.setAttribute("style","grid-area: ".concat(s," !important"))}))}},{key:"toggleMenuItem",value:function(e){var t,s=Object(r.a)(this.state.menuItems);try{for(s.s();!(t=s.n()).done;){var i=t.value;i.classList.remove("item_active"),i.getAttribute("data-id")==e&&(this.setState({activeMenuItem:e,headerTitle:i.textContent}),i.classList.add("item_active"))}}catch(n){s.e(n)}finally{s.f()}}},{key:"render",value:function(){var e,t,s,i;return"\u0421\u0434\u0435\u043b\u043a\u0438"==this.state.headerTitle?(e="",t=Object(h.jsx)(f,{}),s=Object(h.jsx)(k,{}),i=""):(e=Object(h.jsx)(v,{headerTitle:this.state.headerTitle}),t="",s="",i=Object(h.jsx)(V,{tableTitle:this.state.headerTitle,activeMenuItem:this.state.activeMenuItem,row_1:this.state.rows.row_1,row_2:this.state.rows.row_2,row_3:this.state.rows.row_3})),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{}),Object(h.jsxs)("main",{className:"content-wrapper",children:[Object(h.jsx)("div",{className:"menu-toggler",children:Object(h.jsx)("img",{className:"menu-toggler__img",src:m})}),Object(h.jsx)(_,{}),Object(h.jsxs)("div",{className:"options-wrapper",children:[e,t,s,i]})]})]})}}]),s}(i.Component),M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),i(e),n(e),c(e),a(e)}))};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),M()}],[[23,1,2]]]);
//# sourceMappingURL=main.d503c1d9.chunk.js.map