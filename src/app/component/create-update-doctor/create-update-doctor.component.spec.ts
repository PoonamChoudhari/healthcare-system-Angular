import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDoctorComponent } from './create-update-doctor.component';

describe('CreateUpdateDoctorComponent', () => {
  let component: CreateUpdateDoctorComponent;
  let fixture: ComponentFixture<CreateUpdateDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
