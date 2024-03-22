"use server";

import { NextResponse } from "next/server";

const apihttp = "https://api.themoviedb.org/3";
const apikey = `api_key=${process.env.THEMOVIESDB_API_KEY}`;
const language = "language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${process.env.THEMOVIESDB_ACESS_TOKEN}`,
  },
};

export async function trendingMovies() {
  const apiURL = `${apihttp}/trending/movie/day?${apikey}&append_to_response=videos&${language}`;

  const trending = await fetch(apiURL, options).then((res) => {
    if (res.status === 200) return res.json();
    else
      return NextResponse.json({ error: "there was an error fetching data" });
  });

  if (trending.results) {
    return trending.results.slice(0, 10);
  }

  return trending;
}

export async function getTrailer(id: any) {
  const apiURL = `${apihttp}/movie/${id}/videos?${apikey}&${language}`;

  const trailer = await fetch(apiURL, options).then((res) => {
    if (res.status === 200) return res.json();
    else
      return NextResponse.json({ error: "there was an error fetching data" });
  });

  if (trailer.results) {
    let result = trailer.results;
    let filter = result.filter(
      (data: any) =>
        data.name.includes("Official Trailer") || data.type.includes("Trailer")
    );
    return filter[0].key;
  }

  return trailer;
}

export async function getMovieById(id: string) {
  const apiURL = `${apihttp}/movie/${id}?${apikey}&append_to_response=credits,videos&${language}`;

  const movie = await fetch(apiURL, options).then((res) => {
    if (res.status === 200) return res.json();
    else
      return NextResponse.json({ error: "there was an error fetching data" });
  });

  return movie;
}

export async function getTvSeriesById(id: string) {
  const apiURL = `${apihttp}/tv/${id}?${apikey}&append_to_response=credits,videos&${language}`;

  const tv = await fetch(apiURL, options).then((res) => {
    if (res.status === 200) return res.json();
    else
      return NextResponse.json({ error: "there was an error fetching data" });
  });

  return tv;
}

export async function searchMovie(search: string | null) {
  const apiURL = `${apihttp}/search/multi?query=${search}&${apikey}&${language}`;

  const movie = await fetch(apiURL, options).then((res) => {
    if (res.status === 200) return res.json();
    else
      return NextResponse.json({ error: "there was an error fetching data" });
  });

  if (movie.results) return movie.results;

  return movie;
}

export async function getMovies(
  type: string | null,
  query: string,
  page: number
) {
  const apiURL = `${apihttp}/${type}/${query}?&api_key=${process.env.THEMOVIESDB_API_KEY}&page=${page}&${language}`;

  const movie = await fetch(apiURL, options).then((res) => {
    if (res.status === 200) return res.json();
    else
      return NextResponse.json({ error: "there was an error fetching data" });
  });

  return movie;
}

export async function getByGenre(
  type: string | null,
  genre: string | null,
  page: number
) {
  const apiURL = `${apihttp}/discover/${type}?${apikey}&with_genres=${genre}&page=${page}&${language}`;
  const movie = await fetch(apiURL, options).then((res) => {
    if (res.status === 200) return res.json();
    else
      return NextResponse.json({ error: "there was an error fetching data" });
  });

  return movie;
}

export async function getSimilar(type: string, id: string, page: number) {
  const apiURL = `${apihttp}/${type}/${id}/similar?&${apikey}&page=${page}&${language}`;

  const similar = await fetch(apiURL, options).then((res) => {
    if (res.status === 200) return res.json();
    else
      return NextResponse.json({ error: "there was an error fetching data" });
  });

  // console.log(movie)
  return similar;
}
