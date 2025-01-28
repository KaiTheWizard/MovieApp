import React, { useEffect, useState } from 'react'
import { IoCloseSharp, IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import axios from '../utils/AXios'
import no_img from '../assets/no_img.png'

function SearchBar() {
  const [search_data, setsearch_data] = useState([])
    const [query, setquery] = useState([])
    const get_search_data = async() => {
      try {
        const {data} = await axios.get(`search/multi?query=${query}`)
        setsearch_data(data.results)
        console.log(search_data)
      } catch (error) {
        console.log(error)
      }   
    }
  useEffect(()=>{
    get_search_data()
  },[query])
    console.log(query)

  return (
    <div className='h-[10vh] w-[80%] mx-auto flex gap-5 relative  p-5 items-center text-2xl'>
        <IoSearch className='text-3xl'  />
        <input  onChange={(e)=>setquery(e.target.value)} value={query} className=' px-5 outline-none border-[#dbd2d2]  border-[1px] w-[62%]' type="text" placeholder='Search anything ...' />
        {query.length >0 && (
          <IoCloseSharp onClick={()=>setquery("")} className='text-3xl text-red-600' />
        )}
           <div className="search-results w-[60%] max-h-[50vh] overflow-y-auto   rounded-sm ml-[4.5%] top-[100%] absolute"> 
            {search_data && search_data.map((s,index)=>{
            return (
            
              <Link className="text-zinc-600 gap-5 hover:text-black hover:bg-zinc-200 border-b-[1px] w-full py-10 flex justify-start px-5 items-center bg-zinc-300 ">
                <img className='h-24 w-24 object-cover rounded-xl ' src={`https://image.tmdb.org/t/p/original/${s.backdrop_path || s.poster_path || no_img }`} alt="" />
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