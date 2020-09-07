<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)==='/en' ? '/en/' : switchLocalePath(locale.code)"
    >
      <span @click="handleChangeLang(locale.code)">{{ locale.name }}</span>
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    showLocales () {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  },
  created () {
  },
  methods: {
    handleChangeLang (lang) {
      console.log(JSON.stringify(this.showLocales))
      this.$store.commit('SET_LANG', lang)
    }
  }
}
</script>
