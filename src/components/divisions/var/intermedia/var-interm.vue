<template>
  <div class="container-divisions">
    <div class="sidebar-divisions">
      <h3 style="color: white">Division Intermedia</h3>
      <button @click="currentView = 'galleryVarInterm'">Galería</button>
      <button @click="currentView = 'statisticsVarInterm'">Estadísticas</button>
      <button @click="currentView = 'teamsVarInterm'">Equipos</button>
    </div>
    <div class="content-divisions">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Importa los componentes que quieras mostrar
import GalleryVI from './galleryVarInterm.vue'
import StatisticsVI from './statisticsVarInterm.vue'
import TeamsVI from './teamsVarInterm.vue'

// Define el estado actual
const currentView = ref('galleryVarInterm')

// Computa el componente actual basado en el estado
const currentComponent = computed(() => {
  switch (currentView.value) {
    case 'galleryVarInterm':
      return GalleryVI
    case 'statisticsVarInterm':
      return StatisticsVI
    case 'teamsVarInterm':
      return TeamsVI
    default:
      return GalleryVI
  }
})
</script>
