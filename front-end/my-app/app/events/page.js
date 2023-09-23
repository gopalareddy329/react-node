
"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';




const AllEvents = () => {
    const [events,setEvents]=useState([]);
    const fetchAllEvents = async () =>{
        const response = await axios.get("https://dummyjson.com/products")
        const data=await response.data.products
        setEvents(data);
        console.log(events)
    
    };
    useEffect(()=>{
        fetchAllEvents();
    },[])
    
  return (
    <div>
        <h1>Events</h1>
            {events.map((event)=>(
                <div>
                    <h1>ID:{event.id}</h1>
                    <h1>Title:{event.title}</h1>
                    <p>description:{event.description}</p>
                    <span>price:{event.price}</span>
                    <span>discountPercentage:{event.discountPercentage}</span>
                    <h1>Rating:{event.rating}</h1>
                    {event.images.map((img)=>( <img src={img}/> ))}
                </div>
            ))}
        
    </div>
  )
}

export default AllEvents