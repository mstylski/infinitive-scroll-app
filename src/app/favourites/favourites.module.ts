import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FavouritesComponent} from './favourites/favourites.component';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    FavouritesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class FavouritesModule {
}
