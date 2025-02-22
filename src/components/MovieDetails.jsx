import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import asyncgetmoviedata from "../store/actions/MovieActions";

function MovieDetails() {
  const { id } = useParams();
  const moviedata = useSelector((state) => state.moviedata);
  console.log(moviedata)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetmoviedata(id));
  }, [id]);
  return (
    <div
      className="h-screen w-full "
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
          MovieDetails.details.backdrop_path || MovieDetails.details.poster_path
        })`,
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "top-30%",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default MovieDetails;
