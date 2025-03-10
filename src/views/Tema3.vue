<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Equipos y utensilios utilizados en la industria cárnica

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-image
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema3/img1.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px;")
          
          .col-xl.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 Los equipos y utensilios utilizados en la fabricación de productos cárnicos deben estar diseñados con materiales de acero inoxidable, ser fáciles de desmontar para su limpieza y no contener elementos que puedan desprenderse y contaminar los alimentos. El mantenimiento preventivo es fundamental para prolongar la vida útil de los equipos y garantizar la producción de embutidos de alta calidad. A continuación, se presentan algunos de los equipos y maquinaria más utilizados en la industria cárnica:

    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Equipos principales

      p.mt-2 La producción de embutidos y otros productos cárnicos requiere el uso de equipos especializados que permitan garantizar eficiencia, higiene y calidad en cada etapa del proceso.

    .row.bg-t3-1.mb-6
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Lavaplatos] 
                    p Facilita la limpieza y desinfección de utensilios y herramientas utilizadas en la producción.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img2.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Báscula] 
                    p Permite registrar la masa de los ingredientes y mantener un control de rendimiento y costos.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img3.png', alt='Texto que describa la imagen')
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Embutidora] 
                    p Compuesta por una tolva y un rotor que empuja la pasta cárnica con presión hacia una boquilla de llenado. Puede ser manual, hidráulica, de aire comprimido o automática continua, algunas con sistemas de porcionado.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img4.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Cuarto frío] 
                    p Almacena materias primas y productos terminados en condiciones óptimas de refrigeración o congelación. Construido con materiales sanitarios para mantener la cadena de frío.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img5.png', alt='Texto que describa la imagen')
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Molino para carne] 
                    p Transporta los trozos de carne mediante un rodillo sin fin hacia cuchillas o discos perforados, donde se muelen según el tamaño de los agujeros del disco.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img6.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Porcionadora] 
                    p Se instala en la embutidora para dividir la pasta cárnica en porciones iguales. Algunas incluyen sistemas de torsión automática para marcar la separación entre unidades.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Tanque de escaldado] 
                    p Aplica tratamientos térmicos a los productos cárnicos, generalmente con vapor o agua caliente.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b #[em Cutter]] 
                    p Consta de un platón giratorio horizontal y un brazo con cuchillas que giran en sentido vertical. Se usa para la emulsificación y molienda de carne, con variantes como #[em cutters] al vacío, con doble giro o con regulación computarizada.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img9.png', alt='Texto que describa la imagen')
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Horno de cocción o ahumado] 
                    p Se usa para cocinar y ahumar embutidos. Puede ser manual, automático o computarizado, con control de temperatura, humedad y tiempo de exposición al humo.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Mezcladora] 
                    p Homogeneiza los ingredientes de la mezcla cárnica, asegurando una distribución uniforme de condimentos y aditivos. Generalmente fabricada en acero inoxidable con paletas removibles.

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img11.png', alt='Texto que describa la imagen')

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-7.mb-4.mb-md-0
                    p #[b Empacadora al vacío] 
                    p Extrae el aire del empaque para prolongar la frescura de los productos cárnicos. Algunas permiten la inyección de gases para atmósferas modificadas (MAP).

                  .col-md-4
                    figure
                      img(src='@/assets/curso/tema3/img12.png', alt='Texto que describa la imagen')

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Equipos de control de calidad

      p.mt-2 El control de calidad es un aspecto fundamental en la producción de embutidos y otros productos cárnicos, ya que garantiza la seguridad alimentaria, la estabilidad del producto y el cumplimiento de los estándares de higiene y conservación. 

    .row
      .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-t3-2.h-100
          figure.mb-3
            img(src='@/assets/curso/tema3/img13.png', alt='', style="width: 100px")
          h4.mt-5 Termómetros
          p.mt-2 Miden la temperatura durante la producción para garantizar condiciones seguras de procesamiento.
      .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .p-4.bg-t3-3.h-100
          figure.mb-3
            img(src='@/assets/curso/tema3/img14.png', alt='', style="width: 100px")
          h4.mt-5 pH-metros
          p.mt-2 Verifican la acidez de los embutidos para controlar su estabilidad y conservación.
      .col-md-6.col-lg-4(data-aos="fade-left")
        .p-4.bg-t3-4.h-100
          figure.mb-3(style="visibility: hidden;") 
            img(src='@/assets/curso/tema3/img13.png', alt='', style="width: 100px;").target-with
      
    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Utensilios principales

      p.mt-2 Los utensilios utilizados en la industria cárnica deben cumplir con normas de higiene y seguridad para evitar la contaminación cruzada. Entre los más importantes se encuentran:

    .row.mb-6.mt-2
      .col-12
        TabsC.color-acento-contenido.mb-4
          .py-3.py-md-4.tab-color(titulo="Carros de carne")
            .row.d-flex.align-items-center.justify-content-center
              .col-md-6.mb-4.mb-md-0.p-5
                figure
                  img(src='@/assets/curso/tema3/img16.png', alt='Texto que describa la imagen')
              .col-md-6.p-4
                h4 Carros de carne
                p Facilitan el transporte de materias primas dentro de la planta de producción.
          .py-3.py-md-4.tab-color(titulo="Cuchillos de acero inoxidable")
            .row.d-flex.align-items-center.justify-content-center
              .col-md-6.mb-4.mb-md-0.p-5
                figure
                  img(src='@/assets/curso/tema3/img17.png', alt='Texto que describa la imagen')
              .col-md-6.p-4
                h4 Cuchillos de acero inoxidable
                p Deben estar bien afilados para garantizar cortes precisos y evitar alteraciones en la textura de la carne.
          .py-3.py-md-4.tab-color(titulo="Guantes de protección")
            .row.d-flex.align-items-center.justify-content-center
              .col-md-6.mb-4.mb-md-0.p-5
                figure
                  img(src='@/assets/curso/tema3/img18.png', alt='Texto que describa la imagen')
              .col-md-6.p-4
                h4 Guantes de protección
                p Reducen el riesgo de accidentes al manipular cuchillos y maquinaria.
          .py-3.py-md-4.tab-color(titulo="Mesas de acero inoxidable")
            .row.d-flex.align-items-center.justify-content-center
              .col-md-6.mb-4.mb-md-0.p-5
                figure
                  img(src='@/assets/curso/tema3/img19.png', alt='Texto que describa la imagen')
              .col-md-6.p-4
                h4 Mesas de acero inoxidable
                p Superficies lisas y fáciles de limpiar, utilizadas para el procesamiento y manipulación de carne.
          
  

    
 

</template>

<script>
export default {
  name: 'Tema3',
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
