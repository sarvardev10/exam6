import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Cards = () => {
    const [albums,setAlbums] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [itemsPerPage,setitemsPerPage] = useState(100);
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response=>{
            setAlbums(response.data);
        })
    },[]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCountries = albums.slice(indexOfFirstItem,indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <div className='container'>
        <div className="row">
            {
                currentCountries.map((item,index) =>{
                    return <div className="col-lg-3">
                        <div className="card">
                        <img className='card-img-top' src={item.url} alt="" />
                        </div>
                    </div>
                })
            }
        </div>
        <div className="paginationAlbums">
        {[...Array(Math.ceil(albums.length / itemsPerPage)).keys()].map(number => (
                    <button className='btn btn-primary' key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
        </div>
    </div>
  )
}
