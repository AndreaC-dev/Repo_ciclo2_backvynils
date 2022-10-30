import { Performer } from "../performer/performer";
import { Comment } from "./comment";
import { Track } from "./track";

export class Album {

 constructor(
   public id?: number,
   public name?: string,
   public cover?: string,
   public releaseDate?: Date,
   public description?: string,
   public genre?: string,
   public recordLabel?: string,
   public tracks?: Array<Track>,
   public performers?: Performer,
   public comments?: Array<Comment>
 ) {
 }
}
