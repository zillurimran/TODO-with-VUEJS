import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore('todo',{
    state: ()=>({
        todos:  [],
        todoForm: {
            "userId": 2,
            "title": null,
            "completed": false
        },
        isEdit: false,
        editId: 0,
    }),
    getters:{

    },
    actions:{
        async getAllTodos(){
          const {data} =  await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.todos = data;
        },

        async storeTodo(){
            const {data} = await axios.post('https://jsonplaceholder.typicode.com/todos', this.todoForm);
            this.todos.push(data);
            this.todos.reverse();
            this.todoForm.title = null;
        },

        async deleteTodo(id){
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            this.todos = this.todos.filter(todo => {
                    return todo.id != id
            })
        },

        async getTodo(id){
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            this.todoForm.title = data.title;
            this.isEdit = true;
            this.editId = id;
        },

        async updateTodo(id){
            const {data} = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, this.todoForm)
            this.todos.push(data);
            this.todos.reverse();
            this.todoForm.title = null;
            this.isEdit = false;

        }
    }
})