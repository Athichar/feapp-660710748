import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/data';
import ReviewForm from './ReviewForm';

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) {
    return <p className="p-8 text-center text-slate-500">ไม่พบหนังเรื่องนี้ 😢</p>;
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 p-8 md:flex-row">
      {movie.poster && (
        <img src={movie.poster} alt={`โปสเตอร์ ${movie.title}`}
          className="w-56 shrink-0 self-start rounded-2xl shadow-lg" />
      )}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">{movie.title}</h1>
        <p className="mt-1 text-slate-500">ปี {movie.year} · {movie.genre}</p>
        <p className="mt-4 leading-relaxed text-slate-700">{movie.detail}</p>
        <Link to="/movies"
          className="mt-6 inline-block rounded-lg bg-cyan-600 px-4 py-2
                         font-semibold text-white hover:bg-cyan-700 transition">
          ← กลับไปหน้าหนังทั้งหมด
        </Link>
        <ReviewForm movieTitle={movie.title} />
      </div>
    </div>
  );
}

export default MovieDetail;