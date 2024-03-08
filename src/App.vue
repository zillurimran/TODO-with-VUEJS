<script setup>
import { onMounted } from 'vue';
import {useTodoStore} from './stores/todo'
const todoStore = useTodoStore();

onMounted(()=>{
  todoStore.getAllTodos()
})
</script>

<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
              <h4 class="Card-title text-center">Task List</h4>
              <form action="">
                <div class="mb-3">
                  <label class="form-label">Add New Task</label>
                  <input type="text" class="form-control">
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-success">Add Task</button>
                </div>
              </form>
            </div>
          <div class="card-body">
              <h4 class="Card-title text-danger">Tasks</h4>
              <ul class="list-group">
                  <li  v-for="todo in todoStore.todos" :key="todo.id"  class="list-group-item d-flex justify-content-between align-items-center">
                    <span :class="todo.completed ? 'text-decoration-line-through' : ''">{{ todo.title }}</span>
                    <a href="" class="btn rounded-circle text-bg-danger">
                      <i class="fa-solid fa-xmark"></i>
                    </a>
                  </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>

</style>
