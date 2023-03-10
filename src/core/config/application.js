const {
  VUE_APP_TITLE = ''
} = process.env

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
    q: '<< Un optimista ve en cada peligro una oportunidad >>',
    author: 'Winston Churchill'
  },
  {
    q: '<< La vida no consiste en encontrarte, sino en crearte >>',
    author: 'Anónimo'
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
  }
]

const INTERVAL_TIME = 10000
const LOADING_TIMEOUT = 5000

export { APP_TITLE, INTERVAL_TIME, LOADING_TIMEOUT, QUOTES }
