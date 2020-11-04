import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Veterinarian} from '../../shared/domain/veterinarian';

@Component({
  selector: 'app-veterinarian-sheet',
  template: `
    <mat-card *ngIf="veterinarian">
      <mat-card-header>
        <mat-card-title><i>#{{ veterinarian.id }} - </i>{{ veterinarian.firstname }} {{ veterinarian.lastname }}</mat-card-title>
      </mat-card-header>
      <mat-card-actions align="end">
        <button mat-mini-fab color="primary" [routerLink]="['view',veterinarian.id]">
          <mat-icon>visibility</mat-icon>
        </button>
        <button class="mx-2" mat-mini-fab color="primary" [routerLink]="['edit',veterinarian.id]">
          <mat-icon>create</mat-icon>
        </button>
        <button mat-mini-fab color="warn" (click)="delete()">
          <mat-icon>delete_forever</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
  ]
})
export class VeterinarianSheetComponent implements OnInit {
  @Input() veterinarian: Veterinarian | undefined;
  @Output() deleteEvent = new EventEmitter<Veterinarian>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteEvent.emit(this.veterinarian);
  }

}
