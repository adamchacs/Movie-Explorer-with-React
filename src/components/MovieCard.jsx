export default function MovieCard({ movie, imageBase }) {
  const poster = movie.poster_path
    ? imageBase + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="movie-card">
      <img src={poster} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Release: {movie.release_date || "N/A"}</p>
        <p>Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</p>
      </div>
    </div>
  );
}
