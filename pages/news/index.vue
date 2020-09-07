<template>
  <div class="page">
    <div class="banner" />
    <div class="layout">
      <base-list api="/official/article/list" :search-params="searchParams">
        <div slot="item" slot-scope="{ row }" class="news-item" :data="row">
          {{ row.title }}
        </div>
      </base-list>
    </div>
  </div>
</template>
<script>
import BaseList from '@/components/BaseList'
export default {
  components: { BaseList },
  asyncData () {

  },
  data () {
    return {
      searchParams: {
        size: 10,
        page: 1
      }
    }
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    getNewsList () {
      this.isLoading = true
    },
    // 翻页
    changePage (currentPage) {
      this.newsForm.page = currentPage
      this.getNewsList()
    }
  },
  head () {
    return {
      title: '小合麟官网——新闻中心'
    }
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
  @import "../../assets/sass/mixin";

  .page-container {
    background-color: #f8f8f8;

    .banner {
      height: 500px;
      min-width: 1200px;
      background-image: url(https://oss.zhihanyun.com/Fv8JzFMnVY6tCq4vGZAhVIxJbOmw);
      background-size: cover;
      background-position: center center;
    }

    .news-list {
      li {
        background-color: #fff;
        border-radius: 8px;
        margin-bottom: 10px;
        overflow: hidden;

        &:hover {
          box-shadow: 0 0 10px #ececec;
        }

        img {
          width: 350px;
          height: 200px;
          float: left;
          border-radius: 8px;
        }

        .news {
          float: left;
          width: 650px;
          padding: 20px;

          h3 {
            font-size: 20px;
            color: #333333;
            line-height: 25px;
            text-align: left;
            margin-bottom: 10px;
          }

          .time {
            margin-bottom: 20px;
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }

  .no-data {
    line-height: 250px;
    text-align: center;
    color: #999;
  }
</style>
