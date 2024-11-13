// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AuthService } from '../service/login.service'; // Asegúrate de crear el servicio auth si aún no lo tienes

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isLoginMode: boolean = true;
  errorMessage: string = '';

  // constructor(private fb: FormBuilder, private authService: AuthService)
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date_registered: [new Date().toISOString()]
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }

  // onSubmit() {
  //   if (this.isLoginMode) {
  //     this.authService.login(this.loginForm.value).subscribe({
  //       next: response => {
  //         console.log('Inicio de sesión exitoso', response);
  //       },
  //       error: error => {
  //         this.errorMessage = 'Error al iniciar sesión. Verifica tus credenciales.';
  //       }
  //     });
  //   } else {
  //     this.authService.register(this.registerForm.value).subscribe({
  //       next: response => {
  //         console.log('Registro exitoso', response);
  //       },
  //       error: error => {
  //         this.errorMessage = 'Error al registrarse. Inténtalo nuevamente.';
  //       }
  //     });
  //   }
  // }
}
