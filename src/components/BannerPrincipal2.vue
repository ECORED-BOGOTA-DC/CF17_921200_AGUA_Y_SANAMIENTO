<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center
      .col-lg-6.col-xxl-5.py-3.py-sm-4.banner-principal__info.ps-4.justify-content-center
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Iniciar
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-4.px-0.banner-principal__img
        img(:src="globalData.imagenBannerPrincipal" style="width: 365px")
  //-  .imagen_flotante_3: img(src="@/assets/curso/float3.png")
    .imagen_flotante_4.d-none.d-xl-block: img(src="@/assets/curso/float3.png")
    .imagen_flotante_5.d-none.d-xl-block: img(src="@/assets/curso/float4.png")
    .imagen_flotante_6.d-none.d-xl-block: img(src="@/assets/curso/float5.png")
    .imagen_flotante_7: img(src="@/assets/curso/float2.png")
    .imagen_flotante_8: img(src="@/assets/curso/float1.png")
  

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  padding-left: 50px  !important
  z-index: 3
  @media screen and (max-width: 999px)
    padding-left: 40px  !important
    z-index: 3

.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 30px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    margin-left: 10rem
    animation: scale 5s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 15px
    height: 237px
    bottom: 24%
    left: 5%


@keyframes float1
  0%
    transform: translateY(20px)

  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1.1)

  100%
    transform: scale(1)


@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
