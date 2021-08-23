import { useContext, useEffect, useState } from "react"

import MagicBlock from "../components/MagicBlock"
import { JWTContext } from "../context/JWTContext"

const index = () => {
    const {jwt} = useContext(JWTContext)
    return (
        <div className="xl:max-w-screen-lg lg:max-w-screen-md px-5 md:px-0 mx-auto inset-x-0 py-6 flex flex-col items-center justify-center">
            <img src="https://plantvsundead.com/assets/img/Logo%20game.png" className="object-contain w-40" />
            <h1 className="font-display font-bold text-3xl py-3 transform hover:scale-115 transition text-blue-500 ">Te busco una planta por una caja de 🍺🍺</h1>
            {jwt !== "" ? <TokenCargado jwt={jwt}/> : <InputField />}
            <MagicBlock />
            
        </div>
    )
}

export default index

const InputField = () => {
    const {setJWT} = useContext(JWTContext)
    const [value, setValue] = useState("")
    return (
        <div className="flex flex-col gap-1 items-center justify-center w-full">
        <label className="text-sm w-full text-left font-medium" for={"token"}>Ingresa aca tu JSON Web Token</label>
        <input name={"token"} id="token" type="text" placeholder="Ej. Ey....." className="border rounded-md pl-5 focus:outline-none focus:ring transition w-full" onChange={e => setValue(e.target.value)} />
        <button onClick={() => setJWT(value)} className="bg-blue-500 rounded-md px-6 py-1 text-white font-medium w-full">Enviar</button>
        </div>
    )
}

const TokenCargado = ({jwt}) => {
    return (
        <div className="p-6 bg-white w-full">
            ¡Tu token ha sido cargado con exito!
            {jwt}
        </div>
    )
}

