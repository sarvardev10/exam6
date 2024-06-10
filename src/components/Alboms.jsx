import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Alboms = () => {
    const [albooms,setAlbooms] = useState([]);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then(response=>{
            setAlbooms(response.data);
            console.log(response);
        },[]);
    })
  return (
    <div className='container'>
        <div className="row">
            {
                albooms.map((item,index)=>{
                    return <div className='col-lg-3'>
                        <div className="card">
                            <h5>ID: {item.id}</h5>
                            <h5><i>User Id</i>: {item.userId}</h5>
                            <h3 className='card-title'><i>Title:</i> {item.title}</h3>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
