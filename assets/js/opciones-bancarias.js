
var registros = [
    { nombre: 'Sofía Morales', correo: 'sofia@example.com', identificador: 0, clave: 'hola0', saldo: 27030000000 },
    { nombre: 'Juan Pérez', correo: 'juan@example.com', identificador: 1, clave: 'hola1', saldo: 10050000000 },
    { nombre: 'Ana Gómez', correo: 'ana@example.com', identificador: 2, clave: 'hola2', saldo: 20075000000 },
    { nombre: 'Luis Martínez', correo: 'luis@example.com', identificador: 3, clave: 'hola3', saldo: 15000000000 },
    { nombre: 'María López', correo: 'maria@example.com', identificador: 4, clave: 'hola4', saldo: 30020000000 },
    { nombre: 'Carlos García', correo: 'carlos@example.com', identificador: 5, clave: 'hola5', saldo: 25040000000 },
    { nombre: 'Elena Torres', correo: 'elena@example.com', identificador: 6, clave: 'hola6', saldo: 18090000000 },
    { nombre: 'José Fernández', correo: 'jose@example.com', identificador: 7, clave: 'hola7', saldo: 22010000000 },
    { nombre: 'Laura Sánchez', correo: 'laura@example.com', identificador: 8, clave: 'hola8', saldo: 26080000000 },
    { nombre: 'Pedro Ramos', correo: 'pedro@example.com', identificador: 9, clave: 'hola9', saldo: 19070000000 },
];

var client = {name: "", mail: "", id: 0, pass: "", balance: 0};
  
this.validateId();
this.validatePass();
this.menu();

function validateId() {
    var id = Number(prompt("Bienvenido a nuestra Banca en Línea \n\n\nIngrese su identificador: \n\n"));

    if (!Number.isInteger(id)) {
        alert("El identificador ingresado no es número");
        this.validateId();
    } else if (!registros.find(({ identificador }) => identificador === id)) {
        alert("El identificador ingresado no existe en nuestro banco");
        this.validateId();
    }
    this.client.id = id;
}

function validatePass() {
    var pass = prompt("Ingrese su clave secreta: \n\n");
    let reg = registros.find(({ identificador }) => identificador === client.id)
    reg.clave != pass ? (alert("La clave es incorrecta"), this.validatePass()) : 
    (client.name = reg.nombre, client.balance = reg.saldo, alert("Bienvenide nuevamente: "+ client.name )) ;
}

function menu() {
    var option = Number(prompt("Seleccione que desea hacer: \n\n\n 1.-Ver Saldo \n 2.-Realizar Giro \n 3.-Realizar Depósito\n 4.-Salir\n"));
    !Number.isInteger(option) ? (alert("El identificador ingresado no es número"), menu() ) : choice(option);       
}

function choice(option){
    
    switch (option) {
        case 1:
            this.balance();
            break;
        case 2:
            this.withdrawal();
            break;
        case 3:
            this.deposit();
            break; 
        case 4:
            alert("Esperamos vuelva pronto y gracias por preferir nuestros servicios!!");           
            break;        
        default:
            alert("La opción ingresada no es válida. Favor reingrese la opción");
            this.menu();
            break;
    }
}
function balance() {
    alert(client.name + " su saldo actual es: " + client.balance);
    this.menu();
}

function withdrawal() {
    var amount = Number(prompt("Su saldo actual es: " + client.balance + "\n\n Monto a girar: "));
    !Number.isInteger(amount) ? (alert("El monto ingresado no es un número"), withdrawal() ) : 
    amount > client.balance ? (alert("El monto ingresado supera el saldo existente"), withdrawal()) : (client.balance = client.balance-amount, alert("Giro realizado.Su nuevo saldo es: "+client.balance));
    this.menu();
}

function deposit() {
    var amount = Number(prompt("Su saldo actual es: " + client.balance + "\n\n Monto a depositar: "));
    !Number.isInteger(amount) ? (alert("El monto ingresado no es un número"), deposit() ) : (client.balance = client.balance+amount, alert("Deposito realizado.Su nuevo saldo es: "+client.balance));
    this.menu();    
}
