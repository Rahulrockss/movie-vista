import { useState,useEffect } from 'react'
import './App.css'
import {fetchDataFromApi} from '../src/utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration} from '../src/store/homeSlice'

function App() {
  const dispatch = useDispatch()
  const {url}=useSelector((state)=>{
    state.home
  })
  useEffect(()=>{
    apiTesting();
  },[])
const apiTesting =()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      console.log(res)
      dispatch(getApiConfiguration(res))
    })
  }
  return (
    <>
        <div className="App"><h1>
          {url?.total_pages}</h1>
        </div>
    </>
  )
  }
export default App
