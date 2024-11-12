import React, { useEffect, useState } from 'react';
import './RowPost.css';
import { API_KEY, imageUrl } from '../../Constants/constants';
import axios from '../../axios';

function RowPost() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    })
  }, []);
  return (
    <div className='row'>
      <h1>Netflix Originals</h1>
      <div className="posters">
        {
        movies.map((obj) => 
           <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
    </div>
  )
}

export default RowPost
