import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3"
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGMwOTEyMDY1MTU2MzAwODIyMDQ3YzBhOTY0MjllMCIsInN1YiI6IjY1ODZmNDQ3YjBjZDIwNTI0OTU3ZDQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S-5UchHwBWvERsHGSMMUoM5MxPtedN2cuoZNrjqrlwo"

const headers ={
    Authorization:"bearer "+TMDB_TOKEN,


}

export const fetchDataFromApi= async (url,params)=>{
try{
    const {data}= await axios.get(BASE_URL + url,{
       headers,
       params,
    }) 
    return data;
}catch(err){
     console.log(err);
     return err;
}

}