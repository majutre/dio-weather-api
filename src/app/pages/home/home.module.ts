import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from 'src/app/shared/components/components.module';

import { HomePage } from './containers/home/home.page';
import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';
import { UnitSelectorComponent } from './containers/unit-selector/unit-selector.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ],
  declarations: [
    HomePage,
    CurrentWeatherComponent,
    UnitSelectorComponent,
  ],
})
export class HomeModule { }
