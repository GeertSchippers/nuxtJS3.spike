<script setup>
    // you don't need this: only for testing purposes
    const date = useAppConfig().buildDate
</script>

  <template>
    <v-card>
      <v-layout>
        <v-app-bar title="Application bar"></v-app-bar>
  
        <Sidebar></Sidebar>
        <v-main style="min-height: 300px;">
        </v-main>
      </v-layout>
    </v-card>
  </template>