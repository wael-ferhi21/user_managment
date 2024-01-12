import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {
    nom: null,
    prenom:null,
    email: null,
    age:null,
    cin:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { nom ,
      prenom,
      email ,
      age,
      cin,
      password } = this.form;

    this.authService.register( nom ,
    prenom,
    email ,
    age,
    cin,
    password).subscribe({
      next: data => {
        console.log(data);
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
