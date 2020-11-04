import { Component, OnInit } from '@angular/core';
import {Veterinarian} from '../../shared/domain/veterinarian';
import {VeterinariansService} from '../../shared/veterinarians.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-veterinarian-edit',
  template: `
    <app-veterinarian-form *ngIf="vet" [veterinarian]="vet" (submitEvent)="updateVet($event)" class="container">Edit {{ vet.firstname }} {{ vet.lastname }}</app-veterinarian-form>
  `,
  styles: [
  ]
})
export class VeterinarianEditComponent implements OnInit {
  vet: Veterinarian | undefined;
  id: number;

  constructor(private veterinarianService: VeterinariansService, private activatedRoute: ActivatedRoute) {this.id = -1; }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if ( params.get('id') ){
        // @ts-ignore
        this.id = +params.get('id');
        this.refresh();
      }
    });
  }

  updateVet(veterinarian: Veterinarian): void{
    if (this.vet) {
      veterinarian.id = this.vet.id;
      this.veterinarianService.update(veterinarian).subscribe({
        next: () => this.refresh()
      });
    }
  }

  refresh(): void {
    this.veterinarianService.readById(
      this.id,
      veterinarian => this.vet = veterinarian
    );
  }
}
