<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const open = ref(false);

const hamburgerMenuOpen = () => 
{
  open.value = !open.value
}
</script>

<template>
  <header class="flex justify-between items-center bg-sky-100 shadow-md h-[80px] relative z-10">
    <div class="text-3xl font-mono font-medium text-sky-500 hover:text-sky-400 cursor-pointer">
      <router-link to="/"><i class="bi bi-123 me-2 ms-2"></i>FrontEnd</router-link>
    </div>
    <nav class="flex flex-col md:flex-row bg:tr p-5 gap-4 md:gap-10 md:static absolute bg-slate-300 md:bg-transparent shadow-sm md:shadow-none md:w-auto my-6 md:my-0 md:left-0
    w-full duration-500" :class="[open ? 'top-0' : 'top-[-490%]']">
        <RouterLink @click="hamburgerMenuOpen()" class="text-sky-500 py-6 hover:text-sky-400 text-xl font-mono font-medium px-5 lg:px-24" to="/">Kezdőlap</RouterLink>
        <RouterLink @click="hamburgerMenuOpen()" class="text-sky-500 py-6 hover:text-sky-400 text-xl font-mono font-medium px-5 lg:px-24" to="/aboutteam">Rólunk</RouterLink>
        <RouterLink @click="hamburgerMenuOpen()" class="text-sky-500 py-6 hover:text-sky-400 text-xl font-mono font-medium px-5 lg:px-24" to="/servicespage">Szolgáltatások</RouterLink>
      </nav>
      <div class="text-sky-500 cursor-pointer text-4xl md:hidden z-20" @click="hamburgerMenuOpen()">
        <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
      </div>
  </header>

<RouterView />

</template>



<style scoped>

</style>