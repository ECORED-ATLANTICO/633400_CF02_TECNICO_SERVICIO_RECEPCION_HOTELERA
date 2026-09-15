<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
 
    .bg-full-width.bg-fondo-1.px-4.py-4
      img(src="@/assets/curso/intro/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text La gestión de reservas hoteleras constituye uno de los procesos fundamentales en la operación de los servicios de alojamiento, ya que permite organizar, controlar y garantizar la disponibilidad de los servicios ofrecidos a los huéspedes. En un entorno turístico cada vez más competitivo, la adecuada administración de las reservas no solo impacta la ocupación del establecimiento, sino también la calidad del servicio, la satisfacción del cliente y la eficiencia operativa. Este componente formativo aborda los elementos clave que intervienen en la gestión de reservas, integrando conceptos del sistema turístico, el portafolio de servicios, la estructura organizacional del área de reservas y los criterios para la definición de tarifas.

    .row.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/intro/img02.svg").mx-auto
      .col-lg
        p.mb-0 En este sentido, el componente formativo Gestión de reservas hoteleras está orientado a que el aprendiz desarrolle una comprensión integral de los procesos relacionados con la administración de reservas en el sector de alojamiento. A lo largo de los contenidos, se promueve el análisis de los servicios turísticos, la estructuración del portafolio, la aplicación de procedimientos técnicos y el reconocimiento de elementos operativos como códigos, convenciones y tarifas. De esta manera, se busca fortalecer habilidades asociadas a la gestión de la información, la toma de decisiones y la atención efectiva al cliente, fundamentales para el desempeño en el área de reservas.
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
