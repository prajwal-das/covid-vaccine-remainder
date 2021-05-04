import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HySelectFriendsComponent } from './hy-select-friends.component';

describe('HySelectFirendsComponent', () => {
  let component: HySelectFriendsComponent;
  let fixture: ComponentFixture<HySelectFriendsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HySelectFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HySelectFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
