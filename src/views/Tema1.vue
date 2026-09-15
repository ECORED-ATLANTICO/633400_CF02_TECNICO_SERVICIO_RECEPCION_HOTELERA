<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicios turísticos 


    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los servicios turísticos comprenden el conjunto de bienes y servicios ofrecidos por los diferentes actores del sector turismo, orientados a satisfacer las necesidades de las personas durante sus desplazamientos fuera de su entorno habitual. Estos servicios incluyen actividades relacionadas con el transporte, el alojamiento, la alimentación, la recreación y la intermediación turística, permitiendo al viajero organizar y disfrutar su experiencia en un destino determinado. En este sentido, el servicio turístico no solo responde a una necesidad de movilidad, sino que se configura como un elemento clave en la generación de experiencias, al facilitar el desarrollo de actividades distintas a la rutina cotidiana del individuo (Organización Mundial del Turismo [OMT], 2008).
    

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img02.svg").mx-auto
      .col-lg
        .bg-fondo-3.px-lg-5.py-lg-4.px-4.py-3.br-15
          .col-12.col-md-12.mx-auto
            p.mb-0.ms-0.ms-xl-5 Desde una perspectiva sistémica, el turismo se fundamenta en la interacción entre el sujeto (turista) y el objeto (destino, prestadores y organización del servicio), estableciendo una relación dinámica en la que los servicios turísticos actúan como mediadores entre la oferta y la demanda. Para el turista, estos servicios representan el conjunto de facilidades que le permiten acceder, permanecer y disfrutar de un destino, mientras que para los prestadores constituyen el núcleo de su actividad económica, orientada a satisfacer expectativas específicas del cliente (Cabarcos Novas, 2006). Esta relación evidencia que el servicio turístico no es un elemento aislado, sino parte de un sistema articulado que integra recursos, infraestructura y actores.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-9.mb-4.mb-lg-0
        p.mb-4 De manera complementaria, el servicio turístico puede entenderse como un conjunto de actividades diferenciadas pero interrelacionadas, que operan de forma coordinada para responder a las exigencias generadas por la demanda turística en un destino específico. Estas actividades incluyen procesos de comercialización, distribución y prestación del servicio, así como la interacción directa con el cliente, lo que implica no solo una dimensión operativa, sino también estratégica en la gestión de la oferta turística. En este contexto, el servicio turístico integra técnicas orientadas a la transferencia y venta de productos turísticos, garantizando su disponibilidad y acceso para el consumidor final (Ramírez Cavazza, 2007).
        .row.align-items-center.mb-0(data-aos="fade-right")
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema1/img04.svg").mx-auto
          .col-lg
            p.mb-0 Finalmente, el servicio turístico se orienta a atender la corriente turística, entendida como el flujo continuo de personas que se desplazan con fines diversos como recreación, negocios, cultura o descanso. Este flujo genera una demanda constante que debe ser atendida mediante servicios organizados, eficientes y de calidad, tanto en contextos hoteleros como no hoteleros. De esta manera, los servicios turísticos se consolidan como un componente esencial en la estructura del turismo, al permitir la satisfacción de necesidades y expectativas del viajero en diferentes escenarios y condiciones (Antonietti, 2017).
      .col-lg-3.col-md-8.mx-auto
        figure    
          img(src="@/assets/curso/tema1/img05.png").mx-auto    

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Sistema turístico


    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img06.svg").mx-auto
      .col-lg
        p.mb-0 El sistema turístico se define como el conjunto de elementos interrelacionados que interactúan de manera dinámica para dar forma a la actividad turística en un territorio determinado. Este sistema está compuesto por diferentes subsistemas que permiten comprender el funcionamiento integral del turismo, entre ellos: la estructura turística, la infraestructura, la superestructura, la oferta y la demanda. La articulación de estos componentes permite la planificación, organización y prestación de servicios turísticos, garantizando que la experiencia del visitante sea coherente con las condiciones del destino y con las expectativas del mercado (Boullón, 2006).  


    .bg-full-width.bg-fondo-2.tarjeta.mb-5
      .px-1.py-4.py-md-4.p-lg-4.px-lg-2
        SlyderA(tipo="b").bg-color-white.p-0.p-lg-4.tarjeta
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 <b>Estructura turística:</b> también conocida como planta turística, está conformada por los atractivos, instalaciones y equipamientos que permiten la permanencia del turista en el destino. Incluye elementos como establecimientos de alojamiento, servicios de alimentación, espacios recreativos y otros servicios complementarios que garantizan comodidad y satisfacción durante la estancia. Este subsistema es fundamental, ya que constituye la base operativa del turismo, al facilitar el consumo de servicios y la vivencia del destino por parte del visitante (Boullón, 2006).
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img08.png", alt="").mx-auto
          .row.justify-content-center.align-items-center.p-4.p-lg-2
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 <b>Infraestructura turística:</b> comprende el conjunto de bienes y servicios básicos que facilitan el acceso, la movilidad y la permanencia en el destino turístico. Dentro de esta se incluyen las vías de comunicación, los sistemas de transporte, los servicios públicos como acueducto, energía y saneamiento, así como los sistemas de telecomunicaciones. Estos elementos no son exclusivos del turismo, pero resultan indispensables para su desarrollo, ya que permiten que los servicios turísticos se presten de manera eficiente y segura (Organización Mundial del Turismo [OMT], 2008).
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img09.png", alt="").mx-auto
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 <b>Superestructura turística:</b> está conformada por las entidades públicas y privadas encargadas de la regulación, promoción y control del sector turístico. En el contexto colombiano, esta incluye organismos como el Ministerio de Comercio, Industria y Turismo, PROCOLOMBIA y el Fondo Nacional de Turismo (FONTUR), entre otros. Su función principal es establecer políticas, normativas y estrategias que orienten el desarrollo del turismo, garantizando su sostenibilidad y competitividad (Fondo Nacional de Turismo, 2021).
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img10.png", alt="").mx-auto
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 <b>Oferta turística:</b> conjunto de productos y servicios asociados a un determinado espacio geográfico y sociocultural, que permite facilitar y propiciar el aprovechamiento de los atractivos turísticos de ese lugar y cuyos oferentes pueden vender en el mercado a un precio establecido y en un periodo de tiempo determinado, para ser usado o consumido por los turistas.
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img11.png", alt="").mx-auto
          .row.justify-content-center.align-items-center.p-4.p-lg-3
            .col-lg-7.mb-4.mb-lg-0.mb-3.mb-lg-0
              p.mb-0 <b>Demanda turística:</b> se define como el conjunto de turistas que, de forma individual o colectiva, están motivados por una serie de productos o servicios turísticos con el objetivo de cubrir sus necesidades; opera en el contexto de un mercado en el que intervienen diversos prestadores de servicios turísticos que ponen a disposición del turista los servicios y productos que requieren para satisfacer determinadas necesidades (viajes, ocio, vacaciones, esparcimiento, tiempo libre).
            .col-md-8.col-lg-5
              figure
                img(src="@/assets/curso/tema1/img12.png", alt="").mx-auto

    //- .row.justify-content-center.mb-5
    //-   .col-12.col-lg-10.mb-0.col-md-12
    //-     .cita-decorada
    //-       blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
    //-         .row.justify-content-center.align-items-center
    //-           .col-12.col-lg-3.mb-3.mb-lg-0
    //-             img(src="@/assets/curso/tema1/img13.svg", class="img-fluid cita-decorada__imagen-flotante-4")
    //-           .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
    //-             p.mb-0 Los componentes del sistema turístico interactúan de manera continua para facilitar el desarrollo de la actividad turística en un territorio determinado, permitiendo que los visitantes disfruten de una experiencia satisfactoria y coherente con sus expectativas.
    //-           .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
    //-             a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=hxF0S1s5ZxE" target="_blank")
    //-               span Ver video
    //-               i.fas.fa-play-circle



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-4.mb-lg-0.col-md-8
        img(src="@/assets/curso/tema1/img14.png", alt="").mx-auto
      .col-lg-10
        p.mb-3 El sistema turístico permite comprender el turismo como una actividad integrada en la que cada uno de sus componentes cumple una función específica y complementaria. La interacción entre la estructura, la infraestructura, la superestructura, la oferta y la demanda garantiza el funcionamiento eficiente del sector, facilitando la prestación de servicios y la satisfacción de las necesidades del turista. En este sentido, analizar el sistema turístico no solo aporta una visión global del sector, sino que también permite identificar cómo se articulan los diferentes elementos en la operación de los servicios de alojamiento, especialmente en procesos clave como la gestión de reservas y la atención al cliente. 
        p.mb-0 La siguiente tabla resume los componentes del sistema turístico y describe algunos ejemplos aplicados: 



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 1.
          span El sistema turístico y sus componentes
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA (2026).</span>
            thead
              tr
                th Componente del sistema turístico
                th Definición
                th Elementos principales
                th Ejemplo en alojamiento
            tbody
              tr
                td Estructura turística (planta turística)
                td Conjunto de servicios y equipamientos que permiten la permanencia del turista
                td Hoteles, restaurantes, recreación
                td Hotel, restaurante del hotel, piscina
              tr
                td Infraestructura turística
                td Bienes y servicios básicos que facilitan acceso y movilidad
                td Vías, transporte, servicios públicos
                td Carreteras, aeropuerto, energía del hotel
              tr
                td Superestructura turística
                td Entidades que regulan y promueven el turismo
                td MinCIT, FONTUR, PROCOLOMBIA
                td Registro Nacional de Turismo
              tr
                td Oferta turística
                td Servicios disponibles para el turista
                td Alojamiento, <i>tours</i>, gastronomía
                td Planes de alojamiento
              tr
                td Demanda turística
                td Personas que consumen servicios turísticos
                td Turistas de ocio, negocios
                td Huéspedes del hotel
                
                
                
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Producto turístico


    p.mb-5(data-aos="fade-right") El producto turístico se entiende como la integración de diversos elementos que, articulados dentro de un destino, permiten satisfacer las necesidades, expectativas y motivaciones del turista. Este producto no se limita a un bien o servicio aislado, sino que resulta de la combinación de atractivos turísticos, servicios de la planta turística y condiciones de accesibilidad, los cuales en conjunto configuran la experiencia del visitante. En este sentido, el producto turístico se concibe como una oferta integral que articula recursos naturales, culturales y servicios, generando valor para el usuario y competitividad para el destino (Organización Mundial del Turismo [OMT], 2008).


    .row.align-items-center.justify-content-center.mb-5
      .col-lg-9.mb-3.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-23")
          div(titulo="Atractivos turísticos:")
            p.ms-5 Son uno de los componentes fundamentales del producto turístico y corresponden a elementos que generan el interés del visitante y motivan el desplazamiento hacia un destino. Estos pueden ser de carácter natural, como paisajes, parques o reservas; culturales, como museos, patrimonio histórico y manifestaciones artísticas; o sociales, como eventos, festividades y expresiones folclóricas. Los atractivos constituyen el eje central del turismo, ya que son el principal motivo de viaje y el elemento diferenciador entre destinos.
          div(titulo="Servicios turísticos:")
            p.ms-5 También conocidos como planta turística, comprenden el conjunto de medios, actividades e instalaciones que facilitan la estancia del viajero y garantizan su bienestar durante la experiencia turística. Estos servicios incluyen el alojamiento, el esparcimiento, la información turística y la guía, integrando tanto elementos tangibles como intangibles que, en su consumo, son interdependientes y complementarios. La calidad y disponibilidad de estos servicios influyen directamente en la percepción del destino y en el nivel de satisfacción del turista.
          div(titulo="Accesibilidad:")
            p.ms-5 Constituye un componente clave del producto turístico, ya que hace referencia a las condiciones que permiten el acceso al destino y a sus diferentes atractivos. Este elemento incluye las vías de comunicación, los sistemas de transporte, las redes de conectividad y los servicios públicos que facilitan el desplazamiento y la permanencia del visitante. Una adecuada accesibilidad no solo mejora la experiencia del turista, sino que también fortalece la competitividad del destino, al garantizar condiciones de movilidad seguras, eficientes y oportunas.
          
      .col-md-8.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img16.png")
  
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Características
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-8.mx-auto.order-2.order-lg-1
        figure    
          img(src="@/assets/curso/tema1/img17.png").mx-auto    
      .col-lg-10.order-1.order-lg-2.mb-4.mb-lg-0
        .row.align-items-center.mb-3(data-aos="fade-left")
          .col-lg
            p.mb-0 El producto turístico presenta características particulares que lo diferencian de los bienes tradicionales de consumo. A diferencia de estos últimos, que pueden ser almacenados, manipulados o evaluados antes de su adquisición, el producto turístico se materializa en el momento de su consumo, a través de la prestación de un servicio. Esto implica que su valor no reside únicamente en un elemento físico, sino en la experiencia generada durante la interacción entre el cliente y los prestadores de servicios turísticos, lo que introduce un alto grado de subjetividad en su percepción.
          .col-lg-auto.d-none.d-lg-flex
            img(src="@/assets/curso/tema1/img18.svg")
        p.mb-0 Entre las principales características del producto turístico se destaca la intangibilidad, ya que el servicio no puede ser tocado ni probado antes de su consumo, lo que genera incertidumbre en el cliente. A esta se suma la variabilidad, dado que la calidad del servicio puede cambiar dependiendo de factores como el personal, el momento y las condiciones de prestación. Asimismo, la caducidad implica que los servicios no pueden almacenarse para su venta futura, mientras que la temporalidad establece que el servicio solo puede ser disfrutado en un lugar y momento específico. Estas características condicionan la gestión del servicio turístico, especialmente en procesos como la comercialización y la gestión de reservas (Kotler, Bowen & Makens, 2017).
                

    .container
      .row.justify-content-center.align-items-center.mb-5.bg-color-1
        .col-lg-7.p-4
          p.mb-0 De igual manera, el producto turístico se caracteriza por la inseparabilidad, lo que significa que su producción y consumo ocurren simultáneamente, generalmente en presencia del cliente. También presenta la condición de no devolución, ya que una vez prestado el servicio no puede revertirse, y la intransferibilidad, que impide que el servicio consumido sea cedido a otra persona. Otro aspecto relevante es la interdependencia, debido a que la experiencia turística depende de múltiples prestadores de servicios que actúan de manera conjunta, lo que hace que la calidad final sea resultado de la coordinación del sistema turístico (Boullón, 2006).
        .col-lg-5.p-0
          img(src="@/assets/curso/tema1/img18.png")


    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-auto.d-none.d-lg-flex
        img(src="@/assets/curso/tema1/img19.svg").mx-auto
      .col-lg
        p.mb-3 Finalmente, la estacionalidad refleja la concentración de la demanda en determinados periodos del año, lo que afecta la planificación y operación del servicio, mientras que la servucción hace referencia al proceso mediante el cual se produce el servicio, integrando recursos humanos, físicos y organizacionales en la interacción con el cliente. Este concepto resalta la importancia de gestionar adecuadamente todos los elementos involucrados en la prestación del servicio para garantizar calidad y satisfacción del usuario (Ruano Pavón, 2012). 
        p.mb-0 En la siguiente tabla se describen las características del producto turístico y algunos ejemplos aplicados: 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 2.
          span Características del producto turístico
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA (2026).</span>
            thead
              tr
                th Característica
                th Descripción
                th Ejemplo en hotelería
            tbody
              tr
                td Intangibilidad
                td El servicio no se puede ver ni tocar antes de consumirlo.
                td No se puede “probar” una noche de hotel antes de reservar.
              tr
                td Variabilidad
                td La calidad del servicio depende de quién lo presta y en qué condiciones.
                td La atención cambia según el recepcionista.
              tr
                td Caducidad
                td El servicio no se puede almacenar.
                td Una habitación vacía hoy no se puede vender mañana.
              tr
                td Temporalidad
                td Se consume en un tiempo y lugar específico.
                td La reserva es válida solo para fechas definidas.
              tr
                td Inseparabilidad
                td Producción y consumo ocurren al mismo tiempo.
                td El huésped recibe el servicio mientras está en el hotel.
              tr
                td No devolución
                td El servicio no se puede devolver después de prestado.
                td No se puede “devolver” una noche ya utilizada.
              tr
                td Interdependencia
                td Depende de varios prestadores de servicios.
                td Hotel + transporte + restaurante afectan la experiencia.
              tr
                td Estacionalidad
                td La demanda varía según épocas del año.
                td Alta ocupación en vacaciones, baja en temporada baja.
              tr
                td Intransferibilidad
                td No se puede ceder el servicio a otra persona.
                td Una reserva no siempre puede cambiar de titular.
              tr
                td Servucción
                td Proceso de creación del servicio.
                td Interacción cliente – hotel – personal en la prestación.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Tipos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p.mb-0(data-aos="fade-right") El producto turístico se materializa a través de la articulación de múltiples servicios ofrecidos por los prestadores de servicios turísticos, quienes conforman la industria turística y permiten satisfacer las diversas necesidades del viajero. Estos prestadores incluyen empresas de transporte, alojamiento, alimentación, recreación, organización de eventos y otras actividades complementarias que, operando de manera integrada, hacen posible el acceso, la permanencia y el disfrute del turista en un destino. En este sentido, el producto turístico no es un servicio aislado, sino el resultado de la interacción coordinada de diferentes actores que contribuyen a la experiencia global del usuario (Organización Mundial del Turismo [OMT], 2008).

      .col-lg-4.col-md-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img20.png" data-aos="fade-left")
        
    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        img(src="@/assets/curso/tema1/img21.png").mx-auto
      .col-lg-9
        .bg-fondo-5.px-lg-5.py-lg-4.px-4.py-3.br-15
          .col-12.col-md-12
            p.mb-0.ms-0.ms-xl-5 En el contexto colombiano, los tipos de producto turístico se relacionan directamente con los prestadores de servicios turísticos definidos por la normatividad vigente. Según la Ley 300 de 1996, se consideran prestadores de servicios turísticos todas aquellas personas naturales o jurídicas que de manera habitual proporcionan, intermedian o contratan servicios turísticos, siempre que se encuentren inscritas en el Registro Nacional de Turismo (RNT). Esta clasificación incluye establecimientos de alojamiento, agencias de viajes, operadores turísticos, empresas de transporte turístico, guías de turismo, entre otros, los cuales estructuran la oferta turística del país y permiten la comercialización de productos turísticos organizados y especializados (Fondo Nacional de Turismo [FONTUR], 2021).


    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img23.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 De esta manera, los productos turísticos pueden clasificarse según el tipo de servicio que predomina en su oferta, como productos de alojamiento, transporte, recreación, eventos o turismo especializado (ecoturismo, cultural, de negocios, entre otros). Esta clasificación facilita la organización del mercado turístico y permite a los prestadores diseñar servicios ajustados a segmentos específicos de demanda, optimizando la experiencia del turista y fortaleciendo la competitividad del destino. Asimismo, esta tipología resulta fundamental en procesos operativos como la gestión de reservas, donde es necesario identificar claramente el tipo de producto ofrecido para garantizar una adecuada atención al cliente y una correcta comercialización del servicio (OMT, 2008).

    p.mb-5 En la siguiente tabla, que incluye la clasificación de los productos turísticos, se pueden observar ejemplos aplicados de los tipos de productos en el sector hotelero.




    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 
            b Tabla 3.
          span Clasificación de los productos turísticos
        .tabla-a.color-acento-contenido 
          table
            caption <span style="font-weight: normal">Nota. SENA (2026).</span>
            thead
              tr
                th Tipo de producto turístico
                th Descripción
                th Ejemplo en el sector hotelero
            tbody
              tr
                td Alojamiento
                td Servicios relacionados con la estancia del turista
                td Hoteles, hostales, apartahoteles
              tr
                td Transporte
                td Servicios que facilitan el desplazamiento del turista
                td Transporte terrestre, aéreo o turístico
              tr
                td Recreación
                td Actividades de ocio y entretenimiento
                td Piscinas, <i>spa</i>, <i>tours</i>, actividades recreativas
              tr
                td Eventos
                td Servicios asociados a reuniones o actividades programadas
                td Congresos, bodas, eventos empresariales
              tr
                td Turismo especializado
                td Servicios diseñados para intereses específicos del cliente
                td Ecoturismo, turismo cultural, turismo de negocios

    .row.justify-content-center.mb-0
      .col-12.col-lg-10.mb-0.col-md-12
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3.bg-color-1-degrade.br-15
            .row.justify-content-center.align-items-center
              .col-12.col-lg-3.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/img24.svg", class="img-fluid cita-decorada__imagen-flotante-3")
              .col-12.col-lg-6.cita-decorada__texto.mb-4.mb-lg-0
                p.mb-0 Le invitamos a ingresar al siguiente enlace web, donde podrá consultar la Ley 300 de 1996 o Ley General de Turismo, que legisla este tipo de actividades en Colombia: 
              .col-lg-3.col-md-3.col-12.d-flex.justify-content-center
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos/LEY_300_1996.pdf')" target="_blank")
                  span Ver PDF
                  i.fas.fa-file-pdf

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
