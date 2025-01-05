import { useStorage } from '@vueuse/core'
import { DEFAULT_QUESTIONS } from '~me/utils/constant'
import { cloneDeep } from 'lodash-es'

export interface QuestionType {
  name: string
  min: number
  max: number
  unit: string
}

export interface GameStoreType {
  questions: QuestionType[]
}

export default useStorage<GameStoreType>('gameStore', {
  questions: cloneDeep(DEFAULT_QUESTIONS),
})
