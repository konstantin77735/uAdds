(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),c=s(8),n=s.n(c),r=(s(13),s(7)),l=s(2),o=s(3),d=s(5),_=s(4),b=(s.p,s.p+"static/media/arrow.8fff2916.svg"),m=(s(14),s(15),s(0)),j=function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("nav",{className:"nav",children:[Object(m.jsxs)("div",{className:"logo",children:[Object(m.jsx)("span",{children:"uMark.it "}),Object(m.jsx)("span",{children:"\u2014 uAdds"})]}),Object(m.jsxs)("div",{className:"data-range-wrapper",children:[Object(m.jsx)("span",{className:"data-range",children:"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0434\u0430\u0442 "}),Object(m.jsxs)("span",{className:"data",children:["2.03.2021 \u2014 3.03.2021",Object(m.jsx)("svg",{className:"data__img",width:"13",height:"7",viewBox:"0 0 13 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M6.5 7L12.9952 0.25H0.00480938L6.5 7Z",fill:"white"})})]})]})]})}}]),s}(i.Component),h=(s(17),function(){function e(t){Object(l.a)(this,e),this.menuTriggerSelector=t.menuTriggerSelector,this.menuSelector=t.menuSelector,this.type=t.type||"appear",this.transitionTime=t.transitionTime||".25s",this.transitionType=t.transitionType||".ease",this.menuDisplay=t.menuDisplay||"block",this.slideBegin=t.slideBegin||"translate(-100%, 0px)",this.slideEnd=t.slideEnd||"translate(0px, 0px)",this.menuTrigger=document.querySelector("".concat(this.menuTriggerSelector)),this.menu=document.querySelector("".concat(this.menuSelector)),this.isChanging=!1,this.state="hide",this.init()}return Object(o.a)(e,[{key:"init",value:function(){var e=this;this.menuTrigger.addEventListener("click",this.toggle.bind(this)),this.menuTrigger.addEventListener("touchstart",this.toggle.bind(this)),"appear"==this.type&&(this.menu.style.height="0",this.menu.style.opacity=0,this.menu.style.display="none",this.menu.addEventListener("transitionend",(function(t){t.target==e.menu&&(e.isChanging=!1,"hide"==e.state&&(e.menu.style.display="none"))}))),"slide"==this.type&&(document.body.style.overflowX="hidden",this.setVendorStyleProperty(this.menu,"transition","transform ".concat(this.transitionTime," ").concat(this.transitionType)),this.setVendorStyleProperty(this.menu,"transform",this.slideBegin),this.setVendorStyleProperty(this.menuTrigger.querySelector(".menu-toggler__img"),"transition","transform ".concat(this.transitionTime," ").concat(this.transitionType)))}},{key:"setVendorStyleProperty",value:function(e,t,s){e.style["webkit"+t]=s,e.style["moz"+t]=s,e.style["ms"+t]=s,e.style["o"+t]=s,e.style[t]=s}},{key:"toggle",value:function(){var e=this;if("appear"==this.type&&!this.isChanging){if("1"==this.menu.style.opacity)return this.setVendorStyleProperty(this.menu,"transition","opacity ".concat(this.transitionTime," ").concat(this.transitionType)),this.menuTrigger.classList.contains(this.menuTriggerSelector)&&this.menuTrigger.classList.remove("close"),this.state="hide",this.menu.style.height="0",this.menu.style.opacity="0",void(this.isChanging=!0);if("0"==this.menu.style.opacity)return this.menuTrigger.classList.contains(this.menuTriggerSelector)&&this.menuTrigger.classList.add("close"),this.state="show",this.menu.style.display=this.menuDisplay,void setTimeout((function(){e.setVendorStyleProperty(e.menu,"transition","opacity ".concat(e.transitionTime," ").concat(e.transitionType)),e.menu.style.height="initial",e.menu.style.opacity="1",e.isChanging=!0}),1)}"slide"!=this.type||this.isChanging||(this.menu.style.transform==this.slideBegin?(this.menuTrigger.classList.contains("menu-toggler")&&this.menuTrigger.classList.add("close"),this.setVendorStyleProperty(this.menu,"transform",this.slideEnd)):(this.menuTrigger.classList.contains("menu-toggler")&&this.menuTrigger.classList.remove("close"),this.setVendorStyleProperty(this.menu,"transform",this.slideBegin)))}}]),e}());document.addEventListener("DOMContentLoaded",(function(){var e=function(){new h({menuTriggerSelector:".menu-toggler",menuSelector:".menu-wrapper",transitionTime:".5s",transitionType:"linear",menuDisplay:"grid",type:"slide",slideBegin:"translate(-200%, 0px)",slideEnd:"translate(0px, 0px)"})};window.innerWidth<=450&&e(),window.addEventListener("resize",(function(){window.innerWidth<=450&&e()}))}));var u=function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"menu-wrapper",children:Object(m.jsxs)("div",{className:"menu",children:[Object(m.jsx)("span",{"data-id":"item_dealings",className:"menu__item",children:"\u0421\u0434\u0435\u043b\u043a\u0438"}),Object(m.jsx)("span",{"data-id":"item_sources",className:"menu__item",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"}),Object(m.jsx)("span",{"data-id":"item_companies",className:"menu__item",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(m.jsx)("span",{"data-id":"item_groups",className:"menu__item",children:"\u0413\u0440\u0443\u043f\u043f\u044b"}),Object(m.jsx)("span",{"data-id":"item_keywords",className:"menu__item",children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430"}),Object(m.jsx)("span",{"data-id":"item_ads",className:"menu__item",children:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"})]})})}}]),s}(i.Component),p=(s(18),s.p+"static/media/download.50308752.svg"),g=s.p+"static/media/rect.74b4077e.svg",v=function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props.headerTitle;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h4",{className:"title header__title",children:e}),Object(m.jsxs)("div",{className:"header__btn-wrapper",children:[Object(m.jsxs)("button",{className:"btn btn_download",children:[Object(m.jsx)("div",{className:"btn-columns__img-wrapper",children:Object(m.jsx)("img",{className:"btn__img",src:p})}),Object(m.jsx)("span",{className:"btn_text color_grey",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"})]}),Object(m.jsxs)("button",{className:"btn btn_columns",children:[Object(m.jsxs)("div",{className:"btn-columns__img-wrapper",children:[Object(m.jsx)("img",{className:"btn__img",src:g}),Object(m.jsx)("img",{className:"btn__img",src:g}),Object(m.jsx)("img",{className:"btn__img",src:g})]}),Object(m.jsx)("span",{className:"btn_text color_grey",children:"\u0421\u0442\u043e\u043b\u0431\u0446\u044b"})]})]})]})}}]),s}(i.Component),O=(s(19),s.p+"static/media/arrowDown.1e6b48d4.svg"),x=s.p+"static/media/lines-horiz.3e300706.svg",w=s.p+"static/media/lines-vert.bf9e2219.svg",N=s.p+"static/media/lines-x.db2bc477.svg",y=s.p+"static/media/magnifier.9e985bde.svg",C=s.p+"static/media/gear.b21a0ffe.svg",f=function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("header",{className:"dealings-header",children:[Object(m.jsx)("div",{className:"dealings-header__item funnel-name ",children:Object(m.jsxs)("span",{className:"funnel-name__title text_no-br",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u043e\u0440\u043e\u043d\u043a\u0438",Object(m.jsx)("img",{className:"funnel-name__img",src:O})]})}),Object(m.jsxs)("div",{className:"dealings-header__item btn-wrapper filter",children:[Object(m.jsx)("button",{className:"btn btn_colums",children:Object(m.jsx)("img",{src:x})}),Object(m.jsx)("button",{className:"btn btn_lines",children:Object(m.jsx)("img",{src:w})}),Object(m.jsx)("button",{className:"btn btn_hz",children:Object(m.jsx)("img",{src:N})})]}),Object(m.jsx)("div",{className:"sep sep_1"}),Object(m.jsxs)("div",{className:"dealings-header__item search-wrapper",children:[Object(m.jsx)("img",{className:"search-wrapper__img",src:y}),Object(m.jsx)("input",{className:"search-wrapper__input color_light-grey",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0438 \u0444\u0438\u043b\u044c\u0442\u0440"})]}),Object(m.jsxs)("div",{className:"dealings-header__item dealings",children:[Object(m.jsx)("span",{className:"dealings__count color_light-grey text_no-br",children:"23 \u0441\u0434\u0435\u043b\u043a\u0438:\u2002"}),Object(m.jsx)("span",{className:"dealings__price text_no-br",children:" 19290 \u0440."})]}),Object(m.jsx)("div",{className:"sep sep_2"}),Object(m.jsx)("div",{className:"dealings-header__item btn-wrapper new-deal-wrapper",children:Object(m.jsx)("button",{className:"dealings-header__item btn btn_new-deal",children:"+ \u041d\u043e\u0432\u0430\u044f \u0441\u0434\u0435\u043b\u043a\u0430"})}),Object(m.jsx)("div",{className:"dealings-header__item settings-wrapper",children:Object(m.jsx)("button",{className:"dealings-header__item btn btn_settings",children:Object(m.jsx)("img",{src:C})})})]})}}]),s}(i.Component),k=(s(20),s.p+"static/media/avatar.cea1ff2e.svg"),T=s.p+"static/media/telegram_logo.a85e748b.svg",S=s.p+"static/media/instagram_logo.c4d9399b.svg",D=function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={logo:""},i}return Object(o.a)(s,[{key:"componentDidMount",value:function(){switch(this.props.socialNetwork){case"Telegram":this.setState({logo:T});break;case"Instagram":this.setState({logo:S})}}},{key:"render",value:function(){var e=this.props,t=e.socialNetwork,s=e.currentData,i=e.nickname,a=e.comment,c=e.linkHref;return Object(m.jsxs)("div",{className:"post dealings__item",children:[Object(m.jsx)("img",{className:"post__user-avatar",src:k}),Object(m.jsxs)("span",{className:"post__social-network-title color_light-grey",children:[t," channel"]}),Object(m.jsx)("span",{className:"post__current-data",children:s}),Object(m.jsxs)("span",{className:"post__user-name color_blue",children:[t," ",i]}),Object(m.jsxs)("div",{className:"post__comment",children:[Object(m.jsx)("img",{className:"post__user-avatar post__user-avatar_minify",src:k}),Object(m.jsx)("span",{className:"post__comment-text",children:a})]}),Object(m.jsx)("a",{className:"post__share post__share_telegram",href:c,children:Object(m.jsx)("img",{className:"post__img",src:this.state.logo})})]})}}]),s}(i.Component),P=(s(21),function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"dealings",children:[Object(m.jsxs)("div",{className:"dealings__article dealings__article_unparsed",children:[Object(m.jsx)("h4",{className:"dealings__title",children:"\u041d\u0415\u0420\u0410\u0417\u041e\u0411\u0420\u0410\u041d\u041d\u041e\u0415"}),Object(m.jsx)("span",{className:"dealings__desc",children:"13 \u0437\u0430\u044f\u0432\u043e\u043a"}),Object(m.jsx)(D,{socialNetwork:"Telegram",currentData:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f 13:20",nickname:"user1",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"}),Object(m.jsx)(D,{socialNetwork:"Instagram",currentData:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f 23:05",nickname:"user2",comment:"\u043a 10 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})]}),Object(m.jsxs)("div",{className:"dealings__article dealings__article_wip",children:[Object(m.jsx)("h4",{className:"dealings__title",children:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"}),Object(m.jsx)("span",{className:"dealings__desc",children:"10 \u0437\u0430\u044f\u0432\u043e\u043a"}),Object(m.jsx)(D,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 11:25",nickname:"user3",comment:"\u043a 13 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})]}),Object(m.jsxs)("div",{className:"dealings__article dealings__article_assembly",children:[Object(m.jsx)("h4",{className:"dealings__title",children:"\u0421\u0411\u041e\u0420\u041a\u0410 \u0417\u0410\u041a\u0410\u0417\u0410"}),Object(m.jsx)("span",{className:"dealings__desc",children:"1 \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(m.jsx)(D,{socialNetwork:"Telegram",currentData:"\u041d\u0435\u0434\u0435\u043b\u044e \u043d\u0430\u0437\u0430\u0434",nickname:"user4",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"})]}),Object(m.jsxs)("div",{className:"dealings__article dealings__article_realized",children:[Object(m.jsx)("h4",{className:"dealings__title",children:"\u0423\u0421\u041f\u0415\u0428\u041d\u041e \u0420\u0415\u0410\u041b\u0418\u0417\u041e\u0412\u0410\u041d\u041e"}),Object(m.jsx)("span",{className:"dealings__desc",children:"1 \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(m.jsx)(D,{socialNetwork:"Telegram",currentData:"\u0412\u0447\u0435\u0440\u0430 8:30",nickname:"user5",comment:"\u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430...",linkHref:"https://web.telegram.org/#/im"}),Object(m.jsx)(D,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 13:18",nickname:"user6",comment:"\u043a 13 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"}),Object(m.jsx)(D,{socialNetwork:"Instagram",currentData:"\u0412\u0447\u0435\u0440\u0430 11:42",nickname:"user7",comment:"\u043a 20 \u0447\u0430\u0441\u0430\u043c \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438...",linkHref:"https://www.instagram.com/?hl=ru"})]})]})}}]),s}(i.Component)),R=(s(22),s.p+"static/media/arrow.75ac89e1.svg"),L=function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={tableTitle:i.props.tableTitle},i}return Object(o.a)(s,[{key:"componentDidUpdate",value:function(e){this.props}},{key:"render",value:function(){var e=this.props,t=e.circleColor,s=e.serviceTitle,i=e.serviceTitleDesc,a=e.clicksCount,c=e.showsCount,n=e.conversionPriceCount,r=e.priceCount,l=e.conversionCount,o=e.salesCount;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"table__item table__cell service-title border-top_grey",children:Object(m.jsxs)("div",{className:"content-container",children:[Object(m.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(m.jsx)("circle",{cx:"9.5",cy:"9.57959",r:"9.5",fill:t})}),Object(m.jsxs)("span",{className:"table__p color_blue",children:[s," "]}),Object(m.jsxs)("span",{className:"table__desc color_grey",children:[i," "]})]})}),Object(m.jsx)("div",{className:"table__item table__cell clicks-count border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:a})}),Object(m.jsx)("div",{className:"table__item table__cell shows-count border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:c})}),Object(m.jsx)("div",{className:"table__item table__cell conversion-price-count border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:n})}),Object(m.jsx)("div",{className:"table__item table__cell price-count border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:r})}),Object(m.jsx)("div",{className:"table__item table__cell conversion-count border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:l})}),Object(m.jsx)("div",{className:"table__item table__cell sales-count border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:o})})]})}}]),s}(i.Component),B=function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={tableRow1:"",tableRow2:"",tableRow3:""},i.checkTableTitle(),i}return Object(o.a)(s,[{key:"checkTableTitle",value:function(){switch(this.props.tableTitle){case"\u0421\u0434\u0435\u043b\u043a\u0438":this.setState({tableRow1:"",tableRow2:""});break;case"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438":this.setState({tableRow1:Object(m.jsx)(L,{serviceTitle:"Yandex",serviceTitleDesc:"Yandex letai-266319-enc0",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),tableRow2:Object(m.jsx)(L,{serviceTitle:"GoogleAds",serviceTitleDesc:"146-362-7099",clicksCount:"900",showsCount:"18000",conversionPriceCount:"931 \u20bd",priceCount:"186200",conversionCount:"200",salesCount:"40",circleColor:"#f00"}),tableRow3:""});break;case"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438":this.setState({tableRow1:Object(m.jsx)(L,{serviceTitle:"\u0410\u0440\u0435\u043d\u0434\u0430-\u041f\u043e\u0438\u0441\u043a-\u0421\u043e\u0447\u0438",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),tableRow2:"",tableRow3:""});break;case"\u0413\u0440\u0443\u043f\u043f\u044b":this.setState({tableRow1:Object(m.jsx)(L,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),tableRow2:Object(m.jsx)(L,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 2",serviceTitleDesc:"23",clicksCount:"14",showsCount:"55",conversionPriceCount:"3",priceCount:"d",conversionCount:"e",salesCount:"",circleColor:"red"}),tableRow3:Object(m.jsx)(L,{serviceTitle:"\u0413\u0440\u0443\u043f\u043f\u0430 3",serviceTitleDesc:"5",clicksCount:"5",showsCount:"123",conversionPriceCount:"40",priceCount:"5",conversionCount:"2",salesCount:"1",circleColor:"blue"})});break;case"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430":this.setState({tableRow1:Object(m.jsx)(L,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),tableRow2:Object(m.jsx)(L,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 2",serviceTitleDesc:"",clicksCount:"",showsCount:"",conversionPriceCount:"",priceCount:"",conversionCount:"",salesCount:"",circleColor:"red"}),tableRow3:Object(m.jsx)(L,{serviceTitle:"\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e 3",serviceTitleDesc:"123",clicksCount:"456",showsCount:"789",conversionPriceCount:"22",priceCount:"11",conversionCount:"0",salesCount:"55",circleColor:"blue"})});break;case"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f":this.setState({tableRow1:Object(m.jsx)(L,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 1",serviceTitleDesc:"123",clicksCount:"852",showsCount:"8520",conversionPriceCount:"1025 \u20bd",priceCount:"102500",conversionCount:"100",salesCount:"10",circleColor:"#00B355"}),tableRow2:Object(m.jsx)(L,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 2",serviceTitleDesc:"",clicksCount:"",showsCount:"",conversionPriceCount:"",priceCount:"",conversionCount:"",salesCount:"",circleColor:"red"}),tableRow3:Object(m.jsx)(L,{serviceTitle:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435 3",serviceTitleDesc:"",clicksCount:"",showsCount:"",conversionPriceCount:"",priceCount:"",conversionCount:"",salesCount:"",circleColor:"blue"})})}}},{key:"componentDidMount",value:function(){this.checkTableTitle()}},{key:"componentDidUpdate",value:function(e){this.props!=e&&this.checkTableTitle()}},{key:"render",value:function(){var e=this.props.tableTitle;return Object(m.jsxs)("section",{className:"table",children:[Object(m.jsx)("div",{"data-id":"sources",className:"table__article table__item sources border-top_grey",children:Object(m.jsxs)("div",{className:"content-container",children:[Object(m.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(m.jsx)("circle",{cx:"9.5",cy:"9.65918",r:"9.5",fill:"#C4C4C4"})}),Object(m.jsxs)("h4",{className:"table__title",children:[e,Object(m.jsx)("img",{className:"table__img img_arrow",src:R})]})]})}),Object(m.jsx)("div",{"data-id":"clicks",className:"table__article table__item clicks border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041a\u043b\u0438\u043a\u0438"})}),Object(m.jsx)("div",{"data-id":"shows",className:"table__article table__item shows border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041f\u043e\u043a\u0430\u0437\u044b"})}),Object(m.jsx)("div",{"data-id":"conversion-price",className:"table__article table__item conversion-price border-top_grey",children:Object(m.jsxs)("span",{className:"table__p",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",Object(m.jsx)("br",{})," \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"]})}),Object(m.jsx)("div",{"data-id":"price",className:"table__article table__item price border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(m.jsx)("div",{"data-id":"conversion",className:"table__article table__item conversion border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"})}),Object(m.jsx)("div",{"data-id":"sales",className:"table__article table__item sales border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"})}),this.state.tableRow1,Object(m.jsx)("div",{"data-id":"sources_twin",className:"table__article table__item table__item_twin sources_twin sources_twin_1 border-top_grey",children:Object(m.jsxs)("div",{className:"content-container",children:[Object(m.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(m.jsx)("circle",{cx:"9.5",cy:"9.65918",r:"9.5",fill:"#C4C4C4"})}),Object(m.jsx)("h4",{className:"table__title",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"})]})}),Object(m.jsx)("div",{"data-id":"clicks_twin",className:"table__article table__item table__item_twin clicks_twin clicks_twin_1 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041a\u043b\u0438\u043a\u0438"})}),Object(m.jsx)("div",{"data-id":"shows_twin",className:"table__article table__item table__item_twin shows_twin shows_twin_1 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041f\u043e\u043a\u0430\u0437\u044b"})}),Object(m.jsx)("div",{"data-id":"conversion-price_twin",className:"table__article table__item table__item_twin conversion-price_twin  conversion-price_twin_1 border-top_grey",children:Object(m.jsxs)("span",{className:"table__p",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",Object(m.jsx)("br",{})," \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"]})}),Object(m.jsx)("div",{"data-id":"price_twin",className:"table__article table__item table__item_twin price_twin price_twin_1 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(m.jsx)("div",{"data-id":"conversion_twin",className:"table__article table__item table__item_twin conversion_twin conversion_twin_1 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"})}),Object(m.jsx)("div",{"data-id":"sales_twin",className:"table__article table__item table__item_twin sales_twin_1 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"})}),this.state.tableRow2,Object(m.jsx)("div",{"data-id":"sources_twin",className:"table__article table__item table__item_twin sources_twin sources_twin_2 border-top_grey",children:Object(m.jsxs)("div",{className:"content-container",children:[Object(m.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(m.jsx)("circle",{cx:"9.5",cy:"9.65918",r:"9.5",fill:"#C4C4C4"})}),Object(m.jsx)("h4",{className:"table__title",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"})]})}),Object(m.jsx)("div",{"data-id":"clicks_twin",className:"table__article table__item table__item_twin clicks_twin clicks_twin_2 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041a\u043b\u0438\u043a\u0438"})}),Object(m.jsx)("div",{"data-id":"shows_twin",className:"table__article table__item table__item_twin shows_twin shows_twin_2 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041f\u043e\u043a\u0430\u0437\u044b"})}),Object(m.jsx)("div",{"data-id":"conversion-price_twin",className:"table__article table__item table__item_twin conversion-price_twin  conversion-price_twin_2 border-top_grey",children:Object(m.jsxs)("span",{className:"table__p",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",Object(m.jsx)("br",{})," \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"]})}),Object(m.jsx)("div",{"data-id":"price_twin",className:"table__article table__item table__item_twin price_twin price_twin_2 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(m.jsx)("div",{"data-id":"conversion_twin",className:"table__article table__item table__item_twin conversion_twin conversion_twin_2 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"})}),Object(m.jsx)("div",{"data-id":"sales_twin",className:"table__article table__item table__item_twin sales_twin_2 border-top_grey",children:Object(m.jsx)("span",{className:"table__p",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"})}),this.state.tableRow3]})}}]),s}(i.Component),I=function(e){Object(d.a)(s,e);var t=Object(_.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={activeMenuItem:"item_sources",headerTitle:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"},i}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.setState({menuItems:document.querySelectorAll(".menu__item")},(function(){e.toggleMenuItem(e.state.activeMenuItem);var t,s=Object(r.a)(e.state.menuItems);try{var i=function(){var s=t.value;s.addEventListener("click",(function(){e.toggleMenuItem(s.getAttribute("data-id"))}))};for(s.s();!(t=s.n()).done;)i()}catch(a){s.e(a)}finally{s.f()}}))}},{key:"toggleMenuItem",value:function(e){var t,s=Object(r.a)(this.state.menuItems);try{for(s.s();!(t=s.n()).done;){var i=t.value;i.classList.remove("item_active"),i.getAttribute("data-id")==e&&(this.setState({activeMenuItem:e,headerTitle:i.textContent}),i.classList.add("item_active"))}}catch(a){s.e(a)}finally{s.f()}}},{key:"render",value:function(){var e,t,s,i;return"\u0421\u0434\u0435\u043b\u043a\u0438"==this.state.headerTitle?(e="",t=Object(m.jsx)(f,{}),s=Object(m.jsx)(P,{}),i=""):(e=Object(m.jsx)(v,{headerTitle:this.state.headerTitle}),t="",s="",i=Object(m.jsx)(B,{tableTitle:this.state.headerTitle,activeMenuItem:this.state.activeMenuItem})),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{}),Object(m.jsxs)("main",{className:"content-wrapper",children:[Object(m.jsx)("div",{className:"menu-toggler",children:Object(m.jsx)("img",{className:"menu-toggler__img",src:b})}),Object(m.jsx)(u,{}),Object(m.jsxs)("div",{className:"options-wrapper",children:[e,t,s,i]})]})]})}}]),s}(i.Component),M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),c(e),n(e)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),M()}],[[23,1,2]]]);
//# sourceMappingURL=main.66903478.chunk.js.map