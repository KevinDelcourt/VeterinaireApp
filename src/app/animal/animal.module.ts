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


@NgModule({
  declarations: [AnimalSheetComponent, AnimalListComponent, AnimalFormComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    FormsModule
  ]
})
export class AnimalModule { }
