import MovieDetails from "@/components/moviedetails/moviedetails";
import TVSeriesDetails from "@/components/moviedetails/tvseriesdetails";
import { getTvSeriesById } from "@/lib/actions/movies.action";
import React from "react";

async function Details({ id }: { id: string }) {
  const tv = await getTvSeriesById(id);
  return <TVSeriesDetails movie={tv} />;
}

export default Details;
