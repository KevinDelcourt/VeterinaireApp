import {Component, OnInit} from '@angular/core';
import {AnimalsService} from '../../shared/animals.service';
import {Animal} from '../../shared/domain/animal';
import {Species} from '../../shared/domain/species.enum';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-animals-list',
  template: `
    <h1>Animals</h1>
    <router-outlet></router-outlet>
    <div class="row">
      <app-animal-form [animal]="newAnimal" class="col-sm-5 col-md-4 col-lg-3 col-xl-2" (submitEvent)="createAnimal($event)">New animal</app-animal-form>
      <div class="row col-sm-7 col-md-8 col-lg-9 col-xl-10">
        <app-animal-sheet *ngFor="let animal of animals" [animal]="animal" class="col-md-6 col-lg-4 col-xl-3" (deleteEvent)="deleteAnimal($event)"></app-animal-sheet>
      </div>
    </div>
  `,
  styles: [
    ''
  ]
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];
  newAnimal: Animal;

  constructor(private animalService: AnimalsService, private activatedRoute: ActivatedRoute) {
    this.animals = [];
    this.newAnimal = {comment: '', id: 0, name: '', species: Species.Horse, veterinarian: 0};
  }

  ngOnInit(): void {
    this.updateList();
  }

  deleteAnimal(animal: Animal): void {
    this.animalService.destroy(animal.id);
    this.updateList();
  }

  createAnimal(animal: Animal): void {
    this.animalService.create(animal);
    this.newAnimal = {comment: '', id: 0, name: '', species: Species.Horse, veterinarian: 0};
    this.updateList();
  }

  updateList(): void {
    this.animalService.readAll((animals: Animal[]) => {
      this.animals = animals;
    });
  }
}
