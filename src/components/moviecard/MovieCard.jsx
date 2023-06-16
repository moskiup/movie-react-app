import './MovieCard.scss';

export function MovieCard(props) {
  // const { title , overview , popularity , vote_average , }

  const { movie } = props;
  const imagen_url = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path;

  return (
    <>
      <div className="movie-card">
        {/* <p>{movie.overview}</p> */}
        <p>{}</p>
        {/* <p>{movie.vote_average}</p> */}
        <img src={imagen_url} />
        <h1>{`${movie.title || movie.original_name}`}</h1>
      </div>
    </>
  );
}
