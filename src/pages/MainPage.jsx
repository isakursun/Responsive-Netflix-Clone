import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";
import ListMovies from "../components/ListMovies";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    // ! loading in değerini değiştirdik
    dispatch(setLoading(true));

    // ! popüler film verisini çekme ve store a gönderme
    dispatch(getMovies());

    // ! kategori verilerini çekip store a aktarma
    dispatch(getGenres());
  },[]);
  return (
    <div>
      <Hero />
      {/* her kategori için o kategoriye ait filmleri 
       listeleyecek bileşeni ekrana bastık*/}
      {state.genres.map((genre) => (<ListMovies key={genre.id} genre={genre} />))}
    </div>
  );
};

export default MainPage;
