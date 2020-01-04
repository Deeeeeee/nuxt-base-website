import Vue from 'vue'
import { Message, Notification } from 'element-ui'
import { getCookie } from '@/utils'

const common = {
  install (Vue) {
    Vue.prototype.$fn = {
      'getFirstNameCode': (str) => {
        let val = ''
        for (const i in str) {
          if (Number(i) === 0) {
            val += str[i]
          }
        }
        return val.charCodeAt()
      },
      'parseName': (str) => {
        let val = ''
        for (const i in str) {
          if (Number(i) === str.length - 1 || Number(i) === str.length - 2) {
            val += str[i]
          }
        }
        return val
      },
      'isMobile': () => {
        return getCookie('BROWSER_MODE') === 'h5'
      }
    }
    Vue.prototype.$message = Message
    Vue.prototype.$notify = Notification
  }
}

Vue.use(common)
