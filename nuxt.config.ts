// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    'unplugin-icons/nuxt',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxthub/core',
  ],
  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: ['/account', '/account/**', '/profile', '/profile/**'],
      exclude: ['/profile', '/profile/**', '/login', '/login/**', 'signup', 'signup/**'],
      saveRedirectToCookie: false,
    },
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
  css: ['~/assets/css/font.css', '~/assets/css/main.css'],
})