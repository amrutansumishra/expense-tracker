import React from 'react';
import './pagination.scss';

const Pagination = () => {
  return (
    <div className='pagination-content'>
        <span>Previous</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>Next</span>
    </div>
  )
}

export default Pagination