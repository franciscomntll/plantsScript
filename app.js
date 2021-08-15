import axios from 'axios'

const instance = axios.create({ baseURL: "https://backend-farm.plantvsundead.com" })

const api = {
    FetchOwner: async (x, y, token) => {
        try {
            const { data } = await instance.get(`/land/${x}/${y}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            return data?.ownerId
        } catch (error) {
            console.log(error)
        }
    },
    ArrayPlants: async (ownerID, token) => {
        try {
            const { data } = await instance.get(`/${ownerID}`, {
                headers: {
                    "Authorization": `Bearerddd ${token}`
                }
            })
            return data
        } catch (error) {
            console.log("ERORR", error)
        }
    },
}

const ScriptPlants = async (token) => {
    const OwnerID = await api.FetchOwner(-11, 8, token)
    console.log(OwnerID)
}
ScriptPlants("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgwOTMyNzAyNjJmZWVmYTkwNGE5YWE5YzNiOWRiMjE3MTVlODAxM2Y1IiwibG9naW5UaW1lIjoxNjI4ODc5MjkwMDU5LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xMiAxNTozMToxNSIsImlhdCI6MTYyODg3OTI5MH0.BtSlBOgJ8vLtw5GZN4NycSGMBHFqqyTP5N5u433Pchw")