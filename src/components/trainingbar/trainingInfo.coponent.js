import React from 'react'
import { MoreOption } from '../moreoption/moreoption.component'
import { ShadowDiv } from '../shadowdiv/shadowdiv.component'
import { Training } from './training.component'

export const TrainingInfo = ({ trainingname, starttime, club, trainings, id }) => {
    var color = undefined
    var ShadowColor = undefined
    if (id % 2 === 0) {
        color = 'rgb(255, 80, 80)'
        ShadowColor = ' rgb(255, 80, 80,0.4)'
    }
    else {
        color = 'rgb(0, 128, 255)'
        ShadowColor = 'rgb(0, 128, 255,0.4)'
    }

    return (
        <ShadowDiv color={ShadowColor}>
            <div className='training-info' style={{ backgroundColor: `${color}` }}>
                <div className='about-training'>
                    <h4>{trainingname}</h4>
                    <p>{club}</p>
                    <span className='time'>{starttime}</span>
                </div>
                {
                    trainings.map(t => (
                        <Training key={t.id} {...t} />
                    ))
                }
                <MoreOption/>
            </div>
        </ShadowDiv>
    )
} 