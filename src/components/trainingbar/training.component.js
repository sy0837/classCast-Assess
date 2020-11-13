import React from 'react'

export const Training =({name, duration}) =>(
    <div className='training'>
        <span>{Math.floor(duration/60)}</span>
        <p>min</p>
        <h6>{name}</h6>
    </div>
)