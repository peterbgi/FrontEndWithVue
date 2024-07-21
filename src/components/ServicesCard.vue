<script setup>
import { defineProps } from 'vue';

const props = defineProps(['imgsrc', 'title'])

</script>

<template>
  <div class="bg-slate-200 shadow-md mb-10 mx-2 rounded-sm">
    <img :src="imgsrc" alt="szolgáltatások" class="w-full object-cover  h-[200px]">
 
  <div class="text p-2">
    <h2 class="text-slate-800 py-1 font-mono font-semibold text-center ">{{ title }}</h2>
    <p class="text-slate-800 py-1 text-sm font-semibold text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, cupiditate?</p>
    <button class="bg-sky-500  hover:bg-sky-300 outline-none
    px-4 py-4 rounded-full mt-3 text-white font-thin text-sm">Megnézem</button>
  </div>
</div>
</template>



<style scoped>

</style>