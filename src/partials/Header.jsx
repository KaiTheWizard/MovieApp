import React from "react";
import { Link } from "react-router-dom";

function Header({ wallpaper }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
          wallpaper.backdrop_path || wallpaper.poster_path
        })`,
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "top-30%",
        backgroundSize: "cover",
      }}
      className=" w-[90%] relative h-[55vh] mx-auto"
    >
      <div className="wallpaper-info flex gap-2 p-6 flex-col absolute bottom-0">
        <h2 className="capitalize font-semibold  text-5xl">
          {wallpaper.name || wallpaper.title ||
            wallpaper.original_title ||
            wallpaper.original_name}
        </h2>
        <p>
          <span></span>
        </p>
        <p className="text-sm leading-4 w-[70%]">
          {wallpaper.overview.slice(0, 200)}...
          <Link  to={`/${wallpaper.media_type || mediaType || category }/details/${wallpaper.id}`}>more</Link>
        </p>
      </div>
    </div>
  );
}

export default Header;
