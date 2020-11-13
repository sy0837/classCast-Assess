import React from 'react'

export const MoreOption = ({ rotate }) => (
        <div style={{textAlign: 'center'}}>
        {
            rotate?  <img className='more'
            src={require('../../assets/more_horiz-black-18dp.svg').default} alt='more'
            style={{ color: 'white', width: '18px', height: '18px' }} />
            :  <img className='more'
            src={require('../../assets/more_vert-white-18dp.svg').default} alt='more'
            style={{ color: 'white', width: '18px', height: '18px' }} />
        }
    </div >
)