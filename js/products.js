// Defino mis elementos
const head = document.head
const body = document.body
const header = document.createElement('header')
const divs = document.createElement('div')


// HEAD

// meta
// link
// title
const titulo = document.createElement('title')
titulo.innerText = "Maxiquiosco FC - Productos"
head.appendChild(titulo) 

// logo
const divLogo = document.createElement('div')
divLogo.innerHTML = `<img src="/img/logo.jpg" alt="Logo Maxiquiosco FC">`
divLogo.style.width = '10%'

header.append(divLogo)

// nav
const navBar = document.createElement('nav')
const uls = document.createElement('ul')
header.className = 'menu'
divs.className = 'nav-menu'

const links = [
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
// Título
const h1Titulo = document.createElement('h1')

h1Titulo.innerHTML = `<strong>Maxiquiosco FC</strong>`;
h1Titulo.style.color = '#26388C'
h1Titulo.style.display = 'flex'; // Usa flexbox para centrar
h1Titulo.style.justifyContent = 'center'; // Centra horizontalmente
h1Titulo.style.alignItems = 'center'; // Centra verticalmente
h1Titulo.style.height = '5vh';
document.body.append(h1Titulo)

// main
const main = document.createElement('main')
main.className ='contenedor-productos'
body.append(main) 

// Busco mis productos del data.json
const getProducts = async () => {
    const response = await fetch('../data.json');
    const data = await response.json();
    data.forEach((prod) => {
        const divProds = document.createElement('div')    
        divProds.className ='card'
        divProds.innerHTML += `
                         <div>
                         <h3>${prod.nombre}</h3>
                         <img src="${prod.imag}" alt="${prod.alt}">
                         <p>Precio: $${prod.precio}</p>
                         </div>
                         `;
        const btnComprar = document.createElement('button')
        btnComprar.innerText = "Agregar al carrito"
        btnComprar.className = 'btn-comprar'
        divProds.append(btnComprar)
            
        main.append(divProds);
    
        btnComprar.onclick = () => {
            if (prod.stock > 0) {
    //logica para el boton confirmar con sweetalert
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto agregado al carrito',
                    showConfirmationButton: false,
                    timer: 1000
                });
    // Agrupado de productos iguales
        const existingProduct = carrito.find(item => item.id === prod.id);
            if (existingProduct) {
                existingProduct.cantidad++;
                } else {
                carrito.push({
                    id: prod.id,
                    img: prod.imag,
                    nombre: prod.nombre,
                    precio: prod.precio,
                    cantidad: 1
                    });
                }
        } else {
                    Swal.fire({         // Producto fuera de stock
                        icon: 'error',
                        title: 'Producto fuera de stock',
                        text: 'Lo sentimos, pero no queda stock de ' + prod.nombre,
                        timer: 1500,
                        timeProgressBar: true
                    });
                }
            saveLocal();
            };
        }
    );
}

getProducts();

// Me traigo el localStorage del carrito
const carrito = JSON.parse(localStorage.getItem('Carrito')) || [];
carrito.length === 0 && console.log('El carrito está vacío')

// Guardado localStorage - JSON para item onclick en string
const saveLocal = () => {
    localStorage.setItem('Carrito', JSON.stringify((carrito)))
}

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