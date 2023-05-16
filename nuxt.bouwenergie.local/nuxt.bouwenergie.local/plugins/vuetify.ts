import { createVuetify } from 'vuetify'
import {aliases, mdi} from "vuetify/lib/iconsets/mdi";
// make sure to also import the coresponding css
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {
        global: {
            ripple: true,
          },
    },
    theme: {
        defaultTheme: 'dark'
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
          mdi
      }
  },
  })

  nuxtApp.vueApp.use(vuetify)
})