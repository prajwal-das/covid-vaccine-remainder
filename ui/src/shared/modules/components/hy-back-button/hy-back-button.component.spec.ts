import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HyBackButtonComponent} from './hy-back-button.component';

describe('HyBackButtonComponent', () => {
  let component: HyBackButtonComponent;
  let fixture: ComponentFixture<HyBackButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HyBackButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
