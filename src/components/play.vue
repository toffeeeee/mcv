<template>
    <div class="audio">
      <header>
        <span @click="hideAudio" class="iconfont">&#xe697;</span>
        <span>{{name}}</span>
      </header>
      <!--container-->


      <!--audio control-->
      <div class="control">
        <div class="showTime">
          <p id="starTime">0:00</p>
    			<p id="line"><span class="activeLine"></span></p>
          <p id="endTime"></p>
          <audio src="/static/media/leave.84f5c2a.mp3"  @canplay="changeTime" @timeupdate="activeTime" id="audio">
            <source src="song.ogg" type="audio/ogg">
            <source src="song.m4a" type="audio/mpeg">
            <source src="song.mp3" type="audio/mpeg">
          </audio>
        </div>
        <div class="btnControl">
          <button type="button" style="padding:.35rem .5rem;font-size:.5rem" @click="playAudio">播放</button>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        transitionName:'slide-left'
      }
    },
    props:['url','name','author'],
    mounted(){

    },
    methods:{
      hideAudio:function(){
        var elem = document.getElementsByClassName('audio-container')[0];
        elem.style.left = 10 + 'rem';
      },
      //
      playAudio:function () {
        var audio =document.querySelector('#audio');
        if(audio.paused) {
            this.play();
        } else {
            this.pause();
        }
      },
      getEndTime:function () {
        var audio =document.querySelector('#audio');
        var minute = parseInt(audio.duration / 60);
        var second = parseInt(audio.duration % 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;
      },
      changeTime:function(){
          var endTime = document.getElementById('endTime');
          endTime.innerText = this.getEndTime();
      },
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
        audio.play();
      },

      //暂停播放
      pause:function () {
        var audio =document.querySelector('#audio');
        audio.pause();
      }
    },

  }
</script>
<style scoped="">
.audio header{
  width: 9.8rem;
  padding: .35rem .1rem;
  text-align: left;
  font-size: .45rem ;
  /*color: white;*/
  border-bottom:1px solid #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.audio header span:first-child{
  width:1.5rem;
}
.audio header span:nth-child(2){
  width: 8rem;
}
.audio header .iconfont{
  font-size: .45rem !important
}
.showTime{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .35rem 0
}
#line{
  width: 7rem;
  height: .08rem;
  background: rgba(211,211,211,.5);
  border-radius: 1px;
}
.activeLine{
  height: .08rem;
  background:#f14b4b;
  display: block;
  border-radius: 1px;
}
#starTime,#endTime{
  width: 1.5rem;
}
</style>
