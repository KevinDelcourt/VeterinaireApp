import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from '../../shared/domain/animal';
import {VeterinariansService} from '../../shared/veterinarians.service';
import {Veterinarian} from '../../shared/domain/veterinarian';

@Component({
  selector: 'app-animal-form',
  template: `
    <mat-card *ngIf="animal">
      <mat-card-header>
        <mat-card-title><ng-content></ng-content></mat-card-title>
      </mat-card-header>
      <form #animalForm="ngForm" (ngSubmit)="submitEvent.emit(animal)">
        <mat-card-content>
          <mat-form-field hintLabel="Between 1 and 24 characters" appearance="outline">
            <mat-label>Name</mat-label>
            <input matInput id="name" name="name" [(ngModel)]="animal.name" required maxlength="24">
            <mat-hint align="end">{{ animal.name?.length || 0}}/24</mat-hint>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Species</mat-label>
            <mat-select [(ngModel)]="animal.species" name="species">
              <mat-option value="Horse">Horse</mat-option>
              <mat-option value="Dog">Dog</mat-option>
              <mat-option value="Cat">Cat</mat-option>
            </mat-select>
          </mat-form-field>
          <mat-form-field hintLabel="Max 512 characters" appearance="outline">
            <mat-label>Comment</mat-label>
            <textarea matInput name="comment" [(ngModel)]="animal.comment" maxlength="512"></textarea>
            <mat-hint align="end">{{ animal.comment?.length || 0}}/512</mat-hint>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Veterinarian</mat-label>
            <mat-select [(ngModel)]="animal.veterinarian" name="veterinarian">
              <mat-option *ngFor="let vet of veterinarians" [value]="vet.id">{{ vet.firstname }} {{ vet.lastname }}</mat-option>
            </mat-select>
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions align="end">
          <button [disabled]="!animalForm.form.valid" mat-mini-fab color="primary" type="submit">
            <mat-icon>done</mat-icon>
          </button>
        </mat-card-actions>
      </form>
    </mat-card>
  `,
  styles: [
    'mat-form-field { width: 100% }'
  ]
})
export class AnimalFormComponent implements OnInit {
  @Input() animal: Animal | undefined;
  @Output() submitEvent = new EventEmitter<Animal>();
  veterinarians: Veterinarian[];

  constructor(private veterinariansService: VeterinariansService) {
    this.veterinarians = [];
  }

  ngOnInit(): void {
    this.veterinariansService.readAll().subscribe({
      next: vets => this.veterinarians = vets
    });
    this.veterinariansService.dataChanged.subscribe({
      next: () => this.veterinariansService.readAll().subscribe({
        next: vets => this.veterinarians = vets
      })
    });
  }
}
