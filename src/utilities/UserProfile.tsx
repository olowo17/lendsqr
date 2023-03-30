import {faBell} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useContext} from 'react'
import {FaFontAwesome} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import {CaretDown} from '../asset/icons';
import "../styles/css/UserProfile.css"
import {UserContext} from '../Usercontext/UserContext';

const UserProfile = () => {
    const {user} = useContext(UserContext)
    // console.log(user)
    return (
        <ul className=' flex items'>
            <li>
                <Link to="#">
                    Docs
                </Link>
            </li>
            <li>
                <FontAwesomeIcon className='bell'
                    icon={faBell}/>
            </li>
            <li className='user-profile flex'>
                <img src={
                        user ?. profile.avatar
                    }
                    alt="avatar"
                    height={50}
                    className="avatar"/>
                <span id='m-a'>
                    {
                    `${
                        user ?. userName
                    }`
                }
                    <CaretDown/></span>
            </li>
        </ul>
    )
}

export default UserProfile
