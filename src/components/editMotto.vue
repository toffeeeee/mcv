<template>
  <div class="edit-container" @touchmove.prevent @mousewheel.prevent>
  <edit-header @getEditTemplateShow="getEditTemplateShow"></edit-header>
    <input v-focus type="text" maxlength="15" />
  </div>
</template>
<script>
import editHeader from '@/components/editHeader'
export default {
  data () {
    return {
      transitionName:''
    }
  },
  methods: {
    getEditTemplateShow (data) {
      //console.log(data)
      this.$emit('getEditTemplateShowVal',data)
    },

  },
  components:{
    editHeader:editHeader
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
<style scoped>

</style>
