<template>
  <div class="privacy-policy margin-lr">
    <header>
      <h1>Política de Privacidad</h1>
    </header>
    <div class="content-pp margin-lr">
      <h2>1. Introducción</h2>
      <p>
        En {{ leagueName }} valoramos su privacidad y estamos comprometidos a proteger sus datos
        personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos la
        información que usted nos proporciona a través de nuestro formulario de contacto.
      </p>

      <h2>2. Información Recopilada</h2>
      <p>Cuando usted completa nuestro formulario de contacto, recopilamos los siguientes datos:</p>
      <ul>
        <li>Nombre</li>
        <li>Apellido</li>
        <li>Teléfono</li>
        <li>Equipo de fútbol al que pertenece o desea registrar</li>
      </ul>

      <h2>3. Uso de la Información</h2>
      <p>La información que recopilamos se utiliza para los siguientes propósitos:</p>
      <ul>
        <li>Identificar y contactar a los interesados de manera adecuada.</li>
        <li>Atender consultas y solicitudes relacionadas con la liga de fútbol.</li>
        <li>Mejorar nuestros servicios y la comunicación con los usuarios.</li>
      </ul>

      <h2>4. Protección de Datos</h2>
      <p>
        Tomamos medidas razonables para proteger la información que usted nos proporciona contra el
        acceso no autorizado, la divulgación o el uso indebido. Sin embargo, no podemos garantizar
        la seguridad absoluta de los datos transmitidos a través de Internet.
      </p>

      <h2>5. Compartición de Información</h2>
      <p>
        No compartiremos sus datos personales con terceros sin su consentimiento, salvo que sea
        necesario para cumplir con la ley o para proteger nuestros derechos.
      </p>

      <h2>6. Derechos del Usuario</h2>
      <p>
        Usted tiene el derecho de acceder, corregir o eliminar la información personal que hemos
        recopilado sobre usted. Para ejercer estos derechos, por favor contáctenos{{
          contactEmail
        }}.
      </p>

      <h2>7. Cambios en la Política de Privacidad</h2>
      <p>
        Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos sobre
        cualquier cambio importante mediante una publicación en nuestro sitio web.
      </p>

      <h2>8. Contacto</h2>
      <p>
        Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, no dude en
        contactarnos.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      leagueName: 'la Liga Sanfelipense de Futbol Uruguayo',
      contactTel1: '',
      contactTel2: ''
    }
  }
}
</script>

<style scoped>
.privacy-policy {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
  padding: 20px;
}

header {
  background: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

header h1 {
  margin: 0;
}

.content-pp {
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.content-pp h2 {
  color: rgb(4 108 78);
  font-weight: bold;
  margin-bottom: 5px;
}

.content-pp p {
  margin-bottom: 15px;
}

ul {
  margin: 0;
  padding-left: 20px;
}
</style>
