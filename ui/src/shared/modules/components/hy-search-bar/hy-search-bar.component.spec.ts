import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HySearchBarComponent} from './hy-search-bar.component';

describe('TopBarComponent', () => {
  let component: HySearchBarComponent;
  let fixture: ComponentFixture<HySearchBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HySearchBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HySearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
