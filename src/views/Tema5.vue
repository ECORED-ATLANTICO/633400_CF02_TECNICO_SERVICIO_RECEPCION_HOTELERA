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
            caption <span style="font-weight: normal">Nota. SENA (2026).</span>
            thead
              tr
                th Tipo de tarifa
                th Descripción
                th Aplicación en reservas
            tbody
              tr
                td Tarifa <i>rack</i>
                td Tarifa oficial sin descuentos
                td Base de referencia para otras tarifas
              tr
                td Tarifa neta o de piso
                td Tarifa para intermediarios (sin margen incluido)
                td Uso en agencias y plataformas
              tr
                td Tarifa confirmada
                td Precio acordado con el cliente al reservar
                td Garantiza condiciones al huésped
              tr
                td Tarifa negociada
                td Tarifa con descuento por convenio
                td Empresas, agencias, clientes frecuentes
              tr
                td Tarifa <i>complimentary</i>
                td Tarifa sin costo
                td Cortesías, relaciones estratégicas
              tr
                td Tarifas promocionales
                td Tarifas con descuentos y condiciones
                td Estrategias comerciales
              tr
                td Tarifa BAR (<i>best available rate</i>)
                td Mejor tarifa disponible en todos los canales
                td Transparencia y venta directa
              tr
                td Tarifa grupo o evento
                td Tarifas para reservas grupales
                td Congresos, eventos, ferias
              tr
                td Tarifa larga estadía
                td Tarifas especiales por estancias prolongadas
                td Huéspedes permanentes
              tr
                td Paquetes o planes
                td Combinación de servicios a precio atractivo
                td Planes turísticos integrados

    .bg-full-width.bg-fondo-9.px-5.py-4.mb-5
      .container
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            h4.mb-3 Ejemplo práctico aplicado
            p.mb-3 Un hotel identifica que durante un fin de semana de alta demanda por un evento en la ciudad, la ocupación alcanza el 95 %. En este caso, el área de reservas aplica una tarifa BAR elevada, optimizando los ingresos por habitación. Paralelamente, mantiene tarifas negociadas previamente con empresas, respetando acuerdos comerciales. En temporada baja, el mismo hotel implementa tarifas promocionales y paquetes (alojamiento + alimentación) para incentivar la demanda y mejorar la ocupación.

            .row.align-items-center
              .col-lg-auto.d-none.d-lg-flex
                img(src="@/assets/curso/tema5/img04.svg").mx-auto
              .col-lg
                p.mb-0 Este ejemplo evidencia que la gestión de tarifas no es un proceso estático, sino estratégico, donde el área de reservas juega un papel clave en la aplicación adecuada de los diferentes tipos de tarifas según el contexto del mercado.
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
