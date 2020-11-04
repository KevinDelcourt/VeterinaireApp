import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animal} from './domain/animal';
import {environment} from '../../environments/environment';
import {Veterinarian} from './domain/veterinarian';

@Injectable({
  providedIn: 'root'
})
export class VeterinariansService {

  constructor(private http: HttpClient) {
  }

  create(vet: Veterinarian): void {
    this.http.post(environment.api + 'veterinarians/', vet);
  }

  readAll(callback: (vets: Veterinarian[]) => void): void {
    this.http.get<Veterinarian[]>(environment.api + 'veterinarians/')
      .subscribe({
        next: callback
      });
  }

  update(vet: Veterinarian): void {
    this.http.put(environment.api + 'veterinarians/' + vet.id, vet);
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
