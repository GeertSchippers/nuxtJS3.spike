<template>
    <v-card>
      <v-layout>
        <v-app-bar title="Application bar"></v-app-bar>
  
        <Sidebar></Sidebar>
  
        <v-main style="min-height: 300px;">
            <div>
                <p>API response: {{data}}</p>
            </div>
        </v-main>
      </v-layout>
    </v-card>
</template>

<script setup>
    const { data } = await useFetch('https://platform.bouwenergie.local/api/testapi/')
</script>

<style lang="scss" scoped>

</style>