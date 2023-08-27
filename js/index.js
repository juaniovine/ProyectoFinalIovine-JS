// Defino mis elementos
const head = document.head
const body = document.body
const header = document.createElement('header')
const divs = document.createElement('div')


// HEAD

// meta
// link
// title
const titulo = document.createElement('title') // creo el elemento titulo

titulo.innerText = "Maxiquiosco FC - Productos" //agrego el contenido

head.appendChild(titulo) // agrego el elemento a mi estructura

// BODY

// logo
const divLogo = document.createElement('div')
divLogo.innerHTML = `<img src="/img/logo.jpg" alt="Logo Maxiquiosco FC">`
divLogo.style.width = '10%'

header.append(divLogo)


// navbar
const navBar = document.createElement('nav')
const uls = document.createElement('ul')
header.className = 'menu'
divs.className = 'nav-menu' // asigno una clase a mi menu


const links = [             // creo los links de mi menu
    {
        page: '../index',
        link: 'Home'
    },
    {
        page: 'products',
        link: 'Productos'
    },
    {
        page: 'contact',
        link: 'Contacto'
    }
]

body.prepend(header)
header.append(navBar)
navBar.append(divs)
divs.append(uls)

header.style.background = '#667AD9'

// Titulo de index
const h1Titulo = document.createElement('h1') //asigno el tag titulo a un H1

h1Titulo.innerHTML = `<strong>Maxiquiosco FC</strong>`;
h1Titulo.style.color = '#26388C'
h1Titulo.style.display = 'flex'; // Usa flexbox para centrar
h1Titulo.style.justifyContent = 'center'; // Centra horizontalmente
h1Titulo.style.alignItems = 'center'; // Centra verticalmente
h1Titulo.style.height = '20vh';

document.body.append(h1Titulo) // Agrego el nodo titulo


// main
const main = document.createElement('main') //creo el main
body.append(main)                           // inserto el main

const sectionMain = document.createElement('section') //creo la section
sectionMain.style.background = '#bfffbf'              // aplico estilos
sectionMain.id = 'home-main'                          // agrego un ID "contenedor" 
main.append(sectionMain)                              // inserto la section

sectionMain.innerHTML = `
                        <img src="/img/boca-dentro-pasto.jpeg" alt="">
                        `


// Api Chuck Norris main
const sectionPromos = document.createElement('section') //creo la section
sectionPromos.style.background = '#667AD9'              // aplico estilos
sectionPromos.id = 'home-api-chuck'                     // agrego un ID "contenedor"
main.append(sectionPromos)                              // inserto la section

sectionPromos.innerHTML = `<h2 class="chuck-title">Random joke about Chuck Norris</h2>
                          <div class="api-chuck"></div>
                          `

const apiChuckDiv = document.querySelector('.api-chuck');

// Solicitud a la API de Chuck Norris
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        apiChuckDiv.innerHTML = `
            <img src="${data.icon_url}" alt=""></img>
            <p>${data.value}</p>
        `;
    })
    .catch(error => {
        console.error('Error al obtener el chiste de Chuck Norris:', error);
    });

// FOOTER
const footer = document.createElement('footer')
body.append(footer)

const year = new Date().getFullYear();

footer.className = 'footer'
footer.style.background = '#667AD9' 
const redesSociales = document.createElement('div');
redesSociales.className = 'redes-sociales';

const enlaceInstagram = document.createElement('a');
enlaceInstagram.href = 'https://www.instagram.com//';
enlaceInstagram.target = '_blank';
enlaceInstagram.textContent = 'Instagram';

const enlaceMercadoLibre = document.createElement('a');
enlaceMercadoLibre.href = 'https://www.mercadolibre.com.ar/';
enlaceMercadoLibre.target = '_blank';
enlaceMercadoLibre.textContent = 'MercadoLibre';

redesSociales.append(enlaceInstagram, document.createTextNode(' | '), enlaceMercadoLibre);

// Generar contenido para los derechos reservados
const derechosReservados = document.createElement('p');
derechosReservados.textContent = `© ${year} Maxiquiosco FC. Todos los derechos reservados.`;

footer.append(redesSociales, derechosReservados);