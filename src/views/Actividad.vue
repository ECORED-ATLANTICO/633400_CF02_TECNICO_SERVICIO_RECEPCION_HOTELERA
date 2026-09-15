<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Reto práctico: domina el proceso de reservas hoteleras.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión del aprendiz sobre los conceptos fundamentales de la industria hotelera, su evolución, estructura organizacional, normativa básica y terminología técnica, mediante la identificación correcta de enunciados, fortaleciendo la apropiación conceptual necesaria para el desempeño en el contexto técnico profesional del sector alojamiento y hospedaje.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de la gestión de reservas en un establecimiento de alojamiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar la ocupación y maximizar los ingresos del hotel.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Supervisar las actividades de limpieza y mantenimiento de las habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elaborar los estados financieros y controlar el presupuesto del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Diseñar estrategias de promoción turística para el destino.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué integra el producto turístico de un destino?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Atractivos, servicios, infraestructura y accesibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo los medios de transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente los restaurantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal del portafolio de servicios de un hotel?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presentar la oferta de productos y servicios al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar la nómina del personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar el inventario de alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué relación tiene el área de reservas con la venta de habitaciones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ninguna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestiona y comercializa la disponibilidad de habitaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo participa después del check-out.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se limita a emitir facturas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Para qué sirve el código de una reserva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar al recepcionista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clasificar las habitaciones por tamaño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar de manera única cada reserva en el sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Registrar los pagos del restaurante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿De qué depende normalmente la variación de las tarifas hoteleras?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Del color de las habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'De la demanda, la temporada y la estrategia comercial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Del número de empleados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Del horario de recepción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es el propósito del <em>revenue management</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la ocupación del hotel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar únicamente la contabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir el número de reservas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Optimizar los ingresos mediante la gestión de tarifas y disponibilidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cómo influye la estacionalidad en un establecimiento hotelero?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No afecta la operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modifica los niveles de ocupación y la demanda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo afecta al restaurante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente cambia el horario del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué permite gestionar un PMS?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo la contabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El mantenimiento de los equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente las campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reservas, tarifas, ocupación e información operativa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué habilidad es fundamental para el personal del área de reservas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conducir vehículos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comunicarse de manera efectiva con los clientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Preparar alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar páginas web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es el objetivo de las tarifas promocionales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incentivar la demanda en determinados periodos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir permanentemente los precios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar las reservas directas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la tarifa BAR.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué representa la oferta turística?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las opiniones de los huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente los hoteles de un destino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El conjunto de bienes y servicios disponibles para satisfacer la demanda turística.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los servicios consumidos por los turistas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Por qué el área de reservas debe coordinarse con otros departamentos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para garantizar una operación eficiente y una adecuada atención al huésped.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para reemplazar sus funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo para controlar inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para administrar la nómina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué representa la tarifa BAR (<em>Best Available Rate</em>)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una tarifa únicamente corporativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una tarifa exclusiva para agencias.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La tarifa más económica garantizada en cualquier canal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La mejor tarifa disponible definida por el establecimiento para una fecha determinada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál de los siguientes elementos hace parte del producto turístico?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atractivos, servicios y accesibilidad del destino.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el alojamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente el transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo los restaurantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué información debe verificarse antes de confirmar una reserva?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del hotel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disponibilidad, fechas, tarifa y datos del huésped.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El menú del restaurante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uniforme del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una ventaja de gestionar adecuadamente las reservas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los errores operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la comunicación entre las áreas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la ocupación y la satisfacción del huésped.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminuir las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué canal corresponde a una reserva directa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agencia de viajes en línea.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sitio web oficial o contacto directo con el establecimiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Operador mayorista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Central de distribución externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué beneficio ofrece un sistema automatizado de reservas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituye el servicio al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Impide modificar las reservas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce errores y agiliza la gestión de la información.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina completamente la intervención del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de una adecuada gestión comercial de las reservas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar la ocupación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementar la rentabilidad mediante una correcta administración de la demanda y la disponibilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la venta de habitaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los canales de comercialización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre el tema.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

<style lang="sass"></style>
