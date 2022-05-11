<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Barrido y lavado de vías

    .bg_grad-02
      p.mb-4 Para iniciar un proceso de supervisión de sistemas de saneamiento es necesario el seguimiento de actividades de barrido y lavado de vías. Sin embargo, para comprender mejor sus características es necesario especificar algunas definiciones que otorga el Ministerio de vivienda, ciudad y territorio (2012) en el Reglamento Técnico del Sector Agua Potable y Saneamiento Básico (RAS) en su título F de sistemas de aseo urbano.
    
    SlyderB.mb-5(:datos="datosSlyder")
    separador 

    #t_1_1.titulo-segundo.color-acento-contenido
      h2(data-aos="zoom-in") 1.1 Caso de estudio de la automatización
    
    p.mb-5 Para realizar el proceso de barrido y limpieza existen dos formas de realizar dicha actividad de acuerdo con el Decreto 1077 (2015)

    figure.col-10.center.mb-5
      img.mb-5(src='@/assets/curso/tema1/vec2.svg')

      .row.mb-5.justify-content-center
        .col-12.col-md-9
          .tarjeta.color.bg_color7(data-aos="zoom-in-up")
            .p-3
            .row.justify-content-center
              .col-md-3.px-5.align-self-center
                figure
                  img(src="@/assets/curso/tema1/img1.svg")
              .col-md-8.align-self-center
                p.m-0 Para ampliar la información sobre la normatividad aplicable debe consultar el Decreto 1077 (2015) sector vivienda, ciudad y territorio, título 2 servicio público de aseo, que se encuentra en el material complementario.
            .row.justify-content-center
              .col-12.col-md-11
                figure
                  img.mt-5(src='@/assets/curso/tema1/franja.svg')

    separador 

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2.	Tipos de recolección

    p.mb-5 Dentro de las acciones de recolección se podría diferenciar las siguientes según el Decreto 1077 (2015)

    figure.col-12.center.mb-5
      img.mb-5(src='@/assets/curso/tema1/vec3.svg')
    separador 

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3.	Actores involucrados

    p.mb-5 Dentro de las personas involucradas en las actividades de servicio público de aseo es importante referenciar los principales:

    .row.justify-content-center
      .col-md-10
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="1" titulo="Generador o usuario residencial")
            .col-md-12.mb-4.mb-md-0.px-4
              p.mt-4 Es una tarea que exige un proceso explícito, debe incluir cambio en procesos académicos, fortalecimiento de gremios, fortalecimiento de entidades territoriales, coordinación con la población, prestadores y aseguradores. Para tener resultados a corto plazo se realizan acciones de formación continua que ayuda a mejorar el servicio de salud principalmente en el nivel primario. A mediano plazo se abren programas de especializaciones y posgrados en medicina y salud familiar, también se forman médicos en diferentes territorios del país. A largo plazo se ajustan planes curriculares de formación de recurso humano en el sector salud y se evalúan la calidad y pertinencia de esos programas para el mejoramiento continuo.  

          .row(numero="2" titulo="Usuario no residencial")
            .col-md-12.mb-4.mb-md-0.px-4
              p.mt-4 Con el esquema de cuidado integral y provisión de servicios: se desarrollan equipos multidisciplinarios en salud y se diseñan nuevos perfiles como promotores de salud, parteras, líderes comunitarios entre otros, de modo que se genere un desarrollo progresivo en los modelos territoriales de salud, de acuerdo con las orientaciones del Modelo Integral de Atención en Salud (MIAS).

          .row(numero="3" titulo="Persona prestadora del servicio público de aseo")
            .col-md-12.mb-4.mb-md-0.px-4
              p.mt-4 Responsable de la planeación y gestión territorial en salud: es la definición participativa de las competencias que exige la implementación del Modelo Integral de Atención en Salud (MIAS) a nivel de la administración, gestión, gerencia y planeación en salud.

          .row(numero="4" titulo="Recicladores de oficio y las organizaciones de recicladores de oficio")
            .col-md-12.mb-4.mb-md-0.px-4
              p.mt-4 Planificación y mejoramiento de condiciones laborales del Recurso Humano en Salud (RHS) a nivel nacional y territorial.
    separador 

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4.	Actores involucrados

    p.mb-5 Teniendo en cuenta que en un mismo sector pueden existir diferentes prestadores del servicio de aseo, la programación de actividades debe ser conforme a la normatividad legal vigente buscando que no se generen actividades de recolección, barrido o limpieza duplicadas en un mismo sector y así garantizar la buena competencia entre las empresas.

    
    .row.mb-5
      .col-md-8.center
        h5.text-center Partiendo del Decreto 2981 (2013) el cual fue compilado por el Decreto 1077 (2015) se especificó en el artículo 52 lo siguiente: 

    .row.justify-content-center.mb-4
      .col-lg-8
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/1.svg' alt='AvatarTop' style= "height: 110px")
          .tarjeta.tarjeta--azul
            .p-2
              p.mt-3.me-5.pe-4 La responsabilidad en barrido y limpieza de vías y áreas públicas es de la persona prestadora del servicio público de aseo en el área de prestación donde realice las actividades de recolección y transporte. La prestación de este componente en todo caso deberá realizarse de acuerdo con la frecuencia y horarios establecidos en el programa para la prestación del servicio público de aseo, y cumpliendo con las exigencias establecidas en el Plan de Gestión Integral de Residuos Sólidos (PGIRS) del respectivo municipio o distrito.
    
    .row.justify-content-center.mb-4
      .col-lg-8
        .tarjeta-avatar-b.mb-3
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/2.svg' alt='AvatarTop' style= "height: 110px")
          .tarjeta.tarjeta--azul
            .p-2
              p.mt-5.me-5.pe-4  La determinación de los kilómetros a barrer deberá tener en cuenta las frecuencias de barrido y en calles no pavimentadas y en áreas donde no sea posible realizar el barrido por sus características físicas, se desarrollarán labores de limpieza manual.
    
    p.mb-5 Además de esto indica que La Comisión de Regulación de Agua Potable y Saneamiento Básico (CRA) determinará la metodología de cálculo de los kilómetros a barrer por cada prestador en función del número de usuarios que cada uno atienda en el área de confluencia.<br><br/> Bajo esa premisa siempre se debe verificar la base normativa que brinde la CRA respecto a la metodología, ya que esta también determina actividades que serán necesarias llevar a cabo por las empresas prestadores de servicios de aseo y limpieza.
    
    ul.lista-ul.mb-4
      li 
        <i class="fas fa-circle fa-xs" style= "color:#009EE3 !important;"></i>
        h3.ps-2 Determinación del área de prestación del servicio
    
    .bg_fondo_1.mb-4
      .row.align-items-center(data-aos="zoom-in-up")
        .col-12.col-md-4
          figure.justify-center
            img(src="@/assets/curso/tema1/img2.png")        
        .col-12.col-md-8
          p.m-0 Dentro de las primeras actividades que deben quedar definidas se encuentra la determinación del área de prestación de servicio la cual corresponde a la zona geográfica del municipio o distrito debidamente delimitada donde la persona prestadora ofrece y presta el servicio de aseo (Decreto 1077, 2015)<br><br/>De acuerdo con la CRA, en la resolución 709 (2015) estas áreas deben estar delimitadas bajo los denominados acuerdos de barrido y limpieza que son descritos en el artículo 53 del decreto 2981 (2013)

    p.mb-5 Las personas prestadoras deberán suscribir acuerdos, de barrido y limpieza en los que se determinen las vías y áreas públicas que cada persona prestadora vaya a atender en el respectivo municipio, sin perjuicio de que en el mismo acuerdo se convenga que solo uno de ellos sea quien atiende la totalidad del área. En los mismos acuerdos se podrá establecer la forma de remunerarse entre los prestadores de las mencionadas actividades.

    ul.lista-ul.mb-4
      li 
        <i class="fas fa-circle fa-xs" style= "color:#009EE3 !important;"></i>
        h3.ps-2 Componentes de barrido y limpieza

    .row.justify-content-center.align-items-center
      .col-md-3
        p <b>Dentro de los elementos que se hace necesario tener en cuenta para programar las actividades de barrido y limpieza se encuentran según la resolución 709 (2015)</b>
      .col-md-9
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec4.svg' alt='AvatarTop')
            .tarjeta.color-primario
              .text-white.p-4
                h2.text-center John Doe
                p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec5.svg' alt='AvatarTop')
            .tarjeta.color-primario
              .text-white.p-4
                h2.text-center John Doe
                p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec6.svg' alt='AvatarTop')
            .tarjeta.color-primario
              .text-white.p-4
                h2.text-center John Doe
                p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec7.svg' alt='AvatarTop')
            .tarjeta.color-primario
              .text-white.p-4
                h2.text-center John Doe
                p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec8.svg' alt='AvatarTop')
            .tarjeta.color-primario
              .text-white.p-4
                h2.text-center John Doe
                p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

          .tarjeta-avatar
            img(src='@/assets/curso/tema1/vec9.svg' alt='AvatarTop')
            .tarjeta.color-primario
              .text-white.p-4
                h2.text-center John Doe
                p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

          

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Barrido de vías y limpieza de áreas públicas:',
        texto:
          'es el conjunto de actividades que se ejecutan de forma manual o mecánica, tendientes a dejar las áreas públicas libres de todo residuo sólido esparcido, acumulado o fijado en muros. Por sus características los residuos sólidos generados por el proceso de barrido y recolección de los residuos, así como los provenientes de la limpieza de áreas públicas se vinculan con la actividad principal de recolección del servicio público de aseo',
        imagen: require('@/assets/curso/tema1/1.jpg'),
        leyendaImagen:
          'Trabajador limpiando la calle con herramienta de escoba',
      },
      {
        titulo: 'Servicio público de aseo:',
        texto:
          'Es el servicio de recolección municipal de residuos, principalmente sólidos. También se aplicará a las actividades complementarias de transporte, tratamiento, aprovechamiento y disposición final de tales residuos.',
        imagen: require('@/assets/curso/tema1/2.jpg'),
        leyendaImagen:
          'Dos trabajadores de recogida de residuos que cargan basura en contenedores vacíos de camiones de basura.',
      },
      {
        titulo: 'Sistema de aseo urbano: ',
        texto:
          ':Es el conjunto ordenado y sistemático de equipos, elementos y maquinaria, que se utilizan para el desarrollo de los diferentes componentes que hacen parte del servicio público de aseo y que proporciona información sobre el estado, calidad y comportamiento de las actividades en la gestión de los residuos sólidos.',
        imagen: require('@/assets/curso/tema1/3.jpg'),
        leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
