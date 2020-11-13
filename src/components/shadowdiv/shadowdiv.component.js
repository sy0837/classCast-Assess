import React from 'react'
import './shadowdiv.styles.scss'

export const ShadowDiv=({children, color}) =>(
    <div className='shadow' style={{boxShadow: `0 10px 0px -6px ${color}`, borderRadius: '20px'}}>
    {children}
    </div>
)