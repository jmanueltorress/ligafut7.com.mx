<template>
  <div class="container-divisions">
    <div class="sidebar-divisions">
      <h2 style="color: white">Primera Estelar</h2>
      <button @click="currentView = 'galleryVarFirst'">Galería</button>
      <button @click="currentView = 'statisticsVarFirst'">Estadísticas</button>
      <button @click="currentView = 'teamsVarFirst'">Equipos</button>
    </div>
    <div class="content-divisions">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Importa los componentes que quieras mostrar
import GalleryVf from './galleryVarFirst.vue'
import StatisticsVf from './statisticsVarFirst.vue'
import TeamsVf from './teamsVarFirst.vue'

// Define el estado actual
const currentView = ref('galleryVarFirst')

// Computa el componente actual basado en el estado
const currentComponent = computed(() => {
  switch (currentView.value) {
    case 'galleryVarFirst':
      return GalleryVf
    case 'statisticsVarFirst':
      return StatisticsVf
    case 'teamsVarFirst':
      return TeamsVf
    default:
      return GalleryVf
  }
})
</script>
