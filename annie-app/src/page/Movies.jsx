import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/data';
import GenreBox from '../component/GenreBox';

function SearchBox({ query, onQueryChange }) {
  return (
    <div className="space-y-2">
      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="ค้นหาหนัง..."
        className="rounded-lg border border-slate-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <p className="text-sm text-slate-500">กำลังค้นหา: <strong>{query || '...'}</strong></p>
    </div>
  );
}

function Movies() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  const genres = [...new Set(movies.map(m => m.genre))];

  const shown = movies.filter(m => {
    const matchQuery = m.title.toLowerCase().includes(query.toLowerCase());
    const matchGenre = genre === 'all' || m.genre === genre;
    return matchQuery && matchGenre;
  });

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>

      <div className="space-y-2 px-4">
        <SearchBox query={query} onQueryChange={setQuery} />
        <GenreBox genre={genre} onGenreChange={setGenre} genres={genres} />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {shown.map(m => (
          <Link key={m.id} to={`/movies/${m.id}`}
               className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
            <p className="text-sm text-slate-500">ปี {m.year} {m.genre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movies;