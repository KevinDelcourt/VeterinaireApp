import {Injectable} from '@angular/core';
import {Animal} from './domain/animal';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) {
  }

  create(animal: Animal): void {
    this.http.post(environment.api + 'animals/', animal)
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }

  readAll(callback: (animals: Animal[]) => void): void {
    this.http.get<Animal[]>(environment.api + 'animals/')
      .subscribe({
        next: callback
      });
  }

  readById(id: number, callback: (animal: Animal) => void): void {
    this.http.get<Animal>(environment.api + 'animals/' + id)
      .subscribe({
        next: callback
      });
  }

  // tslint:disable-next-line:no-any
  update(animal: Animal): Observable<any> {
    return this.http.put(environment.api + 'animals/' + animal.id, animal);
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
