import { useState } from "react"
import { DownIcon } from "../assets/icons"
useState
const DropDown = ({name, id , options , setOption , option }) => {

  const OptionChange = (event) => {
    setOption(event.target.value); 
  };
  return (
    <div className="relative">
                <select 
                    name={name} 
                    id={id}
                    className="select"
                    value={option}
                    onChange={OptionChange}
                >
                    { options.map((option) =>(
                            <option value={option.value} key={option.id} >{option.title}</option>
                    ))
                    }
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-700">
                  <DownIcon/>
                </div>
            </div>
  )
}

export default DropDown