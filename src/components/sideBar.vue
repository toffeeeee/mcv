<template>
  <div class="sideBar">
    <div class="shadow">
      <div class="author">
        <img src="../assets/avatar.jpg">
        <span>1iekkas❤</span>
      </div>
      <p class="state">I need some time,please</p>
      <nav>
        <ul>
          <!--<li>home</li>
          <li>mine</li>
          <li>experience</li>
          <li>call me</li>-->
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/mine">mine</router-link></li>
          <li><router-link to="/experience">experience</router-link></li>
          <!--<li><router-link to="/call">call me</router-link></li>-->
        </ul>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.sideBar{
  width: 7rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: -7rem;
  transition: all .5s;
  background:url(http://storage1.imgchr.com/V5axU.jpg) no-repeat;
  background-size: 360%;
  background-position: 38% 10%;
  color: white;
}
.shadow{
   background:rgba(0,0,0,.2);
   height: 100%;
}
.author{
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  font-size: .65rem;
  padding: 1rem 0 0 .45rem;
}
.state{
  padding:.35rem .15rem 0 .45rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  text-align: left;
}
nav{
  margin-top: .5rem;
}
ul li{
  padding: 0.45rem 0 .45rem .45rem;
  text-align: left;
}
nav a{
  color: white
}
img{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.25rem;
  border: 4px solid #fff;
}
</style>
<script>
export default{
  data () {
    return {

    }
  }
}
</script>
