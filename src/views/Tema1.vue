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
      h2(data-aos="zoom-in") 1.1 Tipos de barrido y limpieza
    
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
              p.mt-4 Son todas las personas que pueden estar organizadas como multiusuarios o como personas independientes que presentan residuos para que sean recolectados por el servicio público de aseo de su territorio.

          .row(numero="2" titulo="Usuario no residencial")
            .col-md-12.mb-4.mb-md-0.px-4
              p.mt-4 Es la persona natural o jurídica que produce residuos sólidos derivados de la actividad comercial, industrial y los oficiales que se benefician con la prestación del servicio público de aseo.

          .row(numero="3" titulo="Persona prestadora del servicio público de aseo")
            .col-md-12.mb-4.mb-md-0.px-4
              p.mt-4 Es aquella encargada de una o varias actividades de la prestación del servicio público de aseo, en los términos del artículo 15 de la Ley 142 de 1994 y demás que la modifiquen o complementen (Decreto 1077, 2015).

          .row(numero="4" titulo="Recicladores de oficio y las organizaciones de recicladores de oficio")
            .col-md-12.mb-4.mb-md-0.px-4
              p.mt-4 Personas prestadoras de la actividad de aprovechamiento en el servicio público de aseo, para todo el territorio nacional (Decreto 596, 2016).
    separador 

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4.	Programación de actividades

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
    
    .bg_grad-05
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

      .row.align-items-center
        .col-md-3
          p <b>Dentro de los elementos que se hace necesario tener en cuenta para programar las actividades de barrido y limpieza se encuentran según la resolución 709 (2015)</b>
        .col-md-9
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/vec4.svg' alt='AvatarTop')
              .tarjeta2.bg_color1
                .p-4
                  p.mt-5.me-0 Área urbana con servicio de barrido en Ha (AUB)

            .tarjeta-avatar
              img(src='@/assets/curso/tema1/vec5.svg' alt='AvatarTop')
              .tarjeta2.bg_color1
                .p-4
                  p.mt-5.me-0 Longitud de vías barridas manualmente al mes, expresada en kms/mes (LBMa)

            .tarjeta-avatar
              img(src='@/assets/curso/tema1/vec6.svg' alt='AvatarTop')
              .tarjeta2.bg_color1
                .p-4
                  p.mt-5.me-0 Longitud de vías barridas mecánicamente al mes, expresada en kms/mes (LBMe)

            .tarjeta-avatar
              img(src='@/assets/curso/tema1/vec7.svg' alt='AvatarTop')
              .tarjeta2.bg_color1
                .p-4
                  p.mt-3.me-0 Longitud total de vías barridas, expresada en Km/mes, equivale a la suma de la longitud de vías barridas manual y mecánicamente, expresada en Km/mes (LB) 

            .tarjeta-avatar
              img(src='@/assets/curso/tema1/vec8.svg' alt='AvatarTop')
              .tarjeta2.bg_color1
                .p-4
                  p.mt-5.me-0 Longitud total de vías en el área urbana, expresada en Km (LTV)

            .tarjeta-avatar
              img(src='@/assets/curso/tema1/vec9.svg' alt='AvatarTop')
              .tarjeta2.bg_color1
                .p-4
                  p.mt-5.me-0 Número de operarios de barrido empleados al mes (OB)
      
      ul.lista-ul.mb-4
        li 
          <i class="fas fa-circle fa-xs" style= "color:#009EE3 !important;"></i>
          h3.ps-2 Condiciones generales de los acuerdos de barrido y limpieza   
          
      p.mb-5 Teniendo claro que estos acuerdos son para las personas y organizaciones prestadoras del servicio de aseo que confluyen en la misma área de servicio dentro de las acciones que deben ser tenidas en cuenta y son objeto de supervisión, se encuentran:

      .row 
        .col-md-3
          img.mb-5(src='@/assets/curso/tema1/img3.png')
        .col-md-9
          ol.lista-ol--cuadro
            li
              .lista-ol--cuadro__vineta
                span 1
              |	La responsabilidad de la actividad de barrido y limpieza estará dada en función del número de suscriptores del área de confluencia, de conformidad con lo señalado en el parágrafo 2 del artículo 52 del decreto 2981 de 2013. 
            br
            li 
              .lista-ol--cuadro__vineta
                span 2
              |	Las partes deben estar inscritas en el Registro Único de Prestadores de Servicios Públicos (RUPS) de la Superintendencia de Servicios Públicos Domiciliarios (SSPD)
            br
            li 
              .lista-ol--cuadro__vineta
                span 3
              |	Un plano o mapa de localización en el que se delimite la(s) zona(s) geográfica(s) en donde se presta el servicio público de aseo en la actividad de recolección y transporte.
            br
            li 
              .lista-ol--cuadro__vineta
                span 4
              |	Descripción de macro y micro rutas de barrido en el área de confluencia.
            br
            li 
              .lista-ol--cuadro__vineta
                span 5
              |	Número total de suscriptores atendidos por cada persona prestadora del servicio público de aseo en la actividad de recolección y transporte en el área de confluencia en el periodo de producción de residuos sólidos inmediatamente anterior a la celebración del acuerdo, al cual se le deberá relacionar la dirección de todos los suscriptores del área de confluencia con los usuarios del maestro de facturación (Resolución 709, 2015, p.11)
    separador 

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5.	Actividades para tener en cuenta

    p.mb-5 En el desarrollo de actividades para el servicio público se hace necesario especificar algunas actividades que son elementales:        
   
    ul.lista-ul.mb-5
      li 
        <i class="fas fa-circle fa-xs" style= "color:#009EE3 !important;"></i>
        h3.ps-2 Barrido y limpieza de vías objeto de circulación

    p.mb-5 En lugares públicos como vías de circulación de vehículos o de peatones, siempre se debe considerar que estas vías usualmente se encuentran pavimentadas, lo que se conoce como la calzada y las aceras, estas aceras siempre se encontraran un poco elevadas y separadas de la calzada.   

    figure.col-md-8.col-12.center.mb-5
      img.mb-5(src='@/assets/curso/tema1/img1.jpg')
      figcaption Nota. Tomado de Facultad de ingeniería UNAM. (2002). División de educación continua. Cursos institucionales de barrido y recolección de residuos sólidos y municipales. México. [Figura]. p. 4

    p.mb-4 La importancia de conocer esta estructura radica en el procedimiento para realizar el barrido:

    .bg_fondo_2.mb-5
      .row.align-items-center(data-aos="zoom-in-up")
        .col-4.col-md-4
          figure.justify-center
            img(src="@/assets/curso/tema1/img4.png")
        .col-8.col-md-8
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              |	Usualmente no se requiere barrer la calzada completa, porque los residuos usualmente se acumulan, pero se transportan por el viento y el movimiento a las zonas laterales y se concentra en lo que se conoce como cunetas.
            li 
              i.fas.fa-angle-right
              |	Se puede usar equipo mecanismo para agrupar residuos de partículas más pequeñas que puedan ser difícil de transportar a la cuneta por sí solas.
            li 
              i.fas.fa-angle-right
              |	Con recolección manual, se puede barrer las zonas de la cuneta de las vías, agrupar y recoger, por lo general el barrido de las cunetas se hace en un ancho máximo de 0,60m siempre usando conos de indicación, para salvaguardar la vida del trabajador.
            li 
              i.fas.fa-angle-right
              |	Recolección de residuos en alcantarillado, cuando se requiera succionar lodos o elementos no sólidos, se debe contar el equipo adecuado.
            
    ul.lista-ul.mb-4
      li 
        <i class="fas fa-circle fa-xs" style= "color:#009EE3 !important;"></i>
        h3.ps-2 Limpieza de zonas comunes

    .bg_fondo7
      .row.justify-content-center.mb-4
        .col-md-10
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p le corresponde al prestador del servicio que fue asignado a una zona, realizar limpieza de playas, parques y ríos que encuentre y sean considerados de la ciudad o públicos siempre y cuando estos no estén normados a otras entidades para las acciones de limpieza.<br><br/>Dentro de estas zonas cuando aplique, se debe velar por la recolección de residuos, poda y limpieza general.

    ul.lista-ul.mb-4
      li 
        <i class="fas fa-circle fa-xs" style= "color:#009EE3 !important;"></i>
        h3.ps-2 Recolección de residuos

    p.mb-5 También se debe organizar y programar la recolección de residuos de los generadores de acuerdo con la normatividad vigente y a las indicaciones establecidas por la autoridad sobre la presentación y la gestión que se les debe realizar, dentro de esta recolección se debe garantizar que se realiza a los sectores de:

    .row.mb-5
      .col-md-3.mb-4
        img(src='@/assets/curso/tema1/img5.png' alt='AvatarTop')
        h5.bg-suave.text-center.p-4.text-white Sector comercial
      .col-md-3.mb-4
        img(src='@/assets/curso/tema1/img6.png' alt='AvatarTop')
        h5.bg-suave.text-center.p-4.text-white Sector residencial
      .col-md-3.mb-4
        img(src='@/assets/curso/tema1/img7.png' alt='AvatarTop')
        h5.bg-suave.text-center.p-4.text-white Sector Industrial
      .col-md-3.mb-4
        img(src='@/assets/curso/tema1/img8.png' alt='AvatarTop')
        h5.bg-suave.text-center.p-4.text-white Sector público
    separador

    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6.	Recursos

    p.mb-5 Para la ejecución correcta de las actividades se debe realizar una asignación de recursos dentro de los cuales se puede mencionar: 

    .row.mb-4
      .col-md-9.center
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure.col-md-9.mb-5.center
              img(src='@/assets/curso/tema1/info.svg', alt='Texto que describa la imagen')
          .tarjeta.bg-amarillo-claro.p-4(x="20.7%" y="8%" numero="1")
            p <b>Recurso humano</b>  
            span Se debe contar con personal capacitado para la realización de las actividades puntuales, en este caso se puede mencionar barredores de calles, conductores y colectores en vehículos compactadores y de recolección, operario de la máquina barredora, operarios de separación o disposición de residuos, supervisiones de cuadrillas (equipos de trabajo por zona) entre otros. 

          .tarjeta.bg-amarillo-claro.p-4(x="40%" y="91.7%" numero="2")
            p  <b>Recurso tecnológico</b>  
            span En lo posible es importante dotar a los empleados o personas que realizan estas actividades de equipos tecnológicos como GPS o tabletas para que registren las rutas o reporten cualquier dificultad o novedad en el servicio en tiempo real a la empresa. 

          .tarjeta.bg-amarillo-claro.p-3(x="59.5%" y="8.2%" numero="3")
            p <b>Materiales y equipo</b>  
            span Dentro de los materiales y equipos a utilizar, se debe caracterizar la extensión de las zonas y el tipo de barrido a usar, con el fin de asignar a cada equipo de trabajo los elementos necesarios para la ejecución de la actividad, dentro de ellos se encuentra, balanzas de pesaje (preferiblemente digitales) bolsas según clasificación de la autoridad competente, escobas, recogedores, practiwagones, recipientes o contenedores, cajas estacionarias, máquina barredora, palas, entre otros.<br><br/>Dentro de este ítem también se encuentran los elementos especializados para la recolección como vehículos compactadores, vehículos con sistemas levantadores, compactadores de residuos estacionarios, maquinaria embaladora para reciclables, equipos de succión y cámaras para mantenimiento de alcantarillados, desintegradores y trituradores, entre otros.

          .tarjeta.bg-amarillo-claro.p-4(x="79.2%" y="91.8%" numero="4")
            p <b>Elementos de protección personal</b>  
            span Siempre amparados en la normatividad legal vigente se debe otorgar a los empleados o personas que realizarán las actividades los elementos de protección individual que sean necesarios dependiendo de los residuos o actividades de limpieza y aseo que se vayan a ejecutar, dentro de los cuales se contempla, botas, guantes, gafas, casco, tapabocas, overoles entre otros.<br><br/>Dentro de los elementos también se debe garantizar, la señalización requerida para salvaguardar a las personas, dentro de ellas se encuentra conos de señal de precaución, señales móviles de personal trabajando, chalecos reflectivos entre otros.





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
