import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { IonButton, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, IonInput, IonButton],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  login() {
    return this.authenticationService
      .login(
        this.loginForm.controls.username.value || '',
        this.loginForm.controls.password.value || ''
      )
      .subscribe();
  }
}
