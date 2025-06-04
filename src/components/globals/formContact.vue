<template>
  <div>
    <section>
      <br />
      <h2 class="font-extrabold mb-4 text-3xl text-center">CONTÁCTANOS</h2>
      <h4 class="mb-4 text-2xl text-center">Te responderemos con gusto.</h4>
      <br />
    </section>

    <main class="form-contacto grid md:grid-cols-2 margin-lr">
      <form
        @submit.prevent="handleSubmit"
        ref="form"
        class="max-w-md mx-auto"
        action="https://formspree.io/f/mnnayabv"
        method="POST"
      >
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="Nombre"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="Nombre"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Nombre</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="Apellido"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="Apellido"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Apellido</label
            >
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="Telefono"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="Telefono"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Teléfono (123-456-7890)</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="Equipo"
              id="floating_company"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="Equipo"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Equipo
            </label>
          </div>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <label for="Mensaje" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Mensaje
            <textarea
              id="message"
              name="Mensaje"
              rows="4"
              required
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </label>
        </div>
        <!-- terminos y condiciones check -->
        <div class="flex items-center">
          <input
            id="link-checkbox"
            name="Politica de privacidad"
            type="checkbox"
            value="Leído y Aceptado"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            required
          />
          <label
            for="link-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            He leído y Acepto la
            <a href="/privacy-policy" class="text-blue-600 dark:text-blue-500 hover:underline"
              >Política de privacidad</a
            >.
          </label>
        </div>
        <br />

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
      <section class="map-desk">
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14848.997367178295!2d-101.2343838!3d21.4979513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842afdea21be1d8f%3A0x9cef9fcd42dd418a!2sUnidad%20Deportiva%20Camino%20Real!5e0!3m2!1ses-419!2smx!4v1723499009522!5m2!1ses-419!2smx"
          width="400"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <br />
      </section>
      <section class="map-movile">
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14848.997367178295!2d-101.2343838!3d21.4979513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842afdea21be1d8f%3A0x9cef9fcd42dd418a!2sUnidad%20Deportiva%20Camino%20Real!5e0!3m2!1ses-419!2smx!4v1723499009522!5m2!1ses-419!2smx"
          width="250"
          height="150"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <br />
      </section>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const form = ref(null)

async function handleSubmit() {
  const formData = new FormData(form.value)

  try {
    const response = await fetch(form.value.action, {
      method: form.value.method,
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })

    if (response.ok) {
      form.value.reset()
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.')
    } else {
      alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.')
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.')
  }
}
</script>
<style>
@media (max-width: 400px) {
  .map-desk {
    display: none;
  }
}
@media (min-width: 401px) {
  .map-movile {
    display: none;
  }
}
</style>
