import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import asyncdata from "../store/actions/MovieActions";

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { moviedata } = useSelector((state) => state.movies);
  console.log(moviedata);
  useEffect(() => {
    dispatch(asyncdata(id));
  }, [id]);
  return moviedata ? (
    <div
      className="h-screen w-full movie"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.455),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${moviedata.details.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

    </div>
  ) : (
    <h2>Loading...</h2>
  );
}

export default MovieDetails;
