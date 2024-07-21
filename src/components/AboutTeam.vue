<script setup>
import TwoInOne from '../views/TwoInOne.vue';
import RightSide from '../assets/images/rightside.jpg';


</script>

<template>
  <div>
    <TwoInOne :name="'Üdvözlet a bemutatkozo oldalunkon.'" :imgsrc="RightSide" visit="servicespage" :btnname="'Szolgáltatások'"/>
  </div>
</template>



<style scoped>

</style>