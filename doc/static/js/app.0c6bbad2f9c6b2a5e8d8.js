webpackJsonp([0],[,,,function(t,e,i){t.exports=i.p+"static/img/avatar.a86f92c.jpg"},,,,,,,,function(t,e,i){function n(t){i(54)}var a=i(0)(i(24),i(80),n,null,null);t.exports=a.exports},function(t,e,i){function n(t){i(56)}var a=i(0)(i(28),i(82),n,"data-v-2f636d24",null);t.exports=a.exports},function(t,e,i){function n(t){i(53)}var a=i(0)(i(30),i(79),n,"data-v-2843de2b",null);t.exports=a.exports},function(t,e){!function(t,e){function i(){var e=s.getBoundingClientRect().width;e/c>540&&(e=540*c);var i=e/10;s.style.fontSize=i+"px",d.rem=t.rem=i}var n,a=t.document,s=a.documentElement,o=a.querySelector('meta[name="viewport"]'),r=a.querySelector('meta[name="flexible"]'),c=0,l=0,d=e.flexible||(e.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var u=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(l=parseFloat(u[1]),c=parseInt(1/l))}else if(r){var p=r.getAttribute("content");if(p){var f=p.match(/initial\-dpr=([\d\.]+)/),h=p.match(/maximum\-dpr=([\d\.]+)/);f&&(c=parseFloat(f[1]),l=parseFloat((1/c).toFixed(2))),h&&(c=parseFloat(h[1]),l=parseFloat((1/c).toFixed(2)))}}if(!c&&!l){var m=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),v=t.devicePixelRatio;c=m?v>=3&&(!c||c>=3)?3:v>=2&&(!c||c>=2)?2:1:1,l=1/c}if(s.setAttribute("data-dpr",c),!o)if(o=a.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),s.firstElementChild)s.firstElementChild.appendChild(o);else{var _=a.createElement("div");_.appendChild(o),a.write(_.innerHTML)}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(i,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(i,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*c+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*c+"px"},!1),i(),d.dpr=t.dpr=c,d.refreshRem=i,d.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},d.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(t,e){!function(){var t="@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",e=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet)e.styleSheet.disabled||(e.styleSheet.cssText=t);else try{e.innerHTML=t}catch(i){e.innerText=t}}()},function(t,e,i){"use strict";var n=i(5),a=i(90),s=i(66),o=i.n(s),r=i(71),c=i.n(r),l=i(70),d=i.n(l),u=i(67),p=i.n(u);n.a.use(a.a),a.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)},e.a=new a.a({routes:[{path:"/",name:"Hello",component:o.a},{path:"/mine",name:"mine",component:c.a},{path:"/experience",name:"experience",component:d.a},{path:"/call",name:"call",component:p.a}]})},function(t,e){},function(t,e,i){function n(t){i(49)}var a=i(0)(i(21),i(75),n,null,null);t.exports=a.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=i(10)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{transitionName:"slide-left"}},methods:{},watch:{$route:function(t,e){var i=this.$router.isBack;console.log(i),this.transitionName=i?"slide-right":"slide-left",this.$router.isBack=!i,console.log(this.transitionName)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(12),a=i.n(n),s=i(13),o=i.n(s);e.default={name:"hello",data:function(){return{msg:"Welcome!",isActive:""}},components:{AppHeader:a.a,sideBar:o.a},methods:{change:function(t){this.isActive=t}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(12),a=i.n(n),s=i(13),o=i.n(s);e.default={name:"hello",data:function(){return{msg:"Welcome!",contact:[{name:"QQ",content:"764295062"},{name:"phone",content:"15627795345"},{name:"wechat",content:"1iekkas"}],isActive:""}},components:{AppHeader:a.a,sideBar:o.a},methods:{change:function(t){this.isActive=t,console.log(this.isActive)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{data:""}},props:["titleFontColor","titleValue"],mounted:function(){this.$nextTick(function(){this.getScroll(this.titleFontColor)})},methods:{goback:function(){this.$router.goBack()},getScroll:function(t){var e=document.getElementsByClassName("child-header")[0],i=(document.getElementsByClassName("back")[0],e.getAttribute("class"));window.onscroll=function(){var n=document.documentElement.scrollTop||document.body.scrollTop;console.log(t),n>20?(e.style.webkitBackdropFilter="blur(90px)",e.style.BackdropFilter="blur(90px)",e.style.background="rgba(255,255,255,.7)",e.style.borderBottomWidth="1px",e.style.borderBottomColor="#ccc",e.style.borderBottomStyle="solid",e.className=i+t):(e.style.BackdropFilter="blur(0px)",e.style.webkitBackdropFilter="blur(0px)",e.style.background="rgba(255,255,255,0)",e.style.borderBottom="none",e.className=i)}},changeTitle:function(){}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{editTemplateShow:!1}},methods:{postEditTemplateShow:function(){this.$emit("getEditTemplateShow",this.editTemplateShow)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(68),a=i.n(n);e.default={data:function(){return{transitionName:""}},methods:{getEditTemplateShow:function(t){this.$emit("getEditTemplateShowVal",t)}},components:{editHeader:a.a},directives:{focus:function(t,e){e&&t.focus()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(36),a=i.n(n),s=i(11),o=i.n(s),r=i(74),c=i.n(r),l=i(72),d=i.n(l),u=i(73),p=i.n(u);e.default={name:"hello",data:function(){return a()({msg:"Welcome!",active:0,titleFontColor:"black",titleValue:"Experience",tabList:[{content:"Skill",icon:""},{content:"Experience",icon:""},{content:"Projects",icon:""}],currentView:"Skill"},"titleFontColor","black")},components:{childHeader:o.a,Skill:c.a,Experience:d.a,Projects:p.a},mounted:function(){},methods:{toggleTabs:function(t,e){this.currentView=t,this.active=e}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive,this.$emit("toggle",this.isActive)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(11),a=i.n(n),s=i(69),o=i.n(s);e.default={name:"hello",data:function(){return{msg:"Welcome!",isActive:"",titleFontColor:"white",titleValue:"Mine",nativeMottoShow:!0,editedMottoShow:!1,editTemplateShow:!1,detail:{name:"1iekkas",sex:"男",job:"web Front-end",qq:"764295062",birthday:"22岁",constellation:"白羊座",education:"广东省佛山市高明区第四中学",live:"广东-佛山-禅城",call:"1562xx95345",motto:"why not?",wechat:"liekkasN1ce"},hobbies:[{title:"game",picUrl:"http://i2.bvimg.com/605992/ff8f380e7269ebc0.jpg",content:"i like e-sports!"},{title:"music",picUrl:"http://i2.bvimg.com/605992/e24576d5c8881332.jpg",content:"i like electronic-music too"},{title:"code",picUrl:"http://i4.bvimg.com/605992/0c9d829aa9a0d272.jpg",content:"i like code too"}]}},props:["getEditTemplateShow"],components:{childHeader:a.a,editMotto:o.a},mounted:function(){},methods:{editMotto:function(){this.nativeMottoShow=!this.nativeMottoShow,this.editedMottoShow=!this.editedMottoShow,console.log(this.nativeMottoShow),console.log(this.editedMottoShow)},showEditTemplate:function(){var t=document.getElementById("edit-template-container");this.editTemplateShow=!this.editTemplateShow,this.editTemplateShow?t.className="show":t.className="hide"},blur:function(){this.nativeMottoShow=!0,this.editedMottoShow=!1,event.currentTarget.blur()},cblur:function(){this.nativeMottoShow=!0,this.editedMottoShow=!1,console.log(this.nativeMottoShow),console.log(this.editedMottoShow)},getEditTemplateShowVal:function(t){this.editTemplateShow=t}},watch:{$route:function(t,e){var i=this.$router.isBack;console.log(i)}},directives:{focus:function(t,e){e&&t.focus()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome!",list:[{time:"2016.8 - 2017.10",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2015.8 - 2016.6",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2013.6 - 2015.6",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2016.8 - 2017.10",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"}],titleFontColor:"black"}},mounted:function(){},methods:{}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{Projects:[{name:"ProjectName",imgUrl:"http://storage1.imgchr.com/V7Dl6.jpg",content:"ProjectDetailContent : 1 line "},{name:"ProjectName",imgUrl:"http://storage1.imgchr.com/V7Dl6.jpg",content:"ProjectDetailContent : 1 line "},{name:"ProjectName",imgUrl:"http://storage1.imgchr.com/V7Dl6.jpg",content:"ProjectDetailContent : 1 line "}]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(4);i.n(n);i(48),e.default={data:function(){var t=this;return{skill:[{img:"http://storage1.imgchr.com/V52RK.jpg",content:"HTML",Proficiency:[{num:"90%",width:"3.6rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5saR.jpg",content:"CSS",Proficiency:[{num:"90%",width:"3.6rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5fMD.jpg",content:"JavaScript",Proficiency:[{num:"80%",width:"3.2rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5hse.png",content:"Vue.js",Proficiency:[{num:"75%",width:"3rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5yI1.jpg",content:"Git",Proficiency:[{num:"40%",width:"1.6rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5cPx.jpg",content:"Github",Proficiency:[{num:"40%",width:"1.6rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5RxO.jpg",content:"PhotoShop",Proficiency:[{num:"40%",width:"1.6rem"}],detail:"well,this is detail"}],banner:[{bannerUrl:"http://storage1.imgchr.com/V5gG6.jpg"},{bannerUrl:"http://storage1.imgchr.com/V5BqJ.jpg"},{bannerUrl:"http://storage1.imgchr.com/V5wMF.jpg"}],swiperOption:{notNextTick:!0,pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:30,autoplayDisableOnInteraction:!1,autoplay:5e3,loop:!0,onSlideChangeEnd:function(e){t.page=e.realIndex+1,t.index=e.realIndex}}}},components:{swiper:n.swiper,swiperSlide:n.swiperSlide},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){this.swiper.slideTo(0,0,!1)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),a=i(18),s=i.n(a),o=i(16),r=i(4),c=i.n(r),l=i(15),d=(i.n(l),i(14)),u=(i.n(d),i(17));i.n(u);n.a.use(c.a),n.a.config.productionTip=!1;new n.a;new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){t.exports=i.p+"static/img/e-bg.5adbbcc.jpg"},function(t,e,i){var n=i(0)(i(19),i(83),null,null,null);t.exports=n.exports},function(t,e,i){var n=i(0)(i(20),i(89),null,null,null);t.exports=n.exports},function(t,e,i){function n(t){i(61),i(62)}var a=i(0)(i(22),i(88),n,"data-v-cdc71b3e",null);t.exports=a.exports},function(t,e,i){function n(t){i(60)}var a=i(0)(i(23),i(87),n,"data-v-bc4ca202",null);t.exports=a.exports},function(t,e,i){function n(t){i(59)}var a=i(0)(i(25),i(86),n,"data-v-81a6fad0",null);t.exports=a.exports},function(t,e,i){function n(t){i(50)}var a=i(0)(i(26),i(76),n,"data-v-1be5d6d2",null);t.exports=a.exports},function(t,e,i){function n(t){i(51)}var a=i(0)(i(27),i(77),n,"data-v-2143056a",null);t.exports=a.exports},function(t,e,i){function n(t){i(57)}var a=i(0)(i(29),i(84),n,"data-v-5ade5674",null);t.exports=a.exports},function(t,e,i){function n(t){i(52)}var a=i(0)(i(31),i(78),n,"data-v-24cea30e",null);t.exports=a.exports},function(t,e,i){function n(t){i(58)}var a=i(0)(i(32),i(85),n,"data-v-5e0aed1e",null);t.exports=a.exports},function(t,e,i){function n(t){i(55)}var a=i(0)(i(33),i(81),n,"data-v-2eaf38dd",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:t.transitionName}},[i("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-container",on:{touchmove:function(t){t.preventDefault()},mousewheel:function(t){t.preventDefault()}}},[i("edit-header",{on:{getEditTemplateShow:t.getEditTemplateShow}}),t._v(" "),i("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text",maxlength:"15"}})],1)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"experience"},[i("div",{staticClass:"wapper"},[i("child-header",{attrs:{titleFontColor:t.titleFontColor,titleValue:t.titleValue}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"tabBar-container"},t._l(t.tabList,function(e,n){return i("div",{staticClass:"tab-bar",class:[t.active==n?"active":""]},[i("span",{on:{click:function(i){t.toggleTabs(e.content,n)}}},[t._v(t._s(e.content))])])})),t._v(" "),i(t.currentView,{tag:"skill",attrs:{"keep-alive":""}})],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-container"},[n("div",{staticClass:"fixed-bg"},[n("img",{attrs:{src:i(63),width:"100%"}})])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),t._l(t.list,function(e){return i("div",{staticClass:"list"},[i("div",{staticClass:"content"},[i("p",{staticClass:"time"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(e.time))]),t._v(" "),i("p",{staticClass:"text"},[t._v(t._s(e.content))])])])})],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("img",{attrs:{src:i(3)}}),t._v(" "),n("span",[t._v("1iekkas")])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sideBar"},[i("div",{staticClass:"shadow"},[t._m(0),t._v(" "),i("p",{staticClass:"state"},[t._v("I need some time,please")]),t._v(" "),i("nav",[i("ul",[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/mine"}},[t._v("mine")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/experience"}},[t._v("experience")])],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("img",{attrs:{src:i(3)}}),t._v(" "),n("span",[t._v("1iekkas")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"child-header",class:t.titleFontColor,on:{mousewheel:t.getScroll}},[i("div",{staticClass:"back",on:{click:t.goback}},[t._m(0),t._v(" "),i("span",[t._v(t._s(t.titleValue))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-btn"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("span",[t._v("返回")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill-container"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.banner,function(t){return i("swiper-slide",[i("img",{attrs:{src:t.bannerUrl,width:"100%"}})])}),t._v(" "),i("div",{staticClass:"swiper-pagination",slot:"pagination"})],2),t._v(" "),i("p",{staticClass:"title",attrs:{align:"left"}},[t._v("My Skill")]),t._v(" "),t._l(t.skill,function(e,n){return i("div",{staticClass:"list"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.img}})]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v(t._s(e.content))]),t._v(" "),i("p",[t._v(t._s(e.detail))]),t._v(" "),t._l(e.Proficiency,function(e){return i("p",[i("span",[t._v("Proficiency:")]),i("span",{staticClass:"line",style:{width:e.width}}),i("span",[t._v(t._s(e.num))])])})],2)])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[0==t.isActive?i("span",{staticClass:"iconfont",on:{click:t.toggle}},[t._v("")]):i("span",{staticClass:"iconfont",on:{click:t.toggle}},[t._v("")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mine"},[i("div",{staticClass:"wapper",class:{activeLeft:t.isActive}},[i("child-header",{attrs:{titleFontColor:t.titleFontColor,titleValue:t.titleValue}}),t._v(" "),i("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"container-content"},[i("div",{staticClass:"container-detail"},[i("h2",[t._v(t._s(t.detail.name))]),t._v(" "),i("div",{staticClass:"motto",attrs:{align:"center"}},[i("span",[t._v(t._s(t.detail.motto))]),t._v(" "),i("i",{staticClass:"iconfont editMotto",on:{click:t.showEditTemplate}},[t._v("")])]),t._v(" "),i("p",{staticClass:"info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.qq))]),t._v(" "),i("p",{staticClass:"s info"},[i("i",{staticClass:"iconfont"},[t._v("")]),i("span",[t._v(t._s(t.detail.sex))]),i("span",[t._v(t._s(t.detail.birthday))]),i("span",[t._v(t._s(t.detail.constellation))]),i("span",[t._v(t._s(t.detail.live))])]),t._v(" "),i("p",{staticClass:"line info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.job))]),t._v(" "),i("p",{staticClass:"top-line info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.education))]),t._v(" "),i("p",{staticClass:"info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.call))]),t._v(" "),i("p",{staticClass:"info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.wechat))])]),t._v(" "),i("div",{staticClass:"container-hobby"},[i("h2",{staticClass:"hobby-title",attrs:{align:"center"}},[t._v("兴趣爱好")]),t._v(" "),t._l(t.hobbies,function(e){return i("div",{staticClass:"list"},[i("img",{attrs:{src:e.picUrl}}),t._v(" "),i("div",[i("p",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.content))])])])})],2),t._v(" "),t._m(2)])])],1),t._v(" "),i("div",{attrs:{id:"edit-template-container"}},[i("edit-motto",{directives:[{name:"show",rawName:"v-show",value:t.editTemplateShow,expression:"editTemplateShow"}],on:{getEditTemplateShowVal:t.getEditTemplateShowVal}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-header"},[i("img",{attrs:{src:"http://i2.bvimg.com/605992/c061eb2e3b622cbc.jpg",width:"100%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-author"},[n("img",{attrs:{src:i(3)}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-tag"},[i("h2",{staticClass:"my-tag-title",attrs:{align:"center"}},[t._v("个人标签")]),t._v(" "),i("div",{staticClass:"tag-wapper"},[i("p",{staticClass:"tag"},[t._v("还没有标签")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},t._l(t.Projects,function(e){return i("div",{staticClass:"projects"},[i("img",{attrs:{src:e.imgUrl,width:"100%"}}),t._v(" "),i("div",{staticClass:"content-container"},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.content))])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"edit-header"},[i("span",{on:{click:t.postEditTemplateShow}},[t._v("取消")]),t._v(" "),i("span",[t._v("设置名字")]),t._v(" "),i("span",[t._v("完成")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"call"},[i("div",{staticClass:"wapper",class:{activeLeft:t.isActive}},[i("app-header",{on:{toggle:t.change}}),t._v(" "),i("div",{staticClass:"container"},[i("h1",[t._v("How to contact me?")]),t._v(" "),i("div",{staticClass:"contact-container"},t._l(t.contact,function(e){return i("div",{staticClass:"layout"},[i("div",[t._v(t._s(e.name))]),t._v(" "),i("div",[t._v(t._s(e.content))])])}))])],1),t._v(" "),i("side-bar",{class:{active:t.isActive}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("div",{staticClass:"wapper",class:{activeLeft:t.isActive}},[i("app-header",{on:{toggle:t.change}}),t._v(" "),i("div",{staticClass:"container"},[i("img",{attrs:{src:"https://raw.githubusercontent.com/1iekkas/cv/gh-pages/doc/static/img/avatar.a86f92c.jpg"}}),t._v(" "),i("h1",[t._v(t._s(t.msg))])])],1),t._v(" "),i("side-bar",{class:{active:t.isActive}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}}],[34]);
//# sourceMappingURL=app.0c6bbad2f9c6b2a5e8d8.js.map