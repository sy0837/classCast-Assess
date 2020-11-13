import React from 'react'
import { ShadowDiv } from '../shadowdiv/shadowdiv.component'
import './signupbar.styles.scss'

export const Signupbar = () => (
    <ShadowDiv color='rgb(255,150,66)'>
        <div className='signup'>
            <img src={require('../../assets/ToyFaces_Tansparent_BG_29.png').default} alt="face" />
            <div>
                <p>Signup for personal trainer to improve your results</p>
                <button>Signup</button>
            </div>
        </div>
    </ShadowDiv>
) 