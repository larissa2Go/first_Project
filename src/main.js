import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.js'
import './style.css'

document.querySelector('#app').innerHTML = `
<header class="bg-white shadow-md sticky top-0 z-50">
    <h1>Menu Bar</h1>
</header>


<aside class="sidebar">
    <nav aria-label="Hauptnavigation">
        <ul>
            <li><a href="#">Ausbilder</a></li>
            <li><a href="#">Auzubis</a></li>
            <li><a href="#">Berichtsheft</a></li>
            <li><a href="#">Einstellungen</a></li>
        </ul>
    </nav>
</aside>

<main>
<articel>Auf dieser Seite könnt ihr vieles über eure Aubildung lernen. Klickt euch doch gerne durch.</articel>
</main>

`

setupCounter(document.querySelector('#counter'))
