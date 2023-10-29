import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateLodge, Lodge } from './store/lodge/lodge';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LodgesService {
  constructor(private _httpClient: HttpClient) {}

  getLodge() {
    return this._httpClient.get<Lodge[]>(`${environment.apiUrl}lodge`);
  }
  createLodge(payload: Lodge) {
    return this._httpClient.post<CreateLodge>(
      `${environment.apiUrl}lodge`,
      payload
    );
  }
}
