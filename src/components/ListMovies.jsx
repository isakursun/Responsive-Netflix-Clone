import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseImgUrl, options } from '../constants/constants'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


const ListMovies = ({genre}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        axios.get(`/discover/movie?language=tr&with_genres=${genre.id}`, options )
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err))
    },[])

  return (
    <div className='p-4'>
        <h1>{genre.name}</h1>
        <Splide options={{
            autoWidth: true,
            gap: '10px',
            pagination: false,
        }}>
            {movies.map((movie)=>(
                <SplideSlide key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                    <img className='movie' src={`${baseImgUrl}${movie.poster_path}`} />
                    </Link>
                </SplideSlide>
            ))}
        </Splide>
    </div>
  )
}

export default ListMovies