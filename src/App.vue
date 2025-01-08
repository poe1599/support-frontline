<script setup lang="ts">
import { ref } from 'vue'
import gameStore from '~me/stores/gameStore'

const menu = ref()

const items = ref([
  {
    label: '計分歸零',
    icon: 'pi pi-refresh',
    command: () => resetGameScore(),
  },
])

const toggle = (event: any) => {
  menu.value.toggle(event)
}

const resetGameScore = () => {
  for (const team of gameStore.value.teams) {
    team.score = 0
  }
}
</script>

<template>
  <div class="layout">
    <div class="layout__container">
      <router-view />
    </div>

    <Button
      class="configButton"
      type="button"
      icon="pi pi-cog"
      @click="toggle"
      aria-haspopup="true"
      aria-controls="overlay_menu"
    />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>

<style lang="css" src="~me/css/normalize.css"></style>
<style lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  --p-button-label-font-weight: bold;
  font-family: 'Arial', sans-serif;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    & > * {
      zoom: 2;
    }
  }
}

button {
  transition: transform 0.2s, background-color 0.2s !important;

  &:hover {
    transform: scale(1.05);
  }
}

.configButton {
  position: fixed !important;
  top: 1rem;
  right: 1rem;
}
</style>
