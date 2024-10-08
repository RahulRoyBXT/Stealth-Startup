import MessagesPop from './MessagesPop.jsx'
const MessageCard = () => {
  return (

    <div className="h-[90%] w-full p-5">
      <div className=" bg-zinc-900 h-[85%] w-full customBorder p-5 overflow-scroll">
      <MessagesPop />
      </div>
      <div className="h-[25%] flex flex-row justify-between">
        <input type="text" placeholder="Type your message here..." className="h-[30%] w-[75%] bg-slate-800 text-white p-2 mt-2 rounded-xl"/>
        <button className="h-[30%] w-[20%] bg-zinc-800 text-white p-2 mt-2 rounded-xl font-black">Send</button>
      </div>
    </div>
  )
}

export default MessageCard
