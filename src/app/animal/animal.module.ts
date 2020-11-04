import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalSheetComponent } from './animal-sheet/animal-sheet.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';


@NgModule({
  declarations: [AnimalSheetComponent, AnimalListComponent, AnimalFormComponent, AnimalDetailsComponent, AnimalEditComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AnimalModule { }
