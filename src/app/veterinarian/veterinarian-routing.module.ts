import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VeterinarianListComponent} from './veterinarian-list/veterinarian-list.component';

const routes: Routes = [{ path: '', component: VeterinarianListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinarianRoutingModule { }
