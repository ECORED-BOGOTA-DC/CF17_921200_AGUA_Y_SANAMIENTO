<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Scrum, definición y características

    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    indicadorTarjetaFlip: true,
    datosSlyder: [
      {
        titulo: 'Velocidad',
        texto: 'Define la capacidad del equipo para ejecutar las actividades.',
        imagen: require('@/assets/curso/tema1/slyder1.jpg'),
      },
      {
        titulo: 'Herramientas',
        texto:
          'Existen diferentes tipos de herramientas según el tipo de proyecto. Las más utilizadas son el uso de paneles con etiquetas adhesivas o post-it. Por lo general, se utiliza el <i>backlog</i>.',
        imagen: require('@/assets/curso/tema1/slyder2.jpg'),
      },
      {
        titulo: 'Entorno de trabajo',
        texto:
          'Se debe dar gran importancia a la comunicación y a la difusión de la información, seguido de la colaboración y el entendimiento básico de los aspectos o tareas de trabajo.',
        imagen: require('@/assets/curso/tema1/slyder3.jpg'),
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
