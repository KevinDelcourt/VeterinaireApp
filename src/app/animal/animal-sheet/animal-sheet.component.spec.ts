import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSheetComponent } from './animal-sheet.component';

describe('AnimalSheetComponent', () => {
  let component: AnimalSheetComponent;
  let fixture: ComponentFixture<AnimalSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
