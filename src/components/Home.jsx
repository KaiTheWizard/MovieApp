import React from 'react'
import SideNavBar from '../partials/SideNavBar'
import SearchBar from '../partials/SearchBar'

function Home() {
  return (
    <div className='h-full w-full flex bg-[#1A1A1D] '>
        <SideNavBar/>
        <div className="Main-page w-[80%] h-full ">
            <SearchBar/>
        </div>
    </div>
  )
}

export default Home