import React from 'react'
import './progressbar.styles.scss'

export const ProgressBar = ({progress, color}) => (
    <div className='progress-bar'>
        <div className='progress' style={{width : `${progress}%`,backgroundColor: `${color}` }}></div>
    </div>
)