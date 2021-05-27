const persona = {
nombre: 'Bojack',
apellido: 'Horseman',
edad : 45,
direction : {
    ciuedad : 'Coatza',
    CP: 96410,
    lat: 1212312,
    lng: 122.12,
}

}


//no hacer mutaciones, copia referencia de memoria
//const persona2 = persona;
const persona2= {...persona};
persona2.nombre='peter';
console.log(
    {persona})
console.log(
    {persona2})