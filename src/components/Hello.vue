<template>
  <div class="hello">
    <div class="wapper"  v-bind:class="{activeLeft:isActive}">
      <app-header @toggle="change"></app-header>
      <div class="container">
          <img src="https://raw.githubusercontent.com/1iekkas/cv/gh-pages/doc/static/img/avatar.a86f92c.jpg">
          <h1>{{msg}}</h1>
      </div>
    </div>
    <side-bar  v-bind:class="{active:isActive}"></side-bar>
  </div>
</template>
<style scoped>
img{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border:3px solid #a2a2a2;
  margin-bottom: .75rem
}
#app{
  height: 100%;
}
.hello{
  height: 100%;
  position: relative;
  overflow-x: hidden;
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
      //console.log(this.isActive)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
