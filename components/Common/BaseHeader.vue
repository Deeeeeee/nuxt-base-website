<template>
  <div class="base-header">
    <div class="layout wrap">
      <nuxt-link class="logo fl" to="/">
        LOGO
      </nuxt-link>
      <base-nav class="show-in-pc fr" />
      <van-icon class="toggle show-in-h5 " name="bars" @click="visible = true" />
    </div>
    <van-popup
      v-model="visible"
      :style="{ height: '60%', background: '#000' }"
      calss="show-in-h5"
      position="top"
    >
      <base-nav class="layout" />
    </van-popup>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import BaseNav from '@/components/Common/BaseNav'

export default {
  name: 'BaseHeader',
  components: { BaseNav },
  props: {},
  data () {
    return {
      lang: this.$i18n.locale,
      visible: false
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ]),
    langList () {
      return this.$i18n.locales
    }

  },
  watch: {
    $route (newVal) {
      this.visible = false
      // let reg = RegExp(/\/login|\/register|\/forget|\/apply/)
      // this.isSimple = reg.test(newVal.path)
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}

</script>
<style lang="scss" scoped type="text/scss">
  @import "../../assets/sass/variables";
  @media (min-width: 750PX) {
    .base-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 99;
      height: $NavHeightPC;
      line-height: $NavHeightPC;
      background-color: #000;
      font-size: 18px;
      color: #fff;
    }
  }
  @media (max-width: 750PX) {
    .base-header {
      position: sticky;
      z-index: 99;
      top: 0;
      left: 0;
      width: 100%;
      height: $NavHeightH5;
      line-height: $NavHeightH5;
      background-color: #000;
      font-size: 32px;
      color: #fff;
      .wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .toggle{
          font-size: 40px;
        }
      }
    }
  }
</style>
