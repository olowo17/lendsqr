import React from 'react'
import {IUser} from '../pages/DashBoard'


interface IPersonalprops {
    userData: IUser | null
}
const PersonalInformation = ({userData} : IPersonalprops) => {
    return (
        <section className=" personal-information">
            <div className='personal-info-header'>PERSONAL INFORMATION</div>
            <div className='personal-info'>
                <div>
                    <p>FULL NAME</p>
                    <h3>{
                        `${
                            userData ?. profile.firstName
                        }${
                            userData ?. profile.lastName
                        } `
                    }</h3>
                </div>
                <div>
                    <p>PHONE NUMBER</p>
                    <h3>{
                        (() => {
                            const phoneNumber = userData ?. phoneNumber;
                            const cleanedPhoneNumber = phoneNumber ?. replace(/\D+/g, '').slice(0, 10)
                            return cleanedPhoneNumber;
                        })()
                    } </h3>
                </div>
                <div>
                    <p>EMAIL ADDRESS</p>
                    <h3>{
                        userData ?. email
                    }</h3>
                </div>
                <div>
                    <p>BVN</p>
                    <h3>{
                        userData ?. profile.bvn
                    }</h3>
                </div>
                <div>
                    <p>GENDER</p>
                    <h3>{
                        userData ?. profile.gender
                    }</h3>
                </div>
                <div>
                    <p>MARITAL STATUS</p>
                    <h3>Single</h3>
                </div>
                <div>
                    <p>CHILDREN</p>
                    <h3>None</h3>
                </div>
                <div>
                    <p>TYPE OF RESIDENCE</p>
                    <h3>Parents Apartment</h3>
                </div>
            </div>
        </section>
    )
}

export default PersonalInformation
