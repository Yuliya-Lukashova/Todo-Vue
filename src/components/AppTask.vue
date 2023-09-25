<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    task: {
      type: Object as PropType<{
        id: number;
        num: number;
        taskText: string;
        completed: boolean;
      }>,
      required: true,
    },
  },
  methods: {
    toggleTask() {
      this.$emit("toggleTask", this.task.id);
    },
    removeTask() {
      this.$emit("removeTask", this.task.id);
    },
  },
  emits: {
    toggleTask: (id: number) => Number.isInteger(id),
    removeTask: (id: number) => Number.isInteger(id),
  },
});
</script>
<template>
  <li class="task">
    <span class="num">{{ task.num }}</span>
    <p
      class="task-text"
      :class="{ 'task-done': task.completed }"
      @click="toggleTask"
    >
      {{ task.taskText }}
    </p>
    <button class="delete-task" @click.stop="removeTask">X</button>
  </li>
</template>

<style scoped>
.task-done {
  text-decoration: line-through;
}
.num {
  display: inline-block;
  padding: 2px 7px;
  background-color: #6c8b3f;
  border-radius: 50%;
  margin-right: 5px;
  height: 17px;
}
.task {
  display: flex;
  justify-content: center;
  align-items: center;
}
.task-text {
  font-family: "Mooli", sans-serif;
  margin-top: 15px;
  width: 400px;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  background-color: #d4d2c1;
}
.delete-task {
  background-color: #ad6745;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 19px;
  margin-left: 5px;
}
</style>
