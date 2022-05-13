<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Micro y macro rutas    

    p.mb-5 Para hacer la recolección de los residuos sólidos desde las viviendas de los usuarios hasta los puntos de disposición o de aprovechamiento se deben diseñar rutas para hacer los recorridos de forma eficiente.

    .row.mb-5
      .col-md-4
        img(src='@/assets/curso/tema2/img1.jpg' alt='AvatarTop')
      .col-md-8
        p De acuerdo con el Decreto 2981 (2013)  cuando se habla de la división geográfica de una ciudad, zona o área de prestación del servicio para la distribución de los recursos y equipos a fin de optimizar la actividad de recolección de residuos, barrido y limpieza de vías y áreas públicas y/o corte de césped y poda de árboles ubicados en las vías y áreas públicas, se habla de macro ruta. Por otro lado, la descripción detallada a nivel de las calles y manzanas del trayecto de un vehículo o cuadrilla, para la prestación del servicio público de recolección de residuos; de barrido y limpieza de vías y áreas públicas; y/o corte de césped y poda de árboles ubicados en las vías y áreas públicas, dentro de una frecuencia predeterminada, se conoce como micro ruta.
        .cajon.color-acento-contenido(style='background-color: #BDE2F5').p-4.mb-4 
          p Para tener una visión global del recorrido que se debe realizar para la recolección de los residuos es necesario que el prestador del servicio diseñe las rutas de acuerdo con los requisitos obligatorios establecidos en el artículo 31 del decreto 2981 (2013) Estas rutas deberán cumplir con la eficiencia en la asignación de recursos físicos y humanos para lograr la productividad propia de un servicio competitivo.
    separador 


    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1.	Diseño de macro rutas

    p.mb-5 De acuerdo con el ministerio de vivienda, ciudad y territorio en su documento Reglamento técnico del sector de Agua potable y Saneamiento básico (RAS) en su título F: sistemas de aseo urbano, el diseño de la ruta debe tener como principal objetivo cumplir con la prestación del servicio teniendo la máxima eficiencia, por ello se recomienda seguir la siguiente metodología:

    .row
      .col-md-8.mb-5.center
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/vec1.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-amarillo-claro.p-4(x="9.5%" y="21.5%" numero="+")
            p <b>Espacialidad</b>  
            span se deben definir los espacios, empleando planos topográficos y de infraestructura vial, es importante conocer las redes de servicio público existente, y cualquier otro detalle que pueda influir en la prestación del servicio de la zona. A partir del desarrollo de la espacialidad se puede lograr una articulación del servicio de aseo teniendo en cuenta los planes de desarrollo de cada municipio.

          .tarjeta.bg-amarillo-claro.p-4(x="37%" y="80.8%" numero="+")
            p  <b>Cantidad</b>  
            span con el objetivo de determinar la cantidad de camiones de recolección o cuadrillas, se debe incluir en el plano las toneladas diarias de residuos sólidos por cada vivienda o contenedor, de acuerdo con el sistema de recolección previamente escogido.

          .tarjeta.bg-amarillo-claro.p-4(x="62%" y="19.6%" numero="+")
            p <b>Subdivisión</b>  
            span se debe establecer el área por zonas que en lo posible tengan el mismo uso, por ejemplo: residencial, comercial, industrial, etc.

          .tarjeta.bg-amarillo-claro.p-4(x="90.5%" y="88.4%" numero="+")
            p <b>Asignación de micro rutas</b>  
            span esta asignación debe en lo posible limitar el paso por cada calle a una vez.
    separador 

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2.	Diseño de macro rutas

    p.mb-5 Cuando se establecen las micro rutas se deben tener en cuenta diferentes condiciones geográficas y viales que se puedan presentar en el municipio donde se presta el servicio, por ello las recomendaciones que se hacen son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/1.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p La micro ruta debe comenzar en el punto más cercano al garaje del vehículo y terminar en el punto más cercano al sitio de disposición final de los residuos sólidos. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/2.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p Los residuos localizados en zonas de congestión vial se deben recoger a una hora del día tal que no haya congestiones de tráfico que retrasen el recorrido o que no se generen problemas de flujo en el tránsito por su presencia.

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p El diseño de la micro ruta debe minimizar los giros en “U” y los giros a la izquierda.

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p La micro ruta debe promover que el recorrido de las calles sea en el sentido de las manecillas del reloj.

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p La micro ruta debe ser continua, es decir que contenga una serie de calles sin zonas muertas o traslapadas con calles correspondientes a otras rutas.

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p Las micro rutas correspondientes a una misma zona de servicio deben en lo posible recolectar un mismo número de cargas diarias, lo que le da flexibilidad al servicio. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p Las vías cerradas deben ser recolectadas así: desplazamiento en reversa y recolección en marcha adelante. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p En lo posible, las micro rutas deben diseñarse para que empiecen y terminen cerca de calles de tráfico alto, utilizando las barreras topográficas y físicas como bordes de la macro ruta. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p En zonas de laderas y de alta pendiente del terreno, la recolección debe empezar en la parte más alta y continuar cuesta abajo mientras se cargan los vehículos. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p En calles de alta pendiente, la recolección empezará en la parte más alta y, si se deben recoger ambas aceras, el conductor viajará cuesta abajo mientras el personal recolector carga el camión. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p En caso de recolección en ambas aceras, deben preferirse rutas derechas con pocos giros

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p El conductor o jefe de cuadrilla debe contar con una carta de recorrido o micro ruta preestablecida al momento de iniciar los servicios; ésta debe ser susceptible de adaptarse a medida que la cuadrilla descubra mejores formas de realizar el servicio (reducción de tiempo y consumo de combustible) 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p Deben minimizarse los tiempos muertos y recorridos improductivos.  

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p Deben considerarse las condiciones de tránsito real y futuro. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/15.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p Debe considerarse la cantidad de residuos de los grandes generadores, teniendo en cuenta el censo.

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/16.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p Incluir en el análisis los usos del suelo y las características de los generadores específicos asentados en las diferentes áreas. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/17.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p Evaluar y tener presente las alturas máximas permisibles en puentes vehiculares y peatonales, así como de infraestructura de comunicaciones, eléctrica y alumbrado público. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p La selección de los equipos de recolección deberá considerar el cálculo de las cantidades de residuos sólidos que se van a recoger por cada micro ruta.
    separador 

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3.	Diseño de rutas de barrido

    p.mb-5 Al igual que las rutas de recolección, las rutas de barrido se pueden dividir en macro rutas y micro rutas que conservan el principio de cumplimiento del servicio con la máxima eficiencia, en este caso las macro rutas corresponden al área geográfica que la cuadrilla o el equipo mecánico barre en una semana, mientras que las micro rutas corresponden a los kilómetros de cuneta que la cuadrilla o el equipo mecánico barre en un día.<br><br/>Adicional a las recomendaciones que se hacen en las rutas de recolección cuando se realiza el barrido se debe considerar:

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure.col-md-7.mb-5.center
          img(src='@/assets/curso/tema2/vec2.svg', alt='Texto que describa la imagen')
      .tarjeta.bg-amarillo-claro.p-4(x="54.5%" y="67%" numero="1")
        p Con base en el tipo de vía y usos del suelo, se define el rendimiento de barrido y limpieza de la cuadrilla y del equipo mecánico en horas por kilómetro (h/km) y en kilogramos por kilómetro por día (kg/km – día)

      .tarjeta.bg-amarillo-claro.p-4(x="53.7%" y="25.7%" numero="2")
        p El total de micro rutas se dividirá en 6 días de barrido por semana, de esta manera se puede calcular el número de cuadrillas que deben realizar el barrido manual y mecánico de vías y la limpieza de áreas públicas.

      .tarjeta.bg-amarillo-claro.p-4(x="46.3%" y="4.5%" numero="3")
        p Con base en el número de cuadrillas se identificará en el plano, el día que se prestará el servicio, los sitios de inicio y final del barrido en un día y, la identificación cada hora del sitio por donde pasará la cuadrilla.

    .row.justify-content-center
      .col-md-9 
        p.mb-5.text-center Todas las recomendaciones que se establecen para el barrido deben estar contempladas en el Plan de Gestión Integral de Residuos Sólidos (PGIRS) del municipio.
    separador 

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4.	Horarios de recolección

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    ///
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
