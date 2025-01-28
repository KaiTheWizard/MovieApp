import axios from "axios";

// videos api 
const axiosInstance = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3/",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmM4OWFmNDhmOGI1ZjY3Yzg3YWY3MzE3OGY0ZDRiZSIsIm5iZiI6MTczODE0ODQ4My43NTIsInN1YiI6IjY3OWEwYTgzZjA1YjY0NzE0YmE5NzE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dQMX3EOVJ6qh0X8yDEmjiEmv2DuClqdLFxgUJzkolCI'
          }
    }
)

export default axiosInstance
// reference/now-playing-list 

// for image backdrop_path and profile_path 

// trending all 