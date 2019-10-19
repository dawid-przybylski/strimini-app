import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAssetPageComponent } from './media-asset-page.component';

describe('MediaAssetPageComponent', () => {
  let component: MediaAssetPageComponent;
  let fixture: ComponentFixture<MediaAssetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaAssetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAssetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
