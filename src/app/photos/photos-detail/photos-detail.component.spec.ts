import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDetailComponent } from './photos-detail.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PhotosDetailComponent', () => {
  let component: PhotosDetailComponent;
  let fixture: ComponentFixture<PhotosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosDetailComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
