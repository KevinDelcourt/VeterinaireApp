import { Component, OnInit } from '@angular/core';
import {Veterinarian} from '../../shared/domain/veterinarian';
import {VeterinariansService} from '../../shared/veterinarians.service';

@Component({
  selector: 'app-veterinarian-list',
  template: `
    <h1>Veterinarians</h1>
    <div class="row">
      <mat-card *ngFor="let veterinarian of veterinarians">{{ veterinarian.firstname }} {{ veterinarian.lastname }}</mat-card>
    </div>
  `,
  styles: [
  ]
})
export class VeterinarianListComponent implements OnInit {
  veterinarians: Veterinarian[];
  constructor(private veterinariansService: VeterinariansService) {
    this.veterinarians = [];
  }

  ngOnInit(): void {
    this.veterinariansService.readAll(vets => this.veterinarians = vets);
  }

}
