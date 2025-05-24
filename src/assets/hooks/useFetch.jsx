import { useState, useEffect } from 'react';

const Fetch = (apiPath, queryTerm ="") => {
    const[data, setData] = useState([]);
    const key = "007601920961b99c1a7b2a8dd59cec2b";
    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;
    useEffect(()=>{
        async function fetchMovies() {
            try{
                const response = await fetch(url);
                const data = await response.json();
                setData(data.results);
            } catch(error){
                console.error("Error fetching movies:", error);
                setData([]);
            }
        }
        fetchMovies();
    },[url])
  return (
    {data}
  )
}

export default Fetch;