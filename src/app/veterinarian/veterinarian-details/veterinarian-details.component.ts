import { Component, OnInit } from '@angular/core';
import {Veterinarian} from '../../shared/domain/veterinarian';
import {VeterinariansService} from '../../shared/veterinarians.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    'mat-card {margin-bottom: 2em; margin-left: 0}'
  ]
})
export class VeterinarianDetailsComponent implements OnInit {
  vet: Veterinarian | undefined;

  constructor(private veterinarianService: VeterinariansService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if ( params.get('id') ){
        this.veterinarianService.readById(
          // @ts-ignore
          +params.get('id'),
          veterinarian => this.vet = veterinarian
        );
      }
    });
  }

}
