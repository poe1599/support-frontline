<template>
  <div class="sc">
    <h2 class="sc__title">計分板</h2>
    <div class="sc__container">
      <div class="sc__scoreBoard">
        <ol class="sc__questions">
          <li v-for="quest in questions">{{ quest }}</li>
        </ol>
      </div>
      <div class="sc__scoreBoard">
        <ul class="sc__grid">
          <li class="sc__team" v-for="team in gameStore.teams">
            <div>
              <span>{{ team.name }}</span>
              <span class="sc__rank" v-show="getTeamRank(team)">
                {{ `No.${getTeamRank(team)}` }}
              </span>
              <InputNumber
                v-model="team.score"
                mode="decimal"
                showButtons
                :min="0"
                :max="1000"
                fluid
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="sc__buttons">
      <router-link :to="{ name: 'game' }">
        <Button>繼續遊戲</Button>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import gameStore from '~me/stores/gameStore'
import type { TeamType } from '~me/stores/gameStore'
import { cloneDeep } from 'lodash-es'
import { useRoute } from 'vue-router'

const route = useRoute()

const questions = decodeURIComponent(route.query.questions as string).split(',')

const getTeamRank = (team: TeamType): string => {
  if (gameStore.value.teams.every((t) => t.score === 0)) return ''
  if (team.score === 0) return ''

  const scoreRank = [
    ...new Set(
      cloneDeep(gameStore.value.teams)
        .sort((a, b) => b.score - a.score)
        .map((t) => t.score)
    ),
  ]

  if (scoreRank[0] === team.score) return '1'
  if (scoreRank[1] === team.score) return '2'
  if (scoreRank[2] === team.score) return '3'
  return ''
}
</script>
<style scoped lang="scss">
ol {
  padding-left: 20px;
  margin: auto;
  font-size: 1.4rem;
}

.sc {
  position: relative;

  &__container {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 1rem;
  }

  &__title {
    text-align: center;
    font-size: 2.4rem;
    margin: 0 auto 0.5rem;
  }

  &__scoreBoard {
    padding: 1rem 1.2rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    display: grid;
    align-items: center;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    zoom: 0.8;
    gap: 1rem;
    margin: auto;
  }

  &__team {
    position: relative;
    width: 6rem;
  }

  &__rank {
    position: absolute;
    top: -0.8rem;
    left: -1rem;
    rotate: -15deg;
    font-weight: bold;
    font-size: 0.8rem;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>
