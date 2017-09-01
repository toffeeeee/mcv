<template>
  <transition :name='transitionName'>
    <div class="edit-container" @touchmove.prevent @mousewheel.prevent>
    <edit-header @getEditTemplateShow="getEditTemplateShow"></edit-header>
      <input type="text" maxlength="15" />
    </div>
  </transition>
</template>
<script>
import editHeader from '@/components/editHeader'
export default {
  data () {
    return {
      transitionName:'slide-top',
      active:null,
    }
  },
  //props:['isActive'],
  methods: {
    getActive () {
      this.transitionName = 'slide-top'
    },
    getEditTemplateShow (data) {
      //console.log(data)
      this.transitionName = 'slide-down'
      this.$emit('getEditTemplateShowVal',data)
    }
  },
  components:{
    editHeader:editHeader
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
