import {CollectorAlbums} from  './collectorAlbums';
import {CollectorPerformers} from './collectorPerformers';
export class Coleccionista {
    name: string;
    id: number;
    favoritePerformers: Array<CollectorPerformers>
    favoritePerformersName: string;
    collectorAlbums: Array<CollectorAlbums>;

    public constructor(id: number, name: string, collectorPerformers: Array<CollectorPerformers> ,  favoritePerformersName: string) {
      this.id = id;
      this.name = name;
      this.favoritePerformers = collectorPerformers;
      this.favoritePerformersName = favoritePerformersName;
    }
}
