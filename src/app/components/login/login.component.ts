import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  errorMessage: string = '';
  isLoginMode = true;
  toggleMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    //private loginService: AuthService,
    //private registerService: AuthService
  ) 
  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.errorMessage = '';
    if (this.isLoginMode) {
      //this.login();
    } else {
      this.register();
    }
  }

  // private login() {
  //   if (this.loginForm.invalid) {
  //     this.errorMessage = 'Por favor completa todos los campos correctamente.';
  //     return;
  //   }
  //   this.loginService.login(this.loginForm.value).subscribe({
  //     next: response => {
  //       console.log('Inicio de sesión exitoso', response);
  //     },
  //     error: () => {
  //       this.errorMessage = 'Error al iniciar sesión. Verifica tus credenciales.';
  //     }
  //   });
  // }

  private register() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Por favor completa todos los campos correctamente.';
      return;
    }
    // this.registerService.register(this.registerForm.value).subscribe({
    //   next: response => {
    //     console.log('Registro exitoso', response);
    //   },
    //   error: () => {
    //     this.errorMessage = 'Error al registrarse. Inténtalo nuevamente.';
    //   }
    // });
  }

  toggleModeHandler() {
    this.isLoginMode = !this.isLoginMode;
  }
}
