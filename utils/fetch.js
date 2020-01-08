import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import { getToken } from './auth' // 验权
// 创建axios实例
import baseApi from './baseApi'
// let params = {}
const service = axios.create({
  baseURL: baseApi, // api的base_url
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 15000, // 请求超时时间
  transformRequest: [function (data) {
    // Do whatever you want to transform the data
    let ret = ''
    // params = data
    for (const key in data) {
      const newKey = encodeURIComponent(key)
      // 检查value值 如果值为数组或对象 先转成Json字符串 再传值
      let newValue = ''
      if (typeof data[key] === 'object' && data[key] !== null && data[key] !== undefined) {
        // console.log('监测到对象元素' + key)
        newValue = encodeURIComponent(JSON.stringify(data[key]))
      } else {
        newValue = encodeURIComponent(data[key])
      }
      ret += newKey + '=' + newValue + '&'
    }
    ret = ret.substring(0, ret.length - 1)
    return ret
  }]
})

// request拦截器
service.interceptors.request.use((config) => {
  config.headers.accesstoken = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  config.headers.organizeCode = 'xd1Nf0882000'
  return config
}, (error) => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  (response) => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res && res.status === undefined) {
      return response.data
    } else if (res.status !== 'succ') {
      if (res.code === 40001) {
        Message({
          message: '登录已失效,请重新登录',
          type: 'error'
        })
        store.dispatch('Logout')
      } else {
        Message.error(res.message)
      }
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
