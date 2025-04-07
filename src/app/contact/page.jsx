"use client"
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { useState } from "react";

const Page = () => {
    const [number, setNumber] = useState(0)
    const [textEntered, setTextEntered] = useState("")
    const [hasSubmited, setHasSubmited] = useState("")
    const increment = () => {
        setNumber(number+1)
    }
    const decrement = () => { 
        setNumber(number > 0 ? number-1 : 0)
    }
    // function day of today
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date().getDay();
    var day = daysOfTheWeek[today];

    const handleSubmit = (e) => {
        e.preventDefault();
        // get the input value
        const inputValue = e.target[0].value;
        setHasSubmited(inputValue);
    }
    return (
        <>
        <NavbarComponent />
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-[40px] font-bold">The day of today is : {day=="Wednesday" ? "Wed":"Not Wed"} </h1>
            <h1 className="text-[150px] font-bold"> {number > 0 ? number : 0}  </h1>
            <div className="flex gap-5">
                <button onClick={increment} className="bg-amber-700 p-4 text-amber-50 cursor-pointer">increment</button>
                {number > 0 && <button onClick={decrement} className="bg-blue-800 p-4 text-amber-50 cursor-pointer">decrement</button>}
            
            </div>
            <form onSubmit={handleSubmit} >
                <div className="flex gap-5">
                <input value={textEntered} onChange={(e)=>setTextEntered(e.target.value)}  className="px-5 py-3 bg-[#ccc] outline-none w-[700px] font-bold" type="text" placeholder="Enter a value.." />
                <button  type="submit" className="bg-green-700 p-4 text-amber-50 cursor-pointer">Submit</button>
                </div>
                 <h1 className="text-center text-2xl font-bold mt-5">{hasSubmited} </h1>
            </form>
        </div>
        </>
    )
}

export default Page;