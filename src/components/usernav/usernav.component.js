import React, { useContext } from 'react'
import { UserContext } from '../../context/user/user.context'
import { IconOption } from '../iconoption/iconoption.component'
// import { IconOption } from '../iconoption/iconoption.component'
import { UserProfile } from '../userprofile/userprofile.component'
import './usernav.styles.scss'



export const UserNav = () => {
    const User = useContext(UserContext)
    const { name, dp, notification, freeaccount, type } = User
    return (
        <div className='user-nav'>
            <UserProfile name={name} free={freeaccount} type={type} dp={dp} />
            <div className='actions'>
                <IconOption src={require('./../../assets/alarm.png').default} notification={notification}/>
                <IconOption src={require('./../../assets/setting-lines.png').default}/>
            </div>


        </div>
    )
}