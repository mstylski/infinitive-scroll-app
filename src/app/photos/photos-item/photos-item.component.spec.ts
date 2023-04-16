import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosItemComponent } from './photos-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PhotosItemComponent', () => {
  let component: PhotosItemComponent;
  let fixture: ComponentFixture<PhotosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
