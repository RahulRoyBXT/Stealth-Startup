import { CiMail } from "react-icons/ci";
import { FaPhoneSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const PageFooter = () => {
  return (
    <div className="max-md:h-[40dvh] w-full bg-[#1F1F1F] sticky p-10 text-white rounded-t-3xl">
      {/* <h1 className="text-2xl outline-double text-center">
        {" "}
        Know more about us
      </h1> */}
      <div className="flex flex-col items-center justify-center gap-5 flex-wrap">
          <div className="flex gap-5 text-xl font-semibold">
            {/* <CiMail className="size-5" /> */}
             About Us{" "}
          </div>
        
          <div className="flex gap-5 text-xl font-semibold">
            {/* <CiMail className="size-5" /> */}
            Contact{" "}
          </div>
        
          <div className="flex gap-5 text-xl font-semibold">
            {/* <CiMail className="size-5" /> */}
            Terms & Conditions{" "}
          </div>
        
          <div className="flex gap-5 text-xl font-semibold">
            {/* <CiMail className="size-5" /> */}
             Policies{" "}
          </div>
        {/* <a href="tel:+919876543210">
          <div className="flex gap-5">
            <FaPhoneSquare className="size-5" />
            +91 625825600
          </div>
        </a>
        <a
          href="https://wa.me/916295825600?text=Hello%20there!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex gap-4">
            <FaWhatsapp className="size-5" />
            +91 6295825600
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default PageFooter;
