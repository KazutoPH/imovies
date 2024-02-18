"use server"

const apihttp='https://api.themoviedb.org/3'

export async function trendingMovies() {
  const trending = await
  fetch(`${apihttp}/trending/movie/day?api_key=${process.env.THEMOVIESDB_API_KEY}&append_to_response=videos&language=en-US`)
  .then(res =>  res.json())
  .then(json =>{ return json.results.slice(0, 10)})

  return trending
}

export async function getTrailer(id:any){
  const trailer = await 
  fetch(`${apihttp}/movie/${id}/videos?api_key=${process.env.THEMOVIESDB_API_KEY}&language=en-US`)
  .then(res =>  res.json())
  .then(json => { 
    let result = json.results
    let filter = result.filter(( data:any) => data.name.includes('Official Trailer'))
    return filter[0].key

    // return json
   })

  return trailer
}

export async function popularMovies() {
  const movies = await
  fetch(`${apihttp}/movie/popular?api_key=${process.env.THEMOVIESDB_API_KEY}&append_to_response=videos&language=en-US&page=1&`)
  .then(res =>  res.json())
  .then(json =>{ return json})

  return movies
}

export async function popularTvSeries() {
  const tv = await
  fetch(`${apihttp}/tv/popular?api_key=${process.env.THEMOVIESDB_API_KEY}&append_to_response=videos&language=en-US&page=1&`)
  .then(res =>  res.json())
  .then(json =>{ return json})

  return tv
}

export async function getMovieById(id:string){
  const movie = await
  fetch(`${apihttp}/movie/${id}?api_key=${process.env.THEMOVIESDB_API_KEY}&append_to_response=credits,videos&language=en-US`)
  .then(res =>  res.json())
  .then(json =>{ return json})

  return movie
}

export async function getTvSeriesById(id:string){
  const tv = await
  fetch(`${apihttp}/tv/${id}?api_key=${process.env.THEMOVIESDB_API_KEY}&append_to_response=credits,videos&language=en-US`)
  .then(res =>  res.json())
  .then(json =>{ return json})

  // console.log(tv)
  return tv
}

export async function searchMovie(search:any){  

  const apiURL=`${apihttp}/search/multi?query=${search}&api_key=${process.env.THEMOVIESDB_API_KEY}&language=en-US`

  const movie = await
  fetch(apiURL)
  .then(res =>  res.json())
  .then(json =>{ return json.results})

  // console.log(movie)
  return movie
}

export async function getMovies(type:any, query: any, page: number) {  

    const movie = await
    fetch(`${apihttp}/${type}/${query}?&api_key=${process.env.THEMOVIESDB_API_KEY}&page=${page}&language=en-US`)
    .then(res =>  res.json())
    .then(json =>{ return json})
    return movie

}

export async function getSimilar(type:any, id: any, page: number) {  

  const movie = await
  fetch(`${apihttp}/${type}/${id}/similar?&api_key=${process.env.THEMOVIESDB_API_KEY}&page=${page}&language=en-US`)
  .then(res =>  res.json())
  .then(json =>{ return json})

  // console.log(movie)
  return movie

}

// export async function getMovieCast(id:string){
//   const movie = await
//   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.THEMOVIESDB_API_KEY}&append_to_response=credits`)
//   .then(res =>  res.json())
//   .then(json =>{ return json})

//   return movie
// }

// export async function getCredits(id:string){
//   const credit = await
//   fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.THEMOVIESDB_API_KEY}&append_to_response=credits`)
//   .then(res =>  res.json())
//   .then(json =>{ return json})

//   return credit
// }