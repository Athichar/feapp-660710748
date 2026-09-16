function About() {
  return (
    <div className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-bold text-slate-800">เกี่ยวกับเรา</h1>
      <p className="mt-4 text-slate-600">
        MovieHub คือเว็บไซต์รวมข้อมูลหนังที่เราตั้งใจทำขึ้น...
      </p>

      <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6">
        <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer">
          <img src="/tmdb.svg" alt="TMDB" className="h-6" />
        </a>
        <p className="text-sm text-slate-500">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
    </div>
  );
}

export default About;