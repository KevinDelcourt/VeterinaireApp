import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarianRoutingModule } from './veterinarian-routing.module';
import { VeterinarianListComponent } from './veterinarian-list/veterinarian-list.component';
import {MatCardModule} from '@angular/material/card';
import { VeterinarianSheetComponent } from './veterinarian-sheet/veterinarian-sheet.component';
import { VeterinarianDetailsComponent } from './veterinarian-details/veterinarian-details.component';
import { VeterinarianEditComponent } from './veterinarian-edit/veterinarian-edit.component';
import { VeterinarianFormComponent } from './veterinarian-form/veterinarian-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [VeterinarianListComponent, VeterinarianSheetComponent, VeterinarianDetailsComponent, VeterinarianEditComponent, VeterinarianFormComponent],
  imports: [
    CommonModule,
    VeterinarianRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class VeterinarianModule { }
