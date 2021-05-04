import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyFeedComponent } from './hy-feed.component';

describe('HyFeedComponent', () => {
  let component: HyFeedComponent;
  let fixture: ComponentFixture<HyFeedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
