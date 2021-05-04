import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyFriendCardComponent } from './hy-friend-card.component';

describe('HyFriendCardComponent', () => {
  let component: HyFriendCardComponent;
  let fixture: ComponentFixture<HyFriendCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyFriendCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyFriendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
