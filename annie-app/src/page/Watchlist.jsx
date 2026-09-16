import { useState } from 'react';

const GENRES = ['Sci-Fi', 'Animation', 'Thriller', 'Drama', 'Comedy'];

// ลูก: ช่องค้นหา (controlled จากแม่ — ไม่มี useState เอง)
function SearchBox({ query, onQueryChange }) {
  return (
    <input value={query} onChange={(e) => onQueryChange(e.target.value)}
           placeholder="ค้นหาในลิสต์..."
           className="w-full rounded-lg border border-slate-300 px-3 py-2" />
  );
}

// ลูก: หนึ่งแถวในลิสต์
function WatchItem({ movie, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2">
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={movie.watched}
               onChange={() => onToggle(movie.id)} />
        <span className={movie.watched ? 'line-through text-slate-400' : ''}>
          {movie.title} <span className="text-xs text-slate-400">{movie.genre}</span>
        </span>
      </label>
      <button onClick={() => onDelete(movie.id)}
              className="text-sm text-red-500 hover:text-red-700">ลบ</button>
    </li>
  );
}

// แม่: เจ้าของ state ทั้งหมดของหน้านี้
function Watchlist() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Sci-Fi');
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();               // กันหน้ารีเฟรช
    if (title.trim() === '') return;  // validate: ห้ามว่าง
    const newMovie = { id: Date.now(), title: title.trim(), genre, watched: false };
    setList([...list, newMovie]);     // เพิ่มแบบไม่ mutate (spread)
    setTitle('');
  }

  function handleToggle(id) {
    setList(list.map(m =>             // แก้เฉพาะตัวที่ id ตรง
      m.id === id ? { ...m, watched: !m.watched } : m
    ));
  }

  function handleDelete(id) {
    setList(list.filter(m => m.id !== id));   // ลบด้วย filter
  }

  const shown = list.filter(m =>
    m.title.toLowerCase().includes(query.toLowerCase())
  );
  const remaining = list.filter(m => !m.watched).length;

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-1 text-2xl font-bold">My Watchlist 🍿</h1>
      <p className="mb-4 text-sm text-slate-500">
        ยังไม่ได้ดู {remaining} จาก {list.length} เรื่อง
      </p>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)}
               placeholder="ชื่อหนัง..."
               className="flex-1 rounded-lg border border-slate-300 px-3 py-2" />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}
                className="rounded-lg border border-slate-300 px-2">
          {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <button type="submit"
                className="rounded-lg bg-cyan-600 px-4 py-2 font-semibold
                           text-white hover:bg-cyan-700 transition">
          เพิ่ม
        </button>
      </form>

      <div className="mt-4">
        <SearchBox query={query} onQueryChange={setQuery} />
      </div>

      {list.length === 0 && (
        <p className="mt-6 text-center text-slate-400">ยังไม่มีหนังในลิสต์ 🙈</p>
      )}

      <ul className="mt-4 space-y-2">
        {shown.map(m => (
          <WatchItem key={m.id} movie={m}
                     onToggle={handleToggle} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;