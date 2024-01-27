import axios from "axios";

const baseURL = "http://localhost:3000/museumsVisited"

const apiService = axios.create({
    baseURL
})

//Obtener todos los museos visitados 

export const getMuseumsVisiteds = () => apiService.get()
