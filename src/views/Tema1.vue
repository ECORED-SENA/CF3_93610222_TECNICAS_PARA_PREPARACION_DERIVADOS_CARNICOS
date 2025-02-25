<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Emulsiones

    .tarjeta.p-3
      .row.justify-content-around.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema1/img1.svg", style="width: 100px").m-auto
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p Las emulsiones son sistemas dispersos formados por la combinación de dos líquidos inmiscibles, donde uno de ellos (fase dispersa) se encuentra en forma de pequeñas gotas suspendidas dentro del otro (fase continua). Para lograr estabilidad, se requiere la presencia de un agente emulsificante que impida la separación de las fases.

    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='', style="width: 480px").m-auto
      .col-lg-5(data-aos="fade-left")
        .row
          .col-12.align-items-center.h-100
            .p-4.bg-c2
              .row.align-items-center.mb-3
                .col-md-12
                  p En la industria cárnica, una emulsión cárnica es una mezcla homogénea de carne, grasa y agua, estabilizada mediante proteínas y aditivos como sales y fosfatos. Estas emulsiones son fundamentales en la producción de embutidos, ya que permiten obtener productos con buena textura, jugosidad y estabilidad durante su almacenamiento.
    
    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Formación de una emulsión

    .row.mt-4(data-aos="fade-down")
      .col-lg-7.col-md-12.order-md-2

        p.mb-0 Los principales componentes para la formación de la emulsión cárnica son la carne, la grasa y el agua, además de otros ingredientes como condimentos, aditivos químicos, sustancias ligantes y sales. Las carnes utilizadas deben ser de buena calidad y haber pasado por el proceso de maduración, lo que les permite absorber más humedad y facilitar la formación de la emulsión.
        .row
          .col-12.mt-4
            .row.align-items-center
              .col-md-auto.pe-lg-0
                figure
                  img(src="@/assets/curso/tema1/img4.svg", alt="", style="width: 90px").m-auto
              .col
                p.mb-0 Durante la formación de la emulsión en el cutter, la proteína se extrae con la ayuda de la sal y los polifosfatos, lo que permite aumentar la superficie de la proteína disponible para recubrir las gotas de grasa y estabilizar la emulsión.

      .col-lg-5.col-md-12.order-md-1
        figure
          img(src='@/assets/curso/tema1/img3.png', alt='').m-auto

    .row.mt-4.justify-content-center(data-aos="fade-down")
      .col-10
        .row
          .col-lg-6.pe-lg-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img5.png', alt='').m-auto
          .col-lg-6
            .row.align-items-center.h-100.bg-c4
              .col
                .p-4
                  p.mb-0 Las proteínas solubilizadas junto con el agua forman una matriz que encapsula los glóbulos de grasa. Las principales proteínas solubles en soluciones salinas utilizadas en este proceso son la miosina y la actina, que juntas forman la actomiosina.

    .row.bg-c5
      .row.mb-2.ms-0.mt-4
        .col-auto.bg-c3(data-aos="fade-left")
          .row.align-items-center
            .col-auto.px-0
              figure
                img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
            .col
              h3.mb-0 Factores que contribuyen a la estabilidad de una emulsión cárnica

        p.mt-2 Los factores más relevantes en la estabilidad de las emulsiones cárnicas incluyen:
      .carousel-bg
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.d-none.d-lg-block
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/tema1/img7.png", alt="alt").img400.m-auto
          .col-lg-8
            SlyderF.custom.mb-5(columnas="col-lg-6 col-md-6 col-xl-4")
              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/tema1/img8.svg", alt='', style="width: 100px").m-auto
                p.text-small.text-center.mb-2.bg-c6 #[b Temperatura]
                p.text-small.text-center.mb-0 Debe mantenerse baja para evitar la desnaturalización de proteínas.

              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/tema1/img9.svg", alt='', style="width: 100px").m-auto
                p.text-small.text-center.mb-2.bg-c6 #[b Duración del corte]
                p.text-small.text-center.mb-0 Un corte excesivo puede afectar la textura.

              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/tema1/img10.svg", alt='', style="width: 100px").m-auto
                p.text-small.text-center.mb-2.bg-c6 #[b Cantidad y tipo de grasa]
                p.text-small.text-center.mb-0 Influyen en la estabilidad.

              .tarjeta.tarjeta--slyder.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src="@/assets/curso/tema1/img11.svg", alt='', style="width: 100px").m-auto
                p.text-small.text-center.mb-2.bg-c6 #[b Concentración y naturaleza de las proteínas]
                p.text-small.text-center.mb-0 Claves en la emulsificación

    .row.mt-2
      p Para garantizar estabilidad, se deben considerar los siguientes aspectos:

    .row.justify-content-center(data-aos="fade-right")
      .col-10
        .row.bg-c7.justify-content-center
          .col-lg-6
            ul.lista-ul--color.mt-5
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                |
                p.mb-0 Las cuchillas del #[em cutter] deben estar bien afiladas para garantizar un buen corte y evitar el aumento de temperatura.

              li.d-flex
                i.far.fa-arrow-alt-circle-right
                |
                p.mb-0 El agua debe añadirse en forma de hielo para mantener baja la temperatura.

              li.d-flex
                i.far.fa-arrow-alt-circle-right
                |
                p.mb-0 El proceso de cutteado genera fricción y calor, por lo que la temperatura no debe superar los 15°C.

              li.d-flex
                i.far.fa-arrow-alt-circle-right
                |
                p.mb-0 Si la proteína de la carne es insuficiente, se pueden usar proteínas de origen animal o vegetal, como el caseinato de sodio y la proteína de soya.

          .col-lg-4.p-4.pe-lg-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img12.png', alt='').m-auto

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Adición de ingredientes en una emulsión cárnica

    .row.mt-2
      p El orden de adición de ingredientes es clave en la formación de la emulsión:

    .row.mb-5.justify-content-center
      .col-10
        .p-4.bg-c8
          .row.align-items-center
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img13.png', alt='', style="width: 430px").m-auto
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              p #[b Los pasos para su preparación son:]
              ol.lista-ol--cuadro.ms-3
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span.text-black a
                  |
                  p.mb-0 #[b Presalado] de la carne con sal y curadores, refrigerando a 4°C por 12 horas para extraer mejor la proteína.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span.text-black b
                  |
                  p.mb-0 #[b Agregado de agua (34%) con fosfato] en el #[em cutter], manteniendo la temperatura controlada.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span.text-black c
                  |
                  p.mb-0 #[b Adición de grasa, condimentos y antioxidantes] a medida que la emulsión se vuelve más viscosa.
                li.d-flex
                  .lista-ol--cuadro__vineta.v--green
                    span.text-black d
                  |
                  p.mb-0 #[b Incorporación final de sustancias de relleno] (harina, fécula).
            

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
