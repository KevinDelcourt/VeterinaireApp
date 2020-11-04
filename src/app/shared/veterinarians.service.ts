import {Injectable, Pipe} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Veterinarian} from './domain/veterinarian';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinariansService {

  constructor(private http: HttpClient) {
  }

  create(vet: Veterinarian): void {
    this.http.post(environment.api + 'veterinarians/', vet)
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }

  readAll(callback: (vets: Veterinarian[]) => void): void {
    this.http.get<Veterinarian[]>(environment.api + 'veterinarians/')
      .subscribe({
        next: callback
      });
  }

  readById(id: number, callback: (vet: Veterinarian) => void): void {
    this.http.get<Veterinarian>(environment.api + 'veterinarians/' + id)
      .subscribe({
        next: callback
      });
  }

  // tslint:disable-next-line:no-any
  update(vet: Veterinarian): Observable<any> {
    return this.http.put(environment.api + 'veterinarians/' + vet.id, vet);
  }

  destroy(id: number): void {
    this.http.delete(environment.api + 'veterinarians/' + id)
      .subscribe({
        next: value => {
          console.log(value);
        }
      });
  }
}
