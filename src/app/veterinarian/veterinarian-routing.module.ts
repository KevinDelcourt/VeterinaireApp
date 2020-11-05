import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VeterinarianListComponent} from './veterinarian-list/veterinarian-list.component';
import {VeterinarianDetailsComponent} from './veterinarian-details/veterinarian-details.component';
import {VeterinarianEditComponent} from './veterinarian-edit/veterinarian-edit.component';
import {VeterinarianResolverService} from './veterinarian-resolver.service';

const routes: Routes = [{ path: '', component: VeterinarianListComponent, children: [
    {
      path: 'view/:id',
      component: VeterinarianDetailsComponent,
      resolve: {
        veterinarian: VeterinarianResolverService
      }
    },
    {
      path: 'edit/:id',
      component: VeterinarianEditComponent,
      resolve: {
        veterinarian: VeterinarianResolverService
      }
    }
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinarianRoutingModule { }
