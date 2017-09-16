<template>
  <div class="mine">
    <div class="wapper" v-bind:class="{activeLeft:isActive}">
      <child-header   :titleFontColor="titleFontColor" :titleValue="titleValue"></child-header>
      <div class="container">
        <div class="container-header">
          <img src="https://s1.imgchr.com/2017/09/11/nAkfs.jpg" width="100%">
        </div>
        <div class="container-author">
          <img src="../assets/avatar.jpg" />
        </div>
        <div class="container-content">
          <div class="container-detail">
            <h2>{{detail.name}}</h2>
            <div align="center" class="motto">
              <span>{{detail.motto}}</span>
              <i @click="showEditTemplate" class="iconfont editMotto">&#xe6e8;</i>
            </div>
            <p class="info"><i class="iconfont">&#xe680;</i>{{detail.qq}}</p>
            <p class="s info"><i class="iconfont">&#xe635;</i><span>{{detail.sex}}</span><span>{{detail.birthday}}</span><span>{{detail.constellation}}</span><span>{{detail.live}}</span></p>
            <p class="line info"><i class="iconfont">&#xe600;</i>{{detail.job}}</p>
            <p class="top-line info"><i class="iconfont">&#xe601;</i>{{detail.education}}</p>
            <p class="info"><i class="iconfont">&#xe615;</i>{{detail.call}}</p>
            <p class="info"><i class="iconfont">&#xe65c;</i>{{detail.wechat}}</p>
          </div>
          <div class="container-hobby">
            <h2 class="hobby-title" align="center">Hobbies</h2>
            <div v-for="item in hobbies" class="list">
              <img v-bind:src="item.picUrl" />
              <div>
                <p>{{item.title}}</p>
                <p>{{item.content}}</p>
              </div>
            </div>
          </div>
          <div class="container-tag">
            <h2 class="my-tag-title" align="center">Tag</h2>
            <div class="tag-wapper">
              <p class="tag">还没有标签</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--editTemplate-->
    <div id="edit-template-container">
      <edit-motto ref="edit"
        v-show="editTemplateShow"
        @postEditValue="postEditValue"
        @getEditTemplateShowVal="getEditTemplateShowVal"
        :mottoValue="detail.motto"
        ></edit-motto>
    </div>
  </div>
