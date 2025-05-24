import React from 'react';
import img from '.././backup-img.png'
import { Link } from 'react-router-dom';

const Card = ({movie}) => {


  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : img;
  return (
    <>
    <div className='col'>
      <div className='card shadow-sm' title={movie.title}>
      <img src={image} className='card-img-top' alt="img" />
        <div className='card-body'>
          <h5 className='card-title text-primary text-overflow-1'>{movie.title}</h5>
          <p className='card-text text-overflow'>{movie.overview}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <Link to={`/movie/${movie.id}`} className='btn btn-sm btn-success'>Read More</Link>
            <small>
            <i className='bi bi-star-fill text-warning'></i> &nbsp;
              {movie.vote_average} |&nbsp; {movie.vote_count} review
            </small>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card;