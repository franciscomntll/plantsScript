import axios from 'axios'

const instance = axios.create({ baseURL: "https://backend-farm.plantvsundead.com" })

export const api = {
    FetchOwner: async (x, y, token) => {
        try {
            const { data } = await instance.get(`/land/${x}/${y}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            return data.data.ownerId
        } catch (error) {
            console.log(error)
        }
    },
    ArrayPlants: async (ownerID, token) => {
        try {
            const { data } = await instance.get(`/farms/other/${ownerID}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            return data.data || data
        } catch (error) {
            console.log("ERORR", error)
        }
    },
}

