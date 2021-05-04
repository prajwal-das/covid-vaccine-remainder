import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyGroupsCreateComponent } from './hy-groups-create.component';

describe('HyGroupsCreateComponent', () => {
  let component: HyGroupsCreateComponent;
  let fixture: ComponentFixture<HyGroupsCreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyGroupsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyGroupsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
