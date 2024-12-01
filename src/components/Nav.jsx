import {  SignOut } from "../assets/icons"
import { menuItem } from "../utils/menu"



const Nav = ({active, setActive, setSideBarActive ,sideBarActive}) => {
  return (
    <div className={`w-[250px] flex flex-col gap-5 h-full px-2 py-4  z-10 max-lg:absolute max-lg:w-full max-lg:right-0  max-lg:bg-white max-lg:top-0 max-lg:p-8 ${sideBarActive ? "flex " : "max-lg:hidden "}`}>
        <div className={`absolute right-4 hidden max-lg:block text-xl`} role="button" onClick={() => setSideBarActive(false)}>X</div>
        <h2 className="text-xl ">RESTAURANT & CAFE</h2>
        <div className="flex flex-col gap-5  text-lg  border-b border-gray-300  h-full" >
          { menuItem.map((item) => (
               <div className={`flex gap-4 w-full items-center ${active === item.id ? "text-green-700" : "text-gray-700"} transition`} key={item.id}  role="button" onClick={() => {setActive(item.id)
                setSideBarActive(false)
               }}>
               <span>{item.icon}</span>
               <span>{item.title}</span>
           </div>
          ))
          }
        </div>
        <div className="flex gap-4 w-full items-center mt-auto  text-lg  max-md:mt-0" role="button">
                <span><SignOut/></span>
                <span>Log-out</span>
            </div>
    </div>
  )
}

export default Nav