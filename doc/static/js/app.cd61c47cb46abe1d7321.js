webpackJsonp([0],[,,,function(t,e,i){t.exports=i.p+"static/img/avatar.a86f92c.jpg"},function(t,e,i){function n(t){i(54)}var a=i(0)(i(21),i(83),n,null,null);t.exports=a.exports},,,,,,,,function(t,e){!function(t,e){function i(){var e=s.getBoundingClientRect().width;e/c>540&&(e=540*c);var i=e/10;s.style.fontSize=i+"px",u.rem=t.rem=i}var n,a=t.document,s=a.documentElement,o=a.querySelector('meta[name="viewport"]'),r=a.querySelector('meta[name="flexible"]'),c=0,l=0,u=e.flexible||(e.flexible={});if(o){console.warn("将根据已有的meta标签来设置缩放比例");var d=o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(l=parseFloat(d[1]),c=parseInt(1/l))}else if(r){var p=r.getAttribute("content");if(p){var m=p.match(/initial\-dpr=([\d\.]+)/),v=p.match(/maximum\-dpr=([\d\.]+)/);m&&(c=parseFloat(m[1]),l=parseFloat((1/c).toFixed(2))),v&&(c=parseFloat(v[1]),l=parseFloat((1/c).toFixed(2)))}}if(!c&&!l){var h=(t.navigator.appVersion.match(/android/gi),t.navigator.appVersion.match(/iphone/gi)),f=t.devicePixelRatio;c=h?f>=3&&(!c||c>=3)?3:f>=2&&(!c||c>=2)?2:1:1,l=1/c}if(s.setAttribute("data-dpr",c),!o)if(o=a.createElement("meta"),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+l+", maximum-scale="+l+", minimum-scale="+l+", user-scalable=no"),s.firstElementChild)s.firstElementChild.appendChild(o);else{var _=a.createElement("div");_.appendChild(o),a.write(_.innerHTML)}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(i,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(i,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*c+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*c+"px"},!1),i(),u.dpr=t.dpr=c,u.refreshRem=i,u.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},u.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},function(t,e){!function(){var t="@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}",e=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet)e.styleSheet.disabled||(e.styleSheet.cssText=t);else try{e.innerHTML=t}catch(i){e.innerText=t}}()},function(t,e,i){"use strict";var n=i(6),a=i(91),s=i(65),o=i.n(s),r=i(69),c=i.n(r),l=i(67),u=i.n(l),d=i(70),p=i.n(d);n.a.use(a.a),a.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)},e.a=new a.a({routes:[{path:"/",name:"Hello",component:o.a},{path:"/mine",name:"mine",component:c.a},{path:"/experience",name:"experience",component:u.a},{path:"/music",name:"music",component:p.a}]})},function(t,e){},function(t,e,i){function n(t){i(47)}var a=i(0)(i(19),i(76),n,null,null);t.exports=a.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=i(11)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var a=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(a):a()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{transitionName:"slide-left"}},mounted:function(){},methods:{},watch:{$route:function(t,e){var i=this.$router.isBack;console.log(i),this.transitionName=i?"slide-right":"slide-left",this.$router.isBack=!i,console.log(this.transitionName)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(68),a=i.n(n),s=i(72),o=i.n(s);e.default={name:"hello",data:function(){return{msg:"Thanks for coming ❤",isActive:""}},components:{AppHeader:a.a,sideBar:o.a},methods:{change:function(t){this.isActive=t}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{data:""}},props:["titleFontColor","titleValue"],mounted:function(){this.$nextTick(function(){this.getScroll(this.titleFontColor)})},methods:{goback:function(){this.$router.goBack()},getScroll:function(t){var e=document.getElementsByClassName("child-header")[0],i=(document.getElementsByClassName("back")[0],e.getAttribute("class"));window.onscroll=function(){var n=document.documentElement.scrollTop||document.body.scrollTop;console.log(t),n>20?(e.style.webkitBackdropFilter="blur(90px)",e.style.BackdropFilter="blur(90px)",e.style.background="rgba(255,255,255,.7)",e.style.borderBottomWidth="1px",e.style.borderBottomColor="#ccc",e.style.borderBottomStyle="solid",e.className=i+t):(e.style.BackdropFilter="blur(0px)",e.style.webkitBackdropFilter="blur(0px)",e.style.background="rgba(255,255,255,0)",e.style.borderBottom="none",e.className=i)}},changeTitle:function(){}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{transitionName:"slide-top",active:null,postData:{editTemplateShow:!1,value:""}}},props:["mottoValue"],methods:{getActive:function(){this.transitionName="slide-top",this.postData.value=this.mottoValue},postEdit:function(){this.transitionName="slide-down",this.$emit("postEditValue",this.postData)},postEditTemplateShow:function(){this.transitionName="slide-down",this.$emit("getEditTemplateShowVal",this.postData)}},components:{}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(34),a=i.n(n),s=i(4),o=i.n(s),r=i(75),c=i.n(r),l=i(73),u=i.n(l),d=i(74),p=i.n(d);e.default={name:"hello",data:function(){return a()({msg:"Welcome!",active:0,titleFontColor:"black",titleValue:"Experience",tabList:[{content:"Skill",icon:""},{content:"Experience",icon:""},{content:"Projects",icon:""}],currentView:"Skill"},"titleFontColor","black")},components:{childHeader:o.a,Skill:c.a,Experience:u.a,Projects:p.a},mounted:function(){},methods:{toggleTabs:function(t,e){this.currentView=t,this.active=e}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive,this.$emit("toggle",this.isActive)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(4),a=i.n(n),s=i(66),o=i.n(s);e.default={name:"hello",data:function(){return{msg:"Welcome!",isActive:"",titleFontColor:"white",titleValue:"Mine",editTemplateShow:!1,ifShow:!0,detail:{name:"1iekkas❤",sex:"男",job:"web Front-end",qq:"764295062",birthday:"22岁",constellation:"白羊座",education:"广东省佛山市高明区第四中学",live:"广东-佛山-禅城",call:"1562xx95345",motto:"leave this pleace with me ? ",wechat:"liekkasN1ce"},hobbies:[{title:"game",picUrl:"http://i2.bvimg.com/605992/ff8f380e7269ebc0.jpg",content:"i like e-sports!"},{title:"music",picUrl:"http://i2.bvimg.com/605992/e24576d5c8881332.jpg",content:"i like electronic-music too"},{title:"code",picUrl:"http://i4.bvimg.com/605992/0c9d829aa9a0d272.jpg",content:"i like code too"}]}},components:{childHeader:a.a,editMotto:o.a},mounted:function(){},methods:{editMotto:function(){this.nativeMottoShow=!this.nativeMottoShow,this.editedMottoShow=!this.editedMottoShow,console.log(this.nativeMottoShow),console.log(this.editedMottoShow)},showEditTemplate:function(){var t=document.getElementById("edit-template-container");this.editTemplateShow=!this.editTemplateShow,this.editTemplateShow?(t.className="show",this.$refs.edit.getActive()):t.className="hide"},blur:function(){this.nativeMottoShow=!0,this.editedMottoShow=!1,event.currentTarget.blur()},cblur:function(){this.nativeMottoShow=!0,this.editedMottoShow=!1,console.log(this.nativeMottoShow),console.log(this.editedMottoShow)},getEditTemplateShowVal:function(t){this.editTemplateShow=t.editTemplateShow},postEditValue:function(t){this.editTemplateShow=t.editTemplateShow;var e=t.value;if(e==this.detail.motto)return!1;this.detail.motto=""==e?"Motto null...":e}},watch:{$route:function(t,e){var i=this.$router.isBack;console.log(i)}},directives:{focus:function(t,e){e&&t.focus()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(4),a=i.n(n),s=i(71),o=i.n(s);e.default={name:"hello",data:function(){return{titleFontColor:"white",titleValue:"Music",transitionName:"slide-left",activeIndex:"",playlist:[{coverImgUrl:""}],privileges:[{name:"leave this pleace",author:"LIONE - Leave This Place"},{name:"Unbreakable(Original Mix)",author:"Hyper Potions/Danyka Nadeau"},{name:"小半",author:"陈粒"},{name:"All I See",author:"Draper/Laura Brehm - All I See"}]}},components:{childHeader:a.a,play:o.a},mounted:function(){},methods:{login:function(){var t=this;this.$ajax.get("api/login/cellphone?phone=15627795345&password=1iekkas").then(function(t){console.log("登录成功")}),this.$ajax.get("api/playlist/detail?id=571828159").then(function(e){t.playlist=e.data.playlist,t.privileges=e.data.privileges})},ShowAudio:function(t){var e=document.getElementsByClassName("audio-container")[0];this.activeIndex=t,e.style.left=0}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(62),a=i.n(n);e.default={data:function(){return{transitionName:"slide-left",isPlay:"",activeImg:{background:"url(https://s1.ax1x.com/2017/09/28/lof6H.jpg) no-repeat",backgroundSize:"200%",backgroundPosition:"center"},privileges:[{name:"leave this pleace",author:"LIONE - Leave This Place",url:a.a,img:"https://s1.ax1x.com/2017/09/28/lof6H.jpg"},{name:"Unbreakable(Original Mix)",author:"Hyper Potions/Danyka Nadeau",url:"",img:"http://p1.music.126.net/fjjCx4Kr__TJ84INHNf2Ig==/1415071472294134.jpg?param=130y130"},{name:"小半",author:"陈粒",url:"",img:"http://p1.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg?param=130y130"},{name:"All I See",author:"Draper/Laura Brehm - All I See",url:"",img:"http://p1.music.126.net/YqLRQK5yx283Te-f5EuVlg==/1366692966298773.jpg?param=130y130"}]}},props:["activeIndex"],mounted:function(){},methods:{hideAudio:function(){document.getElementsByClassName("audio-container")[0].style.left="10rem"},playAudio:function(){document.querySelector("#audio").paused?this.play():this.pause()},getEndTime:function(){var t=document.querySelector("#audio"),e=parseInt(t.duration/60),i=parseInt(t.duration%60);return e=e>=10?e:"0"+e,i=i>=10?i:"0"+i,e+":"+i},changeTime:function(){document.getElementById("endTime").innerText=this.getEndTime()},activeTime:function(){var t=document.getElementById("starTime"),e=document.getElementsByClassName("activeLine")[0],i=document.querySelector("#audio"),n=parseInt(i.currentTime/60),a=parseInt(i.currentTime%60);n=n>=10?n:"0"+n,a=a>=10?a:"0"+a,t.innerText=n+":"+a,e.style.width=100*(i.currentTime/i.duration).toFixed(2)+"%"},play:function(){document.querySelector("#audio").play()},pause:function(){document.querySelector("#audio").pause()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome!",list:[{time:"2016.8 - 2017.10",company:"科拓网络",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2015.8 - 2016.6",company:"精鹰传媒",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2013.6 - 2015.6",company:"精鹰传媒",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"},{time:"2016.8 - 2017.10",company:"精鹰传媒",content:"Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it"}],titleFontColor:"black"}},mounted:function(){},methods:{}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{Projects:[{name:"ProjectName",imgUrl:"http://storage1.imgchr.com/V7Dl6.jpg",content:"ProjectDetailContent : 1 line "},{name:"ProjectName",imgUrl:"http://storage1.imgchr.com/V7Dl6.jpg",content:"ProjectDetailContent : 1 line "},{name:"ProjectName",imgUrl:"http://storage1.imgchr.com/V7Dl6.jpg",content:"ProjectDetailContent : 1 line "}]}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5);i.n(n);i(46),e.default={data:function(){var t=this;return{skill:[{img:"http://storage1.imgchr.com/V52RK.jpg",content:"HTML",Proficiency:[{num:"90%",width:"3.6rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5saR.jpg",content:"CSS",Proficiency:[{num:"90%",width:"3.6rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5fMD.jpg",content:"JavaScript",Proficiency:[{num:"80%",width:"3.2rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5hse.png",content:"Vue.js",Proficiency:[{num:"75%",width:"3rem"}],detail:"well,this is detail"},{img:"https://s1.ax1x.com/2017/09/21/MQi79.png",content:"WeChat",Proficiency:[{num:"70%",width:"2.8rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5yI1.jpg",content:"Git",Proficiency:[{num:"40%",width:"1.6rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5cPx.jpg",content:"Github",Proficiency:[{num:"40%",width:"1.6rem"}],detail:"well,this is detail"},{img:"http://storage1.imgchr.com/V5RxO.jpg",content:"PhotoShop",Proficiency:[{num:"40%",width:"1.6rem"}],detail:"well,this is detail"}],banner:[{bannerUrl:"http://storage1.imgchr.com/V5gG6.jpg"},{bannerUrl:"http://storage1.imgchr.com/V5BqJ.jpg"},{bannerUrl:"http://storage1.imgchr.com/V5wMF.jpg"}],swiperOption:{notNextTick:!0,pagination:".swiper-pagination",slidesPerView:"auto",centeredSlides:!0,paginationClickable:!0,spaceBetween:30,autoplayDisableOnInteraction:!1,autoplay:5e3,loop:!0,onSlideChangeEnd:function(e){t.page=e.realIndex+1,t.index=e.realIndex}}}},components:{swiper:n.swiper,swiperSlide:n.swiperSlide},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){this.swiper.slideTo(0,0,!1)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),a=i(16),s=i.n(a),o=i(14),r=i(5),c=i.n(r),l=i(13),u=(i.n(l),i(12)),d=(i.n(u),i(15));i.n(d);n.a.use(c.a),n.a.config.productionTip=!1;new n.a;new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){t.exports=i.p+"static/img/e-bg.5adbbcc.jpg"},function(t,e,i){t.exports=i.p+"static/media/leave.84f5c2a.mp3"},function(t,e,i){var n=i(0)(i(17),i(86),null,null,null);t.exports=n.exports},function(t,e,i){var n=i(0)(i(18),i(90),null,null,null);t.exports=n.exports},function(t,e,i){function n(t){i(59),i(60)}var a=i(0)(i(20),i(89),n,"data-v-cdc71b3e",null);t.exports=a.exports},function(t,e,i){function n(t){i(48)}var a=i(0)(i(22),i(77),n,"data-v-1be5d6d2",null);t.exports=a.exports},function(t,e,i){function n(t){i(51)}var a=i(0)(i(23),i(80),n,"data-v-2143056a",null);t.exports=a.exports},function(t,e,i){function n(t){i(56)}var a=i(0)(i(24),i(85),n,"data-v-2f636d24",null);t.exports=a.exports},function(t,e,i){function n(t){i(57)}var a=i(0)(i(25),i(87),n,"data-v-5ade5674",null);t.exports=a.exports},function(t,e,i){function n(t){i(50)}var a=i(0)(i(26),i(79),n,"data-v-1cd17358",null);t.exports=a.exports},function(t,e,i){function n(t){i(49)}var a=i(0)(i(27),i(78),n,"data-v-1c1f64d5",null);t.exports=a.exports},function(t,e,i){function n(t){i(53)}var a=i(0)(i(28),i(82),n,"data-v-2843de2b",null);t.exports=a.exports},function(t,e,i){function n(t){i(52)}var a=i(0)(i(29),i(81),n,"data-v-24cea30e",null);t.exports=a.exports},function(t,e,i){function n(t){i(58)}var a=i(0)(i(30),i(88),n,"data-v-5e0aed1e",null);t.exports=a.exports},function(t,e,i){function n(t){i(55)}var a=i(0)(i(31),i(84),n,"data-v-2eaf38dd",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:t.transitionName}},[i("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transitionName}},[i("div",{staticClass:"edit-container",on:{touchmove:function(t){t.preventDefault()},mousewheel:function(t){t.preventDefault()}}},[i("div",{staticClass:"edit-header"},[i("span",{on:{click:t.postEditTemplateShow}},[t._v("取消")]),t._v(" "),i("span",[t._v("修改签名")]),t._v(" "),i("span",{on:{click:t.postEdit}},[t._v("完成")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.postData.value,expression:"postData.value"}],attrs:{type:"text",maxlength:"30"},domProps:{value:t.postData.value},on:{input:function(e){e.target.composing||(t.postData.value=e.target.value)}}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"audio"},[t._m(0),t._v(" "),i("header",[i("span",{on:{click:t.hideAudio}},[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("span",[t._v(t._s(t.privileges[t.activeIndex].name))]),t._v(" "),i("span")]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"control"},[i("div",{staticClass:"showTime"},[i("p",{attrs:{id:"starTime"}},[t._v("0:00")]),t._v(" "),t._m(2),t._v(" "),i("p",{attrs:{id:"endTime"}}),t._v(" "),i("audio",{attrs:{src:t.privileges[t.activeIndex].url,id:"audio"},on:{canplay:t.changeTime,timeupdate:t.activeTime}},[i("source",{attrs:{src:"song.ogg",type:"audio/ogg"}}),t._v(" "),i("source",{attrs:{src:"song.m4a",type:"audio/mpeg"}}),t._v(" "),i("source",{attrs:{src:"song.mp3",type:"audio/mpeg"}})])]),t._v(" "),i("div",{staticClass:"btnControl"},[i("span",{staticClass:"iconfont",on:{click:t.playAudio}},[t._v("")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-container"},[i("img",{staticClass:"activeImg",attrs:{src:"https://s1.ax1x.com/2017/09/28/lof6H.jpg"}}),t._v(" "),i("div",{staticClass:"shadow"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover-container"},[i("div",{staticClass:"cover"},[i("img",{attrs:{src:"https://s1.ax1x.com/2017/09/28/l7EPf.png",width:"100%"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{attrs:{id:"line"}},[i("span",{staticClass:"activeLine"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music"},[i("div",{staticClass:"wapper"},[i("child-header",{attrs:{titleFontColor:t.titleFontColor,titleValue:t.titleValue}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"music-container"},[t._m(1),t._v(" "),i("div",{staticClass:"music-list"},t._l(t.privileges,function(e,n){return i("div",{staticClass:"item",on:{click:function(e){t.ShowAudio(n)}}},[i("div",[t._v(t._s(n+1))]),t._v(" "),i("div",{staticClass:"detail"},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.author))])])])}))])],1),t._v(" "),i("div",{staticClass:"audio-container",on:{touchmove:function(t){t.preventDefault()}}},[i("play",{attrs:{activeIndex:t.activeIndex}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg-container"},[i("div",{staticClass:"fixed-bg"},[i("div",{staticClass:"backdrop"}),t._v(" "),i("img",{attrs:{src:"http://p1.music.126.net/239_sRSLJSXBFUFKPAQ0KQ==/109951162856928419.jpg",width:"150%"}}),t._v(" "),i("div",{staticClass:"list-content"},[i("div",[i("img",{attrs:{src:"http://p1.music.126.net/239_sRSLJSXBFUFKPAQ0KQ==/109951162856928419.jpg",width:"100%"}})]),t._v(" "),i("div",{staticClass:"author"},[i("p",[t._v("如若梦似彩虹")]),t._v(" "),i("p",{staticClass:"info"},[i("img",{attrs:{src:"http://p1.music.126.net/_xavr5yW7UojLp7djgHzrA==/109951163028214313.jpg"}}),i("span",[t._v("鱼塘大亨1iekkas")])])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play-all"},[i("p",[i("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),i("p",[t._v("播放全部")])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"experience"},[i("div",{staticClass:"wapper"},[i("child-header",{attrs:{titleFontColor:t.titleFontColor,titleValue:t.titleValue}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"tabBar-container"},t._l(t.tabList,function(e,n){return i("div",{staticClass:"tab-bar",class:[t.active==n?"active":""]},[i("span",{on:{click:function(i){t.toggleTabs(e.content,n)}}},[t._v(t._s(e.content))])])})),t._v(" "),i(t.currentView,{tag:"skill"})],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-container"},[n("div",{staticClass:"fixed-bg"},[n("img",{attrs:{src:i(61),width:"100%"}})])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),t._l(t.list,function(e){return i("div",{staticClass:"list"},[i("div",{staticClass:"content"},[i("p",{staticClass:"time"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(e.time))]),t._v(" "),i("p",{staticClass:"company"},[t._v(t._s(e.company))]),t._v(" "),i("p",{staticClass:"text"},[t._v(t._s(e.content))])])])})],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("img",{attrs:{src:i(3)}}),t._v(" "),n("span",[t._v("1iekkas")])])}]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sideBar"},[i("div",{staticClass:"shadow"},[t._m(0),t._v(" "),i("p",{staticClass:"state"},[t._v("I need some time,please")]),t._v(" "),i("nav",[i("ul",[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/mine"}},[t._v("mine")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/experience"}},[t._v("experience")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/music"}},[t._v("music")])],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[n("img",{attrs:{src:i(3)}}),t._v(" "),n("span",[t._v("1iekkas❤")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"child-header",class:t.titleFontColor,on:{mousewheel:t.getScroll}},[i("div",{staticClass:"back",on:{click:t.goback}},[t._m(0),t._v(" "),i("span",[t._v(t._s(t.titleValue))])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-btn"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("span",[t._v("返回")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skill-container"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.banner,function(t){return i("swiper-slide",[i("img",{attrs:{src:t.bannerUrl,width:"100%"}})])}),t._v(" "),i("div",{staticClass:"swiper-pagination",slot:"pagination"})],2),t._v(" "),i("p",{staticClass:"title",attrs:{align:"left"}},[t._v("My Skill")]),t._v(" "),t._l(t.skill,function(e,n){return i("div",{staticClass:"list"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.img}})]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v(t._s(e.content))]),t._v(" "),i("p",[t._v(t._s(e.detail))]),t._v(" "),t._l(e.Proficiency,function(e){return i("p",[i("span",[t._v("Proficiency:")]),i("span",{staticClass:"line",style:{width:e.width}}),i("span",[t._v(t._s(e.num))])])})],2)])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[0==t.isActive?i("span",{staticClass:"iconfont",on:{click:t.toggle}},[t._v("")]):i("span",{staticClass:"iconfont",on:{click:t.toggle}},[t._v("")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mine"},[i("div",{staticClass:"wapper",class:{activeLeft:t.isActive}},[i("child-header",{attrs:{titleFontColor:t.titleFontColor,titleValue:t.titleValue}}),t._v(" "),i("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"container-content"},[i("div",{staticClass:"container-detail"},[i("h2",[t._v(t._s(t.detail.name))]),t._v(" "),i("div",{staticClass:"motto",attrs:{align:"center"}},[i("span",[t._v(t._s(t.detail.motto))]),t._v(" "),i("i",{staticClass:"iconfont editMotto",on:{click:t.showEditTemplate}},[t._v("")])]),t._v(" "),i("p",{staticClass:"info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.qq))]),t._v(" "),i("p",{staticClass:"s info"},[i("i",{staticClass:"iconfont"},[t._v("")]),i("span",[t._v(t._s(t.detail.sex))]),i("span",[t._v(t._s(t.detail.birthday))]),i("span",[t._v(t._s(t.detail.constellation))]),i("span",[t._v(t._s(t.detail.live))])]),t._v(" "),i("p",{staticClass:"line info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.job))]),t._v(" "),i("p",{staticClass:"top-line info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.education))]),t._v(" "),i("p",{staticClass:"info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.call))]),t._v(" "),i("p",{staticClass:"info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(t._s(t.detail.wechat))])]),t._v(" "),i("div",{staticClass:"container-hobby"},[i("h2",{staticClass:"hobby-title",attrs:{align:"center"}},[t._v("Hobbies")]),t._v(" "),t._l(t.hobbies,function(e){return i("div",{staticClass:"list"},[i("img",{attrs:{src:e.picUrl}}),t._v(" "),i("div",[i("p",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.content))])])])})],2),t._v(" "),t._m(2)])])],1),t._v(" "),i("div",{attrs:{id:"edit-template-container"}},[i("edit-motto",{directives:[{name:"show",rawName:"v-show",value:t.editTemplateShow,expression:"editTemplateShow"}],ref:"edit",attrs:{mottoValue:t.detail.motto},on:{postEditValue:t.postEditValue,getEditTemplateShowVal:t.getEditTemplateShowVal}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-header"},[i("img",{attrs:{src:"https://s1.ax1x.com/2017/09/11/nAkfs.jpg",width:"100%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-author"},[n("img",{attrs:{src:i(3)}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-tag"},[i("h2",{staticClass:"my-tag-title",attrs:{align:"center"}},[t._v("Tag")]),t._v(" "),i("div",{staticClass:"tag-wapper"},[i("p",{staticClass:"tag"},[t._v("还没有标签")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},t._l(t.Projects,function(e){return i("div",{staticClass:"projects"},[i("img",{attrs:{src:e.imgUrl,width:"100%"}}),t._v(" "),i("div",{staticClass:"content-container"},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.content))])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("div",{staticClass:"wapper",class:{activeLeft:t.isActive}},[i("app-header",{on:{toggle:t.change}}),t._v(" "),i("div",{staticClass:"container"},[i("img",{attrs:{src:"https://raw.githubusercontent.com/1iekkas/cv/gh-pages/doc/static/img/avatar.a86f92c.jpg"}}),t._v(" "),i("h1",[t._v(t._s(t.msg))])])],1),t._v(" "),i("side-bar",{class:{active:t.isActive}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}}],[32]);
//# sourceMappingURL=app.cd61c47cb46abe1d7321.js.map