import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  registroForm: FormGroup;
  enviado: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get f() { return this.registroForm.controls; }

  onSubmit() {
    this.enviado = true;
    if (this.registroForm.invalid) {
      return;
    }
    alert("¡Bienvenido al mundo de los idiomas! 🎉");
  }
}
