import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../../shared/domain/animal';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {VeterinariansService} from '../../shared/veterinarians.service';
import {Veterinarian} from '../../shared/domain/veterinarian';

@Component({
  selector: 'app-animal-details',
  template: `
    <mat-card *ngIf="animal" class="container">
      <mat-card-title>
        <h2>Details of {{ animal.name }}</h2>
      </mat-card-title>
      <mat-card-content>
        <div>
          Id : {{ animal.id }}
        </div>
        <div>
          Species : {{ animal.species }}
        </div>
        <div>
          Comment : {{ animal.comment }}
        </div>
        <div *ngIf="vet">
          Veterinarian : <button mat-button color="accent" [routerLink]="['/veterinarians','view',vet.id]">{{ vet.firstname }} {{ vet.lastname }}</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    'mat-card {margin-bottom: 2em; margin-left: 0}'
  ]
})
export class AnimalDetailsComponent implements OnInit {
  animal: Animal | undefined;
  vet: Veterinarian | undefined;

  constructor(private activatedRoute: ActivatedRoute, private veterinariansService: VeterinariansService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.animal = data.animal;
      this.veterinariansService.readById(this.animal?.veterinarian as number).subscribe(vet => this.vet = vet);
    });
  }

}
