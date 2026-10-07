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

  retrato: { foto: 'img/retrato.jpg', pie: 'Javier Puga, fundador.' },
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
      slug: 'casa-che-che', nombre: 'Casa Ché Ché', disciplina: 1, tipo: 'Residencial',
      anio: '2021', estado: '', ubicacion: 'Mérida', equipo: 'Javier Puga',
      portada: 'img/proyectos/casa-che-che/01.jpg', portadaProp: 1.5,
      concepto: 'Una casa para habitar el calor de Mérida con frescura: patios, sombra, celosía y aire en movimiento.',
      texto: "**Casa Che'Che'** nace de una intención esencial: habitar el clima cálido de Mérida mediante espacios frescos, sombreados y abiertos a la circulación natural del aire. Su nombre, asociado en lengua maya con la frescura, expresa la búsqueda que guía el proyecto: generar confort a través de estrategias pasivas, en diálogo con los materiales y las condiciones ambientales de la región.\n\nLa casa se organiza a partir de un trazo en zigzag que permite intercalar patios y jardines entre los volúmenes construidos. Estos vacíos articulan la vida interior y exterior, introducen luz natural y favorecen la ventilación cruzada. Cada ambiente encuentra así una relación cercana con la vegetación, el aire y los cambios de luz a lo largo del día.\n\nEn la fachada principal, un muro de celosía permite el paso de los vientos dominantes del norte hacia los patios. La orientación de los espacios, las superficies sombreadas y la presencia de agua en las áreas exteriores complementan esta estrategia y contribuyen a crear una atmósfera más fresca dentro de la vivienda.\n\nLa materialidad se construye con recursos de la región, como piedra, arena y maderas duras, que aportan textura, calidez y arraigo. La modulación constructiva permite optimizar los procesos de obra y ordenar la composición arquitectónica. Sobre esta base, las sombras de la propia casa y de la vegetación dibujan una atmósfera cambiante, que da profundidad y ritmo a los espacios.\n\nEl programa se distribuye en dos niveles. La planta baja reúne los accesos peatonal y vehicular, las áreas sociales y los servicios: cocina con desayunador, comedor, sala, medio baño y área de lavado. Patios y jardines acompañan estos espacios y prolongan sus vistas hacia el exterior. Al fondo, la alberca constituye un remate visual y un punto de encuentro vinculado con la vida al aire libre.\n\nLa planta alta alberga tres recámaras de distintas configuraciones, todas con iluminación y ventilación naturales. La principal, situada al fondo de la casa, integra baño completo, clóset y un balcón orientado hacia la alberca, que extiende el espacio privado hacia el paisaje del jardín.\n\nCasa Che'Che' reúne tradición constructiva y sensibilidad climática en una arquitectura que encuentra en su entorno los recursos para generar bienestar. La frescura se convierte en el principio que enlaza la forma, la materia y la experiencia cotidiana de habitar.",
      fotos: [
        { src: 'img/proyectos/casa-che-che/02.jpg', prop: 0.667, titulo: 'Fachada.', texto: 'Volúmenes de tierra entre la vegetación de Mérida.' },
        { src: 'img/proyectos/casa-che-che/03.jpg', prop: 1.5, titulo: 'Balcón.', texto: 'La recámara principal se asoma sobre el jardín.' },
        { src: 'img/proyectos/casa-che-che/04.jpg', prop: 1.5, titulo: 'Esquina.', texto: 'El muro de celosía deja pasar los vientos del norte.' },
        { src: 'img/proyectos/casa-che-che/17.jpg', prop: 0.667, titulo: 'Atardecer.', texto: 'La casa toma el color del cielo.' },
        { src: 'img/proyectos/casa-che-che/05.jpg', prop: 0.667, titulo: 'Sombra.', texto: 'Los árboles dibujan sobre los muros.' },
        { src: 'img/proyectos/casa-che-che/06.jpg', prop: 0.667, titulo: 'Pórtico.', texto: 'El acceso enmarca un patio con árbol.' },
        { src: 'img/proyectos/casa-che-che/07.jpg', prop: 0.667, titulo: 'Acceso.', texto: 'Volados y columnas ordenan la entrada.' },
        { src: 'img/proyectos/casa-che-che/09.jpg', prop: 0.667, titulo: 'Pasillo lateral.', texto: 'Un jardín angosto ventila la casa.' },
        { src: 'img/proyectos/casa-che-che/19.jpg', prop: 1.5, titulo: 'Celosía.', texto: 'Luz y aire atraviesan el muro perimetral.' },
        { src: 'img/proyectos/casa-che-che/18.jpg', prop: 0.667, titulo: 'Patio.', texto: 'Un rincón exterior junto a las recámaras.' },
        { src: 'img/proyectos/casa-che-che/08.jpg', prop: 0.667, titulo: 'Escalera.', texto: 'Peldaños de concreto y barandal de madera oscura.' },
        { src: 'img/proyectos/casa-che-che/11.jpg', prop: 1.5, titulo: 'Circulación.', texto: 'Cortinas de lino filtran la luz.' },
        { src: 'img/proyectos/casa-che-che/16.jpg', prop: 1.5, titulo: 'Sala.', texto: 'Abierta al jardín y a la alberca.' },
        { src: 'img/proyectos/casa-che-che/12.jpg', prop: 1.5, titulo: 'Comedor.', texto: 'Mobiliario en madera oscura.' },
        { src: 'img/proyectos/casa-che-che/13.jpg', prop: 1.5, titulo: 'Planta alta.', texto: 'Un ventanal alto ilumina el pasillo.' },
        { src: 'img/proyectos/casa-che-che/14.jpg', prop: 1.5, titulo: 'Recámara principal.', texto: 'Con balcón hacia la alberca.' },
        { src: 'img/proyectos/casa-che-che/15.jpg', prop: 1.5, titulo: 'Baño.', texto: 'Arena, madera y mosaico.' },
        { src: 'img/proyectos/casa-che-che/25.jpg', prop: 0.667, titulo: 'Hamaca.', texto: 'Un patio sombreado para el descanso.' },
        { src: 'img/proyectos/casa-che-che/10.jpg', prop: 0.667, titulo: 'Alberca.', texto: 'El remate visual al fondo de la casa.' },
        { src: 'img/proyectos/casa-che-che/24.jpg', prop: 1.5, titulo: 'Jardín.', texto: 'Columnas, sombra y agua.' },
        { src: 'img/proyectos/casa-che-che/20.jpg', prop: 0.667, titulo: 'Pórtico al anochecer.', texto: 'La vida al aire libre.' },
        { src: 'img/proyectos/casa-che-che/23.jpg', prop: 1.334, titulo: 'Vista aérea.', texto: 'El volumen entre los árboles.' },
        { src: 'img/proyectos/casa-che-che/22.jpg', prop: 1.334, titulo: 'Desde arriba.', texto: 'Alberca, jardín y celosía.' },
        { src: 'img/proyectos/casa-che-che/21.jpg', prop: 1.334, titulo: 'Planta.', texto: 'El trazo en zigzag intercala patios y jardines.' }
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
      slug: 'panaderia-costra', nombre: 'Costra', disciplina: 2, tipo: 'Cafetería / Panadería',
      anio: '2020', estado: '', ubicacion: 'Ciudad de México', equipo: 'Javier Puga',
      portada: 'img/proyectos/panaderia-costra/01.jpg', portadaProp: 1.874,
      concepto: 'Tierra, fuego y metal: una panadería de barrio pensada como un horno.',
      texto: "Ubicada en la Ciudad de México, **Costra** es una panadería y cafetería concebida como una experiencia sensorial. El color, la luz, las texturas y los aromas construyen una atmósfera de cercanía, donde el pan y el café son protagonistas y, al mismo tiempo, el origen del lenguaje arquitectónico.\n\nEl proyecto encuentra su inspiración en los procesos que transforman ambos productos, desde el cultivo de sus ingredientes hasta el horneado del pan y el tostado del café. De esta lectura surgen tres elementos que orientan el diseño: tierra, fuego y metal. Su presencia se expresa en una paleta de materiales y en decisiones espaciales que vinculan el trabajo artesanal con el lugar donde se disfruta.\n\nLa iluminación cálida y los tonos terrosos evocan el interior de un horno. En los muros, un sutil degradado remite a los cambios de color del pan durante la cocción y a la costra que da nombre al proyecto. El acero introduce la precisión y el carácter industrial de los equipos de producción, en equilibrio con la calidez de las superficies y el cuidado de los detalles.\n\nLa barra remetida es uno de los gestos que definen la relación del local con su entorno. Su disposición facilita la circulación y abre un vínculo visual y físico con la calle, recuperando el espíritu de la panadería de barrio: un lugar cercano, cotidiano y acogedor. Al caer la noche, la iluminación en tonos naranjas acentúa la profundidad del espacio y lo convierte en un refugio cálido, donde el fuego se evoca como símbolo de transformación y encuentro.\n\nEn el corazón del local, un muro de exhibición presenta el pan con la atención que se dedica a una pieza de arte. Cada variedad forma parte de una composición que destaca sus formas, texturas y cualidades, y celebra el oficio detrás de su elaboración. Un área de personalización con espejos incorpora una dimensión lúdica e invita a los visitantes a capturar su **#MomentoCostra**, extendiendo la experiencia más allá del espacio físico.\n\nCostra traduce los procesos y la materia del pan y del café en una arquitectura que despierta los sentidos. Su identidad se construye desde la calidez, el detalle y la relación con la calle, para hacer de una visita cotidiana un momento de encuentro y pertenencia.",
      fotos: [
        { src:"img/proyectos/panaderia-costra/02.jpg", prop:0.667, titulo:"La calle.", texto:"La barra remetida abre el local a la banqueta y recupera el espíritu de la panadería de barrio." },
        { src:"img/proyectos/panaderia-costra/03.jpg", prop:0.667, titulo:"Acceso.", texto:"Un umbral cálido que anuncia el interior desde la calle." },
        { src:"img/proyectos/panaderia-costra/04.jpg", prop:1.5, titulo:"Interior.", texto:"Tierra, fuego y metal: tonos terrosos, luz cálida y acero." },
        { src:"img/proyectos/panaderia-costra/05.jpg", prop:1.5, titulo:"Muro de exhibición.", texto:"El pan presentado con la atención que se dedica a una pieza de arte." },
        { src:"img/proyectos/panaderia-costra/06.jpg", prop:1.5, titulo:"Mesas y muro de pan.", texto:"El pan como protagonista y origen del lenguaje del espacio." },
        { src:"img/proyectos/panaderia-costra/07.jpg", prop:1.5, titulo:"Barra.", texto:"La precisión del acero junto a la calidez de las superficies." },
        { src:"img/proyectos/panaderia-costra/08.jpg", prop:0.667, titulo:"Luz.", texto:"La iluminación cálida evoca el interior de un horno." },
        { src:"img/proyectos/panaderia-costra/09.jpg", prop:0.667, titulo:"Rincón.", texto:"Texturas y materia que remiten a la costra del pan." },
        { src:"img/proyectos/panaderia-costra/10.jpg", prop:0.667, titulo:"Banca.", texto:"Un degradado sutil en los muros recuerda la cocción del pan." },
        { src:"img/proyectos/panaderia-costra/11.jpg", prop:0.667, titulo:"#MomentoCostra.", texto:"Un área de espejos que invita a capturar la visita." }
      ]
    }
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
