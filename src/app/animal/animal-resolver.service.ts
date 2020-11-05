import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Animal} from '../shared/domain/animal';
import {Observable} from 'rxjs';
import {AnimalsService} from '../shared/animals.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalResolverService implements Resolve<Animal>{

  constructor(private service: AnimalsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animal> | Promise<Animal> | Animal {
    // @ts-ignore
    return this.service.readById(+route.paramMap.get('id'));
  }
}
