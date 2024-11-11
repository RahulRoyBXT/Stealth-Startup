import { CiHome } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const FixedFooterM = () => {
  return (
    <div className="md:hidden h-[10dvh] w-[100%] bg-transparent fixed bottom-0 flex justify-center items-center">
        <div className="h-[90%] w-[98%] bg-[#1F1F1F] rounded-2xl flex flex-row justify-evenly items-center">
        <Link className= "h-[100%] w-[20vw] flex items-center justify-center" to='/'><CiHome className="h-[50%] w-[60%] text-white font-black"/> </Link>
        <Link className= "h-[100%] w-[20vw] flex items-center justify-center" to='/products'><AiOutlineProduct className="h-[50%] w-[60%] text-white font-black"/> </Link>
        <Link className= "h-[100%] w-[20vw] flex items-center justify-center" to='/message'><RiMessage2Line className="h-[50%] w-[60%] text-white font-black"/> </Link>
        <Link className= "h-[100%] w-[20vw] flex items-center justify-center" to='/profile'><CgProfile  className= "h-[50%] w-[60%] text-white font-black"/> </Link>
        </div>
    </div>
  )
}

export default FixedFooterM
