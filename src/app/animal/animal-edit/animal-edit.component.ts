import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Animal} from '../../shared/domain/animal';
import {AnimalsService} from '../../shared/animals.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
  id: number;
  @Output() refreshEvent = new EventEmitter();

  constructor(private animalService: AnimalsService, private activatedRoute: ActivatedRoute) {this.id = -1; }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if ( params.get('id') ){
        // @ts-ignore
        this.id = +params.get('id');
        this.refresh();
      }
    });
  }

  updateAnimal(animal: Animal): void {
    this.animalService.update(animal).subscribe({
      next: () => this.refresh()
    });
  }

  refresh(): void {
    this.animalService.readById(
      this.id,
      animal => this.animal = animal
    );
    this.refreshEvent.emit();
  }
}
