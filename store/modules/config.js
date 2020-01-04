import { getCookie } from '@/utils'
export default {
  state: {
    isMobile: getCookie('BROWSER_MODE') === 'h5'
  },

  getters: {
    isMobile: state => state.isMobile
  },

  mutations: {
    'SET_MOBILE_FLAG' (state, value) {
      state.isMobile = value
    }
  },
  actions: {
    setMobileFlag ({ commit }, value) {
      commit('SET_MOBILE_FLAG', value)
    }
  }
}
