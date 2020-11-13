import React from 'react'
import { IconOption } from '../iconoption/iconoption.component'
import { UserProfile } from '../userprofile/userprofile.component'
import './trainer.styles.scss'

export const Trainer = ({ name, dp, sport, type, online }) => (
    <div className='trainer'>
        <UserProfile name={name} dp={dp} sport={sport} type={type} online={online} width='35' height='35' />
        <IconOption src={require('../../assets/chatclass.svg').default} />
    </div>
)