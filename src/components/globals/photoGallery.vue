<!-- PhotoGallery.vue -->
<template>
  <div>
    <h2 class="font-extrabold mb-4 text-3xl text-center">{{ title }}</h2>
    <h4 class="mb-4 text-2xl text-center">{{ subtitle }}</h4>
    <br />
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 margin-lr">
      <div v-for="(column, index) in images" :key="index" class="grid gap-4">
        <div v-for="(image, imgIndex) in column" :key="imgIndex">
          <img class="h-auto max-w-full rounded-lg" :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Fotos Destacadas de la Liga'
    },
    subtitle: {
      type: String,
      default: '¡Momentos memorables!'
    },
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
