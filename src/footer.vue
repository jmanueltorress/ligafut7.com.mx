<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 cont-footer">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="./assets/images/logo.webp" class="h-10 rounded-full" alt="Liga Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <RouterLink to="/" class="hover:underline me-4 md:me-6">Inicio</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:underline me-4 md:me-6">Nosotros</RouterLink>
          </li>
          <li>
            <RouterLink to="/privacy-policy" class="hover:underline me-4 md:me-6"
              >Politica de Privacidad</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contact" class="hover:underline">Contacto</RouterLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >&copy; {{ currentYear }} <a href="/" class="hover:underline">{{ leagueName }} </a>. Todos
          los Derechos reservados
        </span>

        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=100065009590809"
            target="_blank"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      leagueName: 'Liga de Futbol Uruguayo - San Felipe, Gto',
      // contactEmail: 'contacto@liga-futbol.com',
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
<style scoope>
.cont-footer {
  padding: 7% 10% 4% 12%;
}
</style>
