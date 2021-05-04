import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyCreatePostComponent } from './hy-create-post.component';

describe('HyCreatePostComponent', () => {
  let component: HyCreatePostComponent;
  let fixture: ComponentFixture<HyCreatePostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyCreatePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
