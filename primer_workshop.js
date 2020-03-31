const OPCIONES_MENU_PRINCIPAL = `
  Elija una opcion:
  1- Usuarios
  2- Productos
  3- Pedidos
  4- Salir
`;

const OPCIONES_MENU_USUARIO = `
  Elija una opcion:
  1 Listado usuarios
  2 Alta usuario
  3 Volver
`;

const OPCIONES_MENU_PRODUCTO = `
  Elija una opcion:
  1 Listado productos
  2 Alta producto
  3 Volver
`;

const OPCIONES_MENU_PEDIDO = `
  Elija una opcion:
  1 Listado pedidos
  2 Alta pedido
  3 Volver
`;

const usuarios = [];

function listarUsuarios() {
	console.log('Listado de usuarios...');
	usuarios.forEach((u) => console.log(`Usuario: ${u.nombre} - Email: ${u.email}`));
}

function darAltaUsuario(usuario) {
	usuarios.push(usuario);
	console.log('Usuario dado de alta');
	return usuarios.slice();
}

function darBajaUsuario() {
	let index = usuarios.indexOf(this);
	if (index !== -1) {
		console.log('Usuario dado de baja');
		usuarios.splice(index, 1);
	} else {
		console.log('Usuario no encontrado');
	}
}

function buscarUsuario(nombreUsuario) {
	return usuarios.find((p) => p.nombre === nombreUsuario);
}

const productos = [];

function darAltaProducto(nuevoProducto) {
  // Validaciones?
  productos.push(nuevoProducto);
  console.log("Producto dado de alta");
  return productos.slice();
}

function darBajaProducto(nombreProducto) {
  let index = productos.findIndex(p => p.nombre === nombreProducto);
  if (index !== -1) {
    console.log("Producto dado de baja");
    productos.splice(index, 1);
  } else {
    console.log("Producto no encontrado");
  }
}

function listarProductos() {
  console.log("Listado de productos...");
  productos.forEach(p => console.log(`Nombre Producto: ${p.nombre} - Precio Producto: ${p.precio}`));
}

function buscarProducto(nombreProducto) {
  return productos.find(p => p.nombre === nombreProducto);
}

const pedidos = [];

function ingresarUsuario() {
	const nombre = prompt('Nombre de usuario');
	const apellido = prompt('Apellido de usuario');
	const edad = prompt('Edad de usuario');
	const email = prompt('Email de usuario');
	const telefono = prompt('Telefono de usuario');
	return { nombre, apellido, edad, email, telefono };
}

function ingresarProducto() {
	const nombre = prompt('Nombre de producto');
	const precio = parseInt(prompt('Precio de producto'));
	return { nombre, precio };
}

function darAltaPedido() {
	const nombreUsuario = prompt('Ingrese el nombre del usuario que realiza el pedido');
	const nombreProducto = prompt('Ingrese el nombre del producto sobre el que realiza el pedido');
	const usuarioValido = buscarUsuario(nombreUsuario);
	const productoValido = buscarProducto(nombreProducto);
	// TODO: Agregar confirmacion
	if (usuarioValido && productoValido) {
		pedidos.push({
			usuario: usuarioValido.nombre,
			producto: productoValido.nombre
		});
	}
}

function listarPedidos() {
	console.log('Listado de pedidos...');
	pedidos.forEach((p) => console.log(`Usuario del pedido: ${p.usuario} - Producto: ${p.producto}`));
}

function submenuUsuario() {
	let opcion = prompt(OPCIONES_MENU_USUARIO);
	while (opcion !== '3') {
		switch (opcion) {
			case '1':
				listarUsuarios();
				break;
			case '2':
				let usuario = ingresarUsuario();
				darAltaUsuario(usuario);
			case '3':
				break;
		}
		opcion = prompt(OPCIONES_MENU_USUARIO);
	}
}

function submenuProducto() {
	let opcion = prompt(OPCIONES_MENU_PRODUCTO);
	while (opcion !== '3') {
		switch (opcion) {
			case '1':
				listarProductos();
				break;
			case '2':
				let producto = ingresarProducto();
				darAltaProducto(producto);
			case '3':
				break;
		}
		opcion = prompt(OPCIONES_MENU_PRODUCTO);
	}
}

function submenuPedido() {
	let opcion = prompt(OPCIONES_MENU_PEDIDO);
	while (opcion !== '3') {
		switch (opcion) {
			case '1':
				listarPedidos();
				break;
			case '2':
				darAltaPedido();
			case '3':
				break;
		}
		opcion = prompt(OPCIONES_MENU_PEDIDO);
	}
}

function menuPrincipal() {
	let opcion;
	do {
		opcion = prompt(OPCIONES_MENU_PRINCIPAL);
		switch (opcion) {
			case '1':
				submenuUsuario();
				break;
			case '2':
				submenuProducto();
				break;
			case '3':
				submenuPedido();
				break;
			case '4':
				return;
		}
	} while (opcion !== '4');
}

menuPrincipal();