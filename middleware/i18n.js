import { getCookiesInServer, getCookie } from '../utils'

export default function ({ isHMR, app, store, route, params, error, redirect, req }) {
  const defaultLang = app.i18n.fallbackLocale
  console.log('> defaultLang', defaultLang)
  const { lang } = process.client ? { lang: getCookie('lang') } : getCookiesInServer(req)
  console.log('> lang', lang)

  if (isHMR) { return }
  const language = lang || defaultLang
  console.log('> language', language)
  store.commit('SET_LANG', language)
  app.i18n.locale = store.state.lang
  console.log('> store lang', store.state.lang)
  //
  // if (language === defaultLang && route.fullPath.indexOf('/' + defaultLang) === 0) {
  //   const toReplace = '^/' + defaultLang + (route.fullPath.indexOf('/' + defaultLang + '/') === 0 ? '/' : '')
  //   const re = new RegExp(toReplace)
  //   console.log(route.fullPath.replace(re, '/'))
  //   return redirect(
  //     route.fullPath.replace(re, '/')
  //   )
  // }

  const routePath = route.path
  if (language === 'en' && !routePath.includes(`/${store.state.lang}/`)) {
    return redirect({ path: `/${store.state.lang}${routePath}`, query: route.query })
  }
}
