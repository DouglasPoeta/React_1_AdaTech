import PropTypes from 'prop-types' 

function MovieCard({ id, title, genre, releaseYear, rating, fig }) {
  return (
    <div className="movie-card">
      <div className="card-header">
        <h5> {id}</h5>
      </div>
      <div className="card-content">
        <img src={fig} alt={title} className="movie-poster" />
        <div className="text-content">
          <h2 className="movie-title">{title}</h2>
          <p className="movie-genre">{genre}</p>
          <span className="movie-release-year">{releaseYear}</span>
        </div>
      </div>
      <div className="card-footer">
        <h6 className="movie-rating">{rating}</h6>
      </div>
    </div>
  );
}


export { MovieCard };

MovieCard.PropTypes = {
  id:PropTypes.number, 
  title:PropTypes.string, 
  genre:PropTypes.string, 
  releaseYear:PropTypes.number, 
  rating:PropTypes.string, 
  fig:PropTypes.string
 }