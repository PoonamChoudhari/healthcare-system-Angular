import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotAvailabilityComponent } from './slot-availability.component';

describe('SlotAvailabilityComponent', () => {
  let component: SlotAvailabilityComponent;
  let fixture: ComponentFixture<SlotAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
