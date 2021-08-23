import Navbar from "../components/Navbar"
import { JWTContextProvider } from "../context/JWTContext"

const DefaultLayout = ({children}) => {
    return (
        <JWTContextProvider>
        <div className="w-full bg-gray-100">
            <Navbar/>
            {children}
        </div>
        </JWTContextProvider>
    )
}

export default DefaultLayout


