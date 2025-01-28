import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'

function Routing() {
  return (
    <div className='h-full w-full '>
        <Link to='/'></Link>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing