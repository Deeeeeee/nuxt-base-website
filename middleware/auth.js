import Cookie from 'js-cookie'
// import { getInfo } from '~/api/login'
import { getCookiesInServer } from '@/utils'
const TokenKey = 'token'

export default function ({ route, req, res, redirect, error, store }) {
  // const {token} = Cookie.get(req) || ''
  // if (token) {
  //   store.dispatch('SetToken', token)
  //   return store.dispatch('GetInfo')
  // }
  // const routePath = route.path
  // const extraPath = ['/']
  // if ((!store.state.token) && extraPath.indexOf(routePath) === -1) {
  //   // 跳转到登录页面
  //   // return redirect('/login')
  // }

  // 获取客户端cookie
  function getCookiesInClient (key) {
    return Cookie.get(key) ? Cookie.get(key) : ''
  }

  // console.log(route)
  const isClient = process.client
  const isServer = process.server
  let authUser, path
  // 在服务端
  if (isServer) {
    const cookies = getCookiesInServer(req)
    if (req) {
      path = req.originalUrl
    }
    authUser = cookies[TokenKey] ? cookies[TokenKey] : ''
  }

  // 在客户端判读是否需要登陆
  if (isClient) {
    authUser = getCookiesInClient(TokenKey)
    path = route.path
  }
  // 需要进行权限判断的页面开头
  if (authUser && path === '/login') {
    redirect('/')
  }
}
