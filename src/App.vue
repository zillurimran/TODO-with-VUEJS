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
                  <label class="form-label" v-if="!todoStore.isEdit">Add New Task</label>
                  <label class="form-label" v-else>Update Task</label>
                  <input type="text" class="form-control" v-model="todoStore.todoForm.title">
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-success" @click.prevent="todoStore.storeTodo" v-if="!todoStore.isEdit">Add Task</button>
                  <button type="submit" class="btn btn-warning" @click.prevent="todoStore.updateTodo(todoStore.editId)" v-else>Update Task</button>
                </div>
              </form>
            </div>
          <div class="card-body">
              <h4 class="Card-title text-danger">Tasks</h4>
              <ul class="list-group">
                  <li  v-for="todo in todoStore.todos" :key="todo.id"  class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <input type="checkbox" name="" id="" class="form-input-check me-2" :checked="todo.completed">
                      <span :class="todo.completed ? 'text-decoration-line-through' : ''">{{ todo.title }}</span>
                    </div>
                    <div class="d-flex gap-1">
                      <button class="btn rounded-circle text-bg-warning" @click.prevent="todoStore.getTodo(todo.id)">
                        <i class="fa-solid fa-edit"></i>
                      </button>
                      <button class="btn rounded-circle text-bg-danger" @click.prevent="todoStore.deleteTodo(todo.id)">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    </div>
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
