import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { Link } from "react-router-dom";

function HorizontalCards({ data ,category }) {
  return (
    <div className="h-[45vh] gap-5  flex overflow-x-auto w-full">
      {data &&
        data.map((item, index) => {
          return (
            <Link to={`${item.media_type}/details/${item.id}`}
              key={index}
              className=" card h-[40vh] w-[18%] shrink-0 overflow-hidden rounded-sm bg-zinc-800"
            >
              <img
                className="h-[55%] w-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.poster_path
                }`}
                alt=""
              />
              <div className="text p-2">
                <h2 className="text-sm font-semibold mb-1">
                  {item.name ||
                    item.title ||
                    item.original_title ||
                    item.original_name}
                </h2>
                <p className="  text-xs  leading-4 ">
                  {item.overview.slice(0, 100)}...
                  <Link>more</Link>
                </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default HorizontalCards;
