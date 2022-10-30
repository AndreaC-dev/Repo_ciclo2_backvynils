import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Album } from "./album";
import { Comment } from "./comment";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl: string =  environment.baseUrl + "albums";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  createAlbum(newAlbum:Album):Observable<Album>{
    return this.http.post<Album>(this.apiUrl,newAlbum)
}

  createComment(newComment:Comment):Observable<Comment>{
    return this.http.post<Comment>(this.apiUrl,newComment)
}
}
