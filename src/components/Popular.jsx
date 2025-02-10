import React, { useEffect, useState } from "react";
import SearchBar from "../partials/SearchBar";
import Dropdown from "../partials/dropdown";
import { SlArrowLeft } from "react-icons/sl";
import axios from "../utils/Axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";


function Popular() {
    const [popular, setPopular] = useState([]);
    const [category, setCategory] = useState("movie");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const getPopular = async () => {
        try {
            const { data } = await axios.get(
                `${category}/popular?language=en-US&page=${page}`
            );
            
            if (data.results.length > 0) {
                setPopular((prevVal) => [...prevVal, ...data.results]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
            console.log(popular);
        } catch (error) {
            console.log(error);
        }
    };
    
    const refreshHandler = () => {
        setPage(1);
        setPopular([]);
        setHasMore(true);
        getPopular();
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
                    <p className="capitalize text-2xl">Popular</p>
                    <p className="capitalize">{category}</p>
                </div>
                <SearchBar />
                <Dropdown func={setCategory} options={["tv", "movie"]} />
            </div>
            <div className="results">
                <InfiniteScroll
                    dataLength={popular.length}
                    next={getPopular}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    <Cards data={popular} />
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default Popular;
