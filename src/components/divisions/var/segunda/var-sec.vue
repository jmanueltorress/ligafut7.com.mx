<template>
  <div class="container-divisions">
    <div class="sidebar-divisions">
      <h2 style="color: white">Segunda Fuerza</h2>
      <button @click="currentView = 'galleryVarSec'">Galería</button>
      <button @click="currentView = 'statisticsVarSec'">Estadísticas</button>
      <button @click="currentView = 'teamsVarSec'">Equipos</button>
    </div>
    <div class="content-divisions">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Importa los componentes que quieras mostrar
import GalleryVs from './galleryVarSec.vue'
import StatisticsVs from './statisticsVarSec.vue'
import TeamsVs from './teamsVarSec.vue'

// Define el estado actual
const currentView = ref('galleryVarSec')

// Computa el componente actual basado en el estado
const currentComponent = computed(() => {
  switch (currentView.value) {
    case 'galleryVarSec':
      return GalleryVs
    case 'statisticsVarSec':
      return StatisticsVs
    case 'teamsVarSec':
      return TeamsVs
    default:
      return GalleryVs
  }
})
</script>
