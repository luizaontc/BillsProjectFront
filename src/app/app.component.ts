import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { BillComponent } from './features/bill/bill.component';
import { HeaderComponent } from './features/header/components/header.component';
import { LoginComponent } from './features/login/components/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet
    , BillComponent
    , HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'billsProjectFront';
}
