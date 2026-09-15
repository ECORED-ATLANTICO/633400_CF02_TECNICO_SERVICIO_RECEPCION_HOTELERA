<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-9.order-2.order-lg-1
        p.mb-4 El componente formativo Gestión de reservas hoteleras aborda los elementos conceptuales y operativos necesarios para comprender y aplicar los procesos relacionados con la administración de reservas en establecimientos de alojamiento. A través del estudio de los servicios turísticos, el sistema turístico, el producto turístico y sus características, así como del portafolio de servicios y su estructura, se proporciona al aprendiz una base sólida que le permite identificar la oferta del establecimiento y su relación con las necesidades del cliente. De igual forma, se profundiza en los procedimientos técnicos de reservas, incluyendo su definición, objetivos, códigos y convenciones, lo que facilita la comprensión del funcionamiento integral del área dentro de la operación hotelera.
        .bg-fondo-6.px-lg-5.py-lg-4.px-4.py-3.br-15
          .col-12.col-md-12
            p.mb-0 Asimismo, el componente enfatiza la importancia del área de reservas como eje estratégico en la generación de ingresos y en la experiencia del cliente, destacando sus funciones, el uso de herramientas tecnológicas como los sistemas de gestión hotelera (PMS) y las cualidades que debe poseer el personal encargado de esta área. Finalmente, se aborda el manejo de tarifas hoteleras desde una perspectiva actual, incorporando conceptos como revenue management y precios dinámicos, lo que permite al aprendiz comprender la relación entre la ocupación, la demanda y la rentabilidad. Estos conocimientos fortalecen sus competencias para gestionar información, aplicar procedimientos técnicos y participar de manera efectiva en los procesos de comercialización y atención al cliente dentro del sector de servicios de alojamiento.

      .col-lg-3.col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
        img(src="@/assets/curso/intro/img03.png").mx-auto


    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Gestión de reservas hoteleras aborda los elementos conceptuales y operativos necesarios para comprender y aplicar los procesos relacionados con la administración de reservas en establecimientos de alojamiento. A través del estudio de los servicios turísticos, el sistema turístico, el producto turístico y sus características, así como del portafolio de servicios y su estructura, se proporciona al aprendiz una base sólida que le permite identificar la oferta del establecimiento y su relación con las necesidades del cliente. De igual forma, se profundiza en los procedimientos técnicos de reservas, incluyendo su definición, objetivos, códigos y convenciones, lo que facilita la comprensión del funcionamiento integral del área dentro de la operación hotelera. Asimismo, el componente enfatiza la importancia del área de reservas como eje estratégico en la generación de ingresos y en la experiencia del cliente, destacando sus funciones, el uso de herramientas tecnológicas como los sistemas de gestión hotelera (PMS) y las cualidades que debe poseer el personal encargado de esta área. Finalmente, se aborda el manejo de tarifas hoteleras desde una perspectiva actual, incorporando conceptos como revenue management y precios dinámicos, lo que permite al aprendiz comprender la relación entre la ocupación, la demanda y la rentabilidad. Estos conocimientos fortalecen sus competencias para gestionar información, aplicar procedimientos técnicos y participar de manera efectiva en los procesos de comercialización y atención al cliente dentro del sector de servicios de alojamiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
