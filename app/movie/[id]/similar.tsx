import MovieCarousel from "@/components/carousel/movieCarousel";
import { getSimilar } from "@/lib/actions/movies.action";
import React from "react";

async function Similar({ id }: { id: string }) {
  const similar = await getSimilar("movie", id, 1);
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="max-w-7xl w-full">
        <MovieCarousel
          movies={similar}
          title={"Similar Movies"}
          type={"movie"}
        />
      </div>
    </div>
  );
}

export default Similar;
