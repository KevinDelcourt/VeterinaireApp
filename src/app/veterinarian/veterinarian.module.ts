import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VeterinarianListComponent } from './veterinarian-list/veterinarian-list.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [VeterinarianListComponent],
  imports: [
    CommonModule,
    VeterinarianRoutingModule,
    MatCardModule
  ]
})
export class VeterinarianModule { }
