"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { searchMovie } from "@/lib/actions/movies.action";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { movieDetailsType } from "@/types";

function SearchResults() {
  const [searchResult, setSearchResult] = useState<movieDetailsType[] | null>();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      const result = await searchMovie(search);
      setSearchResult(await result);
    };

    if (search) fetchData();
  }, [search]);

  return (
    <>
      <AnimatePresence>
        {search && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            exit={{ height: 0 }}
            className="mt-2 flex flex-col max-h-[400px] w-full bg-darkgrey rounded absolute z-50 overflow-y-scroll"
          >
            {searchResult &&
              searchResult
                ?.filter(
                  (item: movieDetailsType) => item.media_type !== "person"
                )
                .map((data: movieDetailsType, i: number) => (
                  <Link href={`/${data.media_type}/${data.id}`} key={i}>
                    <div className="flex flex-row w-full gap-5 p-2 border-b-[1px] border-gray-400 hover:bg-grey">
                      <div className="aspect-[2/3] w-[50px] relative bg-[#3b3b3b]">
                        {data.poster_path ? (
                          <Image
                            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                            alt={data.poster_path ? data.poster_path : ""}
                            fill
                            unoptimized
                            className="object-cover relative"
                          />
                        ) : (
                          <div className="w-full h-full border-gray-800 border-2" />
                        )}
                      </div>

                      <div className="flex flex-col flex-1">
                        <p className=" text-xl leading-tight text-white textShadow font-bold">
                          {data.media_type === "tv" ? data.name : data.title}
                        </p>
                        <p className=" text-base text-white textShadow font-light">
                          {data.media_type === "tv"
                            ? data.first_air_date
                            : data.release_date}
                        </p>
                        <p className=" text-white text-sm font-normal italic line-clamp-1 text-ellipsis ... ">
                          {data.overview}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SearchResults;
