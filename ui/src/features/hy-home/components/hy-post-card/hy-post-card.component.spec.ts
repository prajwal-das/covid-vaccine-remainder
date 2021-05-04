import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyPostCardComponent } from './hy-post-card.component';

describe('HyPostCardComponent', () => {
  let component: HyPostCardComponent;
  let fixture: ComponentFixture<HyPostCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
