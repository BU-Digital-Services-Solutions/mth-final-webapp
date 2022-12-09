import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryWatchComponent } from './regulatory-watch.component';

describe('RegulatoryWatchComponent', () => {
  let component: RegulatoryWatchComponent;
  let fixture: ComponentFixture<RegulatoryWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulatoryWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulatoryWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
