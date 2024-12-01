import { useState, useEffect } from "react"
import { EditIcon, ThreeDotIcon, DeleteIcon } from "../assets/icons"
import ExcelUploader from "./ExcelUpload"
const InentoriesTable = ({ setTotalValue }) => {
   const [activeThreeDot, setActiveThreeDot] = useState({ id: null, active: false })
   const Items = [
      {
         id: 1,
         itemName: "Milk Drink",
         expirationDate: "3 May 2021",
         quantity: 35,
         totalValue: "135800 ",
      },
      {
         id: 2,
         itemName: "Almond Drink",
         expirationDate: "3 May 2021",
         quantity: 35,
         totalValue: "135800",
      },
      {
         id: 3,
         itemName: "Almond Drink",
         expirationDate: "3 May 2022",
         quantity: 35,
         totalValue: "135800",
      },
      {
         id: 4,
         itemName: "Almond Drink",
         expirationDate: "3 May 2021",
         quantity: 35,
         totalValue: "135800",
      },
      {
         id: 5,
         itemName: "Almond Drink",
         expirationDate: "3 May 2020",
         quantity: 35,
         totalValue: "135800",
      },
   ];
   const [InventoryItem, setInventoryItem] = useState(Items);
   const [sortItem, setSortItem] = useState(Items)


   useEffect(() => {
      // Sort items by date
      const sorted = [...InventoryItem].sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate));
      setSortItem(sorted);
     
   }, [InventoryItem]);


   useEffect (() =>{
      const totalValue = sortItem.reduce((acc, item) => acc + Number(item.totalValue), 0);
      setTotalValue(totalValue)
   }, [sortItem])

   const handleThreeDotToggle = (id) => {
      setActiveThreeDot((prevState) => ({
         id: prevState.id === id ? null : id,
         active: prevState.id === id ? false : true,
      }));
   };

   const closeThreeDotMenu = () => {
      setActiveThreeDot({
         id: null,
         active: false,
      });
   };
   const DeleteItem = (id) => {
      setInventoryItem((prevItems) => prevItems.filter((item) => item.id !== id));
   };

   return (

      <div className="flex flex-col h-full " >
         <div className="grid grid-cols-6  border-b border-t border-purple-100 py-4 px-8 text-sm font-bold max-md:hidden  ">
            <span className="text-center">ITEM NAME</span>
            <span className="text-center">QUANTITY</span>
            <span className="text-center">TOTAL VALUE</span>
            <span className=" text-center">EXPIRATION DATE</span>
         </div>

         <div className="w-full ">
            {
               sortItem.map((item) => (
                  <div className=" grid  grid-cols-6 p-8 border-b border-t  text-sm gap-2" key={item.id}>
                     <span className="text-center "> <span className="hidden max-md:block font-bold text-gray-600">Item</span> {item.itemName} </span>
                     <span className=" text-center"> <span className="hidden max-md:block font-bold text-gray-600">Qty</span> {item.quantity}</span>
                     <span className="text-center"> <span className="hidden max-md:block font-bold text-gray-600">Value</span> {item.totalValue}</span>
                     <span className="text-center">  <span className="hidden max-md:block font-bold text-gray-600">Exp Date</span> {item.expirationDate}</span>
                     <div className="flex items-center gap-16 text-lg max-md:hidden relative text-center ml-4">

                        <span role="button">
                           <EditIcon />
                        </span>


                        <span
                           role="button"
                           onClick={() =>
                              handleThreeDotToggle(item.id)
                           }
                        >
                           <ThreeDotIcon />
                        </span>


                        <span
                           className={`${activeThreeDot.id === item.id && activeThreeDot.active
                              ? "block"
                              : "hidden"
                              } absolute p-2 bg-white top-5 left-5 text-sm flex items-center gap-1 shadow-md rounded-sm`}
                           role="button"
                           onClick={() => {

                              DeleteItem(item.id)
                           }}
                        >
                           <DeleteIcon /> Delete
                        </span>
                     </div>

                  </div>
               ))

            }
         </div>



      </div>
   )
}

export default InentoriesTable