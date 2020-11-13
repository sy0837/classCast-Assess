import React from 'react'
import { ProgressBar } from '../progressbar/progressbar.component'
import './healthtracker.styles.scss'

export const HealthTracker = ({ hrs, min, data, progresspercent, src, label ,colorthemes}) => (
    <div className='health-tracker'>
        {
            hrs ? <span>{hrs + ':' + min}</span> : <span>{data}</span>
        }
        <div className='label'>
            <img src={src} alt={label} />
            <h6>{label}</h6>
        </div>
        <ProgressBar color={colorthemes} progress={progresspercent} />
    </div>
)