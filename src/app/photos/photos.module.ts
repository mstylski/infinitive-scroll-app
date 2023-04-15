import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotosListComponent} from './photos-list/photos-list.component';
import {PhotosItemComponent} from './photos-item/photos-item.component';
import {PhotosDetailComponent} from './photos-detail/photos-detail.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PhotosListComponent,
    PhotosItemComponent,
    PhotosDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class PhotosModule {
}
