<template>
  <div ref="mySwiper" v-swiper:mySwiper="swiperOptions" class="base-carousel">
    <div class="swiper-wrapper">
      <div v-for="(item,index) in list" :key="index" class="swiper-slide">
        <a v-if="item.link" :style="{backgroundImage: 'url('+ item.image+')'}" :href="item.link" class="swiper-img" target="_blank" />
        <span v-else :style="{backgroundImage: 'url('+ item.image+')'}" class="swiper-img" />
      </div>
    </div>
    <div class="swiper-pagination" />
    <div slot="button-prev" class="swiper-button-prev  show-in-pc" />
    <div slot="button-next" class="swiper-button-next  show-in-pc" />
  </div>
</template>
<script>
export default {
  name: 'BaseCarousel',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOptions: {
        autoHeight: false,
        autoplay: 5000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true

        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true
      }
    }
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
  .base-carousel{
    overflow: hidden;
    position: relative;
  }
  .swiper-slide{
    display: block;
    width: 100%;
    .swiper-img{
      display: block;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  @media (min-width: 750px) {
  }

  @media (max-width: 750px) {
  }
</style>
