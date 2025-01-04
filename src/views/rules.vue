<template>
  <div class="game-rules-screen">
    <div class="header">
      <h2>遊戲規則</h2>
    </div>
    <div class="rules">
      <ol>
        <li>遊戲開始後各組隨機抽出支援物品與數量。</li>
        <li>集齊指定物品後拍照上傳至 Line。</li>
        <li>最快完成的前三組將獲得分數。</li>
        <li>最終累積分數最高的前三組將獲得獎金。</li>
      </ol>
    </div>
    <div class="footer">
      <router-link :to="{ name: 'index' }">
        <Button severity="secondary" @click="backToMenu">返回主畫面</Button>
      </router-link>

      <router-link :to="{ name: '' }">
        <Button @click="startGame">立即開始</Button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const backToMenu = () => {
  console.log('返回主畫面')
  // 在此加入返回主畫面的邏輯
}

const startGame = () => {
  console.log('立即開始')
  // 在此加入立即開始的邏輯
}
</script>

<style scoped lang="scss">
.game-rules-screen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #003399, #1a73e8);
  color: #fff;

  .header {
    h2 {
      font-size: 1.2rem;
      margin: 0 0 0.5rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    }
  }

  .rules {
    width: 90%;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

    ol {
      margin: 0;
      padding-left: 1.5rem;

      li {
        font-size: 1rem;
        line-height: 1.5;
      }

      li:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
  }

  .footer {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    zoom: 0.8;

    button {
      transition: transform 0.2s, background-color 0.2s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>
