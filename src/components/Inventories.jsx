import { useState } from "react"
import { Add, SerchIcon } from "../assets/icons"
import { options1 , options2 } from "../utils/options"
import DropDown from "./DropDown"
import InentoriesTable from "./InentoriesTable"
import ExcelUploade from "./ExcelUpload"


const Inventories = () => {
    const [option , setOption] = useState(" ");
    const [totalValue, setTotalValue] = useState(0);
    const [isUploadExcel , setIsUploadExcel] = useState(false)
  return (
    <div className="h-full  flex flex-col w-full  ">
           {
            isUploadExcel && <ExcelUploade
            closeUpload={setIsUploadExcel}
           />
           }
        <div className=" px-8 py-2 flex items-center justify-between border-b border-gray-300 max-md:flex-col max-md:items-start gap-6 w-full  ">
            <h2 className="text-2xl font-semibold"> Restaurant & Cafe Inventories</h2>
            {/* <DropDown
               name="category" 
               id="category"
               options = {options1}
            /> */}
        </div>
        <div className="overflow-y-auto">
        <div className="p-8   ">
            <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start gap-6">
                <h3 className="text-3xl font-semibold">
                Inventory</h3>
                <div>
                    <button className="text-white bg-green-700 border-none rounded-[4px] py-1 px-4  ">
                       <span className="flex items-center gap-1" onClick={() =>{
                        setIsUploadExcel(true);
                       }}><Add/> Add item</span> 
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-5 py-8">
                <div className="flex flex-col gap-1 justify-center pr-12 border-r border-gray-300">
                    <span className="text-gray-500 text-sm">PRODUCTS</span>
                    <span  className="text-2xl font-semibold">56</span>
                </div>

                <div className="flex flex-col gap-1 justify-center pr-12 border-r border-gray-300 max-sm:pr-8">
                    <span className="text-gray-500 text-sm"  >TOTAL STOCK VALUE</span>
                    <span className="text-2xl font-semibold ">{totalValue} Rs</span>
                </div> 
            </div>
             
            <div className="flex gap-4 ">
                <div className="max-sm:hidden">
                    <DropDown
                  name="items"
                  id = "items"
                  options={options2}
                  setOption = {setOption}
                  option = {option}
                />
                </div>
                
               
               <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pr-3 pointer-events-none text-gray-500 text-2xl">
                  <SerchIcon/>
                </div>
                    <input type="text" placeholder= {`Search ${option}`} className="select indent-10" />
            </div>
                
            </div>
            
        </div> 
        <InentoriesTable
            setTotalValue = {setTotalValue}
        />
        </div>
        

    </div>
  )
}

export default Inventories