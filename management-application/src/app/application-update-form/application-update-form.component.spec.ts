import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationUpdateFormComponent } from './application-update-form.component';

describe('ApplicationUpdateFormComponent', () => {
  let component: ApplicationUpdateFormComponent;
  let fixture: ComponentFixture<ApplicationUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationUpdateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
