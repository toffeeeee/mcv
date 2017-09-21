<template>
  <div class="music">
    <div class="wapper">
      <child-header :titleFontColor="titleFontColor" :titleValue="titleValue" ></child-header>
      <div class="bg-container">
        <div class="fixed-bg">
          <div class="backdrop"></div>
          <img src="http://p1.music.126.net/239_sRSLJSXBFUFKPAQ0KQ==/109951162856928419.jpg" width="150%" />
          <div class="list-content">
            <div>
              <img src="http://p1.music.126.net/239_sRSLJSXBFUFKPAQ0KQ==/109951162856928419.jpg" width="100%" />
            </div>
            <div class="author">
              <p>如若梦似彩虹</p>
              <p class="info"><img src="http://p1.music.126.net/_xavr5yW7UojLp7djgHzrA==/109951163028214313.jpg" /><span>鱼塘大亨1iekkas</span></p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-container{
  max-width: 10rem;
  max-height: 8.5rem;
  overflow: hidden;
  position: relative;
}
.fixed-bg{
    -webkit-filter:blur(0px);
    height: 7rem;
    overflow: hidden;
    position: relative;
}
.backdrop{
  position: absolute;
  top: 0;
  left: 0;
  width: 12rem;
  height: 7.5rem;
  background:rgba(0, 0, 0, 0.25);
  z-index: 9;
  -webkit-backdrop-filter:blur(130px);
  backdrop-filter:blur(130px);
}
.list-content{
  position: absolute;
  top: 2.5rem;
  left: 0;
  height: 3rem;
  width: 9.4rem;
  z-index: 10;
  padding: 0 .3rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-content div:first-child{
  width: 5.5rem;
}
.list-content .author{
  width: 8rem;
  margin-left: .5rem;
  text-align: left;
}
.author p:first-child{
  font-size: .55rem;
  position: absolute;
  top: 0;

}
.author p:nth-child(2){
  font-size: .4rem
}
.info{
  display: flex;
  align-items: center;
  margin-top: .55rem
}
.info span{
  opacity: .75
}
.info img{
  width: 1rem;
  border-radius: 50%;
  margin-right: .25rem
}
</style>
<script>
import childHeader from '@/components/childHeader'
export default {
  name: 'hello',
  data () {
    return {
      titleFontColor:'white',
      titleValue:'Music',
      playlist:[{
        coverImgUrl:'',
      }],
      privileges:''
    }
  },
  components:{
    childHeader
  },
  mounted(){
    this.login();
  },
  methods: {
    login:function(){
      var _this = this
      this.$ajax.get('api/login/cellphone?phone=15627795345&password=1iekkas').then(function(res){
        console.log('登录成功');
      });
      this.$ajax.get('api/playlist/detail?id=571828159').then(function(res){
        _this.playlist = res.data.playlist;
        _this.privileges = res.data.privileges;
      });
    }
  }
}
</script>
