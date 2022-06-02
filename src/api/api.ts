import axios from 'axios'
const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
    getAlbums: async () =>{
        let response = await axios.get(`${BASE}/albums`)
        return response.data
    },
    getFotos: async (id:string) =>{
        let response = await axios.get(`${BASE}/albums/${id}/photos`)
        return response.data
    },
    getFotoId: async (id:string) =>{
        let response = await axios.get(`${BASE}/photos/${id}`)
        return response.data
    }

}