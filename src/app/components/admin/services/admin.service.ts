import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getPersonalList() {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5')
  }

  public getPerson(id: number) {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
