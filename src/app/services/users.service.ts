import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Root, User } from './users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<Root>(this.baseURL).pipe(
      map((res: Root) => {
        return res.data
      })
    )
  }
}
