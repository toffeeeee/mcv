<template>
  <div id="app">
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName:'slide-left'
    }
  },
  mounted () {
    this.touchMove ();
  },
  methods:{
    touchMove () {
      alert(1)
      var startX = 0
      var startY = 0
        function touchSatrtFunc(evt) {
                  try{
                      //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等

                      var touch = evt.touches[0]; //获取第一个触点
                      var x = Number(touch.pageX); //页面触点X坐标
                      var y = Number(touch.pageY); //页面触点Y坐标
                      //记录触点初始位置
                      startX = x;
                      startY = y;

                      var text = 'TouchStart事件触发：（' + x + ', ' + y + '）';
                      alert(text);
                  }
                  catch (e) {
                      alert('touchSatrtFunc：' + e.message);
                  }
        }

        function touchMoveFunc(evt) {
                  try
                  {
                      //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
                      var touch = evt.touches[0]; //获取第一个触点
                      var x = Number(touch.pageX); //页面触点X坐标
                      var y = Number(touch.pageY); //页面触点Y坐标

                      var text = 'TouchMove事件触发：（' + x + ', ' + y + '）';

                      //判断滑动方向
                      if (x - startX != 0) {
                          text += '<br/>左右滑动';
                      }
                      if (y - startY != 0) {
                          text += '<br/>上下滑动';
                      }

                      alert(text)
                  }
                  catch (e) {
                      alert('touchMoveFunc：' + e.message);
                  }
              }
              function touchEndFunc(evt) {
                      try {
                          //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等

                          var text = 'TouchEnd事件触发';
                        alert(text)
                      }
                      catch (e) {
                          alert('touchEndFunc：' + e.message);
                      }
                }

      function bindEvent() {
                body.addEventListener('touchstart', touchSatrtFunc, false);
                body.addEventListener('touchmove', touchMoveFunc, false);
                body.addEventListener('touchend', touchEndFunc, false);
            }



    }
  },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack
      console.log(isBack)
      if(isBack) {
　　　　　　　 this.transitionName = 'slide-right'
　　　　　　} else {
　　　　　　   this.transitionName = 'slide-left'
　　　　　}
      //浏览器前进后退按钮会触发事件，因此设定！isBack ？？
      this.$router.isBack = !isBack;
      console.log(this.transitionName)
    },
  }
}
</script>

<style>


/*.fade-enter-active, .fade-leave-active{
  transition: all 0.35s ease
}
.fade-enter{
  transform:translateX(-10rem);
}
.fade-leave-active{
  transform:translateX(10rem);
}*/
.slide-left-enter-active, .slide-left-leave-active,.slide-right-enter-active, .slide-right-leave-active{
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter,
 .slide-right-leave-active {
     opacity: 1;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 1;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
