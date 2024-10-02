import { MdProductionQuantityLimits } from "react-icons/md";
const Notifications = () => {
  return (
    <div className="bg-transparent h-screen w-full p-5 text-white">
        <div className="grid grid-cols-1 gap-5 p-2 text-xl border-2 ">
            <div className="flex items-center gap-5 border-2 hover:bg-blue-500 hover:text-white hover:text-2xl "><MdProductionQuantityLimits className="size-6"/>This is the first Notifications</div>
            <div className="flex items-center gap-5 border-2 hover:bg-blue-500 hover:text-white hover:text-2xl "><MdProductionQuantityLimits className="size-6"/>This is the second Notifications</div>
            <div className="flex items-center gap-5 border-2 hover:bg-blue-500 hover:text-white hover:text-2xl "><MdProductionQuantityLimits className="size-6"/>This is the third Notifications</div>
            <div className="flex items-center gap-5 border-2 hover:bg-blue-500 hover:text-white hover:text-2xl "><MdProductionQuantityLimits className="size-6"/>This is the fourth Notifications</div>

        </div>
    </div>
  )
}

export default Notifications
