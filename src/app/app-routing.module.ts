import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './photos/photos/photos.component';
import {PhotosDetailComponent} from './photos/photos-detail/photos-detail.component';
import {FavouritesComponent} from './favourites/favourites/favourites.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: 'photos', component: PhotosComponent},
  {path: 'favourites', component: FavouritesComponent},
  {path: 'photos/:id', component: PhotosDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
