<template>
  <div class="child-header" @mousewheel="getScroll" v-bind:class="titleFontColor">
    <div class="back" @click="goback">
      <div class="back-btn">
      <span class="iconfont">&#xe697;</span>
      <span>返回</span>
      </div>
      <span>{{titleValue}}</span>
    </div>
  </div>
</template>
<style>
.back{
  position: relative;
  font-size: .45rem
}
.back span{
  font-weight: bold;
}
.back-btn{
  position: absolute;
  top: 0;
  left: 0.15rem;
}
</style>
<script>
export default{
  data () {
    return {
      data:'',
    }
  },
  props:['titleFontColor','titleValue'],
  mounted() {

    this.$nextTick(function () {
      this.getScroll(this.titleFontColor)
      //console.log(this.titleValue)
    })
  },
  methods: {
      goback () {
       this.$router.goBack()
     },
     getScroll(className) {
         var ele = document.getElementsByClassName('child-header')[0]
         var eleChild = document.getElementsByClassName('back')[0]
         var oldClass = ele.getAttribute('class');
         window.onscroll = function(){
           var t = document.documentElement.scrollTop || document.body.scrollTop;
           console.log(className);
           if(t>20){
             ele.style.webkitBackdropFilter = "blur(90px)";
             ele.style.BackdropFilter = "blur(90px)";
             ele.style.background ='rgba(255,255,255,.7)'
             ele.style.borderBottomWidth = "1px"
             ele.style.borderBottomColor = "#ccc"
             ele.style.borderBottomStyle = "solid"
             ele.className = oldClass + className
           }else{
              ele.style.BackdropFilter = "blur(0px)";
               ele.style.webkitBackdropFilter = "blur(0px)";
               ele.style.background ='rgba(255,255,255,0)'
             ele.style.borderBottom = "none"
             ele.className = oldClass
           }
         }
     },
     changeTitle () {

     }
  },

}

</script>
