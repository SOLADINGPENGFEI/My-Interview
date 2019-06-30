<template>
  <div class='addInterview'>
      <span @click="toAdd">添加面试</span>
  </div>
</template>

<script>
export default {
    methods: {
      toAdd() {
        wx.navigateTo({
          url: '/pages/AddInterview/main'
        })
      }
    }
}
</script>

<style scoped>
   .addInterview {
      display: inline-block;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: rgba(56, 44, 44, 0.548);
      color: #fff;
    }

</style>
