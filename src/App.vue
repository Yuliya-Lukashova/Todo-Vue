<script setup lang="ts">
import AppCounts from './components/AppCounts.vue';
import AppTasks from './components/AppTasks.vue';
</script>

<template>
  <div class="todo">
    <AppTasks/>
    <AppCounts/>
  </div>
</template>

<style scoped>
.todo {
  padding: 30px;
  background-color: #d5d2b9;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  font-family: 'Mooli', sans-serif;
}
</style>
