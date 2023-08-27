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
                    <div class="info-cart">
                    <p>Precio c/u: $${producto.precio}</p>
                    <div class="btn-cart-cantidad">
                        <button class="btn-decrementar">-</button>
                        <button class="btn-incrementar">+</button>
                    </div>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Total: $${producto.cantidad * producto.precio}</p>
                    </div>
        `;
// botones de suma y resta de productos
        const btnIncrementar = carritoContent.querySelector('.btn-incrementar');
        const btnDecrementar = carritoContent.querySelector('.btn-decrementar');

        btnIncrementar.addEventListener('click', () => {
            producto.cantidad++;
            saveLocal();
            recalcularTotal();
            actualizarContenidoModal();
        });

        btnDecrementar.addEventListener('click', () => {
            if (producto.cantidad > 1) {
                producto.cantidad--;
                saveLocal();
                recalcularTotal();
                actualizarContenidoModal();
            }
        });

        function actualizarContenidoModal() {
            const cantidadElement = carritoContent.querySelector('p:last-child');
            cantidadElement.textContent = `Cantidad: ${producto.cantidad}`;
        }

// boton eliminar
        const eliminar = document.createElement('span');
        eliminar.innerText = '❌';
        eliminar.className = 'delete-product';
        
        eliminar.addEventListener('click', () => {
            carrito.splice(index, 1); 
            modalHeader.removeChild(carritoContent); 
            recalcularTotal();
// recalculo el carrito al borrar items
            saveLocal();
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

//  boton confirmar compra
    const btnConfirmar = document.createElement('button')
    btnConfirmar.innerText = "Confirmar pedido"
    modalHeader.append(btnConfirmar)
    btnConfirmar.className = 'btn-confirmar-compra'


// recalculo el total por cambio de cantidad
function recalcularTotal() {
    const total = carrito.reduce((acc, elemento) => acc + elemento.precio, 0);
    const totalElement = document.querySelector('.modal-header-total');
    if (totalElement) {
        totalElement.textContent = `Total a pagar: $${total}`;
    }
}
})




