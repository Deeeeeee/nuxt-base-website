<!--<template>-->
  <!--<div class="page-container">-->
    <!--<div class="banner"></div>-->
    <!--<div class="mini-layout mt30">-->
      <!--<div class="tc mb30" v-show="isLoading">-->
        <!--<i class="el-icon-loading fs6"></i> 加载中...-->
      <!--</div>-->
      <!--<ul class="news-list" v-show="newsArr.length > 0">-->
        <!--<transition-group name="list-complete" tag="p">-->
          <!--<li v-for="(item) in newsArr" :key="item.id" class="clearfix list-complete-item">-->
            <!--<img :src="item.image">-->
            <!--&lt;!&ndash;<img src="../../assets/images/news/news_1.png" alt="">&ndash;&gt;-->
            <!--<div class="news">-->
              <!--<h3>{{item.title}}</h3>-->
              <!--<p class="time">{{item.articleTime | Moment('YYYY-MM-DD')}}</p>-->
              <!--<nuxt-link :to="{path: '/news/detail', query: {id: item.id}}">-->
                <!--<el-button type="primary" size="small">查看详情</el-button>-->
              <!--</nuxt-link>-->
            <!--</div>-->
          <!--</li>-->
        <!--</transition-group>-->
      <!--</ul>-->
      <!--<p class="no-data" v-show="isNoData">暂无数据</p>-->
      <!--<el-pagination v-show="totalPage > 1" layout="prev, pager, next" :page-count="totalPage"-->
                     <!--@current-change="changePage"></el-pagination>-->
    <!--</div>-->

  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import {getNewsList} from '@/api/news'-->

  <!--import Img1 from '@/assets/images/news/news_1.png'-->
  <!--import Img2 from '@/assets/images/news/news_2.png'-->
  <!--import Img3 from '@/assets/images/news/news_3.png'-->
  <!--import Img4 from '@/assets/images/news/news_4.png'-->
  <!--import Img5 from '@/assets/images/news/news_5.png'-->
  <!--import Img6 from '@/assets/images/news/news_6.png'-->
  <!--import Img7 from '@/assets/images/news/news_7.png'-->

  <!--export default {-->
    <!--head () {-->
      <!--return {-->
        <!--title: '小合麟官网——新闻中心'-->
      <!--}-->
    <!--},-->
    <!--data () {-->
      <!--return {-->
        <!--isLoading: true,-->
        <!--isNoData: false,-->
        <!--imgs: [Img1, Img2, Img3, Img4, Img5, Img6, Img7],-->
        <!--newsArr: [],-->
        <!--newsForm: {-->
          <!--// recommend: 1,-->
          <!--// type: null,-->
          <!--size: 5,-->
          <!--page: 1-->
        <!--},-->
        <!--totalPage: 1-->
      <!--}-->
    <!--},-->
    <!--asyncData () {-->
      <!--// let params = {-->
      <!--//   recommend: 1,-->
      <!--//   type: null,-->
      <!--//   size: 10,-->
      <!--//   page: 1-->
      <!--// }-->
      <!--// return getNewsList(params).then(res => {-->
      <!--//   return {-->
      <!--//     newsArr: res.data.array || [],-->
      <!--//   }-->
      <!--// }).catch(() => {})-->
    <!--},-->
    <!--created () {-->
      <!--getNewsList(this.newsForm).then(result => {-->
        <!--this.newsArr = result.data.array || []-->
        <!--this.totalPage = result.data.totalPage-->
        <!--this.isLoading = false-->
      <!--}).catch(() => {-->
      <!--})-->
    <!--},-->
    <!--mounted () {-->
    <!--},-->
    <!--components: {},-->
    <!--methods: {-->
      <!--getNewsList () {-->
        <!--this.isLoading = true-->
        <!--getNewsList(this.newsForm).then(res => {-->
          <!--this.newsArr = res.data.array || []-->
          <!--this.totalPage = res.data.totalPage-->
          <!--this.isLoading = false-->
          <!--if (this.newsArr.length === 0) {-->
            <!--this.isNoData = true-->
          <!--}-->
        <!--}).catch(() => {-->
        <!--})-->
      <!--},-->
      <!--// 翻页-->
      <!--changePage (currentPage) {-->
        <!--this.newsForm.page = currentPage-->
        <!--this.getNewsList()-->
      <!--},-->
    <!--},-->
    <!--beforeDestroy () {-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style lang="scss" type="text/scss" scoped>-->
  <!--@import "../../assets/sass/mixin";-->

  <!--.page-container {-->
    <!--background-color: #f8f8f8;-->

    <!--.banner {-->
      <!--height: 500px;-->
      <!--min-width: 1200px;-->
      <!--background-image: url(../../assets/images/news/banner.jpg);-->
      <!--background-size: cover;-->
      <!--background-position: center center;-->
    <!--}-->

    <!--.news-list {-->
      <!--li {-->
        <!--background-color: #fff;-->
        <!--border-radius: 8px;-->
        <!--margin-bottom: 10px;-->
        <!--overflow: hidden;-->

        <!--&:hover {-->
          <!--box-shadow: 0 0 10px #ececec;-->
        <!--}-->

        <!--img {-->
          <!--width: 350px;-->
          <!--height: 200px;-->
          <!--float: left;-->
          <!--border-radius: 8px;-->
        <!--}-->

        <!--.news {-->
          <!--float: left;-->
          <!--width: 650px;-->
          <!--padding: 20px;-->

          <!--h3 {-->
            <!--font-size: 20px;-->
            <!--color: #333333;-->
            <!--line-height: 25px;-->
            <!--text-align: left;-->
            <!--@include more-line-ellipsis(32px, 2);-->
            <!--margin-bottom: 10px;-->
          <!--}-->

          <!--.time {-->
            <!--margin-bottom: 20px;-->
            <!--font-size: 12px;-->
            <!--color: #999;-->
          <!--}-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->

  <!--.no-data {-->
    <!--line-height: 250px;-->
    <!--text-align: center;-->
    <!--color: #999;-->
  <!--}-->

  <!--.list-complete-item {-->
    <!--transition: all 1s;-->
  <!--}-->

  <!--.list-complete-enter, .list-complete-leave-to-->
    <!--/* .list-complete-leave-active for below version 2.1.8 */-->
  <!--{-->
    <!--transform: translateX(30px);-->
  <!--}-->

  <!--.list-complete-leave-active {-->
    <!--position: absolute;-->
    <!--display: none;-->
  <!--}-->
<!--</style>-->
