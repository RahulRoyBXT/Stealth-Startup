
const MessagesPop = () => {
  return (
    <div className="text-xl text-black font-black flex flex-col">
        <div className="text-xl w-[50%] text-warp text-black font-black flex flex-col">
            <span>User</span> {/*User Name*/}
            <span className="text-slate-900 font-semibold pl-3 mt-2"> hello </span>
            <span className="text-slate-900 font-semibold pl-3 mt-2"> I need a Connection </span>
            <hr className="h-[0.3vh] w-full bg-slate-900"/>
        </div>
        <div className="h-content w-[50%] text-wrap text-xl text-black font-black flex flex-col relative left-[50%]">
            <span>Admin</span> {/*Admin Name*/}
            <span className="text-slate-900 font-semibold pl-3 mt-2"> Thank You For choosing us </span>
            <span className="text-slate-900 font-semibold pl-3 mt-2"> We will Deliver It by tmr </span>
            <hr className="h-[0.3vh] w-full bg-slate-900"/>
        </div>
    </div>
  )
}

export default MessagesPop
