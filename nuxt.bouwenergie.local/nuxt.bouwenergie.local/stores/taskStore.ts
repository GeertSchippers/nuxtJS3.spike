import { setTransitionHooks } from "nuxt/dist/app/compat/capi";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        name: "Tasks to do",
        tasks: [],
        loading: false,
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((previous, current) => {
                return current.isFav ? previous + 1: previous
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        async getTasks() {
            this.loading = true;
            const { data }  = await useFetch(() => '/api/tasks')
            
            this.tasks = data.value.tasks
            this.loading = false
        },
        async addTask(task) {
            this.tasks.push(task)

            const res = await fetch('/api/tasks', {
                method: "POST",
                body: JSON.stringify(task),
                headers: {'content-Type' : 'application/json'}
            })

            if(res.error) {
                console.log(res.error)
            }
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(task => {
                return task.id !== id
            })

            const res = await fetch('/api/tasks/' + id, {
                method: "DELETE",
            })

            if(res.error) {
                console.log(res.error)
            }
        },
        async toggleFav(id) {
            const task = this.tasks.find(task => task.id === id)
            task.isFav = !task.isFav

            const res = await fetch('/api/tasks/' + id, {
                method: "POST",
                body: JSON.stringify({  isFav: task.isFav}),
                headers: {'content-Type' : 'application/json'}
            })

            if(res.error) {
                console.log(res.error)
            }
        }
    }
})