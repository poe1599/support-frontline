<template>
  <div class="game-start-screen">
    <div class="header">
      <h1>支援前線</h1>
    </div>
    <div class="description">
      <p>歡迎來到支援前線！準備好迎接挑戰了嗎？</p>
    </div>
    <div class="buttons">
      <router-link :to="{ name: 'game' }">
        <Button @click="startGame">開始遊戲</Button>
      </router-link>

      <router-link :to="{ name: 'rules' }">
        <Button severity="info" @click="showInstructions">規則說明</Button>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from 'primevue/button'

const startGame = () => {
  console.log('遊戲開始！')
  // 在此加入遊戲啟動的邏輯
}

const showInstructions = () => {
  console.log('顯示遊戲說明！')
  // 在此加入顯示遊戲說明的邏輯
}
</script>
<style scoped lang="scss">
.game-start-screen {
  .header {
    text-align: center;
    line-height: 1;
    margin: 1rem 0;

    h1 {
      font-size: 6rem;
      margin: 0;
      color: #ffa023;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    }
  }

  .description {
    text-align: center;
    margin: 2rem 0;

    p {
      margin: 0;
      font-size: 2.4rem;
      line-height: 1.5;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
