<template>
  <section
    class="banner-home bg-center bg-no-repeat bg-cover bg-[url('/images/webp/soccerbyia.webp')] bg-gray-700 bg-blend-multiply"
  >
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-55">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl margin-lr"
      >
        ¡Vive la emoción del futbol en su máxima expresión!
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Únete a la liga que une talento, estrategia y diversión en cada encuentro.
      </p>

      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <RouterLink
          to="/contact"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
        >
          Contactanos

          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </RouterLink>
        <RouterLink
          to="/about"
          class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Conocer más
        </RouterLink>
      </div>
    </div>
  </section>
</template>
<style>
.banner-home {
  background-image: url('/src/assets/images/webp/soccerbyia.jpg');
  height: 100vh;
}
</style>
