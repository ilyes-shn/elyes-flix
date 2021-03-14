import React from 'react'
import './MovieCard.scss'
import { useData } from '../context'

const MovieCard = ({title, desc, poster, date, rate}) => {
    const [image, dispatch] = useData()
    const url = 'http://image.tmdb.org/t/p/w200' + poster

    function setURL() {
        dispatch({
          type: 'SET_URL',
          data: poster
        })
    }

    return (
      <div onMouseEnter={setURL}>
        <h5 className='rating'>{rate}</h5>
        <div className='card' style={{backgroundImage: `url(${url})`}} >
            <div className='detail'>
                <h1>{title}</h1>
                <h5>{date}</h5>
                <hr/>
                <h5>{desc}</h5>
            </div>
        </div>
      </div>
    )
}

export default MovieCard
