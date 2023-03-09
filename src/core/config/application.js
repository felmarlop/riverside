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
  }
]

const INTERVAL_TIME = 10000
const LOADING_TIMEOUT = 5000

export { APP_TITLE, INTERVAL_TIME, LOADING_TIMEOUT, QUOTES }
