import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalListComponent} from './animal-list/animal-list.component';
import {AnimalDetailsComponent} from './animal-details/animal-details.component';
import {AnimalEditComponent} from './animal-edit/animal-edit.component';

const routes: Routes = [
    {
      path: '',
      component: AnimalListComponent,
      children: [
        {
          path: 'view/:id',
          component: AnimalDetailsComponent
        },
        {
          path: 'edit/:id',
          component: AnimalEditComponent
        }
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
