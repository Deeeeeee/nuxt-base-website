<template>
  <div class="base-list">
    <van-list
      v-model="moreLoading"
      :finished="finished"
      :finished-text="finishedText"
      @load="getData"
    >
      <slot name="top" />
      <!-- @load="getData" -->
      <transition-group name="list-complete" tag="p">
        <div v-for="(item, index) in newList" :key="item.id">
          <slot name="item" :row="item" :index="index" />
        </div>
      </transition-group>
      <no-data v-if="noData" class="no-data-box" :text="noDataText" :image="noDataImg" />
    </van-list>

    <ul v-show="newList.length > 0" class="news-list">
      <transition-group name="list-complete" tag="p">
        <li v-for="(item) in []" :key="item.id" class="clearfix list-complete-item">
          <slot name="item" :row="item" :index="index" />
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import NoData from '@/components/NoData'
import fetch from '@/utils/fetch'

export default {
  components: {
    NoData
  },
  props: {
    api: {
      type: String,
      required: true
    },
    noDataText: {
      type: String,
      default: '暂无数据'
    },
    noDataImg: {
      type: String,
      default: ''
    },
    searchParams: {
      type: Object
    },
    formatFn: {
      type: Function
    }
  },
  data () {
    return {
      params: {
        page: 1,
        size: 10
      },
      list: [],
      moreLoading: false,
      finished: false,
      finishedText: '没有更多了',
      noData: false
    }
  },
  computed: {
    newList () { // 返回处理之后的List列表
      if (!this.formatFn) {
        return this.list
      }
      return this.formatFn(this.list)
    }
  },
  created () {
    if (this.searchParams) {
      this.params = { ...this.params, ...this.searchParams }
    }
  },
  mounted () {
  },
  methods: {
    getData () {
      console.log('> load more...')
      if (this.refreshLoading) {
        this.isCachedRefreshData = true
      }
      this.params = { ...this.params, ...this.searchParams }
      this.moreLoading = true
      this.finishedText = ''
      this.noData = false
      fetch({
        url: this.api,
        method: 'post',
        data: {
          ...this.params
        }
      }).then(({ data }) => {
        this.time = this.time + 1
        this.list = [...this.list, ...data.array || []]
        this.finishedText = '没有更多了'
        this.moreLoading = false
        this.params.page += 1
        // 暂无数据
        if (data.totalSize === 0) {
          this.finished = true
          this.finishedText = ''
          this.noData = true
        } else {
          this.noData = false
        }
        // 加载结束没有数据
        if (this.params.page > data.totalPage) {
          this.finished = true
        }
      }).catch(() => {
      })
    },
    refresh () {
      return new Promise((resolve, reject) => {
        console.log('> refresh')
        this.params = { ...this.params, ...this.searchParams }
        this.refreshLoading = true
        this.finishedText = ''
        this.params.page = 1
        fetch({
          url: this.api,
          method: 'post',
          data: {
            ...this.params
          }
        }).then(({ data }) => {
          if (this.isCachedRefreshData) {
            this.refreshLoading = false
            return
          }
          this.refreshLoading = false
          this.list = data.array
          this.params.page += 1

          if (data.totalSize === 0) {
            this.finished = true
            this.finishedText = ''
            this.noData = true
          } else {
            this.finished = false
            this.finishedText = '没有更多了'
            this.noData = false
          }
          resolve()
        }).catch(() => {
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-list {
    padding-bottom: 100px;
  }

  .loading-icon {
    width: 80px;
  }

  .no-data-box {
    padding-top: 200px;
  }

  .list-complete-item {
    transition: all 1s;
  }

  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */
  {
    transform: translateX(30px);
  }

  .list-complete-leave-active {
    position: absolute;
    display: none;
  }
</style>
