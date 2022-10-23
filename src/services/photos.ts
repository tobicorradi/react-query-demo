import api from "../api"
import { Photo } from "../types"

export const photos = {
    getAll: async (): Promise <Photo[]> => {
        const { data } = await api.get('/photos')
        return data.slice(0, 100)
    }
}