import {Component, OnInit} from '@angular/core';
import {AnimalsService} from '../../shared/animals.service';
import {Animal} from '../../shared/domain/animal';
import {Species} from '../../shared/domain/species.enum';

@Component({
  selector: 'app-animals-list',
  template: `
    <h1>Animals</h1>
    <div class="row">
      <app-animal-form [animal]="newAnimal" class="col-md-3"></app-animal-form>
      <app-animal-sheet *ngFor="let animal of animals" [animal]="animal" class="col-md-3" (deleteEvent)="deleteAnimal($event)"></app-animal-sheet>
    </div>
  `,
  styles: [
  ]
})
export class AnimalListComponent implements OnInit {
  animals: Animal[];
  newAnimal: Animal;

  constructor(private animalService: AnimalsService) {
    this.animals = [];
    this.newAnimal = {comment: '', id: 0, name: '', species: Species.Cat, veterinarian: 0};
  }

  ngOnInit(): void {
    this.animalService.readAll((animals: Animal[]) => {
      console.log(animals);
      this.animals = animals;
    });
  }

  deleteAnimal(animal: Animal): void {
    this.animalService.destroy(animal.id);
    this.ngOnInit();
  }
}
