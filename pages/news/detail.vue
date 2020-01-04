<!--<template>-->
  <!--<div class="news-detail-box clearfix" ref="contentBox">-->
    <!--<div class="breadcrumb mt10">-->
      <!--<nuxt-link to="/news">新闻中心</nuxt-link>-->
      <!--<span> > </span>-->
      <!--<span class="color-999">新闻详情</span>-->
    <!--</div>-->
    <!--<div class="tc mb30" v-if="isLoading">-->
      <!--<i class="el-icon-loading fs6" ></i> 加载中...-->
    <!--</div>-->
    <!--<div class="news" v-else>-->
      <!--<h3 class="title">{{newsInfo.title}}</h3>-->
      <!--<p class="time">{{newsInfo.articleTime | Moment('YYYY-MM-DD')}}</p>-->
      <!--<div class="mt30 browser-base-style" v-html="newsInfo.content"></div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import {getNewsInfo} from '@/api/news'-->
  <!--export default {-->
    <!--head () {-->
      <!--return {-->
        <!--title: '小合麟官网-新闻详情',-->

      <!--}-->
    <!--},-->
    <!--data () {-->
      <!--return {-->
        <!--isLoading: false,-->
        <!--newsInfo: {-->
          <!--title: '',-->
          <!--articleTime: '',-->
          <!--content: ''-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--created () {-->
      <!--// const news = [-->
      <!--//   {-->
      <!--//     title: '广州市公安局经侦支队工会与小合麟联合举办的“民警子女阅读与科学假日”活动，给孩子带来难忘的一天',-->
      <!--//     articleTime: '2019-3-28 16:21:34',-->
      <!--//     content: ''-->
      <!--//   }-->
      <!--// ]-->
      <!--// this.newsInfo = news [0]-->

      <!--this.getNews()-->

    <!--},-->
    <!--mounted () {-->
    <!--},-->
    <!--watch: {},-->
    <!--components: {},-->
    <!--methods: {-->
      <!--getNews(){-->
        <!--this.isLoading = true-->
        <!--getNewsInfo(this.$route.query.id).then(res => {-->
          <!--this.newsInfo = res.data-->
          <!--this.isLoading = false-->
        <!--}).catch(() => {-->
          <!--this.isLoading = false-->
        <!--})-->
      <!--},-->
    <!--},-->
    <!--beforeDestroy () {-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style lang="scss" type="text/scss" scoped>-->
  <!--@import "../../assets/sass/default";-->

  <!--.breadcrumb {-->
    <!--font-size: 14px;-->
    <!--width: 1000px;-->
    <!--margin: 10px auto 0;-->
  <!--}-->

  <!--.news {-->
    <!--width: 800px;-->
    <!--margin: 30px auto 50px;-->

    <!--&gt; .title {-->
      <!--font-size: 36px;-->
      <!--text-align: justify;-->
    <!--}-->

    <!--.time {-->
      <!--color: #999;-->
      <!--margin-top: 20px;-->
    <!--}-->
  <!--}-->
<!--</style>-->
