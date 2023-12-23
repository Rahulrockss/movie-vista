import { useState,useEffect } from 'react'
import './App.css'
import {fetchDataFromApi} from '../src/utils/api'

function App() {

  useEffect(()=>{
    apiTesting();
  },[])
  const apiTesting =()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res)
    })
  }
  
  return (
    <>
<h1>Movie Vista </h1>
    </>
  )
}

export default App
