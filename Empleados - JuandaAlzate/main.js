let listaDeEmpleados = [];
let EmpleadoConstructor = function (nombre, apellido, fecha, cargo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
    this.cargo = cargo;
}

let almacenarEmpleado = function () {
    let campoNombre = document.getElementById("nombre");
    let campoApellido = document.getElementById("apellido");
    let campoFecha = document.getElementById("fecha");
    let campoCargo = document.getElementById("cargo");
    let nuevosEmpleados = new EmpleadoConstructor(campoNombre.value, campoApellido.value, campoFecha.value, campoCargo.value);
    listaDeEmpleados.push(nuevosEmpleados);
    campoNombre.value = "";
    campoApellido.value = "";
    campoFecha.value = "";
    campoCargo.value = "";
    alert("Empleado Agregado");
}

let listarEmpleados = function () {
    let mensaje = "";
    for ( let empleado in listaDeEmpleados) {
        let empleados = listaDeEmpleados[empleado];
        mensaje += `NOMBRE: ${empleados.nombre}\n`;
        mensaje += `APELLIDO: ${empleados.apellido}\n`;
        mensaje += `FECHA: ${empleados.fecha}\n`;
        mensaje += `CARGO: ${empleados.cargo}\n\n`;
    }
    alert(mensaje);
}