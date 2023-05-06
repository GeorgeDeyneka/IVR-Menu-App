import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomeComponent } from './home/home.component';
import { CreateIvrComponent } from './create-ivr/create-ivr.component';
import { ActionsIvrComponent } from './actions-ivr/actions-ivr.component';
import { IvrCreatedGuard } from '../shared/guards/ivr-created.guard';
import { ItemIvrDetailsComponent } from './item-ivr-details/item-ivr-details.component';
import { PageNotFoundComponent } from '../shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'create-page',
        component: CreateIvrComponent,
      },
      {
        path: 'actions-page',
        // canActivate: [IvrCreatedGuard],
        component: ActionsIvrComponent,
      },
      {
        path: '404-page',
        component: PageNotFoundComponent,
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: ItemIvrDetailsComponent,
      },
      {
        path: '**',
        redirectTo: '404-page',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
