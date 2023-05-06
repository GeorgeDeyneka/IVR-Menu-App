import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { MainPageRoutingModule } from './main-page-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header/header.component';
import { CreateIvrComponent } from './create-ivr/create-ivr.component';
import { SharedModule } from '../shared/shared.module';
import { ActionsIvrComponent } from './actions-ivr/actions-ivr.component';
import { ActionsTableComponent } from './actions-ivr/actions-table/actions-table.component';
import { ListIvrComponent } from './list-ivr/list-ivr.component';
import { ItemIvrDetailsComponent } from './item-ivr-details/item-ivr-details.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HomeComponent,
    HeaderComponent,
    CreateIvrComponent,
    ActionsIvrComponent,
    ActionsTableComponent,
    ListIvrComponent,
    ItemIvrDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class MainPageModule {}
