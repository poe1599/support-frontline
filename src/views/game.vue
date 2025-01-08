<template>
  <div class="gm">
    <p class="gm__time" :style="{ color: gameTimer < 30 ? 'orange' : '' }">
      {{ timeText }}
    </p>
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
      <Button v-if="!gameQuestions" @click="clickGameStart">支援前線</Button>
      <Button v-else severity="info" @click="clickToScore">結算</Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import gameStore from '~me/stores/gameStore'
import { ref, computed } from 'vue'
import { sampleSize, map, random } from 'lodash-es'
import { useRouter } from 'vue-router'

const GAME_QUESTION_COUNT = 3

const GAME_LIMIT_SECONDS = 180

const router = useRouter()

const gameQuestions = ref<
  { name: string; unit: string; count: number }[] | null
>(null)

const gameTimer = ref(GAME_LIMIT_SECONDS)

const timeText = computed(() => {
  const minutes = Math.floor(gameTimer.value / 60)
  const seconds = (() => {
    const s = gameTimer.value % 60
    return s < 10 ? `0${s}` : s
  })()
  if (minutes === 0) return `${seconds} 秒`
  return `${minutes} 分 ${seconds} 秒`
})

const startGameTimer = () => {
  gameTimer.value = GAME_LIMIT_SECONDS
  const timer = setInterval(() => {
    if (gameTimer.value > 0) {
      gameTimer.value--
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

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

const clickGameStart = () => {
  getRandomQuestions()
  startGameTimer()
}

const clickToScore = () => {
  if (!gameQuestions.value) return

  const questionsText = encodeURIComponent(
    gameQuestions.value
      .map((quest) => `${quest.name} ${quest.count} ${quest.unit}`)
      .join(',')
  )

  router.push({
    name: 'score',
    query: { questions: questionsText },
  })
}
</script>
<style scoped lang="scss">
p {
  text-align: center;
  margin: 0;
}

p,
li {
  font-size: 3rem;
}

li:not(:last-of-type) {
  margin-bottom: 0.5rem;
}

.gm {
  &__time {
    font-weight: bold;
    font-size: 4rem;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
  }
}
</style>
