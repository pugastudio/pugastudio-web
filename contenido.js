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
      anio: '2024', estado: '', ubicacion: 'Ciudad de México', equipo: 'Javier Puga',
      portada: 'img/proyectos/ono-poke-house/01.jpg', portadaProp: 1.778,
      concepto: 'Una pecera urbana: el local se abre a la calle con un gran ventanal y un mural que proyecta hacia la ciudad el encuentro entre Hawái y Japón.',
      texto: 'El proyecto de interiorismo para **ONO POKE HOUSE** nace de una lectura espacial de la identidad de la marca, en la que convergen las culturas hawaiana y japonesa. Este encuentro orientó el diseño hacia una experiencia que reúne la frescura del mar con la sensibilidad estética japonesa, y convierte ambos referentes en una atmósfera propia.\n\nUn ventanal de gran formato abierto hacia la calle definió una de las principales oportunidades del proyecto: concebir el local como una **pecera urbana**, un espacio contenido y vibrante cuya vida interior se proyecta hacia la ciudad. Un mural integra gráficos y elementos icónicos de la marca para dar profundidad y carácter a esta composición. Desde el exterior, el restaurante se revela como un acuario lúdico de escala monumental, que despierta la curiosidad e invita a entrar.\n\nEl programa se organiza en dos niveles para responder con claridad a las necesidades de operación y a la experiencia del comensal. La planta baja concentra las áreas operativas, favoreciendo la eficiencia y la fluidez del trabajo en cocina. El nivel superior alberga el área de atención al cliente y los servicios sanitarios, en una atmósfera más pausada que invita a disfrutar del espacio y permanecer en él.\n\nLa intervención traduce el universo visual de ONO POKE HOUSE en una arquitectura interior con identidad, donde la expresión gráfica, la organización del programa y la relación con la calle construyen una experiencia coherente. El resultado es un entorno que equilibra carácter y funcionalidad, y propone una inmersión en el imaginario de la marca a través del espacio.',
      fotos: [
        { src: 'img/proyectos/ono-poke-house/02.jpg', prop: 0.667, titulo: 'Fachada.', texto: 'La pecera urbana se revela desde la calle.' },
        { src: 'img/proyectos/ono-poke-house/03.jpg', prop: 0.75, titulo: 'Exterior.', texto: 'Hojas tropicales en el anuncio y monsteras en los ventanales.' },
        { src: 'img/proyectos/ono-poke-house/04.jpg', prop: 1.499, titulo: 'Mural.', texto: 'Gráficos e íconos de la marca dan profundidad al espacio.' },
        { src: 'img/proyectos/ono-poke-house/05.jpg', prop: 1.499, titulo: 'Salón.', texto: 'La barra y el mural envuelven al comensal.' },
        { src: 'img/proyectos/ono-poke-house/06.jpg', prop: 1.499, titulo: 'Banca corrida.', texto: 'Una banca curva acompaña el recorrido del mural.' },
        { src: 'img/proyectos/ono-poke-house/07.jpg', prop: 0.667, titulo: 'Detalle.', texto: 'El pulpo, ícono de la marca, a escala monumental.' },
        { src: 'img/proyectos/ono-poke-house/08.jpg', prop: 1.499, titulo: 'Barra.', texto: 'Madera, aplanado y luz cálida.' },
        { src: 'img/proyectos/ono-poke-house/09.jpg', prop: 0.667, titulo: 'Sanitarios.', texto: 'Un remate en azul profundo para los servicios.' },
        { src: 'img/proyectos/ono-poke-house/10.jpg', prop: 0.667, titulo: 'Esquina.', texto: 'La fachada se integra a la vida de la calle.' }
      ]
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
