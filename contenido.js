/* =========================================================
   PUGA STUDIO · Contenido del sitio
   Todo lo que se lee en la página sale de este archivo.
   Para cambiar un texto o una foto solo se edita aquí.
   Fotos: van en la carpeta img/ y se escriben con su ruta,
   por ejemplo 'img/proyectos/casa-che-che/01.jpg'.
   Si una foto está vacía ('') se muestra un recuadro gris.
   Disciplinas: 1 Sólidos · 2 Lo Interior · 3 Montañismo · 4 Taller de Sombras
   ========================================================= */
window.PUGA = {

  acerca: 'Puga Studio es un estudio de arquitectura, diseño de interiores, mobiliario y arte-objeto fundado en 2017 por Javier Puga. Desde entonces ha diseñado y construido casas, hoteles, centros comerciales, restaurantes, cafeterías y residencias de lujo, muchas de ellas entregadas llave en mano. Cada proyecto es único y parte de un concepto sólido: la historia del lugar, la forma de habitarlo y el oficio local definen una idea, y esa idea ordena todo lo demás. El estudio ha colaborado con marcas internacionales en proyectos de lujo para hospitality.',

  retrato: { foto: '', pie: 'Javier Puga, fundador.' },
  fotoEquipo: { foto: '', pie: 'El equipo de Puga Studio en Ciudad de México.' },
  plano: '',   /* plano del estudio en lima */

  equipo: [
    { nombre: 'Javier Puga', puesto: 'Fundador' }
  ],

  contacto: {
    correo: 'javier@pugastudio.com',
    instagram: '',            /* ej. 'pugastudio' */
    telefono: '+52 55 7408 3755',
    estudio: 'Ciudad de México',
    texto: 'Puga Studio trabaja en Ciudad de México, Puerto Escondido, Mérida, Tulum y Cabo, con artesanos y talleres locales en cada proyecto, respetando la historia, el oficio y el paisaje de cada lugar.',
    pegaso: ''                /* nuevo pegaso de cerámica, en negro */
  },

  proyectos: [
    {
      slug: 'casa-che-che', nombre: 'Casa Che Che', disciplina: 1, tipo: 'Residencial',
      anio: '', estado: '', ubicacion: '', equipo: 'Javier Puga',
      portada: '',
      concepto: 'Aquí va la idea que da origen al proyecto, en dos o tres líneas: el lugar, su historia y cómo se habita.',
      fotos: [
        { src: '', titulo: 'Planos. 1 de 3', texto: 'Planta arquitectónica y cortes del proyecto.' },
        { src: '', titulo: 'Materiales.', texto: 'Texturas, acabados y oficios locales que usamos en la obra.' },
        { src: '', titulo: 'Interiores.', texto: 'Mobiliario y piezas diseñadas por el estudio para este espacio.' }
      ]
    },
    {
      slug: 'ono-poke-house', nombre: 'Ono Poke House', disciplina: 2, tipo: 'Restaurante',
      anio: '', estado: '', ubicacion: '', equipo: 'Javier Puga',
      portada: '', concepto: '', fotos: []
    },
    {
      slug: 'panaderia-costra', nombre: 'Panadería Costra', disciplina: 2, tipo: 'Panadería y café',
      anio: '', estado: '', ubicacion: '', equipo: 'Javier Puga',
      portada: '', concepto: '', fotos: []
    },
    { slug: 'hotel', nombre: 'Hotel (por cargar)', disciplina: 1, tipo: 'Hospitality', portada: '', fotos: [] },
    { slug: 'residencia', nombre: 'Residencia llave en mano (por cargar)', disciplina: 1, tipo: 'Residencial de lujo', portada: '', fotos: [] },
    { slug: 'centro-comercial', nombre: 'Centro comercial (por cargar)', disciplina: 1, tipo: 'Comercial', portada: '', fotos: [] },
    { slug: 'mobiliario', nombre: 'Pieza de mobiliario (por cargar)', disciplina: 3, tipo: 'Mobiliario', portada: '', fotos: [] },
    { slug: 'arte-objeto', nombre: 'Arte-objeto (por cargar)', disciplina: 4, tipo: 'Pieza de arte', portada: '', fotos: [] }
  ],

  /* Circular: textos del blog. Fecha en formato DD.MM.AA.
     El cuerpo se escribe en párrafos separados por una línea vacía. */
  circular: [
    { slug: 'materiales', titulo: 'Título del texto sobre materiales', fecha: 'DD.MM.AA', portada: '', cuerpo: 'Texto por escribir.' },
    { slug: 'notas-de-obra', titulo: 'Notas de obra en Puerto Escondido', fecha: 'DD.MM.AA', portada: '', cuerpo: 'Texto por escribir.' },
    { slug: 'taller-de-ceramica', titulo: 'Visita al taller de cerámica', fecha: 'DD.MM.AA', portada: '', cuerpo: 'Texto por escribir.' },
    { slug: 'referencias', titulo: 'Referencias: libros y lugares', fecha: 'DD.MM.AA', portada: '', cuerpo: 'Texto por escribir.' },
    { slug: 'concepto', titulo: 'El concepto antes que la forma', fecha: 'DD.MM.AA', portada: '', cuerpo: 'Texto por escribir.' },
    { slug: 'llave-en-mano', titulo: 'Diario de un proyecto llave en mano', fecha: 'DD.MM.AA', portada: '', cuerpo: 'Texto por escribir.' }
  ],

  /* Origen: la historia del estudio, una foto y una frase por panel */
  origen: [
    { foto: '', texto: 'Puga Studio nació en septiembre de 2017, con Javier Puga como fundador.' },
    { foto: '', texto: 'Los primeros proyectos fueron casas, restaurantes y cafeterías.' },
    { foto: '', texto: 'Después llegaron hoteles, centros comerciales y residencias de lujo, muchas entregadas llave en mano.' },
    { foto: '', texto: 'Colaboraciones con marcas internacionales: Azulik, Kom Studio, The Body Shop y AT&T.' },
    { foto: '', texto: 'Hoy el estudio trabaja en Ciudad de México, Puerto Escondido, Mérida, Tulum y Cabo.' }
  ]
};
