import React from 'react'
import { useSelector } from 'react-redux'
import { baseImgUrl } from '../constants/constants'
import { Link } from 'react-router-dom'


const Hero = () => {
    // ! store'a abone olma
    const state = useSelector((store) => store.movieReducer)
    
    // !dizinin uzunluguna göre rstgele bir sayı bulma
    const i = Math.floor(Math.random() * state.popularMovies.length);

    // ! diziden rastgele bir film alma
    const movie = state.popularMovies[i];

  return (
    <div className='row p-4'>
        {state.isLoading && <p>Loading...</p>}

        {!state.isLoading && (
        <>
          <div className='col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center'>
            <h1>{movie.title}</h1>
            <p className='lead'>{movie.overview}</p>
            <p className='text-warning fw-bold'>IMDB: {(movie.vote_average).toFixed(1)}</p>
            <div className='d-flex gap-3 justify-content-center'>
              <Link to={`/movie/${movie.id}`} className='btn btn-danger'>Film İzle</Link>
              <button className='btn btn-info'>Listeye Ekle</button>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-center'>
          <img className='img-fluid rounded' src={`${baseImgUrl}${movie.backdrop_path}`} />
        </div>
        </>
          
        )}
    </div>
  )
}

export default Hero