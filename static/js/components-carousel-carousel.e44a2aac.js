(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Carousel/Carousel.less":function(e,t,n){},"./src/components/Carousel/Carousel.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./src/utils/cn.ts"),l=(n("./src/components/Carousel/Carousel.less"),n("./src/components/Carousel/CarouselArrow.less"),n("./src/icons/System/16/Arrow_forward_16.svg"));function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=Object(i.a)("mfui-carousel-arrow"),f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.onClick;return r.createElement("div",{className:m("",{},t),onClick:n},r.createElement("div",{className:m("arrow-icon")},r.createElement(l.default,null)))}}])&&u(n.prototype,a),o&&u(n,o),t}(),v=f;try{f.displayName="CarouselArrow",f.__docgenInfo={description:"",displayName:"CarouselArrow",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/CarouselArrow.tsx#CarouselArrow"]={docgenInfo:f.__docgenInfo,name:"CarouselArrow",path:"src/components/Carousel/CarouselArrow.tsx#CarouselArrow"})}catch(e){}var h=n("./node_modules/react-slick/lib/index.js"),b=n.n(h),y=n("./node_modules/lodash.throttle/index.js");function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var P=Object(i.a)("mfui-carousel"),S=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),n=!a||"object"!==w(a)&&"function"!==typeof a?k(r):a,Object.defineProperty(k(n),"noPassiveOption",{configurable:!0,enumerable:!0,writable:!0,value:{passive:!1}}),Object.defineProperty(k(n),"getSlider",{configurable:!0,enumerable:!0,writable:!0,value:function(e){n.slider=e}}),Object.defineProperty(k(n),"handleClickNext",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=n.props.onClickNext;e&&e(),n.slider.slickNext()}}),Object.defineProperty(k(n),"handleClickPrev",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=n.props.onClickPrev;e&&e(),n.slider.slickPrev()}}),Object.defineProperty(k(n),"handleChange",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=n.props.children,r=n.state.showSlides,a=e!==t.length-r;n.setState({isPrevActive:!!e,isNextActive:a})}}),Object.defineProperty(k(n),"getResponsiveData",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t,n,r){var a=window.outerWidth,o=e.length,s={};return e.forEach(function(i,l){var c=i.breakpoint,u=i.settings,p=u.slidesToShow,d=u.arrows,m=l+1,f=c>=a,v=!!e[m]&&a>e[m].breakpoint,h=p||n,b=f&&i.settings.hasOwnProperty("arrows")?d:t;(v&&f||f&&m===o)&&(s={hasResponsiveArrows:b&&h<r,currentSlides:h})}),s}}),Object.defineProperty(k(n),"handleCarouselParams",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=n.props,t=e.children,r=e.options,a=r.slidesToShow,o=r.responsive,s=r.arrows,i=void 0===s||s,l=t.length,c=n.getResponsiveData(o,i,a,l),u=c.hasResponsiveArrows,p=c.currentSlides,d=void 0!==u?u:i&&a<l,m=p||a;n.setState({isArrows:d,showSlides:m})}}),Object.defineProperty(k(n),"throttledHandleCarouselParams",{configurable:!0,enumerable:!0,writable:!0,value:function(){return y(n.handleCarouselParams,20)}}),n.state={isPrevActive:!1,isNextActive:!0,isArrows:!0,showSlides:0},n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.options.initialSlide,n=e.children,r=this.state.showSlides,a=t!==n.length-1-r;this.handleCarouselParams(),window.addEventListener("touchstart",this.touchStart),window.addEventListener("touchmove",this.preventTouch,this.noPassiveOption),window.addEventListener("resize",this.throttledHandleCarouselParams),this.setState({isPrevActive:!!t,isNextActive:a})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("touchstart",this.touchStart),window.removeEventListener("touchmove",this.preventTouch,this.noPassiveOption),window.removeEventListener("resize",this.throttledHandleCarouselParams)}},{key:"touchStart",value:function(e){this.firstClientX=e.touches[0].clientX}},{key:"preventTouch",value:function(e){if(this.clientX=e.touches[0].clientX-this.firstClientX,Math.abs(this.clientX)>5)return e.preventDefault(),e.returnValue=!1,!1}},{key:"renderArrows",value:function(){var e=this.state,t=e.isPrevActive,n=e.isNextActive;return r.createElement("div",{className:P("arrows")},r.createElement(v,{className:P("arrow",{"arrow-prev":!0,disabled:!t}),onClick:this.handleClickPrev}),r.createElement(v,{className:P("arrow",{"arrow-next":!0,disabled:!n}),onClick:this.handleClickNext}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.options,a=e.children,o=this.state.isArrows,s=(n.arrows,g(n,["arrows"]));return r.createElement("div",{className:P("",{},t)},o&&this.renderArrows(),r.createElement(b.a,Object.assign({},s,{arrows:!1,ref:this.getSlider,afterChange:this.handleChange}),a))}}])&&E(n.prototype,a),o&&E(n,o),t}();Object.defineProperty(S,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{responsive:!0}});var T=S;try{S.displayName="Carousel",S.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ICarouselOptions"}},onClickNext:{defaultValue:null,description:"",name:"onClickNext",required:!1,type:{name:"() => void"}},onClickPrev:{defaultValue:null,description:"",name:"onClickPrev",required:!1,type:{name:"() => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:S.__docgenInfo,name:"Carousel",path:"src/components/Carousel/Carousel.tsx#Carousel"})}catch(e){}var O=n("./src/components/ProductTileRest/ProductTileRest.tsx"),_=n("./src/icons/Service-logos/24/MF-TV.svg");function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"Wrapper",function(){return x}),n.d(t,"carouselParams",function(){return j}),n.d(t,"tariff",function(){return A}),n.d(t,"tariff2",function(){return I});var x=function(e){var t=e.children;return a.a.createElement("div",null,t)},j={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:1e3,settings:{arrows:!1,dots:!0,slidesToShow:3}},{breakpoint:900,settings:{arrows:!0,dots:!0}},{breakpoint:860,settings:{arrows:!1,dots:!0}}]},A={buyButtonText:"\u041a\u0443\u043f\u0438\u0442\u044c",connectButtonText:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0442\u0430\u0440\u0438\u0444",title:"\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0441\u044f! \u0421\u043c\u043e\u0442\u0440\u0438",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",link:"/tariffs/vklyuchaysya/smotri.html",buyLink:"/zakaz/?tariff=look",payment:{value:1e3,unitExtra:"\u0437\u0430\xa030\xa0\u0434\u043d\u0435\u0439",unitValue:"\u20bd",unit:"\u20bd \u0437\u0430\xa030\xa0\u0434\u043d\u0435\u0439",discount:0},packs:[{value:1500,unit:"\u043c\u0438\u043d\u0443\u0442"},{value:100,unit:"\u0441\u043c\u0441"},{value:3,unit:"\u0413\u0411"}],firstParams:{title:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",caption:"",items:[{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"\u041c\u0435\u0433\u0430\u0424\u043e\u043d \u0422\u0412",caption:"\u0411\u0435\u0437\u043b\u0438\u043c\u0438\u0442\u043d\u044b\u0439 \u0442\u0440\u0430\u0444\u0438\u043a \u0438\xa0\u043f\u0430\u043a\u0435\u0442\u044b \u043a\u0438\u043d\u043e, \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0438\xa0\u0422\u0412-\u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u043d\u0430\xa0\u043b\u044e\u0431\u043e\u0439 \u0432\u043a\u0443\u0441",svgIcon:a.a.createElement(_.default,null)}]},secondParams:[{title:"\u041e\u043f\u0446\u0438\u044f",value:300,unit:"\u043c\u0438\u043d\u0443\u0442"}],cashback:{title:"\u041a\u044d\u0448\u0431\u044d\u043a",value:20,unit:"%"},info:{billingIds:["sdf","sdf"],sms:"05007897",smsText:"\u0414\u0410",smsSite:null,ivr:"05007897",ussd:'<span class="c-number-call"><b class="asterisk">*</b><b class="num">789</b><span class="c-number-call"><b class="asterisk">*</b><b class="num">7</b><b class="dash">#</b><b class="pipe"></b></span>',lkLink:"https://lk.megafon.ru/tariffs/",title:"\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0441\u044f! \u0421\u043c\u043e\u0442\u0440\u0438",id:1598}},I={buyButtonText:"\u041a\u0443\u043f\u0438\u0442\u044c",connectButtonText:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0442\u0430\u0440\u0438\u0444",title:"\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0441\u044f! \u0421\u043c\u043e\u0442\u0440\u0438",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",link:"/tariffs/vklyuchaysya/smotri.html",buyLink:"/zakaz/?tariff=look",payment:{value:1e3,unitExtra:"\u0437\u0430\xa030\xa0\u0434\u043d\u0435\u0439",unitValue:"\u20bd",unit:"\u20bd \u0437\u0430\xa030\xa0\u0434\u043d\u0435\u0439",discount:0},packs:[{value:1500,unit:"\u043c\u0438\u043d\u0443\u0442"}],firstParams:{title:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",caption:"",items:[{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)},{title:"VIP-\u0442\u0430\u0440\u0438\u0444",caption:"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u043e\u0435",svgIcon:a.a.createElement(_.default,null)}]},secondParams:[{title:"\u041e\u043f\u0446\u0438\u044f",value:300,unit:"\u043c\u0438\u043d\u0443\u0442"}],cashback:{title:"\u041a\u044d\u0448\u0431\u044d\u043a",value:20,unit:"%"},info:{billingIds:["sdf","sdf"],sms:"05007897",smsText:"\u0414\u0410",smsSite:null,ivr:"05007897",ussd:'<span class="c-number-call"><b class="asterisk">*</b><b class="num">789</b><span class="c-number-call"><b class="asterisk">*</b><b class="num">7</b><b class="dash">#</b><b class="pipe"></b></span>',lkLink:"https://lk.megafon.ru/tariffs/",title:"\u0412\u043a\u043b\u044e\u0447\u0430\u0439\u0441\u044f! \u0421\u043c\u043e\u0442\u0440\u0438",id:1598}};t.default=function(e){var t=e.components;N(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"carousel"}},a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#carousel"}},a.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Carousel"),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"properties-carousel"}},a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#properties-carousel"}},a.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Properties Carousel"),a.a.createElement(s.e,{of:T}),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},a.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),a.a.createElement(s.d,{__position:1,__code:"<Carousel options={carouselParams} onClickNext={() => {}}>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff} />\n  </div>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff2} />\n  </div>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff} />\n  </div>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff} />\n  </div>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff} />\n  </div>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff} />\n  </div>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff} />\n  </div>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff} />\n  </div>\n  <div style={{ width: 260 }}>\n    <ProductTileRest {...tariff} />\n  </div>\n</Carousel>",wrapper:x},a.a.createElement(T,{options:j,onClickNext:function(){}},a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,A)),a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,I)),a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,A)),a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,A)),a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,A)),a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,A)),a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,A)),a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,A)),a.a.createElement("div",{style:{width:260}},a.a.createElement(O.a,A)))),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"included-props"}},a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#included-props"}},a.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Included props"),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"const carouselParams = {\n    dots: false,\n    infinite: false,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [\n        {\n            breakpoint: 1024,\n            settings: {\n                slidesToShow: 3,\n            }\n        },\n        {\n            breakpoint: 720,\n            settings: {\n            slidesToShow: 2,\n                dots: true,\n            }\n        },\n        {\n            breakpoint: 479,\n            settings: {\n                slidesToShow: 1,\n                dots: true,\n            }\n        },\n    ]\n};\n")))}},"./src/components/Carousel/CarouselArrow.less":function(e,t,n){}}]);