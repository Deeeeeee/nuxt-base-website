const enLocale = require('element-ui/lib/locale/lang/en')
const zhLocale = require('element-ui/lib/locale/lang/zh-CN')
const zh = require('./zh')
const en = require('./en')

// 加载element-ui语言包

const mergeZH = Object.assign(zhLocale.default, zh)
const mergeEN = Object.assign(enLocale.default, en)

const i18n = {
  locales: [
    {
      code: 'zh',
      iso: 'zh-ZH',
      name: '中文'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    }
  ],
  defaultLocale: 'zh',
  vueI18n: {
    fallbackLocale: 'zh',
    messages: {
      en: mergeEN,
      zh: mergeZH
    }
  }
}

module.exports = i18n
