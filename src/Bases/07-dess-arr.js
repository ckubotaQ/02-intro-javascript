const personajes = ['tanjiro', 'rebeca', 'takito'];
const [,,p3] = personajes;
console.log(p3)
const retornaArreglo = () => {
    return ['ACB', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);
const usestate = (valor) => {
    return [valor, () =>{console.log('hola mundo')}]
}
const [nombre, setNombre] = usestate('goku');
console.log(nombre)
setNombre();