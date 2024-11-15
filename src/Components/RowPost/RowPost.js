import React, { useEffect, useState } from 'react';
import './RowPost.css';
import Youtube from 'react-youtube';
import { imageUrl, API_KEY } from '../../Constants/constants';
import axios from '../../axios';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results);
    })
  }, []);

  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) =>{
       if(response.data.results.length !== 0){setUrlId(response.data.results[0]) } else{
        console.log('array is empty...');
       }
    })
  }
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">
        {
        movies.map((obj) => 
           <img onClick={() => handleMovie(obj.id)} className= { props.isSmall ? 'smallPoster' : 'poster' } src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
      { urlId &&  <Youtube videoId={urlId.key} opts={opts}/> }      
    </div>
  )
}

export default RowPost
