//funciones
const saludar= function saludar (nombre) {
    return `hola, ${nombre}`;
    
}
const saludar2 =  (nombre) => {
    return `hola, ${nombre}`;
    
}
const saludar3 =  (nombre) => `hola, ${nombre}`;
const saludar4 =  () => `hola, mundo`;
//console.log(saludar('goku'));
//console.log(saludar2('goku'));
//console.log(saludar3('pcoro'));
//console.log(saludar4());
const getUser = () => ({
    
        uid: 'ABC123',
        username: 'kubota23'

    
})
console.log(getUser());
/*
Tarea
1. transformar a una funcion flecha, 
2. Tiene que retonrar un objeto implicito,
3. Pruebas
*/
function getUsuarioActivo (nombre) {
    return {
        uid: 'ABC3123',
        username: nombre,
    }
}
const usuarioActivo = getUsuarioActivo('Kubota');
console.log(usuarioActivo);
//intento 1
const usuarioActivo2 = (nombre) => (
     {
        uid: 'ABC3123',
        username: nombre,
    }
);
console.log(usuarioActivo2('rebeca'));
    
