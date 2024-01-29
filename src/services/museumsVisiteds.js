import axios from "axios";

const baseURL = "https://proyecto-node-basico.vercel.app/museumsVisited"

const apiService = axios.create({
    baseURL
})

//Obtener todos los museos visitados 

export const getMuseumsVisiteds = () => apiService.get()
