import { movies } from '../data/data';
import MovieCard from '../component/MovieCard';

function Movies() {
  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {movies.map(m => (
          <MovieCard key={m.id} id={m.id} title={m.title} year={m.year} />
        ))}
      </div>
    </div>
  );
}

export default Movies;