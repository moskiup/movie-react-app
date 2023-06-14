const apiConfig = {
  baseUrl : 'https://api.themoviedb.org/3/',
  apiKey: import.meta.env.VITE_API_KEY,
  originalImage : (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w300Image : (imgPath) => `https://image.tmdb.org/t/p/w300${imgPath}`
}

export default apiConfig;