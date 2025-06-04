<template>
  <PhotoGallery
    title="Colección de fotos - Liga Varonil"
    subtitle="Emoción y talento en la Primera División Estelar."
    :images="imagesPageIntermedia"
  />
</template>

<script>
import PhotoGallery from '@/components/globals/photoGallery.vue'

// Importa las imágenes directamente
import img1 from '@/assets/images/liga-var-primera/img1.jpg'
import img2 from '@/assets/images/liga-var-primera/img2.jpg'
import img3 from '@/assets/images/liga-var-primera/img3.jpg'
import img4 from '@/assets/images/liga-var-primera/img4.jpg'
import img5 from '@/assets/images/liga-var-primera/img5.jpg'
import img6 from '@/assets/images/liga-var-primera/img6.jpg'
import img7 from '@/assets/images/liga-var-primera/img7.jpg'
import img8 from '@/assets/images/liga-var-primera/img8.jpg'
import img9 from '@/assets/images/liga-var-primera/img9.jpg'

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
          { src: img9, alt: 'Imagen 9' }
         
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
