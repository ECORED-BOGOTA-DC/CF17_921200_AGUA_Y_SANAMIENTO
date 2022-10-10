export default {
  global: {
    componenteFormativo:
      'Caracterización del servicio público domiciliario de aseo',
    descripcionCurso:
      'El presente componente tiene como propósito establecer los principios básicos para la prestación del servicio de aseo urbano, sus componentes y elementos funcionales, las definiciones, los procedimientos generales que se deben tener en cuenta para el diseño de los sistemas de aseo y los procedimientos particulares para el desarrollo de éstos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Barrido y lavado de vías',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de barrido y limpieza',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de recolección',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Actores involucrados',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Programación de actividades',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Actividades para tener en cuenta',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Recursos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Micro y macro rutas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diseño de macro rutas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Diseño de micro rutas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diseño de rutas de barrido',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Horarios de recolección',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Frecuencias de recolección',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Divulgación de las rutas y horarios',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Cumplimiento de las rutas',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Fernandomaranon.com. (2019). ¿Cuáles son las funciones del SCRUM master? Ferandomaranon.',
      link: 'https://fernandomaranon.com/2018/09/01/el-rol-del-scrum-master',
    },
    {
      referencia:
        ' Lasa, C., Álvarez, A. y Heras del D., R. (2017). Métodos ágiles: Scrum, Kanban, Lean. Difusora Larousse - Anaya Multimedia.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/122933?page=1',
    },
    {
      referencia: 'Monte, J. (2016). Implantar Scrum con éxito. Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/58575?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Área pública',
      significado:
        'es aquella destinada al uso, recreo o tránsito público, como parques, plazas, plazoletas y playas salvo aquellas con restricciones de acceso  (Decreto 1077, 2015)',
    },
    {
      termino: 'Barrido y limpieza de vías y áreas públicas',
      significado:
        'es la actividad del servicio público de aseo que consiste en el conjunto de acciones tendientes a dejar las áreas y las vías públicas libres de todo residuo sólido, esparcido o acumulado, de manera que dichas áreas queden libres de papeles, hojas, arenilla y similares y de cualquier otro objeto o material susceptible de ser removido manualmente o mediante el uso de equipos mecánicos (Decreto 1077, 2015)',
    },
    {
      termino: 'Cuneta',
      significado:
        'zanja, revestida o no, ubicada a cada lado de las vías, destinadas a facilitar el drenaje superficial longitudinal de las mismas y que son objeto de barrido o limpieza por parte del prestador del servicio de aseo en su área de atención (Decreto 1077, 2015)',
    },
    {
      termino: 'Frecuencia del servicio',
      significado:
        'es el número de veces en un periodo definido que se presta el servicio público de aseo en sus actividades de barrido, limpieza, recolección y transporte, corte de césped y poda de árboles (Decreto 1077, 2015)',
    },
    {
      termino: 'Plan de gestión integral de residuos sólidos (PGIRS)',
      significado:
        'es el instrumento de planeación municipal o regional que contiene un conjunto ordenado de objetivos, metas, programas, proyectos, actividades y recursos definidos por uno o más entes territoriales para el manejo de los residuos sólidos, basado en la política de gestión integral de los mismos, el cual se ejecutará durante un período determinado, basándose en un diagnóstico inicial, en su proyección hacia el futuro y en un plan financiero viable que permita garantizar el mejoramiento continuo del manejo de residuos y la prestación del servicio de aseo a nivel municipal o regional, evaluado a través de la medición de resultados. Corresponde a la entidad territorial la formulación, implementación, evaluación, seguimiento y control y actualización del PGIRS (Decreto 1077, 2015)',
    },
    {
      termino: 'Recolección en acera',
      significado:
        'es la que se efectúa cuando los residuos sólidos son presentados por los usuarios para su recolección en el andén ubicado frente a su predio o domicilio (Ministerio de vivienda, ciudad y territorio, 2012)',
    },
    {
      termino: 'Recolección en unidades de almacenamiento',
      significado:
        'es la que se efectúa cuando los residuos sólidos generados por los usuarios se presentan para su recolección en forma conjunta en cajas de almacenamiento (Ministerio de vivienda, ciudad y territorio, 2012)',
    },
    {
      termino: 'Reglamento técnico',
      significado:
        'reglamento de carácter obligatorio expedido por la autoridad competente, con fundamento en la Ley, que suministra requisitos técnicos, bien sea directamente o mediante referencia o incorporación del contenido de una norma nacional, regional o internacional, una especificación técnica o un código de buen procedimiento (Ministerio de vivienda, ciudad y territorio, 2012)',
    },
  ],
  complementario: [
    {
      texto: 'EDteam. (2020). ¿Qué es Scrum? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sLexw-z13Fo&ab_channel=EDteam',
    },
    {
      texto:
        'EDteam. (2020). Curso de Scrum: ¿Cuáles son los roles en Scrum? [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lSYZ1sZWvbQ&ab_channel=EDteam',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
