import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyGroupsGraphComponent } from './hy-groups-graph.component';

describe('HyGroupsGraphComponent', () => {
  let component: HyGroupsGraphComponent;
  let fixture: ComponentFixture<HyGroupsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyGroupsGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyGroupsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
