const API_TOKEN = "7eb3be2f06e9fa776dcfc51c2efa6420";
export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))

  }
  // API/TMDBApi.js

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }
  