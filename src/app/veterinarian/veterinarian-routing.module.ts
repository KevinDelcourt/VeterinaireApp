import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VeterinarianListComponent} from './veterinarian-list/veterinarian-list.component';
import {VeterinarianDetailsComponent} from './veterinarian-details/veterinarian-details.component';
import {VeterinarianEditComponent} from './veterinarian-edit/veterinarian-edit.component';

const routes: Routes = [{ path: '', component: VeterinarianListComponent, children: [
    {
      path: 'view/:id',
      component: VeterinarianDetailsComponent
    },
    {
      path: 'edit/:id',
      component: VeterinarianEditComponent
    }
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinarianRoutingModule { }
