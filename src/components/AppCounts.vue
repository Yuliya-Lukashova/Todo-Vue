<script lang="ts">

</script>

<template>
  <div>
    <div class="todo__counts">
        <button class="count" type="submit">All (0)</button>
        <button class="count" type="submit">Completed (0)</button>
        <button class="count" type="submit">Active (0)</button>
      </div>
  </div>
</template>

<style scoped>
.count {
  background-color: #6c8b3f;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transition: .9s ease;
  width: 130px;
}
.todo__counts {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
</style>
