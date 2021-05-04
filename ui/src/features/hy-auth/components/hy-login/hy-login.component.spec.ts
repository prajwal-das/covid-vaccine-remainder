import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HyLoginComponent} from './hy-login.component';

describe('LoginComponent', () => {
  let component: HyLoginComponent;
  let fixture: ComponentFixture<HyLoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HyLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
