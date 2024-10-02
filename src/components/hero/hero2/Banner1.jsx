import { useState } from "react";
import { FaCarTunnel } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
const Banner1 = () => {
    const [expanded, setExpanded] = useState(true);
    const handleExpand = () =>{
        setExpanded(!expanded)
    }
  return (
    <>
        <h1 className="text-white font-[gilroy] text-xl">WHY US :</h1>
        <div className={`h-[${expanded? 42:20}vh] p-2 overflow-hidden transition`}>
        <div className="bg-black text-white h-full flex flex-wrap transition">
        <div className="bg-black h-[20vh] w-1/2 flex flex-col items-center gap-5">
        <FaCarTunnel className="size-20 mt-2"/>
        <h3>Free Installation</h3>
        </div>
        <div className="bg-black h-[20vh] w-1/2 flex flex-col items-center gap-5">
            <FaTools className="size-20 mt-2"/>
            <h3> Free Maintenance</h3>
        </div>
        <div className="bg-black h-[20vh] w-1/2 flex flex-col items-center gap-5">
            <FaShippingFast className="size-20 mt-2"/>
            <h3> Fast Shipping</h3>
        </div>
        <div className="bg-black h-[20vh] w-1/2 flex flex-col items-center gap-5">
            <MdOutlineSupportAgent className="size-20 mt-2"/>
            <h3> Quick Support</h3>
        </div>
        </div>
        </div>
        <h1 onClick={handleExpand} className="text-white text-center p-5 transition">{expanded?'Hide':'Show More' }</h1>
    </>
  )
}

export default Banner1
