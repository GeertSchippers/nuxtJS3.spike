<template>
    <v-layout>
        <v-app-bar title="Application bar"></v-app-bar>
        <Sidebar></Sidebar>
        <v-main style="min-height: 300px;">
            <v-card>
                <v-title>this user has number {{ id }}</v-title>
            </v-card>
        </v-main>
    </v-layout>

</template>
<script setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>