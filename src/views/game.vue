<template>
  <div class="">
    <div class="">
      <ul v-if="gameQuestions">
        <li v-for="quest in gameQuestions">
          {{ `${quest.name} ${quest.count} ${quest.unit}` }}
        </li>
      </ul>
    </div>
    <div class="">
      <Button @click="getRandomQuestions">支援前線</Button>
      <Button @click="">結算</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import gameStore from '~me/stores/gameStore'
import { ref } from 'vue'
import { sampleSize, map, random } from 'lodash-es'

const GAME_QUESTION_COUNT = 3

const gameQuestions = ref<
  { name: string; unit: string; count: number }[] | null
>(null)

const getRandomQuestions = () => {
  gameQuestions.value = map(
    sampleSize(gameStore.value.questions, GAME_QUESTION_COUNT),
    (question) => {
      return {
        name: question.name,
        unit: question.unit,
        count: random(question.min, question.max),
      }
    }
  )
}
</script>
<style scoped lang="scss"></style>
