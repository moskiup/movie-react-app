import { useState } from 'react'
import './MovieCard.scss'

export function MovieCard(props) {
  // const { title , overview , popularity , vote_average , }

  const [isLoading, setLoading] = useState(true)
  const { movie } = props
  const imagen_url = 'https://image.tmdb.org/t/p/w300/' + movie.poster_path

  function handlerLoad() {
    setLoading(false)
  }

  return (
    <>
      <div className={isLoading ? 'movie-card skeleton' : 'movie-card'}>
        {/* <p>{movie.overview}</p> */}
        <span>
          <img src={imagen_url} onLoad={handlerLoad} />
        </span>

        <h1>{`${movie.title || movie.name}`}</h1>
      </div>
    </>
  )
}
