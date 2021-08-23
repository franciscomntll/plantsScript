import Link from 'next/link'
const Navbar = () => {
    const List = [
        {title: "Inicio", route:"/"},
        {title: "¿Cómo conseguir el token?", route:"/como-conseguir-el-token"},
    ]
    return (
        <div className="w-full bg-blue-500 shadow-md h-14 font-display">
            <div className="max-w-screen-xl mx-auto inset-x-0 w-full h-full">
                <nav className="flex gap-4 items-center h-full">
                    {List.map((item,idx) => (
                        <Link href={item.route}>
                        <button className="text-white font-medium  focus:outline-none hover:bg-white px-2 py-1 hover:text-blue-500 transition rounded-md">{item.title}</button>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default Navbar
