import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Veterinarian} from '../shared/domain/veterinarian';
import {Observable} from 'rxjs';
import {VeterinariansService} from '../shared/veterinarians.service';

@Injectable({
  providedIn: 'root'
})
export class VeterinarianResolverService implements Resolve<Veterinarian>{

  constructor(private service: VeterinariansService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Veterinarian> | Promise<Veterinarian> | Veterinarian {
    // @ts-ignore
    return this.service.readById(+route.paramMap.get('id'));
  }
}
