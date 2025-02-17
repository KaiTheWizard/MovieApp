import React, { useEffect, useState } from "react";
import SearchBar from "../partials/SearchBar";
import Dropdown from "../partials/dropdown";
import { SlArrowLeft } from "react-icons/sl";
import axios from "../utils/Axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

function Trending() {
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrending((prevval) => [...prevval, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
      console.log(trending);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setpage(1);
      setTrending([]);
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return (
    <div className="bg-zinc-900 min-h-screen w-full px-3 ">
      <div className="navbar flex items-center gap-5">
        <div className="navtext flex gap-3 items-center pl-10 text-center w-[27%]">
          <Link to="/">
            <SlArrowLeft />
          </Link>
          <p className="capitalize text-2xl">Trending</p>
          <p className="capitalize">{category}</p>
        </div>
        <SearchBar />
        <Dropdown func={setCategory} options={["all", "tv", "movie"]} />
        <Dropdown func={setDuration} options={["day", "week"]} />
      </div>
      <div className="results">
        <InfiniteScroll
          dataLength={trending.length}
          next={getTrending}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <Cards data={trending} category={category} />
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Trending;
