import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyLoginSignupComponent } from './hy-login-signup.component';

describe('HyLoginSignupComponent', () => {
  let component: HyLoginSignupComponent;
  let fixture: ComponentFixture<HyLoginSignupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyLoginSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
