import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HyAtUsernameComponent} from './hy-at-username.component';

describe('HyAtUsernameComponent', () => {
  let component: HyAtUsernameComponent;
  let fixture: ComponentFixture<HyAtUsernameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HyAtUsernameComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyAtUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
