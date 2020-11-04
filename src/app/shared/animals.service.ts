import {Injectable} from '@angular/core';
import {Animal} from './domain/animal';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) {
  }

  create(animal: Animal): void {
    this.http.post(environment.api + 'animals/', animal);
  }

  readAll(callback: (animals: Animal[]) => void): void {
    this.http.get<Animal[]>(environment.api + 'animals/')
      .subscribe({
        next: callback
      });
  }

  update(animal: Animal): void {
    this.http.put(environment.api + 'animals/' + animal.id, animal);
  }

  destroy(id: number): void {
    this.http.delete(environment.api + 'animals/' + id)
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }
}
