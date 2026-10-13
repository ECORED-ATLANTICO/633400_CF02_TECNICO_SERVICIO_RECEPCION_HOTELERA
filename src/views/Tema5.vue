<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tarifas


    .bg-full-width.bg-fondo-1.px-5.py-4
      img(src="@/assets/curso/tema5/img01.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-11(data-aos="fade-right")
        p.banner-text Las tarifas hoteleras constituyen un elemento fundamental en la gestión de reservas, ya que determinan el valor económico de los servicios ofrecidos por el establecimiento y afectan directamente la competitividad y rentabilidad del negocio. En la actualidad, el manejo de tarifas ha evolucionado significativamente debido a la aparición de múltiples canales de distribución y al uso de tecnologías especializadas, lo que ha dado lugar a modelos dinámicos de fijación de precios. Estos modelos permiten ajustar las tarifas en función de variables como la demanda, la ocupación, la temporada y el comportamiento del mercado (Organización Mundial del Turismo [OMT], 2008).


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-2.col-md-8.mb-4.mb-lg-0
        img(src="@/assets/curso/tema5/img02.png").mx-auto
      .col-lg-10
        p.mb-0(data-aos="fade-right") En este contexto, surge el concepto de <i>revenue management</i>, una disciplina orientada a maximizar los ingresos del hotel mediante la gestión estratégica de precios, disponibilidad y segmentación de clientes. Gracias a esta práctica, las tarifas ya no se manejan de manera estática (temporada alta, media o baja), sino que se ajustan constantemente mediante el denominado <i>dynamic pricing</i>, lo que permite ofrecer el precio adecuado al cliente correcto en el momento oportuno. Este enfoque exige un conocimiento profundo del mercado, el uso de sistemas tecnológicos (PMS y <i>channel managers</i>) y una adecuada interpretación de los datos de ocupación y demanda (Kotler, Bowen & Makens, 2017).
        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10  
        .cajon.bg-color-74.p-4
          p.mb-0(data-aos="fade-right") Adicionalmente, los sistemas de reservas utilizan códigos y convenciones que permiten identificar de manera rápida información clave como disponibilidad, tipos de habitación, estado de la reserva y tipos de tarifas. Estos códigos facilitan la gestión operativa, ya que permiten al personal acceder de forma ágil a la información necesaria para la toma de decisiones y la atención al cliente, optimizando los procesos dentro del área de reservas (Kasavana & Cahill, 2017).

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Tarifas hoteleras

    
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema5/img03.svg").mx-auto
      .col-lg
        p.mb-3(data-aos="fade-right") Las tarifas hoteleras se clasifican según su finalidad, condiciones de uso y tipo de cliente al que están dirigidas. Esta clasificación permite estructurar la oferta del hotel y adaptar los precios a diferentes segmentos del mercado, contribuyendo a una gestión más eficiente de la ocupación y los ingresos.
        p.mb-0(data-aos="fade-right") En la tabla a continuación se pueden observar los tipos de tarifas hoteleras y su aplicación en las reservas:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 6.
          span Tipos de tarifas hoteleras
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th Tipo de tarifa
                th Descripción
                th Aplicación en reservas
            tbody
              tr
                td Tarifa rack
                td Tarifa pública de referencia establecida por el alojamiento, antes de aplicar descuentos o condiciones comerciales especiales.
                td Se utiliza como referencia para cotizaciones y comparación de tarifas.
              tr
                td Tarifa neta
                td Precio acordado con intermediarios, sin incluir el margen comercial que estos puedan adicionar.
                td Se aplica en acuerdos comerciales con agencias de viajes y otros intermediarios.
              tr
                td Tarifa negociada
                td Precio establecido mediante acuerdos comerciales con empresas, agencias o clientes específicos.
                td Se utiliza en reservas corporativas y convenios comerciales.
              tr
                td
                  | Tarifa de cortesía (
                  i complimentary
                  | )
                td Alojamiento ofrecido sin costo al huésped, de acuerdo con las políticas del establecimiento.
                td Se aplica en cortesías autorizadas, atenciones especiales y acuerdos institucionales.
              tr
                td Tarifa promocional
                td Precio especial ofrecido durante determinados periodos o bajo condiciones comerciales específicas.
                td Se utiliza en campañas promocionales, temporadas y estrategias de ocupación.
              tr
                td
                  | Tarifa BAR (
                  i best available rate
                  | )
                td La tarifa pública flexible y sin restricciones que sirve como precio base de venta del hotel. No es un valor estático, sino un mecanismo dinámico gestionado por el PMS.
                td Su alcance permite configurarla de manera variable por día o según la duración de la estadía (LOS), automatizando la visualización de la tarifa más óptima en los canales de venta habilitados.
              tr
                td Tarifa grupal
                td Precio especial establecido para reservas de un número determinado de habitaciones o huéspedes, según las políticas del alojamiento.
                td Se aplica en reservas para grupos, congresos, convenciones y eventos.
              tr
                td Tarifa de larga estadía
                td Precio especial establecido para huéspedes que permanecen durante un periodo prolongado.
                td Se aplica en reservas de estancias prolongadas, según las condiciones comerciales del establecimiento.

    .bg-full-width.bg-fondo-9.px-5.py-4.mb-5
      .container
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            h4.mb-3 Ejemplo práctico aplicado
            p.mb-3 Un hotel identifica que durante un fin de semana se celebrará un evento masivo en la ciudad, lo que proyecta un comportamiento de alta demanda. En este caso, el área de reservas y <em>Revenue Management</em> implementa una estrategia de tarifa BAR optimizada, configurando el sistema (por día o por duración de estancia) para que determine el precio público más rentable según el ritmo de reservas y proteja el inventario disponible. Paralelamente, el hotel mantiene sus tarifas negociadas previamente con empresas, respetando los acuerdos comerciales vigentes. En temporada baja, el mismo hotel implementa tarifas promocionales y paquetes (alojamiento + alimentación) para incentivar la demanda y mejorar la ocupación.

            .row.align-items-center
              .col-lg-auto.d-none.d-lg-flex
                img(src="@/assets/curso/tema5/img04.svg").mx-auto
              .col-lg
                p.mb-0 Este ejemplo evidencia que la gestión de tarifas no es un proceso estático ni depende de un solo indicador automático, sino que es estratégico. El área de reservas juega un papel clave en la parametrización técnica de los diferentes tipos de tarifas según el contexto y las variables del mercado.
          .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/tema5/img05.png", alt="").img-fluid


    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-8.mb-4.mb-lg-0
        img(src="@/assets/curso/tema5/img06.png").mx-auto
      .col-lg-9
        .bg-fondo-11.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-0
          .col-12.col-md-12
            .row.align-items-center.ms-0.ms-xl-5
              .col-lg
                p.mb-0 El manejo de tarifas en el sector hotelero constituye un proceso estratégico que va más allá de la simple asignación de precios, ya que implica la comprensión del comportamiento de la demanda, la segmentación del mercado y el uso eficiente de herramientas tecnológicas para la toma de decisiones. La implementación de modelos dinámicos, apoyados en el <i>revenue management</i>, permite a los establecimientos ajustar sus tarifas en tiempo real, optimizando la ocupación y maximizando los ingresos, sin perder de vista la percepción de valor por parte del cliente (Organización Mundial del Turismo [OMT], 2008; Kotler, Bowen & Makens, 2017).
              .col-lg-auto.d-none.d-lg-flex
                img(src="@/assets/curso/tema5/img08.svg", style="width: 90px;").mx-auto

    .row.align-items-center.justify-content-center.mb-3(data-aos="fade-right")
      .col-lg-12
        p.mb-0 En este sentido, la correcta estructuración de las tarifas, su categorización y su aplicación dentro del proceso de reservas, se convierten en un factor determinante para la competitividad del establecimiento. El dominio de estos conceptos por parte del personal del área de reservas no solo garantiza una adecuada comercialización de los servicios, sino que también contribuye a ofrecer experiencias coherentes con las expectativas del cliente. En conclusión, las tarifas hoteleras representan un elemento integrador entre la operación, la estrategia comercial y la satisfacción del huésped, consolidándose como uno de los pilares fundamentales en la gestión de los servicios de alojamiento.



</template>

<script>
export default {
  name: 'Tema5',
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
