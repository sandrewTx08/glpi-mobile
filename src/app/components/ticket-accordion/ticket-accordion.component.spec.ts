import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TicketAccordionComponent } from './ticket-item-accordion.component';

describe('TicketAccordionComponent', () => {
  let component: TicketAccordionComponent;
  let fixture: ComponentFixture<TicketAccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TicketAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
