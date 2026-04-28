import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import './style.css'

const btn = document.querySelector('#theme-toggle')
const html = document.documentElement

btn.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light'
  } else {
    html.dataset.theme = 'dark'
  }
})


