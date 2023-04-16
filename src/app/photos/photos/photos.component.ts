import {Component, OnInit} from '@angular/core';
import {Photo} from '../photos.model';
import {PhotosService} from '../../services/photos.service';
import {delay, take} from 'rxjs';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = []
  page: number = 1
  isLoading: boolean = false;

  constructor(private photosService: PhotosService) {
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photosService.getPhotos(this.page)
      .pipe(take(1))
      .subscribe((photos: Photo[]) => {
        this.photos = photos
      })
  }

  onScroll() {
    this.isLoading = true;
    this.photosService.getPhotos(++this.page)
      .pipe(
        take(1),
        delay(1000)
      )
      .subscribe((photos: Photo[]) => {
        this.photos.push(...photos)
        this.isLoading = false
      })
  }
}
