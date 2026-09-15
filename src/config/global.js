export default {
  global: {
    Name: 'Gestión de reservas hoteleras',
    Description:
      'El componente formativo Gestión de reservas hoteleras tiene como propósito desarrollar la comprensión y aplicación de los fundamentos conceptuales y operativos de la administración de reservas en establecimientos de alojamiento. A partir del estudio de los servicios y el producto turístico, el portafolio de servicios y los procedimientos técnicos de reservas, se fortalecen competencias para organizar información, interpretar códigos y tarifas, tomar decisiones y brindar una atención al cliente eficiente en el área de reservas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Servicios turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistema turístico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Producto turístico',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Portafolio de servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura del portafolio de servicios',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Reservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivo de la gestión de reservas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Códigos de reserva',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Área de reservas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Funciones del área de reservas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Cualidades del personal de reservas',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tarifas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tarifas hoteleras',
            hash: 't_5_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/621602_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Agencias de viajes',
      significado:
        'Empresas comercializadoras, constituidas por personas naturales o jurídicas, que se dedican profesionalmente a la venta de planes turísticos (FONTUR, 2003).',
    },
    {
      termino: 'Calidad',
      significado:
        'Resultado de un proceso orientado a satisfacer necesidades, expectativas y exigencias del cliente, garantizando seguridad, higiene, accesibilidad y cumplimiento de condiciones establecidas.',
    },
    {
      termino: 'Código de reserva',
      significado:
        'Identificador alfanumérico asignado a una reserva que permite su control, seguimiento y gestión dentro del sistema hotelero.',
    },
    {
      termino: 'Demanda turística',
      significado:
        'Número de personas que viajan o desean viajar para utilizar servicios turísticos fuera de su lugar de residencia.',
    },
    {
      termino: 'Establecimiento de alojamiento',
      significado:
        'Conjunto de bienes destinados a prestar el servicio de hospedaje no permanente inferior a 30 días, mediante contrato comercial entre el establecimiento y el huésped.',
    },
    {
      termino: 'Estacionalidad',
      significado:
        'Variación de la demanda turística en determinados periodos del año, como temporadas altas y bajas.',
    },
    {
      termino: 'Gestión de reservas',
      significado:
        'Proceso de control, registro y administración de solicitudes de alojamiento para optimizar la ocupación hotelera.',
    },
    {
      termino: 'Guía de turismo',
      significado:
        'Persona natural que presta servicios profesionales de orientación, acompañamiento e información a turistas, debidamente registrada y certificada.',
    },
    {
      termino: '<i>No show</i>',
      significado:
        'Situación en la cual un cliente no se presenta al hotel en la fecha de su reserva sin haberla cancelado previamente.',
    },
    {
      termino: 'Oferta turística',
      significado:
        'Conjunto de bienes y servicios turísticos que los prestadores ofrecen al mercado a un precio determinado.',
    },
    {
      termino: 'Operador de eventos',
      significado:
        'Persona natural o jurídica que organiza congresos, ferias, convenciones y eventos, desde su planeación hasta su ejecución.',
    },
    {
      termino: 'PMS (<i>Property Management System</i>)',
      significado:
        'Sistema tecnológico utilizado para gestionar operaciones hoteleras como reservas, <i>check-in</i>, tarifas y ocupación.',
    },
    {
      termino: 'Portafolio de servicios',
      significado:
        'Documento que presenta de forma organizada los servicios que ofrece una empresa, sus características y beneficios.',
    },
    {
      termino: 'Prestador de servicios turísticos',
      significado:
        'Persona natural o jurídica que ofrece, intermedia o contrata servicios turísticos y debe estar inscrita en el Registro Nacional de Turismo.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'Conjunto integrado de servicios, atractivos y accesibilidad que satisfacen las necesidades del turista.',
    },
    {
      termino: 'Reserva',
      significado:
        'Acuerdo entre el hotel y el cliente para la prestación futura de un servicio de alojamiento en condiciones definidas.',
    },
    {
      termino: '<i>Revenue management</i>',
      significado:
        'Estrategia de gestión que busca maximizar los ingresos mediante el control de tarifas y disponibilidad.',
    },
    {
      termino: 'Servicios',
      significado:
        'Resultado de una actividad productiva que satisface necesidades sin generar un bien tangible.',
    },
    {
      termino: 'Servicios turísticos',
      significado:
        'Actividades coordinadas que permiten satisfacer las necesidades del turista y dar valor a los recursos turísticos.',
    },
    {
      termino: 'Servucción',
      significado:
        'Proceso de creación del servicio mediante la interacción de elementos humanos y físicos en la relación cliente–empresa.',
    },
    {
      termino: 'Sistema turístico',
      significado:
        'Conjunto de elementos interrelacionados que permiten el desarrollo de la actividad turística.',
    },
    {
      termino: 'Tarifa hotelera',
      significado:
        'Precio asignado a los servicios de alojamiento, según condiciones de mercado y estrategias comerciales.',
    },
    {
      termino: 'Turismo',
      significado:
        'Actividades realizadas por las personas durante sus viajes fuera de su entorno habitual por un periodo determinado.',
    },
    {
      termino: '<i>Upgrade</i>',
      significado:
        'Mejora en la categoría del servicio ofrecido al cliente sin incremento en el precio.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'Beneficio adicional ofrecido al cliente que mejora la percepción del servicio sin necesariamente aumentar su costo.',
    },
  ],
  referencias: [
    {
      referencia: 'Antonietti, G. (2017). <em>Fundamentos del turismo.</em>',
      link: '',
    },
    {
      referencia:
        'Boullón, R. C. (2006). <em>Planificación del Espacio Turístico.</em> Ciudad de México: Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Cabarcos Novas, N. (2006). <em>Promoción y venta de servicios turísticos.</em> Ideas propias Editorial.',
      link: '',
    },
    {
      referencia:
        'Fondo Nacional de Turismo. (6 de abril de 2021). <em>FONTUR.</em>',
      link: 'https://fontur.com.co/es/glosario?q=es/glosario',
    },
    {
      referencia:
        'Instituto Distrital de Turismo. ANATO Asociación Colombiana de Agencias de Viajes y Turismo. (2007).',
      link: 'https://anato.org/',
    },
    {
      referencia:
        'Novas, N. C. (2006). <em>Promoción y Venta de Servicios Turísticos</em> (1a. Edición ed.). La Habana, Cuba: Ideas propias, Editorial Vigo.',
      link: 'https://issuu.com/ideaspropiaseditorial/docs/978-84-9839-101-5',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2008). <em>Introducción al turismo.</em>',
      link: '',
    },
    {
      referencia:
        'Ruano Pavón, C. (2012). <em>Promoción y comercialización de productos y servicios turísticos locales.</em> Málaga: IC Editorial.',
      link:
        'http://descargas.pntic.mec.es/mentor/visitas/promocion_comercializacion_productos_servicioslocales.pdf',
    },
    {
      referencia:
        'Ramírez Cavazza, C. (2007). <em>Administración de empresas turísticas.</em> Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Morillo Moreno, M. C. (2011). <em>Turismo y producto turístico. Evolución, conceptos, componentes y clasificación.</em> Visión Gerencial, (1), 135-158.',
      link: 'https://www.redalyc.org/pdf/4655/465545890011.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Amparo Virginia Moreno Cantero',
          cargo: 'Experto temático',
          centro: 'Centro de Servicios y Gestión Empresarial',
        },
        {
          nombre: 'Harbey Castelblanco Muñoz',
          cargo: 'Experto temático',
          centro: 'Centro Nacional Colombo Alemán – Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseño web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
