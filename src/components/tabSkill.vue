<template>
  <div class="skill-container">
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="url in banner">
        <img v-bind:src="url.bannerUrl" width="100%" />
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <p align="left" class="title">My Skill</p>
    <div class="list" v-for="(items,index) in skill">
      <div class="img">
        <img v-bind:src="items.img" />
      </div>
      <div class="content">
        <p>{{items.content}}</p>
        <p>{{items.detail}}</p>
        <p v-for="i in items.Proficiency"><span>Proficiency:</span><span class="line" v-bind:style="{width:i.width}"></span><span>{{i.num}}</span></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.skill-container{
  background: white;
}
.skill-container .title{
  color: #33ccff;
  font-size: .4rem;
  margin:.35rem 0;
  padding:0 .35rem
}
.skill-container .list{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 0.25rem 0
}
.skill-container .img{
  width: 1.5rem;
  text-align: center;
}
.skill-container .img img{
  height: 1rem
}
.skill-container .content{
  width: 8rem;
  padding-left: .15rem;
  border-bottom: 1px solid #ccc
}
.skill-container .content p{
  padding-bottom: .1rem;
}
.skill-container .content p:first-child{
  font-size: .4rem;
  font-weight: bold;
}
.skill-container .content p:nth-child(3){
  display: flex;
  align-items: center;
}
.skill-container .content .line{
  background:#ff6666;
  height: .2rem;
  margin: 0 .25rem
}
.skill-container .content p:nth-child(3) span{
}
.swiper-container{
  max-height: 3rem;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
  bottom:.08rem
}
</style>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  data () {
    return {
      skill:[{
        img:'http://storage1.imgchr.com/V52RK.jpg',
        content:'HTML',
        Proficiency:[{
          num:'90%',
          width:'3.6rem'
        }],
        detail:'well,this is detail'
      },
      {
        img:'http://storage1.imgchr.com/V5saR.jpg',
        content:'CSS',
        Proficiency:[{
          num:'90%',
          width:'3.6rem'
        }],
        detail:'well,this is detail'
      },
      {
        img:'http://storage1.imgchr.com/V5fMD.jpg',
        content:'JavaScript',
        Proficiency:[{
          num:'80%',
          width:'3.2rem'
        }],
        detail:'well,this is detail'
      },
      {
        img:'http://storage1.imgchr.com/V5hse.png',
        content:'Vue.js',
        Proficiency:[{
          num:'75%',
          width:'3rem'
        }],
        detail:'well,this is detail'
      },
      {
        img:'https://s1.ax1x.com/2017/09/21/MQi79.png',
        content:'WeChat',
        Proficiency:[{
          num:'70%',
          width:'2.8rem'
        }],
        detail:'well,this is detail'
      },
      {
        img:'http://storage1.imgchr.com/V5yI1.jpg',
        content:'Git',
        Proficiency:[{
          num:'40%',
          width:'1.6rem'
        }],
        detail:'well,this is detail'
      },
      {
        img:'http://storage1.imgchr.com/V5cPx.jpg',
        content:'Github',
        Proficiency:[{
          num:'40%',
          width:'1.6rem'
        }],
        detail:'well,this is detail'
      },
      {
        img:'http://storage1.imgchr.com/V5RxO.jpg',
        content:'PhotoShop',
        Proficiency:[{
          num:'40%',
          width:'1.6rem'
        }],
        detail:'well,this is detail'
      },
      ],
      banner:[{
        bannerUrl:'http://storage1.imgchr.com/V5gG6.jpg'
      },
      {
        bannerUrl:'http://storage1.imgchr.com/V5BqJ.jpg'
      },
      {
        bannerUrl:'http://storage1.imgchr.com/V5wMF.jpg'
      }
      ],

      swiperOption: {
         //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
         notNextTick: true,
         pagination: '.swiper-pagination',
         slidesPerView: 'auto',
         centeredSlides: true,
         paginationClickable: true,
         spaceBetween: 30,
         autoplayDisableOnInteraction:false,
         autoplay:5000,
         loop:true,
             onSlideChangeEnd: swiper => {
                 //这个位置放swiper的回调方法
                 this.page = swiper.realIndex+1;
                 this.index = swiper.realIndex;
             }
      }

    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {

            swiper() {
              return this.$refs.mySwiper.swiper;
            }
        },
        mounted () {
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
            this.swiper.slideTo(0, 0, false);
        }
}
</script>
