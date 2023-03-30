import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import UserProfile from './UserProfile';
import "../styles/css/Navbar.css"

const Navbar = () => {

    return (
        <div className='navbar card'>
            <div className="left-side">
                <span id="logo">
                    <Logo/>
                </span>
                <span id='searchbar'><Searchbar/></span>
            </div>
            <div className='right-side' id='userprofile'><UserProfile/></div>
        </div>
    )
}

export default Navbar
