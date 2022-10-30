import { Performer } from "../performer/performer";
import { Album } from "./album";
import { Track } from "./track";
import { Comment } from "./comment";

export class AlbumDetail extends Album {


  constructor(
     id: number,
     name: string,
     cover: string,
     releaseDate: Date,
     description: string,
     genre: string,
     recordLabel: string,
     tracks: Array<Track>,
     performers: Performer,
     comments: Array<Comment>) {
       super(
     id,
     name,
     cover,
     releaseDate,
     description,
     genre,
     recordLabel,
     tracks,
     performers,
     comments);

  }

}
