import { Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  logout,
  TUser,
  useCurrentToken,
} from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();
  let user;
  if (token) {
    user = verifyToken(token);
  }
  let sidebarItems;
  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="flex p-2 bg-blue-800 rounded-lg">
      <div
        className={`fixed top-0 left-0 h-full md:w-64 bg-white glass transition-width duration-300 flex flex-col ${
          isOpen ? "w-65" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2
            className={`text-xl text-blue-800 font-bold md:block ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Ahmed University
          </h2>
          <button
            className="block md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoCloseSharp className="text-red-500" size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
        <nav className="mt-4 flex-1">
          <ul>
            <li className="flex items-center cursor-pointer">
              <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
                <Menu
                  theme="light"
                  mode="inline"
                  defaultSelectedKeys={["4"]}
                  items={sidebarItems}
                />
              </div>
            </li>
          </ul>
        </nav>
        <div className={`mt-auto p-4 md:block ${isOpen ? "block" : "hidden"}`}>
          <button
            className="btn text-center text-lg text-white font-semibold px-5 py-1 border-2 bg-blue-900 hover:bg-white hover:text-blue-900 w-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div
        className={`ml-20 md:ml-64 p-8 bg-amber-50 rounded-lg min-h-screen flex-1 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
