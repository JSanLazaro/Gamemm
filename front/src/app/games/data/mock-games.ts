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
];
