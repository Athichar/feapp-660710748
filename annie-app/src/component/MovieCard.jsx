import { useState } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ id, title, year }) {
  const [likes, setLikes] = useState(0);

  return (
    <Link to={`/movies/${id}`}
          className="block rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                     transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-lg font-bold text-slate-800">{title} ({year})</h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          setLikes(likes + 1);
        }}
        className="mt-3 rounded-lg bg-pink-100 px-4 py-2 text-pink-700
                   font-semibold hover:bg-pink-200 transition">
        ❤️ {likes}
      </button>
    </Link>
  );
}

export default MovieCard;