import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBtnComponent } from './components/router-btn/router-btn.component';
import { RouterModule } from '@angular/router';
import { HomeBtnComponent } from './components/home-btn/home-btn.component';

@NgModule({
  declarations: [RouterBtnComponent, HomeBtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterBtnComponent, HomeBtnComponent]
})
export class SharedModule {}
