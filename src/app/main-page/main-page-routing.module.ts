import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomeComponent } from './home/home.component';
import { CreateIvrComponent } from './create-ivr/create-ivr.component';
import { ActionsIvrComponent } from './actions-ivr/actions-ivr.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'create-page',
        component: CreateIvrComponent,
      },
      {
        path: 'actions-page',
        component: ActionsIvrComponent,
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
