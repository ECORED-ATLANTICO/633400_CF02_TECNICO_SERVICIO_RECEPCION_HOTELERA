<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Reservas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-fondo-8.px-lg-5.py-lg-4.px-4.py-3.br-15
          .col-12.col-md-12
            .row.align-items-center.justify-content-center.ms-0.ms-xl-5
              .col-lg
                p.mb-0 La gestión de reservas constituye uno de los procesos más importantes dentro de la operación hotelera, ya que está directamente relacionada con la principal fuente de ingresos del establecimiento: la venta de habitaciones. En este sentido, la reserva no solo representa la garantía de ocupación futura, sino también un elemento clave en la planificación operativa, comercial y financiera del hotel. La correcta administración de este proceso permite optimizar la ocupación, mejorar la experiencia del cliente y asegurar la sostenibilidad del negocio en un entorno altamente competitivo (Organización Mundial del Turismo [OMT], 2008).
              .col-lg-auto.d-none.d-lg-flex
                img(src="@/assets/curso/tema3/img02.svg", style="width: 90px;")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p.mb-0 Una reserva se define como un acuerdo, verbal o escrito, entre el establecimiento de alojamiento y una persona natural o jurídica, mediante el cual el hotel se compromete a prestar el servicio de alojamiento y otros servicios complementarios en una fecha determinada y por un periodo específico. Por su parte, el cliente adquiere el compromiso de hacer uso del servicio en la fecha acordada y cumplir con las condiciones de pago establecidas, incluyendo posibles penalizaciones en caso de cancelación o no presentación. Este acuerdo formaliza la relación comercial entre ambas partes y permite garantizar la disponibilidad del servicio solicitado (Kotler, Bowen & Makens, 2017).
      .col-lg-3.col-md-10
        img(src="@/assets/curso/tema3/img03.png", alt="").img-fluid


    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Objetivo de la gestión de reservas 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-3.mb-4.mb-lg-0.col-md-8
        img(src="@/assets/curso/tema3/img04.svg", alt="").img-fluid
      .col-lg-9
        p.mb-4 El objetivo principal de la gestión de reservas es mantener un control permanente y actualizado de la ocupación del establecimiento, considerando variables como entradas, salidas, cancelaciones, modificaciones y clientes <i>no show</i>. Este control permite anticipar la disponibilidad de habitaciones y tomar decisiones oportunas que contribuyan a maximizar la ocupación y los ingresos del hotel. Asimismo, facilita la organización interna del establecimiento, permitiendo coordinar áreas como recepción, <i>housekeeping</i> y alimentos y bebidas.
        .row.align-items-center
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema3/img05.svg").mx-auto
          .col-lg
            p.mb-0 Adicionalmente, la gestión de reservas implica la implementación de estrategias comerciales orientadas a la venta de habitaciones, apoyadas en el análisis del comportamiento de la demanda a lo largo del tiempo. Herramientas como las gráficas de ocupación mensual permiten identificar temporadas altas y bajas, lo que facilita el diseño de promociones, tarifas especiales y paquetes turísticos. Este proceso requiere el uso de sistemas de gestión hotelera (PMS), así como el conocimiento de la oferta de servicios y la capacidad del agente de reservas para interactuar eficazmente con el cliente y concretar la venta (Kotler et al., 2017).
      
    p.mb-4 A continuación, con un ejemplo práctico, se evidencia la importancia de la gestión de reservas:

    .bg-full-width.bg-fondo-9.px-5.py-4.mb-3
      .container
        .tarjeta.tarjeta--blanca.row.justify-content-center.align-items-center.mb-0.p-4
          .col-lg-9.order-2.order-lg-1
            p.mb-4 Un hotel ubicado en una zona turística registra, a través de su sistema de reservas, que durante los meses de junio y diciembre presenta una alta ocupación debido a temporadas vacacionales. En contraste, durante los meses de febrero y septiembre, la demanda disminuye significativamente. A partir de este análisis, el área de reservas implementa estrategias como descuentos en temporada baja, paquetes promocionales (alojamiento + desayuno + actividades) y alianzas con agencias de viajes para atraer clientes. Al mismo tiempo, mantiene un control riguroso de las reservas confirmadas, cancelaciones y <i>no show</i>, evitando pérdidas económicas por habitaciones vacías o sobreocupación.
            .row.align-items-center
              .col-lg-auto.d-none.d-lg-flex
                img(src="@/assets/curso/tema3/img07.svg").mx-auto
              .col-lg
                p.mb-0 Este caso evidencia cómo la gestión de reservas no solo implica registrar información, sino analizarla y utilizarla estratégicamente para mejorar la ocupación, optimizar los ingresos y garantizar un servicio eficiente, alineado con las necesidades del mercado.
          .col-lg-3.col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/tema3/img08.png", alt="").img-fluid


    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Códigos de reserva
      

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        img(src="@/assets/curso/tema3/img09.png").mx-auto
      .col-lg-9
      
        .bg-fondo-10.px-lg-5.py-lg-4.px-4.py-3.br-15.mb-4
          .col-12.col-md-12
            p.mb-0 El código de reserva es un identificador único, generalmente alfanumérico, asignado por los sistemas de gestión hotelera (PMS) al momento de registrar una reserva. Este código permite identificar de manera precisa cada operación, incluyendo información relevante como fechas de estancia, tipo de habitación, tarifa, forma de pago y datos del cliente. Su uso es fundamental para garantizar el control y seguimiento de las reservas dentro del sistema, evitando errores y facilitando la gestión operativa del establecimiento (Kasavana & Cahill, 2017).
            
        p.mb-3 Estos códigos se generan automáticamente al ingresar los datos del cliente en el sistema y procesar la reserva, y posteriormente son enviados al huésped, generalmente a través de correo electrónico, como confirmación del servicio contratado. Es importante destacar que cada prestador de servicios turísticos, como aerolíneas, agencias de viajes y hoteles, utiliza sus propios códigos de reserva, lo que permite la identificación individual de cada servicio dentro de la cadena turística. El correcto manejo de estos códigos es esencial para el control de la información y la atención eficiente al cliente.
        p.mb-0 En la tabla a continuación, se describen los códigos más comunes utilizados en sistemas de gestión hotelera (PMS): 

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 5.
          span Códigos comunes en sistemas de gestión hotelera (PMS)
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA (2026).</span>
            thead
              tr
                th Código
                th Significado
                th Uso en la gestión de reservas
                th Ejemplo práctico
            tbody
              tr
                td RES
                td Reserva
                td Indica que existe una reserva registrada en el sistema
                td Cliente con habitación apartada para una fecha futura
              tr
                td CONF
                td Confirmada
                td Reserva confirmada por el cliente
                td El cliente recibió correo de confirmación
              tr
                td CAN
                td Cancelada
                td Reserva anulada por el cliente o el hotel
                td Cliente cancela antes de la fecha
              tr
                td NOS (<i>No Show</i>)
                td No se presentó
                td Cliente no llega sin cancelar
                td Habitación queda vacía y puede generar penalización
              tr
                td IN
                td <i>Check-in</i>
                td Cliente ha ingresado al hotel
                td Huésped llega y ocupa la habitación
              tr
                td OUT
                td <i>Check-out</i>
                td Cliente ha salido del hotel
                td Finaliza la estancia
              tr
                td HOLD
                td En espera
                td Reserva pendiente de confirmación
                td Cliente solicita habitación, pero no paga aún
              tr
                td GRP
                td Grupo
                td Reserva de varias habitaciones
                td Evento empresarial con varias habitaciones
              tr
                td OTA
                td <i>Online Travel Agency</i>
                td Reserva proveniente de plataforma digital
                td Reserva hecha por <i>Booking</i> o <i>Expedia</i>
              tr
                td CORP
                td Corporativa
                td Reserva de empresa o convenio
                td Empresa reserva para sus empleados
              tr
                td BKD
                td <i>Booking</i>
                td Reserva registrada en el sistema
                td Se genera al ingresar datos del cliente
              tr
                td PMT
                td Pago registrado
                td Indica que el servicio ha sido pagado
                td Cliente paga anticipadamente


    .row.justify-content-center.mb-0
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/img11.svg", class="img-fluid cita-decorada__imagen-flotante-4")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Lo invitamos a consultar el siguiente video para conocer de manera práctica cómo funciona la gestión de reserva hotelera por medio del PSM <em>(Property Management System)</em>.
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=xb0ZUTCUX08" target="_blank")
                  span Ver video
                  i.fas.fa-play-circle

    
</template>

<script>
export default {
  name: 'Tema3',
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
