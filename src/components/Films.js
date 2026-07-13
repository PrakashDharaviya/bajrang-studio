import filmsData from '@/data/films.json';

export default function Films({ limit }) {
  const displayed = limit ? filmsData.slice(0, limit) : filmsData;

  return (
    <div className="films-grid">
      {displayed.map((film, i) => (
        <div key={i} className="film-card">
          <div className="film-thumbnail">
            <iframe
              src={`https://www.youtube.com/embed/${film.youtubeId}`}
              title={film.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="film-info">
            <h3 className="film-title">{film.title}</h3>
            <p className="film-couple">{film.couple}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
