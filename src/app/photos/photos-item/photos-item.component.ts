import {Component, Input} from '@angular/core';
import {Photo} from '../photos.model';

@Component({
  selector: 'app-photos-item',
  templateUrl: './photos-item.component.html',
  styleUrls: ['./photos-item.component.scss']
})
export class PhotosItemComponent {
  @Input() photos!: Photo[];
  @Input() isLoading: boolean = false;

  trackBy(index: number, value: any) {
    return value.photo
  }
}
