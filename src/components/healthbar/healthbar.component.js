import React, { useContext } from 'react'
import { HealthStatsContext } from '../../context/user/user.context'
import { ProgressBar } from '../progressbar/progressbar.component'
import './healthbar.styles.scss'

export const HealthBar = () => {
    const { sleep, bpm, cal, sleeplimit, callimit, bpmlimit } = useContext(HealthStatsContext)
    const hrs = Math.floor(sleep / 3600)
    const min = (sleep % 3600) / 60
    const sleepprog=Math.floor((sleep/sleeplimit)*100)
    const bpmprog=Math.floor((bpm/bpmlimit)*100)
    const calprog=Math.floor((cal/callimit)*100)
    return (
        <div className='health-bar'>
            <h2>Health</h2>
            <div className='bars'>
                <div>
                    <span>{hrs + ':' + min}</span>
                    <div className='label'>
                        <img src={require('../../assets/sleep.svg').default} alt='hours' />
                        <h6>Hours</h6>
                    </div>
                    <ProgressBar color="#3e64ff" progress={sleepprog} />
                </div>
                <div>
                    <span>{bpm}</span>
                    <div  className='label'>
                        <img src={require('../../assets/heartbeat.svg').default} alt='BPM' />
                        <h6>Bpm</h6>
                    </div>
                    <ProgressBar color="red" progress={bpmprog} />
                </div>
                <div>
                    <span>{cal}</span>
                    <div  className='label'>
                        <img src={require('../../assets/healthcare.svg').default} alt='KCAL' />
                        <h6>Kcal</h6>
                    </div>
                    <ProgressBar color="#81b214" progress={calprog} />
                </div>
            </div>
        </div>
    )
}
