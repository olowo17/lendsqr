import React, {useEffect, useState, useContext} from 'react'
import axios, {AxiosResponse} from 'axios';
import {AuthUser, UserContext} from '../Usercontext/UserContext';
import {Link, useParams} from 'react-router-dom';
import Navbar from '../utilities/Navbar';
import {SideNav} from '../utilities/SideNav';
import "../styles/css/Dashboard.css";
import GeneralDetails from '../utilities/GeneralDetails';
import Education from '../utilities/Education';
import PersonalInformation from '../utilities/PersonalInformation';
import Socials from '../utilities/Socials';
import Guarantors from '../utilities/Guarantors';

export interface IUser {
    accountNumber: string;
    accountBalance: string;
    education: {
        level: string,
        employmentStatus: string,
        sector: string,
        duration: string,
        officeEmail: string,
        monthlyIncome: string[],
        loanRepayment: string

    },
    phoneNumber: string,
    email: string,
    profile: {
        firstName: string,
        lastName: string,
        bvn: string,
        gender: string
    },
    socials: {
        twitter: string,
        facebook: string,
        instagram: string
    },
    guarantor: {
        address: string,
        firstName: string,
        lastName: string,
        gender: string;
        phoneNumber: string
    }


}

const DashBoard = () => {
    const {id} = useParams();
    const [userData, setData] = useState < IUser | null > (null);
    useEffect(() => {
        axios.get < IUser > (`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`).then((response : AxiosResponse < IUser >) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    console.log(userData)
    return (
        <div>
            <Navbar/>
            <div className="flex">
                <SideNav/>
                <div className='user-dashboard'>
                    <div className="user-details">
                        <Link to="/users" className='link'>&#8592; Back to Users</Link>
                    </div>
                    <div className='flex-between '>
                        <div>User Details</div>
                        <div className="flex">
                            <button className='user-button blacklist'>
                                BLACKKLIST USER</button>
                            <button className='user-button activate'>
                                ACTIVATE USER</button>
                        </div>
                    </div>
                    <GeneralDetails userData={userData}/>

                    <div className="other-details card">
                        <PersonalInformation userData={userData}/>
                        <hr/>
                        <Education userData={userData}/>
                        <hr/>
                        <Socials userData={userData}/>
                        <hr/>
                        <Guarantors userData={userData}/>
                        <hr/>
                        <Guarantors userData={userData}/>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default DashBoard
