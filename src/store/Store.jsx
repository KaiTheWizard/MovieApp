import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from '../store/reducers/MovieReducer'

export const store = configureStore({
    reducer:{
        moviedata : MovieReducer,
    }
})

export default store