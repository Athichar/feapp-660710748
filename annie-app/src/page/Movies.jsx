import { useState } from 'react';
import { movies } from '../data/data';
import MovieCard from '../component/MovieCard';
import MovieGallery from '../component/MovieGallery';

// ลูกคนที่ 1: ไม่มี state ของตัวเอง รับค่ากับฟังก์ชันจากแม่
function SearchBox({ query, onQueryChange }) {
  return (
    <input
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="ค้นหาหนัง..."
      className="w-full rounded-lg border border-slate-300 px-3 py-2
                 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  );
}

// ลูกคนที่ 2: แค่วาดรายการที่ได้รับมา (ใช้ MovieCard ที่เรามีอยู่แล้ว)
function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="mt-6 text-center text-slate-400">ไม่พบหนังที่ค้นหา 🔍</p>;
  }
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {movies.map(m => (
        <MovieCard key={m.id} id={m.id} title={m.title} year={m.year}
                   poster={m.poster} titleTh={m.titleTh} rating={m.rating} />
      ))}
    </div>
  );
}

// แม่: ถือ state ชุดเดียว แล้วแจกให้ลูกทั้งสอง
function Movies() {
  const [query, setQuery] = useState('');

  const shown = movies.filter(m =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>

      <MovieGallery />

      <div className="mt-10">
        <SearchBox query={query} onQueryChange={setQuery} />
        <MovieList movies={shown} />
      </div>
    </div>
  );
}

export default Movies;