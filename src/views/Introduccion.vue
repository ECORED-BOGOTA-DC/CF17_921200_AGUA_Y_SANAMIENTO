<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción                                        
      
    .row.mb-5(data-aos="fade-right")
      .col.col-12.col-lg-8.pt-5
        p Usualmente cada ciudad, municipio o región, en el desarrollo social y económico generan millones de residuos que son dispuestos en bolsas para que se realice la recolección de estos.
        .cajon.color-secundario.p-3.mb-3.col-12
          p Sin embargo, no existe una conciencia colectiva que dimensione la cantidad real de residuos que genera toda una población. Para ampliar esta información, lo invitamos a ver el video “Alerta ONU peligros por millones de toneladas de residuos urbanos”, que se encuentra en el material complementario.
      .col.col-12.col-lg-4.position-relative
        picture
          img(src='@/assets/curso/tema1/vec1.svg', alt='Ubicación de mercancía', class='img-fluid')
      
    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/flsCFfrr21s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .bg_grad-01
      .row.justify-content-center.align-items-center
        .col-md-4.pos1
          figure
            img(src="@/assets/curso/tema1/img1.png" style="width: 315px")
        .col-md-8 
          p.mb-5 Una vez analizado el video, realice una reflexión sobre las siguientes preguntas:
          span
            ol.lista-ol--cuadro.lista-ol--separador
              li
                .lista-ol--cuadro__vineta
                  span 1
                |	¿Alguna vez se ha preocupado por la cantidad de residuos que genera?
              li 
                .lista-ol--cuadro__vineta
                  span 2
                |	¿Sabe a dónde disponen los residuos que entrega a la empresa recolectora?
              li 
                .lista-ol--cuadro__vineta
                  span 3
                |	¿Qué pasaría si no existiera el servicio de aseo y limpieza de calles?
            



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
