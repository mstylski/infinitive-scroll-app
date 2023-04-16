import {Component} from '@angular/core';
import {Photos} from '../photos.model';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.scss']
})
export class PhotosDetailComponent {
  photos!: Photos;
}
