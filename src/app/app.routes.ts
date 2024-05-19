import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductComponent },
];
