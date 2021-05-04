import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyGroupInfoComponent } from './hy-group-info.component';

describe('HyGroupInfoComponent', () => {
  let component: HyGroupInfoComponent;
  let fixture: ComponentFixture<HyGroupInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyGroupInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyGroupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
