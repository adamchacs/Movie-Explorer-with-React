import MovieCard from './MovieCard';

export default function MovieGrid({ movies, imageBase }) {
  return (
    <main>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} imageBase={imageBase} />
        ))}
      </div>
    </main>
  );
}
