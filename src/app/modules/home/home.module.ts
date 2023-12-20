import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageComponent,
    HomeRoutingModule,
    AppComponent,
    SharedModule
  ]
})
export class HomeModule { }
