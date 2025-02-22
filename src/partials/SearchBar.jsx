import React, { useEffect, useState } from 'react'
import { IoCloseSharp, IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import axios from '../utils/Axios'
import no_img from '../assets/no_img.png'

function SearchBar() {
  const [search_data, setsearch_data] = useState([])
    const [query, setquery] = useState([])
    const get_search_data = async() => {
      try {
        const {data} = await axios.get(`search/multi?query=${query}`)
        setsearch_data(data.results)
      } catch (error) {
        console.log(error)
      }   
    }
  useEffect(()=>{
    get_search_data()
  },[query])

  return (
    <div className='h-[10vh] w-[90%] mx-auto flex gap-5 relative  p-5 items-center text-2xl'>
        <IoSearch className='text-3xl'  />
        <input  onChange={(e)=>setquery(e.target.value)} value={query} className=' px-5 outline-none border-[#dbd2d2]  border-[1px]  rounded-lg py-2 w-[72.5%]' type="text" placeholder='Search anything ...' />
        {query.length >0 && (
          <IoCloseSharp onClick={()=>setquery("")} className='text-3xl text-red-600 absolute right-[25%]' />
        )}
           {/* <div className="search-results w-[78%] bg-zinc-300 h-[50vh] overflow-y-auto rounded-sm ml-[4.5%] top-[100%] absolute box-border">  */}
           <div className="searches w-[70%] z-10 rounded ml-[4.4%] overflow-auto absolute bg-white max-h-[50vh] top-[80%]">
            {search_data && search_data.map((s,index)=>{
            return (
            
              <Link  to={`/${s.media_type }/details/${s.id}`} key={index} className="text-zinc-600 gap-5 hover:text-black hover:bg-zinc-200 border-b-[1px] w-full py-10 flex justify-start px-5 items-center bg-zinc-300 ">
                <img className='h-24 w-24 object-cover rounded-xl ' src={ s.backdrop_path || s.poster_path ?`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.poster_path}`: no_img} alt="" />
                <span> 
                  { s.original_title || s.title || s.name}
                  </span>
                  </Link> 
            )
            })}
          </div>


      
    
    </div>
      
  )
}

export default SearchBar