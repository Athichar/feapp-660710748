import { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ id, title, year, poster, titleTh, rating }) {
  const [likes, setLikes] = useState(0);

  return (
    <Link to={`/movies/${id}`}
          className="block overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md
                     transition hover:-translate-y-1 hover:shadow-xl">
      {poster ? (
        <img src={poster} alt={`โปสเตอร์ ${title}`}
             className="aspect-[2/3] w-full object-cover" />
      ) : (
        <div className="flex aspect-[2/3] w-full items-center justify-center
                        bg-slate-200 text-4xl">🎬</div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-slate-800">{title} ({year})</h3>
        {titleTh && <p className="text-sm text-slate-600">{titleTh}</p>}
        {rating && <p className="mt-1 text-sm text-slate-500">⭐ {rating}</p>}
        <button
          onClick={(e) => {
            e.preventDefault();
            setLikes(likes + 1);
          }}
          className="mt-3 rounded-lg bg-pink-100 px-4 py-2 text-pink-700
                     font-semibold hover:bg-pink-200 transition">
          ❤️ {likes}
        </button>
      </div>
    </Link>
  );
}

export default MovieCard;