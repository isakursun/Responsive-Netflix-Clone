import axios from "axios";
import { ActionTypes } from "../../constants/actionTypes";
import { options } from "../../constants/constants";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

// !aksiyon objesi oluşturan bir fonksiyon
export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADİNG,
  payload,
});

// !verileri çekip hem de reducera aktarma
export const getMovies = () => {
  return async function (dispatch) {
    // ! veri çekme
    const res = await axios.get(
      '/movie/popular?language=tr',
      options
    );
    // ! ve bu gelen veriyi reducera aktarma
    dispatch({
      type: ActionTypes.SET_MOVIES,
      payload: res.data,
    });
  };
};


export const getGenres = () => (dispatch) =>{
  // verileri çekiyoruz
  axios.get('/genre/movie/list?language=tr', options)
  .then((res) => dispatch({
    type:ActionTypes.SET_GENRES,
    payload:res.data.genres
  }))
  .catch((err) => console.log(err))
}