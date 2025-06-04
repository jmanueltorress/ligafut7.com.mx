<template>
  <PhotoGallery
    title="Colección de fotos - Liga Varonil"
    subtitle="La esencia del juego en la Segunda División."
    :images="imagesPageIntermedia"
  />
</template>

<script>
import PhotoGallery from '@/components/globals/photoGallery.vue'

// Importa las imágenes directamente
import img1 from '@/assets/images/liga-var-segunda/img1.jpg'
import img2 from '@/assets/images/liga-var-segunda/img2.jpg'
import img3 from '@/assets/images/liga-var-segunda/img3.jpg'
import img4 from '@/assets/images/liga-var-segunda/img4.jpg'
import img5 from '@/assets/images/liga-var-segunda/img5.jpg'
import img6 from '@/assets/images/liga-var-segunda/img6.jpg'
import img7 from '@/assets/images/liga-var-segunda/img7.jpg'
import img8 from '@/assets/images/liga-var-segunda/img8.jpg'
import img9 from '@/assets/images/liga-var-segunda/img9.jpg'
import img10 from '@/assets/images/liga-var-segunda/img10.jpg'

export default {
  components: {
    PhotoGallery
  },
  data() {
    return {
      imagesPageIntermedia: [
        [
          { src: img1, alt: 'Imagen 1' },
          { src: img2, alt: 'Imagen 2' }
        ],
        [
          { src: img3, alt: 'Imagen 3' },
          { src: img4, alt: 'Imagen 4' }
        ],
        [
          { src: img8, alt: 'Imagen 8' },
          { src: img9, alt: 'Imagen 9' },
          { src: img10, alt: 'Imagen 10' }
         
        ],
        [
          { src: img5, alt: 'Imagen 5' },
          { src: img6, alt: 'Imagen 6' },
          { src: img7, alt: 'Imagen 7' }
        ]
      ]
    }
  }
}
</script>
