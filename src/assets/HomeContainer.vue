<template>
  <div class="home-container">
    <div class="home-nav">
      <ul class="x-title">
        <li v-for="(item, index) in items" v-on:click="tab(index)" :class="{active: activeIndex === index}">{{item.title}}</li>
      </ul>
      <div class="btn-line">
      <span id="line"></span>
      </div>
    </div>
    <div v-if="items[activeIndex].content==='个性推荐'" class="x-content">
      <tab-recommend></tab-recommend>
    </div>
    <div v-else-if="items[activeIndex].content==='歌单'" class="x-content">
      <tab-song-list></tab-song-list>
    </div>
    <div v-else-if="items[activeIndex].content==='主播电台'" class="x-content">
      <tab-radio></tab-radio>
    </div>
    <div v-else="items[activeIndex].content==='排行榜'" class="x-content">
      <tab-rank></tab-rank>
    </div>
  </div>
</template>
<style>
.home-container{
  margin-top: 1.49rem;
  position: relative;
  margin-bottom: 4.5rem;
}
.home-nav{
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, .975);
  z-index: 3
}
.home-container ul{
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #ccc
}
ul.x-title{
  width: 96%;
  padding: 0 2%;
  }
.home-container ul li{
  display: inline-flex;
  justify-content: center;
  width: 25%;
  padding:0.315rem 0;
  align-items: center;
  position: relative;
}
.home-container li.active{
  color:red;
}
.btn-line{
  position: relative;
  width: 96%;
  padding: 0 2%;
}
.x-content{
  padding-top: 1.046rem;
}
#line{
  position: absolute;
  bottom: 0;
  left: 2%;
  border-bottom:0.05rem solid red;
  width: 25%;
  }
</style>
<script>
import tabRecommend from '../components/tab/recommend/Recommend'
import tabSongList from '../components/tab/songlist/SongList'
import tabRadio from '../components/tab/radio/Radio'
import tabRank from '../components/tab/rank/Rank'
export default{
    data(){
       return{
         activeIndex:0,
         items: [
                  {title: '个性推荐', content:'个性推荐'},
                  {title: '歌单', content: '歌单'},
                  {title: '主播电台', content: '主播电台'},
                  {title: '排行榜', content: '排行榜'}
                ]
       }
    },
    components: {
      tabRecommend,
      tabSongList,
      tabRadio,
      tabRank
    },
    methods: {
      tab(index) {
        this.activeIndex = index;
        //console.log(this.activeIndex);
        //console.log(event.currentTarget.offsetLeft);
        var left = event.currentTarget.offsetLeft;
        var line = document.getElementById('line');
        line.style.left = left + 'px' ;
        line.style.transition = '.1s';
      }
    }

}

</script>
