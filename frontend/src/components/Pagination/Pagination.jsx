import React from 'react';
import './pagination.scss';

const Pagination = ({pageNo,setPageNo,isLastPage}) => {
  return (
    <div className='pagination-content'>
        {pageNo !==1 && 
        <><span onClick={()=>setPageNo((prev)=>prev-1)}>Previous</span>
        <span onClick={()=>setPageNo((prev)=>prev-1)}>{pageNo-1}</span></>}
        <span className='active'>{pageNo}</span>
        {!isLastPage&&<>
        <span onClick={()=>setPageNo((prev)=>prev+1)}>{pageNo+1}</span>
        <span onClick={()=>setPageNo((prev)=>prev+1)}>Next</span></>}
    </div>
  )
}

export default Pagination