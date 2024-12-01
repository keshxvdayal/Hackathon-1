import Nav from "../components/Nav"
import { useState } from "react"
import Inventories from "../components/Inventories";
import { MenuIcon } from "../assets/icons";
import Orders from "../components/Orders";
import Analytics from "../components/Analytics";
import Reports from "../components/Profile";
MenuIcon
const MainApp = () => {
  const [active, setActive] = useState(1);
  const [sideBarActive , setSideBarActive] = useState(false)

  const displayData = () =>{
    switch(active){
      case 1: 
      return <Inventories />
      case 2:
        return <Orders/>
      case 3:
        return <Analytics/>
      case 4:
        return <Reports />
      default:
        return <Inventories />
    }
  }
  return (
    <div className=" p-4 h-[100vh] bg-gray-50 flex gap-3 w-full relative ">
       <Nav
         active = { active}
         setActive = {setActive}
         sideBarActive = {sideBarActive}
         setSideBarActive = {setSideBarActive}
       />  
      <main className="flex-1 border-l border-gray-300  relative  w-full ">
            <div className="hidden max-md:block px-2 text-3xl ml-auto absolute right-2 top-2 w-full" role="button" onClick={() => setSideBarActive(true)}><MenuIcon/></div>
            {
              displayData()
            }
      </main>
    </div>
  )
}

export default MainApp