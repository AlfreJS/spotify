import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

export const routes: Routes = [ 
  {
    path: 'auth', 
    loadChildren:() => import('./modules/auth/auth.module').then(m=>m.AuthModule) 
  },
  {
    path: '', //TODO: cuando está vacío, la ruta es la raiz del proyecto
    component: HomePageComponent,
    loadChildren:() => import('./modules/home/home.module').then(m=>m.HomeModule)
  }

];
