import React, { useEffect, useState } from "react";
import SearchBar from "../partials/SearchBar";
import Dropdown from "../partials/dropdown";
import { SlArrowLeft } from "react-icons/sl";
import axios from "../utils/Axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import asyncgettvdata from "../store/actions/TVActions";


function TvShow() {
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncgettvdata())
  },[])


    const [TvShow, setTvShow] = useState([]);
    const [category, setCategory] = useState("airing_today");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const getTvShow = async () => {
        try {
            const { data } = await axios.get(
                `tv/${category}?language=en-US&page=${page}`
            );
            
            if (data.results.length > 0) {
                setTvShow((prevVal) => [...prevVal, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
            console.log(TvShow);
        } catch (error) {
            console.log(error);
        }
    };
    
    const refreshHandler = () => {
        setPage(1);
        setTvShow([]);
        setHasMore(true);
        getTvShow();
    };
    
    useEffect(() => {
        refreshHandler();
    }, [category]);
    
    return (
        <div className="bg-zinc-900 min-h-screen w-full px-3">
            <div className="navbar flex items-center gap-5">
                <div className="navtext flex gap-3 items-center pl-10 text-center w-[27%]">
                    <Link to="/">
                    <SlArrowLeft  />
                    </Link>
                    <p className="capitalize text-2xl">TvShow</p>
                    <p className="capitalize">{category}</p>
                </div>
                <SearchBar />
                <Dropdown func={setCategory} options={["airing_today", "on_the_air","popular","top_rated"]} />
            </div>
            <div className="results">
                <InfiniteScroll
                    dataLength={TvShow.length}
                    next={getTvShow}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    <Cards data={TvShow} mediaType='tv' />
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default TvShow;
