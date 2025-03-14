<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Defectos de maduración en los embutidos crudos

    .row.justify-content-center
      .col-lg-12(data-aos="fade-down")
        .row.bg-t2-i
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img1.png', alt='', style="width: 100%; height: auto; margin-left: -10px;")
          .col-xl
            .row.h-100.align-items-center
              .p-4
                .col-12
                  p Los embutidos crudos pueden presentar defectos durante su maduración, afectando su apariencia, consistencia, color, olor y sabor. Estos defectos pueden originarse por fallas en la selección de materias primas, almacenamiento, procesamiento o condiciones ambientales inadecuadas.
    

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Defectos de aspecto

    .row.mb-2.ms-0.mt-4
      .col-12
        p.mt-2 La apariencia de un embutido es un factor determinante en su aceptación por parte del consumidor. A continuación, se describen los principales defectos de aspecto que pueden presentarse en los embutidos crudos y sus posibles causas.

    .row.bg-t2-1.mb-6
      .col-12
        .p-4
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Formación de arrugas y desprendimiento de la envoltura] 
                    p La envoltura debe adherirse a la masa sin pliegues ni desprendimientos. Las arrugas aparecen cuando la tripa es demasiado ancha o el relleno es insuficiente. 

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.p-6
                    p #[b Florecido y enmohecido] 
                    p Algunos embutidos desarrollan un recubrimiento blanco o verdoso por microorganismos, dependiendo de los gérmenes presentes, el tiempo de elaboración y las condiciones ambientales.    

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.p-6
                    p #[b Exudado salino] 
                    p Se manifiesta como un polvo blanco en la superficie cuando se usan tripas saladas sin remojar o se emplea demasiada sal. Es común en productos almacenados por períodos prolongados.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Rezumado de grasas] 
                    p Las grasas pueden atravesar la tripa formando una película brillante y pegajosa si se usan tocinos inadecuados o si la temperatura de ahumado o secado es demasiado alta. 

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.p-6
                    p #[b Color de ahumado desigual     ] 
                    p Puede generarse por enmohecimiento no eliminado antes del ahumado o por una exposición inadecuada al humo, causando manchas grises, castañas o verdosas.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0.p-6
                    p #[b Manchas marrones y amarillas] 
                    p La sal gruesa mal disuelta antes del ahumado puede generar manchas marrones. Si el ahumado es excesivo, estas manchas pueden oscurecerse aún más.       

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema2/img7.png', alt='Texto que describa la imagen')

          

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Defectos de ligazón y consistencia

      p.mt-2 La ligazón y la consistencia son características esenciales en la calidad de un embutido crudo. A continuación, se presentan los principales defectos de ligazón y consistencia que pueden aparecer en los embutidos crudos, junto con sus posibles causas.

    .row.mt-2
      .col-lg-3.pe-lg-0.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img8.png', alt='', style="width: 430px").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-t2-2")
          .row(titulo="Corteza reseca")
            .col-12.mb-4.mb-md-0
              p La desecación rápida endurece la superficie del embutido, generando una corteza seca que puede volverlo inconsumible.

          div(titulo="Formación de huecos y poros")
            p La presencia de grietas internas afecta la textura del embutido y puede facilitar el desarrollo de mohos. Se debe a una ventilación excesiva o temperaturas de maduración demasiado altas.

          div(titulo="Reblandecimiento")
            p Ocurre cuando el embutido se conserva a temperaturas inadecuadas o tiene un pH inferior a 4,7, lo que afecta su textura.

          div(titulo="Embutidos filantes")
            p Se generan filamentos viscosos en el interior del embutido debido a la actividad microbiana, los cuales se extienden al separarlo en dos partes.

          div(titulo="Rellenado entorpecido de la pasta")
            p Si la masa está demasiado fría, la boquilla es estrecha o la pasta es pegajosa, el llenado se vuelve difícil y puede afectar la estructura del embutido.
            

    .row.bg-t2-3
      .col-12
        .p-5
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Defectos de color
      
          p.mt-4 El color de un embutido es un indicador visual de su calidad y frescura, influyendo directamente en la aceptación del producto por parte del consumidor. A continuación, se detallan los defectos de color más comunes en los embutidos crudos y sus posibles causas.

          TabsC.color-acento-contenido
            .py-3.py-md-4.tab-color(titulo="Enrojecimiento defectuoso y mala conservación del color")
              .row.d-flex.align-items-center.justify-content-center
                .col-md-6.mb-4.mb-md-0.p-5
                  figure
                    img(src='@/assets/curso/tema2/img9.png', alt='Texto que describa la imagen')
                .col-md-6.p-4
                  h4 Enrojecimiento defectuoso y mala conservación del color
                  p Puede ser causado por la ausencia de nitrito potásico o sal curante. También ocurre cuando se usa más grasa que carne, lo que genera embutidos pálidos.
            .py-3.py-md-4.tab-color(titulo="Superficie de corte borrosa y desviado")
              .row.d-flex.align-items-center.justify-content-center
                .col-md-6.mb-4.mb-md-0.p-5
                  figure
                    img(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
                .col-md-6.p-4
                  h4 Superficie de corte borrosa y desviado
                  p Si el picado de la carne no es limpio, el embutido puede presentar una textura desordenada y pérdida de líquidos.
            .py-3.py-md-4.tab-color(titulo="Aspecto marmóreo y color oscuro")
              .row.d-flex.align-items-center.justify-content-center
                .col-md-6.mb-4.mb-md-0.p-5
                  figure
                    img(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')
                .col-md-6.p-4
                  h4 Aspecto marmóreo y color oscuro
                  p Se genera al usar carne de animales viejos o mal sangrados, lo que da un tono oscuro o violeta. También ocurre con trozos de carne desecados en la superficie.
            .py-3.py-md-4.tab-color(titulo="Coloraciones internas")
              .row.d-flex.align-items-center.justify-content-center
                .col-md-6.mb-4.mb-md-0.p-5
                  figure
                    img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
                .col-md-6.p-4
                  h4 Coloraciones internas
                  p Algunos embutidos pueden desarrollar variaciones de color en su interior debido a procesos químicos o microbiológicos.
 
    .row
      .col-12
        .row.mb-4.ms-0
          .col-auto.bg-c3(data-aos="fade-left")
            .row.align-items-center
              .col-auto.px-0
                figure
                  img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
              .col
                h3.mb-0 Defectos de olor y sabor 

        p.mt-2 El aroma y el sabor de un embutido son atributos fundamentales en su calidad sensorial. A continuación, se presentan los principales defectos de olor y sabor que pueden aparecer en los embutidos crudos, junto con sus posibles causas.

        .tarjeta--container.row
          .col-lg-4.tarjeta.bg-t2-4.p-4.target-with2
            .row.mb-4.mt-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img13.svg', style="width: 90px")
              
            h4 Sabor amargo
            p Puede ser causado por un exceso de nitrato potásico o por la presencia de sales de magnesio en la sal común. También puede ocurrir si el embutido ha sido ahumado con un humo de sabor amargo.

          .col-lg-4.tarjeta.bg-t2-5.p-4.target-with2
            .row.mb-4.mt-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img14.svg', style="width: 90px")
              
            h4 Enranciamiento
            p La alteración química de la grasa o el tocino puede dar lugar a embutidos con olor y sabor a rancio, aceitoso o seboso. En estados avanzados de enranciamiento, la grasa puede cambiar de color y volverse gris o amarilla.
          .col-lg-4.tarjeta.bg-t2-6.p-4.target-with2
            .row.mb-4.mt-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img15.svg', style="width: 90px")

            h4 Olor y sabor a pescado
            p Puede ocurrir cuando se usan carnes de cerdos que han sido alimentados con harinas de pescado o residuos grasos de baja calidad.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
