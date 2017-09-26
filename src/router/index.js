import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mine from '@/components/mine'
import Experience from '@/components/experience'
import Music from '@/components/music'
/*import Play from '@/components/play'*/
Vue.use(Router)
Router.prototype.goBack = function () {  //重点，给VueRoute添加一个goBack方法，用于记录路由的前进后退状态 this.isBack = true
　　this.isBack = true
　　window.history.go(-1)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    }/*,
    {
      path: '/play',
      name: 'play',
      component: Play
    }*/
  ]
})
