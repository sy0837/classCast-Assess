import React from 'react'
import './iconoption.styles.scss'

export const IconOption = ({ src, notification }) => (
    <div className='icon-container'>
        <img className='icon' src={src} alt='' />
        {
            notification ? <span className='notification-number'>{notification}</span> : null
        }
    </div>
)