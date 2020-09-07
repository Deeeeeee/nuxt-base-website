<template>
  <ul class="nav">
    <li v-for="(item,index) in nav" :key="index" class="nav-item">
      <nuxt-link :to="item.src" :exact="index === 0" active-class="active">
        {{ item.title }}
      </nuxt-link>
    </li>
    <li class="nav-item">
      <LanguageSwitcher />
    </li>
    <li class="nav-item">
      <nuxt-link v-if="!token" to="/login">
        登录
      </nuxt-link>
      <a v-else @click="logout">退出</a>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'
import LanguageSwitcher from '@/components/Common/LanguageSwitcher'

export default {
  name: 'BaseHeader',
  components: { LanguageSwitcher },
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
    },
    nav () {
      return [
        {
          src: '/',
          title: this.$t('Home')
        },
        {
          src: '/story',
          title: this.$t('Brand'),
          type: 'story'
        },
        {
          src: '/product',
          title: this.$t('Production')
        },
        {
          src: '/news',
          title: this.$t('News')
        },
        {
          src: '/download',
          title: this.$t('Download')
        },
        {
          src: '/about',
          title: this.$t('About'),
          type: 'us'
        }
      ]
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
    logout () {
      this.$store.dispatch('Logout').then((res) => {
        this.$router.push({
          path: '/'
        })
      }).catch(() => {
      })
    }
  }
}

</script>
<style lang="scss" scoped type="text/scss">
  @import "../../assets/sass/variables";
  @media (min-width: 750PX) {
    .nav {
      .nav-item {
        float: left;
        a {
          display: block;
          padding: 0 20px;
          font-size: 16px;
          color: #fff;
        }
        .active {
          display: block;
          color: $theme;
        }
      }
    }
  }
  @media (max-width: 750PX) {
  }
</style>
