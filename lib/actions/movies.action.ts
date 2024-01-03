"use server"

export async function popularMovies() {
  const movies = await
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.THEMOVIESDB_API_KEY}&language=en-US&page=1&`)
  .then(res =>  res.json())
  .then(json =>{ return json})

  return movies
}

export async function trendingMovies() {
  const trending = await
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.THEMOVIESDB_API_KEY}&language=en-US`)
  .then(res =>  res.json())
  .then(json =>{ return json.results.slice(0, 10)})

  return trending
}

export async function getTrailer(id:string){
  const trailer = await 
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.THEMOVIESDB_API_KEY}&language=en-US`)
  .then(res =>  res.json())
  .then(json => { 
    let result = json.results
    let filter = result.filter(( data:any) => data.name.includes('Official Trailer'))
    return filter[0].key

    // return json
   })

  return trailer
}