<template>
    <VitePwaManifest />
    <v-navigation-drawer>
          <v-list>
            <v-list-item nuxt to="/" title="Home"></v-list-item>
            <v-list-item nuxt to="/about" title="About"></v-list-item>
            <v-list-item nuxt to="/users" title="Users"></v-list-item>
            <v-list-item nuxt to="/pinia" title="Pinia"></v-list-item>
            <v-list-item nuxt to="/task" title="Task"></v-list-item>
            <v-list-item nuxt to="/i18n" title="I18n"></v-list-item>
          </v-list>
    </v-navigation-drawer>
  </template>
  <script>
</script>