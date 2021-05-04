import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HyAvatarComponent} from './hy-avatar.component';

describe('HyAvatarComponent', () => {
  let component: HyAvatarComponent;
  let fixture: ComponentFixture<HyAvatarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HyAvatarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
