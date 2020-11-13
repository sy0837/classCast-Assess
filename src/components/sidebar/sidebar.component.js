import React from 'react'
import { HealthBar } from '../healthbar/healthbar.component'
import { TrainerBar } from '../trainerbar/trainerbar.component'
import { UserNav } from '../usernav/usernav.component'
import './sidebar.styles.scss'

export const SideBar=() =>{
    return(
        <div className='side-bar'>
           <UserNav/>
           <HealthBar/>
           <TrainerBar/>
        </div>
    )
}