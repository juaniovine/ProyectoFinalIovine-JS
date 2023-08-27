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

titulo.innerText = "Maxiquiosco FC - Contacto" //agrego el contenido

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

h1Titulo.innerHTML = `<strong>Maxiquiosco FC</strong>`; // genero el texto para mi tag h1
h1Titulo.style.color = '#26388C'
h1Titulo.style.display = 'flex'; // Usa flexbox para centrar
h1Titulo.style.justifyContent = 'center'; // Centra horizontalmente
h1Titulo.style.alignItems = 'center'; // Centra verticalmente
h1Titulo.style.height = '20vh';
document.body.append(h1Titulo) // Agrego el nodo titulo


// acceso al carrito

const carritoString = localStorage.getItem('carrito');
const carrito = carritoString ? JSON.parse(carritoString) : [];



// formulario

// Crear la sección de contacto
const sectionContacto = document.createElement('section');
sectionContacto.id = 'contacto';

// Crear contenido para la sección de contacto
const contactTitle = document.createElement('h2');
contactTitle.textContent = 'Contactanos'; // Título de la sección de contacto

const contactForm = document.createElement('form');
contactForm.className = 'contact-form'; // Clase para aplicar estilos si es necesario
contactForm.style.height = '50vh';

const nameLabel = document.createElement('label');
nameLabel.textContent = 'Nombre:';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'nombre';

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.name = 'email';

const messageLabel = document.createElement('label');
messageLabel.textContent = 'Mensaje:';
const messageTextarea = document.createElement('textarea');
messageTextarea.name = 'mensaje';
messageTextarea.rows = 4;

const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar';

// Agregar elementos al formulario de contacto
contactForm.append(
  nameLabel, nameInput,
  emailLabel, emailInput,
  messageLabel, messageTextarea,
  submitButton
);

// Agregar elementos a la sección de contacto
sectionContacto.append(contactTitle, contactForm);

// Agregar la sección de contacto al documento
body.append(sectionContacto);


// Footer
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