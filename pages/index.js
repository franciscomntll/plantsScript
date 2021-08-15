import { useEffect, useState } from "react"

import MagicBlock from "../components/MagicBlock"

const index = () => {
    const [jwt, setJWT] = useState("")
    
    return (
        <div className="max-w-screen-lg mx-auto inset-x-0 py-20 flex flex-col items-center justify-center">
            <InputField />
            <MagicBlock />
            
        </div>
    )
}

export default index

const InputField = ({onClick}) => {
    return (
        <div className="flex flex-col gap-1 items-center justify-center w-1/2">
        <label className="text-xl" for={"token"}>Ingresa aca tu JSON Web Token</label>
        <input name={"token"} id="token" type="text" placeholder="Ingresar token JWT" className="border rounded-md pl-5 focus:outline-none focus:ring transition w-full" />
        <button onClick={onClick} className="bg-blue-500 rounded-md px-6 py-1 text-white font-medium w-full">Enviar</button>
        </div>
    )
}