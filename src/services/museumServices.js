import axios from "axios";

const baseURL = "http://localhost:3000/museums"

const apiService = axios.create({
    baseURL
})

export const getMuseums = () => apiService.get()

export const getMuseum = (museumId)=>{
    return apiService.get(`/${museumId}`)
}

export const postMuseum =(museum)=>{
    return apiService.post('/',museum)
}