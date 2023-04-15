import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

const materialModule = [
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [InfiniteScrollModule, materialModule]
})
export class SharedModule { }
