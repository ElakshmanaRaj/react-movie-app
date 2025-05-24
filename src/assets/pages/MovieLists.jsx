import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';


const MovieLists = ({title, apiPath}) => {
  
  const {data:movies} = useFetch(apiPath);

  useEffect(()=>{
    document.title = title;
  });

  const navigate = useNavigate();

  return (
    <div className='container'>
      {title == "Your Guide to Movies" ?(
        <div className='bg-body-tertitary p-4 rounded mt-3 border mb-4'>
          <h4>Welcome to MovieSpot</h4>
          <p>Find your next favorite movie with smart suggestions, handpicked collections, 
            and lightning-fast search – your ultimate film discovery companion.</p>
            <button className='btn btn-outline-success' onClick={()=>{navigate("/movies/upcoming")}}>Explore Now</button>
        </div>
      ):""}
      <h4 className='py-2 border-bottom'>{title}</h4>
      <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
        {movies.map((movie)=>{
          return <Card key={movie.id} movie ={movie}/>
        })}
      </div>
    </div>
  )
}

export default MovieLists;

