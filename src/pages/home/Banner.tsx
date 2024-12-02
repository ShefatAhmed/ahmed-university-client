const Banner = () => {
  return (
    <div className="relative">
      <div>
        <img
          src="https://i.ibb.co.com/PhCFJ4y/bg-104f1be9.png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl text-center font-extrabold text-white">
          Ahmed University Management System
        </h1>
      </div>
    </div>
  );
};

export default Banner;
