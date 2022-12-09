import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryComplianceComponent } from './regulatory-compliance.component';

describe('RegulatoryComplianceComponent', () => {
  let component: RegulatoryComplianceComponent;
  let fixture: ComponentFixture<RegulatoryComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryComplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulatoryComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
