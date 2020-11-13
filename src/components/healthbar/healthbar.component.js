import React, { useContext } from 'react'
import { HealthStatsContext } from '../../context/user/user.context'
import { HealthTracker } from '../healthtracker/healthtracker.component'
import './healthbar.styles.scss'

export const HealthBar = () => {
    const { sleep, bpm, cal, sleeplimit, callimit, bpmlimit } = useContext(HealthStatsContext)
    const hrs = Math.floor(sleep / 3600)
    var min = Math.floor((sleep % 3600)/ 60) 
    if(min< 9)
    min='0'+min
    const sleepprog = Math.floor((sleep / sleeplimit) * 100)
    const bpmprog = Math.floor((bpm / bpmlimit) * 100)
    const calprog = Math.floor((cal / callimit) * 100)
    return (
        <div className='health-bar'>
            <h2 className='sub-title'>Health</h2>
            <div className='bars'>
                <HealthTracker
                    hrs={hrs}
                    min={min}
                    label="Hours"
                    progresspercent={sleepprog}
                    src={require('../../assets/sleep.svg').default}
                    colorthemes="#3e64ff"
                />
                <HealthTracker
                    data={bpm}
                    label="Bpm"
                    progresspercent={bpmprog}
                    colorthemes='red'
                    src={require('../../assets/heartbeat.svg').default}
                />
                <HealthTracker
                    data={cal}
                    label="Kcal"
                    progresspercent={calprog}
                    colorthemes='#81b214'
                    src={require('../../assets/healthcare.svg').default}
                />
            </div>
        </div>
    )
}
