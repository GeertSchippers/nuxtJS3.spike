  <template>
    <v-card>
      <v-layout>
        <v-app-bar title="Application bar"></v-app-bar>
  
        <Sidebar></Sidebar>
  
        <v-main style="min-height: 300px;">
            <iframe
        src="/bouwenergie/"
        width="100%"
        height="890"
        style="border: 1px solid #EEE; background: white"
        frameborder="0"
        scrolling="no"
      ></iframe>

        </v-main>
      </v-layout>
    </v-card>
  </template>
    <script>
    export default {
      data() {
        return {
          title: "Hello Nuxters!",
        };
      },
    };
    </script>