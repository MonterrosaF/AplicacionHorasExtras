import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Users';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  domain: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<Users[]>(`${this.domain}/api/users`)
      .pipe(map(res => res));
  }
}
