import { defineStore } from "pinia";

interface Task {
  id: number;
  text: string
}

export const useStore = defineStore("store", {
  state: () => {
    return {
      tasks: [] as Task[],
    };
  },
  getters: {
    getTasks(state): Task[] {
      return state.tasks;
    },
  },
  actions: {
    addTask(task: Task): void {
      this.tasks.push(task);
    },
    removeTask(taskId: number): void {
      this.tasks.filter((task: Task) => task.id !== taskId);
    },
  },
});