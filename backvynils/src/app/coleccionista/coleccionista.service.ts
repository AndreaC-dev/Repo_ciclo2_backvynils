import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coleccionista } from './coleccionista';
import { CollectorDetail } from './collectorDetail'
import { Musician } from 'src/app/musician/musician';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColeccionistaService {
  private apiUrl = environment.baseUrl + 'collectors';

  constructor(private http: HttpClient) { }

  getColeccionistas(): Observable<Coleccionista[]> {
    return this.http.get<Coleccionista[]>(this.apiUrl);
  }

  createColeccionista(newColeccionista:Coleccionista):Observable<Coleccionista>{
    return this.http.post<Coleccionista>(this.apiUrl,newColeccionista)
  }

  getCollectorPerformers(collectorID): Observable<Musician[]> {
    return this.http.get<Musician[]>(`${this.apiUrl}/${collectorID}/performers`);
  }

  getCollectorDetail(collectorID): Observable<CollectorDetail> {
    return this.http.get<CollectorDetail>(`${this.apiUrl}/${collectorID}`);
  }

  addPerformerToCollector(collectorID, musicianID): Observable<CollectorDetail> {
    return this.http.post<CollectorDetail>(`${this.apiUrl}/${collectorID}/musicians/${musicianID}`,null);
  }
}
