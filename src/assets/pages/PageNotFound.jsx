import React from 'react';
import img from '../404.jpg'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
    <div className='container'>
      <img src={img} className='h-50 w-50' alt="img" />
      <Link to="/" className='btn btn-danger text-center'>Go to Home</Link>
    </div>
    </>
  )
}

export default PageNotFound;