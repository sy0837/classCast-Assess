import React from 'react'
import { HealthBar } from '../healthbar/healthbar.component'
// import { Options } from '../option/option.component'
import { TrainerBar } from '../trainerbar/trainerbar.component'
import { TrainingBar } from '../trainingbar/trainingbar.component'
import { UserNav } from '../usernav/usernav.component'
import './sidebar.styles.scss'

export const SideBar=() =>{
    return(
        <div className='side-bar'>
           <UserNav/>
           <HealthBar/>
           <TrainingBar/>
           <TrainerBar/>
        </div>
    )
}