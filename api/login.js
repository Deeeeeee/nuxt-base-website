import fetch from '@/utils/fetch'
export function login (param) {
  return fetch({
    url: '/official/person/login',
    method: 'post',
    data: {
      ...param
    }
  })
}
// 获取验证码
export function getCaptcha (param) {
  return fetch({
    url: '/official/person/captcha',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 注册
export function register (param) {
  return fetch({
    url: '/official/person/regist',
    method: 'post',
    data: {
      ...param
    }
  })
}

export function logout () {
  return fetch({
    url: '/official/person/logout',
    method: 'post'
  })
}

// 忘记密码第一步
export function forgetPsw (param) {
  return fetch({
    url: '/official/person/forgetPassword',
    method: 'post',
    data: {
      ...param
    }
  })
}

export function getInfo () {
  return fetch({
    url: '/official/person/info',
    method: 'post'
  })
}
// 信息编辑
export function personEdit (param) {
  return fetch({
    url: '/official/person/edit',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 绑定手机
export function bindPhone (param) {
  return fetch({
    url: '/official/person/bindPhone',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 验证密码
export function checkPsw (param) {
  return fetch({
    url: '/official/person/validatePassword',
    method: 'post',
    data: {
      ...param
    }
  })
}

// 重置密码
export function resetPsw (param) {
  return fetch({
    url: '/official/person/resetPassword',
    method: 'post',
    data: {
      ...param
    }
  })
}
//

// 申请入驻
export function apply (param) {
  return fetch({
    url: '/official/organizeStation/add',
    method: 'post',
    data: {
      ...param
    }
  })
}
//
