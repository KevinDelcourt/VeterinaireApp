import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppHomeComponent} from './app-home/app-home.component';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent
  },
  {
    path: 'animals',
    loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule)
  },
  { path: 'veterinarians', loadChildren: () => import('./veterinarian/veterinarian.module').then(m => m.VeterinarianModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
