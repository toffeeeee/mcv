<template>
  <div class="edit-header">
    <span @click="postEditTemplateShow">取消</span>
    <span>修改签名</span>
    <span>完成</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      editTemplateShow:false,
    }
  },
  methods:{
    postEditTemplateShow () {
      this.$emit('getEditTemplateShow',this.editTemplateShow)
    }
  }
}
</script>
<style scoped>
.edit-header {
  background: #222;
  color: white;
  padding: .25rem 0;
  margin-bottom: .35rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-header span{
  width: 1rem;
}
.edit-header span:nth-child(2) {
  width: 8rem;
  font-size: .45rem
}
</style>
