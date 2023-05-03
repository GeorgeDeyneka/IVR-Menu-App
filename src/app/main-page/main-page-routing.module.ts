import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
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
