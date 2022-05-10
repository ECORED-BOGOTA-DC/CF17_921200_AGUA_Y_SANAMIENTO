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
