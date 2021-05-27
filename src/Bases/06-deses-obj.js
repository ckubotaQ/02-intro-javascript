//Desestrcuturación 
// Asignación Desestructurante
const persona = {
    nombre: 'Mafer',
    edad: 45, 
    clave: 'Robin'
};
const usecontext = ({clave, nombre, edad, rango='superhero'}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latdlng: {
            lat: 12312,
            lng: 123132,
        }
    }
};
const superhero=usecontext(persona);
const {nombreClave, anios, latdlng:{lat, lng}} = superhero; 
console.log(nombreClave);
console.log(anios);
console.log(lat, lng);