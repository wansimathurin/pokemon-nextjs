import React from 'react'
import { FaHeart } from "react-icons/fa";

export default function CardComponent() {
  return (
    <div className="border-2 relative w-[400px] h-[560px] overflow-hidden border-gray-200  rounded-md">
                {/* image area */}
                <div className="flex overflow-hidden justify-center items-center w-full bg-gray-200">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" width="100%" height="100%"/>
                </div>
                {/* content area */}
                <div className="mt-4 p-4">
               <h1 className="text-2xl font-bold ">Hello World</h1>
                    <FaHeart size={25} color="red" className="absolute top-2 right-2 cursor-pointer"/>
                    <p c                    lassName="text-gray-600  mt-2">This is a simple card component with.</p>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full cursor-pointer hover:bg-blue-600 transition duration-300">Click Me</button>
                </div>
     </div>
  )
}
