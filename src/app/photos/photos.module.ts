import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotosComponent} from './photos/photos.component';
import {PhotosItemComponent} from './photos-item/photos-item.component';
import {PhotosDetailComponent} from './photos-detail/photos-detail.component';
import {SharedModule} from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    PhotosComponent,
    PhotosItemComponent,
    PhotosDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
})
export class PhotosModule {
}
