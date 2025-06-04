<template>
  <section class="container-achievments margin-lr-global">
    <div class="col">
      <div class="img1">
        <img src="/src/assets/images/webp/ico2.webp" alt="" />
      </div>

      <div class="text-secondary-tittles font-extrabold">
        <span ref="sectionRef" class="counter-section">+ {{ count }}</span> Equipos de Futbol
      </div>
    </div>
    <div class="col">
      <div>
        <img src="/src/assets/images/webp/ico1.webp" alt="" />
      </div>
      <div class="text-secondary-tittles font-extrabold">Torneos Estelares</div>
    </div>
    <div class="col">
      <div>
        <img src="/src/assets/images/webp/ico3.webp" alt="" />
      </div>
      <div class="text-secondary-tittles font-extrabold">Aptitud deportiva</div>
    </div>
  </section>
</template>
<style scope>
.container-achievments {
  display: flex;
  padding: 50px;
  position: relative;
  margin-bottom: 5%;
  justify-content: space-between;
}

.container-achievments .col {
  display: inline;
  justify-content: center;
  align-items: center;
}

.container-achievments .col img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

@media (max-width: 715px) {
  .container-achievments {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  .img1 {
    margin-left: 25px;
  }
}
@media (max-width: 355px) {
  .img1 {
    margin-left: 0px;
  }
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const count = ref(0)
const target = 50
const interval = 40 // milisegundos
const increment = 1

let timer = null
const sectionRef = ref(null)

const updateCounter = () => {
  if (count.value < target) {
    count.value += increment
    if (count.value > target) count.value = target
  }
}

const checkIfInView = () => {
  if (sectionRef.value) {
    const rect = sectionRef.value.getBoundingClientRect()
    const isInView =
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    if (isInView) {
      if (!timer) {
        timer = setInterval(updateCounter, interval)
      }
    } else {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkIfInView)
  checkIfInView() // Check visibility on mount
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkIfInView)
  if (timer) {
    clearInterval(timer)
  }
})
</script>
