import React from 'react'
import "../styles/css/Searchbar.css"
import {FaSearch} from "react-icons/fa"

const Searchbar = () => {
    return (
        <div className='search-bar'>
            <input type="text" placeholder='search for anything'/>
            <button type='button' className='btn'><FaSearch className='search'/></button>
        </div>
    )
}

export default Searchbar
