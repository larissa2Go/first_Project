import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import './style.css'

const btn = document.querySelector('#theme-toggle')

btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
})