</template>
<style scoped>
.container-header{
  height: 4.95rem;
  overflow-y: hidden;
  position:relative;
}
.container-header h1{
  position: absolute;
  top: 3.2rem;
  left: 9.5%;
  color: white
}
.container-header img{
  /*-webkit-filter:blur(1px);*/
}
.container-author{
  position: absolute;
  top: 3.3rem;
  left: 3.5rem;
}
.container-author img{
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border:.07rem solid white
}
.container-content h2{
  text-align: center;
  font-size: .65rem;
  color: black;
  font-weight: 100
}
.container-content{
  padding:1.9rem .45rem .45rem .45rem;
  text-align: left;
  background: #f7f7f7
}
.container-content span{
  color: black;
  display: block;
  font-size: .4rem;
  margin-bottom: .35rem
}
.container-content p{
  padding: .15rem 0;
  color: #9c9c9c;
  font-size: .35rem;
}
.container-detail p{
  color: black;
  font-size: .4rem
}
.motto{
  position:relative;
}
.motto i{
  position: absolute;
  top: .23rem;
  right:-.35rem
}
.container-detail i{
  font-size: .5rem;
  padding-right: .45rem;
  color:#909090;
}
div.motto span{
  color: #777 !important;
  font-size: .55rem;
  padding: .15rem 0;
  width:8rem;
  word-break:break-all;
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
  overflow:hidden;
}
.info{
  display: flex;
  align-items: center;
}
.s span{
  padding-right: .25rem;
  display: inline-block;
  margin-bottom: 0;
}
p.line{
  padding-bottom: .35rem;
  border-bottom: 1px solid #ccc
}
p.top-line{
  padding-top: .35rem
}
.container-hobby,.container-tag{
  margin-top: .5rem
}
/*.tag-wapper{
  -webkit-column-count:3;
    -moz-column-count:3;
    column-count:3;

    -webkit-column-gap:10px;
    -moz-column-gap:10px;
    column-gap:10px;

    column-rule:3px outset #ff0000;
}*/
h2.hobby-title,h2.my-tag-title{
  position:relative;
}
h2.hobby-title::after,h2.hobby-title::before,h2.my-tag-title::after,h2.my-tag-title::before{
  content: '';
  width: 1.5rem;
  border-bottom: 1px solid black;
  color: black;
  display: block;
  position: absolute;
  top: .4rem
}
h2.hobby-title::after,h2.my-tag-title::after{
  left: 1.5rem;
}
h2.hobby-title::before,h2.my-tag-title::before{
  right: 1.5rem;
}
.list{
  padding-top:0.45rem;
  display: flex;
}
.list img{
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 3px
}
.list div{
  margin-left: .25rem
}
.list div p:first-child{
  font-size: .45rem;
  color: black;
  font-family:PingFangSC-Regular,sans-serif !important;
}
.list div p:nth-child(2){
  font-size: .4rem;
  font-family:PingFangSC-Regular,sans-serif !important;
}
.editMotto{
  margin-left: 0.15rem
}
p.tag{
  font-size: .7rem;
  text-align: center;
  color: black;
  margin-top: .3rem;
}
.motto span{
  display: inline-block;
}
.motto input{
  border:0;
  background: #f7f7f7;
  font-size: .4rem;
  font-family:PingFangSC-Regular,sans-serif !important;
}
</style>
<script>
import childHeader from '@/components/childHeader'
import editMotto from '@/components/editMotto'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome!',
      isActive:'',
      titleFontColor:'white',
      titleValue:'Mine',
      editTemplateShow:false,
      ifShow:true,
      detail:{
        name:'1iekkas❤',
        sex:'男',
        job:'web Front-end',
        qq:'764295062',
        birthday:'22岁',
        constellation:'白羊座',
        education:'广东省佛山市高明区第四中学',
        live:'广东-佛山-禅城',
        call:'1562xx95345',
        motto:'leave this pleace with me ? ',
        wechat:'liekkasN1ce'
      },
      hobbies:[{
        title:'game',
        picUrl:'http://i2.bvimg.com/605992/ff8f380e7269ebc0.jpg',
        content:'i like e-sports!'
      },
      {
        title:'music',
        picUrl:'http://i2.bvimg.com/605992/e24576d5c8881332.jpg',
        content:'i like electronic-music too'
      },
      {
        title:'code',
        picUrl:'http://i4.bvimg.com/605992/0c9d829aa9a0d272.jpg',
        content:'i like code too'
      }
    ]
    }
  },
  components:{
    childHeader:childHeader,
    editMotto:editMotto
  },
  mounted(){

  },
  methods: {
    editMotto () {
        this.nativeMottoShow = !this.nativeMottoShow
        this.editedMottoShow = !this.editedMottoShow
        console.log(this.nativeMottoShow)
        console.log(this.editedMottoShow)
    },
    showEditTemplate () {
      const elem = document.getElementById('edit-template-container');
      this.editTemplateShow = !this.editTemplateShow
      if(this.editTemplateShow){
        elem.className = 'show'
        this.$refs.edit.getActive()
      }else{
        elem.className = 'hide'
      }
    },
    blur () {
      this.nativeMottoShow = true
      this.editedMottoShow = false
      event.currentTarget.blur();
    },
    cblur () {
      this.nativeMottoShow = true
      this.editedMottoShow = false
      console.log(this.nativeMottoShow)
      console.log(this.editedMottoShow)

    },
    getEditTemplateShowVal (data) {
      this.editTemplateShow = data.editTemplateShow
      //console.log(data)
    },
    postEditValue (data) {
        this.editTemplateShow = data.editTemplateShow
        const newMotto = data.value
        //console.log(data)
        if(newMotto==this.detail.motto){
          return false
        }else if(newMotto==''){
          this.detail.motto = 'Motto null...'
        }else{
          this.detail.motto = newMotto
        }
    }
  },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack
      console.log(isBack)
    }
  },
  directives: {
    focus:function(el,value){
      //console.log(value);
      if(value){
        el.focus();
      }
    },

  }
}
</script>
