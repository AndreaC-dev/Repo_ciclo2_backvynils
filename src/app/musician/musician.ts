import {Performer} from '../performer/performer'
  
export class Musician extends Performer{
  constructor(id?:number, name?: string, image?: string, description?: string, public birthDate?:string){
    super(id, name, image, description);
  }
  
}


