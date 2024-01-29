import axios from "axios";

const baseURL = "https://proyecto-node-basico.vercel.app/museums"

const apiService = axios.create({
    baseURL
})
//obtiene todos los museos
export const getMuseums = () => apiService.get()
//obtiene un museo
export const getMuseum = (museumId)=>{
    return apiService.get(`/${museumId}`)
}
//Crea un museo
export const postMuseum =(museum)=>{
    return apiService.post('/',museum)
}
//actualiza un producto
export const updateMuseum =(museumId,updateMuseum)=>{
    return apiService.put(`/${museumId}`, updateMuseum)
}

//eliminar un museo
export const deleteMuseum =(museumId)=>{
    return apiService.delete(`${museumId}`)
}
