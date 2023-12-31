import React,{useState ,useEffect} from 'react'
import './style.scss'
import {useNavigate} from "react-router-dom"
import useFetch  from "../../../hooks/useFetch"

const HeroBanner = () => {
  const [backgroung,setBackground]=useState("");
  const [query,setQuery]=useState("");
  const navigate=useNavigate();
  const {data,loading}=useFetch("/movie/upcoming")
  useEffect(()=>{
      const bg = data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
      setBackground(bg)
  },[data]);


  const searchQueryHandler =(event)=>{
    if(event.key==="Enter"&&query.length>0){
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      <div className='wrapper'>
        <div className="heroBannerContent">
         <span className="title"> Welcome</span>
         <span className="subTitle">Millions of movies,Tv Shows and People to 
         discover.
         Explore now.</span>
         <div className="searchInput">
          <input type="text" 
                 placeholder='Search for a Movie or tv show...../' 
                 onChange={(e)=>setQuery(e.target.value)}
                 onKeyUp={searchQueryHandler}
          />
          <button>Search</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
