import React from 'react'
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faNairaSign, faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import {IUser} from '../pages/DashBoard';


interface IGeneralDetailsProps {
    userData: IUser | null;
}

const GeneralDetails = ({userData} : IGeneralDetailsProps) => {
    return (
        <div className="card general-details ">
            <div className="flex-start user-general-details">
                <div className="profile flex-between">
                    <div className='grey m-r-2'><FontAwesomeIcon icon={faUser}
                            className="user"/></div>
                    <div className='m-r-2'>
                        <h3>Grace Effiom</h3>
                        <p>LSQFf587g90</p>
                    </div>
                </div>
                <section className='m-r-4 b-2 user-tier'>
                    <p>User Tier</p>
                    <FontAwesomeIcon icon={faStar}
                        className="gold"/>
                    <FontAwesomeIcon icon={faStar}
                        className="gold"/>
                    <FontAwesomeIcon icon={faStarHalfAlt}
                        className="gold"/>
                </section>
                <div className='m-r-2'>
                    <h3><FontAwesomeIcon icon={faNairaSign}/>{
                        userData ?. accountBalance
                    }</h3>
                    <small>{
                        userData ?. accountNumber
                    }/Providus Bank</small>
                </div>
            </div>
            <div className="general">
                <div className='details'>General Details</div>
                <ul className=' flex-around details-list'>
                    <li>Documents</li>
                    <li>Bank Details</li>
                    <li>Loans</li>
                    <li>Savings</li>
                    <li>App and System</li>
                </ul>
            </div>
        </div>

    )
}

export default GeneralDetails
