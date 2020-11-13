import React from 'react'
import { Training } from './training.component'

export const TrainingInfo=({trainingname, starttime,club, trainings }) =>(
    <div className='training-info'>
         <div className='about-training'>
                <h4>{trainingname}</h4>
                <p>{club}</p>
                <span><p>{starttime}</p></span>
            </div>
                {
                    trainings.map(t =>(
                        <Training key={t.id} {...t} />
                    ))
                }
    </div>
)