import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import img from '../backup-img.png';
import { Link } from 'react-router-dom';

const MovieDetails = () => {

  const params = useParams();

  const [movie, setMovie] = useState([]);
  const key = "007601920961b99c1a7b2a8dd59cec2b";
  const url =`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : img;

  useEffect(()=>{
      async function fetchMovies() {
          try{
              const response = await fetch(url);
              const data = await response.json();
              setMovie(data);
              
          } catch(error){
              console.error("Error fetching movies:", error);
          }
      }
      fetchMovies();
  });

  useEffect(()=>{
    document.title = `${movie.title}`
  });

  return (
    <>
    <div className='container'>
      <h5 className='text-danger py-2 mb-3 border-bottom'>{movie.title}</h5>
      <div className='row g-5'>
        <div className='col-md-4'>
          <img src={image} className='img-fluid img-thumbnail' alt="img" />
        </div>

        <div className='col-md-8'>
          <h3 className='text-success'>{movie.title}</h3>
          <p className='mt-3'>{movie.overview}</p>

          {movie.genres ? (
            <p className='d-flex flex-wrap gap-2'>
              {movie.genres.map((genre) => (
                <span key={genre.id} className='badge bg-danger'>
                  {genre.name} 
                  </span>
                ))}
                </p>
              ) : ""}

              <p className='mt-2'>
                <i className='bi bi-star-fill text-warning'></i> {movie.vote_average} &nbsp; | &nbsp;
                <i className='bi bi-star-fill text-success'></i> {movie.vote_count} reviews
              </p>

              <table className='table table-bordered w-50 mt-4'>
                <tbody>
                  <tr>
                    <th>Runtime</th>
                    <td>{movie.runtime} mins </td>
                  </tr>
                  <tr>
                    <th>Budget</th>
                    <td>{movie.budget}</td>
                  </tr>
                  <tr>
                    <th>Revenue</th>
                    <td>{movie.revenue}</td>
                  </tr>
                  <tr>
                    <th>Release Date</th>
                    <td>{movie.release_date}</td>
                  </tr>
                </tbody>
              </table>

              <div className='d-flex gap-3 mt-3'>
                 
              <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} className='btn btn-warning' target='_blank'>
              View in IMDB</a>

              <Link to="/" className="btn btn-success">Back to Home</Link>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieDetails;