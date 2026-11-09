import React, { useEffect, useState } from 'react'
import './App.css'
import product from './Additional/product'
const App = () => {
  const [mobile,setMobile]=useState([]);
 useEffect(()=>{
  setMobile(product);
 },[])
 console.log(mobile)
  return (
    <div>hello
      <h1>{mobile.name}</h1>
      
      <div>
        {
          mobile.map((mobile)=>{
            <div key={mobile.name}>
             <h3>{mobile.name}</h3>
             </div>
          })
        }
      </div>
    </div>
  )
}

export default App