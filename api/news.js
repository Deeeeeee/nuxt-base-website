import fetch from '@/utils/fetch'

// 新闻列表
export function newsList (params) {
  return fetch({
    url: '/official/article/list',
    method: 'post',
    data: {
      ...params
    }
  })
}
// 新闻
export function newsInfo (articleId) {
  return fetch({
    url: '/official/article/info',
    method: 'post',
    data: {
      articleId
    }
  })
}
