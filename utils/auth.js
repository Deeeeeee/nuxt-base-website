import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken () {
  return Cookies.get(TokenKey) || ''
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function setRootId (rootId) {
  return Cookies.set('rootId', rootId)
}
export function getRootId () {
  return Cookies.get('rootId')
}
export function romveRootId () {
  return Cookies.set('rootId', '')
}
