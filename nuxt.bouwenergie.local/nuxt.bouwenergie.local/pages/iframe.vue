  <template>
    <v-card>
      <v-layout>
        <v-app-bar title="Application bar"></v-app-bar>
  
        <Sidebar></Sidebar>
  
        <v-main style="min-height: 300px;">
            <iframe
              src="https://platform.bouwenergie.local/"
              width="100%"
              height="420"
              style="border: 1px solid #EEE; background: white"
              frameborder="0"
              scrolling="no"
            ></iframe>
            <iframe
              src="/testproxy/"
              width="100%"
              height="420"
              style="border: 1px solid #EEE; background: white"
              frameborder="0"
              scrolling="no"
            ></iframe>
        </v-main>
      </v-layout>
    </v-card>
  </template>