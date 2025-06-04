<script setup>
import { RouterLink, RouterView } from 'vue-router'
import footerSection from './footer.vue'
import headerSection from './header.vue'
</script>

<template>
  <headerSection></headerSection>
  <RouterView />

  <footerSection></footerSection>
</template>
