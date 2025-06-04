<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="contain-nav max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img alt="liga-uruguayo logo" class="logo" src="@/assets/images/logo.webp" width="90" height="auto" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <button data-collapse-toggle="navbar-dropdown" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <RouterLink to="/"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page">Inicio</RouterLink>
            </li>
            <li>
              <RouterLink to="/about"
                class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Nosotros</RouterLink>
            </li>
            <!-- Dropdown nav -->
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-center w-full py-2 px-3 text-white rounded hover:bg-black-100 md:hover:bg-black md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-green-500">
                Divisiones
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar"
                class="drpwn z-10 hidden font-normal bg-white divide-y divide-green-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <!-- <li>
                    <a href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Varonil</a>
                  </li> -->

                  <li>
                    <RouterLink to="/div-fem"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Femenil
                    </RouterLink>
                  </li>
                  <!-- <li>
                    <RouterLink
                      to="/div-inf"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Infantil</RouterLink
                    >
                  </li> -->
                  <ul>
                    <li class="menu-item">
                      <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Varonil</a>

                      <ul class="submenu">
                        <li>
                          <RouterLink to="/div-var-primera">Primera </RouterLink>
                        </li>
                        <!-- <li><RouterLink to="/div-var-intermedia">Intermedia</RouterLink></li> -->
                        <li>
                          <RouterLink to="/div-var-segunda">Segunda Fuerza</RouterLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </ul>
              </div>
            </li>

            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>
            <!-- link-portalweb -->
            <button type="button">
              <a href="#" class="btn-ccto text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Login
              </a>
             
              
                
            </button>
            <!-- button-contactus -->
            <button type="button">
              <RouterLink to="/contact"
                class="btn-ccto text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Contactanos</RouterLink>
                
            </button>
             
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
.btn-ccto {
  padding-top: 5px;
  padding-bottom: 5px;
}

header {
  line-height: 1.5;
  max-height: 100vh;

  position: sticky;
  top: 0;
  width: 100%;
  /* Asegura que el encabezado ocupe todo el ancho de la página */
  z-index: 1000;
  /* Opcional: Asegura que el encabezado esté sobre otros elementos */
}

.logo {
  border-radius: 100%;
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;

  max-width: 100%;
  font-size: 12px;
  text-align: center;

  background-color: rgb(0, 0, 0);
}

nav ul {
  background-color: black;
}

nav .drpwn ul {
  background-color: white;
}

nav a {
  margin-left: 12%;
}

nav a.router-link-exact-active {
  text-decoration: none;
  /* Quita el subrayado por defecto */
  position: relative;
  /* Permite posicionar el pseudo-elemento */
  transition: color 0.2s ease-in-out;
  /* Transición suave del color (opcional) */
}

nav a.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  /* Ajusta la posición del subrayado */
  width: 100%;
  border-bottom: 2px solid var(--tempplate-yellow);
  /* Color y grosor del subrayado */
  transition: width 0.3s ease-in-out;
  /* Transición suave de entrada */
}

nav a.router-link-exact-active:hover::after {
  width: 0;
  /* Ancho cero al hacer hover */
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;

  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;

    font-size: 1rem;
  }
}

@media (max-width: 750px) {
  #dropdownNavbarLink {
    padding-left: 70px;
  }
}
</style>
