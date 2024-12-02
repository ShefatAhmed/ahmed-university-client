import { FaApple, FaGoogle, FaLocationArrow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-900 px-5 md:px-16 lg:px-28 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
        <div className="text-white font-semibold">
          <h2 className="text-xl font-bold mb-8 text-white">Contact Us</h2>
          <ul>
            <li className="flex items-center gap-1"><FaLocationArrow />
            Administration Building</li>
            <li className="flex items-center gap-1"><FaLocationDot />
            Ahmed University, Bangladesh</li>
            <li className="flex items-center gap-1"> <IoCall />
            Tel: +880-0-0008888</li>
            <li className="flex items-center gap-1"> <MdMail />
            contact@ah-uni.edu.bd</li>
          </ul>
        </div>
        <div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 text-white text-center">
            Download Our App
          </h2>
          <ul className="flex flex-col gap-2 justify-center items-center">
            <li>
              <button className="text-lg text-white font-semibold px-5 py-2 border-2 flex justify-center items-center gap-5 rounded-full">
                <FaGoogle /> Google Play
              </button>
            </li>
            <li>
              <button className="text-lg text-white font-semibold px-7 py-2 border-2 flex justify-center items-center gap-5 rounded-full">
                <FaApple />
                App Store
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 px-4 py-8 text-gray-300 text-center">
        <p>© 2025 All Rights Reserved. Ahmed University</p>
      </div>
    </footer>
  );
};

export default Footer;
