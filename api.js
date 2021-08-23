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
    ArrayPlants: async ({ownerID, token, limit = 20, offset = 0}) => {
        try {
            const { data } = await instance.get(`/farms/other/${ownerID}?limit=${limit}&offset=${offset}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            return data || []
        } catch (error) {
            console.log("ERORR", error)
        }
    },
    SavePlants : async (arrPlants) => {
        try {
            await axios.post("/api/api", arrPlants)
        } catch(err) {
            console.log(err)
        }
    }
}

