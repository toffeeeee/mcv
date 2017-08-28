<template>
  <div class="experience">
    <div class="wapper">
      <child-header :titleFontColor="titleFontColor" :titleValue="titleValue" ></child-header>
      <div class="bg-container">
      <div class="fixed-bg">
        <img src="../assets/e-bg.jpg" width="100%" />
      </div>
    </div>
      <div class="container">
        <div class="tabBar-container">
          <div class="tab-bar" v-for="(btn,index) in tabList"  v-bind:class="[active == index?'active':'']">
            <span @click="toggleTabs(btn.content,index)">{{btn.content}}</span>
          </div>
        </div>
        <skill :is="currentView" keep-alive></skill>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container{
  background: #ececec;
  min-height: 100%;
}
.bg-container{
  height: 6rem;
  overflow: hidden;
}
.fixed-bg{
    -webkit-filter:blur(20px);
}
.tabBar-container{
  display: flex;
  align-items: center;
  justify-content: center;
  background: white
}
.tab-bar{
  width: 3.2rem;
  padding: 0.5rem 0
}
.tabBar-container .active{
  color:#33ccff;
  border-bottom:2px solid red
}
</style>
<script>
import childHeader from '@/components/childHeader'
import Skill from '@/components/tabSkill'
import Experience from '@/components/tabExperience'
import Projects from '@/components/tabProjects'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome!',
      active:0,
      titleFontColor:'black',
      titleValue:'Experience',
      tabList:[{
        content:'Skill',
        icon:'',
      },
      {
        content:'Experience',
        icon:'',
      },
      {
        content:'Projects',
        icon:'',
      }
      ],
      currentView:'Skill',
      titleFontColor:'black'
    }
  },
  components:{
    childHeader:childHeader,
    Skill:Skill,
    Experience:Experience,
    Projects:Projects
  },
  mounted() {
    //do something after mounting vue instance
  },
  methods: {
    toggleTabs (tabName,tabIndex) {
      this.currentView = tabName
      this.active = tabIndex
    }
  }
}
</script>
