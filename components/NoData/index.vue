<template>
  <div class="no-data">
    <!--    <img :src="image || $image.DEFAULT_NO_DATA" alt="">-->
    <p v-html="text" />
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '暂无数据'
    },
    image: {
      type: String
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped type="text/scss">
  .no-data{
    text-align: center;
    img{
      margin:0 auto 10px auto;
      width: 500px;
    }
    p{
      text-align: center;
      font-size: 28px;
      color: #999;
      line-height: 60px;
    }
  }
</style>
