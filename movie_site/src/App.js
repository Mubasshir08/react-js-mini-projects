import './App.css';
import { useEffect, useState } from 'react';
import SeachIcon from "./search.svg";
import MovieCard from './components/MovieCard';

const  API_URL = 'http://www.omdbapi.com?apikey=62bbc0e6';
function App() {

  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search);
  } 
  const [movies, setMovies] = useState([]); 
  const [searchTerm, setSeachTerm] = useState('');
  // console.log(movies);

  useEffect(() =>{
    searchMovies("superman")
  },[]);

//   const movie = {
//     "Title": "Batman v Superman: Dawn of Justice",
//     "Year": "2016",
//     "imdbID": "tt2975590",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// }

  return (
    <div className="app">
      <h1>MovieApp</h1>
      <div className="search">
        <input type="text" placeholder='Search For Movies' 
         value={searchTerm} 
         onChange={(e) => setSeachTerm(e.target.value)}
        />
        <img src={SeachIcon} alt="search-icon" onClick={() => searchMovies(searchTerm)}/>
      </div>
        {
          movies.length > 0 
          ? (
            <div className="container">
              {
                movies.map((movie) => <MovieCard movie = {movie} key = {movie.imdbID}></MovieCard> )
              }
            </div>
          )
          : (
            <div className="empty">
              <h2>No Movies found</h2>
            </div>
          )
        }
    
    </div>
  );
}

export default App;
