import {Film as FilmDTO} from '../dto/film';

export class Film {
  public id: number;
  public originalTitle: string;
  public favourite: boolean;
  public adult: boolean;
  public overview: string;
  public voteAverage: number;
  public releaseDate: string;
  public path: string;

  public constructor(
    id: number,
    originalTitle: string,
    adult: boolean,
    overview: string,
    voteAverage: number,
    releaseDate: string,
    poster_path: string,
  ) {
    this.id = id;
    this.originalTitle = originalTitle;
    this.favourite = false;
    this.adult = adult;
    this.overview = overview;
    this.voteAverage = voteAverage;
    this.releaseDate = releaseDate;
    this.path = poster_path;
  }

  public static parse: (json: FilmDTO) => Film = (json) =>
    new Film(json.id, json.original_title, json.adult, json.overview, json.vote_average, json.release_date, json.poster_path);
}
