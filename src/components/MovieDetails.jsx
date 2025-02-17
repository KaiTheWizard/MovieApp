import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import asyncgetmoviedata from '../store/actions/MovieActions'

function MovieDetails() {
  const {id} = useParams()
  useSelector((state)=>state.MovieDetails)
  console.log(MovieDetails)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncgetmoviedata(id))
  },[id])
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails