import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyGroupsComponent } from './hy-groups.component';

describe('HyGroupsComponent', () => {
  let component: HyGroupsComponent;
  let fixture: ComponentFixture<HyGroupsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
