import React,{useContext} from 'react'
import { TrainerContext } from '../../context/user/user.context'
import { Trainer } from './trainer.component'

export const TrainerBar= () =>{
    const trainerlist= useContext(TrainerContext)
    return(
        <div className='trainer-bar'>
        <h2>Trainer</h2>
            {
                trainerlist.map( t =>(
                    <Trainer key={t.id} {...t}/>
                ))
            }
        </div>
    )
}