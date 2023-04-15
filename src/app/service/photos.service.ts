import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Photos} from '../photos/photos.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {
  }

  getPhotos(page: number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`https://api.pexels.com/v1/curated?page=${page}&per_page=15`, {
      headers: {'Authorization': 'JLqPzdEO9UjLm0v91sfhcr0EE1CFe8HU8QZfHUxZvR5uBkiJfqF409pW'},
    }).pipe(map((response: any) => response.photos))
  }
}
