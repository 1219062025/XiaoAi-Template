<template>
  <transition name="loveshow-ui-show">
    <div v-show="store.toastShow" id="toast">
      <span>{{ store.toastMsg }}</span>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { useMainStore } from '@/store/main';

  const store = useMainStore();
</script>

<style scoped lang="scss">
  #toast {
    position: fixed;
    top: 40%;
    left: 50%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    font-size: 28px;
    color: #fff;
    transform: translate(-50%, -50%);

    span {
      display: inline-block;
      border-radius: 20px;
      padding: 30px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .loveshow-ui-show-enter {
    opacity: 0;
  }

  .loveshow-ui-show-enter-active {
    transition: all 0.2s ease;
  }

  .loveshow-ui-show-leave-active {
    opacity: 0;
    transition: all 0.2s ease;
  }
</style>
