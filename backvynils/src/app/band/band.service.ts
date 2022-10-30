import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {BandDetail} from './bandDetail'
import {Band} from './band'

@Injectable({
  providedIn: 'root'
})
export class BandService {

  private apiUrl:string=environment.baseUrl+'bands';
  constructor(private http: HttpClient) { }
  
  getBands(): Observable<Array<BandDetail>> {
    return this.http.get<Array<BandDetail>>(this.apiUrl);
  }

  getBandDetail(bandId): Observable<BandDetail> {
    return this.http.get<BandDetail>(`${this.apiUrl}/${bandId}`);
  }
  createBand(newBand:Band):Observable<Band>{  
    return this.http.post<Band>(this.apiUrl,newBand)
}   
addingMusician(band,musician):Observable<BandDetail>{  
  return this.http.post<BandDetail>(`${this.apiUrl}/${band.id}/musicians/${musician.id}`,null);
}
}


