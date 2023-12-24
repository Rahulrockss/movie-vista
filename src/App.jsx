import { useState,useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {fetchDataFromApi} from '../src/utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration} from '../src/store/homeSlice'
import Header from "./components/header/Header"
import Footer from "./components/fotter/Fotter"
import Home from "./pages/home/Home"
import Details from "./pages/Details/Details"
import SearchResult from "./pages/searchResult/SearchResult"
import Explore from "./pages/explore/explore"
import Error from "./pages/404/Eroor"

function App() {
//   const dispatch = useDispatch()
//   const {url}=useSelector((state)=>{
//     state.home
//   })
//   useEffect(()=>{
//     apiTesting();
//   },[])
// const apiTesting =()=>{
//     fetchDataFromApi('/movie/popular')
//     .then((res)=>{
//       console.log(res)
//       dispatch(getApiConfiguration(res))
//     })
//   }
  return (
    <>
      <BrowserRouter>
      {/* <Header/> */}
         <Routes>
              <Route  path="/" element={<Home/>}/>
              <Route  path="/search/:query" element={<SearchResult/>}/>
         </Routes>
      <Footer/>   
      </BrowserRouter>
    </>
  )
  }
export default App
