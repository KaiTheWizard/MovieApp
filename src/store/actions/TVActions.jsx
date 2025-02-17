import axiosInstance from "../../utils/Axios";
import { gettvdata } from "../reducers/TVReducer";

const asyncgettvdata = () => async (dispatch,getState)=>{
    try {
        const {data} = await axiosInstance.get('tv/top_rated')
        dispatch(gettvdata(data.results))
    } catch (error) {
        console.log(error)
    }
} 

export default asyncgettvdata

