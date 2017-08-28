<template>
  <div class="container">
    <div class="author">
      <img src="../assets/avatar.jpg" />
      <span>1iekkas</span>
    </div>
    <div v-for="item in list" class="list">
      <div class="content">
        <p class="time"><i class="iconfont">&#xe704;</i>{{item.time}}</p>
        <p class="text">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.author{
  text-align:left;
  padding:.35rem .35rem  0 .35rem;
  display: flex;
  align-items: center;
}
.author img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
.author span{
  font-size: .55rem;
  padding-left: .25rem
}
.list{
  position: relative;
  border-left: 2px solid #fff;
  padding: .45rem 0;
  margin-left: .7rem
}
.list::after{
  content: '';
  position: absolute;
  top: .45rem;
  left: -.2rem;
  width: .35rem;
  height: .35rem;
  background: white;
  border-radius: 50%;
}
.experience .content{
  background: #FBF6D7;
  width: 8rem;
  margin-left: .5rem;
  border:1px solid #e0e0e0;
  position: relative;
  height: 3.6rem;
  border-radius: 3px;
}
.experience .content::after,.experience .content::before{
  content: '';
  width: .9rem;
  height: .4rem;
  background: rgba(255,255,255,.7);
  position: absolute;
  border:1px solid #f1f1f1;
}
.experience .content::after{
  top: .1rem;
  left: -.25rem;
  transform: rotate(135deg);
}
.experience .content::before{
  top: .1rem;
  right: -.25rem;
  transform: rotate(45deg);
}
.time{
  text-align: left;
  padding: 0.1rem 0 0 .8rem;
}
.time i{
  padding-right: .25rem
}
.text{
  text-align: left;
  padding: .1rem .4rem;
  line-height: .55rem
}
</style>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome!',
      list:[{
        time:'2016.8 - 2017.10',
        content:'Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it'
      },
      {
        time:'2015.8 - 2016.6',
        content:'Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it'
      },
      {
        time:'2013.6 - 2015.6',
        content:'Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it'
      }
      ,{
        time:'2016.8 - 2017.10',
        content:'Its about where I am, what I am responsible for, how I do it,Its about where I am, what I am responsible for, how I do it'
      }
    ],
    titleFontColor:'black'
    }
  },
  mounted() {
    //do something after mounting vue instance
  },
  methods: {

  }
}
</script>
