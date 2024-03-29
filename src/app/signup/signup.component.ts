import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  /*form: any = {
    nom: null,
    prenom:null,
    email: null,
    age:null,
    cin:null,
    password: null
  };*/
// changer form par user:User=new User()
  user:User=new User()
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  //changer nom , prenom, email , age, cin, password par this.user (class user)

  onSubmit(): void {

    this.authService.register(this.user).subscribe({
      next: data => {
        console.log(data);
        this.user=new User()
                this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
