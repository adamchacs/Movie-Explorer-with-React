import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import Pagination from './components/Pagination';
import './App.css';

const API_KEY = "53ab398f073f9cf789fa8d5c1e887679";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      let url = search
        ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}&page=${page}`
        : `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`;

      const res = await fetch(url);
      const data = await res.json();
      let results = data.results || [];

      // Sorting logic
      if (sort === "dateAsc") results.sort((a,b) => new Date(a.release_date) - new Date(b.release_date));
      if (sort === "dateDesc") results.sort((a,b) => new Date(b.release_date) - new Date(a.release_date));
      if (sort === "ratingAsc") results.sort((a,b) => a.vote_average - b.vote_average);
      if (sort === "ratingDesc") results.sort((a,b) => b.vote_average - a.vote_average);

      setMovies(results);
      setTotalPages(data.total_pages);
    }

    fetchMovies();
  }, [page, search, sort]);

  return (
    <div className="App">
      <Header onSearchChange={setSearch} onSortChange={setSort} />
      <MovieGrid movies={movies} imageBase={IMAGE_URL} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default App;
