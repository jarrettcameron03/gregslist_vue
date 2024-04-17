import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
    async deleteHouse(house) {
        const index = AppState.houses.findIndex(x => x == house)
        if (index == -1) throw new Error("Couldn't find house!")
        await api.delete(`/api/houses/${house.id}`)
        AppState.houses.splice(index, 1)
    }

    async postHouse(houseData) {
        const response = await api.post('/api/houses', houseData)
        AppState.houses.unshift(new House(response.data))
    }

    async loadHouses() {
        const response = await api.get('/api/houses')
        response.data.reverse()
        AppState.houses = response.data.map(x => new House(x))
    }
}

export const housesService = new HousesService()