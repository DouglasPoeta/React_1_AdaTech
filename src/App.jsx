import "./App.css";
import "./components/card/style.css";
 import { MovieList } from "./components/movieList";
//import Saudacao from './components/saudacao'
function App() {
  const movies = [
    {
      id: 1,
      fig:"https://upload.wikimedia.org/wikipedia/pt/6/69/The_Avengers_Cartaz.jpg",
      title: "Avengers",
      genre: "Heróis",
      releaseYear: 2022,
      rating: "****",
    },
    {
      id: 2,
      fig:"https://upload.wikimedia.org/wikipedia/pt/b/b0/Avatar-Teaser-Poster.jpg",
      title: "Avatar",
      genre: "Fantasia",
      releaseYear: 2021,
      rating: "**",},
    {
      id: 3,
      fig:"https://upload.wikimedia.org/wikipedia/pt/f/f5/The_Last_Naruto_the_Movie.jpg",
      title: "Naruto",
      genre: "Anime",
      releaseYear: 2006,
      rating: "*****",
    },
    {
      id: 4,
      fig:"https://upload.wikimedia.org/wikipedia/pt/c/c1/Super_Mario_3D_World_capa.png",
      title: "Super Mário",
      genre: "Desenho",
      releaseYear: 2023,
      rating: "***",}

  ];

  return (
    <>
      <MovieList movies={movies}/>  
    </>
  );
}

export default App;
