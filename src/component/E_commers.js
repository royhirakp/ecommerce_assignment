import { useEffect, useState } from "react";
import Card from "./Card";
import './Booksearch.css'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const E_commers =()=>{
    const [inputValue, setInputValue] = useState('')
    const [fetchData, setFetchData] = useState([]);
    const [ page , setpage] = useState(1)

    useEffect(()=>{

        axios.get(`https://dummyjson.com/products/search?q=phone`).then(function (response) {
        // console.log(response.data.products);
        setFetchData(response.data.products)
        }).catch(function (error) {
        console.error(error);
        });
    },[])

    const submitfunction =(e)=>{
        e.preventDefault() 
        console.log('function is working')
        // console.log(inputValue)
        // https://dummyjson.com/products/search?q=
        fetch(`https://dummyjson.com/products/search?q=${inputValue}`).then((res)=>{
            return res.json()
        }).then((data)=>{
            // console.log(data.products,'pro')
            setFetchData(data.products)
            // console.log(fetchData)
        })
    }
    return (
        <>
        <div className="mainContainer">
            <dvi className='headding'>
                <h1>
                    E-Commers
                </h1>
            </dvi>

            <div className="search-bar">
                <form onSubmit={submitfunction}>
                <input type='text' onChange={(e)=>setInputValue(e.target.value)} />
                {/* <input type='submit' /> */}
                <button type='submit'>search</button>
                </form>                
            </div>

            <div className="display">
            <div className='DataContainer'>
      {
        fetchData.map((data,i)=>{
          return (
            <Card key={i*0.251252} data= {data}/>
          )
        })
      }
    </div>
           

            </div>

        </div>
        <h1>{page}</h1>
        <Stack spacing={2}>
      <Pagination count={`${parseInt(fetchData.length/2)}`} onChange={(e,value)=>{setpage(value)}} />
    </Stack>
        </>
    )
}

export default E_commers;