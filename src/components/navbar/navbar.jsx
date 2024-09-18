import { useState } from 'react';
import  Location from '../../asset/location.jsx';
import  Notifications from '../../asset/Notifications.jsx';
import Locations from '../../asset/staticLocations/Locations.js'
const Navbar = () => {
  const [bgColorState, setBgColorState] = useState({
    Darkmode: ["bg-[#1F1F1F]", "text-zinc-50"],
    LightMode: ["bg-white", "text-black"]
  });
  const isDarkMode = true;
  console.log(bgColorState.Darkmode)
  // I will be using it to change the location in the navbar
  const [location, setLocation] = useState(Locations[1].name);

  return (
    <div className={`${(isDarkMode ? bgColorState.Darkmode : bgColorState.LightMode).join(' ')} h-[10vh] w-[100%]`}>
      <div className="flex flex-row justify-between h-[100%] w-[100%]">
        <div className="flex items-center font-black h-[100%] w-[30%] justify-center">
          <Location stored = {isDarkMode? 'white':'black'}/>
          {location}
        </div>
        <div className="flex items-center font-black h-[100%] w-[30%] justify-center">
          <Notifications/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
