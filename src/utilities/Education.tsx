import React from 'react'
import { IUser } from '../pages/DashBoard';
import { Naira } from '../asset/icons';

interface IEducationprops{
    userData: IUser|null
}

const Education = ({userData}:IEducationprops) => {
    return (
        <section className=" education">
            <div className='education-header'>EDUCATION AND EMPLOYMENT</div>
            <div className='education-and-employment'>
                <div>
                    <p>LEVEL OF EDUCATION</p>
                    <h3>{
                        userData ?. education.level
                    }</h3>
                </div>
                <div>
                    <p>EMPLOYMENT STATUS</p>
                    <h3>{
                        userData ?. education.employmentStatus
                    }</h3>
                </div>
                <div>
                    <p>SECTOR OF EMPLOYMENT</p>
                    <h3>{
                        userData ?. education.sector
                    }</h3>
                </div>
                <div>
                    <p>DURATION OF EMPLOYMENT</p>
                    <h3>{
                        userData ?. education.duration
                    }</h3>
                </div>
                <div>
                    <p>OFFICE EMAIL</p>
                    <h3>{
                        userData ?. education.officeEmail
                    }</h3>
                </div>
                <div>
                    <p>MONTHLY INCOME</p>
                    <h3><Naira/>{
                        userData ?. education.monthlyIncome[0]
                    }-<Naira/>{
                        userData ?. education.monthlyIncome[1]
                    }</h3>
                </div>
                <div>
                    <p>LOAN REPAYMENT</p>
                    <h3><Naira/>{
                        userData ?. education.loanRepayment
                    }</h3>
                </div>
            </div>
        </section>
    )
}

export default Education
