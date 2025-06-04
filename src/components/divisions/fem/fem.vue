<template>
  <div class="container-divisions">
    <div class="sidebar-divisions">
      <h2 style="color: white">Division Futbol Femenil</h2>
      <button class="button" @click="currentView = 'galleryFem'">Galería</button>
      <button class="button" @click="currentView = 'statisticsFem'">Estadísticas</button>
      <button class="button" @click="currentView = 'teamsFem'">Equipos</button>
    </div>
    <div class="content-divisions">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Importa los componentes que quieras mostrar
import GalleryF from './galleryFem.vue'
import StatisticsF from './statisticsFem.vue'
import TeamsF from './teamsFem.vue'

// Define el estado actual
const currentView = ref('galleryFem')

// Computa el componente actual basado en el estado
const currentComponent = computed(() => {
  switch (currentView.value) {
    case 'galleryFem':
      return GalleryF
    case 'statisticsFem':
      return StatisticsF
    case 'teamsFem':
      return TeamsF
    default:
      return GalleryF
  }
})
</script>

<script>
// Seleccionar todos los botones
const buttons = document.querySelectorAll('.button')

// Función para manejar el clic en los botones
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Quitar la clase 'active' de todos los botones
    buttons.forEach((btn) => btn.classList.remove('active'))

    // Añadir la clase 'active' al botón clicado
    button.classList.add('active')
  })
})
</script>
