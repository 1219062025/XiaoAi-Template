<template>
  <div>x1000</div>
</template>

<script setup lang="ts">
  import { getVptList } from '@/api/main';

  onMounted(async () => {
    const { data } = await getVptList();
  });
</script>

<style scoped lang="scss"></style>
