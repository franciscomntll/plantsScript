import { useState, useEffect } from "react";
import { api } from "../api"
import JSON from '../prueba.json'

const MagicBlock = () => {
    const [ownerID, setOwnerID] = useState()
    const [plants, setPlants] = useState([])
    
    const ScriptPlants = async (token) => {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        const OwnerID = await api.FetchOwner(JSON[getRandomInt(0, JSON?.length)][0], JSON[getRandomInt(0, JSON?.length)][1], token)
        if(OwnerID) {
            setOwnerID(OwnerID)
            const ArrayPlants = await api.ArrayPlants({
                ownerID: OwnerID,
                token: token,
            })
            if (ArrayPlants) {
                for (let offset = 0; offset < ArrayPlants.total; offset += 20) {
                    const arrPlantsPage = await api.ArrayPlants({
                        ownerID: OwnerID,
                        token: token,
                        offset : offset
                    })

                    arrPlantsPage?.data?.forEach((item => {
                        const water = item?.activeTools?.find(item => item?.type?.toLowerCase() == "water")
                        if (water?.count <= 80) {
                            const url = `https://marketplace.plantvsundead.com/farm/#/farm/${item._id}`
                            window.open(url, '_blank');
                        }
                        
                        const date = new Date(water.endTime)
                        const dateStart = new Date(water.startTime)
                        console.log(dateStart, date, item._id)

                        if(item?.hasCrow) {
                            const url = `https://marketplace.plantvsundead.com/farm/#/farm/${item._id}`
                            window.open(url, '_blank');
                        }
                    }))
                    
                }
                //  ArrayPlants?.forEach((item => {
                //      const water = item?.activeTools?.find(item => item?.type?.toLowerCase() == "water")
                //      if (water?.count <= 80) {
                //          const url = `https://marketplace.plantvsundead.com/farm/#/farm/${item._id}`
                //          window.open(url, '_blank');
                //      }
                //  }))
            }
        } else {
            console.log("NO HAY OWNERID")
        }

        }

         useEffect(() => {
             //const interval = setInterval(() => {
                 ScriptPlants("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgwOTMyNzAyNjJmZWVmYTkwNGE5YWE5YzNiOWRiMjE3MTVlODAxM2Y1IiwibG9naW5UaW1lIjoxNjI5NjQ4MTM2NjA3LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xMiAxNTozMToxNSIsImlhdCI6MTYyOTY0ODEzNn0.dPhS471v3tGm5KTguuwl8U08QwrSKLZI7AnDPgNO0GU")
             //}, 2000);
             return () => {
             //    clearInterval(interval)
             }
         }, [])
    return (
        <div className="flex flex-col gap-6 py-20 w-full">
            <h2 className="text-gray-500">OwnerID es: <span className="font-medium text-gray-700">{ownerID}</span></h2>
                <h2 className="font-medium text-gray-700 uppercase text-left text-2xl">Historico de plantas</h2>
            <div className="w-full py-2 grid grid-cols-2 gap-4">
                <CardList />
                <CardList />
                <CardList />

            </div>
        </div>
    )
}

export default MagicBlock

const CardList = () => {
    return (
        <div className="w-full h-max border rounded-lg shadow-md py-4">
            Hola mundo
        </div>
    )
}