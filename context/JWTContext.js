import { createContext, useState } from "react"

const initialContext = {
    jwt: "",
    setJWT: () => null,
}

const JWTContext = createContext(initialContext)

const JWTContextProvider = ({children}) => {
    const [jwt, setJWT] = useState(initialContext);
    return (
        <JWTContext.Provider value={{...jwt, setJWT}}>
            {children}
        </JWTContext.Provider>
    )
}

export { JWTContext, JWTContextProvider };
