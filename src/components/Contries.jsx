import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Contries = () => {
    const [counties,setCounties] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    useEffect(() =>{
        axios.get("https://restcountries.com/v3.1/all").then(response =>{
            setCounties(response.data);
            console.log(response);
            setLoading(false)
        })
    },[])

    const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentCountries = counties.slice(indexOfFirstItem, indexOfLastItem);
    
        const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className='container'>
        <div className="row">
                    {
                        currentCountries.map((item,index) =>{
                            return <div className="col-lg-3">
                                <div className="card">
                                <img className='card-img-top' src={item.flags.png} alt="" />
                                <div className="card-body">
                                    {console.log(item)}
                                    <h3 className='card-title'>{item.name.common}</h3>
                                    <h4><i>Capital:</i>{item.capital}</h4>
                                    <h6><i>Population:</i> {item.population}</h6>
                                    <h6><i>Area:</i> {item.area}</h6>
                                </div>
                                </div>
                            </div>
                        })
                    }
                    
        </div>
        <div className="pWraper">
        <div className="pagination">
                {[...Array(Math.ceil(counties.length / itemsPerPage)).keys()].map(number => (
                    <button className='btn btn-primary' key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
        
    </div>
  )
}


