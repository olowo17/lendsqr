import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserGroup, faUsers, faCoins, faWallet} from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import "../styles/css/Usersummary.css"
import {FaWallet} from 'react-icons/fa';

export const UserSummary = () => {
    return (
        <div className="user-summary">
            <div className='card' id='user'>
                <p><FontAwesomeIcon icon={faUserGroup}
                        className="usericon"
                        id='usersIcon'/></p>
                <h5>USERS</h5>
                <h2>2,453</h2>
            </div>
            <div className='card' id='user'>
                <p><FontAwesomeIcon icon={faUsers}
                        className=" usericon"
                        id='active-user'/></p>
                <h5>ACTIVE USERS</h5>
                <h2>2,453</h2>
            </div>
            <div className='card' id='user'>
                <FontAwesomeIcon icon={faWallet}
                    className='user-with-loan usericon'/>
                <h5>USERS WITH LOAN</h5>
                <h2>12,453</h2>
            </div>
            <div className='card' id='user'>
                <p><FontAwesomeIcon icon={faCoins}
                        className="coins usericon"/></p>
                <h5>USERS WITH SAVINGS</h5>
                <h2>102,453</h2>
            </div>
        </div>
    )
}
