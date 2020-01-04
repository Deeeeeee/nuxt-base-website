let baseApi = ''
switch (process.env.NODE_ENV) {
  case 'production':
    baseApi = 'https://api.ececloud.cn'
    break
  case 'development':
    baseApi = 'https://test.api.ececloud.cn'
    break
  default:
    baseApi = 'https://' + process.env.NODE_ENV + '.api.ececloud.cn'
}
export default baseApi
