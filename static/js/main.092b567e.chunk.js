(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),i=s(8),n=s.n(i),l=(s(13),s.p,s(14),s(2)),r=s(3),_=s(5),d=s(4),j=(s(15),s(0)),b=function(e){Object(_.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsx)("span",{className:"logo",children:"uMark.it \u2014 uAdds"}),Object(j.jsxs)("div",{className:"data-range-wrapper",children:[Object(j.jsx)("span",{className:"data-range",children:"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0434\u0430\u0442 "}),Object(j.jsxs)("span",{className:"data",children:["2.03.2021 \u2014 3.03.2021",Object(j.jsx)("svg",{className:"data__img",width:"13",height:"7",viewBox:"0 0 13 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M6.5 7L12.9952 0.25H0.00480938L6.5 7Z",fill:"white"})})]})]})]})}}]),s}(a.Component),m=s(7),o=(s(17),function(e){Object(_.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={activeItem:"item_sources"},a}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.setState({menuItems:document.querySelectorAll(".menu__item")},(function(){e.toggleMenuItem(e.state.activeItem);var t,s=Object(m.a)(e.state.menuItems);try{var a=function(){var s=t.value;s.addEventListener("click",(function(){e.toggleMenuItem(s.getAttribute("data-id"))}))};for(s.s();!(t=s.n()).done;)a()}catch(c){s.e(c)}finally{s.f()}}))}},{key:"toggleMenuItem",value:function(e){var t,s=Object(m.a)(this.state.menuItems);try{for(s.s();!(t=s.n()).done;){var a=t.value;a.classList.remove("item_active"),a.getAttribute("data-id")==e&&(this.setState({activeItem:e}),a.classList.add("item_active"))}}catch(c){s.e(c)}finally{s.f()}}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"menu-wrapper",children:Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsx)("span",{"data-id":"item_dealings",className:"menu__item",children:"\u0421\u0434\u0435\u043b\u043a\u0438"}),Object(j.jsx)("span",{"data-id":"item_sources",className:"menu__item",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"}),Object(j.jsx)("span",{"data-id":"item_companies",className:"menu__item",children:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),Object(j.jsx)("span",{"data-id":"item_groups",className:"menu__item",children:"\u0413\u0440\u0443\u043f\u043f\u044b"}),Object(j.jsx)("span",{"data-id":"item_keywords",className:"menu__item",children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430"}),Object(j.jsx)("span",{"data-id":"item_ads",className:"menu__item",children:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f "})]})})}}]),s}(a.Component)),h=(s(18),s.p+"static/media/download.50308752.svg"),p=s.p+"static/media/rect.74b4077e.svg",O=function(e){Object(_.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h4",{className:"title header__title",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"}),Object(j.jsxs)("div",{className:"header__btn-wrapper",children:[Object(j.jsxs)("button",{className:"btn btn_download",children:[Object(j.jsx)("div",{className:"btn-columns__img-wrapper",children:Object(j.jsx)("img",{className:"btn__img",src:h})}),Object(j.jsx)("span",{className:"btn_text color_grey",children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"})]}),Object(j.jsxs)("button",{className:"btn btn_columns",children:[Object(j.jsxs)("div",{className:"btn-columns__img-wrapper",children:[Object(j.jsx)("img",{className:"btn__img",src:p}),Object(j.jsx)("img",{className:"btn__img",src:p}),Object(j.jsx)("img",{className:"btn__img",src:p})]}),Object(j.jsx)("span",{className:"btn_text color_grey",children:"\u0421\u0442\u043e\u043b\u0431\u0446\u044b"})]})]})]})}}]),s}(a.Component),x=(s(19),s.p+"static/media/arrowDown.1e6b48d4.svg"),g=s.p+"static/media/lines-horiz.3e300706.svg",u=s.p+"static/media/lines-vert.bf9e2219.svg",N=s.p+"static/media/lines-x.db2bc477.svg",v=s.p+"static/media/magnifier.9e985bde.svg",w=s.p+"static/media/gear.b21a0ffe.svg",f=function(e){Object(_.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("header",{className:"dealings-header",children:[Object(j.jsx)("div",{className:"dealings-header__item funnel-name ",children:Object(j.jsxs)("span",{className:"funnel-name__title text_no-br",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0432\u043e\u0440\u043e\u043d\u043a\u0438",Object(j.jsx)("img",{className:"funnel-name__img",src:x})]})}),Object(j.jsxs)("div",{className:"dealings-header__item btn-wrapper filter",children:[Object(j.jsx)("button",{className:"btn btn_colums",children:Object(j.jsx)("img",{src:g})}),Object(j.jsx)("button",{className:"btn btn_lines",children:Object(j.jsx)("img",{src:u})}),Object(j.jsx)("button",{className:"btn btn_hz",children:Object(j.jsx)("img",{src:N})})]}),Object(j.jsx)("div",{className:"sep sep_1"}),Object(j.jsxs)("div",{className:"dealings-header__item search-wrapper",children:[Object(j.jsx)("img",{className:"search-wrapper__img",src:v}),Object(j.jsx)("input",{className:"search-wrapper__input color_light-grey",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0438 \u0444\u0438\u043b\u044c\u0442\u0440"})]}),Object(j.jsxs)("div",{className:"dealings-header__item dealings",children:[Object(j.jsx)("span",{className:"dealings__count color_light-grey text_no-br",children:"23 \u0441\u0434\u0435\u043b\u043a\u0438:\u2002"}),Object(j.jsx)("span",{className:"dealings__price text_no-br",children:" 19290 \u0440."})]}),Object(j.jsx)("div",{className:"sep sep_2"}),Object(j.jsx)("div",{className:"dealings-header__item btn-wrapper new-deal-wrapper",children:Object(j.jsx)("button",{className:"dealings-header__item btn btn_new-deal",children:"+ \u041d\u043e\u0432\u0430\u044f \u0441\u0434\u0435\u043b\u043a\u0430"})}),Object(j.jsx)("div",{className:"dealings-header__item settings-wrapper",children:Object(j.jsx)("button",{className:"dealings-header__item btn btn_settings",children:Object(j.jsx)("img",{src:w})})})]})}}]),s}(a.Component),y=(s(20),s.p+"static/media/avatar.cea1ff2e.svg"),k=s.p+"static/media/telegram_logo.a85e748b.svg",C=(s.p,function(e){Object(_.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"post dealings__item",children:[Object(j.jsx)("img",{className:"post__user-avatar",src:y}),Object(j.jsx)("span",{className:"post__social-network-title color_light-grey",children:"Telegram channel"}),Object(j.jsx)("span",{className:"post__current-data",children:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432 13:20"}),Object(j.jsx)("span",{className:"post__user-name color_blue",children:"Telegram Nickname"}),Object(j.jsxs)("div",{className:"post__comment",children:[Object(j.jsx)("img",{className:"post__user-avatar post__user-avatar_minify",src:y}),Object(j.jsx)("span",{className:"post__comment-text",children:"\u041c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 \u043d\u0430..."})]}),Object(j.jsx)("a",{className:"post__share post__share_telegram",href:"https://web.telegram.org/#/im",children:Object(j.jsx)("img",{className:"post__img img_telegram",src:k})})]})}}]),s}(a.Component)),I=(s(21),function(e){Object(_.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("section",{className:"dealings",children:[Object(j.jsxs)("div",{className:"dealings__article dealings__article_unparsed",children:[Object(j.jsx)("h4",{className:"dealings__title",children:"\u041d\u0415\u0420\u0410\u0417\u041e\u0411\u0420\u0410\u041d\u041d\u041e\u0415"}),Object(j.jsx)("span",{className:"dealings__desc",children:"13 \u0437\u0430\u044f\u0432\u043e\u043a"}),Object(j.jsx)(C,{}),Object(j.jsx)(C,{})]}),Object(j.jsxs)("div",{className:"dealings__article dealings__article_wip",children:[Object(j.jsx)("h4",{className:"dealings__title",children:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"}),Object(j.jsx)("span",{className:"dealings__desc",children:"10 \u0437\u0430\u044f\u0432\u043e\u043a"}),Object(j.jsx)(C,{})]}),Object(j.jsxs)("div",{className:"dealings__article dealings__article_assembly",children:[Object(j.jsx)("h4",{className:"dealings__title",children:"\u0421\u0411\u041e\u0420\u041a\u0410 \u0417\u0410\u041a\u0410\u0417\u0410"}),Object(j.jsx)("span",{className:"dealings__desc",children:"1 \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(j.jsx)(C,{})]}),Object(j.jsxs)("div",{className:"dealings__article dealings__article_realized",children:[Object(j.jsx)("h4",{className:"dealings__title",children:"\u0423\u0421\u041f\u0415\u0428\u041d\u041e \u0420\u0415\u0410\u041b\u0418\u0417\u041e\u0412\u0410\u041d\u041e"}),Object(j.jsx)("span",{className:"dealings__desc",children:"1 \u0437\u0430\u044f\u0432\u043a\u0430"}),Object(j.jsx)(C,{})]})]})}}]),s}(a.Component)),B=(s(22),s.p+"static/media/arrow.75ac89e1.svg"),L=function(e){Object(_.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(l.a)(this,s),t.call(this,e)}return Object(r.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("section",{className:"table",children:[Object(j.jsx)("div",{"data-id":"sources",className:"table__article table__item sources border-top_grey",children:Object(j.jsxs)("div",{className:"content-container",children:[Object(j.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(j.jsx)("circle",{cx:"9.5",cy:"9.65918",r:"9.5",fill:"#C4C4C4"})}),Object(j.jsxs)("h4",{className:"table__title",children:["\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438",Object(j.jsx)("img",{className:"table__img img_arrow",src:B})]})]})}),Object(j.jsx)("div",{"data-id":"clicks",className:"table__article table__item clicks border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u041a\u043b\u0438\u043a\u0438"})}),Object(j.jsx)("div",{"data-id":"shows",className:"table__article table__item shows border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u041f\u043e\u043a\u0430\u0437\u044b"})}),Object(j.jsx)("div",{"data-id":"conversion-price",className:"table__article table__item conversion-price border-top_grey",children:Object(j.jsxs)("span",{className:"table__p",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",Object(j.jsx)("br",{})," \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"]})}),Object(j.jsx)("div",{"data-id":"price",className:"table__article table__item price border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(j.jsx)("div",{"data-id":"conversion",className:"table__article table__item conversion border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"})}),Object(j.jsx)("div",{"data-id":"sales",className:"table__article table__item sales border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"})}),Object(j.jsx)("div",{className:"table__item service-title yandex border-top_grey",children:Object(j.jsxs)("div",{className:"content-container",children:[Object(j.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(j.jsx)("circle",{cx:"9.5",cy:"9.57959",r:"9.5",fill:"#00B355"})}),Object(j.jsx)("span",{className:"table__p color_blue",children:"Yandex"}),Object(j.jsx)("span",{className:"table__desc color_grey",children:"Yandex letai-266319-enc0"})]})}),Object(j.jsx)("div",{className:"table__item clicks-count border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"852"})}),Object(j.jsx)("div",{className:"table__item shows-count border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"8520"})}),Object(j.jsx)("div",{className:"table__item conversion-price-count border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"1025 \u20bd"})}),Object(j.jsx)("div",{className:"table__item price-count border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"102500"})}),Object(j.jsx)("div",{className:"table__item conversion-count border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"100"})}),Object(j.jsx)("div",{className:"table__item sales-count border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"10"})}),Object(j.jsx)("div",{"data-id":"sources_twin",className:"table__article table__item table__item_twin sources_twin sources_twin_1 border-top_grey",children:Object(j.jsxs)("div",{className:"content-container",children:[Object(j.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(j.jsx)("circle",{cx:"9.5",cy:"9.65918",r:"9.5",fill:"#C4C4C4"})}),Object(j.jsx)("h4",{className:"table__title",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438"})]})}),Object(j.jsx)("div",{"data-id":"clicks_twin",className:"table__article table__item table__item_twin clicks_twin clicks_twin_1 border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u041a\u043b\u0438\u043a\u0438"})}),Object(j.jsx)("div",{"data-id":"shows_twin",className:"table__article table__item table__item_twin shows_twin shows_twin_1 border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u041f\u043e\u043a\u0430\u0437\u044b"})}),Object(j.jsx)("div",{"data-id":"conversion-price_twin",className:"table__article table__item table__item_twin conversion-price_twin  conversion-price_twin_1 border-top_grey",children:Object(j.jsxs)("span",{className:"table__p",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",Object(j.jsx)("br",{})," \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"]})}),Object(j.jsx)("div",{"data-id":"price_twin",className:"table__article table__item table__item_twin price_twin price_twin_1 border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"})}),Object(j.jsx)("div",{"data-id":"conversion_twin",className:"table__article table__item table__item_twin conversion_twin conversion_twin_1 border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0438"})}),Object(j.jsx)("div",{"data-id":"sales_twin",className:"table__article table__item table__item_twin sales_twin_1 border-top_grey",children:Object(j.jsx)("span",{className:"table__p",children:"\u041f\u0440\u043e\u0434\u0430\u0436\u0438"})}),Object(j.jsx)("div",{className:"table__item service-title google-ads",children:Object(j.jsxs)("div",{className:"content-container",children:[Object(j.jsx)("svg",{className:"table__circle",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:Object(j.jsx)("circle",{cx:"9.5",cy:"9.57959",r:"9.5",fill:"#C72323"})}),Object(j.jsx)("span",{className:"table__p color_blue",children:"Google Ads"}),Object(j.jsx)("span",{className:"table__desc color_grey",children:"146-362-7099"})]})}),Object(j.jsx)("div",{className:"table__item clicks-count",children:Object(j.jsx)("span",{className:"table__p",children:"900"})}),Object(j.jsx)("div",{className:"table__item shows-count",children:Object(j.jsx)("span",{className:"table__p",children:"18000"})}),Object(j.jsx)("div",{className:"table__item conversion-price-count",children:Object(j.jsx)("span",{className:"table__p",children:"931 \u20bd"})}),Object(j.jsx)("div",{className:"table__item price-count",children:Object(j.jsx)("span",{className:"table__p",children:"186200"})}),Object(j.jsx)("div",{className:"table__item conversion-count",children:Object(j.jsx)("span",{className:"table__p",children:"200"})}),Object(j.jsx)("div",{className:"table__item sales-count",children:Object(j.jsx)("span",{className:"table__p",children:"40"})})]})}}]),s}(a.Component);var M=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("main",{className:"content-wrapper",children:[Object(j.jsx)(o,{}),Object(j.jsxs)("div",{className:"options-wrapper",children:[Object(j.jsx)(O,{}),Object(j.jsx)(f,{}),Object(j.jsx)(I,{}),Object(j.jsx)(L,{})]})]})]})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),A()}],[[23,1,2]]]);
//# sourceMappingURL=main.092b567e.chunk.js.map