<template>
    <div class="audio">
      <header>
        <span @click="hideAudio" class="iconfont">&#xe697;</span>
        <span>ttttttttttt</span>
      </header>
      <!--container-->


      <!--audio control-->
      <div class="control">
        <div class="showTime">
          <span id="starTime">0:00</span>
    			<span id="line"></span>
          <span id="endTime"></span>
          <audio src="leave.mp3" id="audio">
            <source src="song.ogg" type="audio/ogg">
            <source src="song.m4a" type="audio/mpeg">
            <source src="song.mp3" type="audio/mpeg">
          </audio>
        </div>
        <div class="btnControl">

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
    methods:{
      hideAudio:function(){
        var elem = document.getElementsByClassName('audio-container')[0];
        elem.style.left = 10 + 'rem';
      }

    }
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
}
</style>
