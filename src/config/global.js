export default {
  global: {
    Name:
      'Emulsiones, defectos de<br> embutidos crudos y equipos<br> utilizados en la industria cárnica',
    Description:
      'El componente formativo aborda las emulsiones cárnicas, sus factores de estabilidad e ingredientes. También analiza defectos en embutidos crudos, como problemas de ligazón, color y sabor. Finalmente, describe equipos y utensilios esenciales en la industria cárnica, destacando su mantenimiento y materiales adecuados para garantizar calidad en la producción de derivados cárnicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Emulsiones',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Defectos de maduración en los embutidos crudos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Equipos y utensilios utilizados en la industria cárnica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Emulsiones',
      referencia:
        'JCM IMPORT EXPORT S.A. (2021). Elaboración de Emulsiones Cárnicas. [Archivo de video] Youtube.',
      tipo: 'VIDEO',
      link:
        'https://www.youtube.com/watch?v=Y2RKCIeCJt0&ab_channel=JCMIMPORTEXPORTS.A.',
    },
    {
      tema: 'Defectos de maduración en los embutidos crudos',
      referencia:
        'Arnau, J. (2013). Problemas de los embutidos crudos curados. IRTA',
      tipo: 'DOCUMENTO',
      link:
        'https://recercat.cat/bitstream/id/80632/Arnau_2011%20Problemas%20de%20los',
    },
    {
      tema: 'Equipos y utensilios utilizados en la industria cárnica',
      referencia:
        'Agroglobal. (2025). Productos cárnicos: equipos y utensilios.',
      tipo: 'PÁGINA WEB',
      link:
        'https://agroglobalcampus.com/productos-carnicos-equipos-y-utensilios/?v=8985c1d64f80',
    },
  ],
  glosario: [
    {
      termino: 'Ahumado',
      significado:
        'técnica de conservación y saborización mediante la exposición del embutido al humo.',
    },
    {
      termino: '<em>Cutteado</em>',
      significado:
        'técnica de procesamiento en la que la carne se pica finamente para formar una emulsión.',
    },
    {
      termino: 'Desecación',
      significado:
        'proceso de eliminación de humedad en los embutidos para mejorar su conservación.',
    },
    {
      termino: 'Emulsión cárnica',
      significado:
        'mezcla homogénea de carne, grasa y agua estabilizada mediante proteínas y aditivos.',
    },
    {
      termino: 'Maduración',
      significado:
        'proceso de cambios bioquímicos en la carne que mejoran su textura y sabor.',
    },
    {
      termino: 'Nitrito potásico',
      significado:
        'aditivo utilizado en la curación de carnes para mejorar su conservación y color.',
    },
    {
      termino: 'pH-metro',
      significado:
        'instrumento utilizado para medir la acidez de los productos cárnicos.',
    },
    {
      termino: 'Porcionadora',
      significado:
        'equipo que permite dividir la pasta cárnica en porciones de tamaño uniforme.',
    },
    {
      termino: 'Proteína de soya',
      significado:
        'aditivo utilizado para mejorar la retención de agua y la estabilidad de emulsiones.',
    },
    {
      termino: 'Rezumado de grasas',
      significado:
        'filtración de grasa a la superficie del embutido debido a temperaturas inadecuadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castellanos, R. (1991). <em>Tecnologías de las carnes</em>. Universidad del Quindío.',
      link: '',
    },
    {
      referencia:
        'Escobar, J. (1971). <em>Embutidos: elaboración y defectos</em>. Editorial Acribia.',
      link: '',
    },
    {
      referencia:
        'Grau, R. (1965). <em>Carnes y productos cárnicos</em>. Editorial Acribia.',
      link: '',
    },
    {
      referencia:
        'Ramírez, R. (2006). <em>Tecnología de cárnicos</em>. Universidad Nacional Abierta y a Distancia.',
      link: '',
    },
    {
      referencia:
        'Wirth, F. (1992). <em>Tecnología de los embutidos</em>. Editorial Acribia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
