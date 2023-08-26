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

h1Titulo.innerHTML = `<strong>Maxiquiosco FC</strong>`; // genero el texto para mi tag h1
h1Titulo.style.color = '#26388C'
document.body.append(h1Titulo) // Agrego el nodo titulo


// searchBar

// main
const main = document.createElement('main') //creo el main
main.className ='contenedor-productos'
body.append(main)                           // inserto el main

// listado de productos

const productos = [
    {id: 1, nombre: "Galletitas Oreo", precio: 720, stock: 50, tipo: "almacen", imag:"../img/oreo.jpg", alt: "paquete oreo 117 gramos", cantidad: 1},
    {id: 2, nombre: "Alfajor Jorgito", precio: 280, stock: 100, tipo: "almacen", imag:"../img/alfajor-jorgito.png", alt: "alfajor jorgito simple", cantidad: 1},
	{id: 3, nombre: "Queso Finlandia light 330gr", precio: 950, stock: 0, tipo: "almacen", imag:"../img/finlandia-light.png", alt: "queso crema finlandia 330 gramos", cantidad: 1},
	{id: 4, nombre: "Agua Villavicencio", precio: 520, stock: 200, tipo: "bebidas", imag:"../img/agua-villavicencio.png", alt: "botella agua villavicencio dos litros", cantidad: 1},
	{id: 5, nombre: "Coca Cola 1,75 ltrs", precio: 950, stock: 200, tipo: "bebidas", imag:"../img/coca-cola.png", alt: "coca cola 1,75 litros", cantidad: 1},
	{id: 6, nombre: "Vino Trivento Malbec", precio: 4000, stock: 10, tipo: "bebidas alcoholicas", imag:"../img/trivento-malbec.png", alt: "vino malbec Trivento medalla", cantidad: 1},
	{id: 7, nombre: "Cerveza Heineken 1 ltr", precio: 900, stock: 150, tipo: "bebidas alcoholicas", imag:"../img/heineken.png", alt: "cerveza heineken un litro", cantidad: 1},
];

// carrito
const carrito = []; // primero vacío

carrito.length === 0 && console.log('El carrito está vacío') // validar el contenido

productos.forEach((prod) => {
    const divProds = document.createElement('div')    
    divProds.className ='card'
    divProds.innerHTML += `
                     <div>
                     <h3>${prod.nombre}</h3>
                     <img src="${prod.imag}" alt="${prod.alt}">
                     <p>Precio: $${prod.precio}</p>
                     <p>Cantidad: ${prod.cantidad}</p>
                     </div>
                     `;
    
    // creo y agrego el boton para comprar
    const btnComprar = document.createElement('button')
    btnComprar.innerText = "Agregar al carrito"
    btnComprar.className = 'btn-comprar'
    divProds.append(btnComprar)
    
    //ejecuto todo el foreach en un <div>
    main.append(divProds);

    //agregar el producto al carrito
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

    // JSON para item onclick
    localStorage.setItem('Carrito', JSON.stringify((carrito)))
    
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Producto fuera de stock',
                    text: 'Lo sentimos, pero no queda stock de ' + prod.nombre,
                    timer: 1500,
                    timeProgressBar: true
                });
            }
        };
    }
)


// FOOTER

const footer = document.createElement('footer')
body.append(footer)

footer.className = 'footer'
footer.innerHTML = `
                    Contenido para el footer - Links redes sociales - Fecha - Derechos reservados
                   `
footer.style.background = '#667AD9'


