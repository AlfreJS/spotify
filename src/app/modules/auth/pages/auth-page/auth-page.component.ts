import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {  } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

  formLogin:FormGroup = new FormGroup({})

  constructor(private _authService: AuthService) { }
  
  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    });

  }

  sendLogin():void{
    const {email, password} = this.formLogin.value;
    this._authService.sendCredentials(email, password );
  }
}
