import {Injectable} from '@angular/core';
import {Animal} from './domain/animal';
import {HttpClient} from '@angular/common/http';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService extends CrudService<Animal>{

  constructor(http: HttpClient) {
    super(http, 'animals/');
  }
}
