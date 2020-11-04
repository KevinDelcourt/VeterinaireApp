import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Animal} from '../../shared/domain/animal';

@Component({
  selector: 'app-animal-sheet',
  template: `
    <mat-card *ngIf="animal">
      <mat-card-header>
        <mat-card-title><i>#{{ animal.id }} - </i>{{ animal.name }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Species: {{ animal.species }}<br>Comment: {{ animal.comment | trunc : 10 }}
        </p>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-mini-fab color="primary" [routerLink]="['view',animal.id]">
          <mat-icon>visibility</mat-icon>
        </button>
        <button class="mx-2" mat-mini-fab color="primary" [routerLink]="['edit',animal.id]">
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
export class AnimalSheetComponent implements OnInit {
  @Input() animal: Animal | undefined;
  @Output() deleteEvent = new EventEmitter<Animal>();

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(): void {
    this.deleteEvent.emit(this.animal);
  }

}
