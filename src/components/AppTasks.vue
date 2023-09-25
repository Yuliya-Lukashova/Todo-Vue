<script lang="ts">

</script>

<template>
    <p class="todo__title">TODO APP</p>
    <form 
      class="input-wrapper"
      >
        <input 
          class="todo-input"
          placeholder="Enter task text..."
          type="text">
        <button class="add-button" type="submit">Add</button>
      </form>
      <p class="todo__title">List of tasks for today:</p>
      <ul class="tasks">
        <li class="task">
          <span class="num">1</span>
          <p class="task-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button class="delete-task">X</button>
        </li>
        <li class="task">
          <span class="num">2</span>
          <p class="task-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button class="delete-task">X</button>
        </li>
        <li class="task">
          <span class="num">3</span>
          <p class="task-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button class="delete-task">X</button>
        </li>
      </ul>
</template>

<style scoped>
.todo__title {
  text-align: center;
  font-size: 25px;
}
.tasks {
  list-style-type: none;
  margin-top: 40px;
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
  font-family: 'Mooli', sans-serif;
  margin-top: 15px;
  width: 400px;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  background-color: #d4d2c1;
}
.input-wrapper {
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
}

.input-wrapper input {
  width: 400px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(15, 14, 14, 0.3);
  margin-left: 70px;
}

.add-button {
  background-color: #6c8b3f;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: .9s ease;
}

.add-button[type="submit"]:hover {
  transform: scale(1.1);
  color: rgb(255, 255, 255);
  background-color: #6c8b3f;
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