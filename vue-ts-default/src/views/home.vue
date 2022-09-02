<template>
  <div id="home">
    <div class="w-full h-[400px] bg-[#2b435a]"></div>
    <div class="h-[500px] overflow-y-auto">
      <div v-for="item in 3" :key="item">
        {{ item }}
      </div>
    </div>
    <div class="w-full h-[400px] bg-[#2b435a]"></div>
    <div class="w-full h-[400px] bg-[#2b435a]"></div>
    <div class="w-full h-[400px] bg-[#2b435a]"></div>
    <div class="w-full h-[400px] bg-[#2b435a]"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  #home {
    width: 100%;
    height: 100%;
    background-color: rgb(43, 88, 90);
  }
</style>
