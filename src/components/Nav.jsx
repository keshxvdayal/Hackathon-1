import { InventoryIcon, OrderIcon, SignOut } from "../assets/icons"

const Nav = () => {
  return (
    <div className="w-[250px] flex flex-col gap-5 border-r-2 border-gray-300 h-full">
        <h2 className="text-xl ">RESTAURANT & CAFE</h2>
        <div className="flex flex-col gap-3 w-full text-lg  py-4" >
            <div className="flex gap-4 w-full items-center text-green-800" role="button">
                <span><InventoryIcon/></span>
                <span>Inventories</span>
            </div>
            <div className="flex gap-4 w-full items-center" role="button">
                <span><OrderIcon/></span>
                <span>Orders</span>
            </div>
        </div>
        <div className="flex gap-4 w-full items-center mt-auto" role="button">
                <span><SignOut/></span>
                <span>Log-out</span>
            </div>
    </div>
  )
}

export default Nav