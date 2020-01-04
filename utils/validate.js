
/*手机号码*/
export function isPhone(str) {
  const reg = /^1[3456789]\d{9}$/
  return reg.test(str)
}
/*邮箱*/
export function isEmail(str) {
  const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return reg.test(str)
}

/*密码*/
export function isPassword(password) {
  return /^(\w){6,20}$/.test(password)
}
