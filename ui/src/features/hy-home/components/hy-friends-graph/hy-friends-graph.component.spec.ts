import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyFriendsGraphComponent } from './hy-friends-graph.component';

describe('HyFriendsGraphComponent', () => {
  let component: HyFriendsGraphComponent;
  let fixture: ComponentFixture<HyFriendsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyFriendsGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyFriendsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
