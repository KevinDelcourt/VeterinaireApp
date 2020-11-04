import { Component, OnInit } from '@angular/core';
import {Veterinarian} from '../../shared/domain/veterinarian';
import {VeterinariansService} from '../../shared/veterinarians.service';

@Component({
  selector: 'app-veterinarian-list',
  template: `
    <h1>Veterinarians</h1>
    <router-outlet></router-outlet>
    <div class="row">
      <app-veterinarian-form [veterinarian]="newVet" (submitEvent)="createVeterinarian($event)" class="col-sm-5 col-md-4 col-lg-3 col-xl-2">New veterinarian</app-veterinarian-form>
      <div class="row col-sm-7 col-md-8 col-lg-9 col-xl-10">
        <app-veterinarian-sheet *ngFor="let vet of veterinarians" [veterinarian]="vet" (deleteEvent)="deleteVeterinarian($event)" class="col-md-6 col-lg-4 col-xl-3"></app-veterinarian-sheet>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class VeterinarianListComponent implements OnInit {
  veterinarians: Veterinarian[];
  newVet: Veterinarian;

  constructor(private veterinariansService: VeterinariansService) {
    this.veterinarians = [];
    this.newVet = {firstname: '', id: 0, lastname: ''};
  }

  ngOnInit(): void {
    this.updateList();
  }

  updateList(): void {
    this.veterinariansService.readAll(vets => this.veterinarians = vets);
  }

  createVeterinarian(vet: Veterinarian): void {
    this.veterinariansService.create(vet);
    this.newVet = {firstname: '', id: 0, lastname: ''};
    this.updateList();
  }

  deleteVeterinarian(vet: Veterinarian): void {
    this.veterinariansService.destroy(vet.id);
    this.updateList();
  }
}
