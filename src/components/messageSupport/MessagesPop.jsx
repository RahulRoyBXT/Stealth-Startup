
const MessagesPop = () => {
  return (
    <div className="text-xl text-white font-black flex flex-col">
        <div className="text-xl w-[50%] text-warp text-white font-black flex flex-col mb-10">
            <span className="flex h-[50px] w-auto border-2 justify-center rounded-2xl items-center bg-slate-800" >User</span> {/*User Name*/}
            <span className="text-white text-md font-light pl-3 mt-2"> hello </span>
            <span className="text-white text-md font-light pl-3 mt-2"> I need a Connection </span>
            <hr className="h-[0.3vh] w-full bg-slate-900 mt-2"/>
        </div>
        <div className="h-content w-[50%] text-wrap text-xl text-white font-black flex flex-col relative left-[50%]">
            <span className="flex h-[50px] w-auto border-2 justify-center rounded-2xl items-center bg-slate-800" >Admin</span> {/*Admin Name*/}
            <span className="text-white text-md font-light pl-3 mt-2"> Thank You For choosing us </span>
            <span className="text-white text-md font-light pl-3 mt-2"> We will Deliver It by tmr </span>
            <hr className="h-[0.3vh] w-full bg-slate-900 mt-2"/>
        </div>
    </div>
  )
}

export default MessagesPop
