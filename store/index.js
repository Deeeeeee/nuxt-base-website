import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      config
    }
  })
}

export default createStore
