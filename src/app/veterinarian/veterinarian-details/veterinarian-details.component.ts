import { Component, OnInit } from '@angular/core';
import {Veterinarian} from '../../shared/domain/veterinarian';
import {VeterinariansService} from '../../shared/veterinarians.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Animal} from '../../shared/domain/animal';
import {AnimalsService} from '../../shared/animals.service';

@Component({
  selector: 'app-veterinarian-details',
  template: `
    <mat-card *ngIf="vet" class="container">
      <mat-card-title>
        <h2>Details of {{ vet.firstname }} {{ vet.lastname }}</h2>
      </mat-card-title>
      <mat-card-content>
        <div>
          Id : {{ vet.id }}
        </div>
        <div>
          First Name : {{ vet.firstname }}
        </div>
        <div>
          Last Name : {{ vet.lastname }}
        </div>
        <div>
          Animals : <button *ngFor="let animal of animals" mat-button color="accent" [routerLink]="['/animals','view',animal.id]">{{ animal.name }}</button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    'mat-card {margin-bottom: 2em; margin-left: 0}'
  ]
})
export class VeterinarianDetailsComponent implements OnInit {
  vet: Veterinarian | undefined;
  animals: Animal[];

  constructor(private activatedRoute: ActivatedRoute, private animalsService: AnimalsService) {
    this.animals = [];
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.vet = data.veterinarian;
      if (this.vet) {
        // @ts-ignore
        this.animalsService.readAll().subscribe(animals => this.animals = animals.filter(a => a.veterinarian === this.vet.id));
      }
    });
  }

}
