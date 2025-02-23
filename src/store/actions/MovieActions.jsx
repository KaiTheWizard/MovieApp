import axiosInstance from "../../utils/Axios";
import { getmoviedata } from "../reducers/MovieReducer";

// gets movie data and sends it to movieReducer
const asyncgetmoviedata = (id) => async (dispatch,getState)=>{
    try {
        const details  = await axiosInstance.get(`movie/${id}`)
        const watchlinks  = await axiosInstance.get(`movie/${id}/watch/providers`)
        const external_ids  = await axiosInstance.get(`movie/${id}/external_ids`)
        const recommendations  = await axiosInstance.get(`movie/${id}/recommendations`)
        const similar  = await axiosInstance.get(`movie/${id}/similar`)
        let movieDetails = {
            details : details.data,
            watchlinks: watchlinks.data.results,
            external_ids : external_ids.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
        }
        dispatch(getmoviedata(movieDetails))
    } catch (error) {
        console.log(error)
    }
} 

export default asyncgetmoviedata

