import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="flex flex-col gap-5 md:col-span-3">
        <Link to="/login" state={{userId: "A-0001", password: "admin123"}} className="btn text-center text-lg text-blue-900 font-semibold px-5 py-2 border-2 hover:bg-blue-900 hover:text-white">
            Admin Login
          </Link>
          <Link to="/login" state={{userId: "F-0001", password: "faculty123"}} className="btn text-center text-lg text-blue-900 font-semibold px-5 py-2 border-2 hover:bg-blue-900 hover:text-white">
            Faculty Login
          </Link>
          <Link to="/login" state={{userId: "2025030001", password: "student123"}} className="btn text-center text-lg text-blue-900 font-semibold px-5 py-2 border-2 hover:bg-blue-900 hover:text-white">
            Student Login
          </Link>
        </div>
        <div className="md:col-span-9 text-left px-3 md:px-5">
          <h1 className="text-2xl font-bold mb-3">Introduction:</h1>
          <p>
            Welcome to Ahmed University Management System, a platform designed
            to manage administrative, faculty, and student processes
            efficiently.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-5 mt-5">
        <img src="https://i.ibb.co.com/pycb4vz/download.png" alt="" />
        <img src="https://i.ibb.co.com/pycb4vz/download.png" alt="" />
      </div>
    </div>
  );
};

export default Introduction;
