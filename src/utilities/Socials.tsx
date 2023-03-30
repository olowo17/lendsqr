import React from 'react'
import {IUser} from '../pages/DashBoard'
interface ISocialprops {
    userData: IUser | null
}
const Socials = ({userData} : ISocialprops) => {
    return (
        <div className="socials">
            <div className="social-header">
                SOCIALS
            </div>
            <div className="social-container">
                <div>
                    <p>
                        TWITTER</p>
                    <h3>{
                        userData ?. socials.twitter
                    }</h3>
                </div>
                <div>
                    <p>
                        FACEBOOK</p>
                    <h3>{
                        userData ?. socials.facebook
                    }</h3>
                </div>
                <div>
                    <p>
                        INSTAGRAM</p>
                    <h3>{
                        userData ?. socials.instagram
                    }</h3>
                </div>
            </div>
        </div>
    )
}

export default Socials
