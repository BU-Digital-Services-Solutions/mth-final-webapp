import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryIntelligenceComponent } from './regulatory-intelligence.component';

describe('RegulatoryIntelligenceComponent', () => {
  let component: RegulatoryIntelligenceComponent;
  let fixture: ComponentFixture<RegulatoryIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryIntelligenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulatoryIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
