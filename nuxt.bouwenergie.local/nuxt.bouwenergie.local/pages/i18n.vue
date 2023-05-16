<template>
  <v-card>
    <v-layout>
      <v-app-bar title="Application bar"></v-app-bar>

      <Sidebar></Sidebar>

      <v-main style="min-height: 300px;">
        <label for="locale">locale</label>
        <v-select label="language" :items="['nl', 'en']"  v-model="$i18n.locale"></v-select>
        <p>message: {{ $t('hello') }}</p>
        <p>message: {{ $t('bye') }}</p>

        
      </v-main>
    </v-layout>
  </v-card>
</template>
