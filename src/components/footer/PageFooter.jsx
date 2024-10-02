import { CiMail } from "react-icons/ci";
import { FaPhoneSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const PageFooter = () => {
  return (
    <div className="h-[40vh] w-full bg-gray-900 sticky p-10 text-white">
      <h1 className="text-2xl outline-double text-center"> Know more about us</h1>
      <div className="flex mt-10 items-center justify-center gap-5 flex-wrap">
      <a href="mailto:rahul.roybak@email.com?subject=Inquiry&body=Hello, I would like to know more about your services."><div className="flex gap-5"><CiMail className="size-5"/> rahul.roybak@gmail.com </div></a>
      <a href="tel:+919876543210"><div className="flex gap-5"><FaPhoneSquare className="size-5"/>+91 625825600</div></a>
      <a href="https://wa.me/916295825600?text=Hello%20there!" target="_blank" rel="noopener noreferrer"><div className="flex gap-4"><FaWhatsapp  className="size-5"/>+91 6295825600</div></a>
      </div>
    </div>
  )
}

export default PageFooter
