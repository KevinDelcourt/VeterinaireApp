import {Injectable, Pipe} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Veterinarian} from './domain/veterinarian';
import {Observable} from 'rxjs';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class VeterinariansService extends CrudService<Veterinarian>{

  constructor(http: HttpClient) {
    super(http, 'veterinarians/');
  }

}
