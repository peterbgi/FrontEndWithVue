<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps(['name', 'imgsrc', 'visit', 'btnname'])

</script>

<template>
  <div class="container mx-auto px-5 lg:px-16 h-[100vh] md:h-[85vh] flex justify-center
  flex-col-reverse md:flex-row md:justify-between items-center  gap-10">
      <div class="w-full flex items-center flex-col md:items-start">
        <h1 class="text-2xl font-bold md:text-4xl text-sky-600">{{ name }} <br> 
        <strong class="text-sky-700 text-5xl md:text-6xl"><i class="bi bi-123 me-2 ms-2"></i>FrontEnd Team</strong></h1>
        <p class="text-1xl my-1 text-sky-700">Fiatalos és tehetséges fejlesztő csapat.</p>
        <router-link :to="visit">
          <button class="bg-sky-500  hover:bg-sky-300 outline-none
          px-8 py-4 rounded-full mt-3 text-white font-thin text-xl">{{ btnname }}</button>
        </router-link>
      </div>
      <div class="home">
        <img :src="imgsrc" alt="cég logo" class="w-[100%] h-[100%] mt-5 rounded-md">
      </div>
  </div>
</template>



<style scoped>
.home
{
  animation: up-down 1s alternate infinite;
}

@keyframes up-down
{
  0%
  {
    transform: translateY(7px);
  }

  100%
  {
    transform: translateY(-7px);
  }
}

</style>