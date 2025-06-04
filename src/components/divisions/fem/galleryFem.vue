<template>
  <PhotoGallery
    title="Colección de Fotos - Liga Femenil"
    subtitle="Revive las Emociones y Triunfos de Nuestras Jugadoras"
    :images="imagesPageFemenil"
  />
</template>

<script>
import PhotoGallery from '@/components/globals/photoGallery.vue'

// Importa las imágenes directamente
import img1 from '@/assets/images/liga-femenil/img1.jfif'
import img2 from '@/assets/images/liga-femenil/img2.jfif'
import img3 from '@/assets/images/liga-femenil/img3.jfif'
import img4 from '@/assets/images/liga-femenil/img4.jfif'
import img5 from '@/assets/images/liga-femenil/img5.jpg'
import img6 from '@/assets/images/liga-femenil/img6.jpg'
import img7 from '@/assets/images/liga-femenil/img7.jpg'
import img8 from '@/assets/images/liga-femenil/img8.jpg'

export default {
  components: {
    PhotoGallery
  },
  data() {
    return {
      imagesPageFemenil: [
        [
          { src: img8, alt: 'Imagen 8' },
          { src: img7, alt: 'Imagen 7' }
        ],
        [
          { src: img6, alt: 'Imagen 6' },
          { src: img5, alt: 'Imagen 5' }
        ],
        [
          { src: img3, alt: 'Imagen 3' },
          { src: img4, alt: 'Imagen 4' }
        ],
        [
          { src: img1, alt: 'Imagen 1' },
          { src: img2, alt: 'Imagen 2' }
        ]
      ]
    }
  }
}
</script>
