// Game{
//     _id:number,
//     year:number,
//     nomm:number,
//     title:string,
//     description:string,
//     img_url:string,
//     vid_url:string,
//     img_urls:string[],
//     vid_urls:string[],
//     trailer_urls:string[],
//     notamm:number,
//     notauser:number,
//     tags:string[],
// }
import { Game } from '../model/game.model';
export const games: Game[] = [
  {
    _id: 1,
    year: 2010,
    nomm: 181,
    title: 'Lego Indiana Jones 2',
    lema: 'La ultima gozada',
    description:
      'Adictivo desde el primer momento. Toneladas de contenido extra. Nuevo sistema de pantalla dividada para dos jugadores. Necesita un parche. El control de los vehiculos es mejorable.',
    longdescription: [
      'El juego comienza en el Reino de la Calavera de Cristal Parte 1. Hay seis centros (Cazadores del Arca Perdida, El templo Maldito y La Última Cruzada) en total, con 5 niveles de modo historia en cada centro, 5 niveles de modo de tesoro, 5 niveles de bonificación, y un nivel de super bonificación (estas se desbloquean por completar el modo del tesoro y los niveles de bonificación). ',
      'El juego en general recibió críticas mixtas. GameTrailers dio al juego una puntuación de 7,0, citando como más repetitivo que los títulos anteriores y criticando la falta de funciones en línea para complementar los modos de edición, el modo cooperativo y el nivel. También criticaron el hecho de que la mitad del juego se basa en "la peor película de la serie". El IGN le dio 6.0 al juego, citando la falta de secretos en los niveles principales, así como el nuevo centro de cada película diciendo que es todo un lío, pero elogió a la banda sonora y la atracción duradera. ',
    ],
    img_url:
      '../../../assets/img/gamefachade/181/181_LegoIndianaJones2_Portada.jpg',
    vid_url: 'https://www.youtube.com/embed/atRkw6PwwE4',
    img_urls: [
      '../../../assets/img/gamefachade/181/181_LegoIndianaJones2_screen01.jpg',
      '../../../assets/img/gamefachade/181/181_LegoIndianaJones2_screen02.jpg',
      '../../../assets/img/gamefachade/181/181_LegoIndianaJones2_screen03.jpg',
    ],
    vid_urls: [],
    trailer_urls: [],
    notamm: 90,
    notauser: 90,
    tags: ['accion', 'aventura'],
  },
  {
    _id: 2,
    year: 2010,
    nomm: 181,
    title: 'Dark Void',
    lema: '¡Accion de altos vuelos!',
    description:
      'Lo jugable que es. Sistema de camaras. Accion en vuelo. Banda sonora. Corto pero intenso. falta detalle algun escenario. Voces en ingles',
    longdescription: [
      'El juego cuenta la historia de Will Grey, un piloto que volaba por encima del Triángulo de las Bermudas cuando su avión chocó con un objeto extraño, y cayó a tierra. Junto a él está Ava, compañera de viaje y antiguo amor. Pronto se da cuenta de dónde está: en el Vacío, un mundo paralelo al nuestro. Allí deberá sobrevivir junto a otros supervivientes, otros humanos que también han acabado en el Vacío. Los supervivientes llevan el rostro tapado por una máscara de gas, y todos llevan el arma principal del juego, el Liberador, fabricada a partir de restos que se han encontrado en el Vacío. Allí combatirá contra los Vigilantes, robots que pretenden dominar el mundo. ',
      'El juego, en términos generales, recuerda mucho al cómic y a la película Rocketeer, debido a que la historia transcurre en la misma época, además de que el protagonista recibe un jetpack y un casco como en dicha película.',
      'El jugador controla a Will, un experto piloto. Puede controlarlo en tierra o en el aire, gracias al jetpack que lleva acoplado en su espalda, aunque no en todas las zonas es posible volar. En tierra, el jugador puede utilizar coberturas para protegerse de los disparos enemigos. Desde ahí, puede abrir fuego y lanzar granadas. El control es bastante convencional y muy similar a otros juegos del género shooter. Cuando es posible levantar el vuelo, el jugador dispara con las ametralladoras que están equipadas en el jetpack. Aparte de disparar a naves enemigas, es posible abordar una eliminando a su piloto para controlarla. A base de eliminar enemigos y naves, el jugador conseguirá tecnopuntos que permitirá poder comprar mejoras para sus armas y mejorar el jetpack. ',
      'La revista IGN le dio un 5,0 sobre 10: "Dark Void es uno de esos juegos que lo juegas, lo terminas, y te olvidas de él".4​ Game Informer le dio un 7 sobre 10.5​ GameTrailers puntuó al juego con un 6,8 sobre 10.6',
      'Louis Bedigian, de GameZone, dio tanto a la versión de PS3 como a la de Xbox 360 un 6/10: "El sistema de juego al estilo Gears of War es perdonable. Pero los innumerables problemas técnicos casi destruyen un juego que tenía el potencial de ser algo realmente especial. Dark Void se puede resumir en las siguientes palabras: tan potente como decepcionante"​ ',
      'Ben "Yahtzee" Croshaw, de Zero Punctuation, señaló que Dark Void fue el juego que, en su opinión, más le había decepcionado en toda su carrera "no porque sea malo, sino porque es ambicioso, y en ocasiones, muy absorbente, innovador y divertido, pero al final es demasiado corto y parece que está sin terminar, como si los desarrolladores se hubieran quedado sin presupuesto, tiempo o ganas de seguir trabajando".',
      'La wikipedia',
    ],
    img_url: '../../../assets/img/gamefachade/181/181_Dark Void_Portada.jpg',
    vid_url: 'https://www.youtube.com/embed/gZKToSJ4V9c',
    img_urls: [
      '../../../assets/img/gamefachade/181/181_Dark Void_screen01.jpg',
      '../../../assets/img/gamefachade/181/181_Dark Void_screen02.jpg',
      '../../../assets/img/gamefachade/181/181_Dark Void_screen03.jpg',
      '../../../assets/img/gamefachade/181/181_Dark Void_screen04.jpg',
    ],
    vid_urls: [
      'https://www.youtube.com/embed/mUXDzuQ7Hqw',
      'https://www.youtube.com/embed/jgpfUMW-gbk',
      'https://www.youtube.com/embed/F-IxEvmbTZs',
      'https://www.youtube.com/embed/gKGk4-K2ZqQ',
    ],
    trailer_urls: [
      'https://www.youtube.com/embed/1EooBHXCJcY',
      'https://www.youtube.com/embed/s37tDjG2lPg',
      'https://www.youtube.com/embed/2wPIED4UG6U',
    ],
    notamm: 92,
    notauser: 92,
    tags: ['accion', 'aventura'],
  },  
  {
    _id: 4,
    year: 2008,
    nomm: 159,
    title: 'Soulstorm',
    lema: 'Expansion autojugable para Warhammer 40000: Dawn of War',
    description:
      'Dos facciones terrorificas. Sonido te mete en plena batalla. Nuevas opciones estrategicas. Poco accessible si no eres experto. No hay doblaje a la altura de las voces originales.',
    longdescription: [
      'Estrategia fantastica con un buen repertoriio de modos de juego, encarnizados combates por el dominio del terreno y una ambientacion genial. '
      ,'La razón de la Tormenta Disformidad, como se explicó después de la conquista de las Fuerzas del Caos, comenzó con un Guardia Imperial ignorante con genes psíquicos latentes a los que los Dioses del Caos le susurraron, diciéndole que preparara un ritual. Sus acciones inadvertidamente convocaron a la Legión Alfa al Sistema Kaurava, iniciando así el conflicto.  '
      ,'Al igual que su predecesora Dark Crusade, Soulstorm presenta una "meta campaña" que presenta 31 territorios repartidos en cuatro planetas y tres lunas.'
      ,'Sin embargo, una diferencia es que, a diferencia de Dark Crusade, no hay bases persistentes. Una vez que el jugador conquista una provincia, las estructuras base que el jugador ha acumulado no estarán presentes en futuros conflictos. Esto se puede remediar reforzando las provincias con edificios y unidades entre batallas, o estableciendo una base de avanzada usando la capacidad del ejército de las Hermanas de Batalla. Cada Fortaleza tiene una habilidad única, cada raza comienza con esa habilidad.'
      ,'El destino del Sistema Kaurava depende de las acciones tomadas por las distintas facciones que peleaban por él, pero los únicos detalles conocidos sobre el final canónico surgieron inicialmente del diálogo en la continuación, Warhammer 40.000: Dawn of War II. El sargento explorador Cyrus declara que la campaña de Kaurava fue un fracaso, y que la mayoría de los Cuervos Sangrientos liderados por el Capitán Indrick Boreale fueron aniquilados, lo que le costó al capítulo la mitad de su personal en una sola campaña. Como resultado, los Cuervos Sangrientos severamente poco calificados no pueden darse el lujo de perder sus mundos de reclutamiento en el subsector Aurelia y deben defenderlos a toda costa.2 Se revela en Dawn of War III que los Orkos liderados por Gorgutz fueron los vencedores canónicos y los responsables de la derrota de Indrick Boreale, pero Gorgutz se aburrió con la conquista y más tarde iría a Ciprus Ultima para servir bajo Gitstompa después de oír hablar del planeta Acheron mientras luchaba contra los Eldar en el Sistema Kaurava. Aunque esto contradice la victoria de los orkos que termina en el juego cuando el epílogo de victoria de la facción orka declara que justo después de ganar Gorgutz dirigió su propia "campaña de conquista galáctica" que fue "escenificada" de Kaurava con las fuerzas que organizó en Kaurava y equipadas con las armas hecho en "campos de fábricas orkish" sus orkos construidos para este "propósito" después de conquistar el sistema. '
      ,'Desarrollo: Warhammer 40,000: Dawn of War - Soulstorm fue desarrollado por Iron Lore Entertainment como la tercera expansión de Warhammer 40,000: Dawn of War. El 13 de enero de 2008, Relic lanzó una demo de 1,12 GB de Soulstorm en varios sitios web de juegos. La demostración permite a los jugadores jugar un tutorial, así como una escaramuza y un mapa de escenarios como los Eldar Oscuros. Las pantallas de carga de la demostración también muestran las nuevas unidades de vuelo adicionales agregadas en la expansión. El escenario de demostración simula un asalto al bastión de los Marines Espaciales si uno jugaba contra los Eldars Oscuros en el juego de campaña.'
      ,'El 4 de marzo de 2008, Soulstorm fue lanzado primero en el mercado de América del Norte, algunos días más tarde en cualquier otro lugar. Después del final del soporte oficial de parches, la comunidad del juego continuó el soporte con parches no oficiales propios.3'
      ,'Soulstorm recibió críticas generalmente mixtas a positivas de los críticos. A partir de noviembre de 2012, el juego tuvo un puntaje promedio de 74% basado en 35 revisiones en la página de comentarios GameRankings.10 En Metacritic, el juego tuvo un puntaje promedio de 73 de 100, basado en 37 revisiones, indicando críticas mixtas o promedio.11 IGN le dio al juego una puntuación de 7 sobre 10, citando un juego sólido pero sin nada innovador. '
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/159/159_Soulstorm.jpg',
    vid_url: 'https://www.youtube.com/embed/khMOgnvdpmQ',
    img_urls: [
      '../../../assets/img/gamefachade/159/159_Soulstorm_4.jpg',
      '../../../assets/img/gamefachade/159/159_Soulstorm_5.jpg',
      '../../../assets/img/gamefachade/159/159_Soulstorm_6.jpg',
      '../../../assets/img/gamefachade/159/159_Soulstorm_7.jpg',
      '../../../assets/img/gamefachade/159/159_Soulstorm_8.jpg',
    ],
    vid_urls: [
      'https://www.youtube.com/embed/khMOgnvdpmQ',
      'https://www.youtube.com/embed/r1vlo0XYyvU',
      'https://www.youtube.com/embed/-sQN6Rc1jXQ',
    ],
    trailer_urls: [
      'https://www.youtube.com/embed/NVSpZTEIt54',
      'https://www.youtube.com/embed/Uh9W8QIei8A',
      'https://www.youtube.com/embed/k65t4WjK3Lo',
    ],
    notamm: 96,
    notauser: 96,
    tags: ['estategia tiempo real', 'estrategia'],    
  },
  {
    _id: 5,
    year: 2007,
    nomm: 151,
    title: 'Lost Planet',
    lema: 'Accion y bichos en el planeta EON III',
    description:
    'Una buena racion de accion y disparos de la vieja escuela, con un sobrasaliente nivel visual y un espectacular diseño artistico, tiene todas las bazas para no pasar de moda en una buena cantidad de meses.',
    longdescription: [
      'Una buena racion de accion y disparos de la vieja escuela, con un sobrasaliente nivel visual y un espectacular diseño artistico, tiene todas las bazas para no pasar de moda en una buena cantidad de meses.'
      ,'Asi ocurre con Lost Planet, que ni siquiera ha cumplido un año en el mercado, hay versiones para otras plataformas. Carreras por la nieve, disparos y explosiones e inagotables hordas de enemigos implacables'
      ,'Lost Planet es una serie de videojuegos de disparos en tercera persona creada y publicada por la empresa Capcom. La serie consta de tres entregas: Lost Planet: Extreme Condition, Lost Planet 2 y Lost Planet 3. El primer juego fue puesto a la venta por primera vez en Japón el 21 de diciembre de 2006, antes de ser comercializado más tarde fuera de Japón el 12 de enero de 2007. Originalmente fue una exclusiva de la consola Xbox 360, pero más tarde fue convertido a otras plataformas como Microsoft Windows en junio de 2007 y PlayStation 3 en febrero de 2008. El segundo juego fue lanzado en todo el mundo en mayo de 2010 para PlayStation 3 y Xbox 360 antes de ser versionado para Microsoft Windows en octubre de 2010. El tercer juego fue desarrollado por Spark Unlimited en lugar de Capcom, y se puso a la venta a nivel mundial en agosto de 2013, esta vez lanzado para los tres sistemas de manera simultánea. '
      ,'El primer juego de Lost Planet tiene lugar en el año conocido en el juego como TC-80 en el planeta ficticio de EDN III. Después de que las condiciones de vida en el planeta Tierra se volvieran demasiado hostiles para los seres humanos debido a la guerra, el calentamiento global y la contaminación, una ficticia megacorporación interestelar llamada Neo-Venus Construction (NEVEC) decide colonizar EDN III, un nuevo planeta muy parecido a la Tierra situado en una edad de hielo brutal. NEVEC descubre que el planeta EDN III está habitado por una especie de exóticos insectos gigantes agresivos y territoriales, a los que nombraron como Akrid, que vienen en todas formas y tamaños, y generan su propia energía térmica de alto valor. 150 años después, en una gran guerra en la que los humanos pierden contra los Akrid, la historia del juego gira en torno a Wayne Holden, un "pirata de las nieves", que intenta derrocar a la despiadada corporación NEVEC, que todavía compite por el control de EDN III, y ayudar a los esfuerzos de colonización por el resto de la raza humana mediante la destrucción de los Akrid, todo a la vez mientras tratan de sobrevivir a ambas traiciones y a las condiciones extremas del planeta. '
      ,'Lost Planet: Extreme Condition recibió críticas mixtas en PlayStation 3 y PC, pero la recepción fue más positiva para la versión de Xbox 360. El juego vendió más de un millón de copias en todo el mundo en abril de 2007. IGN dio a la versión de Xbox 360 el premio Editors Choice Awards, y ganó el premio al mejor juego de Xbox 360 en la Leipzig Games Convention. '
      ,'Lost Planet: Colonies es una versión "Classics" de Extreme Condition para Xbox 360 y PC.1​ El juego incluye nuevos mapas multijugador, un nuevo modo de juego "Humano vs. Akrid" multijugador, y una selección de nuevos personajes multijugador y nuevas armas. '
      ,'Colonies también incluye cuatro nuevos modos para un jugador: "Ataque por puntos" (conseguir la mayor cantidad de puntos matando enemigos en sucesión), "Batalla por tiempo", "Modo en primera persona", y "Modo infinito". Colonies permite el juego en línea multiplataforma entre los jugadores de Xbox Live y Games for Windows - LIVE. Lost Planet: Colonies no es compatible con las partidas guardadas del Lost Planet original ni tampoco con el juego en línea, de modo que los jugadores de cada versión sólo pueden jugar con otros que tengan el mismo título. Colonies fue puesto a la venta en América del Norte el 27 de mayo de 2008, en Japón el 29 de mayo, y en Europa el 6 de junio. '
      ,'Micromania y Wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/159/159_Lostplanet.jpg',
    vid_url: 'https://www.youtube.com/embed/0zPevaH5Awk',
    img_urls: [
      '../../../assets/img/gamefachade/159/159_Lostplanet_1.jpg',
      '../../../assets/img/gamefachade/159/159_Lostplanet_2.jpg',
      '../../../assets/img/gamefachade/159/159_Lostplanet_3.jpg',
      '../../../assets/img/gamefachade/159/159_Lostplanet_5.jpg',
    ],
    vid_urls: [
      'https://www.youtube.com/embed/0zPevaH5Awk',
      'https://www.youtube.com/embed/MuBoEXCiypQ',
      'https://www.youtube.com/embed/oHd4jVEHT4c',
    ],
    trailer_urls: [
      'https://youtu.be/tfjXpTr5dos',
      'https://www.youtube.com/embed/tfjXpTr5dos',
      'https://www.youtube.com/embed/HMzPla8iMV0',
      'https://www.youtube.com/embed/hm_LaCTAJp4'
    ],
    notamm: 93,
    notauser: 93,
    tags: ['accion', 'disparos'],    
  },
  {
    _id: 6,
    year: 2007,
    nomm: 145,
    title: 'Supreme Commander Gold',
    lema: 'El comandante supremo es poderoso',
    description:
      'Manejar ejercitos enormes en escenarios descomunales. Con un control sobresaliente. Reforzado con la expansion "Forged Alliance". Edicion imprescindible.',
    longdescription: [
      'Manejar ejercitos enormes en escenarios descomunales. Con un control sobresaliente. Reforzado con la expansion "Forged Alliance". Edicion imprescindible.'
      ,'Ponte en mandos de un gigantesco robot y dirige a tu ejercito para controlar la galaxia...'
      ,'En el futuro ya no se lucha como en nuestros dias: para conquistar un planeta se envia alli a un oficial dentro de un Comandante Supremo, un gigantesco exoesqueleto que puede luchar, crear y desarrollar un ejercito.'
      ,'Un planteamiento interesante que unido a un sistema de control soberbio, mapas kilometricos y un impresionante nivel de zoom, te hara sentir como un verdadero general dirigiendo centenares de unidades desde tu puesto de mando. Genial y revolucionario.'
      
      ,'Micromania'
    ],
    img_url: '../../../assets/img/gamefachade/159/159_Supremecommander.jpg',
    vid_url: 'https://www.youtube.com/embed/i7xMKUnGinc',
    img_urls: [
      '../../../assets/img/gamefachade/159/159_Supremecommander_1.jpg',
      '../../../assets/img/gamefachade/159/159_Supremecommander_2.jpg',
      '../../../assets/img/gamefachade/159/159_Supremecommander_3.jpg',
      '../../../assets/img/gamefachade/159/159_Supremecommander_4.jpg',
    ],
    vid_urls: [
      'https://www.youtube.com/embed/i7xMKUnGinc',
      'https://www.youtube.com/embed/9EeVnvkiFGw',
      'https://www.youtube.com/embed/7CR4ouY2GcA',
    ],
    trailer_urls: [
      'https://www.youtube.com/embed/YTEK91uEvPo',
      'https://www.youtube.com/embed/_ouejDOElfQ',
      'https://www.youtube.com/embed/z8CNo6xrUno',
    ],
    notamm: 97,
    notauser: 97,
    tags: ['estrategia', 'disparos'],    
  }, {
    _id: 7,
    year: 2007,
    nomm: 155,
    title: 'Call of Duty 4:Modern Warfare',
    lema: '',
    description:
      'Emblematica serie. Explosiva campaña individual y un modo multijugador que engancha a miles de jugadores en todo el mundo.',
    longdescription: [
      ''
      ,' '
      ,''
      ,''
      ,''
      ,''
      ,' '
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/159/159_CODmodernwarfare.jpg',
    vid_url: 'https://www.youtube.com/embed/7-CpZNc8fs0',
    img_urls: [
    ],
    vid_urls: [
      'https://www.youtube.com/embed/7-CpZNc8fs0',
    ],
    trailer_urls: [
      '',
      '',
      '',
    ],
    notamm: 98,
    notauser: 98,
    tags: ['accion', 'disparos'],    
  },{
    _id: 8,
    year: 2007,
    nomm: 154,
    title: 'World in Conflict',
    lema: '',
    description:
      '',
    longdescription: [
      ''
      ,' '
      ,''
      ,''
      ,''
      ,''
      ,' '
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/160/160_worldinconflict.jpg',
    vid_url: 'https://www.youtube.com/embed/gZKToSJ4V9c',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 97,
    notauser: 97,
    tags: ['Estrategia', 'disparos'],    
  },{
    _id: 9,
    year: 2007,
    nomm: 155,
    title: 'Gears of War',
    lema: '',
    description:
      '',
    longdescription: [
      ''
      ,' '
      ,''
      ,''
      ,''
      ,''
      ,' '
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/160/160_gearsofwar.jpg',
    vid_url: '',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 96,
    notauser: 96,
    tags: ['accion', 'disparos'],    
  },{
    _id: 10,
    year: 2007,
    nomm: 152,
    title: 'Bioshock',
    lema: '',
    description:
      '',
    longdescription: [
    ],
    img_url: '../../../assets/img/gamefachade/160/160_bioshock.jpeg',
    vid_url: 'https://www.youtube.com/embed/vNMQWvHF8yQ',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 96,
    notauser: 96,
    tags: ['accion', 'disparos','aventura'],    
  },{
    _id: 11,
    year: 2007,
    nomm: 155,
    title: 'Sparta',
    lema: 'La batalla de las Termopilas',
    description:
      'Estrategia historica',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/160/160_sparta.jpeg',
    vid_url: 'https://www.youtube.com/embed/IiKfK3iaglo',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 94,
    notauser: 94,
    tags: ['accion', 'disparos'],    
  },{
    _id: 12,
    year: 2007,
    nomm: 155,
    title: 'Hellgate London',
    lema: '',
    description:
      'Los creadore de "Diablo". Rol y accion en un mundo postapocaliptico del que te costara mucho escapar.',
    longdescription: [
    ],
    img_url: '../../../assets/img/gamefachade/160/160_hellgatelondon.jpg',
    vid_url: 'https://www.youtube.com/embed/eYDaN87vDoE',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 95,
    notauser: 95,
    tags: ['rol', 'accion'],    
  },{
    _id: 13,
    year: 2007,
    nomm: 160,
    title: 'Crusaders',
    lema: 'Thy Kingdom Come',
    description:
      '',
    longdescription: [
      ''
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/160/160_crusaders.jpg',
    vid_url: 'https://www.youtube.com/embed/lRLbi7XRxRE',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 98,
    notauser: 98,
    tags: ['estrategia', 'historia'],    
  },{
    _id: 14,
    year: 2008,
    nomm: 160,
    title: 'Sacred 2 Fallen Angel',
    lema: 'El regreso del Rol fantastico',
    description:
      'Rol.Un mundo de fantasia, con sus magos y sus dragones, pero tambien un mundo de ciencia-ficcion, con sus armas de enerfia y sus ciborg',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/160/160_sacred2.jpg',
    vid_url: 'https://www.youtube.com/embed/2otnVG7vW2M',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 96,
    notauser: 96,
    tags: ['rol', 'fantasia'],    
  },{
    _id: 15,
    year: 2007,
    nomm: 160,
    title: 'Jack Keane',
    lema: 'Al rescate del imperio Britanico',
    description:
      'Los jugadores asumen el papel de un aventurero desafortunado y fanfarrón y lo acompañan en sus viajes por 15 localizaciones a través de Londres, Ciudad del Cabo, y la Isla de Tooth.',
    longdescription: [
      'En la Inglaterra colonial, bajo un cierto grado de coerción, Jack acepta un trabajo que no sólo le causará una gran cantidad de problemas, sino también darán a conocer la respuesta a un misterio de su distante pasado. La falta de dinero lleva a Jack a aceptar un estatuto para llevar a un agente secreto británico a la misteriosa Isla de Tooth. Cuando el barco de Jack se destroza en los acantilados de la misteriosa isla a su llegada y el agente secreto se convierte rápidamente en comida para un monstruo de la selva, Jack pronto se queda para hacer frente a la situación por su cuenta. Los jugadores interactúan con docenas de personajes y usan más de 250 objetos encontrados para resolver puzles, mientras Jack se acerca a resolver el misterio de su pasado y su vinculación con el presente. '      
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/160/160_jackkeane1.jpeg',
    vid_url: 'https://www.youtube.com/embed/22jdGsI4r4w',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 94,
    notauser: 94,
    tags: ['aventura', ''],    
  },{
    _id: 16,
    year: 2006,
    nomm: 155,
    title: 'TimeShift',
    lema: '',
    description:
      '',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/160/160_timeshift.jpg',
    vid_url: 'https://www.youtube.com/embed/TW1P0FWKk5E',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 93,
    notauser: 93,
    tags: ['accion', ''],    
  },{
    _id: 17,
    year: 2006,
    nomm: 138,
    title: 'Prey',
    lema: '',
    description:
      '',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/161/161_prey.jpg',
    vid_url: 'https://www.youtube.com/embed/0Z--vSxQV4k',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 94,
    notauser: 94,
    tags: ['accion', ''],    
  },{
    _id: 18,
    year: 2006,
    nomm: 133,
    title: 'TOCA Race Driver 3',
    lema: '',
    description:
      '',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '../../../assets/img/gamefachade/169/169_toca3.jpg',
    vid_url: 'https://www.youtube.com/embed/_W-SYj3sNC4',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 96,
    notauser: 96,
    tags: ['', ''],    
  },{
    _id: 19,
    year: 2007,
    nomm: 155,
    title: 'Call',
    lema: '',
    description:
      '',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '',
    vid_url: '',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 93,
    notauser: 93,
    tags: ['', ''],    
  },{
    _id: 20,
    year: 2007,
    nomm: 155,
    title: 'Call',
    lema: '',
    description:
      '',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '',
    vid_url: '',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 93,
    notauser: 93,
    tags: ['', ''],    
  },{
    _id: 21,
    year: 2007,
    nomm: 155,
    title: 'Call',
    lema: '',
    description:
      '',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '',
    vid_url: '',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 93,
    notauser: 93,
    tags: ['', ''],    
  },{
    _id: 22,
    year: 2007,
    nomm: 155,
    title: 'Call',
    lema: '',
    description:
      '',
    longdescription: [
      ''      
      ,'La wikipedia'
    ],
    img_url: '',
    vid_url: '',
    img_urls: [
    ],
    vid_urls: [
    ],
    trailer_urls: [
    ],
    notamm: 93,
    notauser: 93,
    tags: ['', ''],    
  },
];
