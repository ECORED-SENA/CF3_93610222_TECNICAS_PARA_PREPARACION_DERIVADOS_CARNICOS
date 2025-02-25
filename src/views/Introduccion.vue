<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row(data-aos="fade-down")
      .col-9
        .row
          .col-lg-4.pe-lg-0.d-none.d-lg-block
            figure
              img(src='@/assets/curso/intro/img1.png', alt='').m-auto
          .col-lg-8
            .row.align-items-center.h-100.bg-c1
              .col
                .p-4
                  p.mb-0 Las emulsiones cárnicas desempeñan un papel fundamental en la industria alimentaria, ya que permiten la combinación homogénea de ingredientes como carne, grasa y agua, asegurando estabilidad y calidad en productos embutidos. Su correcta formación depende de factores como la temperatura, el tiempo de procesamiento y la adición de proteínas y aditivos específicos.
        .row
          .col-12.mt-4
            .row.align-items-center
              .col-md-auto
                figure
                  img(src="@/assets/curso/intro/img3.png", alt="", style="width: 90px").m-auto
              .col
                p.mb-0 Durante la maduración de los embutidos crudos, pueden presentarse defectos que afectan su apariencia, textura, color y sabor. Problemas como el enmohecimiento, la separación de grasa o la pérdida de ligazón pueden deberse a fallos en el procesamiento, almacenamiento o selección de materias primas, impactando negativamente en la calidad final del producto.

      .col-3
        figure
          img(src='@/assets/curso/intro/img2.png', alt='').m-auto

    
    .row.align-items-center.justify-content-center(data-aos="fade-down")
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/intro/img4.png', alt='', style="width: 480px").m-auto
      .col-lg-5(data-aos="fade-left")
        .row
          .col-12.align-items-center.h-100
            .p-4.bg-c2
              .row.align-items-center.mb-3
                .col-md-12
                  figure
                    img(src='@/assets/curso/intro/img5.png', alt='', style="width: 100px")
                  p Además, la fabricación de productos cárnicos requiere equipos especializados, desde molinos y cutters hasta embutidoras y hornos de ahumado. Estos deben cumplir con estándares de higiene y mantenimiento adecuados para garantizar procesos eficientes y seguros. Conocer estos elementos es clave para optimizar la producción y evitar defectos en los embutidos.


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
