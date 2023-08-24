// Defino mis elementos
const head = document.head
const body = document.body

const divs = document.createElement('div')

// HEAD

// meta
// link
// title
const titulo = document.createElement('title') // creo el elemento titulo

titulo.innerText = "Maxiquiosco FC - JS 3ra entrega" //agrego el contenido

head.appendChild(titulo) // agrego el elemento a mi estructura


// BODY


// navbar
const header = document.createElement('header')

// logo
const divLogo = document.createElement('div')
divLogo.innerHTML = `<img src="/img/logo.jpg" alt="Logo Maxiquiosco FC">`
divLogo.style.width = '10%'

header.append(divLogo)

const divModal = document.createElement('div')
divModal.innerHTML = `🛒`
divModal.className = 'modal'
header.append(divModal)

const navBar = document.createElement('navbar')
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
    },

]

body.prepend(header)
header.append(navBar)
navBar.append(divs)
divs.append(uls)

header.style.background = 'grey'

// searchBar


// Titulo de index
const h1Titulo = document.createElement('h1') //creo el tag titulo a un H1

h1Titulo.innerHTML = `<strong>Maxiquiosco FC</strong>`; // genero el texto para mi tag h1
h1Titulo.style.color = 'black' // agrego los estilos a mi h1
document.body.append(h1Titulo) // Agrego el nodo titulo


// main
const main = document.createElement('main') //creo el main
body.append(main)                           // inserto el main

const sectionMain = document.createElement('section') //creo la section
sectionMain.style.background = '#bfffbf'              // aplico estilos
sectionMain.id = 'home-main'                          // agrego un ID "contenedor" 
main.append(sectionMain)                              // inserto la section

sectionMain.innerHTML = `<img src="/img/boca-dentro-pasto.jpeg" alt="">Contenido`


// promociones main

const sectionPromos = document.createElement('section') //creo la section
sectionPromos.style.background = '#bfffbf'              // aplico estilos
sectionPromos.id = 'home-promos'                        // agrego un ID "contenedor"
main.append(sectionPromos)                              // inserto la section

sectionPromos.innerHTML = `<strong>Promociones</strong>
                          <img src="/img/cancha-aerea.jpeg" alt="pasto"> Descuentos para nuestros clientes registrados
                          `



// FOOTER
// incluir Nombre del negocio (y logo de derechos) | redes sociales | año 
const footer = document.createElement('footer')
body.append(footer)

const year = new Date().getFullYear();

footer.className = 'footer'
footer.innerHTML = `
                    Contenido para el footer (derechos res) | redes sociales | ${year}
                   `
footer.style.background = '#80ff80' 