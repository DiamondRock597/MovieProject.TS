import {Film as FilmModel} from '../models/film';
import {Film as FilmDTO} from '../dto/film';
import {AnyAction} from 'redux';
import {getData, FilmsActions} from '../store/actions/types';
import {ThunkDispatch} from 'redux-thunk';
import {Store} from '../store/store';

const getFilmAPI = (payload: Array<FilmModel>): getData => ({type: FilmsActions.GetData, payload});
export class MovieAPI {
  public static async fetchMovie(dispatch: ThunkDispatch<Store, null, AnyAction>) {
    const API: string = 'api.themoviedb.org/3/movie/now_playing?';
    const APIkey: string = 'api_key=ebea8cfca72fdff8d2624ad7bbf78e4c';
    const res = await fetch(`http://${API}${APIkey}`);

    const data: {results: Array<FilmDTO>} = await res.json();
    const payload: Array<FilmModel> = data.results.map((item: FilmDTO) => FilmModel.parse(item));
    dispatch(getFilmAPI(payload));
  }
}
