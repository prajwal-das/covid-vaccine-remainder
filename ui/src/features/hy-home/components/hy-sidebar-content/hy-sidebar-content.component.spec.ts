import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HySidebarContentComponent} from './hy-sidebar-content.component';

describe('HySidebarContentComponent', () => {
  let component: HySidebarContentComponent;
  let fixture: ComponentFixture<HySidebarContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HySidebarContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HySidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
