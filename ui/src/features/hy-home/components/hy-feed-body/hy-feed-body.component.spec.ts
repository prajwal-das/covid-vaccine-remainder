import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HyFeedBodyComponent} from './hy-feed-body.component';

describe('HyFeedBodyComponent', () => {
  let component: HyFeedBodyComponent;
  let fixture: ComponentFixture<HyFeedBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyFeedBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyFeedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
