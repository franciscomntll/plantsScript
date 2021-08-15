import { useEffect, useState } from "react"
import { api } from "../api"
import JSON from '../prueba.json'
import router from 'next/router'

const index = () => {
    const [ownerID, setOwnerID] = useState()
    const [plants, setPlants] = useState([])
    const ScriptPlants = async (token) => {
        window.open("https://google.com", '_blank');
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        const OwnerID = await api.FetchOwner(JSON[getRandomInt(0, JSON?.length)][0], JSON[getRandomInt(0, JSON?.length)][1], token)
        if(OwnerID) {
            setOwnerID(OwnerID)
            const ArrayPlants = await api.ArrayPlants(OwnerID, token)
            console.log(ArrayPlants)
            if (ArrayPlants) {
                ArrayPlants.forEach((item => {
                    const water = item?.activeTools?.find(item => item?.name?.toLowerCase() == "water")
                    if (water?.count <= 90) {
                        const url = `https://marketplace.plantvsundead.com/farm/#/farm/${item._id}`
                        window.open(url, '_blank');
                    }
                }))
            }
        } else {
            console.log("NO HAY OWNERID")
        }

        }

        useEffect(() => {
            const interval = setInterval(() => {
                ScriptPlants("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgwOTMyNzAyNjJmZWVmYTkwNGE5YWE5YzNiOWRiMjE3MTVlODAxM2Y1IiwibG9naW5UaW1lIjoxNjI5MDM3MjAyNDA5LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xMiAxNTozMToxNSIsImlhdCI6MTYyOTAzNzIwMn0.I7EStjvcha-TAxI6-jFXuxS8WvHWU1FA5myEreQnquM")
            }, 2000);
            return () => {
                clearInterval(interval)
            }
        }, [])
    return (
        <div>
            {ownerID}
            <ul>
                {plants.map((item, idx) => (
                    <li>{ }</li>
                ))}
            </ul>
        </div>
    )
}

export default index
