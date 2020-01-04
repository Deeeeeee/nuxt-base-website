import Cookie from 'js-cookie'

/**
 * 本地存储
 */
export const setCookie = (name, content) => {
  if (!name) { return }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  Cookie.set(name, content)
}

/**
 * 获取localStorage
 */
export const getCookie = (name) => {
  if (!name) { return }
  if (typeof name !== 'string') {
    return JSON.parse(Cookie.get(name))
  } else {
    return Cookie.get(name)
  }
}

/**
 * 深拷贝 【这种方法能正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构】
 * @param object
 */
export function deepClone (object) {
  return JSON.parse(JSON.stringify(object))
}

export function getCookiesInServer (req) {
  const serviceCookie = {}
  req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (val) {
    const parts = val.split('=')
    serviceCookie[parts[0].trim()] = (parts[1] || '').trim()
  })
  return serviceCookie
}
export function isMobile () {
  // return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
}
