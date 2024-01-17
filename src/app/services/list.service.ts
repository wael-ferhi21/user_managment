import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class ListService {
 

  constructor(private http: HttpClient,) { }
 


  //correction path getusers selon backend
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
   
  }
  getUserById(id:number): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/${id}`);
   
  }

  
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/users/${id}`);
  }
  updateUser(id: number,updatedUser:User) {
    return this.http.put(`${environment.apiUrl}/users/${id}`,updatedUser);
  }

}
