import axios from "axios";

export const  baseUrl = "http://lara-project-api.test/"
export const  baseurlApi = `${baseUrl}api/`;

export const api = axios.create({
    baseURL:baseurlApi,
    headers:{
        "Content-Type": 'application/json',
    }
})


