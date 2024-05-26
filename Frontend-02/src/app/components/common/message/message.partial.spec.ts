import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePartial } from './message.partial';

describe('MessagePartial', () => {
  let component: MessagePartial;
  let fixture: ComponentFixture<MessagePartial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagePartial]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagePartial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
