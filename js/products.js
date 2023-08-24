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

titulo.innerText = "Maxiquiosco FC - JS 3ra entrega" //agrego el contenido

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



header.style.background = 'grey'

// Titulo de index
const h1Titulo = document.createElement('h1') //asigno el tag titulo a un H1

h1Titulo.innerHTML = `<strong>Maxiquiosco FC</strong>`; // genero el texto para mi tag h1
h1Titulo.style.color = 'black'
document.body.append(h1Titulo) // Agrego el nodo titulo


// searchBar

// main
const main = document.createElement('main') //creo el main
body.append(main)                           // inserto el main

// listado de productos

const productos = [
    {id: 1, nombre: "Galletitas Oreo", precio: 520, stock: 50, tipo: "almacen", imag:"../img/oreo.jpg", alt: "paquete oreo 117 gramos"},
    {id: 2, nombre: "Alfajor Jorgito", precio: 220, stock: 100, tipo: "almacen", imag:"../img/alfajor-jorgito.png", alt: "alfajor jorgito simple"},
	{id: 3, nombre: "Queso Finlandia light 330gr", precio: 850, stock: 0, tipo: "almacen", imag:"../img/finlandia-light.png", alt: "queso crema finlandia 330 gramos"},
	{id: 4, nombre: "Agua Villavicencio", precio: 320, stock: 200, tipo: "bebidas", imag:"../img/agua-villavicencio.png", alt: "botella agua villavicencio dos litros"},
	{id: 5, nombre: "Coca Cola 1,75 ltrs", precio: 950, stock: 200, tipo: "bebidas", imag:"../img/coca-cola.png", alt: "coca cola 1,75 litros"},
	{id: 6, nombre: "Vino Trivento Malbec", precio: 1200, stock: 10, tipo: "bebidas alcoholicas", imag:"../img/trivento-malbec.png", alt: "vino malbec Trivento medalla"},
	{id: 7, nombre: "Cerveza Heineken 1 ltr", precio: 700, stock: 150, tipo: "bebidas alcoholicas", imag:"../img/heineken.png", alt: "cerveza heineken un litro"},
];

//creo el listado de productos
const productosContent = document.createElement('div')
productosContent.className ='contenedor-productos'
main.append(productosContent)

// carrito
const carrito = [];
// carrito vacio
carrito.length === 0 && console.log('El carrito está vacío')

productos.forEach((prod) => {
    const divProds = document.createElement('div')    
    divProds.className ='card'
    divProds.innerHTML += `
                     <div>
                     <h3>${prod.nombre}</h3>
                     <img src="${prod.imag}" alt="${prod.alt}">
                     <p>Precio: $${prod.precio}</p>
                     </div>
                     `;
    
    // creo y agrego el boton para comprar
    const btnComprar = document.createElement('button')
    btnComprar.innerText = "Agregar al carrito"
    divProds.append(btnComprar)
    btnComprar.className = 'btn-comprar'
    //ejecuto todo el foreach en un <div>
    main.append(divProds);

    //agregar el producto al carrito
    btnComprar.onclick = () => {
        carrito.push({
            id: prod.id,
            img: prod.imag,
            nombre: prod.nombre,
            precio: prod.precio,
            // stock: prod.stock,        
        });

    // JSON para item onclick
    localStorage.setItem('Carrito', JSON.stringify((carrito)))

    // calculo de stock onclick
    prod.stock > 0 ? console.log('Hay stock de ' + prod.nombre) : alert('Lo sentimos, pero no queda stock de ' + prod.nombre)
    }
})

// div para el acceso al carrito
const divModal = document.createElement('div')
divModal.innerHTML = "<button>🛒</button>"
divModal.className = 'modal-carrito'
header.append(divModal)


// accion sobre el boton Cart
divModal.addEventListener("click", () => {
    divModal.innerHTML="";
    divModal.style.display = "flex"
    const modalHeader = document.createElement('div')
    modalHeader.className ='modal-box'
    modalHeader.innerHTML = `
        <h2 class="modal-title">Carrito de compras</h2>
    `;
    divModal.append(modalHeader);
    // creo el boton para cerrar el modal
    const modalCancel = document.createElement('p')
    modalCancel.className ='modal-cancel'
    modalCancel.innerHTML = `x`;
    
    modalCancel.addEventListener("click", () => {
        divModal.style.display = "none"
    })
    modalHeader.append(modalCancel);

    
    // creo el contenido de mi modal

    //busco mis productos

    carrito.forEach((producto) => { // Changed variable name from 'productos' to 'producto'
        let carritoContent = document.createElement('div')
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = ` 
                    <h3>${producto.nombre}</h3>
                    <img src="${producto.img}" alt="${producto.alt}">
                    <p>Precio: $${producto.precio}</p>
        `
        modalHeader.append(carritoContent)
    })

    const total = carrito.reduce((acc, elemento) => acc + elemento.precio, 0);
    // Display total in the modal
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total a pagar: $${total}`;
    modalHeader.append(totalElement);

    // creo boton de confirmar compra
    const btnConfirmar = document.createElement('button')
    btnConfirmar.innerText = "Confirmar pedido"
    modalHeader.append(btnConfirmar)
    btnConfirmar.className = 'btn-confirmar-compra'

})




// FOOTER

const footer = document.createElement('footer')
body.append(footer)

footer.className = 'footer'
footer.innerHTML = `
                    Contenido para el footer - Links redes sociales - Fecha - Derechos reservados
                   `
footer.style.background = '#80ff80'


