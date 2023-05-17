<template>
    <v-card>
        <v-layout>
            <v-app-bar title="Application bar"></v-app-bar>

            <Sidebar></Sidebar>




            <v-main style="min-height: 300px;">

            <!-- new task form -->
            <div class="new-task-form">
                <TaskForm></TaskForm>
            </div>
            <!-- filter -->
            <v-switch
                v-model="filter"
                hide-details
                inset
                color="secondary"
                value="secondary"
                true-value="favs"
                false-value="all"
                :label="`Only show favorites`"
            ></v-switch>

            <!-- loading -->
            <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

            <!-- task lists -->

                <div class="task-list" v-if="filter === 'all'">
                    <h3>You have {{ taskStore.totalCount }} tasks left to do.</h3>
                    <div v-for="task in taskStore.tasks">
                        <TaskDetails :task="task"></TaskDetails>
                    </div>
                </div>
                <div class="task-list" v-if="filter === 'favs'">
                    <h3>You have {{ taskStore.favCount }} favs left to do.</h3>
                    <div v-for="task in taskStore.favs">
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

            taskStore.getTasks()

            const filter = ref('all')

            return {taskStore, filter}
        }
    }
</script>
  
<style scoped>
button {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}
/* loading state */
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>
  