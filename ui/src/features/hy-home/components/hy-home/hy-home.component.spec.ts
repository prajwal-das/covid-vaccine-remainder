import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HyHomeComponent} from './hy-home.component';

describe('HomeComponent', () => {
  let component: HyHomeComponent;
  let fixture: ComponentFixture<HyHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
