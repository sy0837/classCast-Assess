import React, { useContext } from 'react'
import { TrainingContext } from '../../context/user/user.context'
import './trainingbar.styles.scss'
import { TrainingInfo } from './trainingInfo.coponent'

export const TrainingBar = () => {
    const training = useContext(TrainingContext)
    return (
        <div className='training-bar' >
            <h2 className='sub-title'>Today's Training</h2>
            {
                training.map(t => (
                    <TrainingInfo key={t.id} {...t} />
                ))
            }
        </div>
    )
}  