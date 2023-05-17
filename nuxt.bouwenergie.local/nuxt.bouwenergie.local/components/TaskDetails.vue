<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <v-icon 
              icon="mdi-delete"
              @click="taskStore.deleteTask(task.id)"
              ></v-icon>
            <v-icon 
              :class="{active: task.isFav}"
              icon="mdi-heart"
              @click="taskStore.toggleFav(task.id)"
            ></v-icon>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['task'],
        setup() {
          const taskStore = useTaskStore()

          return {taskStore}
        }
    }
</script>
<style>
/* task list */
.task-list {
  max-width: 640px;
  margin: 20px auto;
}
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task h3, .task .icons {
  display: inline-block;
  color: black;
}
.task .icons {
  text-align: right;
}
.task i {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}
.task i.active{
  color: #ff005d;
}
/* new task form */
.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}
form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
form button {
  background: #ffd859;
  border: 0;
  padding: 10px;
  font-family: "Poppins";
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}
form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}
</style>