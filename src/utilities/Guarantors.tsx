import React from 'react'
import {IUser} from '../pages/DashBoard'

interface IGuarantorprops {
    userData: IUser | null
}
const Guarantors = ({userData} : IGuarantorprops) => {
    return (
        <div className="guarantor">
            <div className="guarantors-header">
                GUARANTOR
            </div>
            <div className="guarantor-container">
                <div>
                    <p>
                        FULL NAME</p>
                    <h3>{
                        `${
                            userData ?. guarantor.firstName
                        } ${
                            userData ?. guarantor.lastName
                        }`
                    }</h3>
                </div>
                <div>
                    <p>
                        PHONE NUMBER</p>
                    <h3>{
                        (()=>  {
                            const phoneNumber = userData?.guarantor.phoneNumber;
                            const cleanedPhoneNumber = phoneNumber?.replace(/\D+/g, '').slice(0, 10)
                            return cleanedPhoneNumber;
                        })()}
            </h3>
                </div>
                <div>
                    <p>
                        ADDRESS</p>
                    <h3>{
                        userData ?. guarantor.address
                    }</h3>
                </div>

                <div>
                    <p>
                        GENDER</p>
                    <h3>{
                        userData ?. guarantor.gender
                    }</h3>
                </div>
            </div>
        </div>
    )
}

export default Guarantors
