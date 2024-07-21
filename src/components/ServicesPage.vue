<script setup>
import ServicesData from './ServicesData.js';
import ServicesCard from './ServicesCard.vue';

</script>

<template>
  <div class="container mx-auto px-5 xl:px-24">
    <h1 class="text-sky-500 font-mono text-4xl 
    font-medium text-center my-6">Szolgáltatásaink</h1>
  </div>
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="data in ServicesData" :key="data">
      <ServicesCard :imgsrc="data.imgsrc" :title="data.title"/>
    </div>
  </div>
</template>



<style scoped>

</style>