import React from 'react'
import './Splash.scss'

const Splash: React.FC = () => {
    return (
        <div className='splash'>
            <audio src="/intro.mp3" autoPlay />
            <img src="/elyes.png" alt="Netflix logo"/>
        </div>
    )
}

export default Splash
