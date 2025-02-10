import React, { useEffect, useState } from "react";
import SearchBar from "../partials/SearchBar";
import Dropdown from "../partials/dropdown";
import { SlArrowLeft } from "react-icons/sl";
import axios from "../utils/Axios";
import Cards from "../partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

function People() {
    const [People, setPeople] = useState([]);
    const [category, setCategory] = useState("all");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const getPeople = async () => {
        try {
            const genderFilter = category === "male" ? 2 : category === "female" ? 1 : 0;
            const { data } = await axios.get(
                `person/popular?language=en-US&page=${page}`
            );
            
            const filteredResults = genderFilter === 0 
                ? data.results 
                : data.results.filter(person => person.gender === genderFilter);

            if (filteredResults.length > 0) {
                setPeople((prevVal) => [...prevVal, ...filteredResults]);
                setPage(page + 1);
            } else {
                setHasMore(false);
            }
            console.log(People);
        } catch (error) {
            console.log(error);
        }
    };
    
    const refreshHandler = () => {
        setPage(1);
        setPeople([]);
        setHasMore(true);
        getPeople();
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
                    <p className="capitalize text-2xl">People</p>
                    <p className="capitalize">{category}</p>
                </div>
                <SearchBar />
                <Dropdown func={setCategory} options={["all", "male", "female"]} />
            </div>
            <div className="results">
                <InfiniteScroll
                    dataLength={People.length}
                    next={getPeople}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                >
                    <Cards data={People} />
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default People;
