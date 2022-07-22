<template>
  <div class="fixed w-full h-full bg-[#000]">
    <div class="relative w-full h-[400px] bg-red-900">
      <div v-for="item in 14" :key="item" ref="landNodes" class="land" :class="[`land${item}`]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  function getLandPosition() {
    const landNodes = ref<HTMLDivElement[] | null>(null);
    console.log(landNodes.value);
  }

  onMounted(() => {
    getLandPosition();
  });
</script>

<style scoped lang="scss">
  .land {
    position: absolute;
    z-index: 10;
    width: 118px;
    height: 77px;
    background: url('@/assets/images/lang.png') no-repeat;
    background-position: -1645px -1671px;

    &.land1 {
      top: 0;
      left: 300px;
    }

    &.land2 {
      top: 40px;
      left: 240px;
    }

    &.land3 {
      top: 40px;
      left: 360px;
    }

    &.land4 {
      top: 80px;
      left: 180px;
    }

    &.land5 {
      top: 80px;
      left: 300px;
    }

    &.land6 {
      top: 80px;
      left: 420px;
    }

    &.land7 {
      top: 120px;
      left: 240px;
    }

    &.land8 {
      top: 120px;
      left: 360px;
    }

    &.land9 {
      top: 160px;
      left: 180px;
    }

    &.land10 {
      top: 160px;
      left: 300px;
    }

    &.land11 {
      top: 160px;
      left: 420px;
    }

    &.land12 {
      top: 200px;
      left: 240px;
    }

    &.land13 {
      top: 200px;
      left: 360px;
    }

    &.land14 {
      top: 240px;
      left: 300px;
    }
  }
</style>
