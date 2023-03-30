import React from 'react'
import IMAGES from '../asset'
import "../styles/css/Logo.css"
const Logo = () => {
    return (
        <div className='logo'>
            <img src={
                    IMAGES.logo
                }
                alt='logo'
                height={18}/>
            <span>lendsqr</span>
        </div>
    )
}

export default Logo
