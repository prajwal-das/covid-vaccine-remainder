import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyGraphViewComponent } from './hy-graph-view.component';

describe('HyGraphViewComponent', () => {
  let component: HyGraphViewComponent;
  let fixture: ComponentFixture<HyGraphViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyGraphViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
