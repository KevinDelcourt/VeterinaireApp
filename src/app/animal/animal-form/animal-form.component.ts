import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from '../../shared/domain/animal';

@Component({
  selector: 'app-animal-form',
  template: `
    <mat-card *ngIf="animal">
      <form (submit)="submitEvent.emit(animal)">
        <mat-card-content>
          <input placeholder="Name" name="name" [(ngModel)]="animal.name"><br>
          <select [(ngModel)]="animal.species" name="species">
            <option value="Horse">Horse</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select><br>
          <input placeholder="Comment" name="species" [(ngModel)]="animal.comment">
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-mini-fab color="primary" type="submit">
            <mat-icon>add</mat-icon>
          </button>
        </mat-card-actions>
      </form>
    </mat-card>
  `,
  styles: [
  ]
})
export class AnimalFormComponent implements OnInit {
  @Input() animal: Animal | undefined;
  @Output() submitEvent = new EventEmitter<Animal>();

  constructor() { }

  ngOnInit(): void {
  }
}
