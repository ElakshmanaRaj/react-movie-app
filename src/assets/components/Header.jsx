import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../App.css';

const Header = () => {

  const navigate = useNavigate();

  const handleSearch = (e) =>{
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  }



  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark'>
      <div className='container'>

        <NavLink to="/" className='navbar-brand'>
          <i className="bi bi-camera-reels"></i> MovieSpot
        </NavLink>

    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className='collapse navbar-collapse' id='menu'>
          <ul className='navbar-nav px-4 me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="movies/top" className='nav-link'>Top Rated</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="movies/popular" className='nav-link'>Popular</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="movies/upcoming" className='nav-link'>Upcoming</NavLink>
            </li>
          </ul>
          <form onSubmit={handleSearch} className="d-flex" role="search">
            <input
              type="search"
              name="search"
              autoComplete='off'
              className='form-control'
              placeholder='Search movies here'
              aria-label='Search'
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
