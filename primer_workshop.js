class usuarios{
    constructor(nombre, apellido, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono; 
    }  

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
   
arrayUsuario=[];
arrayProducto=[];

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
        op2 = parseInt(prompt("Ingrese opcion:\n1. alta producto\n2. listado de producto\nPresione cualquier numero para regresar al menú inicial"));
        switch (op2) {
        case 1:
            do{
            nombre = prompt("Ingrese nombre: (Stop) para salir ");
            if(nombre !="Stop"){
            precio = prompt("Ingrese precio: ");
            prod = new productos(nombre, precio );
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

    case 4: 
        break;
};

}while(opcion==1 || opcion==2 || opcion==3);