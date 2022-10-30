import {Performer} from '../performer/performer'

export class CollectorPerformers extends Performer{
  constructor(id?:number, name?: string, image?: string, description?: string, public birthDate?:string){
    super(id, name, image, description);
  }

}

