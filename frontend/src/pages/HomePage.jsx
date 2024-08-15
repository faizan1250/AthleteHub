import React from "react";
import { useAuthStore } from "../store/authStore";
import { Link } from "react-router-dom";

const page = () => {
  const { user } = useAuthStore();
  return (
    <div>
      <div className="flex justify-between mt-0 p-8 w-[100vw] text-3xl font-semibold shadow-md">
        <div>ATHLETEHUB</div>

        <div className="flex text-3xl font-medium">
          <Link to={"/"} className="ml-20 cursor-pointer hover:text-blue-500">
            Home
          </Link>
          <Link to={"/"} className="ml-20 cursor-pointer hover:text-blue-500">
            News
          </Link>
          <Link to={"/"} className="ml-20 cursor-pointer hover:text-blue-500">
            Updates
          </Link>
          <Link to={"/"} className="ml-20 cursor-pointer hover:text-blue-500">
            Stats
          </Link>
          <Link
            to={"/user"}
            className="ml-20 mr-10 cursor-pointer hover:text-blue-500"
          >
            User
          </Link>
        </div>
      </div>
      <div className="text-3xl mt-3 p-5 font-mono">
        Hello {user.name}, Welcome to AthleteHub. We are under production at the
        moment, will update you soon.
      </div>
    </div>
  );
};

export default page;
