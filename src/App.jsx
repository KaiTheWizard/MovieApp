import React, { useEffect } from 'react'
import Routing from './utils/Routing'
import { useDispatch } from 'react-redux'
import asyncgetmoviedata from './store/actions/MovieActions'
import asyncgettvdata from './store/actions/TVActions'

function App() {
  // document.title = "ScreenScape | Home";
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncgetmoviedata())
    dispatch(asyncgettvdata())
  },[])
  return (
    <div className='h-screen w-full text-white bg-zinc-900'>
      <Routing/>
    </div>

  )
}

export default App