import { useState } from 'react';
import { movies } from '../data/data';

function RecommendedMovie({ title, year }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-base font-bold text-slate-700">{title} ({year})</p>
      <button
        onClick={() => setLikes(l => l + 1)}
        className="rounded-lg bg-pink-100 px-4 py-2 text-pink-700
                   font-semibold hover:bg-pink-200 transition">
        ❤️ {likes}
      </button>
    </div>
  );
}

function Home() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const recommended = movies.slice(0, 3);
  const hasNext = index < movies.length - 1;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const movie = movies[index];

  return (
    <div className="mx-auto max-w-2xl p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-600">ยินดีต้อนรับสู่ MovieHub</p>

      <h2 className="mt-10 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
      <div className="mt-8 space-y-8">
        {recommended.map(m => (
          <RecommendedMovie key={m.id} title={m.title} year={m.year} />
        ))}
      </div>

      <hr className="my-10 border-slate-200" />

      <h2 className="text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม</h2>

      <div className="mt-8 flex flex-col items-center">
        <button onClick={handleNextClick}
                className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white">
          เรื่องถัดไป
        </button>

        {movie.poster && (
          <img src={movie.poster} alt={`โปสเตอร์ ${movie.title}`}
               className="mt-4 w-40 rounded-2xl" />
        )}

        <p className="mt-3 text-lg font-bold text-slate-800">
          {movie.title} ({movie.year})
        </p>
        <p className="text-sm text-slate-500">{movie.genre}</p>

        <button onClick={handleMoreClick} className="mt-2 text-sm text-cyan-600">
          อ่านเรื่องย่อ
        </button>
        {showMore && <p className="mt-2 text-slate-700">{movie.detail}</p>}
      </div>
    </div>
  );
}

export default Home;