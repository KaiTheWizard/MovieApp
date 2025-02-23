import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import Movie from '../components/Movie'
import TvShow from '../components/TvShow'
import People from '../components/People'
import MovieDetails from '../components/MovieDetails'
import PersonDetails from '../components/PersonDetails'
import TvDetails from '../components/TvDetails'

function Routing() {
  return (
    <div className='h-full w-full '>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/movie/details/:id' element={<MovieDetails/>}/>
            <Route path='/tvshows' element={<TvShow/>}/>
            <Route path='/tv/details/:id' element={<TvDetails/>}/>
            <Route path='/celebrities' element={<People/>}/>
            <Route path='/celebrities/details/:id' element={<PersonDetails/>}/>
        </Routes>
    </div>
  )
}

export default Routing