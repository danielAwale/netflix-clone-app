const key = process.env.MOVIE_API_KEY

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: ``,
  requestTrending: ``,
  requestHorror: ``,
  requestUpcoming: ``,
}