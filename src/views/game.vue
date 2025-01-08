<template>
  <div class="gm">
    <div class="">
      <ol v-if="gameQuestions">
        <li v-for="quest in gameQuestions">
          {{ `${quest.name} ${quest.count} ${quest.unit}` }}
        </li>
      </ol>
      <div v-else class="">
        <p>點擊「支援前線」以開始遊戲</p>
      </div>
    </div>
    <div class="gm__buttons">
      <Button v-if="!gameQuestions" @click="getRandomQuestions"
        >支援前線</Button
      >
      <router-link v-else :to="{ name: 'score' }">
        <Button severity="info">結算</Button>
      </router-link>
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
<style scoped lang="scss">
.gm {
  p,
  li {
    font-size: 3rem;
  }

  li:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
  }
}
</style>
