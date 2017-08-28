<template>
  <div class="header">
    <span v-if="isActive == false" class="iconfont" @click="toggle">&#xe609;</span>
    <span v-else class="iconfont" @click="toggle">&#xe63d;</span>
  </div>
</template>
<style scoped="true">
.header{
  text-align: left;
  padding: 0.45rem;
}

</style>
<script>
export default{
  data (){
    return {
      isActive:false
    }
  },
  methods:{
    toggle:function () {
      this.isActive = !this.isActive
      this.$emit('toggle',this.isActive)
    }
  }
}
</script>
