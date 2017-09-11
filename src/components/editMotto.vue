<template>
  <transition :name='transitionName'>
    <div class="edit-container" @touchmove.prevent @mousewheel.prevent>
      <div class="edit-header">
        <span  @click="postEditTemplateShow">取消</span>
        <span>修改签名</span>
        <span @click="postEdit">完成</span>
      </div>
      <input type="text" maxlength="30" v-model="postData.value" />
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      transitionName:'slide-top',
      active:null,
      postData:{
        editTemplateShow:false,
        value:''
      }
    }
  },
  props:['mottoValue'],
  methods: {
    getActive () {
      this.transitionName = 'slide-top'
      this.postData.value = this.mottoValue
    },
    postEdit () {
      this.transitionName = 'slide-down'
      this.$emit('postEditValue',this.postData)
    },
    postEditTemplateShow () {
      //console.log(data)
      this.transitionName = 'slide-down'
      this.$emit('getEditTemplateShowVal',this.postData)
    },
  },
  components:{

  },
}
</script>
<style scoped>
.slide-top-enter-active, .slide-top-leave-active,.slide-down-enter-active, .slide-down-leave-active{
  transition: all .3s cubic-bezier(.55,0,.1,1);
}
.slide-top-enter,.slide-top-leave-active,.slide-down-enter,.slide-down-leave-active{
    opacity: 1;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
}

</style>
