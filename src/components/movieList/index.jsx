import { MovieCard } from "../card";
import "./style.css";
import PropTypes from 'prop-types'
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <MovieCard
            id={movie.id}
            title={movie.title}
            fig={movie.fig}
            genre={movie.genre}
            releaseYear={movie.releaseYear}
            rating={movie.rating}
          />
        </div>
      ))}
    </div>
  );
}

export { MovieList };

MovieList.PropTypes = {
  movie: PropTypes.array, 
}
