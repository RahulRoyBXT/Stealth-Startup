import MessagesPop from './MessagesPop.jsx'
const MessageCard = () => {
  return (

    <div className="h-[90%] w-full p-5">
      <div className=" bg-slate-400 h-[85%] w-full border-2 border-slate-800 p-5">
      <MessagesPop />
      </div>
      <div className="h-[25%] flex flex-row justify-between">
        <input type="text" placeholder="Type your message here..." className="h-[30%] w-[75%] bg-slate-800 text-black p-2 mt-2 rounded-xl"/>
        <button className="h-[30%] w-[20%] bg-black text-white p-2 mt-2 rounded-xl font-black">Send</button>
      </div>
    </div>
  )
}

export default MessageCard
