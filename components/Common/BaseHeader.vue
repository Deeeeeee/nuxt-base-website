<template>
  <div class="base-header">
    <div class="layout wrap">
      <nuxt-link class="logo fl" to="/">
        LOGO
      </nuxt-link>
      <ul class="show-in-pc nav fr">
        <li v-for="(item,index) in nav" :key="index" class="nav-item">
          <nuxt-link :to="item.src" :exact="index === 0" active-class="active">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
      <van-icon @click="visible = true" class="toggle show-in-h5 " name="bars" />
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
export default {
  name: 'BaseHeader',
  props: {},
  data () {
    return {
      visible: false,
      nav: [
        {
          src: '/',
          title: '首页'
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

  computed: {},
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
  methods: {}
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
      font-size: 18px;
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
