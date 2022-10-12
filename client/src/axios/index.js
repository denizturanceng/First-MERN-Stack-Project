import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'http://localhost:5000',
})

export const login = async(formData) => 
    await HTTP.post('/users/signin', formData);

export const register = async (formData) =>
    await HTTP.post("/users/signup", formData);    

export const createTodo = async (todoData) =>
    await HTTP.post('/todos/create_todo', todoData)

export const deleteTodo = async (todoData) =>
    await HTTP.delete('/todos/delete_todo', todoData)
