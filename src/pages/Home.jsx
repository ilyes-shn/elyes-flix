import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { useData } from '../context'
import './Home.scss'
import Nav from '../components/Nav'
import url from '../background'

const Home = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [image, dispatch] = useData()
    const [title, setTitle] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then((res) => setData(res.data.results))
        .catch(err => console.log(err))
    }, [page])

function search() {
  if (title) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`)
    .then((res) => setData(res.data.results))
    .catch(err => console.log(err))
  } else {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    .then((res) => setData(res.data.results))
    .catch(err => console.log(err))
  }

}

{/* https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher */}
const up = () => {
  let num = page
  num += 1
  if (num < 1001 && num > 0) {
      setPage(num)
    } else {
      setPage(1)
    }
}

const down = () => {
  let num = page
  num -= 1
  if (num < 1001 && num > 0) {
      setPage(num)
    } else {
      setPage(1)
    }
}



    return (
        <div className='home'>
          <div className='cover' >
              <img src={image.background ? image.background : url} alt={image.background}></img>
              <div></div>
          </div>
          <Nav />
          <div className='pagination'>
            <div>
              <button onClick={down}>{'<'}</button>
              <button onClick={up}>{'>'}</button>
            </div>
            <div className='search'>
              <input placeholder='Search your movie ...' onChange={(e) => setTitle(e.target.value)}/>
              <i class="fas fa-search" onClick={search} style={{cursor: 'pointer'}}></i>
            </div>
          </div>
            <div className='feed'>

                {
                  data.map(movie => <MovieCard title={movie.original_title} desc={movie.overview} poster={movie.poster_path} date={movie.release_date} rate={movie.vote_average}/>)
                }

            </div>
            <footer>
              <h3>Elyes 2021</h3>
            </footer>
        </div>
    )
}

export default Home
