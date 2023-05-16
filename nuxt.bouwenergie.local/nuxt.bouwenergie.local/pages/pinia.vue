<template>
    <v-card>
        <v-layout>
            <v-app-bar title="Application bar"></v-app-bar>

            <Sidebar></Sidebar>

            <v-main style="min-height: 300px;">
                <h2>Counter Store</h2>

                <p data-testid="counter-values">
                    Counter: {{ counter.n }}. Double: {{ counter.double }}
                </p>

                <p>Increment the Store:</p>

                <v-btn @click="counter.increment()" data-testid="increment">+1</v-btn>
                <v-btn @click="counter.increment(10)">+10</v-btn>
                <v-btn @click="counter.increment(100)">+100</v-btn>
                <v-btn @click="counter.n++">Direct Increment</v-btn>
                <v-btn @click="
                    counter.$patch((state) => {
                        state.n++
                        state.incrementedTimes++
                    })
                    ">
                    Direct patch
                </v-btn>

                <p>Other actions:</p>

                <v-btn @click="counter.fail">Test Errors</v-btn>
                <v-btn @click="counter.decrementToZero()">Decrement to zero</v-btn>
                <v-btn @click="counter.changeMe()">
                    <code>counter.changeMe()</code>
                </v-btn>

                <hr />

                <p>
                    Complete store state via
                    <code>store.$state</code>:
                </p>

                <pre>{{ counter.$state }}</pre>
            </v-main>
        </v-layout>
    </v-card>
</template>
  
<script setup lang="ts">
const counter = useCounter()

  // if (process.server) {
  //   counter.n = 20
  // }
</script>
  
<style scoped>
button {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
  