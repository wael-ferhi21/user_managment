import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListService {
 

  constructor(private http: HttpClient,) { }
 


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/user/all`);
   
  }
}