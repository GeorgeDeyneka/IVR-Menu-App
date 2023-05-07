import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBtnComponent } from './components/router-btn/router-btn.component';
import { RouterModule } from '@angular/router';
import { HomeBtnComponent } from './components/home-btn/home-btn.component';
import { SimpleBtnComponent } from './components/simple-btn/simple-btn.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ModalComponent } from './modal/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    RouterBtnComponent,
    HomeBtnComponent,
    SimpleBtnComponent,
    PageNotFoundComponent,
    ModalComponent,
  ],
  imports: [CommonModule, RouterModule, MatDialogModule],
  exports: [RouterBtnComponent, HomeBtnComponent, SimpleBtnComponent],
})
export class SharedModule {}
