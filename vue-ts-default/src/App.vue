<template>
  <Loading></Loading>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import Loading from '@/components/Loading.vue';
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
