// console.log(process.env.NODE_ENV)
// console.log(process.env.NUXT_ENV_API)
const map = {
  'development': 'http://test.api.ececloud.cn/',
  'test': 'http://test.api.ececloud.cn/',
  'pre': 'http://pre.api.ececloud.cn/',
  'production': 'https://api.ececloud.cn'
}
export default map[process.env.NUXT_ENV_API]
