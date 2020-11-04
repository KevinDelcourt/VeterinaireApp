import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Veterinarian} from '../../shared/domain/veterinarian';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-veterinarian-form',
  template: `
    <mat-card *ngIf="veterinarian">
      <mat-card-header>
        <mat-card-title><ng-content></ng-content></mat-card-title>
      </mat-card-header>
      <form [formGroup]="vetForm" (ngSubmit)="submitEvent.emit(vetForm.value)">
        <mat-card-content>
          <mat-form-field appearance="outline">
            <mat-label>First Name</mat-label>
            <input matInput formControlName="firstname">
            <mat-hint class="text-danger" *ngIf="vetForm.get('firstname').dirty && ( vetForm.get('firstname').errors?.required || vetForm.get('firstname').value.length > 24 )">Names must be between 1 and 24 characters</mat-hint>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Last Name</mat-label>
            <input matInput formControlName="lastname">
            <mat-hint class="text-danger" *ngIf="vetForm.get('lastname').dirty && ( vetForm.get('lastname').errors?.required || vetForm.get('lastname').value.length > 24 )">Names must be between 1 and 24 characters</mat-hint>
          </mat-form-field>
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-mini-fab color="primary" type="submit" [disabled]="!vetForm.valid">
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
export class VeterinarianFormComponent implements OnInit, OnChanges {
  @Input() veterinarian: Veterinarian | undefined;
  @Output() submitEvent = new EventEmitter<Veterinarian>();

  vetForm: FormGroup;

  constructor() {
    this.vetForm = new FormGroup({
      firstname: new FormControl(this.veterinarian?.firstname, [
        Validators.required,
        Validators.maxLength(24)
      ]),
      lastname: new FormControl(this.veterinarian?.lastname, [
        Validators.required,
        Validators.maxLength(24)
      ]),
      id: new FormControl(this.veterinarian?.id)
    });
  }

  ngOnInit(): void {
    this.vetForm = new FormGroup({
      firstname: new FormControl(this.veterinarian?.firstname, [
        Validators.required,
        Validators.maxLength(24)
      ]),
      lastname: new FormControl(this.veterinarian?.lastname, [
        Validators.required,
        Validators.maxLength(24)
      ]),
      id: new FormControl(this.veterinarian?.id)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

}
