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
      .col-md-4.mb-4
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
            p En caso de recolección en ambas aceras, deben preferirse rutas derechas con pocos giros.

      .tarjeta-avatar
        img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop')
        .tarjeta.bg_color2
          .p-4
            p El conductor o jefe de cuadrilla debe contar con una carta de recorrido o micro ruta preestablecida al momento de iniciar los servicios; ésta debe ser susceptible de adaptarse a medida que la cuadrilla descubra mejores formas de realizar el servicio (reducción de tiempo y consumo de combustible). 

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

    .row
      .col-md-4
        img(src='@/assets/curso/tema2/vec3.svg', alt='Texto que describa la imagen')
      .col-md-8
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 De acuerdo con el RAS título F (2012) para mejorar la calidad del servicio se deben tener en cuenta las cantidades de residuos que se generan, las características de cada zona, la jornada de trabajo, el clima, la capacidad de los equipos, las dificultades generadas por el tráfico vehicular o peatonal y cualquier otro elemento que pueda tener influencia y teniendo eso en cuenta se establecen los horarios de recolección.<br><br/>Establecer y cumplir los horarios de recolección y de barrido es una obligación por parte del prestador del servicio de aseo de acuerdo con lo establecido en el artículo 32 del decreto 2981 (2013).<br><br/>Es importante resaltar que se debe tener especial cuidado cuando la recolección se efectúe entre las 21:00 horas y las 06:00 horas del día siguiente en zonas residenciales, hoteles, hospitales, clínicas y demás centros asistenciales ya que en estos casos deberán tomarse medidas especiales para mitigar el ruido en la recolección y la compactación.
    separador

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5.	Frecuencias de recolección

    p.mb-5 De acuerdo con la presidencia de la república en su decreto 2981 (2013) Por el cual se reglamenta la prestación del servicio público de aseo. La frecuencia de recolección es el número de veces en un periodo definido que se presta el servicio.

    .bg_grad-04
      .row.justify-content-center.my-5.p-5.correr-izq.correr-der
        .row.justify-content-center.align-items-center
          .col-xxl-4.col-lg-3.col-md-4.col-xl-4
            p.margen-texto De acuerdo con el RAS título F (2012) la frecuencia de recolección depende del nivel de complejidad del sistema, así como ciertas restricciones que se presentan a continuación:

          .col-lg-4.mb-3.col-12
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/19.svg' alt='AvatarTop')
              .tarjeta1.bg_color3
                .p-4
                  h5 Nivel de complejidad bajo y medio:
                  p la recolección de los residuos sólidos obtenidos en el proceso de barrido de vías y limpieza de áreas públicas, podrán realizarse simultáneamente con las frecuencias de recolección de los residuos presentados por los usuarios del servicio ordinario.

          .col-lg-4.mb-3.col-12
            .tarjeta-avatar
              img(src='@/assets/curso/tema2/20.svg' alt='AvatarTop')
              .tarjeta1.bg_color3
                .p-3
                  h5 Nivel de complejidad medio alto y alto: 
                  p las frecuencias de recolección deberán ser diseñadas en forma separada, procurando que los residuos producto del barrido manual y mecánico de vías y limpieza de áreas públicas puedan ser transportadas al sitio de disposición final sin ser mezclados con los residuos presentados por los usuarios del servicio de aseo.
         
      p.mb-4 Adicional al nivel de complejidad, también se debe tener en cuenta la temperatura del municipio ya que esta se asocia con el ciclo reproductivo de la mosca y con la volatilización de compuestos generadores de olores ofensivos.
    

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Frecuencia de recolección mínima
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota. Tomado de Ministerio de Vivienda, Ciudad y Territorio. (2012) Reglamento técnico del sector de Agua potable y Saneamiento básico (RAS) título F. Sistemas de Aseo Urbano. [Tabla] (p. 68). 
        thead.text-center
          tr
            th Nivel de complejidad
            th Temperatura
            th Frecuencias de recolección mínimas (Veces/Semana)
              tr
                th De residuos presentados por los suscriptores 
                th De residuos producto del barrido de vías y limpieza de áreas públicas
        tbody.text-center
          tr
            td Bajo
            td Indiferente
            td 2 simultáneamente
          tr
            td Medio
            td Indiferente
            td 2 simultáneamente
          tr
            td Medio Alto
            td.text-center Mayor o igual a 22ºC <br><br/> Menor de 22ºC
            td.text-center 3 - 1 <br><br/> 2 - 1
          tr
            td Alto*
            td.text-center Mayor o igual a 22ºC <br><br/> Menor de 22ºC
            td.text-center 3 - 1 <br><br/>  2 - 1*

    p.mb-5 Todo cambio en las rutas, frecuencias y horarios debe ser notificado con anterioridad de mínimo 5 días a los usuarios atendidos. Si el día propuesto de recolección es festivo y la empresa de recolección no labora en ese día, ésta deberá diseñar un plan de contingencia de modo que la recolección se normalice en los siguientes 2 días.
    separador

    #t_2_6.titulo-segundo.color-acento-contenido
      h2 2.6.	Divulgación de las rutas y horarios   

    .bg_fondo_3.mb-4
      .row.align-items-center(data-aos="zoom-in-up")
        .col-12.col-md-4
          figure.arri1
            img(src="@/assets/curso/tema2/vec4.svg" style= "height: 450px")
        .col-12.col-md-8
          p.p-2 Los usuarios como parte activan del sistema de aseo de cualquier municipio deben estar informados sobre las rutas y horarios que ejecutará el prestador del servicio, por esta razón en el artículo 34 del decreto 2981 (2013) se establece la responsabilidad del prestador del servicio en divulgar rutas, horarios y frecuencia de recolección y barrido las cuales deberán darse a conocer a los usuarios, utilizando medios masivos de difusión de amplia circulación local.<br><br/>En las facturas de cobro del servicio público de aseo, deberá informarse las frecuencias de las diferentes actividades de recolección del servicio. El prestador del servicio deberá publicar en la página web las rutas y horarios de prestación de las diferentes actividades de recolección del servicio. 
    separador 

    #t_2_7.titulo-segundo.color-acento-contenido
      h2 2.7.	Cumplimiento de las rutas

    p.mb-5 En el cumplimiento de las rutas se deben tener presentes los siguientes aspectos:

    .row.justify-content-end.align-items-center
      .col-md-5
        figure
          img.d-none.d-lg-block(src="@/assets/curso/tema2/vec5.svg")
      .col-md-7
        figure
          img.img549.mb-4(src="@/assets/curso/tema2/img26.svg")
        .row.align-items-center
          .col-md-2
            figure
              img.img-a.img-t.mb-2(src='@/assets/curso/tema2/circulo1.svg' style= "height: 60px")
          .col-md-9
            p.m-0 La calidad de la prestación del servicio depende de la continuidad y la cobertura, con el fin de mejorar la percepción que el usuario tiene sobre el prestador del servicio se deben cumplir a cabalidad las rutas y horarios pactados en los contratos.
          figure.mt-4
            img.img549.mb-4(src="@/assets/curso/tema2/img26.svg")
        .row.align-items-center               
          .col-md-2
            figure
              img.img-a.img-t(src='@/assets/curso/tema2/circulo2.svg' style= "height: 60px")
          .col-md-9
            p.m-0 Es posible que se generen cambios en la ruta, el horario o la frecuencia debido a situaciones internas (avería mecánica en los camiones de recolección) o externas (mantenimiento en malla vial) Todo cambio en las rutas, horarios o frecuencias deberá ser comunicado con tres (3) días de anterioridad a los usuarios afectados, salvo caso fortuito o de fuerza mayor, utilizando medios masivos de difusión de amplia circulación local y página web cuando se disponga de ella.
          figure.mt-4
            img.img549.mb-4(src="@/assets/curso/tema2/img26.svg")
        .row.align-items-center.mb-4               
          .col-md-2
            figure
              img.img-a.img-t(src='@/assets/curso/tema2/circulo3.svg' style= "height: 60px")
          .col-md-9
            p.m-0 En caso de fallas internas dentro del prestador del servicio como el ejemplo de presentarse averías en un vehículo del servicio, deberá enviar el auxilio mecánico o reemplazarlo con el equipo de suplencia, el servicio se debe restablecer en un término máximo de tres (3) horas a partir del momento en que se presente la avería. Sólo podrá suspenderse el servicio por motivos de fuerza mayor o caso fortuito, debidamente comprobados.
          figure.mt-4
            img.img549.mb-4(src="@/assets/curso/tema2/img26.svg")
        .row.align-items-center.mb-4               
          .col-md-2
            figure
              img.img-a.img-t(src='@/assets/curso/tema2/circulo4.svg' style= "height: 60px")
          .col-md-9
            p.m-0 Incluso cuando se presente un caso de fuerza mayor la empresa prestadora del servicio público de aseo deberá implementar las medidas para restablecer el servicio en el menor tiempo posible. 
          figure.mt-4
            img.img549.mb-4(src="@/assets/curso/tema2/img26.svg")
  

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
