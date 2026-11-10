import React, { useEffect, useState } from 'react'
import './App.css'
import product from './Additional/product'
const App = () => {
  const changeNumber=10;
  const [mobile,setMobile]=useState([]);
  const [showMore,setShowMore]=useState(changeNumber);
  const [search,setSearch]=useState('');
  const [sort,setSort]=useState('');
  const addNUmber=5;

 useEffect(()=>{
  setMobile(product);
 },[]);
 const add=()=>{
    setShowMore((prev)=>prev+addNUmber)
 };
 console.log(showMore);
 const searchMobile=mobile.filter((mobile)=>mobile.name.toLowerCase().includes(search.toLowerCase()));
   

const getNumericPrice = (price) => Number(price.replace(/,/g, ''));

if (sort === 'asc') {
  searchMobile.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
} else if (sort === 'dsc') {
  searchMobile.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
}

 
 const trim=searchMobile.slice(0,showMore);
  return (
    <div className='main'>
      <header>
      <h1>ANV Mobile Store</h1>
      <div className='header'>
      
      <input type='text' value={search || ''} placeholder='Search' onChange={(e)=>setSearch(e.target.value)}></input>
      <select id="year" value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option value=""> Search By Price </option>
        <option value="asc">Price Low to High</option>
        <option value="dsc">Price High to Low</option>
      </select>
      </div>
      </header>
      <div className='sub'>
        {
          trim.map((mobile)=>(
            <div className='card' key={mobile.id}>
              <img src={mobile.image}></img>
             <h3>{mobile.name}</h3>
             <p>Price:{mobile.price}/-</p>
             </div>
          ))
        }
         </div>
        {
          trim.length < searchMobile.length && (
          <div className='btn'>
              <button className='more-btn' onClick={add}>Show More</button>
          </div>
          )}
        
     
    </div>
  )
}

export default App