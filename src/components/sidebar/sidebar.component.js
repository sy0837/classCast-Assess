import React from 'react'
import { HealthBar } from '../healthbar/healthbar.component'
import { Signupbar } from '../signupbar/signupbar.component'
import { TrainerBar } from '../trainerbar/trainerbar.component'
import { TrainingBar } from '../trainingbar/trainingbar.component'
import { UserNav } from '../usernav/usernav.component'
import './sidebar.styles.scss'

export const SideBar=() =>{
    return(
        <div className='side-bar' style={{borderRadius: 0}}>
        <div className='side-top' style={{ padding: '10px 10px', backgroundColor: 'whitesmoke', borderRadius: 0}}>
           <UserNav/>
           <HealthBar/>
           <Signupbar/>
           <TrainingBar/>
           </div>
           <TrainerBar />
        </div>
    )
}