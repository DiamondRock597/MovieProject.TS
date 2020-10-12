export interface Film {
  id: number;
  original_title: string;
  favourite: boolean;
  adult: boolean;
  overview: string;
  vote_average: number;
  release_date: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  genre_ids: Array<number>;
  title: string;
}
