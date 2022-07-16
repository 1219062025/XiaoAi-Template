<template>
  <div v-show="store.loadingShow" id="loading">
    <div class="content">
      <img src="@/assets/images/loading_logo.png" />
      <img src="@/assets/images/loading_logo1.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMainStore } from '@/store/main';

  const store = useMainStore();
</script>

<style scoped lang="scss">
  #loading {
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000, $alpha: 0.3);
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    transform: translate(-50%, -50%);

    & > img {
      width: 100%;
    }
  }

  .content img:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(0deg);
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>
