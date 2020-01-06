<template>
  <div class="main-container">
    <base-header />
    <nuxt />
    <base-footer />
  </div>
</template>
<script>
import BaseHeader from '@/components/Common/BaseHeader'
import BaseFooter from '@/components/Common/BaseFooter'

export default {
  components: {
    BaseHeader,
    BaseFooter
    // AlertTip
  },
  data () {
    return {}
  },
  watch: {
    // '$route' (to, from) {
    //   this.hidden = to.meta.hidden
    //   this.path = to.path
    // }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    // closeResetPswFade() {
    //   this.$store.commit('CHANGE_RESETPSWTIP', false)
    // },
    // closeRegFade() {
    //   this.$store.commit('CHANGE_REGTIP', false)
    // }
  }
}

</script>
<style lang="scss" type="text/scss" scoped>
  @import "../assets/sass/variables";

  @media (min-width: 750px) {
    .main-container {
      padding-top: $NavHeightPC;
    }
  }

  @media (max-width: 750px) {
    .env-h5 {
      .main-container {
        padding-top: 0;
      }
    }
  }
</style>
