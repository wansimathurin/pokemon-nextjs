"use client"
import NavbarComponent from "@/components/navbar/NavbarComponent";
import CardComponent from "@/components/card/CardComponent";

const Page = () => {
   
    return (
        <>
            <NavbarComponent />
            <div className="flex flex-wrap gap-5 p-5 justify-center items-center h-screen">
            <CardComponent />
            </div> 
        </>
       
    )
}
export default Page;