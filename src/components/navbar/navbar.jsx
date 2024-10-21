import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { RiNotification4Fill } from "react-icons/ri";
import Locations from '../../asset/staticLocations/Locations.js'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Bigfooter from '../footer/bigFooter.jsx';
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActivity = ()=>{
    setMenuActive(!menuActive);
  }
  const [bgColorState, setBgColorState] = useState({
    Darkmode: ["bg-[#1F1F1F]", "text-zinc-50"],
    LightMode: ["bg-white", "text-black"]
  });
  const isDarkMode = true;

  // I will be using it to change the location in the navbar
  const [location, setLocation] = useState(Locations[1].name);

  return (
    <div className={`${(isDarkMode ? bgColorState.Darkmode : bgColorState.LightMode).join(' ')} h-[10vh] w-[100%] fixed top-0 left-0 z-50 md:h-[20vh]`}>
      <div className="flex flex-row justify-between h-[100%] w-[100%]">
        <div className="flex items-center gap-2 font-black h-[100%] w-[30%] justify-center md:text-3xl">
        <FaLocationDot className='text-xl md:text-3xl'/>
          {location}
        </div>
        <div  className="flex flex-row items-center justify-center font-black h-[100%] w-[30%]">
            <div className="flex items-center font-black h-[100%] w-[40%] justify-center">
            <Link to='/globalnotification'> <RiNotification4Fill className=" text-2xl md:text-4xl"/> </Link>
            </div>
            <div className='hidden h-[100%] md:bg-gray-500 w-[40%] md:flex items-center justify-center'>
            <HiOutlineMenuAlt4 className={`${menuActive?'hidden':'flex'} md:text-6xl`} onClick={handleMenuActivity}/>
            <RxCross1 className={`${menuActive?'flex':'hidden'} md:text-6xl`} onClick={handleMenuActivity}/>
            </div>
        </div>
      </div>
      <Bigfooter menuActive={menuActive} handleMenuActivity={handleMenuActivity}/>
    </div>
  );
};

export default Navbar;
