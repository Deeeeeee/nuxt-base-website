<template>
  <div class="page page-home">
    <base-carousel :list="banners" class="show-in-pc banner-pc" />
    <base-carousel :list="banners" class="show-in-h5 banner-h5" />
    <div class="img-box layout mt20">
      <img v-for="item in newsList" :key="item.id" :src="item.image" alt="">
    </div>
  </div>
</template>
<script>
import { newsList } from '@/api/news'
import BaseCarousel from '@/components/BaseCarousel'
export default {
  name: 'Home',
  components: { BaseCarousel },
  scrollToTop: true,
  // nuxt 异步数据设置方式
  asyncData (context) {
    const params = {
      type: null,
      recommend: null,
      size: 8,
      page: 1
    }
    return newsList(params).then((res) => {
      return {
        newsList: res.data.array.map((item) => {
          delete item.content
          return item
        }) || []
      }
    }).catch((e) => {
      console.error('> ERROR:', e.message)
    })
  },
  data () {
    return {
      newsList: [],
      banners: [
        { image: 'https://oss.zhihanyun.com/Fv8JzFMnVY6tCq4vGZAhVIxJbOmw', link: 'http://www.baidu.com' },
        { image: 'https://oss.zhihanyun.com/FkcOt9mY1-n-NaD-tdmq8DmKiYPI' }
      ],
      currentIndex: 0
    }
  },
  computed: {},
  created () {
  },
  beforeDestroy () {
  },
  mounted () {
  },
  methods: {},
  head () {
    return {
      title: '官网'
    }
  }
}
</script>
<style lang="scss" type="text/scss">
  @media (min-width: 750px) {
    .page-home {
      .banner-pc {
        height: 700px;
      }
      .img-box{
        img {
          box-sizing: border-box;
          width: 280px;
          height: 280px;
          margin: 0 10px 10px;
          border: 1px solid #ccc;
          object-fit: cover;
        }
      }
    }
  }
  @media (max-width: 750px) {
    .page-home{
      .banner-h5{
        height: 400px;
      }

      .img-box{
        img {
          box-sizing: border-box;
          width: 325px;
          height: 325px;
          margin: 0 10px 10px;
          border: 1PX solid #ccc;
          object-fit: cover;
        }
      }
    }
  }
</style>
