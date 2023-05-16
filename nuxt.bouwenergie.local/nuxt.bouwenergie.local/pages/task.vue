<template>
    <v-card>
        <v-layout>
            <v-app-bar title="Application bar"></v-app-bar>

            <Sidebar></Sidebar>

            <v-main style="min-height: 300px;">
                <div class="task-list">
                    <h3>{{ taskStore.name }}</h3>
                    <div v-for="task in taskStore.tasks">
                        <TaskDetails :task="task"></TaskDetails>
                    </div>
                </div>
            </v-main>
        </v-layout>
    </v-card>
</template>
  
<script>
    import { useTaskStore } from '~~/stores/taskStore';

    export default {
        setup() {
            const taskStore = useTaskStore()

            return {taskStore}
        }
    }
</script>
  
<style scoped>
button {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>
  