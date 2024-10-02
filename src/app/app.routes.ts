import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/components/login.component';
import { DashboardComponent } from './features/dashboard/components/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: LoginComponent },
];
