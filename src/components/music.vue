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
      <!--background end-->
      <div class="music-container">
        <div class="play-all">
          <p><i class="iconfont">&#xe60d;</i></p>
          <p>播放全部</p>
        </div>
        <div class="music-list">
          <div  v-for="(item,index) in privileges" class="item"
           @click="ShowAudio(index,privileges.length)">
            <div>{{index + 1}}</div>
            <div class="detail">
              <p>{{item.name}}</p>
              <p>{{item.author}}</p>
            </div>
          </div>
        </div>
      </div>
      <!--music list end-->
    </div>
      <div class="audio-container" @touchmove.prevent>
        <keep-alive>
          <play :activeIndex='activeIndex' :listLength="listLength"></play>
        </keep-alive>
      </div>
    <!--audio end-->
  </div>
</template>
<style scoped>
.music{
  position: relative;
  height: 100%;
  overflow-x: hidden;
}
.music .wapper {
  height: 100% !important ;
}
.audio-container{
  position: fixed;
  top: 0;
  left: 10rem;
  height: 100%;
  background: white;
  min-width: 10rem;
  z-index: 999;
  transition: all .35s;
}
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
.music-container{
  padding: 0 .25rem;
}
.play-all,.item{
  display: flex;
  align-items: center;
  justify-content: center;
}
.play-all p,.item div{
  text-align: left;
  font-size: .55rem;
  padding: .35rem 0;
}
.item div{
  padding: .25rem 0
}
.play-all p i{
  font-size: .55rem;
  vertical-align: baseline;
}
.play-all p:first-child,.item div:first-child{
  width: 1.35rem;
  padding-right: 0.1rem;
  text-align: center;
}
.item div:first-child{
  color: #797979
}
.detail p:nth-child(2){
  font-size: .38rem;
  color: #8c8c8c
}
.play-all p:nth-child(2),.item div:nth-child(2){
  width: 9rem;
  border-bottom: 1px solid #ccc;
  color: black
}

</style>
<script>
import childHeader from '@/components/childHeader'
import play from '@/components/play'
export default {
  name: 'hello',
  data () {
    return {
      titleFontColor:'white',
      titleValue:'Music',
      transitionName:'slide-left',
      activeIndex:'',
      listLength:'',
      playlist:[{
        coverImgUrl:'',
      }],
      privileges:[{
        name:'leave this pleace',
        author:'LIONE - Leave This Place',
      },
      {
        name:'Unbreakable(Original Mix)',
        author:'Hyper Potions/Danyka Nadeau',
      },
      {
        name:'小半',
        author:'陈粒',
      },
      {
        name:'All I See',
        author:'Draper/Laura Brehm - All I See',
      }
    ]
    }
  },
  components:{
    childHeader,
    play
  },
  mounted(){
    /*this.login();*/

  },
  methods: {
    //
    login:function(){
      var _this = this
      this.$ajax.get('api/login/cellphone?phone=15627795345&password=1iekkas').then(function(res){
        console.log('登录成功');
      });
      this.$ajax.get('api/playlist/detail?id=571828159').then(function(res){
        _this.playlist = res.data.playlist;
        _this.privileges = res.data.privileges;
      });
    },

    //
    ShowAudio:function(index,length){
      var elem = document.getElementsByClassName('audio-container')[0];
      this.activeIndex = index ;
      this.listLength = length ;
      elem.style.left = 0;
    },

    //


  }
}
</script>
