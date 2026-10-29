/* =========================================================
   PUGA STUDIO · Contenido del sitio
   Todo lo que se lee en la página sale de este archivo.
   Para cambiar un texto o una foto solo se edita aquí.
   Fotos: van en la carpeta img/ y se escriben con su ruta,
   por ejemplo 'img/proyectos/casa-che-che/01.jpg'.
   Si una foto está vacía ('') se muestra un recuadro gris.
   Disciplinas: 1 Sólidos · 2 Lo Interior · 3 Montañismo · 4 Taller de Sombras · 5 Circular
   ========================================================= */
window.PUGA = {

  /* Portada del inicio (manual de marca): frase del manifiesto y frase de firma */
  manifiesto: 'Diseñamos espacios que cuentan una historia.',
  frase: 'Que empiece la obra.',
  /* Ventana de la portada: cada visita muestra uno de estos proyectos recortado en su letra del logo (p, u, g, a) */
  ventanas: [
    { proyecto: 'casa-che-che', letra: 'a', foto: 'img/proyectos/casa-che-che/01.jpg' },
    { proyecto: 'panaderia-costra', letra: 'g', foto: 'img/proyectos/panaderia-costra/01.jpg' },
    { proyecto: 'ono-poke-house', letra: 'u', foto: 'img/proyectos/ono-poke-house/01.jpg' },
    { proyecto: 'entre-santos', letra: 'p', foto: 'img/proyectos/entre-santos/01.jpg' },
    { proyecto: 'shell-taanah', letra: 'u', foto: 'img/proyectos/shell-taanah/01.jpg' },
    { proyecto: 'fabrica-tulum', letra: 'g', foto: 'img/proyectos/fabrica-tulum/01.jpg' },
    { proyecto: 'ritual-reflejo', letra: 'a', foto: 'img/proyectos/ritual-reflejo/01.jpg' }
  ],

  acerca: "**Puga Studio** es un estudio de arquitectura, interiorismo, diseño de mobiliario y arte objeto fundado en 2017 por Javier Puga. Su trayectoria abarca el diseño y la construcción de proyectos residenciales, hoteleros y comerciales, incluidos restaurantes, cafeterías y residencias privadas, con experiencia en entregas bajo la modalidad llave en mano.\n\nCada proyecto se desarrolla a partir de un concepto que integra la historia del lugar, las formas de habitar y los saberes del oficio local. Esta visión orienta las decisiones de diseño y articula una propuesta coherente, desde la concepción arquitectónica hasta el mobiliario y los detalles.\n\nEl estudio también ha colaborado con marcas internacionales de hospitalidad en el desarrollo de sus proyectos.",

  retrato: { foto: 'img/retrato.jpg', pie: 'Javier Puga, fundador.' },
  fotoEquipo: { foto: '', pie: 'El equipo de Puga Studio en Ciudad de México.' },
  plano: '',   /* plano del estudio en lima */

  /* Disciplinas del estudio: bloque lima del inicio y nombres del índice de proyectos.
     palabras: términos del buscador (sin acentos) que muestran los proyectos de esa disciplina */
  disciplinas: [
    { num: 1, nombre: 'Sólidos', area: 'Arquitectura', texto: 'Diseño arquitectónico integral, desde la primera idea hasta la obra terminada. Nuestro alcance comprende asesoría, proyecto conceptual, proyecto esquemático, desarrollo de diseño, proyecto ejecutivo, supervisión y construcción.',
      palabras: ['arquitectura', 'arquitectonico', 'arquitectonica', 'arquitecto', 'solidos', 'solido', 'construccion', 'construir', 'obra', 'obras', 'edificio', 'edificios', 'supervision', 'diseno'] },
    { num: 2, nombre: 'Lo Interior', area: 'Diseño de interiores y atmósferas', texto: 'Diseño de espacios interiores y de las atmósferas que los definen: luz, materia, color y forma de habitar. Nuestro alcance comprende asesoría, proyecto conceptual, proyecto esquemático, desarrollo de diseño, proyecto ejecutivo, supervisión y construcción.',
      palabras: ['interiorismo', 'interiores', 'interior', 'interiorista', 'atmosfera', 'atmosferas', 'ambientes', 'diseno'] },
    { num: 3, nombre: 'Montañismo', area: 'Diseño de mobiliario y objetos funcionales', texto: 'Mobiliario y objetos funcionales concebidos en diálogo con el espacio que habitan. El proceso abarca proyecto conceptual, proyecto esquemático, desarrollo de diseño, ejecución y montaje.',
      palabras: ['mobiliario', 'mueble', 'muebles', 'montanismo', 'objeto', 'objetos', 'funcionales', 'silla', 'sillas', 'mesa', 'mesas', 'diseno'] },
    { num: 4, nombre: 'Taller de Sombras', area: 'Arte objeto', texto: 'Piezas de autor de pintura, escultura y mobiliario funcional concebido como obra. Un espacio de exploración libre sobre la forma, la materia y la sombra.',
      palabras: ['arte', 'artistico', 'artistica', 'pintura', 'pinturas', 'escultura', 'esculturas', 'sombras', 'taller', 'pieza', 'piezas', 'objeto', 'objetos'] },
    { num: 5, nombre: 'Circular', area: 'Textos del estudio', texto: 'El blog del estudio: notas de obra, materiales, oficios y referencias. Lo que pensamos mientras diseñamos.',
      palabras: ['circular', 'blog', 'texto', 'textos', 'notas', 'lecturas'] }
  ],

  equipo: [
    { nombre: 'Javier Puga', puesto: 'Fundador' }
  ],

  contacto: {
    newsletter: 'https://994fd96d.sibforms.com/serve/MUIFAG-PKQ437Atqu8Dr41RarnOHdhr7Ku44zUhki5FQFEiLlB0TvnDXSiGSV0JIIIhi60Bia33nexOW2jOzxshsL15SIhJbRE4cQCcfVRcWhzzuhS7Pxi5YhgxjuUTgnqEUOOsO5-mDkgIK07SqJbjgWQzZCyPQeuKm_oXbt1mHBCP9hwFvxkW1Y-aYcCy-0wd5JOiIn510XiwloQ==',
    correo: 'javier@pugastudio.com',
    instagram: 'puga_studio',
    telefono: '+52 55 7408 3755',
    estudio: 'Ciudad de México',
    texto: 'Puga Studio trabaja en Ciudad de México, Puerto Escondido, Mérida, Tulum y Cabo, con artesanos y talleres locales en cada proyecto, respetando la historia, el oficio y el paisaje de cada lugar.',
    pegaso: 'img/pegaso-negro.svg'  /* pegaso elegido 23.10.26, en negro */
  },

  proyectos: [
    {
      slug: 'ritual-reflejo', nombre: 'Ritual Reflejo', disciplina: 4, tipo: 'Pieza única',
      anio: '2026', estado: '', ubicacion: '', equipo: 'Javier Puga',
      portada: 'img/proyectos/ritual-reflejo/01.jpg', portadaProp: 1.333,
      concepto: 'Un espejo de mármol negro y porcelanato que retoma el ritual mexica del espejo de obsidiana: un objeto que no solo se contempla, devuelve la mirada.',
      texto: "**Ritual Reflejo** es una pieza única que traduce al lenguaje del objeto contemporáneo la lógica ritual del pensamiento mesoamericano. Con materiales oscuros y técnicas actuales como el corte láser y el corte por agua, retoma una memoria material y simbólica y la vuelve presente.\n\n**El concepto.** El punto de partida es el ritual mexica del espejo de obsidiana, asociado a Tezcatlipoca, el \"espejo humeante\", deidad del inframundo y de la introspección. En esta práctica, el sacerdote o iniciado, después de consumir sustancias psicoactivas, se enfrentaba a su reflejo en la superficie pulida de la obsidiana. Era una confrontación con sus propias sombras y con aquello que debía trabajar en sí mismo: una forma ancestral de terapia ritual.\n\n**La materia.** La pieza lleva esa idea a un lenguaje oscuro y denso. Mármoles negros en distintas tonalidades se superponen en capas para crear profundidad cromática, como una superficie que invita a mirar hacia dentro. Sobre porcelanato, el corte láser o por chorro de agua talla texturas de alto relieve inspiradas en la estética maya.\n\nEl resultado es un objeto que no solo se contempla: devuelve la mirada.",
      fotos: [
        { src: 'img/proyectos/ritual-reflejo/02.jpg', prop: 0.667, titulo: 'Devolver la mirada.', texto: 'En el centro, un espejo: quien se acerca se encuentra consigo mismo.' },
        { src: 'img/proyectos/ritual-reflejo/03.jpg', prop: 1.333, titulo: 'La pieza.', texto: 'Placas de mármol negro y porcelanato que giran alrededor de un círculo.' },
        { src: 'img/proyectos/ritual-reflejo/04.jpg', prop: 0.75, titulo: 'Frente al reflejo.', texto: 'La escala obliga a detenerse y mirar.' },
        { src: 'img/proyectos/ritual-reflejo/05.jpg', prop: 1.333, titulo: 'Superficie oscura.', texto: 'El brillo del porcelanato devuelve el espacio, deformado y en penumbra.' },
        { src: 'img/proyectos/ritual-reflejo/06.jpg', prop: 0.75, titulo: 'El centro.', texto: 'Un anillo de mármol enmarca el espejo, como el ojo de la obsidiana.' },
        { src: 'img/proyectos/ritual-reflejo/07.jpg', prop: 0.667, titulo: 'Introspección.', texto: 'El reflejo aparece entre las vetas.' },
        { src: 'img/proyectos/ritual-reflejo/08.jpg', prop: 0.75, titulo: 'Confrontación.', texto: 'Mirarse como lo hacía el iniciado frente al espejo humeante.' },
        { src: 'img/proyectos/ritual-reflejo/09.jpg', prop: 0.75, titulo: 'Suspendida.', texto: 'La pieza cuelga del techo y flota delante del muro.' },
        { src: 'img/proyectos/ritual-reflejo/10.jpg', prop: 1.333, titulo: 'Taller.', texto: 'Las placas armadas por primera vez sobre la mesa de trabajo.' },
        { src: 'img/proyectos/ritual-reflejo/11.jpg', prop: 1.333, titulo: 'Desde arriba.', texto: 'Tonalidades de negro y gris que se superponen en capas.' },
        { src: 'img/proyectos/ritual-reflejo/v1.mp4', prop: 1.777, titulo: 'Capas.', texto: 'Recorrido por las placas en el taller.' },
        { src: 'img/proyectos/ritual-reflejo/12.jpg', prop: 1.333, titulo: 'El círculo.', texto: 'Mármol negro de vetas blancas alrededor del espejo.' },
        { src: 'img/proyectos/ritual-reflejo/13.jpg', prop: 0.75, titulo: 'Detalle.', texto: 'Cortes precisos por láser y chorro de agua.' },
        { src: 'img/proyectos/ritual-reflejo/v2.mp4', prop: 1.777, titulo: 'Materia.', texto: 'Superficies pulidas y texturas de alto relieve.' },
        { src: 'img/proyectos/ritual-reflejo/v3.mp4', prop: 1.777, titulo: 'Reflejo.', texto: 'El espejo central devuelve el taller.' },
        { src: 'img/proyectos/ritual-reflejo/14.jpg', prop: 1.333, titulo: 'Trazo.', texto: 'El croquis de la composición, a mano sobre papel cuadriculado.' },
        { src: 'img/proyectos/ritual-reflejo/15.jpg', prop: 0.75, titulo: 'Despiece.', texto: 'Cada placa numerada y acotada antes del corte.' },
        { src: 'img/proyectos/ritual-reflejo/16.jpg', prop: 1.333, titulo: 'Geometría.', texto: 'Los trazos guía que ordenan los rayos.' },
        { src: 'img/proyectos/ritual-reflejo/17.jpg', prop: 0.75, titulo: 'Llegada.', texto: 'Las piezas protegidas, presentadas en el suelo antes del montaje.' },
        { src: 'img/proyectos/ritual-reflejo/18.jpg', prop: 0.75, titulo: 'Estructura.', texto: 'Un bastidor metálico suspendido recibe el disco central.' },
        { src: 'img/proyectos/ritual-reflejo/19.jpg', prop: 0.75, titulo: 'Montaje.', texto: 'Las placas se fijan una a una sobre la estructura.' },
        { src: 'img/proyectos/ritual-reflejo/20.jpg', prop: 0.75, titulo: 'Casi completa.', texto: 'La composición toma forma frente al muro.' }
      ]
    },
    {
      slug: 'fabrica-tulum', nombre: 'Fábrica Tulum', disciplina: 1, tipo: 'Conjunto habitacional',
      anio: '2023', estado: '', ubicacion: 'Tulum', equipo: 'Javier Puga',
      portada: 'img/proyectos/fabrica-tulum/01.jpg', portadaProp: 1.777,
      concepto: 'Un conjunto de 81 departamentos que imagina una fábrica abandonada reclamada por la jungla, construido con materiales que vuelven a usarse.',
      texto: "**Fábrica Tulum** es un conjunto habitacional de 81 departamentos que parte de una imagen precisa: una fábrica abandonada que la jungla ha ido reclamando. La intención es lograr una simbiosis entre lo construido y el paisaje que lo rodea, como si la arquitectura y la vegetación hubieran aprendido a convivir con el tiempo.\n\nEl concepto se sostiene en el reúso. Los elementos decorativos se construyen con piezas metálicas recuperadas, el sargazo se integra como pigmento para dar color a distintos elementos, y los plásticos encontrados en el mar se transforman en pisos resistentes al clima de Tulum. Cada material tiene una segunda vida, y el proyecto asume la sostenibilidad como parte de su identidad, no como un añadido.\n\nEl acceso principal se ubica en la esquina noroeste del terreno. Un alto volumen de concreto sostiene una estructura de madera en forma de embudo que evoca un silo industrial. Funciona como recepción y zona de espera para visitantes, y anuncia desde la llegada el carácter del conjunto. Al sur, centrado en el terreno, el acceso secundario se resuelve con una estructura de madera y una puerta con control de acceso por tarjeta.\n\nLos edificios de vivienda son de dos niveles y se componen de tres volúmenes en forma de cápsula. Su altura queda por debajo de la copa de los árboles existentes, de modo que se pierden dentro del paisaje. En planta baja hay dos departamentos, cada uno con recámara, baño completo, sala-comedor, cocina y terraza con bodega de servicio y alberca en la parte superior, con la opción de sumar una recámara adicional con baño. En el primer nivel, un tercer departamento repite el programa con una terraza de mayor tamaño.\n\nDentro, la materia es serena: muros curvos de acabado mineral, maderas en puertas, celosías y mobiliario, fibras naturales, cocinas de obra con detalles de cobre y baños de color rosa, de muros y lavabos continuos.\n\nLos edificios se emplazan de manera aleatoria. Esa libertad permite que cada departamento tenga un acceso privado y da origen a caminos de formas orgánicas que conectan todo el conjunto. Donde los caminos se encuentran aparecen pequeñas plazas, marcadas por maquinaria en desuso que se convierte en hito y memoria de la fábrica.\n\nJunto al acceso principal se ubica el edificio de amenidades. Un espacio que evoca ruinas arqueológicas, con arcos mayas, alberga camastros, hamacas y una amplia alberca al centro. A un costado, un restaurante abierto a residentes y comensales externos, con barra, área de mesas, baños, zona de preparación de alimentos y bebidas, y una terraza en el primer nivel.\n\nSiete locales comerciales, cinco grandes y dos de menor tamaño, se distribuyen en distintos puntos del conjunto. Tienen muros de piedra, louvers en la parte superior y puertas pivotantes bajo una cubierta de losacero, e incluyen barra de obra y sanitario. Están pensados para restaurantes y tiendas orgánicas. El conjunto se completa con un espacio para mascotas, bancas a lo largo de todo el proyecto, estacionamiento perimetral con un amplio cajón asignado por departamento y lugares para bicicletas.",
      fotos: [
        { src: 'img/proyectos/fabrica-tulum/02.jpg', prop: 1.791, titulo: 'Desde arriba.', texto: 'Cápsulas verdes, albercas y terrazas bajo la copa de los árboles.' },
        { src: 'img/proyectos/fabrica-tulum/03.jpg', prop: 1.777, titulo: 'El conjunto.', texto: 'Los edificios se pierden dentro de la jungla.' },
        { src: 'img/proyectos/fabrica-tulum/04.jpg', prop: 1.777, titulo: 'Acceso principal.', texto: 'Un volumen de concreto sostiene un embudo de madera, como un silo.' },
        { src: 'img/proyectos/fabrica-tulum/05.jpg', prop: 1.777, titulo: 'Acceso secundario.', texto: 'Una estructura de madera abre el paso hacia el sur.' },
        { src: 'img/proyectos/fabrica-tulum/06.jpg', prop: 1.777, titulo: 'Local comercial.', texto: 'Muros de piedra, puertas pivotantes y louvers bajo la cubierta.' },
        { src: 'img/proyectos/fabrica-tulum/07.jpg', prop: 1.791, titulo: 'Restaurante.', texto: 'Muros de piedra abiertos a la calle y a los residentes.' },
        { src: 'img/proyectos/fabrica-tulum/08.jpg', prop: 1.777, titulo: 'Amenidades.', texto: 'Arcos que evocan ruinas mayas, con hamacas y camastros.' },
        { src: 'img/proyectos/fabrica-tulum/09.jpg', prop: 1.777, titulo: 'Entre ruinas.', texto: 'Los arcos dialogan con la vegetación y el restaurante al fondo.' },
        { src: 'img/proyectos/fabrica-tulum/10.jpg', prop: 1.777, titulo: 'Plaza.', texto: 'Maquinaria en desuso convertida en hito.' },
        { src: 'img/proyectos/fabrica-tulum/11.jpg', prop: 1.777, titulo: 'Pasaje.', texto: 'Muros curvos y enredaderas a ambos lados.' },
        { src: 'img/proyectos/fabrica-tulum/12.jpg', prop: 1.777, titulo: 'Caminos.', texto: 'Senderos orgánicos que llevan a cada departamento.' },
        { src: 'img/proyectos/fabrica-tulum/13.jpg', prop: 1.777, titulo: 'Memoria industrial.', texto: 'Piezas de metal recuperado entre palmas.' },
        { src: 'img/proyectos/fabrica-tulum/14.jpg', prop: 1.777, titulo: 'Recorrido.', texto: 'La jungla entra hasta la puerta de cada casa.' },
        { src: 'img/proyectos/fabrica-tulum/15.jpg', prop: 1.777, titulo: 'Jardín.', texto: 'Cada departamento llega por su propio acceso.' },
        { src: 'img/proyectos/fabrica-tulum/16.jpg', prop: 1, titulo: 'Recepción.', texto: 'Un arco de piedra recibe a los visitantes.' },
        { src: 'img/proyectos/fabrica-tulum/17.jpg', prop: 1, titulo: 'Espera.', texto: 'Una banca curva bajo el arco y luz cenital.' },
        { src: 'img/proyectos/fabrica-tulum/18.jpg', prop: 1, titulo: 'Sala.', texto: 'Un sillón continuo sigue la curva del muro.' },
        { src: 'img/proyectos/fabrica-tulum/19.jpg', prop: 1, titulo: 'Comedor.', texto: 'Madera, fibras naturales y vanos hacia el jardín.' },
        { src: 'img/proyectos/fabrica-tulum/20.jpg', prop: 1, titulo: 'Estancia.', texto: 'Doble altura, celosías de madera y luz filtrada.' },
        { src: 'img/proyectos/fabrica-tulum/21.jpg', prop: 1, titulo: 'Cocina.', texto: 'Muebles de obra, madera y cobre.' },
        { src: 'img/proyectos/fabrica-tulum/22.jpg', prop: 1, titulo: 'Barra.', texto: 'Una barra curva de obra con cubierta de cobre.' },
        { src: 'img/proyectos/fabrica-tulum/23.jpg', prop: 1, titulo: 'Recámara.', texto: 'Muros de cal, madera y un tapete de fibra.' },
        { src: 'img/proyectos/fabrica-tulum/24.jpg', prop: 1, titulo: 'Descanso.', texto: 'Luz baja y texturas cálidas.' },
        { src: 'img/proyectos/fabrica-tulum/25.jpg', prop: 1, titulo: 'Recámara principal.', texto: 'Un muro de madera guarda el clóset.' },
        { src: 'img/proyectos/fabrica-tulum/26.jpg', prop: 1, titulo: 'Atardecer.', texto: 'La luz del trópico entra por la ventana.' },
        { src: 'img/proyectos/fabrica-tulum/27.jpg', prop: 1, titulo: 'Baño.', texto: 'Un baño de color rosa, de muros y lavabo continuos.' },
        { src: 'img/proyectos/fabrica-tulum/28.jpg', prop: 1, titulo: 'Nicho.', texto: 'Un arco enmarca el sanitario.' },
        { src: 'img/proyectos/fabrica-tulum/29.jpg', prop: 1, titulo: 'Regadera.', texto: 'Un cancel de vidrio estriado con marco de madera.' }
      ]
    },
    {
      slug: 'shell-taanah', nombre: 'Shell Taanah', disciplina: 1, tipo: 'Residencial',
      anio: '2020', estado: '', ubicacion: 'Tulum', equipo: 'Javier Puga',
      portada: 'img/proyectos/shell-taanah/01.jpg', portadaProp: 1.777,
      concepto: 'Una casa de espacios sinuosos y superficies blancas, como conchas en la arena, donde la flora existente forma parte del espacio.',
      texto: "**Shell Taanah** es una casa privada de espacios sinuosos. Sus superficies blancas y curvas recuerdan a las conchas que el mar deja en la arena.\n\nEl concepto parte de una intención clara: vivir en conexión con el ecosistema. Los árboles existentes se conservan y atraviesan terrazas, puentes y la propia alberca. La flora se vuelve parte del espacio, tan presente en la casa como quienes la habitan.\n\nLa alberca organiza el programa arquitectónico. Al separar los espacios con el agua y unirlos con puentes y escaleras de peldaños de vidrio que la cruzan, la casa se percibe mucho más amplia de lo que es. Cada traslado se convierte en un recorrido, y en cada recorrido aparece la naturaleza.\n\nEn planta baja, la alberca retoma la forma y la atmósfera de un cenote: una cascada, sombra, frescura y calma. A su alrededor se abren la sala, el comedor y la cocina, con una isla curva de sodalita azul.\n\nLa materialidad es serena: muros blancos de trazo curvo, un muro de textura estriada, maderas en tono natural en puertas, barandales y mobiliario, y ratán en cocina y recámaras. Las recámaras se abren a terrazas entre las copas de los árboles.\n\nEn la azotea, bajo una pérgola de madera curva, una segunda alberca se abre al cielo para disfrutar del sol. Vista desde arriba, la cubierta completa la idea que da nombre a la casa: una concha posada entre la vegetación.",
      fotos: [
        { src: 'img/proyectos/shell-taanah/02.jpg', prop: 1.777, titulo: 'Calle.', texto: 'La casa entre los árboles, a nivel de banqueta.' },
        { src: 'img/proyectos/shell-taanah/03.jpg', prop: 1.777, titulo: 'Fachada.', texto: 'Muros blancos y un muro de textura estriada hacia la calle.' },
        { src: 'img/proyectos/shell-taanah/04.jpg', prop: 1.777, titulo: 'Patio de acceso.', texto: 'Los árboles existentes crecen junto a los muros curvos.' },
        { src: 'img/proyectos/shell-taanah/05.jpg', prop: 1.777, titulo: 'Acceso.', texto: 'Una puerta de madera y un vano que deja ver el comedor.' },
        { src: 'img/proyectos/shell-taanah/06.jpg', prop: 1.791, titulo: 'Cenote.', texto: 'Una cascada cae sobre la alberca de planta baja.' },
        { src: 'img/proyectos/shell-taanah/07.jpg', prop: 1.777, titulo: 'Alberca.', texto: 'El agua separa los espacios y los árboles crecen desde la terraza.' },
        { src: 'img/proyectos/shell-taanah/08.jpg', prop: 1.777, titulo: 'Patio central.', texto: 'La sala se abre al agua y a la vegetación.' },
        { src: 'img/proyectos/shell-taanah/09.jpg', prop: 1.791, titulo: 'Desde el puente.', texto: 'La alberca vista desde arriba.' },
        { src: 'img/proyectos/shell-taanah/10.jpg', prop: 1.777, titulo: 'Hacia el cielo.', texto: 'Un árbol atraviesa los puentes que unen la casa.' },
        { src: 'img/proyectos/shell-taanah/11.jpg', prop: 1.791, titulo: 'Puente.', texto: 'Peldaños de vidrio sobre el agua.' },
        { src: 'img/proyectos/shell-taanah/12.jpg', prop: 1.777, titulo: 'Escalera.', texto: 'Del muro curvo a la azotea, bajo la pérgola.' },
        { src: 'img/proyectos/shell-taanah/13.jpg', prop: 1.777, titulo: 'Ascenso.', texto: 'Peldaños de vidrio y barandal de madera.' },
        { src: 'img/proyectos/shell-taanah/14.jpg', prop: 1.791, titulo: 'Recorrido.', texto: 'Cada traslado cruza la vegetación.' },
        { src: 'img/proyectos/shell-taanah/15.jpg', prop: 1.791, titulo: 'Sala.', texto: 'Muros curvos, madera y luz filtrada.' },
        { src: 'img/proyectos/shell-taanah/16.jpg', prop: 1.777, titulo: 'Cocina.', texto: 'Una isla curva de sodalita azul.' },
        { src: 'img/proyectos/shell-taanah/17.jpg', prop: 1.777, titulo: 'Comedor.', texto: 'Madera, ratán y la cocina al fondo.' },
        { src: 'img/proyectos/shell-taanah/18.jpg', prop: 1.777, titulo: 'Comedor al patio.', texto: 'Grandes vanos abiertos a la vegetación.' },
        { src: 'img/proyectos/shell-taanah/19.jpg', prop: 1.777, titulo: 'Recámara.', texto: 'Un tronco atraviesa el espacio.' },
        { src: 'img/proyectos/shell-taanah/20.jpg', prop: 1.791, titulo: 'Recámara principal.', texto: 'Abierta a una terraza entre los árboles.' },
        { src: 'img/proyectos/shell-taanah/21.jpg', prop: 1.777, titulo: 'Recámara.', texto: 'Vanos de piso a techo hacia el jardín.' },
        { src: 'img/proyectos/shell-taanah/22.jpg', prop: 1.777, titulo: 'Baño.', texto: 'Una tina de muros curvos con ventana al jardín.' },
        { src: 'img/proyectos/shell-taanah/23.jpg', prop: 0.747, titulo: 'Baño de visitas.', texto: 'Un tragaluz y una enredadera.' },
        { src: 'img/proyectos/shell-taanah/24.jpg', prop: 1.791, titulo: 'Pérgola.', texto: 'Una cubierta de madera curva corona la azotea.' },
        { src: 'img/proyectos/shell-taanah/25.jpg', prop: 1.777, titulo: 'Azotea.', texto: 'Gradas blancas hacia la segunda alberca.' },
        { src: 'img/proyectos/shell-taanah/26.jpg', prop: 1.777, titulo: 'Sol.', texto: 'Camastros a la sombra de la pérgola.' },
        { src: 'img/proyectos/shell-taanah/27.jpg', prop: 1.777, titulo: 'Alberca de azotea.', texto: 'Entre las copas de los árboles.' },
        { src: 'img/proyectos/shell-taanah/28.jpg', prop: 1.777, titulo: 'Encuentro.', texto: 'Bancas curvas alrededor del agua.' },
        { src: 'img/proyectos/shell-taanah/29.jpg', prop: 1.791, titulo: 'Desde arriba.', texto: 'La cubierta dibuja una concha entre la vegetación.' }
      ]
    },
    {
      slug: 'entre-santos', nombre: 'Entre Santos', disciplina: 2, tipo: 'Restaurante / Bar',
      anio: '2023', estado: '', ubicacion: 'Mérida', equipo: 'Javier Puga',
      portada: 'img/proyectos/entre-santos/01.jpg', portadaProp: 1.791,
      concepto: 'Restaurante de día y bar de noche: arcos, cortinas y luz que traducen el nombre de la marca en una casona colonial de Mérida.',
      texto: "**Entre Santos** es restaurante de día y bar de noche en Mérida. Su cocina une la tradición española con los sabores de Yucatán, y el espacio cuenta ese mismo encuentro entre dos herencias.\n\nEl proyecto ocupa una casona colonial de esquina, de muros altos y vanos enmarcados en cantera. El concepto parte del nombre de la marca: retomamos el lenguaje de iglesias y templos, con arcos de medio punto, nichos de azulejo verde, figuras devocionales y contrabarras de perfil barroco enmarcadas en latón, para crear una atmósfera de recogimiento que dialoga con el carácter de la ciudad. Los aplanados originales se conservan con sus capas y su desgaste, bajo techos de vigas de madera, para que el lugar se sienta como si siempre hubiera estado ahí.\n\nDentro, cortinas de lino de piso a techo forman los muros. En ellas se recortan arcos y aberturas orgánicas que enmarcan las vistas de un salón a otro, dejan pasar la luz y generan una comunicación visual constante con el exterior. Al moverse con el aire, dan al espacio un ritmo que cambia a lo largo del día.\n\nEl mobiliario completa el relato: una barra de madera tallada, lámparas de globos de cristal, faroles de papel y, en la sala de juegos, mesas hechas con antiguas puertas de madera y herrajes de hierro.\n\nAl caer la noche, el espacio se transforma. Una iluminación en tonos fríos, verdes, azules y violetas, inspirada en los colores que la cultura maya usaba en sus murales y ornamentos, tiñe cortinas y muros. Los sanitarios llevan esa idea al extremo: un cuarto de azulejo blanco bañado en luz violeta, con esculturas clásicas y esferas de espejo suspendidas.\n\nAl fondo, un patio de arcos de piedra se abre al cielo. Alrededor de una barra circular de piedra verde, la vegetación y la luz natural recuperan la vida al aire libre de la casa yucateca.\n\nEntre Santos ofrece así dos experiencias en un mismo lugar: la calma luminosa del día y una noche más íntima y envolvente.",
      fotos: [
        { src: 'img/proyectos/entre-santos/02.jpg', prop: 1.791, titulo: 'Fachada.', texto: 'Una casona colonial de esquina en el centro de Mérida.' },
        { src: 'img/proyectos/entre-santos/03.jpg', prop: 1.791, titulo: 'Acceso.', texto: 'Un vano de cantera deja ver la barra desde la calle.' },
        { src: 'img/proyectos/entre-santos/04.jpg', prop: 1.791, titulo: 'Barra.', texto: 'Madera tallada bajo una constelación de globos de cristal.' },
        { src: 'img/proyectos/entre-santos/05.jpg', prop: 1.791, titulo: 'Salón.', texto: 'Vigas de madera, aplanados originales y cortinas de lino.' },
        { src: 'img/proyectos/entre-santos/06.jpg', prop: 1.791, titulo: 'Contrabarra.', texto: 'Un perfil barroco enmarcado en latón, como un retablo.' },
        { src: 'img/proyectos/entre-santos/07.jpg', prop: 1.791, titulo: 'La barra al fondo.', texto: 'La luz del patio entra por el vano abierto.' },
        { src: 'img/proyectos/entre-santos/08.jpg', prop: 0.558, titulo: 'Umbral.', texto: 'Arcos recortados en las cortinas enlazan un salón con otro.' },
        { src: 'img/proyectos/entre-santos/09.jpg', prop: 1.791, titulo: 'Arco.', texto: 'Un nicho de azulejo verde remata la mesa.' },
        { src: 'img/proyectos/entre-santos/10.jpg', prop: 1.791, titulo: 'Comedor.', texto: 'Faroles de papel y un arco de medio punto al centro.' },
        { src: 'img/proyectos/entre-santos/11.jpg', prop: 1.791, titulo: 'Jardinera.', texto: 'La vegetación acompaña la banca corrida.' },
        { src: 'img/proyectos/entre-santos/12.jpg', prop: 1.791, titulo: 'Luz cenital.', texto: 'Las cortinas se abren en una ranura hacia el exterior.' },
        { src: 'img/proyectos/entre-santos/13.jpg', prop: 1.791, titulo: 'Pasaje.', texto: 'Una abertura orgánica anuncia la luz violeta de la noche.' },
        { src: 'img/proyectos/entre-santos/14.jpg', prop: 1.791, titulo: 'Cortinas.', texto: 'Muros que se abren, se cierran y dejan pasar la luz.' },
        { src: 'img/proyectos/entre-santos/15.jpg', prop: 0.558, titulo: 'Sala de juegos.', texto: 'Vista a través de un arco recortado.' },
        { src: 'img/proyectos/entre-santos/16.jpg', prop: 1.791, titulo: 'Mesas de juego.', texto: 'Madera, azulejo verde y una lámpara que flota.' },
        { src: 'img/proyectos/entre-santos/17.jpg', prop: 1.791, titulo: 'Puertas.', texto: 'Antiguas puertas con herrajes de hierro convertidas en mesas.' },
        { src: 'img/proyectos/entre-santos/18.jpg', prop: 1.791, titulo: 'Juego.', texto: 'Tableros tallados sobre piso claro.' },
        { src: 'img/proyectos/entre-santos/19.jpg', prop: 1.791, titulo: 'Noche.', texto: 'La barra se tiñe de verde y rosa.' },
        { src: 'img/proyectos/entre-santos/20.jpg', prop: 1.791, titulo: 'Bar.', texto: 'Las cortinas reciben los colores de los murales mayas.' },
        { src: 'img/proyectos/entre-santos/21.jpg', prop: 1.791, titulo: 'Cena.', texto: 'Faroles cálidos contra un fondo azul.' },
        { src: 'img/proyectos/entre-santos/22.jpg', prop: 1.791, titulo: 'Sala de juegos de noche.', texto: 'El mismo espacio, otra atmósfera.' },
        { src: 'img/proyectos/entre-santos/23.jpg', prop: 1.791, titulo: 'Sanitarios.', texto: 'Azulejo blanco bañado en luz violeta.' },
        { src: 'img/proyectos/entre-santos/24.jpg', prop: 1.791, titulo: 'Ángel.', texto: 'Esculturas clásicas custodian los lavabos.' },
        { src: 'img/proyectos/entre-santos/25.jpg', prop: 1.791, titulo: 'Esferas.', texto: 'Espejos suspendidos multiplican la luz.' },
        { src: 'img/proyectos/entre-santos/26.jpg', prop: 1.791, titulo: 'Patio.', texto: 'Arcos de piedra abiertos al cielo.' },
        { src: 'img/proyectos/entre-santos/27.jpg', prop: 1.791, titulo: 'Barra del patio.', texto: 'Una barra circular de piedra verde entre la vegetación.' },
        { src: 'img/proyectos/entre-santos/28.jpg', prop: 1.791, titulo: 'Sombra.', texto: 'Un rincón para el descanso bajo la arquería.' }
      ]
    },
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
      texto: 'El proyecto de interiorismo para **ONO POKE HOUSE** nace de una lectura espacial de la identidad de la marca, en la que convergen las culturas hawaiana y japonesa. Este encuentro orientó el diseño hacia una experiencia que reúne la frescura del mar con la sensibilidad estética japonesa, y convierte ambos referentes en una atmósfera propia.\n\nUn ventanal de gran formato abierto hacia la calle definió una de las principales oportunidades del proyecto: concebir el local como una **pecera urbana**, un espacio contenido y vibrante cuya vida interior se proyecta hacia la ciudad. Un mural integra gráficos y elementos característicos de la marca para dar profundidad y carácter a esta composición. Desde el exterior, el restaurante se revela como un acuario lúdico de escala monumental, que despierta la curiosidad e invita a entrar.\n\nEl programa se organiza en dos niveles para responder con claridad a las necesidades de operación y a la experiencia del comensal. La planta baja concentra las áreas operativas, favoreciendo la eficiencia y la fluidez del trabajo en cocina. El nivel superior alberga el área de atención al cliente y los servicios sanitarios, en una atmósfera más pausada que invita a disfrutar del espacio y permanecer en él.\n\nLa intervención traduce el universo visual de ONO POKE HOUSE en una arquitectura interior con identidad, donde la expresión gráfica, la organización del programa y la relación con la calle construyen una experiencia coherente. El resultado es un entorno que equilibra carácter y funcionalidad, y propone una inmersión en el imaginario de la marca a través del espacio.',
      fotos: [
        { src: 'img/proyectos/ono-poke-house/02.jpg', prop: 0.667, titulo: 'Fachada.', texto: 'La pecera urbana se revela desde la calle.' },
        { src: 'img/proyectos/ono-poke-house/03.jpg', prop: 0.75, titulo: 'Exterior.', texto: 'Hojas tropicales en el anuncio y monsteras en los ventanales.' },
        { src: 'img/proyectos/ono-poke-house/04.jpg', prop: 1.499, titulo: 'Mural.', texto: 'Gráficos e íconos de la marca dan profundidad al espacio.' },
        { src: 'img/proyectos/ono-poke-house/05.jpg', prop: 1.499, titulo: 'Salón.', texto: 'La barra y el mural envuelven al comensal.' },
        { src: 'img/proyectos/ono-poke-house/06.jpg', prop: 1.499, titulo: 'Banca corrida.', texto: 'Una banca curva acompaña el recorrido del mural.' },
        { src: 'img/proyectos/ono-poke-house/07.jpg', prop: 0.667, titulo: 'Detalle.', texto: 'El pulpo, emblema de la marca, a escala monumental.' },
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

  /* Premios: aparecen en el inicio y en la ficha del proyecto. pub = slug de la publicación que lo respalda */
  premios: [
    { titulo: 'Revelación del Año', certamen: 'Iconos del Diseño 2022', medio: 'Architectural Digest México', proyecto: 'casa-che-che', pub: 'ad-iconos-2022' }
  ],

  /* Publicaciones: notas en medios sobre el estudio. foto opcional; si no, usa la portada del proyecto.
     fecha DD.MM.AA (vacía si el medio no la muestra) */
  publicaciones: [
    {"slug": "ad-iconos-2022", "destacada": true, "medio": "AD México", "titulo": "Iconos del Diseño 2022: conoce a los ganadores", "fecha": "2022", "proyecto": "casa-che-che", "premio": true, "url": "https://www.admagazine.com/articulos/iconos-del-diseno-2022-conoce-a-los-ganadores", "resumen": "Architectural Digest México anuncia a los ganadores de Iconos del Diseño 2022. Javier Puga Estudio gana el premio Revelación del Año con la Casa Che'Che' en Mérida, Yucatán."},
    {"slug": "coolhunter-iconos-2022", "medio": "Coolhunter MX", "titulo": "Proyectos ganadores de Iconos del Diseño 2022 Architectural Digest México", "fecha": "03.11.22", "proyecto": "casa-che-che", "premio": true, "url": "https://coolhuntermx.com/industrias-11-2022-proyectos-ganadores-de-iconos-del-diseno-2022-architectural-digest-mexico/", "resumen": "Coolhunter MX reúne a los ganadores de Iconos del Diseño 2022, entre ellos la Casa Che'Che' de Javier Puga Estudio, Revelación del Año."},
    {"slug": "vogue-iconos-2022", "medio": "Vogue México", "titulo": "Iconos del Diseño 2022 de AD México y Latinoamérica: categorías, cuándo y dónde verlos", "fecha": "2022", "proyecto": "casa-che-che", "premio": true, "url": "https://www.vogue.mx/estilo-de-vida/articulo/iconos-del-diseno-2022-ad-mexico-y-latinoamerica-categorias-cuando-es-donde-verlos", "resumen": "Vogue México presenta la edición 2022 de Iconos del Diseño de AD México y Latinoamérica, en la que Javier Puga Estudio resultó Revelación del Año."},
    {"slug": "gq-iconos-2023", "medio": "GQ México", "titulo": "Iconos del Diseño 2023: convocatoria, categorías y ganadores", "fecha": "2023", "proyecto": "casa-che-che", "premio": true, "url": "https://www.gq.com.mx/articulo/iconos-del-diseno-2023-convocatoria-categorias-ganadores", "resumen": "GQ México repasa los premios Iconos del Diseño de AD, donde Javier Puga Estudio fue Revelación del Año 2022."},
    {"slug": "bienal-iluminacion-costra", "medio": "Bienal Iberoamericana de Iluminación", "titulo": "Panadería Costra", "fecha": "2024", "proyecto": "panaderia-costra", "url": "https://bienal.iluminet.com/proyectos/2024/panaderia-costra/", "resumen": "Costra participa en la Bienal Iberoamericana de Iluminación 2024, en la categoría de espacios comerciales. Diseño de iluminación de Fobos Lighting Studio, con tonos cálidos inspirados en el fuego del horno."},
    {"slug": "glocal-costra", "medio": "Glocal", "titulo": "Costra | Javier Puga Estudio", "fecha": "17.01.23", "proyecto": "panaderia-costra", "url": "https://glocal.mx/costra-javier-puga-estudio/", "resumen": "Glocal describe una panadería donde el pan es protagonista, con materiales industriales y tonos tierra que evocan los procesos de producción y horneado."},
    {"slug": "the-spaces-costra", "medio": "The Spaces", "titulo": "Costra bakery riffs on the volcanic landscape surrounding Mexico City", "fecha": "18.05.22", "proyecto": "panaderia-costra", "url": "https://thespaces.com/costra-bakery-mexico-city/", "resumen": "The Spaces lee Costra en clave volcánica: acero, tonos carbón e iluminación naranja que evocan el paisaje que rodea a la Ciudad de México."},
    {"slug": "archdaily-costra", "medio": "ArchDaily", "titulo": "Tienda Costra / Javier Puga Estudio", "fecha": "08.05.22", "proyecto": "panaderia-costra", "url": "https://www.archdaily.com/es/981027/tienda-costra-javier-puga-estudio", "resumen": "ArchDaily publica Costra, un café de 88 m² en Ciudad de México que crea una experiencia envolvente a partir de la luz cálida, el contraste de colores y los aromas del pan y el café."},
    {"slug": "wallpaper-costra", "medio": "Wallpaper*", "titulo": "This Mexican bakery is a haven for indulgent pastries and playful design", "fecha": "07.05.22", "proyecto": "panaderia-costra", "url": "https://www.wallpaper.com/entertaining/mexico-city-bakery-costra", "resumen": "La revista británica Wallpaper* presenta Costra como una panadería donde la repostería y un diseño lúdico conectan con los visitantes a través del color, la luz y los aromas."},
    {"slug": "worldarchitecture-casa-che-che", "medio": "World Architecture", "titulo": "Castle-like house by Javier Puga Estudio features lattice wall for air-filled interiors", "fecha": "02.05.22", "proyecto": "casa-che-che", "url": "https://worldarchitecture.org/architecture-news/emnfp/castle-like-house-by-javier-puga-estudio-features-lattice-wall-for-air-filled-interiors.html", "resumen": "World Architecture destaca la celosía y los patios de la Casa Che'Che', que capturan los vientos del norte para ventilar y refrescar los interiores."},
    {"slug": "archdaily-casa-che-che", "medio": "ArchDaily", "titulo": "Che' Che' House / Javier Puga Estudio", "fecha": "14.04.22", "proyecto": "casa-che-che", "url": "https://www.archdaily.com/980199/che-che-house-javier-puga-estudio", "resumen": "ArchDaily publica la Casa Che'Che' en Mérida, diseñada para crear atmósferas frescas y sombreadas que responden al clima local."},
    {"slug": "archdaily-entrevista", "medio": "ArchDaily", "titulo": "Javier Puga: \"La arquitectura debe adaptarse a nuevas tecnologías para crear experiencias ultrapersonalizadas\"", "fecha": "18.01.22", "proyecto": "", "foto": "img/retrato.jpg", "url": "https://www.archdaily.com/es/974817/javier-puga-la-arquitectura-debe-adaptarse-a-las-nuevas-tecnologias-para-crear-experiencias-ultrapersonalizadas", "resumen": "Entrevista en ArchDaily: Javier Puga habla de una arquitectura que incorpora nuevas tecnologías y deja atrás la estandarización para crear experiencias personales, centradas en el cuerpo y en un diseño conceptual."},
    {"slug": "archello-costra", "medio": "Archello", "titulo": "Costra", "fecha": "", "proyecto": "panaderia-costra", "url": "https://archello.com/project/costra", "resumen": "Archello reúne la ficha del proyecto: un espacio que conecta con los visitantes mediante color, luz y aromas, inspirado en los procesos del pan y el café."},
    {"slug": "divisare-casa-che-che", "medio": "Divisare", "titulo": "Javier Puga Estudio, Zaickz Moz · Casa Che'Che'", "fecha": "", "proyecto": "casa-che-che", "url": "https://divisare.com/projects/459517-javier-puga-estudio-zaickz-moz-casa-che-che", "resumen": "Divisare publica la Casa Che'Che' con fotografía de Zaickz Moz: patios, jardines y agua que generan corrientes de aire fresco a través de la vivienda."},
    {"slug": "archello-casa-che-che", "medio": "Archello", "titulo": "Che'Che' House", "fecha": "", "proyecto": "casa-che-che", "url": "https://archello.com/project/cheche-house", "resumen": "Archello reúne la ficha de la Casa Che'Che' en Mérida."},
    {"slug": "yinjispace-casa-che-che", "medio": "Yinjispace", "titulo": "Javier Puga Estudio x Che' Che' House", "fecha": "", "proyecto": "casa-che-che", "url": "https://yinjispace.com/article/Javier-Puga-Estudio-Che-Che-House.html", "resumen": "La plataforma china Yinjispace publica la Casa Che'Che'."},
    {"slug": "elarqui-casa-che-che", "medio": "El Arqui MX", "titulo": "Planos de Casa Che'Che' / Javier Puga Estudio", "fecha": "", "proyecto": "casa-che-che", "url": "https://elarquimx.com/planos-de-casa-che-che-javier-puga-estudio/", "resumen": "El Arqui MX publica los planos de la Casa Che'Che'."}
  ],

  /* Mientras sea true, la pestaña Circular muestra un velo lima con "Próximamente" */
  circularProximamente: true,

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
    { etapa: 'Inicio', texto: 'Fundado en 2017 por Javier Puga, después de su paso por distintos despachos de arquitectura, el estudio comenzó con arquitectura comercial: islas y locales de helados, tiendas de AT&T y de The Body Shop en centros comerciales. De esas primeras obras nació una práctica atenta a la identidad de cada marca, la funcionalidad del espacio y la experiencia de quien lo recorre.' },
    { etapa: 'Vivienda', texto: 'Después, el trabajo se extendió a la transformación de casas existentes. Remodelaciones integrales replantearon sus interiores para nuevas formas de habitar e incorporaron terrazas, pérgolas y piezas de arte que dieron a cada residencia un carácter contemporáneo.' },
    { etapa: 'Colaboraciones', texto: 'En paralelo, colaboraciones nacionales e internacionales ampliaron su experiencia residencial, comercial y hotelera: hoteles en Medio Oriente, viviendas y hoteles en Tulum y Los Cabos, centros comerciales en Tijuana y residencias en San Diego.' },
    { etapa: 'Proyectos propios', texto: 'Con el crecimiento de su práctica llegaron los proyectos propios de vivienda, restaurantes, cafeterías y hotelería, que consolidaron una visión integral del diseño y una identidad arquitectónica distintiva.' },
    { etapa: 'Hoy', texto: 'Nueve años después, el estudio ha crecido en escala y diversidad con un propósito constante: crear proyectos irrepetibles, sustentados en conceptos sólidos que orienten cada decisión y den coherencia al conjunto.' }
  ]
};
