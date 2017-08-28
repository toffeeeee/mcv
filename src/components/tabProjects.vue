<template>
  <div class="container">
    <!--<p>My Projects</p>-->
    <div class="projects" v-for="elem in Projects">
      <img v-bind:src="elem.imgUrl" width="100%"/>
      <div class="content-container">
        <p>{{elem.name}}</p>
        <p>{{elem.content}}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container{
  background: white;
  padding:.45rem .45rem 0 .45rem;
  border-top: 1px solid #e8e8e8;
}
.projects{
  margin-bottom: .85rem;
  border-radius: 3px;
  border:1px solid #e8e8e8;
}
.projects .content-container{
  padding-top: 0.25rem
}
.projects .content-container p{
  padding:0 0 .15rem .15rem;
  text-align: left;
}
.projects .content-container p:first-child{
  font-size: .4rem;
  font-weight: bold;
}
</style>
<script>
export default {
  data () {
    return {
      Projects:[{
        name:'ProjectName',
        imgUrl:'http://storage1.imgchr.com/V7Dl6.jpg',
        content:'ProjectDetailContent : 1 line '
      },
      {
        name:'ProjectName',
        imgUrl:'http://storage1.imgchr.com/V7Dl6.jpg',
        content:'ProjectDetailContent : 1 line '
      },
      {
        name:'ProjectName',
        imgUrl:'http://storage1.imgchr.com/V7Dl6.jpg',
        content:'ProjectDetailContent : 1 line '
      },
      ]
    }
  }
}
</script>
