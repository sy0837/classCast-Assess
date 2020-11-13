import React from 'react'
import { UserProfile } from '../userprofile/userprofile.component'
import './trainer.styles.scss'

export const Trainer = ({ name, dp, sport, type }) => (
    <div className='trainer'>
        <UserProfile name={name} dp={dp} sport={sport} type={type} />
        <div className='msg-box'>
            <img src={require('../../assets/chatclass.svg').default} className='msg' alt='chat' />
        </div>
    </div>
)