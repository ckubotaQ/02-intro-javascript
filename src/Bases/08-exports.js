//import {heroes} from './data/heroes';
import heroes,{owners} from '../data/heroes';
export const getHeroeByID = (id) =>  heroes.find((heroe) => heroe.id === id);
//console.log(getHeroeByID(2))
// filter
//
 const getHeoresByOwner = ( owner) =>  heroes.filter((heroe) => heroe.owner === owner  );
//console.log(getHeoresByOwner('Marvel'));