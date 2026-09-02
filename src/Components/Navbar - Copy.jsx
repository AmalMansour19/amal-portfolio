import React from "react"


const Navbar = () => {
    return (
        <nav className="Navbar flex items-center justify-around px-8 py-2 top-0  bg-black/90 text-white shadow-xl">
            <div className="logo">
                <h1 className="text-4xl font-bold  text-blue-400">Portoflio</h1>
            </div>
            <ul className="hidden md:flex gap-8 text-gray-300">
                <li className="hover:text-blue-400 cursor-pointer text-xl font-bold ">Home</li>
                <li className="hover:text-blue-400 cursor-pointer text-xl font-bold ">Skills</li>
                <li className="hover:text-blue-400 cursor-pointer text-xl font-bold ">Projects</li>
            </ul>
            <div className="flex gap-3">

                {/* Facebook */}
                <a className="relative w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full overflow-hidden group text-xl">
                    <span className="absolute inset-0 bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                    <i className="fa-brands fa-facebook-f text-blue-400 relative z-10 group-hover:text-black transition text-2xl"></i>
                </a>

                {/* LinkedIn */}
                <a className="relative w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full overflow-hidden group text-xl">
                    <span className="absolute inset-0 bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                    <i className="fa-brands fa-linkedin-in text-blue-400 relative z-10 group-hover:text-black transition text-2xl"></i>
                </a>
                {/* github */}
                <a className="relative w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full overflow-hidden group text-xl">
                    <span className="absolute inset-0 bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                    <i className="fa-brands fa-instagram text-blue-400 relative z-10 group-hover:text-black transition text-2xl"></i>
                </a>
               
                {/* github */}
                <a className="relative w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full overflow-hidden group ">
                    <span className="absolute inset-0 bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                    <i className="fa-brands fa-github text-blue-400 relative z-10 group-hover:text-black transition text-2xl"></i>
                </a>



            </div>
            
            <div className="Button1">
                {/* <button className="hover:bg-blue-500 px-5 py-2 rounded-xl hover:bg-blue-600 transition text-lg border">let's connect</button> */}
                <button className="relative overflow-hidden px-7 py-3 rounded-xl border border-blue-500 text-white group text-xl">

                    {/* النص */}
                    <span className="relative z-10 group-hover:text-black transition">
                        Let's Connect
                    </span>

                    {/* animation layer */}
                    <span className="absolute left-0 top-0 w-0 h-full bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

                </button>
            </div>
        </nav>

    )
}

export default Navbar









