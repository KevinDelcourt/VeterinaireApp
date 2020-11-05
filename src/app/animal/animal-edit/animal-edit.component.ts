import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Animal} from '../../shared/domain/animal';
import {AnimalsService} from '../../shared/animals.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-animal-edit',
  template: `
    <app-animal-form *ngIf="animal" [animal]="animal" (submitEvent)="updateAnimal($event)" class="container">Edit {{ animal.name }}</app-animal-form>
  `,
  styles: [
  ]
})
export class AnimalEditComponent implements OnInit {
  animal: Animal | undefined;

  constructor(private animalService: AnimalsService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.animal = data.animal;
    });
  }

  updateAnimal(animal: Animal): void {
    this.animalService.update(animal, animal.id).subscribe({
      next: () => {
        this.router.navigateByUrl('animals').then(r => this.animalService.dataChanged.next('updated'));
      }
    });
  }
}
