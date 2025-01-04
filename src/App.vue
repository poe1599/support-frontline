<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="layout__container">
      <router-view />
    </div>
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
      zoom: 4;
    }
  }
}
</style>
