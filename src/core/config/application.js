const {
  VUE_APP_BASE_PATH = '',
  VUE_APP_TITLE = ''
} = process.env

const APP_BASE_PATH = VUE_APP_BASE_PATH
const APP_TITLE = VUE_APP_TITLE

const QUOTES = [
  {
    q: '<< Salta y aparecerá la red >>',
    author: 'Julia Cameron'
  },
  {
    q: '<< Si quieres una cualidad, actúa como si ya la tuvieras >>',
    author: 'Williams James'
  },
  {
    q: '<< No podemos cambiar nada hasta que lo aceptemos. La condena no libera, oprime >>',
    author: 'Carl Jung'
  },
  {
    q: '<< Las únicas personas normales son las que no conoces muy bien >>',
    author: 'Alfred Adler'
  },
  {
    q: '<< Ninguna relación importante sobrevive si la confianza se pierde por completo >>',
    author: 'Paul Ekman'
  },
  {
    q: '<< La inteligencia es lo que usas cuando no sabes qué hacer >>',
    author: 'Jean Piaget'
  },
  {
    q: '<< Las personas sólo cambiamos de verdad cuando nos damos cuenta de las consecuencias de no hacerlo >>',
    author: 'Mario Alonso Puig'
  },
  {
    q: '<< Un optimista ve en cada peligro una oportunidad >>',
    author: 'Winston Churchill'
  },
  {
    q: '<< La vida no consiste en encontrarte, sino en crearte >>',
    author: 'Anónimo'
  },
  {
    q: '<< Para que alguien te tome en serio, primero te tienes que tomar en serio tú >>',
    author: 'Mario Alonso Puig'
  },
  {
    q: '<< Consulta no a tus miedos, sino a tus sueños >>',
    author: 'Juan XXIII'
  },
  {
    q: '<< No se ve bien sino con el corazón. Lo esencial es invisible a los ojos >>',
    author: 'El principito, Antoine de Saint-Exupéry'
  },
  {
    q: '<< La felicidad no es algo hecho. Viene de tus propias acciones >>',
    author: 'Dalai Lama'
  },
  {
    q: '<< Si quieres vivir una vida feliz, átala a una meta, no a una persona o un objeto >>',
    author: 'Albert Einstein'
  },
  {
    q: '<< La felicidad no depende de lo que tienes o de quién eres. Depende únicamente de lo que piensas >>',
    author: 'Dale Carnegie'
  },
  {
    q: '<< La gratitud es el mejor antídoto contra la tristeza y la frustración. Practícala todos los días >>',
    author: 'Martin Seligman'
  },
  {
    q: '<< El bienestar no es algo que se adquiere, sino algo que se cultiva a través de pequeñas acciones diarias >>',
    author: 'Tal Ben-Shahar'
  },
  {
    q: '<< El optimismo es la fe que conduce al logro >>',
    author: 'Helen Keller'
  },
  {
    q: '<< La mayor parte de nuestras inseguridades y de nuestras desesperanzas no son reales, son aprendidas >>',
    author: 'Mario Alonso Puig'
  },
  {
    q: '<< Una mente no puede entenderse sin la cultura >>',
    author: 'Lev Vygotsky'
  },
  {
    q: '<< Eres aquello que haces, no aquello que dices que harás >>',
    author: 'Carl Jung'
  },
  {
    q: '<< Viajar es una buena forma de aprender y de superar miedos >>',
    author: 'Luis Rojas Marcos'
  },
  {
    q: '<< La forma de hablarnos a nosotros mismos afecta tremendamente a nuestra manera de relacionarnos con el mundo >>',
    author: 'Mario Alonso Puig'
  }
]

const INTERVAL_TIME = 12000
const LOADING_TIMEOUT = 5000

export { APP_BASE_PATH, APP_TITLE, INTERVAL_TIME, LOADING_TIMEOUT, QUOTES }
