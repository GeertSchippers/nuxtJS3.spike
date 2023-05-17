import { setTransitionHooks } from "nuxt/dist/app/compat/capi";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        name: "Tasks to do",
        tasks: [
            {id: 1, title: "understand pinia", isFav: false},
            {id: 2, title: "follow tutorial", isFav: true}
        ],
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
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => {
                return task.id !== id
            })
        },
        toggleFav(id) {
            const task = this.tasks.find(task => task.id === id)
            task.isFav = !task.isFav
        }
    }
})