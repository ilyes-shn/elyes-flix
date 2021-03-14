import React from 'react'
import './Splash.scss'

const Splash: React.FC = () => {
    return (
        <div className='splash'>
            <audio src="/intro.mp3" autoPlay />
            <img src="https://pngimg.com/uploads/netflix/netflix_PNG15.png" alt="Netflix logo"/>
        </div>
    )
}

export default Splash
