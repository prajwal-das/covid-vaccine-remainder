import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyImageComponent } from './hy-image.component';

describe('HyImageComponent', () => {
  let component: HyImageComponent;
  let fixture: ComponentFixture<HyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
