export default {
  global: {
    componenteFormativo: 'Scrum, descripciones y características',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz cualificará su participación en equipos de trabajo en el marco del desarrollo de software con la metodología Scrum. Se afianzará en agilidad y entrega de productos en iteraciones cortas de tiempo, simplificación de labores, roles Scrum, uso de artefactos Scrum y sabrá dar cuenta de los aspectos teóricos y conceptuales esta metodología.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
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
        titulo: 'Scrum, definición y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Premisas Scrum',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Entidades Scrum',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ciclo de vida Scrum',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      termino: 'Board',
      significado:
        '(tablero) en Scrum es la herramienta visual donde se mantiene la comunicación constante, fortaleciendo las actividades de los procesos.',
    },
    {
      termino: 'Development',
      significado:
        '(desarrollo) conjunto de profesionales que desarrollan el producto con ciertas habilidades técnicas.',
    },
    {
      termino: 'Planning',
      significado:
        '(planificación) reunión que se da al inicio de cada Sprint donde participa el equipo completo de Scrum, y donde se define lo que se trabajará durante el siguiente Sprint.',
    },
    {
      termino: 'Review',
      significado:
        '(revisión) se realiza al final del Sprint, sacando conclusiones y si hubo cambios.',
    },
    {
      termino: 'Scrum',
      significado:
        'en el rugby, es un tipo de formación fija, cuya función es disputar y poner el balón en juego; en referencia al Scrum, es la idea de avanzar en equipo, enviando balón hacia atrás para luego avanzar.',
    },
    {
      termino: 'Sprint',
      significado:
        '(pique, carrera) intervalo de un proceso, hecho o terminado y entregable en Scrum.',
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
        nombre: ' ',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ' ',
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
        nombre: '',
        cargo: 'Validación de diseño y contenido',
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
