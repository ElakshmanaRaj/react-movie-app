import React from 'react';
import Header from './assets/components/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieLists from './assets/pages/MovieLists';
import MovieDetails from './assets/pages/MovieDetails';
import Search from './assets/pages/Search';
import PageNotFound from './assets/pages/PageNotFound';
import Footer from './assets/components/Footer';
import {Scroll} from './assets/components/Scroll';


function App() {
  return (
    <Router>
      <Scroll/>
      <Header />
      <Routes>
        <Route path="/" element={<MovieLists title="Your Guide to Movies" apiPath ="movie/now_playing" />} />
        <Route path="movies/popular" element={<MovieLists title="Popular Movies" apiPath ="movie/popular" />}/>
        <Route path="movies/top" element={<MovieLists title="Top Rated Movies" apiPath ="movie/top_rated" />}/>
        <Route path="movies/upcoming" element={<MovieLists title="Upcoming Movies" apiPath ="movie/upcoming" />}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="search" element={<Search apiPath="search/movie"/>}/>
        <Route path='*' element={<PageNotFound title="Page Not Found"/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;