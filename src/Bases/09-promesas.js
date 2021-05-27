import { getHeroeByID } from "./Bases/08-exports";
/*    const promesa = new Promise( (resolve, reject) =>{
        setTimeout(() => {
            //importar el getHeroeByID(2);
        
            //resolve();
            const heroe = getHeroeByID(4);
            //resolve (heroe);
            reject('no se pudo encontrar el heroe')
        }, 2000);
    } );

    promesa.then((heroe)=>{
        console.log('heroe', heroe);
    })
    .catch( err => console.warn(err) )
*/
const getHeoresByIdAsync = (id) =>{
    return  new Promise( (resolve, reject) =>{
        setTimeout(() => {
            //importar el getHeroeByID(2);
        
            //resolve();
            const heroe = getHeroeByID(id);
            if(heroe){
                resolve(heroe)
            }else{
                reject('no encontrado')
            }
            
        }, 2000);
    } );
}
getHeoresByIdAsync(2)
.then(console.log)
.catch(console.warn)
