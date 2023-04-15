import {Component, OnInit} from '@angular/core';
import {PhotosService} from '../../service/photos.service';
import {Photos} from '../photos.interface';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  photos!: any
  page: number = 1

  constructor(private photosService: PhotosService) {
  }

  ngOnInit() {
    this.getPhotos();
  }


  getPhotos() {
    this.photosService.getPhotos(this.page).subscribe((photos: Photos[]) => {
      this.photos = photos
    })
  }


  onScroll() {
    this.photosService.getPhotos(++this.page).subscribe((photos: Photos[]) => {
      this.photos.push(...photos)
    })
  }
}
