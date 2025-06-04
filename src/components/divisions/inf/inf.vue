<template>
  <div class="container-divisions">
    <div class="sidebar-divisions">
      <h2 style="color: white">Division Futbol Infantil</h2>
      <button @click="currentView = 'galleryInf'">Galería</button>
      <button @click="currentView = 'statisticsInf'">Estadísticas</button>
      <button @click="currentView = 'teamsInf'">Equipos</button>
    </div>
    <div class="content-divisions">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Importa los componentes que quieras mostrar
import GalleryI from './galleryInf.vue'
import StatisticsI from './statisticsInf.vue'
import TeamsI from './teamsInf.vue'

// Define el estado actual
const currentView = ref('galleryInf')

// Computa el componente actual basado en el estado
const currentComponent = computed(() => {
  switch (currentView.value) {
    case 'galleryInf':
      return GalleryI
    case 'statisticsInf':
      return StatisticsI
    case 'teamsInf':
      return TeamsI
    default:
      return GalleryI
  }
})
</script>
