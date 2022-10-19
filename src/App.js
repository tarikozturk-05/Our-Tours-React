import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
//! I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
   
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const deleteTour=(id)=>{
      const newTour = data.filter((tour)=>tour.id !== id)
      setData(newTour)

    }
    

    const axiosTours =async()=>{
      setLoading(true)

      try {
          const response = await axios(url);
          setData(response.data)
            setLoading(false)
          
      } catch (error) {
        setLoading(true)
        console.log(error);
      }
    }
   useEffect(() => {
     
 setTimeout(() => {
  axiosTours()
 }, 1200);
    
   }, [])
   if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
   }

   if(data.length === 0){
    return(
      <main>
        <div className='title'>
          <h2>No Tours left</h2>
          <button className='btn' onClick={() => axiosTours()}>
            Refresh
          </button>
        </div>
      </main>
    )
   }

   
  
// console.log(data)
  return(
      <div>
        <Tours data={data} deleteTour={deleteTour}  />

      </div>
  ) 
}

export default App
