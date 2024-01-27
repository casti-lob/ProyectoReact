import axios  from "axios";

const baseURL = "http://localhost:3000/users"

const apiService = axios.create({
    baseURL
})

//obtener todos los usuarios
export const getUsers = ()=> apiService.get();
//obtener un usuario
export const getUser = (userId)=>{
    return apiService.get(`/${userId}`)
}
//crear un usuario
export const postUser =(user)=>{
    return apiService.post('/',user)
}
//actualizar un usuario
export const updateUser =(userId,updateUser)=>{
    return apiService.put(`/${userId}`, updateUser)
}
//eliminar un usuarios
export const deleteUser =(userId)=>{
    return apiService.delete(`${userId}`)
}