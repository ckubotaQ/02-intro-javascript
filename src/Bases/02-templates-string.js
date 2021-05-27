//template string
const nombre= 'carlos';
const apellido = 'Kubota';
//const = nombre + '' + apellido;
const nombreCompleto=`
${nombre}
 ${apellido}
 ${1+1}
 `;
console.log( nombreCompleto );



function getSaludo(nombre){
    return 'hola ' + nombre;
}
console.log(`Este es un saludo:  ${ getSaludo(nombre)}`)