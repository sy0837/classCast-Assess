import { createContext } from 'react'

import Data from './data'

export const UserContext= createContext(Data)
export const HealthStatsContext= createContext(Data.healthstats)
export const TrainerContext= createContext(Data.trainer)
export const TrainingContext =createContext(Data.today)
