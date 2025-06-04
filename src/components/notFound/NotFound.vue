<template>
  <div class="not-found">
    <header>
      <h1>404 - Página No Encontrada</h1>
    </header>
    <div class="content">
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p class="link-home">Regresa a <router-link to="/">la página principal</router-link>.</p>
      <section class="not-found-img">
        <img src="/src/assets/images/404-error.jpg" alt="notFound designed by freepik" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
  text-align: center;
  padding: 20px;
}

header {
  background: rgb(4 108 78);
  color: #fff;
  padding: 20px;
}

header h1 {
  margin: 0;
}

.content {
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
.content .link-home {
  text-decoration: underline;
  color: rgb(62, 168, 255);
}

.not-found-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.not-found img {
  max-width: 40%; /* Ajusta el ancho máximo de la imagen al 80% del contenedor */
  height: auto; /* Mantiene la relación de aspecto de la imagen */
}
</style>
