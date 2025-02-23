import React, { useEffect, useState } from "react";
import SideNavBar from "../partials/SideNavBar";
import SearchBar from "../partials/SearchBar";
import axios from "../utils/Axios";
import Header from "../partials/Header";
import HorizontalCards from "../partials/HorizontalCards";
import Dropdown from "../partials/dropdown";

function Home() {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get("trending/all/week");
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setWallpaper(data.results[randomIndex]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWallpaper();
  }, []);

  useEffect(() => {
    getTrending();
  }, [category]); // Refetch data when category or duration changes

  return wallpaper && trending ? (
    <div className="h-full w-full flex bg-[#1A1A1D]">
      <SideNavBar />
      <div className="Main-page w-[80%] h-full  overflow-y-auto overflow-x-hidden">
        <SearchBar />
        <Header wallpaper={wallpaper} />
        <div className="mainbtm w-[90%] mx-auto">
          <div className="flex justify-between py-5">
            <p className="text-xl font-semibold">Trending Now</p>
            <Dropdown func={setCategory}  options={["all","tv","movie"]}  />
          </div>
          <HorizontalCards data={trending} category={category} />
        </div>
      </div>
    </div>
  ) : (
    <h2>Loading</h2>
  );
}

export default Home;
