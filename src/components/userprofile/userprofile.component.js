import React from 'react'
import './userprofile.styles.scss'

export const UserProfile = ({ name, free, type, sport ,dp, width, height}) => (
    <div className='profile'>
        <img style={{width: `${width}px`, height: `${height}px`}} className='profile-pic' src={dp} alt={name} />
        <div className='about'>
            <h4>{name}</h4>
            {
                type === 'user' ? free ? <span>Free Account</span> : <span>Premium Account</span>
                    : <span>{sport}</span>

            }

        </div>
    </div>
)