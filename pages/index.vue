<template>
  <div class="page page-home">
    <base-carousel :list="banners" class="show-in-pc banner-pc" />
    <base-carousel :list="banners" class="show-in-h5 banner-h5" />
  </div>
</template>
<script>
import { newsList } from '@/api/news'

import BaseCarousel from '@/components/BaseCarousel'
export default {
  name: 'Home',
  components: { BaseCarousel },
  scrollToTop: true,
  head () {
    return {
      title: '官网'
    }
  },
  data () {
    return {
      banners: [
        { image: 'https://oss.zhihanyun.com/FkcOt9mY1-n-NaD-tdmq8DmKiYPI', link: 'http://www.baidu.com' },
        { image: 'https://oss.zhihanyun.com/FkcOt9mY1-n-NaD-tdmq8DmKiYPI' }
      ],
      currentIndex: 0
    }
  },
  computed: {},
  // nuxt 异步数据设置方式
  asyncData (context) {
    const params = {
      type: null,
      recommend: null,
      size: 8,
      page: 1
    }
    return newsList(params).then((res) => {
      console.log(res)
      const imgNewsArr = (res.data.array || []).slice(0, 5)
      return {
        imgNewsArr,
        newsArr: res.data.array.map((item) => {
          delete item.content
          return item
        }) || [],
        newTitle: imgNewsArr[0].title
      }
    }).catch(() => {
    })
  },
  created () {
  },
  beforeDestroy () {
  },
  mounted () {
  },
  methods: {}
}
</script>
<style lang="scss" type="text/scss">
  @media (min-width: 750PX) {
    .page-home {
      .banner-pc {
        height: 500PX;
      }
    }
  }
  @media (max-width: 750PX) {
    .page-home{
      .banner-h5{
        height: 400px;
      }
    }
  }
</style>
