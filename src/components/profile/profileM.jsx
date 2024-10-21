import { CgProfile } from "react-icons/cg";
import { FaHandsHelping, FaArrowCircleRight } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";
import {Link} from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";

const ProfileM = () => {
  return (
    <div className='bg-transparent h-[100vh] flex justify-center self-center w-full font-semibold text-white relative'>
        <div className="bg-zinc-900 h-[70vh] w-[95vw] p-10 flex flex-col self-items-center absolute bottom-[25%] rounded-2xl gap-10">
            <span className="bg-zinc-900 h-[10vh] border-b-2 flex pl-10 items-center border-white text-4xl">
              <Link to='/siginppage' className="h-full flex items-center">
                <span className="mr-5"><CgProfile /></span>
                Login <FaArrowCircleRight className="text-green-600 flex ml-5"/>
              </Link>
            </span>
            <span className="bg-zinc-900 h-[10vh] border-b-2 flex items-center border-white text-2xl"> <span className="mr-5"><FaHandsHelping /></span> Help & Support </span>
            <span className="bg-zinc-900 h-[10vh] border-b-2 flex items-center border-white text-2xl"> <span className="mr-5"><AiOutlineNotification /></span> Terms & Conditions</span>
            <span className="bg-zinc-900 h-[10vh] border-b-2 flex items-center border-white text-2xl"> <span className="mr-5"><MdOutlinePrivacyTip /></span> Privacy & Policy</span>
            <div className="text-white text-md absolute bottom-5 flex self-center">
            <Link to='/adminpanel' className="flex flex-col items-center"><RiAdminFill className="text-3xl"/>Admin Controll </Link>
            </div>
      </div>
      
      
    </div>
  )
}

export default ProfileM
