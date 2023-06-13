import vuetify from 'vite-plugin-vuetify'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  css: ["vuetify/styles"],
  modules: [
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    }
  ],
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ],
    server: {
      hmr: {
        protocol: 'ws'
      },
    }
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: false,
    useStylesheet: true,
  },
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  pwa: {
    manifest: {
      name: "Nuxt3.bouwenergie.local",
      short_name: "Nuxt3",
      description: "spike for nuxt3",
      icons: [
        {
          "src": "icons/icon_114x114.png",
          "size": "114x114",
          "type": "image/png",
          "purpose": "any",
        },
        {
          "src": "icons/BouwEnergie.png",
          "size": "533x533",
          "type": "image/png",
          "purpose": "any",
        },
        {
          "src": "favicon.ico",
          "size": "114x114",
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
      ]
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module"
    },
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
    },
  },
    routeRules: {
      "bouwenergie/**": {
        proxy: {
        to: "https://platform.bouwenergie.local/",
        }
      },
    },
    nitro: {
      devProxy: {
        'testproxy': {
          target: 'https://platform.bouwenergie.local/',
          changeOrigin: true,
        }
      }
    }
})

