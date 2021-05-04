import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HyGroupChatComponent } from './hy-group-chat.component';

describe('HyGroupChatComponent', () => {
  let component: HyGroupChatComponent;
  let fixture: ComponentFixture<HyGroupChatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HyGroupChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyGroupChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
