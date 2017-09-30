<template>
    <div class="audio">
      <div class="bg-container">
        <img class="activeImg" v-bind:src="privileges[nowPlayIndex].img" />
        <div class="shadow"></div>
        <div class="cover-container">
          <div class="cover" v-bind:class="{rotate:isPlay}">
            <img v-bind:src="privileges[nowPlayIndex].img"/>
          </div>
        </div>
      </div>
      <header>
        <span @click="hideAudio"><i class="iconfont">&#xe697;</i></span>
        <span>{{privileges[nowPlayIndex].name}}</span>
        <span></span>
      </header>
      <!--container-->

      <!--audio control-->
      <div class="control">
        <div class="control-list">
          <div class="iconfont">&#xe603;</div>
          <div class="iconfont">&#xe610;</div>
          <div class="iconfont">&#xe653;</div>
        </div>
        <div class="showTime">
          <p id="starTime">0:00</p>
    			<p id="line"><span class="activeLine"></span></p>
          <p id="endTime">0:00</p>
          <audio v-bind:src="privileges[nowPlayIndex].url"  @canplay="changeTime" @ended="nextPlay" @timeupdate="activeTime" id="audio">
            <source src="song.ogg" type="audio/ogg">
            <source src="song.m4a" type="audio/mpeg">
            <source src="song.mp3" type="audio/mpeg">
          </audio>
        </div>
        <div class="btnControl">
          <span class="iconfont switch" @click="prevPlay">&#xe602;</span>
          <span v-if="isPlay == true " @click="playAudio" class="iconfont playBtn">&#xe608;</span>
          <span v-else @click="playAudio" class="iconfont playBtn">&#xe60d;</span>
          <span class="iconfont switch" @click="nextPlay">&#xe602;</span>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        transitionName:'slide-left',
        isPlay:false,
        nowPlayIndex:'',
        activeImg:{
          background:'url(https://s1.ax1x.com/2017/09/28/lof6H.jpg) no-repeat',
          backgroundSize:'200%',
          backgroundPosition:'center'
        },
        privileges:[{
          name:'leave this pleace',
          author:'LIONE - Leave This Place',
          url:'http://comtest.jychina.com:8766/templets/nicc/video/1.mp3',
          img:'https://s1.ax1x.com/2017/09/28/lof6H.jpg'
        },
        {
          name:'Unbreakable(Original Mix)',
          author:'Hyper Potions/Danyka Nadeau',
          url:'http://comtest.jychina.com:8766/templets/nicc/video/2.mp3',
          img:'http://p1.music.126.net/fjjCx4Kr__TJ84INHNf2Ig==/1415071472294134.jpg?param=130y130'
        },
        {
          name:'小半',
          author:'陈粒',
          url:'http://comtest.jychina.com:8766/templets/nicc/video/3.mp3',
          img:'http://p1.music.126.net/HQxTggMCB7AHUXN-ZFEtmA==/1371091013186741.jpg?param=130y130'
        },
        {
          name:'All I See',
          author:'Draper/Laura Brehm - All I See',
          url:'http://comtest.jychina.com:8766/templets/nicc/video/4.mp3',
          img:'http://p1.music.126.net/YqLRQK5yx283Te-f5EuVlg==/1366692966298773.jpg?param=130y130'
        }
      ]
      }
    },
    props:['activeIndex','listLength'],
    mounted(){

    },
    methods:{
      hideAudio:function(){
        var elem = document.getElementsByClassName('audio-container')[0];
        elem.style.left = 10 + 'rem';
      },

      //暂停/播放按钮
      playAudio:function () {
        var audio =document.querySelector('#audio');
        if(audio.paused) {
            this.play();
        } else {
            this.pause();
        }
      },

      //歌曲长度
      getEndTime:function () {
        var audio =document.querySelector('#audio');
        var minute = parseInt(audio.duration / 60);
        var second = parseInt(audio.duration % 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;
      },

      //切换歌曲
      changeTime:function(){
          const line = document.getElementsByClassName('activeLine')[0];
          const endTime = document.getElementById('endTime');
          endTime.innerText = this.getEndTime();
          line.style.width = 0 ;
          this.play();
      },

      //播放下一首
      nextPlay:function () {
        if(this.nowPlayIndex + 1 == this.listLength){
          this.nowPlayIndex = 0 ;
        }else{
          this.nowPlayIndex = this.nowPlayIndex + 1 ;
        }
        this.play();
      },

      //播放上一首
      prevPlay:function(){
        this.nowPlayIndex = this.nowPlayIndex - 1 < 0 ? this.listLength - 1 : this.nowPlayIndex - 1 ;
        this.play();
      },

      //播放进度
      activeTime:function(){
        var starTime = document.getElementById('starTime');
        var line = document.getElementsByClassName('activeLine')[0];
        var audio =document.querySelector('#audio');
        var minute = parseInt(audio.currentTime / 60);
        var second = parseInt(audio.currentTime % 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        starTime.innerText = minute + ":" + second;
        line.style.width = (audio.currentTime / audio.duration).toFixed(2) * 100+'%';
      },

      //开始播放
      play:function () {
        var audio =document.querySelector('#audio');
        this.isPlay = true ;
        audio.play();
      },

      //暂停播放
      pause:function () {
        var audio =document.querySelector('#audio');
        this.isPlay = false ;
        audio.pause();
      }
    },

    watch:{
        activeIndex:function (val) {
          this.nowPlayIndex = val ;
        }
    }

  }
</script>
<style scoped="">
.audio{
  height: 100%;
}
.shadow{
  height: 100%;
  width: 10rem;
  background: rgba(0,0,0,.35);
  backdrop-filter: blur(130px);
}
.control{
  position: absolute;
  bottom:0;
  left: 0;
  padding: .5rem 0
}
.bg-container{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 10rem;
  z-index: -1
}
.btnControl,.control-list{
  display: flex;
  justify-content: center;
  align-items: center;
}
.control-list div{
  width: 3.3333rem;
  margin-bottom: .5rem;
}
.control-list .iconfont{
  color: white;
}
.btnControl .iconfont{
  color: white;
  font-size: 1.25rem;
}
.btnControl span:first-child{
  transform: rotate(180deg);
}
.btnControl .switch{
  width: 2rem;
  text-align: center;
}
.btnControl .playBtn{
  text-align: center;
  width: 3rem
}
.audio header{
  width: 9.8rem;
  padding: .5rem .1rem;
  text-align: left;
  font-size: .45rem ;
  /*color: white;*/
  border-bottom:1px solid #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.audio header span{
  color: white;
  width:1.5rem;
}
.audio header span i{
  padding-left: .3rem
}
.activeImg{
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.audio header span:nth-child(2){
  width: 8rem;
  text-align: center;
}
.audio header .iconfont{
  font-size: .45rem !important
}
.cover-container{
  position: absolute;
  /* color: black; */
  top: 0;
  left: 0;
  height: 100%;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cover{
  width: 6.5rem;
  height: 6.5rem;
  background: url(https://s1.ax1x.com/2017/09/28/l7EPf.png) no-repeat;
  background-size:  100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2.5rem;
  border-radius: 50%;
  box-shadow: 0 0 0 0.3rem rgba(255,255,255,.08);
}
.cover img{
  width: 4.22rem;
  border-radius: 50%;
}
.rotate{
  -webkit-animation:circle 25s infinite linear;
}
@-webkit-keyframes circle{
0%{ transform:rotate(0deg); }
100%{ transform:rotate(360deg); }
}
.showTime{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .35rem 0;
  color: white
}
#line{
  width: 7rem;
  height: .05rem;
  background: rgba(211,211,211,.5);
  border-radius: 1px;
}
.activeLine{
  height: .05rem;
  background:#d33a31;
  display: block;
  border-radius: 1px;
  width: 0;
}
#starTime,#endTime{
  width: 1.5rem;
}
</style>
