<template>
  <div class="base-footer">
    <div class="layout">
      XXXXXXXXXXXX有限公司版权所有 粤ICP备xxxxx号 | Copyright &copy; 2017
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterBar',
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
  },
  mounted () {
  },
  methods: {}
}

</script>
<style lang="scss" type="text/scss" scoped>
  @import "../../assets/sass/variables";
  @media (min-width: 750px) {
    .base-footer {
      height: $FooterHeightPC;
      line-height: $FooterHeightPC;
      background-color: #2a2a2a;
      color: #fff;
      text-align: center;
    }
  }
  @media (max-width: 750px) {
    .base-footer {
      height: $FooterHeightH5;
      line-height: $FooterHeightH5;
      background-color: #2a2a2a;
      color: #fff;
      text-align: center;
    }
  }
</style>
