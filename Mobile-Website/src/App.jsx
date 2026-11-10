import React, { useEffect, useState } from 'react'
import './App.css'
import product from './Additional/product'
const App = () => {
  const changeNumber=10;
  const [mobile,setMobile]=useState([]);
  const [showMore,setShowMore]=useState([changeNumber]);
  const [search,setSearch]=useState('');
 
  const addNUmber=5;

 useEffect(()=>{
  setMobile(product);
 },[]);
 const add=()=>{
    setShowMore((prev)=>prev+addNUmber)
 };
 const searchMovie=mobile.filter((mobile)=>mobile.name.toLowerCase().includes(search.toLowerCase()));
   const trim=searchMovie.slice(0,showMore);
 console.log(searchMovie);
  return (
    <div className='main'>
      <header>
      <h1>ANV Mobile Store</h1>
      <div className='header'>
      
      <input type='text' placeholder='Search' onChange={(e)=>setSearch(e.target.value)}></input>
      <select id="year">
        <option value=""> Search By Price </option>
        <option value="asc">20,000-50,000</option>
        <option value="dsc">Year By Decending</option>
      </select>
      </div>
      </header>
      <div className='sub'>
        {
          trim.map((mobile)=>(
            <div className='card' key={mobile.id}>
              <img src={mobile.image}></img>
             <h3>{mobile.name}</h3>
             <p>Price:{mobile.price}</p>
             </div>
          ))
        }
         </div>
        {
          trim.length < mobile.length && (
          <div className='btn'>
              <button className='more-btn' onClick={add}>Show More</button>
          </div>
          )}
        
     
    </div>
  )
}

export default App