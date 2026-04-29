import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'


const btn = document.querySelector('#theme-toggle')
const html = document.documentElement

btn.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light'
  } else {
    html.dataset.theme = 'dark'
  }
})



const sidebar = document.querySelector("#sidebar")
const button = document.querySelector("#menu-toggle")

button.addEventListener("click", () => {
  sidebar.classList.toggle("hidden")
})

const highContrastButton = document.querySelector("#high-contrast-toggle")

highContrastButton.addEventListener("click", () => {
    if (html.dataset.theme === 'light') {
      html.dataset.theme = 'high-contrast'
    } else {
      html.dataset.theme = 'light'
    }
  })

const skeleton = document.querySelector('#skeleton')
const image = document.querySelector('#learn-image')


if (image.complete) {
  skeleton.classList.add('hidden')
  image.classList.remove('opacity-0')
  image.classList.add('opacity-100')
} else {
  image.addEventListener('load', () => {
    skeleton.classList.add('hidden')
    image.classList.remove('opacity-0')
    image.classList.add('opacity-100')
  })
}


