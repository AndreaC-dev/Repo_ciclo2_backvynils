import {Performer} from '../performer/performer'
  
export class Band extends Performer{
  constructor(id?:number, name?: string, image?: string, description?: string, public creationDate?:string){
    super(id, name, image, description);
  }
  
}

