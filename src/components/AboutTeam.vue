<script setup>
import TwoInOne from '../views/TwoInOne.vue';
import RightSide from '../assets/images/rightside.jpg';


</script>

<template>
  
<p class="text-sky-800 font-mono mt-3 mx-3 text-xl">Track work across the enterprise through an open, collaborative platform. 
  Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual 
  information to rapidly respond to requests, incidents, and changes.</p>

  <div>
    <TwoInOne :name="'Üdvözlet a bemutatkozo oldalunkon.'" :imgsrc="RightSide" visit="servicespage" :btnname="'Szolgáltatások'"/>
  </div>
</template>



<style scoped>

</style>