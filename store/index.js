// import Vue from 'vue'
import Vuex from 'vuex'
import md5 from 'js-md5'
// import fetch from '~/utils/fetch'
import { isMobile } from '@/utils'
import { setToken, removeToken, setRootId, romveRootId } from '@/utils/auth'
import { login, getInfo, logout } from '@/api/login'
import { getCookiesInServer } from '@/utils'

// const TokenKey = 'token'

const store = () => new Vuex.Store({

  state: {
    isMobile: process.cilent ? isMobile() : undefined,
    lang: '',
    token: '',
    userInfo: ''
  },
  mutations: {
    SET_LANG (state, lang) {
      state.lang = lang
    },
    SET_TOKEN (state, token) {
      state.token = token
      setToken(token)
    },
    SET_USER_INFO (state, data) {
      state.userInfo = data
    }
  },
  getters: {
    isMobile: state => state.isMobile,
    token: state => state.token,
    userInfo: state => state.userInfo
  },
  actions: {
    nuxtServerInit ({ commit }, { req, res, store }) {
      const cookies = getCookiesInServer(req)
      const token = cookies.token || null
      if (req.headers.cookie) {
        commit('SET_TOKEN', token)
      } else {
        commit('SET_TOKEN', '')
      }
    },

    // 登录
    Login ({ commit }, data) {
      const username = data.phone.trim()
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(data.password).toUpperCase()
        }).then((res) => {
          console.log(data)
          if (res.data.organizes.length > 0) {
            setRootId(res.data.organizes[0].organizeId)
          }
          commit('SET_TOKEN', res.data.accesstoken)

          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then((res) => {
          const data = res.data
          commit('SET_USER_INFO', data)
          commit('SET_TOKEN', res.data.accesstoken)
          if (res.data.organizes.length > 0) {
            setRootId(res.data.organizes[0].organizeId)
          }
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          romveRootId()
          removeToken()
          resolve()
        }).catch((error) => {
          reject(error)
        })
      })
    },

    // 前端登出
    FELogout ({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        romveRootId()
        removeToken()
        resolve()
      })
    }
  }

})

export default store
