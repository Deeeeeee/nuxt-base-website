import Vue from 'vue'
import dayjs from 'dayjs'

export function html2Text (val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.textContent
}

// 时间格式
/**
 * @return {string}
 */
export function Moment (timestamp, fmt) {
  return dayjs(timestamp).format(fmt)
}

const filters = {
  Moment
}

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
export default filters
