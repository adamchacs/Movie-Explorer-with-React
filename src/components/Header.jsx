export default function Header({ onSearchChange, onSortChange }) {
  return (
    <header>
      <h1>Movie Explorer</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="">Sort Movies</option>
          <option value="dateAsc">Release Date (Asc)</option>
          <option value="dateDesc">Release Date (Desc)</option>
          <option value="ratingAsc">Rating (Asc)</option>
          <option value="ratingDesc">Rating (Desc)</option>
        </select>
      </div>
    </header>
  );
}
