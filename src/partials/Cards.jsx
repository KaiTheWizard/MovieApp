import React from "react";

function Cards({ data }) {
  return (
    <div className="min-h-screen w-full flex gap-18 py-8 flex-wrap justify-center bg-zinc-900">
      {data &&
        data.map((item, index) => {
          return (<div key={index}>
            <div  className="cards rounded-sm overflow-hidden h-64 w-56">
              <img
                className="object-cover h-full w-full"
                src={`https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.poster_path || item.profile_path
                }`}
                alt=""
              />
              
            </div>
            <p className=" w-56 text-center">
            {item.name ||
              item.title ||
              item.original_title ||
              item.original_name}
          </p>
    </div>
          );
        })}
    </div>
  );
}

export default Cards;
