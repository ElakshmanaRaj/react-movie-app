import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';

const Search = ({apiPath}) => {

  const [searchPath] = useSearchParams();
  const queryTerm = searchPath.get("q");
  const {data : movies} = useFetch(apiPath, queryTerm);

  useEffect(()=>{
    document.title = `Search result for ${queryTerm}`
  });
  return (
    <>
    <div className='container'>
      <h5 className='text-danger py-2 border-bottom'>{movies.length ==0 ?`No result found for ${queryTerm}`:`Result for ${queryTerm}:`}</h5>
      <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4'>
        {movies.map((movie)=>{
          return <Card key={movie.id} movie ={movie}/>
        })}
      </div>
    </div>
    </>
  )
}

export default Search;