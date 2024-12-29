// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'static',
  },
  css: ['~/assets/css/main.css','@fortawesome/fontawesome-free/css/all.css'],
  plugins: ['~/plugins/fontawesome.js'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
 
 
