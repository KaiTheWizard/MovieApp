import React from "react";
import { BiCameraMovie } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { LuTv } from "react-icons/lu";
import { PiFilmSlateFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import { Link } from "react-router-dom";

function SideNavBar() {
  return (
    <div className="w-[20%] h-full flex flex-col font-bold border-r-2 p-10 border-[#dbd2d2]">
      <div className="flex items-center gap-2">
        <BiCameraMovie className="text-[#6A1E55] text-[40px]" />
        <h2 className="text-[40px] text-white">Movixer.</h2>
      </div>
      <h2 className="text-[25px] mt-5 mb-2 text-white">Explore Now</h2>

      <div className=" categories gap-3 text-[white]">
        <Link
          className="capitalize flex gap-2 hover:pl-7 rounded-lg duration-200 delay-100 py-3 hover:opacity-100 opacity-50 text-xl my-1 hover:bg-[#6A1E55]"
          to="/trending"
        >
          <FaFire />
          Trending
        </Link>
        <Link
          className="capitalize flex gap-2 hover:pl-7 rounded-lg duration-200 delay-100 py-3 hover:opacity-100 opacity-50 text-xl my-1 hover:bg-[#6A1E55]"
          to="/popular"
        >
          <WiStars className="text-amber-300" />
          popular
        </Link>
        <Link
          className="capitalize flex gap-2 hover:pl-7 rounded-lg duration-200 delay-100 py-3 hover:opacity-100 opacity-50 text-xl my-1 hover:bg-[#6A1E55]"
          to="/movies"
        >
          <PiFilmSlateFill />
          movies
        </Link>
        <Link
          className="capitalize flex gap-2 hover:pl-7 rounded-lg duration-200 delay-100 py-3 hover:opacity-100 opacity-50 text-xl my-1 hover:bg-[#6A1E55]"
          to="/tvshows"
        >
          <LuTv />
          tv shows
        </Link>
        <Link
          className="capitalize flex gap-2 hover:pl-7 rounded-lg duration-200 delay-100 py-3 hover:opacity-100 opacity-50 text-xl my-1 hover:bg-[#6A1E55]"
          to="celebrities"
        >
          {" "}
          <RiTeamFill />
          celebrities
        </Link>
      </div>
      <hr className="text-white" />
      <h2 className="text-[25px] mt-5 mb-2 text-white">Website Info..</h2>

      <div className=" categories gap-3 text-[white]">
        <Link
          className="capitalize flex gap-2 hover:pl-7 rounded-lg duration-200 delay-100 py-3 hover:opacity-100 opacity-50 text-xl my-1 hover:bg-[#6A1E55]"
          to="/about"
        >
          <FaFire />
          About
        </Link>
        <Link
          className="capitalize flex gap-2 hover:pl-7 rounded-lg duration-200 delay-100 py-3 hover:opacity-100 opacity-50 text-xl my-1 hover:bg-[#6A1E55]"
          to="/contact"
        >
          <WiStars className="text-amber-300" />
          contact
        </Link>
        </div>
    </div>
  );
}

export default SideNavBar;
