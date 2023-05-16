import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        name: "Tasks to do",
        tasks: [
            {id: 1, title: "understand pinia", isFav: false},
            {id: 1, title: "follow tutorial", isFav: false}
        ],
    })
})