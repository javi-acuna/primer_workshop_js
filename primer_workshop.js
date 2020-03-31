class usuarios{
    constructor(nombre, apellido, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono; 
    }  

    getNombre(){
        return this.nombre; }

    getApellido(){
        return this.apellido; }

    listadoUsuarios(){
     return "Nombre: " + this.nombre +" Apellido: "+ this.apellido + "\nEmail: " + this.email + " Telefono: " +this.telefono;   }

}

class productos{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    listadoProductos(){
        return "Nombre: " + this.nombre +" Precio: "+ this.precio;   }
}

class pedidos{
    constructor(usuario, producto){
        this.usuario = usuario;
        this.producto = producto;
    }

    getUsuario(){
        return this.usuario; }

    getProducto(){
        return this.producto; }

    listadoPedidos(){
        return "Nombre: " + this.usuario +" Producto: "+ this.producto;   }
}

arrayPedidos = [];
arrayUsuario = [];
arrayProducto = [];

do{
opcion = parseInt(prompt("Ingrese opcion:\n1. Modulo usuario\n2. Modulo producto\n3. Modulo pedidos\n4. Salir del programa"));
switch (opcion) {
  case 1:
     do {
        op1 = parseInt(prompt("Ingrese opcion:\n1. Alta usuario\n2. Listado de usuarios\nPresione cualquier numero para regresar al menú inicial"));
        switch (op1) {
        case 1:
            do{
            nombre= prompt("Ingrese nombre: (Stop) para salir ");
            if(nombre !="Stop"){
                apellido = prompt("Ingrese apellido: ");
                email = prompt("Ingrese email: ");
                telefono = parseInt(prompt("Ingrese su telefono: "));
                user = new usuarios(nombre, apellido, email, telefono);
                arrayUsuario.push(user);}
            }while(nombre!="Stop");
            break;

        case 2:
            let cadenaUser ='';
            for (i=0;i<arrayUsuario.length;i++){
                cadenaUser +='\n '+[i+1]+'.- '+ arrayUsuario[i].listadoUsuarios();
            }
            alert(cadenaUser);
            break;

        default:
            break;
        }
     }while(op1==1 || op1==2);

     continue;

    case 2:
     do {
        op2 = parseInt(prompt("Ingrese opcion:\n1. Alta producto\n2. Listado de producto\nPresione cualquier numero para regresar al menú inicial"));
        switch (op2) {
        case 1:
            do{
            nombre = prompt("Ingrese nombre: (Stop) para salir ");
            if(nombre !="Stop"){
                precio = prompt("Ingrese precio: ");
                prod = new productos(nombre, precio);
                arrayProducto.push(prod);}
            }while(nombre!="Stop");
            break;

        case 2:
            let cadenaProd ='';
            for (i=0; i<arrayProducto.length; i++){
                cadenaProd +='\n '+[i+1]+'.- '+ arrayProducto[i].listadoProductos();
            }
            alert(cadenaProd);
            break;

        default:
            break;
        }
        
     }while(op2==1 || op2==2);

     continue;
    
     case 3:
        do {
            op3 = parseInt(prompt("Ingrese opcion:\n1. Alta pedido\n2. Listado de pedidos\nPresione cualquier numero para regresar al menú inicial"));
            switch (op3) {
            case 1:
                do{
                    do{
                    let cadenaUser ='';
                    for (i=0;i<arrayUsuario.length;i++){
                        cadenaUser +='\n '+[i+1]+'.- '+ arrayUsuario[i].getNombre()+' '+ arrayUsuario[i].getApellido();
                    }
                    userPedido = prompt("Seleccione usuario que realiza el pedido: (Stop) para salir \n"+cadenaUser);
                    if(userPedido=="Stop") break;
                    }while(userPedido>arrayUsuario.length || userPedido==0);

                    do{
                    if(userPedido=="Stop") break;
                    let cadenaProd ='';
                    for (i=0;i<arrayProducto.length;i++){
                        cadenaProd +='\n '+[i+1]+'.- '+ arrayProducto[i].listadoProductos();
                    }
                    prodPedido = prompt("Seleccione producto que realiza el pedido: \n"+cadenaProd);
                    }while(userPedido>arrayProducto.length || userPedido==0);
                    ped=new pedidos(userPedido, prodPedido);
                    arrayPedidos.push(ped);
                }while(userPedido!="Stop");
                break;
    
            case 2:
                let cadenaPed ='';
                for (i=0; i<arrayPedidos.length; i++){
                    cadenaPed +='\n '+[i+1]+'.- '+ arrayPedidos[i].listadoPedidos();
                }
                alert(cadenaPed);
                break;
    
            default:
                break;
            }
            
         }while(op3==1 || op3==2);
         
     continue;

    case 4: 
        break;
        
    default:
        break;
};

}while(opcion==1 || opcion==2 || opcion==3);