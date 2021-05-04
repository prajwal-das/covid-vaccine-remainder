import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HyLoaderComponent} from './hy-loader.component';

describe('LoaderComponent', () => {
  let component: HyLoaderComponent;
  let fixture: ComponentFixture<HyLoaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HyLoaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
