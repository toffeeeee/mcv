<template>
  <div class="call">
    <div class="wapper" v-bind:class="{activeLeft:isActive}">
      <app-header @toggle="change"></app-header>
      <div class="container">
        <h1>How to contact me?</h1>
        <div class="contact-container">
          <div v-for="item in contact" class="layout">
            <div>{{item.name}}</div>
            <div>{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <side-bar v-bind:class="{active:isActive}"></side-bar>
  </div>
</template>
<style scoped>
.contact-container{
  display: flex;
  justify-content: center;
  margin-top: 0.35rem
}
.layout{
  width: 3.33rem;
  font-size: 0.45rem;
}
.layout div:first-child{
  padding: 0.35rem 0
}
</style>
<script>
import header from '@/components/header'
import sideBar from '@/components/sideBar'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome!',
      contact:[{
        name:'QQ',
        content:'764295062'
      },
      {
        name:'phone',
        content:'15627795345'
      },
      {
        name:'wechat',
        content:'1iekkas'
      }
    ],
      isActive:''
    }
  },
  components:{
    AppHeader:header,
    sideBar:sideBar
  },
  methods: {
    change:function (msg) {
      this.isActive = msg ;
      console.log(this.isActive)
    }
  }
}
</script>
