<template>
    <v-layout>
        <v-app-bar title="Application bar"></v-app-bar>
        <Sidebar></Sidebar>

        <v-main style="min-height: 300px;">
            <v-list-item nuxt to="/users/1" title="User 1"></v-list-item>
            <v-list-item nuxt to="/users/2" title="User 2"></v-list-item>
            <v-list-item nuxt to="/users/3" title="User 3"></v-list-item>
        </v-main>
    </v-layout>

</template>