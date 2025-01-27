import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";


const Navbar = () => {
  return (
   <header className="w-screen flex justify-between items-center py-5 px-8 lg:px-16">
    <nav className="flex justify-between items-center w-full screen-max-width">
        <img src={appleImg} alt="apple logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav) => (
                <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" key={nav}>{nav}</div>
                ))}
        </div>
       <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
        <img src={searchImg} alt="search icon" width={18} height={18} />
        <img src={bagImg} alt="bag icon" width={18} height={18} />
        
       </div>
        
    </nav>
   </header>
  )
}

export default Navbar