import api from "../assets/api"

export const photos = {
    getAll: () => {
        return api.get('/photos').then(response => response.data)
    }
}