import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useContext, useState} from 'react'
import {FaFontAwesome} from 'react-icons/fa';
import {AuthUser, UserContext} from '../Usercontext/UserContext';
import "../styles/css/Tabledata.css"
import {useNavigate} from 'react-router-dom';
import StatusOption from './StatusOption';

const Tabledata = (user : AuthUser) => {
    const {userData} = useContext(UserContext)
    const [updatedUser, setUpdatedUser] = useState < AuthUser > (user)


    const navigate = useNavigate()

    return (
        <tr key={
                user.id
            }
            className="table-row">
            <td> {
                user.orgName.slice(0, 5)[0].toUpperCase() + user.orgName.slice(0, 5).substring(1)
            } </td>
            <td> {
                `${
                    user.userName
                }`
            } </td>
            <td className='user-email'> {
                user.email
            } </td>
            <td> {
                (() => {
                    const phoneNumber = user.phoneNumber;
                    const cleanedPhoneNumber = phoneNumber.replace(/\D+/g, '').slice(0, 10)
                    const formattedPhoneNumber = cleanedPhoneNumber.match(/^[0-9]+$/)
                    return formattedPhoneNumber;
                })()
            } </td>
            <td> {
                (() => {
                    const dateString = user ?. createdAt;
                    const date = new Date(dateString);
                    const day = date.toLocaleDateString('en-US', {day: 'numeric'});
                    const month = date.toLocaleDateString('en-US', {month: 'long'});
                    const year = date.toLocaleDateString('en-US', {year: 'numeric'});
                    const time = date.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    });
                    return `${day} ${month} ${year}, ${time}`;
                })()
            } </td>
            <td className='user-status'>
                <div className={
                    `status ${
                        updatedUser.status
                    }`
                }>
                    <p id={
                        user.status
                    }>
                        {
                        updatedUser.status
                    }</p>
                </div>

                <StatusOption onActivate={
                        () => {
                            const updatedUser = {
                                ...user,
                                status: "Active"
                            };
                            setUpdatedUser(updatedUser);
                        }
                    }
                    onBlacklist={
                        () => {
                            const updatedUser = {
                                ...user,
                                status: "Blacklisted"
                            };
                            setUpdatedUser(updatedUser);
                        }
                    }
                    onView={
                        () => navigate(`/users/users/${
                            user.id
                        }`)
                    }/>
            </td>

</tr>
    )
}


export default Tabledata
