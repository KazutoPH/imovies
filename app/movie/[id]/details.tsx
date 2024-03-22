import MovieDetails from "@/components/moviedetails/moviedetails";
import { getMovieById } from "@/lib/actions/movies.action";
import React from "react";

async function Details({ id }: { id: string }) {
  const movie = await getMovieById(id);
  return <MovieDetails movie={movie} />;
}

export default Details;
