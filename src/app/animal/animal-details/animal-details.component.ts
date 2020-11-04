import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../../shared/domain/animal';
import {AnimalsService} from '../../shared/animals.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    'mat-card {margin-bottom: 2em; margin-left: 0}'
  ]
})
export class AnimalDetailsComponent implements OnInit {
  animal: Animal | undefined;

  constructor(private animalService: AnimalsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if ( params.get('id') ){
        this.animalService.readById(
          // @ts-ignore
          +params.get('id'),
          animal => this.animal = animal
        );
      }
    });
  }

}
