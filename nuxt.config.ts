export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-directus', '@vueuse/nuxt'],
  runtimeConfig: {
    public: {
      assetsUrl: 'https://api-d2cguru.preview.im/assets',
      directus: {
        url: 'https://api-d2cguru.preview.im/'
      }
    }
  },
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'D2C Guru',
      meta: [
        {
          name: 'description',
          content: `Find the best D2C brands in India on D2CGuru. Discover new launches, popular categories, and exclusive deals, from lifestyle to electronics, home decor to beauty, and everything in between. Your ultimate destination for India's top direct-to-consumer brands.`
        },

        // Open Graph
        {
          property: 'og:title',
          content: 'D2C Guru'
        },
        {
          property: 'og:description',
          content: "India's first unified commerce platform for D2C brands"
        },
        {
          property: 'og:type',
          content: 'website'
        },

        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },

        // Robots
        {
          name: 'robots',
          content: 'index, follow'
        }
      ],

      link: [
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-01-15',
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  }
})

