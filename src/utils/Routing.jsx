import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import Movie from '../components/Movie'
import TvShow from '../components/TvShow'
import People from '../components/People'

function Routing() {
  return (
    <div className='h-full w-full '>
        <Link to='/'></Link>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/trending' element={<Trending/>}></Route>
            <Route path='/popular' element={<Popular/>}></Route>
            <Route path='/movies' element={<Movie/>}></Route>
            <Route path='/tvshows' element={<TvShow/>}></Route>
            <Route path='/celebrities' element={<People/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing