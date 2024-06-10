import {useEffect, useState} from 'react'
import React from 'react'
import axios from 'axios'
import "../components/axios.css"


export default function Users(){
  const [users,setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);


    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/comments").then(response=>{
        setUsers(response.data)
       })
    },[]);

    const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentCountries = users.slice(indexOfFirstItem, indexOfLastItem);
    
        const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <table className='table table-bordered table-hover table-striped mt-5'>
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Address (City)</th>
                <th>Email</th>
                <th>Company (Name)</th>
              </tr>
            </thead>
            <tbody className='table table-bordered table-hover table-striped'>
              {
                currentCountries?.map((item,index) =>{
                  return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.company}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination">
                {[...Array(Math.ceil(users.length / itemsPerPage)).keys()].map(number => (
                    <button className='btn btn-primary' key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
    </div>
  )
}
