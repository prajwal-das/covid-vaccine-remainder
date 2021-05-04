import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyFriendsComponent } from './hy-friends.component';

describe('HyFriendsComponent', () => {
  let component: HyFriendsComponent;
  let fixture: ComponentFixture<HyFriendsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
