import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Musician } from './musician';
import {MusicianDetail} from './musicianDetail'

@Injectable({
  providedIn: 'root'
})
export class MusicianService {
  private apiUrl:string=environment.baseUrl+'musicians';
  
  constructor(private http: HttpClient) { }
  getMusicians(): Observable<Array<MusicianDetail>> {
    return this.http.get<Array<MusicianDetail>>(this.apiUrl);
  }
  getMusicianDetail(musicianId): Observable<MusicianDetail> {
    return this.http.get<MusicianDetail>(`${this.apiUrl}/${musicianId}`);
  }
  createMusician(newMusician:Musician):Observable<Musician>{  
    return this.http.post<Musician>(this.apiUrl,newMusician)
} 
}
