import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinarianSheetComponent } from './veterinarian-sheet.component';

describe('VeterinarianSheetComponent', () => {
  let component: VeterinarianSheetComponent;
  let fixture: ComponentFixture<VeterinarianSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinarianSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinarianSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
