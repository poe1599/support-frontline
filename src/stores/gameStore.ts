import { useStorage } from '@vueuse/core'
import { DEFAULT_QUESTIONS } from '~me/utils/constant'
import { cloneDeep } from 'lodash-es'

export interface QuestionType {
  name: string
  min: number
  max: number
  unit: string
}

export interface TeamType {
  name: string
  score: number
}

export interface GameStoreType {
  questions: QuestionType[]
  teams: TeamType[]
}

export default useStorage<GameStoreType>('gameStore', {
  questions: cloneDeep(DEFAULT_QUESTIONS),
  teams: [
    { name: 'Team 1', score: 0 },
    { name: 'Team 2', score: 0 },
    { name: 'Team 3', score: 0 },
    { name: 'Team 4', score: 0 },
    { name: 'Team 5', score: 0 },
    { name: 'Team 6', score: 0 },
    { name: 'Team 7', score: 0 },
    { name: 'Team 8', score: 0 },
    { name: 'Team 9', score: 0 },
    { name: 'Team 10', score: 0 },
    { name: 'Team 11', score: 0 },
    { name: 'Team 12', score: 0 },
    { name: 'Team 13', score: 0 },
    { name: 'Team 14', score: 0 },
    { name: 'Team 15', score: 0 },
    { name: 'Team 16', score: 0 },
  ],
})
