import { Component, OnInit } from '@angular/core';
import {Veterinarian} from '../../shared/domain/veterinarian';
import {VeterinariansService} from '../../shared/veterinarians.service';
import {ActivatedRoute, ParamMap, Router, RouterModule} from '@angular/router';

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

  constructor(private veterinarianService: VeterinariansService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.vet = data.veterinarian;
    });
  }

  updateVet(veterinarian: Veterinarian): void{
    if (this.vet) {
      this.veterinarianService.update(veterinarian, this.vet.id).subscribe({
        next: () => this.router.navigateByUrl('veterinarians').then(() => this.veterinarianService.dataChanged.next('updated'))
      });
    }
  }
}
