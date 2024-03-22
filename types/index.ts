export interface movieDetailsType {
  id: string;
  name: string;
  media_type: string;
  backdrop_path?: string;
  poster_path?: string;
  original_title?: string;
  number_of_seasons: number;
  episode_run_time: number;
  first_air_date: string;
  in_production: string;
  title?: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  release_date: string;
  overview: string;
  genres?: genreType[];
  credits: creditsType;
  videos: videoType;
}

export interface genreType {
  name: string;
  id: string;
}

export interface creditsType {
  cast: castType[];
}

export interface castType {
  name: string;
  profile_path?: string;
}

export interface videoType {
  results: videoResultsType[];
}

export interface videoResultsType {
  name: string;
  key: string;
}
