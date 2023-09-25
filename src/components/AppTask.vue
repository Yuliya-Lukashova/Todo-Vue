<script lang="ts">

</script>

<template>
        <li class="task">
          <span class="num">1</span>
          <p class="task-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button class="delete-task">X</button>
        </li>
</template>

<style scoped>
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
  font-family: 'Mooli', sans-serif;
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