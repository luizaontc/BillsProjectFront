import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router){}

  doLogin() { // Renomeando para doLogin()
    console.log('Login submitted');
    // Aqui você pode adicionar a lógica de autenticação, se necessário
    this.router.navigate(['/dashboard']); // Redireciona para o Dashboard
  }
}