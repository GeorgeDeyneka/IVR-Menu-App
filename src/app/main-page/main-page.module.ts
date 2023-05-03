import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [MainPageComponent, HomeComponent],
  imports: [CommonModule, RouterModule, MainPageRoutingModule],
})
export class MainPageModule {}
