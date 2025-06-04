<!-- Page2.vue -->
<template>
  <PhotoGallery
    title="Colección de Fotos - Liga de futbol infantil"
    subtitle="Capturando la Alegría y la Pasión de Nuestros Futbolistas Jóvenes"
    :images="imagesPage2"
  />
</template>

<script>
import PhotoGallery from '@/components/globals/photoGallery.vue'

// Importar las imágenes
// import img1 from '@/assets/images/liga-futbol-i/img1.jfif'
// import img2 from '@/assets/images/liga-futbol-i/img2.jfif'
// import img3 from '@/assets/images/liga-futbol-i/img3.jfif'
// import img4 from '@/assets/images/liga-futbol-i/img4.jfif'
// import img5 from '@/assets/images/liga-futbol-i/img5.jfif'
// import img6 from '@/assets/images/webp/trofeos3.webp'
// import img7 from '@/assets/images/webp/ligainfantil.webp'
// import img8 from '@/assets/images/liga-futbol-i/img6.jfif'
// import img9 from '@/assets/images/liga-futbol-i/img7.jfif'
// import img10 from '@/assets/images/liga-futbol-i/img8.jfif'
// import img11 from '@/assets/images/liga-futbol-i/img9.jfif'
export default {
  components: {
    PhotoGallery
  },
  data() {
    return {
      imagesPage2: [
        [
          { src: img1, alt: 'Imagen 1' },
          { src: img2, alt: 'Imagen 2' },
          { src: img3, alt: 'Imagen 3' }
        ],
        [
          { src: img4, alt: 'Imagen 4' },
          { src: img5, alt: 'Imagen 5' },
          { src: img6, alt: 'Imagen 6' }
        ],
        [
          { src: img7, alt: 'Imagen 7' },
          { src: img8, alt: 'Imagen 8' },
          { src: img9, alt: 'Imagen 9' }
        ],
        [
          { src: img10, alt: 'Imagen 10' },
          { src: img11, alt: 'Imagen 11' }
        ]
      ]
    }
  }
}
</script>
