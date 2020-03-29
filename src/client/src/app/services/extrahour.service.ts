import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Extrahour } from '../Extrahour';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExtrahourService {
  domain: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getExtrahours() {
    return this.http
      .get<Extrahour[]>(`${this.domain}/api/extraHours`)
      .pipe(map(res => res));
  }
  addExtrahours(newExtrahour: Extrahour) {
    return this.http
      .post<Extrahour>(`${this.domain}/api/extraHours`, newExtrahour)
      .pipe(map(res => res));
  }
  deleteExtrahours(id) {
    return this.http
      .delete(`${this.domain}/api/extraHours/${id}`)
      .pipe(map(res => res));
  }
  updateExtrahours(newExtrahour: Extrahour) {
    return this.http
      .put(`${this.domain}/api/extraHours/${newExtrahour._id}`, newExtrahour)
      .pipe(map(res => res));
  }
}
