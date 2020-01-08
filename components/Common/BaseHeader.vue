<template>
  <div class="base-header">
    <div class="layout wrap">
      <nuxt-link class="logo fl" to="/">
        LOGO {{ $t('Home') }}
      </nuxt-link>
      <ul class="show-in-pc nav fr">
        <li v-for="(item,index) in nav" :key="index" class="nav-item">
          <nuxt-link :to="item.src" :exact="index === 0" active-class="active">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link v-if="!token" to="/login">
        登录
      </nuxt-link>
      <span v-else @click="logout">
        退出
      </span>
      <!--      <span @click="switchLanguage">语言 {{ $i18n.locale }}</span>-->
      <LanguageSwitcher />
      <van-icon class="toggle show-in-h5 " name="bars" @click="visible = true" />
    </div>
    <van-popup
      v-model="visible"
      :style="{ height: '60%', background: '#000' }"
      calss="show-in-h5"
      position="top"
    >
      <ul class="nav layout">
        <li v-for="(item,index) in nav" :key="index" class="nav-item">
          <nuxt-link :to="item.src" :exact="index === 0" active-class="active">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </van-popup>
  </div>
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
          title: '品牌故事',
          type: 'story'
        },
        {
          src: '/product',
          title: '产品介绍'
        },
        {
          src: '/news',
          title: '新闻中心'
        },
        {
          src: '/download',
          title: 'App下载'
        },
        {
          src: '/about',
          title: '关于我们',
          type: 'us'
        }
      ]
    }

  },
  watch: {
    // $route: function (newVal) {
    //   let reg = RegExp(/\/login|\/register|\/forget|\/apply/)
    //   this.isSimple = reg.test(newVal.path)
    // }
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
