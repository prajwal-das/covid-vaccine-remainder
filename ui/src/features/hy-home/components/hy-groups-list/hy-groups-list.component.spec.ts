import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyGroupsListComponent } from './hy-groups-list.component';

describe('HyGroupsListComponent', () => {
  let component: HyGroupsListComponent;
  let fixture: ComponentFixture<HyGroupsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyGroupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
