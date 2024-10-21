import { CiHome } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Bigfooter = ({menuActive,handleMenuActivity}) => {
  return (
    <div className={`hidden md:${menuActive?'flex':'hidden'} h-[70vh] w-[30vw] bg-blue-600 justify-self-end`}>
        <div className="h-[100%] w-[100%] bg-zinc-800 flex flex-col p-8">
        <Link className= "h-[100%] w-full flex items-center gap-5" to='/' onClick={handleMenuActivity}><CiHome className="text-5xl text-white font-black"/><span className="text-3xl font-semibold">Home</span> </Link>
        <Link className= "h-[100%] w-full flex items-center gap-5" to='/products' onClick={handleMenuActivity}><AiOutlineProduct className="text-5xl text-white font-black"/><span className="text-3xl font-semibold">Explore</span> </Link>
        <Link className= "h-[100%] w-full flex items-center gap-5" to='/message' onClick={handleMenuActivity}><RiMessage2Line className="text-5xl text-white font-black"/><span className="text-3xl font-semibold">Message Us</span> </Link>
        <Link className= "h-[100%] w-full flex items-center gap-5" to='/profile' onClick={handleMenuActivity}><CgProfile  className= "text-5xl text-white font-black"/> <span className="text-3xl font-semibold">Profile</span> </Link>
        </div>
    </div>
  )
}
Bigfooter.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  handleMenuActivity: PropTypes.func.isRequired,
};

export default Bigfooter;

