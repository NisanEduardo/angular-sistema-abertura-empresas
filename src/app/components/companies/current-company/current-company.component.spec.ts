import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCompanyComponent } from './current-company.component';

describe('CurrentCompanyComponent', () => {
  let component: CurrentCompanyComponent;
  let fixture: ComponentFixture<CurrentCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
