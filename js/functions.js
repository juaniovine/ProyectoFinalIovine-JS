// navbar links
links.forEach((menu) => {
    uls.innerHTML+= `
        <li class="nav-item">
            <a class="nav-link" href="/content/${menu.page}.html">${menu.link}</a>
        </li>
    `
})


// function para el carrito

const divModal = document.createElement('div')
divModal.innerHTML = "<button>🛒</button>"
divModal.className = 'modal-carrito'
header.append(divModal)

const botonCarritoContenido = divModal.innerHTML;

// accion sobre el boton Cart
divModal.addEventListener('click', () => {
    divModal.innerHTML=''; // limpio la info
    divModal.style.display = 'flex'
    const modalHeader = document.createElement('div')
    modalHeader.className ='modal-box'
    modalHeader.innerHTML = `
        <div class="modal-header"> 
            <h2 class="modal-header-title">Carrito de compras</h2>
        </div>
    `;
    divModal.append(modalHeader);
    
    // creo el boton para cerrar el modal
    const modalCancel = document.createElement('h2')
    
    modalCancel.className ='modal-cancel'
    modalCancel.innerHTML = `x`;   
    modalCancel.addEventListener('click', (event) => {
        divModal.style.display = 'none';
        divModal.innerHTML = botonCarritoContenido;
    event.stopPropagation();
    divModal.style.display = 'flex';
    divModal.innerHTML = botonCarritoContenido;
});
    modalHeader.append(modalCancel);
    
    // creo el contenido de mi modal
    carrito.forEach((producto,index) => {
        let carritoContent = document.createElement('div')
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = ` 
                    <h3>${producto.nombre}</h3>
                    <img src="${producto.img}" alt="${producto.alt}">
                    <p>Precio c/u: $${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Total: $${producto.cantidad * producto.precio}</p>
        `;

        const eliminar = document.createElement('span');
        eliminar.innerText = '❌';
        eliminar.className = 'delete-product';
        
        eliminar.addEventListener('click', () => {
            carrito.splice(index, 1); 
            modalHeader.removeChild(carritoContent); 
            recalcularTotal(); 
        });
        
        carritoContent.append(eliminar);
        modalHeader.append(carritoContent);
        console.log(carrito.length)

    })

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    // Display total in the modal
    const totalElement = document.createElement('p');
    totalElement.textContent = `Total a pagar: $${total}`;
    modalHeader.append(totalElement);

    // creo boton de confirmar compra
    const btnConfirmar = document.createElement('button')
    btnConfirmar.innerText = "Confirmar pedido"
    modalHeader.append(btnConfirmar)
    btnConfirmar.className = 'btn-confirmar-compra'

    
function recalcularTotal() {
    const total = carrito.reduce((acc, elemento) => acc + elemento.precio, 0);
    const totalElement = document.querySelector('.modal-header-total');
    if (totalElement) {
        totalElement.textContent = `Total a pagar: $${total}`;
    }
}
})




