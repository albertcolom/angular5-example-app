import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user.model';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor (private http: HttpClient) {}
  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + userId);
  }
}
