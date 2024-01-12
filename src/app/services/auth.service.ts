import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class AuthService {

    public currentUser!: Observable<User>;
    provider: any;
   user!: User;
    constructor(private http: HttpClient){}



  register(email:string,nom:string,prenom:string,password:string,cin:number,age:number) {
    return this.http.post(`${environment.apiUrl}/user/create`,
     {email,nom,prenom,password,cin,age},
     httpOptions);
  }



    }


   
    
    
