import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {AnimalDetailsComponent} from './animal-details/animal-details.component';
import {AnimalEditComponent} from './animal-edit/animal-edit.component';
import {AnimalResolverService} from './animal-resolver.service';

const routes: Routes = [
    {
      path: '',
      component: AnimalListComponent,
      children: [
        {
          path: 'view/:id',
          component: AnimalDetailsComponent,
          resolve: {
            animal: AnimalResolverService
          }
        },
        {
          path: 'edit/:id',
          component: AnimalEditComponent,
          resolve: {
            animal: AnimalResolverService
          }
        }
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
