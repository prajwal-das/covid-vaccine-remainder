import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HyUserProfileButtonComponent} from './hy-user-profile-button.component';

describe('HyUserProfileButtonComponent', () => {
  let component: HyUserProfileButtonComponent;
  let fixture: ComponentFixture<HyUserProfileButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HyUserProfileButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyUserProfileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
