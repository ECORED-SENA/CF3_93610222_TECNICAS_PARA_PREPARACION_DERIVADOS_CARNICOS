<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Emulsiones y embutidos crudos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la formación de emulsiones cárnicas, los defectos que pueden presentarse en los embutidos crudos y el uso de equipos en la industria cárnica.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de la emulsión cárnica en la producción de embutidos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una mezcla heterogénea de carne y grasa sin estructura estable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Lograr una combinación homogénea y estable de carne, grasa y agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reducir la cantidad de proteína en la carne para facilitar su procesamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Generar una estructura rígida con alta cantidad de sales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes factores contribuye a la estabilidad de una emulsión cárnica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un aumento excesivo de la temperatura durante el procesamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La reducción del tiempo de corte para evitar cambios en la textura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El uso de proteínas solubles como la miosina y la actina.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La eliminación total de sales y aditivos en el proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes defectos puede aparecer en los embutidos crudos debido a un exceso de humedad en la superficie?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Florecido y enmohecido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Coloración interna defectuosa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desprendimiento de la envoltura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formación de filamentos viscosos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué problema se puede generar en un embutido si la temperatura de ahumado es demasiado alta?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rezumado de grasas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exceso de color rojo en el producto final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de la cantidad de proteínas disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación de la película protectora de la envoltura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la causa principal de la corteza reseca en los embutidos crudos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un aumento en la concentración de nitritos y sales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una desecación rápida y prematura que endurece la superficie.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso excesivo de grasas insaturadas en la formulación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Falta de homogeneización en la mezcla de ingredientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué provoca un color oscuro en los embutidos crudos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uso de carne de animales viejos o mal sangrados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un exceso de polifosfatos en la mezcla cárnica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una mala distribución de la grasa en la emulsión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La fermentación inadecuada por falta de nitritos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes opciones es un equipo utilizado para medir la acidez de los embutidos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Termómetro de alta precisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'pH-metro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Báscula digital de precisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Horno de secado computarizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes capas se utiliza para añadir texto en el diseño?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Extrae el aire del empaque para prolongar la vida útil del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cocina los embutidos con calor seco para mejorar su conservación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mezcla los ingredientes antes de realizar la emulsificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Regula la cantidad de nitratos en la carne durante el curado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La temperatura de la emulsión cárnica debe mantenerse por debajo de 15 °C para evitar la desnaturalización de las proteínas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'El enrojecimiento defectuoso en los embutidos es causado por un exceso de sales y proteínas en la formulación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los termómetros son utilizados en la industria cárnica para medir el pH de los productos y garantizar su conservación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La embutidora permite llenar las tripas con la pasta cárnica de manera uniforme y con presión controlada.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Un embutido con un fuerte olor y sabor a pescado puede haber sido elaborado con carne de cerdos alimentados con harinas de pescado de baja calidad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los defectos de ligazón en los embutidos pueden presentarse cuando la masa no se ha desecado correctamente.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El tanque de escaldado se utiliza en la industria cárnica para congelar los productos antes del empacado final.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
