// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  target: 'static',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Nuxt Template",
       htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'description', content: 'A Nuxt 3 template with Tailwind CSS'
        }
      ]
    },


  },

})
