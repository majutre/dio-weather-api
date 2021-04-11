import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';



@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', {}),
  ]
})
export class HomeModule { }
