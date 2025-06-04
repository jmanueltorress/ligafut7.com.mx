<template>
  <PhotoGallery
    title="Colección de fotos - Liga Varonil | Division Intermedia"
    subtitle="Acción y emoción en la División Intermedia."
    :images="imagesPageIntermedia"
  />
</template>

<script>
import PhotoGallery from '@/components/globals/photoGallery.vue'

// Importa las imágenes directamente
import img1 from '@/assets/images/liga-var-intermedia/img1.jpg'
import img2 from '@/assets/images/liga-var-intermedia/img2.jpg'
import img3 from '@/assets/images/liga-var-intermedia/img3.jpg'
import img4 from '@/assets/images/liga-var-intermedia/img4.jpg'
import img5 from '@/assets/images/liga-var-intermedia/img5.jpg'
import img6 from '@/assets/images/liga-var-intermedia/img6.jpg'
import img7 from '@/assets/images/liga-var-intermedia/img7.jpg'

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
          { src: img5, alt: 'Imagen 5' },
          { src: img6, alt: 'Imagen 6' },
          { src: img7, alt: 'Imagen 7' }
        ]
      ]
    }
  }
}
</script>
